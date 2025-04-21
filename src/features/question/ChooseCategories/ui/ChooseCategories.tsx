import { Skill } from "@/entities/skill";
import { Filter } from "@/shared/ui/Filter";

interface ChooseCategoriesProps {
  skills?: Skill[];
  selectedCategories: number[];
  onChange: (skills: number[]) => void;
}

export const ChooseCategories = ({
  skills,
  selectedCategories,
  onChange,
}: ChooseCategoriesProps) => {
  const onChooseCategories = (id: number) => {
    if (selectedCategories?.includes(id)) {
      const filteredCategories = selectedCategories.filter(
        (skill) => skill !== id
      );
      onChange(filteredCategories);
    } else {
      onChange([...selectedCategories, id]);
    }
  };

  const preparedData =
    skills?.map((skill) => ({
      id: skill.id,
      title: skill.title,
      imageSrc: skill.imageSrc,
      isActive: selectedCategories?.includes(skill.id) || false,
    })) || [];

  return (
    <div>
      <Filter
        items={preparedData}
        onClick={onChooseCategories}
        title="Категории вопросов"
        height={40}
      />
    </div>
  );
};
