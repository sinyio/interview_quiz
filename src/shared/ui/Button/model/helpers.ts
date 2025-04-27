import { ButtonVariant } from './types';

export const tagsByVariants: Record<ButtonVariant, 'button' | 'a'> = {
	primary: 'button',
	secondary: 'button',
	destructive: 'button',
	'link-purple': 'a',
};

export const getTagByVaraiant = (variant: ButtonVariant) => {
	return tagsByVariants[variant];
};
