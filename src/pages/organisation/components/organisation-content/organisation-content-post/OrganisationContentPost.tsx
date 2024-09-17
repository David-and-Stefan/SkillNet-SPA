import { Ellipsis, MessageSquare, ThumbsUp } from 'lucide-react';
import image from '../../../img/download.png';

function OrganisationContentPost() {
  return (
    <div className="mb-4 flex flex-col bg-white dark:bg-dark-950 rounded-lg">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center mb-2">
            <img
              src={image}
              alt="User Avatar"
              className="max-w-12 max-h-12 rounded-full "
            />
            <div className="ml-4">
              <p className="font-bold">Neko Bebop</p>
              <p className="text-indigo-800 dark:text-dark-300">2 weeks ago</p>
            </div>
          </div>
          <button className="text-indigo-800 dark:text-dark-200">
            <Ellipsis />
          </button>
        </div>
        <p>
          Hi! And welcome to the group! For those who just join us, we invite
          you to our Discord official channel, where we talk about cosplays,
          conventions, DIY, costume tips and more!
        </p>
        <img
          src={image}
          alt="Discord Invite"
          className="min-h-52 mt-4 rounded-lg object-contain my-0 mx-auto"
        />
      </div>

      <div className="flex items-center px-5 text-sm justify-between font-bold border-t border-indigo-200 dark:border-dark-600 py-4 text-indigo-800 dark:text-dark-200">
        <button className="h-full px-4 py-2 rounded-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 dark:from-dark-700 dark:to-dark-600">
          Category
        </button>
        <div className="flex items-center gap-5 ">
          <p>85 Likes</p>
          <p>28 Comments</p>
        </div>
      </div>

      <div className="py-5 rounded-lg rounded-t-none flex items-center justify-around bg-slate-50 dark:bg-dark-800 text-indigo-800 dark:text-dark-300">
        <button className="flex items-center gap-4">
          <ThumbsUp />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-4">
          <MessageSquare />
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
}

export default OrganisationContentPost;
