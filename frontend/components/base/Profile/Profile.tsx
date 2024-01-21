import { getGreetingMessage } from 'utils';

import { ProfileUserData as User } from './__generated__/Profile.gql';

type ProfileProps = {
  user: User | undefined;
};

export const Profile = ({ user }: ProfileProps) => {
  return (
    <div className="flex flex-wrap gap-4 items-center text-left justify-center lg:justify-start">
      <img
        className="w-24 h-auto rounded-full ring ring-gray-300 dark:ring-slate-800"
        src="https://miro.medium.com/v2/resize:fill:88:88/1*fD-vAlVmUhZguu213gvqYQ@2x.jpeg"
        alt="Profile picture"
      />
      <div className="dark:text-white text-center sm:text-left">
        <span className="font-normal prose-md">{getGreetingMessage()}</span>
        <h1 className="font-semibold prose-2xl text-gray-500 dark:text-gray-400">
          {user?.firstName}
        </h1>
      </div>
    </div>
  );
};
