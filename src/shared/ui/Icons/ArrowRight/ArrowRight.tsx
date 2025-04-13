import arrowRight from "@/shared/assets/icons/arrowRight.svg";
import { HTMLAttributes } from "react";
import { IconWrapper } from "@/shared/ui/IconWrapper";

export const ArrowRight = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <IconWrapper {...props}>
      <img src={arrowRight} alt="Arrow Right" />
    </IconWrapper>
  );
};
