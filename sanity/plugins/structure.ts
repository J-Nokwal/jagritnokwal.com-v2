
import { definePlugin, DocumentDefinition } from "sanity";
import { StructureResolver } from "sanity/structure";


export const appPlugin = definePlugin<{
  ommitDefts: DocumentDefinition[];
}>(({ ommitDefts }) => {
  return {
    name: "appPlugin",
    document: {
      // Hide 'Settings' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === "global") {
          return prev.filter((templateItem) => {
            return !ommitDefts.some(
              (def) => def.name === templateItem.templateId
            );
          });
        }

        return prev;
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (ommitDefts.some((def) => def.name === schemaType)) {
          return prev.filter(
            ({ action }) => action !== "duplicate" && action !== "delete"
          );
        }

        return prev;
      },
    },
  };
});

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list

// like how "Post" and "Author" is handled.
export const settingsStructure = ({
  settingsDefs,
  omitDefts,
}: {
  settingsDefs: DocumentDefinition[];
  omitDefts?: DocumentDefinition[];
}): StructureResolver => {
  return (S) => {
    // The `Settings` root list item
    const settingsListItems = // A singleton not using `documentListItem`, eg no built-in preview
      S.listItem()
        .title(settingsDefs[0].title || "Settings")
        .icon(settingsDefs[0].icon)
        .child(
          S.list()
            .title(settingsDefs[0].title || "Settings")
            .items(
              settingsDefs.map((typeDef) =>
                S.listItem()
                  .title(typeDef.title || "Settings")
                  .icon(typeDef.icon)
                  .child(
                    S.editor()
                      .id(typeDef.name)
                      .title(typeDef.title || "Settings")
                      .schemaType(typeDef.name)
                      .documentId(typeDef.name)
                  )
              )
            )
        );

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) =>
        settingsDefs.every((def) => def.name !== listItem.getId()) &&
        omitDefts?.every((def) => def.name !== listItem.getId())
    );

    return S.list()
      .title("Content")
      .items([settingsListItems, S.divider(), ...defaultListItems]);
  };
};
