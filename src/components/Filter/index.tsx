import Select, { SelectStaticProps } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import IconButton from "@mui/joy/IconButton";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { FC, useRef, useState } from "react";

type Item = {
  label: string;
  value: string;
};

type Props = {
  placeholder: string;
  items: Item[];
  onItemSelect: (item: string | null) => void;
};

const Filter: FC<Props> = ({ placeholder, items, onItemSelect }) => {
  const [value, setValue] = useState<string | null>("All");
  const action: SelectStaticProps["action"] = useRef(null);
  return (
    <Select
      action={action}
      value={value}
      placeholder={placeholder}
      startDecorator={<FunnelIcon className="w-4 h-4" />}
      onChange={(e, newValue) => {
        setValue(newValue);
        if (!newValue) {
          return;
        }
        onItemSelect(newValue);
      }}
      {...(value && {
        // display the button and remove select indicator
        // when user has selected a value
        endDecorator: (
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onMouseDown={(event) => {
              // don't open the popup when clicking on this button
              event.stopPropagation();
            }}
            onClick={() => {
              setValue(null);
              onItemSelect(null);
              action.current?.focusVisible();
            }}
          >
            <XMarkIcon className="w-4 h-4" />
          </IconButton>
        ),
        indicator: null,
      })}
      sx={{ minWidth: 160 }}
    >
      {items.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
};

export default Filter;
