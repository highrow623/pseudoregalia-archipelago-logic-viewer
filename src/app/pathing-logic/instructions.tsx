import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ClickWrapper from "../components/clickWrapper";

export default function Instructions() {
  const [collapsed, setCollapsed] = useState(true);

  if (collapsed) {
    return (
      <div className="border border-gray-600 p-2 bg-slate-900 rounded-sm font-bold flex mx-1">
        <ClickWrapper enabled onClick={() => setCollapsed(false)}>
          <ChevronRightIcon className="size-6 stroke-slate-300" />
        </ClickWrapper>
        <span className="text-slate-300 ml-1 select-none">How to Use</span>
      </div>
    );
  }

  return (
    <>
      <div className="border border-gray-600 p-2 bg-slate-900 rounded-t-sm font-bold flex mx-1 sticky top-0">
        <ClickWrapper enabled onClick={() => setCollapsed(true)}>
          <ChevronDownIcon className="size-6 stroke-slate-300" />
        </ClickWrapper>
        <span className="text-slate-300 ml-1 select-none">How to Use</span>
      </div>
      <div className="border-b border-r border-l border-gray-600 p-2 bg-slate-800 rounded-b-sm mx-1">
        <p className="text-slate-300 ">
          This table shows which locations will be in logic based on your player
          options and current items.
        </p>
      </div>
    </>
  );
}
