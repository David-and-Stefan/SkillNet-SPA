import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import { createContext, PropsWithChildren, useState } from 'react';

export const SidebarContext = createContext<boolean>(true);

function SidebarLogic({ children }: PropsWithChildren) {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <aside className="h-screen w-fit sticky top-0">
      <nav className="h-full flex flex-col justify-between bg-white dark:bg-dark-950 border-r dark:border-r-dark-800 shadow-sm">
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
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-dark-900 dark:hover:bg-dark-700">
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <div className="px-3 py-2 border-t dark:border-t-dark-800">
            <SidebarContext.Provider value={expanded}>
              {children}
            </SidebarContext.Provider>
          </div>
        </div>

        <div className="border-t dark:border-t-dark-800 flex p-3">
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
              <span className="text-xs text-gray-600 dark:text-dark-500">
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

export default SidebarLogic;
