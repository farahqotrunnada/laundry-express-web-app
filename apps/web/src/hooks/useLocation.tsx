'use client';

import * as React from 'react';

export interface GeoLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
}

const useGeoLocation = () => {
  const [location, setLocation] = React.useState<GeoLocation | null>(null);

  React.useEffect(() => {
    let navigator: typeof window.navigator | null = null;

    if (typeof window !== 'undefined') {
      navigator = window.navigator;
    }

    const getLocation = () => {
      if (navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
            });
          },
          (error) => {
            console.log(error);
          }
        );
      }
    };

    getLocation();
  }, []);

  return location;
};

export default useGeoLocation;
