import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { DifficultyIcon, difficultyText } from "../components/difficulty";
import ObscureIcon from "../components/obscure";
import { ItemIcons } from "../components/items";
import { RowData } from "../data/pathing";
import Tooltip from "../components/tooltip";

type TableRowProps = {
  rowData: RowData;
};

export function TableRow({ rowData }: TableRowProps) {
  const content = (
    <ul className="list-disc pl-5">
      {rowData.samplePath.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
      <li>{rowData.location}</li>
    </ul>
  );

  return (
    <tr>
      <td className="border border-slate-600 p-2 bg-slate-800 rounded-xs text-slate-300">
        {rowData.location}
      </td>
      <td className="border border-slate-600 p-2 bg-slate-800 rounded-xs flex">
        <DifficultyIcon difficulty={rowData.difficulty} />
        <p className="text-slate-300 ml-1">
          {difficultyText(rowData.difficulty)}
        </p>
      </td>
      <td className="border border-slate-600 p-2 bg-slate-800 rounded-xs">
        <ObscureIcon obscure={rowData.obscure} />
      </td>
      <td className="border border-slate-600 p-2 bg-slate-800 rounded-xs">
        <ItemIcons items={rowData.items} />
      </td>
      <td className="border border-slate-600 p-2 bg-slate-800 rounded-xs">
        <Tooltip content={content}>
          <InformationCircleIcon className="size-6 stroke-slate-300 group-hover:stroke-slate-100" />
        </Tooltip>
      </td>
    </tr>
  );
}
