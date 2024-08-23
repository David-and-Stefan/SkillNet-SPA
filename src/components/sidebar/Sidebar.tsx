import {
  Activity,
  Calendar,
  ChartPie,
  ChevronFirst,
  ChevronLast,
  CircleCheck,
  LayoutDashboard,
  MessageCircle,
  Moon,
  MoreVertical,
  Settings2,
  Sun,
  Users,
} from 'lucide-react';
import { PropsWithChildren, useState } from 'react';
import SidebarItem from './sidebar-item/SidebarItem';

function Sidebar({ children }: PropsWithChildren) {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <aside className="h-screen w-fit">
      <nav className="h-full flex flex-col justify-between bg-white border-r shadow-sm">
        <div>
          <div className="p-4 flex justify-between items-center">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${
                expanded ? 'w-32' : 'w-0'
              }`}
              alt=""
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <div className="px-3 py-2 border-t">
            <SidebarItem icon={<Moon size={20} />} text="Dark Theme" />
            <SidebarItem icon={<Sun size={20} />} text="Light Theme" />
            <SidebarItem icon={<Activity size={20} />} text="Activity" />
            <SidebarItem icon={<CircleCheck size={20} />} text="Tasks" />
            <ul className="flex-1 pt-2">
              <span className="pl-3 text-sm text-gray-600">Menu</span>
              <SidebarItem
                icon={<ChartPie size={20} />}
                text="Overview"
                active
              />
              <SidebarItem
                icon={<LayoutDashboard size={20} />}
                text="Dashboard"
                alert
              />
              <SidebarItem
                icon={<MessageCircle size={20} />}
                text="Chat"
                alert
              />
              <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
              <SidebarItem icon={<Users size={20} />} text="Team Members" />
              <SidebarItem icon={<Settings2 size={20} />} text="Settings" />
            </ul>
          </div>
        </div>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}>
            <div className="leading-4">
              <h4 className="font-semibold">Stefan Petrov</h4>
              <span className="text-xs text-gray-600">
                stefanptrg@gmail.com
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
