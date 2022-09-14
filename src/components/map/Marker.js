import { vegetarianLevelImage } from "../../assets/vegetarianLevel";
import "../../styles/mackerBox.css";

export const zoomOutMacker = (veganLevel) => {
  return `<div class="zoomOutMackerBox"><img src="${vegetarianLevelImage(
    veganLevel
  )}"></img></div>`;
};

export const zoomInMarker = (veganLevel, rastaurantName) => {
  return `<div class="zoomInMarkerBox"><div class="zoomInMarkerText">${rastaurantName}</div><img src=${vegetarianLevelImage(
    veganLevel
  )}></img></div>`;
};

export const selectMarker = (veganLevel, rastaurantName) => {
  return `<div class="zoomInMarkerBox"><div class="selectMarkerText">${rastaurantName}</div><img src=${vegetarianLevelImage(
    veganLevel
  )}></img></div>`;
};
