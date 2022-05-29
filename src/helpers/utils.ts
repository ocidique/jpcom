export const isCurrent = ({ isCurrent }: any) => {
  return isCurrent
    ? {
        className:
          "font-mono text-orange-600 hover:text-orange-500 font-medium px-3 py-2 rounded-md text-2sm underline",
      }
    : {};
};

export const isPartiallyCurrent = ({ isPartiallyCurrent }: any) => {
  return isPartiallyCurrent
    ? {
        className:
          "font-mono text-orange-600 hover:text-orange-500 font-medium px-3 py-2 rounded-md text-2sm underline",
      }
    : {};
};
