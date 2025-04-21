import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { useNavigate } from "react-router-dom";

interface RestartQuizButtonProps {
  className?: string;
}

export const RestartQuizButton = ({ className }: RestartQuizButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      size="l"
      className={className}
      onClick={() => navigate("/create-quiz")}
    >
      <Text variant="body3-strong" color="white-900">
        Пройти заново
      </Text>
    </Button>
  );
};
