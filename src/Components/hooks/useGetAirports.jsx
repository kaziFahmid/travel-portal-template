import { useState, useEffect } from 'react';

const useGetAirports = (searchTerm) => {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAirports = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://flyway.api.flyfarint.com/v.1.0.0/AirMaterials/airports.php?search=${searchTerm||''}`);
        const data = await response.json();
        setAirports(data);
      } catch (error) {
        console.error('Error fetching airports:', error);
      } finally {
        setLoading(false);
      }
    };


      fetchAirports();
    
  }, [searchTerm]);

  return { airports, loading };
};

export default useGetAirports;
