import { useParams } from "react-router-dom";
import { GetterFunction, useGetData } from "../../hooks";
import { getAnalysis } from "../../api/getAnalysis";
import { Breadcrumbs, Card, CardContent, Link, Typography } from "@mui/joy";
import { FC } from "react";
import { BarGraph, BarGraphData, Spinner } from "../../components";

const Analysis: FC = () => {
  const { modelName } = useParams();
  const [isLoading, [analysisData]] = useGetData(
    getAnalysis as GetterFunction,
    modelName
  ) as [boolean, Record<string, unknown>[][] | null[]];
  
  if (!analysisData && !isLoading) {
    return (
      <Typography level="h1" fontSize={24}>
        Model not found
      </Typography>
    );
  }
  
  let newData: BarGraphData = [];
  if (analysisData) {
    newData = analysisData
      .slice(1)
      .map((x) => ({ ...x.value as Record<string, number>, origin: x.origin as string }));
  }


  return (
    <div className="flex flex-col gap-4 px-4 pb-2 sm:px-10">
      <Breadcrumbs separator="›" aria-label="breadcrumbs">
        <Link color="primary" href="/inventory">
          Models
        </Link>
        <Typography>{modelName}</Typography>
      </Breadcrumbs>
      <Card variant="outlined" className="relative" sx={{ height: "600px" }}>
        <Typography level="h1">{modelName}</Typography>
        {isLoading ? (
          <Spinner />
        ) : (
          <CardContent className="w-full h-full overflow-auto">
            <div className="w-full h-full min-w-[500px]">
              <BarGraph data={newData} />
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default Analysis;
