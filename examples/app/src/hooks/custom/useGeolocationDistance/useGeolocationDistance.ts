import { useState, useEffect } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export const useGeolocationDistance = (target: Coordinates) => {
  const [distance, setDistance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const R = 6371e3; // Earth radius in meters
        const dLat = ((target.latitude - pos.coords.latitude) * Math.PI) / 180;
        const dLon = ((target.longitude - pos.coords.longitude) * Math.PI) / 180;
        
        const a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos((pos.coords.latitude * Math.PI)/180) * Math.cos((target.latitude * Math.PI)/180) * Math.sin(dLon/2) * Math.sin(dLon/2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        setDistance(R * c);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [target.latitude, target.longitude]);

  return { distance, loading, error };
};