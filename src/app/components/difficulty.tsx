import { FireIcon } from "@heroicons/react/24/solid";

export enum Difficulty {
  Normal = 1,
  Hard,
  Expert,
  Lunatic
};

type DifficultyIconProps = {
  difficulty: Difficulty;
};

export function DifficultyIcon({ difficulty }: DifficultyIconProps) {
  switch (difficulty) {
    case Difficulty.Normal:
      return <FireIcon className="size-6 stroke-green-600 fill-green-300"/>;
    case Difficulty.Hard:
      return <FireIcon className="size-6 stroke-amber-600 fill-amber-300"/>;
    case Difficulty.Expert:
      return <FireIcon className="size-6 stroke-red-600 fill-red-300"/>;
    case Difficulty.Lunatic:
      return <FireIcon className="size-6 stroke-fuchsia-600 fill-fuchsia-300"/>;
  }
}

export function difficultyText(difficulty: Difficulty) {
  switch (difficulty) {
    case Difficulty.Normal:
      return "Normal";
    case Difficulty.Hard:
      return "Hard";
    case Difficulty.Expert:
      return "Expert";
    case Difficulty.Lunatic:
      return "Lunatic";
  }
}