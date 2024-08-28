import image from '../../img/download.png';

function OrganisationContent() {
  return (
    <div className="w-3/4">
      {/* Post */}
      <div className="mb-4 flex flex-col space-y-7 bg-white dark:bg-dark-950 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <img
            src={image}
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="font-bold">Neko Bebop</p>
            <p className="text-indigo-800 dark:text-dark-300">2 weeks ago</p>
          </div>
        </div>
        <p>
          Hi! And welcome to the group! For those who just join us, we invite
          you to our Discord official channel, where we talk about cosplays,
          conventions, DIY, costume tips and more!
        </p>
        <img
          src={image}
          alt="Discord Invite"
          className="w-72 h-72 mt-4 rounded-lg"
        />
      </div>
    </div>
  );
}

export default OrganisationContent;
