import {
  Gauge,
  Activity,
  AudioWaveform,
  LineChart,
  ShieldCheck,
  FileCheck2,
  BatteryCharging,
  ListChecks,
  Lightbulb,
  Cpu,
  HardHat,
  BarChart3,
  Clock,
  Leaf,
  FileBarChart,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Image,
  Camera,
  Zap,
  Search,
  Wrench,
  RotateCw,
  Users,
  HelpCircle,
  Linkedin,
  Instagram,
  type LucideProps,
} from 'lucide-react';

const registry = {
  Gauge,
  Activity,
  AudioWaveform,
  LineChart,
  ShieldCheck,
  FileCheck2,
  BatteryCharging,
  ListChecks,
  Lightbulb,
  Cpu,
  HardHat,
  BarChart3,
  Clock,
  Leaf,
  FileBarChart,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Image,
  Camera,
  Zap,
  Search,
  Wrench,
  RotateCw,
  Users,
  HelpCircle,
  Linkedin,
  Instagram,
};

export type IconName = keyof typeof registry;

interface IconProps extends LucideProps {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  const Cmp = registry[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
