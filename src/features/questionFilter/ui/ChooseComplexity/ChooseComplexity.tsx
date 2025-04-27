import { Filter } from '@/shared/ui/Filter';
import { useFilter } from '../../model/hooks/useFilter';
import { complexityRanges } from '../../model/constants';

export const ChooseComplexity = () => {
	const { filter, updateFilter } = useFilter();

	const onChangeComplexity = (complexity?: number[]) => {
		updateFilter({ ...filter, complexity: complexity });
	};

	const onChooseComplexity = (id: number) => {
		const range = complexityRanges.find((item) => item.id === id)?.value || [];
		const currentComplexity = filter.complexity || [];
		const isRangeSelected = range.some((item) => currentComplexity.includes(item));

		const updates = isRangeSelected
			? currentComplexity.filter((item) => !range.includes(item))
			: [...currentComplexity, ...range.filter((num) => !currentComplexity.includes(num))];

		onChangeComplexity(updates);
	};

	const preparedData = complexityRanges.map(({ id, title, value }) => ({
		id,
		title,
		isActive: filter.complexity?.some((selectedItem) => value.includes(selectedItem)) || false,
	}));

	return <Filter items={preparedData} onClick={onChooseComplexity} title="Уровень сложности" />;
};
