import FormControl from "@mui/joy/FormControl";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { FC, useState } from "react";
import { Input } from "@mui/joy";

type Props = {
  placeholder: string,
  onInput: (val: string) => void
};

const SearchBar: FC<Props> = ({ placeholder, onInput }) => {
  const [value, setValue] = useState('')
  return (
    <FormControl className="w-full">
      <Input
        placeholder={placeholder}
        variant="outlined"
        value={value}
        startDecorator={<MagnifyingGlassIcon className="w-4 h-4" />}
        onChange={(e) => {
          setValue(e.target.value)
          onInput(e.target.value)
        }}
      />
    </FormControl>
  );
};

export default SearchBar;
