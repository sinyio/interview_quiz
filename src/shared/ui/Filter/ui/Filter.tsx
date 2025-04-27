import { Chip } from '@/shared/ui/Chip';
import styles from './Filter.module.css';

type Item = {
	id: number;
	title: string;
	imageSrc?: string | null;
	isActive: boolean;
};

export interface FilterProps {
	title: string;
	items: Item[];
	onClick: (id: number) => void;
	height?: number;
	className?: string;
}

export const Filter = ({ title, items, onClick, height, className }: FilterProps) => {
	return (
		<div className={className}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.list}>
				{items?.map((item) => (
					<Chip
						label={item.title}
						icon={item.imageSrc && <img src={item.imageSrc} alt={item.title} loading="lazy" />}
						isActive={item.isActive}
						onClick={() => onClick(item.id)}
						style={height ? { height: `${height}px` } : {}}
						key={item.id}
					/>
				))}
			</div>
		</div>
	);
};
