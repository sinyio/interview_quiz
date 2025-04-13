import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Suspense } from "react";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <div className="container">
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<>Loading...</>}>
            <main>
              <Outlet />
            </main>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
