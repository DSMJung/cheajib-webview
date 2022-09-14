export const veganLevelToKorean = (veganLevel) => {
  const veganKorea = {
    lactoOvo: "락토・오보",
    vegan: "비건",
    lacto: "락토",
    pasco: "페스코",
    pollo: "폴로",
    flexitarian: "플렉시테리언",
  };

  return veganKorea[veganLevel];
};
