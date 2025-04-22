import { Filter } from "@/shared/ui/Filter";
import { useFilter } from "../../model/hooks/useFilter";
import { useFilterHandlers } from "../../model/hooks/useFilterHandlers";
import { FRONTEND_DEVELOPER_SPECIALIZATION_ID } from "@/entities/specialization";
import { useGetSkillsQuery } from "@/entities/skill";

interface ChooseCategoriesProps {
  className?: string;
}

export const ChooseCategories = ({ className }: ChooseCategoriesProps) => {
  const { filter } = useFilter();
  const { onChangeSkills } = useFilterHandlers();

  const { data: skills } = useGetSkillsQuery({
    specializations: [FRONTEND_DEVELOPER_SPECIALIZATION_ID],
  });

  const onChooseCategories = (id: number) => {
    if (filter.skills?.includes(id)) {
      const filteredCategories = filter.skills.filter((skill) => skill !== id);
      onChangeSkills(filteredCategories);
    } else {
      onChangeSkills([...filter.skills, id]);
    }
  };

  const preparedData =
    skills?.data.map((skill) => ({
      id: skill.id,
      title: skill.title,
      imageSrc: skill.imageSrc,
      isActive: filter.skills?.includes(skill.id) || false,
    })) || [];

  return (
    <Filter
      items={preparedData}
      onClick={onChooseCategories}
      title="Категории вопросов"
      height={40}
      className={className}
    />
  );
};
