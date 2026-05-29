export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: any;
}
