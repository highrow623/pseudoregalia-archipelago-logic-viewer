import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

type ObscureIconProps = {
  obscure?: boolean;
  inline?: boolean;
};

export default function ObscureIcon({ obscure, inline }: ObscureIconProps) {
  if (inline) {
    if (obscure) {
      return <CheckIcon className="size-6 stroke-green-600 inline" />;
    }
    return <XMarkIcon className="size-6 stroke-red-600 inline" />;
  }
  if (obscure) {
    return <CheckIcon className="size-6 stroke-green-600" />;
  }
  return <XMarkIcon className="size-6 stroke-red-600" />;
}
