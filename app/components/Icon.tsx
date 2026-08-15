import {
  Stethoscope,
  TestTube2,
  Baby,
  Pill,
  Syringe,
  Video,
  Clock,
  HeartPulse,
  Microscope,
  Wallet,
  MapPin,
  ShieldCheck,
  type LucideProps,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Stethoscope,
  TestTube2,
  Baby,
  Pill,
  Syringe,
  Video,
  Clock,
  HeartPulse,
  Microscope,
  Wallet,
  MapPin,
  ShieldCheck,
};

export type IconName = keyof typeof map;

export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Cmp = map[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
