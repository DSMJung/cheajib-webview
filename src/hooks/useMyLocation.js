import { useEffect, useState } from "react";

const useMyLocation = () => {
  const [myLocation, setMyLocation] = useState({
    latitude: null,
    longitude: null,
  });

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

  return { myLocation };
};

export default useMyLocation;
