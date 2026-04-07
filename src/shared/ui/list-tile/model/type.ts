import type {
  LucideIcon,
} from 'lucide-react';

export interface Tile {
  href: string;
  title: string;
  icon: LucideIcon;
}

export interface TileListProps {
  list: Tile[];
}