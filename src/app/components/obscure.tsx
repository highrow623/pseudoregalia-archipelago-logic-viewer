import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

type ObscureIconProps = {
  obscure: boolean;
};

export default function ObscureIcon({ obscure }: ObscureIconProps) {
  if (obscure) {
    return <CheckIcon className="size-6 stroke-green-600" />;
  }
  return <XMarkIcon className="size-6 stroke-red-600" />;
}
