import vegan from "./vegan.png";
import lacto from "./lacto.png";
import lactoOvo from "./lactoOvo.png";
import pasco from "./pasco.png";
import pollo from "./pollo.png";
import flexitarian from "./flexitarian.png";

import shadowVegan from "./shadowVegan.png";
import shadowLacto from "./shadowLacto.png";
import shadowLactoOvo from "./shadowLactoOvo.png";
import shadowPasco from "./shadowPasco.png";
import shadowPollo from "./shadowPollo.png";
import shadowFlexitarian from "./shadowFlexitarian.png";

const levelImage = {
  vegan,
  shadowVegan,
  lacto,
  shadowLacto,
  lactoOvo,
  shadowLactoOvo,
  pasco,
  shadowPasco,
  pollo,
  shadowPollo,
  flexitarian,
  shadowFlexitarian,
};

export const vegetarianLevelImage = (levelName) => levelImage[levelName];
