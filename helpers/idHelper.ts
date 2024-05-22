const ALLOWED_CHARS = /^[a-z0-9\s\-]$/;

export const getId = (text: string) => {
  return text
    ?.toLowerCase()
    .replace(/./g, (c) => (ALLOWED_CHARS.test(c) ? c : ""))
    .replace(/\s+/g, "-");
};
