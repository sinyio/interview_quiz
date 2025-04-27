import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';
import { ArrowRight } from '@/shared/ui/Icons/ArrowRight/ArrowRight';
import { usePreparedFilters } from '../../model/usePreparedFilters';
import { ROUTES } from '@/shared/config/router/routes';
import { useNavigate } from 'react-router-dom';

interface StartQuizButton {
  className: string;
}

export const StartQuizButton = ({ className }: StartQuizButton) => {
  const navigate = useNavigate();

  const { preparedFilters } = usePreparedFilters();
  const onStartQuiz = () => {
    navigate(ROUTES.quiz.page, {
      state: preparedFilters,
    });
  };

  return (
    <Button
      size="m"
      children={
        <Flex gap="8" justify="center" align="center">
          Начать <ArrowRight />
        </Flex>
      }
      onClick={onStartQuiz}
      className={className}
    />
  );
};
