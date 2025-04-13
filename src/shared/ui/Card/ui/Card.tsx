import { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./Card.module.css";

export const Card = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  );
};
