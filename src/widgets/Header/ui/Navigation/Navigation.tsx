import { Flex } from '@/shared/ui/Flex';
import { Text } from '@/shared/ui/Text';
import { NavLink } from 'react-router-dom';

const navigation = [
	{
		path: '/',
		name: 'База вопросов',
	},
	{
		path: '/',
		name: 'Тренажер',
	},
];

export const Navigation = () => {
	return (
		<Flex gap="20">
			{navigation.map(({ name, path }) => (
				<NavLink to={path} key={name}>
					<Text variant="body3-accent">{name}</Text>
				</NavLink>
			))}
		</Flex>
	);
};
