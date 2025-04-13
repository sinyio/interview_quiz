import { ReactNode } from "react";
import cn from "classnames";
import styles from "./Text.module.css";
import { Pallete } from "@/shared/types/types";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body1"
  | "body1-accent"
  | "body2"
  | "body2-accent"
  | "body2-strong"
  | "body3"
  | "body3-accent"
  | "body3-strong"
  | "body4"
  | "body5"
  | "body5-accent"
  | "body5-strong";

interface TextProps {
  variant: Variant;
  children: ReactNode;
  color?: Pallete;
  className?: string;
}

export const Text = ({
  variant = "body1",
  color = "black-900",
  children,
  className,
}: TextProps) => {
  const Tag = variant.startsWith("body") ? "p" : variant;
  return (
    <Tag className={cn(styles[variant], styles[color], className)}>
      {children}
    </Tag>
  );
};
