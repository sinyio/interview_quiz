import { HTMLAttributes } from "react";
import { IconWrapper } from "@/shared/ui/IconWrapper";

export const Minus = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <IconWrapper {...props}>
      <svg
        width="16"
        height="2"
        viewBox="0 0 16 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 1C15.5 1.16576 15.4342 1.32473 15.3169 1.44194C15.1997 1.55915 15.0408 1.625 14.875 1.625H1.125C0.95924 1.625 0.800269 1.55915 0.683058 1.44194C0.565848 1.32473 0.5 1.16576 0.5 1C0.5 0.83424 0.565848 0.675269 0.683058 0.558058C0.800269 0.440848 0.95924 0.375 1.125 0.375H14.875C15.0408 0.375 15.1997 0.440848 15.3169 0.558058C15.4342 0.675269 15.5 0.83424 15.5 1Z"
          fill="#6A0BFF"
        />
      </svg>
    </IconWrapper>
  );
};
