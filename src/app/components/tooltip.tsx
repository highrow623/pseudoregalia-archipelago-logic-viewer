import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  content: ReactNode;
};

export default function Tooltip({ children, content }: Props) {
  return (
    <div className="relative group">
      {children}
      <div className="border border-slate-600 absolute right-full top-1/2 transform -translate-y-1/2 mr-1 hidden group-hover:block bg-slate-800 text-slate-300 text-sm rounded py-2 px-2 z-2 w-sm">
        {content}
      </div>
    </div>
  );
}
