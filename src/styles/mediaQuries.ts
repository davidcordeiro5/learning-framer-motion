type BreaksTypes = {
  mobileS: number;
  tablet: number;
  laptop: number;
};

export const breakpoints: BreaksTypes = {
  mobileS: 320,
  tablet: 768,
  laptop: 1024,
};

export const greaterThan = (key: keyof BreaksTypes) => {
  return (style: TemplateStringsArray | string) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export const lessThan = (key: keyof BreaksTypes) => {
  return (style: TemplateStringsArray | string) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

export const between = (min: keyof BreaksTypes, max: keyof BreaksTypes) => {
  return (style: TemplateStringsArray | string) =>
    `@media (min-width: ${breakpoints[min]}px)
      and (max-width: ${breakpoints[max]}px) { ${style} }`;
};
