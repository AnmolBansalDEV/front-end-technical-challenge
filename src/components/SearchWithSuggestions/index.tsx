import FormControl from "@mui/joy/FormControl";
import Autocomplete from "@mui/joy/Autocomplete";
import { modelsResponse } from "../../api/mockedData";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const SearchWithSuggestions = () => {
  return (
    <>
        <FormControl className="w-full">
          <Autocomplete
            freeSolo
            clearOnEscape
            startDecorator={<MagnifyingGlassIcon className="w-4 h-4" />}
            placeholder="Find a model"
            options={modelsResponse.map((model) => model.model_name)}
          />
        </FormControl>
    </>
  );
};

export default SearchWithSuggestions;
