import OrganisationInfoSpecific from './organisation-info-specific/OrganisationInfoSpecific';

function OrganisationInfo() {
  return (
    <div className="mb-4 flex flex-col space-y-7 bg-white dark:bg-dark-950 p-4 rounded-lg">
      {/* Title */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Organisation Info</h2>
        <button className="h-full p-4 rounded-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:from-dark-700 dark:to-dark-600 dark:text-dark-200">
          Edit
        </button>
      </div>

      {/* Description */}
      <p>
        Hello everyone! This is a group open to all for cosplayers around the
        world to talk about their passion, trade tips, ask for opinions and have
        a great time!
      </p>

      <div className="flex flex-col space-y-3">
        <OrganisationInfoSpecific title="email" value="stefanptrg@gmail.com" />
        <OrganisationInfoSpecific
          title="location"
          value="Targovishte, Bulgaria"
        />
        <OrganisationInfoSpecific title="created" value="April 9th, 2023" />
      </div>
    </div>
  );
}

export default OrganisationInfo;
