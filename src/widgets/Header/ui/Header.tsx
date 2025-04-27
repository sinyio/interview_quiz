import { Logo } from '@/shared/ui/Logo/Logo';
import { Link } from 'react-router-dom';
import { Flex } from '@/shared/ui/Flex';
import { LoginButton } from '@/features/auth/login';
import { RegistrationButton } from '@/features/auth/registration';
import { Navigation } from './Navigation/Navigation';
import styles from './Header.module.css';
import { useScreenSize } from '@/shared/hooks/useSceenSize';

export const Header = () => {
	const { isDesktop, isLaptop, isMobileS } = useScreenSize();

	return (
		<Flex justify="between" align="center" className={styles.header}>
			<Flex gap="20" align="center">
				<Link to="/" className={styles.link} style={{ lineHeight: 0 }}>
					<Logo image={!isMobileS} className={styles.logo} />
				</Link>
				{(isDesktop || isLaptop) && <Navigation />}
			</Flex>
			{(isDesktop || isLaptop) && (
				<Flex gap="24" align="center">
					<LoginButton />
					<RegistrationButton />
				</Flex>
			)}
		</Flex>
	);
};
