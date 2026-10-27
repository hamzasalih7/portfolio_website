import {
  Cloud,
  Globe,
  Palette,
  ShoppingCart,
  Server,
  Wrench,
  PackagePlus,
  Store,
} from "lucide-react";
import type { ServiceIconName } from "@/content/services";

const map = {
  globe: Globe,
  palette: Palette,
  cart: ShoppingCart,
  server: Server,
  amazon: Store,
  cloud: Cloud,
  wrench: Wrench,
  plus: PackagePlus,
} as const;

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = map[name] ?? PackagePlus;
  return <Icon className={className} aria-hidden />;
}
