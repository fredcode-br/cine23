import { useState, useEffect } from 'react';
import ITitle from './Types/ITitle';

type Props = {
  data: ITitle | null;
  error: string | null;
  loading: boolean;
}

const useFetch = async (url: string) => {
    const [data, setData] = useState<Props>({ data: null, error: null, loading: true });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url);
                const result = await resp.json();
                setData({ data: result, error: null, loading: false });
            } catch (error) {
                setData({ data: null, error: 'Erro na requisição', loading: false });
            }
        };
    fetchData();
  }, [url]);

  return data;
};

export default useFetch;

