import { COMPLEXITY_LIST } from '@/entities/question';
import { FRONTEND_DEVELOPER_SPECIALIZATION_ID } from '@/entities/specialization';
import { useFilter } from '@/features/questionFilter';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

export const usePreparedFilters = () => {
	const skills = useAppSelector((state) => state.skills.skills);

	const { filter } = useFilter();

	const preparedFilters = {
		skills: filter.skills.length > 0 ? filter.skills : skills?.map((skill) => skill.id),
		complexity: filter.complexity.length > 0 ? filter.complexity : COMPLEXITY_LIST,
		limit: filter.count,
		specialization: FRONTEND_DEVELOPER_SPECIALIZATION_ID,
	};

	return { preparedFilters };
};
