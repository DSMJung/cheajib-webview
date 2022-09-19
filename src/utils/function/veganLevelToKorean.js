export const veganLevelToKorean = (veganLevel) => {
  const veganKorea = {
    LACTO_OVO: "락토・오보",
    VEGAN: "비건",
    LACTO: "락토",
    PESCO: "페스코",
    POLLO: "폴로",
    FLEXITARIAN: "플렉시테리언",
  };

  return veganKorea[veganLevel];
};
