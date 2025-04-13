import { Button } from "@/shared/ui/Button";
import { Flex } from "@/shared/ui/Flex";
import { ArrowRight } from "@/shared/ui/Icons/ArrowRight/ArrowRight";

interface StartQuizButtonProps {
  className?: string;
}

export const StartQuizButton = ({ className }: StartQuizButtonProps) => {
  return (
    <Button
      size="m"
      children={
        <Flex gap="8" justify="center" align="center">
          Начать <ArrowRight />
        </Flex>
      }
      className={className}
    />
  );
};
