import { Flex } from "@/shared/ui/Flex";
import { CaretRight } from "@/shared/ui/Icons/CaretRight";
import { NavLink } from "react-router-dom";
import styles from "./QuizNavigationItem.module.css";

interface QuizNavigationItemProps {
  path: string;
  name: string;
  isFirst: boolean;
  backArrow: boolean
}

export const QuizNavigationItem = ({
  path,
  name,
  isFirst,
}: QuizNavigationItemProps) => {
  return (
    <Flex gap="8" align="center" key={path}>
      {!isFirst && (
        <CaretRight
          className={`${styles.icon} ${
            location.pathname === path && styles.activeIcon
          }`}
        />
      )}
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive && styles.active}`
        }
        to={path}
      >
        {name}
      </NavLink>
    </Flex>
  );
};
