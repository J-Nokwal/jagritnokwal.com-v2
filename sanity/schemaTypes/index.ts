import { DocumentDefinition, type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { tag } from "./tag";
import { horizontalImageGroup } from "./objects/horizontalImageGroup";
import { inlineBadge } from "./objects/badge";
import settingsType from "./settings";
import settingsProjectsType from "./settings/projects";
import { inlineChip } from "./objects/chip";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    inlineChip,
    inlineBadge,
    project,
    tag,
    horizontalImageGroup,
    settingsType,
    settingsProjectsType,
  ],
};

export const settingsSchemaTypes:DocumentDefinition[] = [settingsType, settingsProjectsType];