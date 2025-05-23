"use client";

import { TableRow } from "./pathing-logic/tableRow";
import Instructions from "./pathing-logic/instructions";
import { DifficultyIcon } from "./components/difficulty";
import ObscureIcon from "./components/obscure";
import { ItemIcons } from "./components/items";
import rowData, { RowData } from "./data/pathing";
import { useDifficulty } from "./context/difficulty";
import ClickWrapper from "./components/clickWrapper";
import { useItems, hasRequiredItems } from "./context/items";

export default function PathingLogic() {
  const { difficulty, obscure, cycleDifficulty, toggleObscure } =
    useDifficulty();
  const { items } = useItems();

  return (
    <div className="flex flex-col items-stretch p-8">
      <p className="text-slate-200 text-3xl ml-1">
        Pseudoregalia Archipelago Logic Viewer
      </p>
      <p className="text-slate-400 text-xl mt-2 ml-1">apworld version: 0.8.1</p>
      <br />
      <Instructions />
      <br />
      <table className="table-fixed border-separate border-spacing-1">
        <thead className="sticky top-0 z-1">
          <tr>
            <th className="text-slate-300 border border-slate-600 p-2 bg-slate-900 rounded-xs text-start w-1/3">
              <span className="select-none">Location</span>
            </th>
            <th className="text-slate-300 border border-slate-600 p-2 bg-slate-900 rounded-xs w-1/9">
              <ClickWrapper onClick={cycleDifficulty} enabled>
                <div className="flex justify-start">
                  <DifficultyIcon difficulty={difficulty} />
                  <p className="select-none ml-1">Logic Level</p>
                </div>
              </ClickWrapper>
            </th>
            <th className="text-slate-300 border border-slate-600 p-2 bg-slate-900 rounded-xs w-1/9">
              <ClickWrapper onClick={toggleObscure} enabled>
                <div className="flex justify-start">
                  <ObscureIcon obscure={obscure} />
                  <p className="select-none ml-1">Obscure?</p>
                </div>
              </ClickWrapper>
            </th>
            <th className="text-slate-300 border border-slate-600 p-2 bg-slate-900 rounded-xs w-1/3">
              <div className="flex justify-start">
                <ItemIcons items={items} inHeader />
                <p className="select-none ml-1">Items</p>
              </div>
            </th>
            <th className="text-slate-300 border border-slate-600 p-2 bg-slate-900 rounded-xs text-start">
              <span className="select-none">Sample Path</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rowData
            .map((data, index): [RowData, number] => [data, index])
            .filter(
              ([data]) =>
                data.difficulty <= difficulty &&
                (obscure || !data.obscure) &&
                hasRequiredItems(items, data.items),
            )
            .map(([data, index]) => (
              <TableRow key={index} rowData={data} />
            ))}
        </tbody>
      </table>
      <div className="h-[30vh]" />
    </div>
  );
}
