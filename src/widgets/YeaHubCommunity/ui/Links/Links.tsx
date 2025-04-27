import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';
import { Chat } from '@/shared/ui/Icons/Chat';
import { Megaphone } from '@/shared/ui/Icons/Megaphone';
import { Text } from '@/shared/ui/Text';

export const Links = () => {
	const { isMobile, isMobileS } = useScreenSize();

	return (
		<Flex
			gap="12"
			direction={isMobile && !isMobileS ? 'row' : 'column'}
			style={isMobile && !isMobileS ? { marginBottom: '16px' } : {}}
		>
			<Button variant="link-purple" style={{ flex: 1 }}>
				<Flex gap="8">
					<Megaphone />
					<Text variant="body2" color="purple-700">
						YeaHub: Главные новости {!isMobile && <br />} и обновления платформы
					</Text>
				</Flex>
			</Button>
			<Button variant="link-purple" style={{ flex: 1 }}>
				<Flex gap="8">
					<Chat />
					<Text variant="body2" color="purple-700">
						YeaHub Community: Общение, обмен
						{!isMobile && <br />} опытом и поддержка единомышленников
					</Text>
				</Flex>
			</Button>
		</Flex>
	);
};
