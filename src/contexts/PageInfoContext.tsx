import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { RoutePage } from '../types';

interface PagePath {
  path: string;
  breadcrumbName: string;
}

type PageInfoContextType = {
  pageTitle: string;
  pagePaths: PagePath[];
  setPageInfo: (title: string, pagePaths: PagePath[]) => void;
  getCurrentPagePath: (breadcrumbName: string) => PagePath;
};

const PageInfoContext = createContext<PageInfoContextType | null>(null);

const DEFAULT_PAGE_TITLE = 'SkillNet';

const defaultPath: PagePath = {
  path: RoutePage.HOME,
  breadcrumbName: 'Home',
};

export function PageInfoProvider({ children }: PropsWithChildren) {
  const [title, setTitle] = useState(DEFAULT_PAGE_TITLE);
  const [paths, setPaths] = useState<PagePath[]>([defaultPath]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const setPageInfo = useCallback((title: string, pagePaths: PagePath[]) => {
    setTitle(title);
    setPaths([defaultPath, ...pagePaths]);
  }, []);

  const getCurrentPagePath = (breadcrumbName: string): PagePath => {
    return {
      path: document.URL,
      breadcrumbName,
    };
  };

  return (
    <PageInfoContext.Provider
      value={{
        pageTitle: title,
        pagePaths: paths,
        setPageInfo,
        getCurrentPagePath,
      }}>
      {children}
    </PageInfoContext.Provider>
  );
}

export const usePageInfoContext = () => {
  const pageInfoContext = useContext(PageInfoContext);

  if (!pageInfoContext) {
    throw new Error(
      'usePageInfoContext has to be used within <PageInfoContext.Provider>'
    );
  }

  return pageInfoContext;
};
