import {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import cn from "classnames";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "l" | "m";
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
}

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  { children, variant = "primary", size = "l", className, ...props },
  ref
) => {
  return (
    <button
      className={cn(styles.button, styles[variant], styles[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export const Button = forwardRef(ButtonComponent);
