import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import useMyLocation from "../../hooks/useMyLocation";
import { selectMarker, zoomInMarker, zoomOutMacker } from "./Marker";
import Spinner from "../common/Spinner";
const Map = () => {
  const { myLocation } = useMyLocation();
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const selectMarkerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (myLocation.latitude && myLocation.longitude) {
      mapRef.current = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude
        ),
        zoomControl: false,
        maxZoom: 19,
        minZoom: 16,
        zoom: 17,
        disableDoubleClickZoom: true,
        disableDoubleTapZoom: true,
        mapDataControl: false,
      });

      window.naver.maps.Event.addListener(mapRef.current, "dragend", () => {
        console.log(mapRef.current.getCenter());
        //지도에 따른 식당 리스트 불러오
      });

      window.naver.maps.Event.addListener(
        mapRef.current,
        "zoom_changed",
        (zoom) => {
          markerRef.current.setIcon({
            content:
              zoom > 17
                ? zoomInMarker("vegan", "브롱스")
                : zoomOutMacker("vegan"),
            size: new window.naver.maps.Size(38, 58),
            anchor: new window.naver.maps.Point(19, 58),
          });
        }
      );
      window.naver.maps.Event.addListener(mapRef.current, "tilesloaded", () => {
        setLoading(false);
      });
    }
  }, [mapRef, myLocation]);

  useEffect(() => {
    markerRef.current = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(
        myLocation.latitude,
        myLocation.longitude
      ),
      map: mapRef.current,
      icon: {
        content: zoomOutMacker("vegan"),
        size: new window.naver.maps.Size(38, 58),
        anchor: new window.naver.maps.Point(19, 58),
      },
    });
  }, [myLocation]);

  useEffect(() => {
    function markerClickEvent(marker) {
      window.naver.maps.Event.addListener(marker, "click", (e) => {
        mapRef.current.morph(e?.coord, 18);
        selectMarkerRef.current = marker;

        if (!!selectMarkerRef.current) {
          selectMarkerRef.current.setIcon({
            content: zoomInMarker("vegan", "브롱스"),
            size: new window.naver.maps.Size(38, 58),
            anchor: new window.naver.maps.Point(19, 58),
          });
        }

        marker.setIcon({
          content: selectMarker("vegan", "브롱스"),
          size: new window.naver.maps.Size(38, 58),
          anchor: new window.naver.maps.Point(19, 58),
        });
        selectMarkerRef.current = marker;
      });
    }
    markerClickEvent(markerRef.current);
  }, [markerRef, myLocation]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <DefaultFitContainer id="map">
      <Spinner loading={loading}></Spinner>
    </DefaultFitContainer>
  );
};

export const DefaultFitContainer = styled.div`
  position: absolute !important;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Map;
