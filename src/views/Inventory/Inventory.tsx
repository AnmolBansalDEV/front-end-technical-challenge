import { getModels } from "../../api/getModels";
import {
  CardContainer,
  Items,
  Filter,
  SearchWithSuggestions,
  CardSkeleton,
} from "../../components";
import { debounce } from "../../helpers";
import { useFilter, useGetData } from "../../hooks";

const Inventory = () => {
  const [isLoading, modelData] = useGetData(getModels);
  
  const cardData = (modelData as Record<string, unknown>[]).map((element) => {
    return {
      title: element.model_name,
      badgeText: element.model_type,
      id: element.sk,
    };
  }) as Items;
  const [filteredData, setFilterValue] = useFilter(
    cardData,
    (data) => data.badgeText
  );
  const [searchedData, setSearchValue] = useFilter(
    cardData,
    (data) => data.title
  );
  const renderData = [...new Set(filteredData)].filter((item) =>
    searchedData.includes(item)
  );
  return (
    <div className="flex flex-col px-4 gap-7 sm:px-10">
      <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
        <SearchWithSuggestions
          placeholder="Find a modal"
          onInput={debounce((value) => {
            console.log(value);
            setSearchValue(value);
          }, 300)}
        />
        <Filter
          placeholder="All"
          items={[
            { value: "regression", label: "Regression" },
            { label: "Classification", value: "classification" },
          ]}
          onItemSelect={(value) => {
            setFilterValue(value ?? "");
          }}
        />
      </div>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardContainer items={renderData as Items} />
      )}
    </div>
  );
};

export default Inventory;
