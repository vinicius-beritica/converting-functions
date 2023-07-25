export const lowerCaseFirst = (text: string): string => {
  const strFirstLower: string = text.charAt(0).toLowerCase() + text.slice(1);
  return strFirstLower;
};
