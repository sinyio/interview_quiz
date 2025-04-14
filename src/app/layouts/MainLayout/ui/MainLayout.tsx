import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Suspense } from "react";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";

export const MainLayout = () => {
  return (
    <div className="container">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<>Loading...</>}>
          <main className={styles.main}>
            <Outlet />
          </main>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
