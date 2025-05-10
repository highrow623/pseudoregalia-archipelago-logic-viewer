"use client";

import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

export type Items = {
  dreamBreaker: boolean;
  strikebreak: boolean;
  soulCutter: boolean;
  slide: boolean;
  solarWind: boolean;
  sunsetter: boolean;
  kicks: number;
  clingGem: boolean;
  ascendantLight: boolean;
  smallKeys: boolean;
};

export const noItems: Items = {
  dreamBreaker: false,
  strikebreak: false,
  soulCutter: false,
  slide: false,
  solarWind: false,
  sunsetter: false,
  kicks: 0,
  clingGem: false,
  ascendantLight: false,
  smallKeys: false,
};

export const allItems: Items = {
  dreamBreaker: true,
  strikebreak: true,
  soulCutter: true,
  slide: true,
  solarWind: true,
  sunsetter: true,
  kicks: 4,
  clingGem: true,
  ascendantLight: true,
  smallKeys: true,
};

export function hasRequiredItems(items: Items, required: Items) {
  if (required.dreamBreaker && !items.dreamBreaker) {
    return false;
  }
  if (required.strikebreak && !items.strikebreak) {
    return false;
  }
  if (required.soulCutter && !items.soulCutter) {
    return false;
  }
  if (required.slide && !items.slide) {
    return false;
  }
  if (required.solarWind && !items.solarWind) {
    return false;
  }
  if (required.sunsetter && !items.sunsetter) {
    return false;
  }
  if (required.kicks > items.kicks) {
    return false;
  }
  if (required.clingGem && !items.clingGem) {
    return false;
  }
  if (required.ascendantLight && !items.ascendantLight) {
    return false;
  }
  if (required.smallKeys && !items.smallKeys) {
    return false;
  }
  return true;
}

type itemsContextType = {
  items: Items;
  toggleDreamBreaker: () => void;
  toggleStrikebreak: () => void;
  toggleSoulCutter: () => void;
  toggleSlide: () => void;
  toggleSolarWind: () => void;
  toggleSunsetter: () => void;
  cycleKicks: () => void;
  toggleClingGem: () => void;
  toggleAscendantLight: () => void;
  toggleSmallKeys: () => void;
};

const itemsContextDefaultValues: itemsContextType = {
  items: allItems,
  toggleDreamBreaker: () => {},
  toggleStrikebreak: () => {},
  toggleSoulCutter: () => {},
  toggleSlide: () => {},
  toggleSolarWind: () => {},
  toggleSunsetter: () => {},
  cycleKicks: () => {},
  toggleClingGem: () => {},
  toggleAscendantLight: () => {},
  toggleSmallKeys: () => {},
};

const ItemsContext = createContext<itemsContextType>(itemsContextDefaultValues);

export function useItems() {
  return useContext(ItemsContext);
}

type Props = {
  children: ReactNode;
};

export function ItemsProvider({ children }: Props) {
  const [items, setItems] = useState(allItems);

  const toggleDreamBreaker = () => {
    setItems({
      ...items,
      dreamBreaker: !items.dreamBreaker,
    });
  };

  const toggleStrikebreak = () => {
    setItems({
      ...items,
      strikebreak: !items.strikebreak,
    });
  };

  const toggleSoulCutter = () => {
    setItems({
      ...items,
      soulCutter: !items.soulCutter,
    });
  };

  const toggleSlide = () => {
    setItems({
      ...items,
      slide: !items.slide,
    });
  };

  const toggleSolarWind = () => {
    setItems({
      ...items,
      solarWind: !items.solarWind,
    });
  };

  const toggleSunsetter = () => {
    setItems({
      ...items,
      sunsetter: !items.sunsetter,
    });
  };

  const cycleKicks = () => {
    setItems({
      ...items,
      kicks: (items.kicks+1)%5,
    });
  };

  const toggleClingGem = () => {
    setItems({
      ...items,
      clingGem: !items.clingGem,
    });
  };

  const toggleAscendantLight = () => {
    setItems({
      ...items,
      ascendantLight: !items.ascendantLight,
    });
  };

  const toggleSmallKeys = () => {
    setItems({
      ...items,
      smallKeys: !items.smallKeys,
    });
  };

  const value = {
    items,
    toggleDreamBreaker,
    toggleStrikebreak,
    toggleSoulCutter,
    toggleSlide,
    toggleSolarWind,
    toggleSunsetter,
    cycleKicks,
    toggleClingGem,
    toggleAscendantLight,
    toggleSmallKeys,
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  );
}
