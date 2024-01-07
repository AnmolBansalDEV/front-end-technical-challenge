import Select, { SelectStaticProps } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import IconButton from "@mui/joy/IconButton";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { FC, useRef, useState } from "react";

const Filter: FC = () => {
  const [value, setValue] = useState<string | null>("dog");
  const action: SelectStaticProps["action"] = useRef(null);
  return (
    <>
      <Select
        action={action}
        value={value}
        placeholder="All"
        startDecorator={<FunnelIcon className="w-4 h-4" />}
        onChange={(e, newValue) => setValue(newValue)}
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
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
        <Option value="fish">Fish</Option>
        <Option value="bird">Bird</Option>
      </Select>
    </>
  );
};

export default Filter;
