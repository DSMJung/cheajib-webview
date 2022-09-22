import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import useMyLocation from "../../hooks/useMyLocation";
import { selectMarker, zoomInMarker, zoomOutMacker } from "./Marker";
import Spinner from "../common/Spinner";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteringAtom } from "../../atom/filteringAtom";
import { useQuery } from "react-query";
import queryKey from "../../utils/queryKey";
import { restaurentMapResource } from "../../utils/api/resource";
import { restaurentSelectAtom } from "../../atom/restaurentSelectAtom";
import { currentLocationAtom } from "../../atom/currentLocationAtom";

const Map = () => {
  const { myLocation } = useMyLocation();
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const selectMarkerRef = useRef();

  const [selectedMarker, setSelectedMarker] = useState({
    marker: null,
    restaurantName: "",
    level: "FLEXITAREAN",
  });

  const setCurrentLocation = useSetRecoilState(currentLocationAtom);
  const [location, setLocation] = useState(null);
  const filteringValue = useRecoilValue(filteringAtom);
  const mapKey = queryKey.restaurents.map(
    location?.x,
    location?.y,
    filteringValue.level,
    filteringValue.star
  );

  const [markers, setMarkers] = useState([]);
  const setSelectRestaurent = useSetRecoilState(restaurentSelectAtom);

  useEffect(() => {
    setSelectRestaurent("");
  }, []);

  const { data: mapRestaurents, isLoading: mapListLoding } = useQuery(
    mapKey,
    () => {
      if (location?.x && location.y) {
        return restaurentMapResource({
          level: filteringValue.level,
          star: filteringValue.star,
          x: location.x,
          y: location.y,
        });
      }
    }
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (myLocation.latitude && myLocation.longitude) {
      setLocation({ x: myLocation.latitude, y: myLocation.longitude });
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
        const changeLocation = mapRef.current.getCenter();
        setCurrentLocation({
          latitude: changeLocation.y,
          longitude: changeLocation.x,
        });
        setLocation({ x: changeLocation.y, y: changeLocation.x });
        //지도에 따른 식당 리스트 불러오
      });

      window.naver.maps.Event.addListener(mapRef.current, "tilesloaded", () => {
        setLoading(false);
      });
    }
  }, [mapRef, myLocation, setCurrentLocation]);

  useEffect(() => {
    markers.map((marker) => {
      marker.setMap(null);
    });

    mapRestaurents?.restaurants_list.map(
      ({ name, level, id, latitude, longitude }) => {
        const currentMarker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(latitude, longitude),
          map: mapRef.current,
          icon: {
            content:
              mapRef.current.getZoom() > 17
                ? zoomInMarker(level, name)
                : zoomOutMacker(level),
            size: new window.naver.maps.Size(38, 58),
            anchor: new window.naver.maps.Point(19, 58),
          },
        });

        setMarkers((state) => [...state, currentMarker]);

        window.naver.maps.Event.addListener(
          mapRef.current,
          "zoom_changed",
          (zoom) => {
            currentMarker.setIcon({
              content:
                zoom > 17 ? zoomInMarker(level, name) : zoomOutMacker(level),
              size: new window.naver.maps.Size(38, 58),
              anchor: new window.naver.maps.Point(19, 58),
            });
          }
        );

        function markerClickEvent(marker, level, restaurent_name, id) {
          window.naver.maps.Event.addListener(marker, "click", (e) => {
            mapRef.current.morph(e?.coord, 18);
            setSelectRestaurent(id);

            console.log(selectedMarker);

            if (selectedMarker.marker) {
              selectedMarker.marker.setIcon({
                content: zoomInMarker(
                  selectedMarker.level,
                  selectedMarker.restaurantName
                ),
                size: new window.naver.maps.Size(38, 58),
                anchor: new window.naver.maps.Point(19, 58),
              });
            }

            marker.setIcon({
              content: selectMarker(level, restaurent_name),
              size: new window.naver.maps.Size(38, 58),
              anchor: new window.naver.maps.Point(19, 58),
            });

            setSelectedMarker({
              level: level,
              marker: marker,
              restaurantName: restaurent_name,
            });
          });
        }

        markerClickEvent(currentMarker, level, name, id);
      }
    );
  }, [
    mapRestaurents,
    markerRef,
    myLocation,
    setSelectRestaurent,
    selectedMarker,
  ]);

  return (
    <DefaultFitContainer id="map">
      <Spinner loading={loading || mapListLoding}></Spinner>
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
