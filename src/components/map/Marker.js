import { vegetarianLevelImage } from "../../assets/vegetarianLevel";
import "../../styles/mackerBox.css";

export const zoomOutMacker = (veganLevel) => {
  return `<div class="zoomOutMackerBox"><img src="${vegetarianLevelImage(
    veganLevel
  )}"></img></div>`;
};

export const zoomInMarker = (veganLevel, restaurantName) => {
  return `<div class="zoomInMarkerBox"><div class="zoomInMarkerText">${restaurantName}</div><img src=${vegetarianLevelImage(
    veganLevel
  )}></img></div>`;
};

export const selectMarker = (veganLevel, restaurantName) => {
  return `<div class="zoomInMarkerBox"><div class="selectMarkerText">${restaurantName}</div><img src=${vegetarianLevelImage(
    veganLevel
  )}></img></div>`;
};
