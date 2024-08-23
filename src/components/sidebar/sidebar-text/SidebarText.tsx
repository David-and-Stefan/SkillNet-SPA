import { useContext } from 'react';
import { SidebarContext } from '../sidebar-logic/SidebarLogic';

interface SidebarTextProps {
  text: string;
}

function SidebarText({ text }: SidebarTextProps) {
  const expanded = useContext(SidebarContext);

  return (
    <span
      className={
        'pl-3 text-sm text-gray-600 dark:text-dark-300' +
        (!expanded ? ' opacity-0' : '')
      }>
      {text}
    </span>
  );
}

export default SidebarText;
