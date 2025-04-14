import { Card } from "@/shared/ui/Card";
import { Links } from "./Links";
import { Text } from "@/shared/ui/Text";
import { Flex } from "@/shared/ui/Flex";

interface YeaHubCommunityProps {
  className?: string;
}

export const YeaHubCommunity = ({ className }: YeaHubCommunityProps) => {
  return (
    <Card className={className}>
      <Flex gap="12" direction="column">
        <Text variant="body5-strong">YeaHub объединяет IT-специалистов</Text>
        <Text variant="body2-accent" color="black-600">
          Подпишитесь на наш канал и станьте частью IT-сообщества, которое
          растёт вместе с вами.
        </Text>
        <Links />
      </Flex>
    </Card>
  );
};
