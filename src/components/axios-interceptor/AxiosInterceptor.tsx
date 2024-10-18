import axios, { AxiosResponse } from 'axios';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../constants';

console.log(BASE_API_URL);

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

function AxiosInterceptor({ children }: PropsWithChildren) {
  const [isSet, setIsSet] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const resInterceptor = (response: AxiosResponse) => {
      console.log(response);

      return response;
    };

    const errInterceptor = (error: any) => {
      if (error.response.status === 401) {
        navigate('/login');
      }

      return Promise.reject(error);
    };

    const interceptor = axiosInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    setIsSet(true);
    return () => axiosInstance.interceptors.response.eject(interceptor);
  }, [navigate]);

  return isSet && children;
}

export default AxiosInterceptor;
