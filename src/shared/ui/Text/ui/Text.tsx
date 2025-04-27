import { ReactNode } from 'react';
import { Pallete } from '@/shared/types/types';
import { TextVariant } from '../model/types';
import cn from 'classnames';
import styles from './Text.module.css';
import React from 'react';

export interface TextProps {
	variant: TextVariant;
	children: ReactNode;
	color?: Pallete;
	className?: string;
}

export const Text = ({
	variant = 'body1',
	color = 'black-900',
	children,
	className,
}: TextProps) => {
	const Tag = variant.startsWith('body') ? 'p' : variant;
	return React.createElement(
		Tag,
		{ className: cn(styles[variant], styles[color], className) },
		children,
	);
};
