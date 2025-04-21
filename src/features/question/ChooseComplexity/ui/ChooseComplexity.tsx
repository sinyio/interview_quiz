import { Filter } from "@/shared/ui/Filter";

interface ChooseComplexityProps {
  selectedComplexity: number[] | null;
  onChange: (complexity?: number[]) => void;
}

const complexityRanges = [
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
    const range = complexityRanges.find((item) => item.id === id)?.value || [];
    const updates = selectedComplexity
      ? selectedComplexity.some((item) => range.includes(item))
        ? selectedComplexity.filter((item) => !range.includes(item))
        : [
            ...selectedComplexity,
            ...range.filter((num) => !selectedComplexity.includes(num)),
          ]
      : [...range];

    onChange(updates.length > 0 ? updates : undefined);
  };

  const preparedData = complexityRanges.map(({ id, title, value }) => ({
    id,
    title,
    isActive:
      selectedComplexity?.some((selectedItem) =>
        value.includes(selectedItem)
      ) || false,
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
