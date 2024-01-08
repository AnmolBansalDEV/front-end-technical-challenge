import { Stack } from "@mui/joy";
import { Card, CardProps } from "..";
import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type Items = (CardProps & {
  id: string;
})[];

type Props = {
  items: Items;
  spacing?: number;
};

const CardContainer: FC<Props> = ({ items, spacing = 2 }) => {
  const navigate = useNavigate();
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const node = event.target as HTMLDivElement;
    const title: string | null =
      (node.querySelector("#card-description") as HTMLDivElement).innerText;
    if (title) {
      navigate(`/analysis/${title}`);
    }
  };
  return (
    <Stack spacing={spacing} onClick={handleClick}>
      {items.map(({ id, title, badgeText }) => (
        <Card key={id} title={title} badgeText={badgeText} />
      ))}
    </Stack>
  );
};

export type { Props as CardContainerProps, Items };
export default CardContainer;
