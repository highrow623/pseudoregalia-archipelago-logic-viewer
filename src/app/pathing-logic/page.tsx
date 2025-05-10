"use client";

import { TableRow } from "./tableRow";
import { DifficultyIcon } from "../components/difficulty";
import ObscureIcon from "../components/obscure";
import { ItemIcons, allItems } from "../components/items";
import rowData from "../data/pathing";
import { useDifficulty } from "../context/difficulty";

export default function PathingLogic() {
  const { difficulty, obscure, cycleDifficulty, toggleObscure } = useDifficulty();

  return (
    <div className="flex flex-col items-stretch p-8">
      <p className="text-slate-200 text-3xl mb-5">Pathing Logic</p>
      <table className="table-auto border-separate border-spacing-1">
        <thead>
          <tr>
            <th className="text-slate-300 border border-gray-600 p-2 bg-slate-900 rounded-xs text-start">
              <span className="select-none">Location</span>
            </th>
            <th className="text-slate-300 border border-gray-600 p-2 bg-slate-900 rounded-xs">
              <div className="flex justify-start" onClick={cycleDifficulty}>
                <DifficultyIcon difficulty={difficulty}/>
                <p className="select-none ml-1">Difficulty</p>
              </div>
            </th>
            <th className="text-slate-300 border border-gray-600 p-2 bg-slate-900 rounded-xs">
              <div className="flex justify-start" onClick={toggleObscure}>
                <ObscureIcon obscure={obscure}/>
                <p className="select-none ml-1">Obscure?</p>
              </div>
            </th>
            <th className="text-slate-300 border border-gray-600 p-2 bg-slate-900 rounded-xs">
              <div className="flex justify-start">
                <ItemIcons items={allItems} />
                <p className="select-none ml-1">Items</p>
              </div>
            </th>
            <th className="text-slate-300 border border-gray-600 p-2 bg-slate-900 rounded-xs text-start">
              <span className="select-none">Sample Path</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rowData.filter(data => data.difficulty <= difficulty && (obscure || !data.obscure)).map(data => <TableRow key={data.id} rowData={data}/>)}
        </tbody>
      </table>
    </div>
  );
}
