import { Navbar } from '../Navbar/Navbar';
import { Profile } from '../Profile/Profile';
import { HeaderUserData as User } from './__generated__/header.gql';

type HeaderProps = {
  user: User | undefined;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className="card dark:bg-slate-700 bg-white rounded-xl col-span-4 lg:col-span-3 border-2 dark:border-none">
      <div className="card-body p-5 w-full flex flex-row flex-wrap items-center justify-between xl:justify-around lg:flex-col lg:items-start">
        <Profile user={props.user} />
        <Navbar />
      </div>
    </div>
  );
};
