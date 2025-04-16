import { Button } from "@/shared/ui/Button";
import { Flex } from "@/shared/ui/Flex";
import { ArrowRight } from "@/shared/ui/Icons/ArrowRight/ArrowRight";
import { ButtonHTMLAttributes } from "react";

export const StartQuizButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button
      size="m"
      children={
        <Flex gap="8" justify="center" align="center">
          Начать <ArrowRight />
        </Flex>
      }
      className={className}
      {...props}
    />
  );
};
