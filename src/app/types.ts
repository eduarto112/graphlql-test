export interface Company {
  ceo: string;
}

export interface Mission {
  flight: number;
  name: string;
}

export interface Capsule {
  id: string;
  landing: number;
  missions: Mission[];
  original_launch: string;
  reuse_count: number;
  status: string;
  type: string;
}
