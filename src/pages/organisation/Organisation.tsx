import { CirclePlus, Ellipsis } from 'lucide-react';
import image from './img/download.png';

function Organisation() {
  return (
    <>
      {/* Header Section */}
      <div className="relative p-4 bg-white dark:bg-dark-950 rounded-2xl">
        <div className="bottom-4 left-4">
          <div className="flex flex-row justify-between">
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-white">
                Test organisation
              </h1>
              <p className="text-gray-300">ALL MEMBERS WELCOME!</p>
            </div>
            <div className="flex space-x-8">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">139</p>
                <p className="font-bold text-xs">MEMBERS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">105</p>
                <p className="font-bold text-xs">POSTS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">7.3k</p>
                <p className="font-bold text-xs">VISITS</p>
              </div>
              <div className="flex gap-3 items-center ">
                <button className="h-full px-4 rounded-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:from-dark-700 dark:to-dark-600 dark:text-dark-200">
                  <CirclePlus />
                </button>
                <button className="h-full px-4 rounded-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:from-dark-700 dark:to-dark-600 dark:text-dark-200">
                  <Ellipsis />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="pt-4">
        <div className="flex justify-center space-x-4 text-black dark:text-white">
          {/* Sidebar */}
          <div className="w-1/4">
            {/* Social Networks */}
            <div className="mb-4 flex flex-col space-y-7 text-white bg-white dark:bg-dark-950 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Group Info</h2>
                <button className="h-full p-4 rounded-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:from-dark-700 dark:to-dark-600 dark:text-dark-200">
                  Edit
                </button>
              </div>
              <p>
                Hello everyone! This is a group open to all for cosplayers
                around the world to talk about their passion, trade tips, ask
                for opinions and have a great time!
              </p>

              <div className="flex flex-col space-y-3">
                <div className="w-full flex justify-between items-center">
                  <span className="dark:text-dark-300">Email</span>
                  <span>stefanptrg@gmail.com</span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <span className="dark:text-dark-300">Location</span>
                  <span>Targovishte, Bulgaria</span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <span className="dark:text-dark-300">Created</span>
                  <span>April 9th, 2018</span>
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col space-y-7 text-white bg-white dark:bg-dark-950 p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-2">Group Organizers</h2>
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt="Organizer Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold">Marina Valentine</p>
                  <p className="text-gray-400">2 friends in common</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={image}
                  alt="Organizer Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold">Neko Bebop</p>
                  <p className="text-gray-400">1 friend in common</p>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="w-3/4">
            {/* Post */}
            <div className="mb-4 flex flex-col space-y-7 text-white bg-white dark:bg-dark-950 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <img
                  src={image}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold">Neko Bebop</p>
                  <p className="text-gray-400">2 weeks ago</p>
                </div>
              </div>
              <p>
                Hi! And welcome to the group! For those who just join us, we
                invite you to our Discord official channel, where we talk about
                cosplays, conventions, DIY, costume tips and more!
              </p>
              <img
                src={image}
                alt="Discord Invite"
                className="w-72 h-72 mt-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organisation;
