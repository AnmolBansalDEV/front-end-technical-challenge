import {
  CardContainer,
  Items,
  Filter,
  SearchWithSuggestions,
} from "../../components";
import { useModelData } from "../../hooks/useModelData";

const Inventory = () => {
  const { isLoading, modelData } = useModelData();
  const cardData: Items = modelData.map((element) => {
    return {
      title: element.model_name,
      badgeText: element.model_type,
      id: element.sk,
    };
  });
  return (
    <div className="flex flex-col px-4 gap-7 sm:px-10">
      <div className="flex flex-wrap gap-4 items-center sm:flex-nowrap">
        <SearchWithSuggestions />
        <Filter />
      </div>
      {isLoading ? <h1>loading...</h1> : <CardContainer items={cardData} />}
    </div>
  );
};

export default Inventory;
