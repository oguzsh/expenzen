import type { PropsWithChildren } from 'react';

type SidebarItemProps = PropsWithChildren<{
  className?: string
}>

export const SidebarItem = ({ children, ...rest }: SidebarItemProps) => {
  return (
    <li { ...rest }>
      { children }
    </li>
  );
};
