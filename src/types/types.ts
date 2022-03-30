type Cost = { Wood?: number; Food?: number; Stone?: number; Gold?: number };

export type MainItemsDetails = {
  id: number;
  name: string;
  expansion: string;
  description?: string;
  age?: string;
  develops_in?: string;
  cost?: Cost;
  build_time?: number;
  reload_time?: number;
  attack_delay?: number;
  movement_rate?: number;
  hit_points?: number;
  line_of_sight?: number;
  range?: number;
  attack?: number;
  accuracy?: string;
  armor?: string;
  special?: string[];
  army_type?: string;
  unique_unit?: string[];
  unique_tech?: string[];
  team_bonus?: string;
  civilization_bonus?: string[];
  applies_to?: string[];
};

export type MainItems = {
  civilizations?: Civilization[];
  units?: Unit[];
  structures?: Structure[];
  technologies?: Technology[];
};

export type UniqueTechType = {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  develops_in: string;
  cost: Cost;
  build_time: number;
  reload_time: number;
  applies_to: string[];
};

export type UniqueUnitType = {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  created_in: string;
  cost: Cost;
  build_time: number;
  reload_time: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  attack: number;
  armor: string;
  attack_bonus: string[];
  armor_bonus: string[];
};

export type Civilization = {
  id: number;
  name: string;
  expansion: string;
  army_type: string;
  unique_unit: string[];
  unique_tech: string[];
  team_bonus: string;
  civilization_bonus?: string[];
};

export type Structure = {
  id: number;
  name: string;
  expansion: string;
  age: string;
  cost: Cost;
  build_time: number;
  hit_points: number;
  line_of_sight: number;
  armor: string;
  special: string[];
};

export type Technology = {
  id: number;
  name: string;
  expansion: string;
  description: string;
  age: string;
  develops_in: string;
  cost: Cost;
  build_time: number;
  applies_to: string[];
};

export type Unit = {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost: Cost;
  build_time: number;
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: number;
  attack: number;
  armor: string;
  accuracy: string;
};
