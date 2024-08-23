import {
  Activity,
  Calendar,
  ChartPie,
  CircleCheck,
  LayoutDashboard,
  MessageCircle,
  Moon,
  Settings2,
  Sun,
  Users,
} from 'lucide-react';
import { useThemeContext } from '../../contexts/ThemeProvider';
import { Theme } from '../../types';
import SidebarItem from './sidebar-item/SidebarItem';
import SidebarLogic from './sidebar-logic/SidebarLogic';
import SidebarText from './sidebar-text/SidebarText';

function Sidebar() {
  const { theme, setTheme } = useThemeContext();

  return (
    <SidebarLogic>
      {theme === Theme.DARK && (
        <SidebarItem
          icon={<Sun size={20} />}
          text="Light Theme"
          onClick={() => setTheme(Theme.LIGHT)}
        />
      )}
      {theme === Theme.LIGHT && (
        <SidebarItem
          icon={<Moon size={20} />}
          text="Dark Theme"
          onClick={() => setTheme(Theme.DARK)}
        />
      )}
      <SidebarItem icon={<Activity size={20} />} text="Activity" />
      <SidebarItem icon={<CircleCheck size={20} />} text="Tasks" />
      <ul className="flex-1 pt-2">
        <SidebarText text="Menu" />
        <SidebarItem icon={<ChartPie size={20} />} text="Overview" active />
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
        <SidebarItem icon={<MessageCircle size={20} />} text="Chat" alert />
        <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
        <SidebarItem icon={<Users size={20} />} text="Team Members" />
        <SidebarItem icon={<Settings2 size={20} />} text="Settings" />
      </ul>
    </SidebarLogic>
  );
}

export default Sidebar;
