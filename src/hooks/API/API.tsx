import { useState, useEffect } from 'react';
import axios from 'axios';

interface FetchDataResponse {
    data: any;
    isLoading: boolean;
    error: string | null;
}

const API = (url: string, interval: number): FetchDataResponse => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isFetching = false;

        const fetchData = async () => {
            if (isFetching) return;
            isFetching = true;
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get(url);
                setData(response.data);
                console.log(response.data);
                setIsLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Error fetching data");
                setIsLoading(false);
            }

            isFetching = false;
        };

        fetchData();
        const intervalId = setInterval(fetchData, interval);

        return () => clearInterval(intervalId);
    }, []);

    return { data, isLoading, error };
};

export default API;
