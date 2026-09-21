export interface MethodPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  quote: string;
}

export interface MethodProps {
  pillars?: MethodPillar[];
}

export interface UseMethodReturn {
  activePillarId: string;
  setActivePillarId: (id: string) => void;
  activePillar: MethodPillar;
}
