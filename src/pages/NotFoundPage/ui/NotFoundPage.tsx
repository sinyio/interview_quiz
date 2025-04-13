import { useGetSkillsQuery } from "@/entities/skill";
import { ChooseComplexity, ChooseCount } from "@/features/question";
import { ChooseCategories } from "@/features/question/ui/ChooseCategories/ChooseCategories";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Chip } from "@/shared/ui/Chip";
import { Counter } from "@/shared/ui/Counter";
import { Filter } from "@/shared/ui/Filter";
import { Progress } from "@/shared/ui/Progress";
import { useState } from "react";

const items = [
  { label: "JavaScript", isActive: false },
  { label: "React", isActive: false },
  { label: "Webpack", isActive: false },
  { label: "CSS", isActive: false },
  { label: "HTML", isActive: false },
];
const NotFoundPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedComplexity, setSelectedComplexity] = useState<number[]>([]);
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const onChoose = (skills: number[]) => {
    setSelectedCategories(skills);
  };
  return (
    <div>
      <Card>
        Страница не найдена<Button>asd</Button>
      </Card>
      <Progress title="Вопросы собеседования" total={5} current={2} />
      <Counter count={2} onChange={() => {}} />
      <Chip
        isActive
        label="React"
        icon={
          <img src="https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/9afe8b6d-08a5-4349-a191-c82c097924d7" />
        }
      />
      <div style={{ width: "200px" }}>
        <Filter title="Фильтр" items={items} />
      </div>
      <ChooseCategories
        selectedCategories={selectedCategories}
        specialization={11}
        onChange={onChoose}
        limit={15}
      />
      <ChooseComplexity />
      <ChooseCount count={selectedCount} onChange={setSelectedCount} />
    </div>
  );
};

export default NotFoundPage;
