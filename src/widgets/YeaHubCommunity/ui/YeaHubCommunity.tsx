import { Card } from '@/shared/ui/Card';
import { Links } from './Links/Links';
import { Text } from '@/shared/ui/Text';
import { Flex } from '@/shared/ui/Flex';
import { HTMLAttributes } from 'react';

export const YeaHubCommunity = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card {...props}>
      <Flex gap="12" direction="column">
        <Text variant="body5-strong">YeaHub объединяет IT-специалистов</Text>
        <Text variant="body2-accent" color="black-600">
          Подпишитесь на наш канал и станьте частью IT-сообщества, которое растёт вместе с вами.
        </Text>
        <Links />
      </Flex>
    </Card>
  );
};
