interface OrganisationSearchCardStatProps {
  value: string;
  title: string;
}

function OrganisationSearchCardStat(props: OrganisationSearchCardStatProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="font-bold text-base text-indigo-800 dark:text-white">
        {props.value}
      </p>
      <p className="font-bold text-xs dark:text-dark-200 uppercase">
        {props.title}
      </p>
    </div>
  );
}

export default OrganisationSearchCardStat;
