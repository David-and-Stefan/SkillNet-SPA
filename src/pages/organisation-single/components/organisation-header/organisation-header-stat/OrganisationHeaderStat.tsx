interface OrganisationHeaderStatProps {
  title: string;
  value: string;
}

function OrganisationHeaderStat(props: OrganisationHeaderStatProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="font-bold text-xl text-indigo-800 dark:text-white">
        {props.value}
      </p>
      <p className="font-bold text-xs dark:text-dark-200 uppercase">
        {props.title}
      </p>
    </div>
  );
}

export default OrganisationHeaderStat;
