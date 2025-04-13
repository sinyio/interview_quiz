import logo from "@/shared/assets/icons/logo.svg";
import { HTMLAttributes } from "react";

export const Logo = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <img src={logo} alt="YeaHub" />
    </div>
  );
};
