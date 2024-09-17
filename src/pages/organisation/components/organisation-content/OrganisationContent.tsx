import OrganisationContentPost from './organisation-content-post/OrganisationContentPost';

function OrganisationContent() {
  return (
    <div className="w-3/4">
      {/* Post */}
      <OrganisationContentPost />
      <OrganisationContentPost />
    </div>
  );
}

export default OrganisationContent;
