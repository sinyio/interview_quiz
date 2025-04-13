import { Filter } from "@/shared/ui/Filter";

interface ChooseComplexityProps {
  selectedComplexity: number[];
  onChange: (complexity?: number[]) => void;
}

const complexity = [
  { id: 1, title: "1-3", value: [1, 2, 3] },
  { id: 2, title: "4-6", value: [4, 5, 6] },
  { id: 3, title: "7-8", value: [7, 8] },
  { id: 4, title: "9-10", value: [9, 10] },
];

export const ChooseComplexity = ({
  selectedComplexity,
  onChange,
}: ChooseComplexityProps) => {
  const onChooseComplexity = (id: number) => {
    const newValues = complexity.find((item) => item.id === id)?.value || [];
    const isDataExist = selectedComplexity?.some((item) =>
      newValues.includes(item)
    );
    const updates = isDataExist
      ? (selectedComplexity || []).filter((item) => !newValues.includes(item))
      : [...(selectedComplexity || []), ...newValues];
    onChange(updates.length === 0 ? undefined : updates);
  };

  const preparedData = complexity.map((item) => ({
    id: item.id,
    title: item.title,
    isActive: selectedComplexity?.some((selectedItem) =>
      item.value.includes(selectedItem)
    ),
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
