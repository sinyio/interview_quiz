import minus from "@/shared/assets/icons/minus.svg";
import { HTMLAttributes } from "react";
import { IconWrapper } from "@/shared/ui/IconWrapper";

export const Minus = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <IconWrapper {...props}>
      <img src={minus} alt="Minus" />
    </IconWrapper>
  );
};
