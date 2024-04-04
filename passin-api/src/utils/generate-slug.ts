export function slugify(text: string): string {
    return text
      .toLowerCase() // Converte para minúsculas
      .replace(/[^\w\s]/gi, '') // Remove símbolos
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .normalize('NFD') // Remove acentos
      .replace(/[\u0300-\u036f]/g, '');
};