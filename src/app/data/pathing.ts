import { RowData } from "../pathing-logic/tableRow";
import { Difficulty } from "../components/difficulty";
import { allItems, defaultItems } from "../components/items";

const rowData: RowData[] = [
  {
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Normal,
    obscure: false,
    items: allItems,
  },
  {
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Hard,
    obscure: true,
    items: defaultItems,
  },
  {
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Expert,
    obscure: false,
    items: {
      ...defaultItems,
      kicks: 1,
    },
  },
  {
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Lunatic,
    obscure: false,
    items: {
      ...defaultItems,
      kicks: 2,
    },
  },
  {
    location: "The Underbelly - Surrounded By Holes",
    difficulty: Difficulty.Lunatic,
    obscure: false,
    items: {
      ...defaultItems,
      kicks: 3,
    },
  },
];

export default rowData;
