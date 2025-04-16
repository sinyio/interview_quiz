import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";
import { Flex } from "@/shared/ui/Flex";
import { Suspense } from "react";
import { MainLayoutSkeleton } from "./MainLayout.skeleton";

export const MainLayout = () => {
  return (
    <Suspense fallback={<MainLayoutSkeleton />}>
      <div className="container">
        <Flex gap="24" direction="column">
          <Header />
          <ErrorBoundary fallback={<>An error occurred</>}>
            <main>
              <Outlet />
            </main>
          </ErrorBoundary>
        </Flex>
      </div>
    </Suspense>
  );
};
