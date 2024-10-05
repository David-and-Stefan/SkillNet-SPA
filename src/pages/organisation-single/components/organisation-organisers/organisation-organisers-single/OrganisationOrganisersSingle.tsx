import image from '../../../img/download.png';

interface OrganisationOrganisersSingleProps {
  name: string;
  commonFriends: number;
}

function OrganisationOrganisersSingle(
  props: OrganisationOrganisersSingleProps
) {
  return (
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt="Organizer Avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="ml-4">
        <p className="font-bold">{props.name}</p>
        <p className="text-indigo-800 dark:text-dark-300">
          {props.commonFriends} friend(s) in common
        </p>
      </div>
    </div>
  );
}

export default OrganisationOrganisersSingle;
