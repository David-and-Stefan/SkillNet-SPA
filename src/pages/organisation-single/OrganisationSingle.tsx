import { usePageInfoContext } from '../../contexts/PageInfoContext';
import OrganisationContent from './components/organisation-content/OrganisationContent';
import OrganisationHeader from './components/organisation-header/OrganisationHeader';
import OrganisationSidebar from './components/organisation-sidebar/OrganisationSidebar';

function OrganisationSingle() {
  const { setPageInfo, getCurrentPagePath } = usePageInfoContext();
  setPageInfo('Single Organisation', [getCurrentPagePath('Breadcrumb Name')]);

  return (
    <section className="text-gray-600 dark:text-white">
      {/* Header Section */}
      <OrganisationHeader />

      {/* Main Content Section */}
      <div className="pt-4">
        <div className="flex justify-center space-x-4">
          <OrganisationSidebar />
          <OrganisationContent />
        </div>
      </div>
    </section>
  );
}

export default OrganisationSingle;
