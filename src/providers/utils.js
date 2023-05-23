const dictThemes = [
  "styled-components",
  "localStorage",
  "mobile first",
  "tailwindcss",
  "typescript",
  "javascript",
  "@keyframes",
  "frontend",
  "backend",
  "express",
  "fastify",
  "android",
  "sqlite",
  "nodejs",
  "@media",
  "prisma",
  "clamp",
  "axios",
  "react",
  "knex",
  "html",
  "grid",
  "git",
  "css",
  "dom",
  "spa",
  "es6",
  "api",
  "rem",
  "sql",
];

function sorted(value1, value2, type = "incre") {
  if (type == "incre") {
    if (value1 < value2) return 1;
    if (value1 > value2) return -1;
    return 0;
  }
  if (value1 > value2) return 1;
  if (value1 < value2) return -1;
  return 0;
}

function tagsTitleGenerator({ name, description }) {
  let tags = [];
  if (!name) {
    name = "no resources";
  }
  if (!description) {
    description = "no resources";
  }
  dictThemes.map((theme) =>
    description.toLowerCase().includes(theme)
      ? (tags = [...tags, theme])
      : false
  );

  dictThemes.map((theme) =>
    name.toLowerCase().includes(theme) ? (tags = [...tags, theme]) : false
  );

  const uniqueTags = tags.filter((element, index) => {
    return tags.indexOf(element) === index;
  });

  return uniqueTags;
}

function isUplouded(project) {
  const { name, homepage, has_pages } = project;
  const existHomepage = homepage && homepage !== "";
  return has_pages || existHomepage;
}

export { sorted, tagsTitleGenerator, isUplouded };
