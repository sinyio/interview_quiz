import { Outlet } from "react-router-dom";
import { QuizNavigation } from "@/widgets/quiz";
import { Flex } from "@/shared/ui/Flex";
import { useScreenSize } from "@/shared/hooks/useSceenSize";

export const QuizLayout = () => {
  const { isMobileS } = useScreenSize();
  return (
    <Flex direction="column" gap={isMobileS ? "20" : "24"}>
      <QuizNavigation />
      <Outlet />
    </Flex>
  );
};
