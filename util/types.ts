type stringOrNull = string | null;
type characterStatus = "Alive" | "Dead" | "unknown";
type characterSpecie =
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Poopybutthole"
  | "Mythological Creature"
  | "Animal"
  | "Robot"
  | "Cronenberg"
  | "Disease"
  | "Planet"
  | "unknown";

type gender = "Male" | "Female" | "unknown";
type IconType = "Male" | "Female" | "Arrow";

export type {
  stringOrNull,
  characterStatus,
  characterSpecie,
  gender,
  IconType,
};
