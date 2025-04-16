import { Button } from "@/shared/ui/Button";
import { Flex } from "@/shared/ui/Flex";
import { Chat } from "@/shared/ui/Icons/Chat";
import { Megaphone } from "@/shared/ui/Icons/Megaphone";
import { Text } from "@/shared/ui/Text";

export const Links = () => {
  return (
    <Flex gap="12" direction="column">
      <Button variant="link-purple">
        <Flex gap="8">
          <Megaphone />
          <Text variant="body2" color="purple-700">
            YeaHub: Главные новости <br /> и обновления платформы
          </Text>
        </Flex>
      </Button>
      <Button variant="link-purple">
        <Flex gap="8">
          <Chat />
          <Text variant="body2" color="purple-700">
            YeaHub Community: Общение, обмен
            <br /> опытом и поддержка единомышленников
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
};
