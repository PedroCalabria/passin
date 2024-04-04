// src/utils/generate-slug.ts
function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export {
  slugify
};
