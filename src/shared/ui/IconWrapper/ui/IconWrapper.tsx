import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./IconWrapper.module.css";

export const IconWrapper = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={styles.iconWrapper} {...props}>
      {children}
    </div>
  );
};
