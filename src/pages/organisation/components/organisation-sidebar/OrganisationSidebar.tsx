import OrganisationInfo from '../organisation-info/OrganisationInfo';
import OrganisationOrganisers from '../organisation-organisers/OrganisationOrganisers';

function OrganisationSidebar() {
  return (
    <div className="w-1/4">
      <OrganisationInfo />
      <OrganisationOrganisers />
    </div>
  );
}

export default OrganisationSidebar;
