'use client';

import aspida from '@aspida/axios';
import axios from 'axios';
import { ReactNode, createContext, useContext, useMemo } from 'react';
import api from '@/api/$api';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
});
const apiType = api(aspida(axiosInstance));
type Api = typeof apiType;

type AxiosContextValue = {
  api?: Api;
};
const AxiosContext = createContext<AxiosContextValue>({});

type Props = {
  children: ReactNode;
};
export const AxiosProvider = ({ children }: Props) => {
  const apiClient = useMemo(() => {
    return api(aspida(axiosInstance));
  }, []);

  return (
    <AxiosContext.Provider value={{ api: apiClient }}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useApiClient = () => useContext(AxiosContext);
