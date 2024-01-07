import { Stack } from "@mui/joy";
import { Card, CardProps } from "..";
import { FC } from "react";

type Items = (CardProps & {
  id: string;
})[];

type Props = {
  items: Items;
  spacing?: number;
};

const CardContainer: FC<Props> = ({ items, spacing = 2 }) => {
  return (
    <Stack spacing={spacing}>
      {items.map(({ id, title, badgeText }) => (
        <Card key={id} title={title} badgeText={badgeText} />
      ))}
    </Stack>
  );
};

export type { Props as CardContainerProps, Items };
export default CardContainer;
