interface OrganisationInfoSpecificProps {
  title: string;
  value: string;
}

function OrganisationInfoSpecific(props: OrganisationInfoSpecificProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <span className="dark:text-dark-300 capitalize">{props.title}</span>
      <span className="text-indigo-800 dark:text-white">{props.value}</span>
    </div>
  );
}

export default OrganisationInfoSpecific;
