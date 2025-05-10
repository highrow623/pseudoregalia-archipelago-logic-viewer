import { Difficulty } from "../components/difficulty";
import { allItems, noItems, Items } from "../context/items";

export type RowData = {
  id: string;
  location: string;
  difficulty: Difficulty;
  obscure: boolean;
  items: Items;
  samplePath?: string[];
};

const rowData: RowData[] = [
  {
    id: "1",
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Normal,
    obscure: false,
    items: allItems,
  },
  {
    id: "2",
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Hard,
    obscure: true,
    items: noItems,
  },
  {
    id: "3",
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Expert,
    obscure: false,
    items: {
      ...noItems,
      kicks: 1,
    },
  },
  {
    id: "4",
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Lunatic,
    obscure: false,
    items: {
      ...noItems,
      kicks: 2,
    },
  },
  {
    id: "5",
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Lunatic,
    obscure: false,
    items: {
      ...noItems,
      kicks: 3,
    },
  },
];

export default rowData;
