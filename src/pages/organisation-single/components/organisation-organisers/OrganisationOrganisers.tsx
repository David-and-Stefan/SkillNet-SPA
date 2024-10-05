import OrganisationOrganisersSingle from './organisation-organisers-single/OrganisationOrganisersSingle';

function OrganisationOrganisers() {
  return (
    <div className="mb-4 flex flex-col space-y-7 bg-white dark:bg-dark-950 p-4 rounded-lg">
      <h2 className="text-lg font-bold">Organisation Organisers</h2>
      <OrganisationOrganisersSingle name="Marina Valentine" commonFriends={2} />
      <OrganisationOrganisersSingle name="Neko Bebop" commonFriends={1} />
    </div>
  );
}

export default OrganisationOrganisers;
