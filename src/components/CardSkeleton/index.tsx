import { Card as MuiCard, CardContent, Skeleton, Typography } from "@mui/joy";
import { FC } from "react";

const CardSkeleton: FC = () => {
  return (
    <MuiCard variant="outlined" >
      <CardContent>
        <div className="w-full flex justify-between">
        <Typography level="h2" fontSize="md">
          <Skeleton>Yosemite National Park</Skeleton>
        </Typography>
        <Typography level="h2" fontSize="md">
          <Skeleton>Yosemite</Skeleton>
        </Typography>
        </div>
      </CardContent>
    </MuiCard>
  );
};

export default CardSkeleton;
