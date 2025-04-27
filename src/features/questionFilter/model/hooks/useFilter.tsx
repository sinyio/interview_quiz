import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Filter {
	complexity: number[];
	count: number;
	skills: number[];
}

const DEFAULT_COUNT = 10;

export const useFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		if (!searchParams.has('count')) {
			setSearchParams({ count: String(DEFAULT_COUNT) }, { replace: true });
		}
	}, [searchParams, setSearchParams]);

	const filter: Filter = useMemo(() => {
		const complexity = searchParams.get('complexity')?.split(',').map(Number) ?? [];
		const count = Number(searchParams.get('count')) || DEFAULT_COUNT;
		const skills = searchParams.get('skills')?.split(',').map(Number) ?? [];

		return {
			complexity,
			count,
			skills,
		};
	}, [searchParams]);

	const updateFilter = (newFilter: Partial<Filter>) => {
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);

			if (newFilter.complexity && newFilter.complexity.length > 0) {
				newParams.set('complexity', newFilter.complexity.join(','));
			} else {
				newParams.delete('complexity');
			}

			if (newFilter.count && newFilter.count > 0) {
				newParams.set('count', String(newFilter.count));
			} else {
				newParams.delete('count');
			}

			if (newFilter.skills && newFilter.skills.length > 0) {
				newParams.set('skills', newFilter.skills.join(','));
			} else {
				newParams.delete('skills');
			}

			return newParams;
		});
	};

	return {
		filter,
		updateFilter,
	};
};
