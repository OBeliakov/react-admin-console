type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
    console.log(cls)
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([mod]) => mod),
  ].join(" ");
};
