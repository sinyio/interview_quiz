import { Filter } from "@/shared/ui/Filter";

const mode = [
  { id: 1, title: "Повторение" },
  { id: 2, title: "Только новые" },
  { id: 3, title: "Случайные" },
];

export const ChooseMode = () => {
  const onChooseComplexity = () => {};

  const preparedData = mode.map((item) => ({
    id: item.id,
    title: item.title,
    isActive: false,
  }));

  return (
    <div>
      <Filter
        items={preparedData}
        onClick={onChooseComplexity}
        title="Уровень сложности"
      />
    </div>
  );
};
