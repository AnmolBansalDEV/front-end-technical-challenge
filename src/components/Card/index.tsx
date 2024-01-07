import { Card as MuiCard } from "@mui/joy";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { FC } from "react";

type Props = {
  title: string;
  badgeText: string;
};

const Card: FC<Props> = ({ title, badgeText }) => {
  return (
    <MuiCard
      variant="outlined"
      orientation="horizontal"
      className="hover:border-blue-600"
    >
      <CardContent>
        <div className="w-full flex justify-between">
          <Typography level="title-lg" id="card-description">
            {title}
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            {badgeText}
          </Chip>
        </div>
      </CardContent>
    </MuiCard>
  );
};

export type { Props as CardProps };
export default Card;
