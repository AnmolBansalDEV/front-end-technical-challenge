import { useEffect, useState } from "react";
import { getModels } from "../api/getModels";

type ModelShape = {
  model_version: number;
  ts_start: number;
  ts_end: number;
  num_categorical: number;
  job_id: string;
  model_type: string;
  num_continuous: number;
  model_name: string;
  sk: string;
  ts_updated: number;
  pk?: string;
};

export const useModelData = () => {
  const [modelData, setModelData] = useState<ModelShape[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getModelData() {
      try {
        const { loading, data } = await getModels();
        setModelData(data);
        setIsLoading(loading);
      } catch (err) {
        console.error("error fetching model data", err);
      }
    }
    getModelData();
  }, []);
  return { isLoading, modelData };
};
