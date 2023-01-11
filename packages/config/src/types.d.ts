export interface Page {
  key: string;
  label: string;
  href: string;
  icon?: string;
}
export interface MenuItem extends Page {
  badge?: string;
  badgeType?: 'info' | 'warn' | 'error' | 'success';
  children?: Page[];
}
