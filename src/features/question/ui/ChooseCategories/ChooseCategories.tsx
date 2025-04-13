import { useGetSkillsQuery } from "@/entities/skill";
import { Filter } from "@/shared/ui/Filter";

interface ChooseCategoriesProps {
  selectedCategories: number[];
  onChange: (skills: number[]) => void;
  limit?: number;
  specialization: number;
}

export const ChooseCategories = ({
  selectedCategories,
  onChange,
  limit,
  specialization,
}: ChooseCategoriesProps) => {
  const { data: skills, isLoading } = useGetSkillsQuery({
    limit,
    specializations: [specialization],
  });

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
    skills?.data.map((skill) => ({
      id: skill.id,
      title: skill.title,
      imageSrc: skill.imageSrc,
      isActive: selectedCategories?.includes(skill.id),
    })) || [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Filter
        items={preparedData}
        onClick={onChooseCategories}
        title="Категории вопросов"
      />
    </div>
  );
};
