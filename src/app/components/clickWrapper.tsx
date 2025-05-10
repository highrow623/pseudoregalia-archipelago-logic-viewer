import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  enabled?: boolean;
};

export default function ClickWrapper({ children, onClick, enabled }: Props) {
  if (!enabled) {
    return children;
  }
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {children}
    </div>
  );
}
