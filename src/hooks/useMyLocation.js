import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { currentLocationAtom } from "../atom/currentLocationAtom";

const useMyLocation = () => {
  const [myLocation, setMyLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const setCurrentLocation = useSetRecoilState(currentLocationAtom);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getGelocationSuccess,
        getGelocationFailed
      );
    }
    function getGelocationSuccess(position) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function getGelocationFailed() {
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
    }
  }, []);

  useEffect(() => {
    setCurrentLocation(myLocation);
  }, [myLocation, setCurrentLocation]);

  return { myLocation };
};

export default useMyLocation;
