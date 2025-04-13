import plus from "@/shared/assets/icons/plus.svg";
import { IconWrapper } from "@/shared/ui/IconWrapper/ui/IconWrapper";
import { HTMLAttributes } from "react";

export const Plus = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <IconWrapper {...props}>
      <img src={plus} alt="Plus" />
    </IconWrapper>
  );
};
