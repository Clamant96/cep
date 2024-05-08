import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cep } from '../../models/Cep';

const useCepService = (cep: string) => {
  const [address, setAddress] = useState<Cep | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        setLoading(true);

        const response = await axios.get<Cep>(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        setAddress(response.data);
        setLoading(false);

      } catch (error) {
        setError('Error fetching address');
        setLoading(false);

      }
    };

    if (cep.length === 8) { // Verifica se o CEP possui 8 dígitos antes de fazer a requisição
      fetchAddress();

    } else {
      setAddress(null);

    }
    
  }, [cep]);

  return { address, loading, error };
};

export default useCepService;
