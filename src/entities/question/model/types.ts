import { Skill } from '@/entities/skill';
import { Specialization } from '@/entities/specialization';

export interface Question {
  id: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: QuestionStatus;
  rate: number;
  complexity: QuestionComplexity;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  questionSpecializations: Specialization[];
  questionSkills: Skill[];
  checksCount?: number;
  isLearned?: boolean;
  profileId?: string;
}

type QuestionStatus = 'public' | 'draft';
type QuestionComplexity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
