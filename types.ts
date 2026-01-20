import { LucideIcon } from "lucide-react";

export enum SlideLayout {
  TITLE = 'TITLE',
  BULLET_POINTS = 'BULLET_POINTS',
  TWO_COLUMN = 'TWO_COLUMN',
  SECTION_HEADER = 'SECTION_HEADER',
  GRID = 'GRID',
  INFRA_DIAGRAM = 'INFRA_DIAGRAM',
  MULTI_TENANT_ARCH = 'MULTI_TENANT_ARCH'
}

export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  layout: SlideLayout;
  points?: string[];
  columns?: {
    left: { title?: string; items: string[] };
    right: { title?: string; items: string[] };
  };
  gridItems?: { title: string; items: string[] }[];
  icon?: LucideIcon;
  footer?: string;
}