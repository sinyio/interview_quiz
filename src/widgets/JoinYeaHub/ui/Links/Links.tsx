import { useScreenSize } from '@/shared/hooks/useSceenSize';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';
import { ClipboardText } from '@/shared/ui/Icons/ClipboardText';
import { NotePencil } from '@/shared/ui/Icons/NotePencil';
import { TrendUp } from '@/shared/ui/Icons/TrendUp';
import { UserSwitch } from '@/shared/ui/Icons/UserSwitch';
import { Text } from '@/shared/ui/Text';

export const Links = () => {
	const { isMobileS } = useScreenSize();

	return (
		<Flex gap={isMobileS ? '8' : '16'} direction={isMobileS ? 'column' : 'row'}>
			<Flex gap="8" direction="column">
				<Button variant="link-purple">
					<Flex gap="8" align="center">
						<UserSwitch />
						<Text variant="body2" color="purple-700">
							Тренажер собеседований
						</Text>
					</Flex>
				</Button>
				<Button variant="link-purple">
					<Flex gap="8" align="center">
						<TrendUp />
						<Text variant="body2" color="purple-700">
							Статистика и история обучения
						</Text>
					</Flex>
				</Button>
			</Flex>
			<Flex gap="8" direction="column">
				<Button variant="link-purple">
					<Flex gap="8" align="center">
						<NotePencil />
						<Text variant="body2" color="purple-700">
							Режим запоминание вопросов
						</Text>
					</Flex>
				</Button>
				<Button variant="link-purple">
					<Flex gap="8" align="center">
						<ClipboardText />
						<Text variant="body2" color="purple-700">
							Доступ ко всем подборкам
						</Text>
					</Flex>
				</Button>
			</Flex>
		</Flex>
	);
};
