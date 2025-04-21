import { Skeleton } from "@/shared/ui/Skeleton";
import { PassedQuestionsItemSkeleton } from "./PassedQuestionsItem/PassedQuestionsItem.skeleton";
import { Card } from "@/shared/ui/Card";
import { RestartQuizButtonSkeleton } from "@/features/quiz/RestartQuizButton";
import styles from "./PassedQuestionsList.module.css";

export const PassedQuestionsListSkeleton = () => {
  return (
    <Card>
      <Skeleton
        maxWidth={440}
        height={24}
        className={styles.title}
        style={{ marginInline: "auto" }}
      />
      <div className={styles.list}>
        {[...new Array(8)].map((_, index) => (
          <PassedQuestionsItemSkeleton key={index} />
        ))}
      </div>
      <RestartQuizButtonSkeleton className={styles.button} />
    </Card>
  );
};
