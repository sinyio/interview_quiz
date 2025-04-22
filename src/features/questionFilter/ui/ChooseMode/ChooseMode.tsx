import { Filter } from "@/shared/ui/Filter";
import { modes } from "../../model/constants";

export const ChooseMode = () => {
  const onChooseComplexity = () => {};

  const preparedData = modes.map((item) => ({
    id: item.id,
    title: item.title,
    isActive: false,
  }));

  return (
    <Filter
      items={preparedData}
      onClick={onChooseComplexity}
      title="Уровень сложности"
    />
  );
};
