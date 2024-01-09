import { useEffect, useState } from "react";

type GetterResponse = {
  loading: boolean;
  data: unknown;
};

export type GetterFunction = (...args: unknown[]) => Promise<GetterResponse>

export const useGetData = (
  getter: GetterFunction,
  ...params: unknown[]
) => {
  const [resData, setResData] = useState<unknown>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      try {
        const { loading, data } = await getter(...params);
        setResData(data);
        setIsLoading(loading);
      } catch (err) {
        setIsLoading(false);
        console.error("error fetching data", err);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [isLoading, resData] as const;
};
