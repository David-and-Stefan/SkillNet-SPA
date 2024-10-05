interface OrganisationHeaderButtonProps {
  content: any;
}

function OrganisationHeaderButton(props: OrganisationHeaderButtonProps) {
  return (
    <button className="h-full px-4 rounded-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:from-dark-700 dark:to-dark-600 dark:text-dark-200">
      {props.content}
    </button>
  );
}

export default OrganisationHeaderButton;
