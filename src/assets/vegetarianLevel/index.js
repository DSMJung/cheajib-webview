import VEGAN from "./vegan.png";
import LACTO from "./lacto.png";
import LACTO_OVO from "./lactoOvo.png";
import PESCO from "./pasco.png";
import POLLO from "./pollo.png";
import FLEXITARIAN from "./flexitarian.png";

import SHADOW_VEGAN from "./shadowVegan.png";
import SHADOW_LACTO from "./shadowLacto.png";
import SHADOW_LACTO_OVO from "./shadowLactoOvo.png";
import SHADOW_PESCO from "./shadowPasco.png";
import SHADOW_POLLO from "./shadowPollo.png";
import SHADOW_FLEXITARIAN from "./shadowFlexitarian.png";

const levelImage = {
  VEGAN,
  SHADOW_VEGAN,
  LACTO,
  SHADOW_LACTO,
  LACTO_OVO,
  SHADOW_LACTO_OVO,
  PESCO,
  SHADOW_PESCO,
  POLLO,
  SHADOW_POLLO,
  FLEXITARIAN,
  SHADOW_FLEXITARIAN,
};
VEGAN.toString();

export const vegetarianLevelImage = (levelName) => levelImage[levelName];
