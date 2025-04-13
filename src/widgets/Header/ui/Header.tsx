import { Logo } from "@/shared/ui/Logo/Logo";
import { FC } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <Logo onClick={() => navigate('/')} className={styles.logo} />
    </div>
  );
};
