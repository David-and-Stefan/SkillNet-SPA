import { useAuth0 } from '@auth0/auth0-react';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../constants';

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

function AxiosInterceptor({ children }: PropsWithChildren) {
  const { getAccessTokenSilently } = useAuth0();
  const [isSet, setIsSet] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = async (config: InternalAxiosRequestConfig<any>) => {
      const accessToken = await getAccessTokenSilently();
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    };

    const resInterceptor = (response: AxiosResponse) => {
      console.log(response);

      return response;
    };

    const errInterceptor = (error: AxiosError) => {
      console.log(error);

      if (error.response?.status === 401) {
        // navigate('/login');
      }

      return Promise.reject(error);
    };

    const axiosReqInterceptor =
      axiosInstance.interceptors.request.use(reqInterceptor);
    const axiosResInterceptor = axiosInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    setIsSet(true);
    return () => {
      axiosInstance.interceptors.request.eject(axiosReqInterceptor);
      axiosInstance.interceptors.response.eject(axiosResInterceptor);
    };
  }, [navigate]);

  return isSet && children;
}

export default AxiosInterceptor;
