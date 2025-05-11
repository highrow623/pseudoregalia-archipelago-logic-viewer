"use client";

import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { Difficulty } from "../components/difficulty";

type difficultyContextType = {
  difficulty: Difficulty;
  obscure: boolean;
  cycleDifficulty: () => void;
  toggleObscure: () => void;
};

const difficultyContextDefaultValues: difficultyContextType = {
  difficulty: Difficulty.Lunatic,
  obscure: true,
  cycleDifficulty: () => {},
  toggleObscure: () => {},
};

const DifficultyContext = createContext<difficultyContextType>(
  difficultyContextDefaultValues,
);

export function useDifficulty() {
  return useContext(DifficultyContext);
}

type Props = {
  children: ReactNode;
};

export function DifficultyProvider({ children }: Props) {
  const [difficulty, setDifficulty] = useState(Difficulty.Lunatic);
  const [obscure, setObscure] = useState(true);

  const cycleDifficulty = () => {
    switch (difficulty) {
      case Difficulty.Normal:
        setDifficulty(Difficulty.Hard);
        break;
      case Difficulty.Hard:
        setDifficulty(Difficulty.Expert);
        setObscure(true);
        break;
      case Difficulty.Expert:
        setDifficulty(Difficulty.Lunatic);
        setObscure(true);
        break;
      case Difficulty.Lunatic:
        setDifficulty(Difficulty.Normal);
    }
  };

  const toggleObscure = () => {
    if (
      obscure &&
      (difficulty === Difficulty.Expert || difficulty === Difficulty.Lunatic)
    ) {
      setDifficulty(Difficulty.Hard);
    }
    setObscure(!obscure);
  };

  const value = {
    difficulty,
    obscure,
    cycleDifficulty,
    toggleObscure,
  };

  return (
    <DifficultyContext.Provider value={value}>
      {children}
    </DifficultyContext.Provider>
  );
}
