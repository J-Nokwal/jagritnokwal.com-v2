import groq from "groq";

export const projectsPageDataQuery = groq`{
  "featuredIds": *[_type == "settingsProjects"][0].featuredProjects[]._ref,

  "projects": *[
    _type == "project" &&
    visible == true
  ] | order(date desc) {
    _id,
    "slug": slug.current,
    title,
    description,
    date,

    "tags": tags[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
}`;

// where visible == true
// _id,publish,title,description,date,slug,repository,url,tags[],content, 
export const projectDataQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  description,
  date,
  repository,
  url,

  "slug": slug.current,

  "tags": tags[]->{
    _id,
    title,
    "slug": slug.current
  },
  "content": content[],
}`;

export const getAllProjectSlugsQuery = groq`*[_type == "project" && defined(slug.current) && visible == true]{
  "slug": slug.current
}`;