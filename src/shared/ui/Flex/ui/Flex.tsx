import { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./Flex.module.css";

type FlexJustify = "start" | "center" | "end" | "between" | "around";
type FlexAlign = "start" | "center" | "end" | "normal";
type FlexWrap = "wrap" | "nowrap";
type FlexDirection = "row" | "column";
type FlexGap =
  | "4"
  | "8"
  | "10"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "40"
  | "48"
  | "60"
  | "120";

const justifyClasses: Record<FlexJustify, string> = {
  around: styles["justify-around"],
  end: styles["justify-end"],
  between: styles["justify-between"],
  center: styles["justify-center"],
  start: styles["justify-start"],
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles["direction-row"],
  column: styles["direction-column"],
};

const alignClasses: Record<FlexAlign, string> = {
  end: styles["align-end"],
  start: styles["align-start"],
  center: styles["align-center"],
  normal: styles["align-normal"],
};

const wrapClasses: Record<FlexWrap, string> = {
  wrap: styles["wrap"],
  nowrap: styles["nowrap"],
};

const gapClasses: Record<FlexGap, string> = {
  "4": styles.gap4,
  "8": styles.gap8,
  "10": styles.gap10,
  "12": styles.gap12,
  "14": styles.gap14,
  "16": styles.gap16,
  "20": styles.gap20,
  "24": styles.gap24,
  "28": styles.gap28,
  "32": styles.gap32,
  "40": styles.gap40,
  "48": styles.gap48,
  "60": styles.gap60,
  "120": styles.gap120,
};

const flexClasses: Record<number, string> = {
  1: styles.flex1,
};

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
  direction?: FlexDirection;
  gap?: FlexGap;
  flex?: number;
}

export const Flex = ({
  children,
  justify,
  align,
  wrap,
  direction,
  gap,
  flex,
  className,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <div
      className={cn(
        styles.flex,
        justify && justifyClasses[justify],
        align && alignClasses[align],
        wrap && wrapClasses[wrap],
        direction && directionClasses[direction],
        gap && gapClasses[gap],
        flex && flexClasses[flex],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
