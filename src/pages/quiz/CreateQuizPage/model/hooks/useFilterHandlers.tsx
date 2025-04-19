import { useFilter } from "./useFilter";

export const useFilterHandlers = () => {
  const { filter, updateFilter } = useFilter();

  const onChangeSkills = (skills: number[]) => {
    updateFilter({ ...filter, skills: skills });
  };

  const onChangeComplexity = (complexity?: number[]) => {
    updateFilter({ ...filter, complexity: complexity });
  };

  const onChangeCount = (count: number) => {
    updateFilter({ ...filter, count: count });
  };

  return { onChangeSkills, onChangeComplexity, onChangeCount };
};
