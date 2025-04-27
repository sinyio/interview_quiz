import { IconWrapper } from '@/shared/ui/IconWrapper/ui/IconWrapper';
import { HTMLAttributes } from 'react';

export const Chat = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<IconWrapper {...props}>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.58073 16.6654C8.17121 17.4813 10.0008 17.7023 11.7398 17.2886C13.4788 16.8748 15.0129 15.8536 16.0655 14.4089C17.1182 12.9642 17.6202 11.191 17.4812 9.40887C17.3422 7.62675 16.5712 5.95288 15.3072 4.6889C14.0433 3.42492 12.3694 2.65395 10.5873 2.51492C8.80514 2.37589 7.03196 2.87794 5.58725 3.93061C4.14254 4.98328 3.12131 6.51733 2.70758 8.25633C2.29386 9.99533 2.51485 11.8249 3.33073 13.4154L1.66406 18.3321L6.58073 16.6654Z"
					stroke="#6A0BFF"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</IconWrapper>
	);
};
