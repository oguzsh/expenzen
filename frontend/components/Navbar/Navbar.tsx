import { Notification, SignOut } from 'assets/icons';
import Hamburger from 'assets/icons/Hamburger';
import classNames from 'classnames';

import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { title: 'Home', to: '/' },
    { title: 'Transactions', to: '/transactions' },
    { title: 'Accounts', to: '/accounts' },
    { title: 'Reports', to: '/reports' },
    { title: 'Settings', to: '/settings' },
  ];

  const menuStyle = classNames(
    {
      'flex-col': isOpen,
      hidden: !isOpen,
    },
    'flex w-full lg:flex lg:flex-row lg:items-center lg:justify-between',
  );

  const listStyle = classNames(
    {
      hidden: !isOpen,
    },
    'lg:flex lg:flex-row lg:items-center',
  );

  return (
    <nav className="flex flex-wrap items-center justify-between p-5 w-full">
      <div className="flex lg:hidden justify-between w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn w-full"
          aria-label="Open Menu">
          <Hamburger />
        </button>
      </div>

      <div className={menuStyle}>
        <ul className={listStyle}>
          {routes.map((route) => (
            <li key={route.title} className="mt-4 lg:mt-0 lg:mr-10">
              <a
                href={route.to}
                className="prose no-underline hover:text-gray-600">
                {route.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex mt-4 lg:mt-0">
          <a
            href="/notification"
            className="prose no-underline hover:text-gray-600 mx-2">
            <Notification />
          </a>
          <a
            href="/sign_out"
            className="prose no-underline hover:text-gray-600 mx-2">
            <SignOut />
          </a>
        </div>
      </div>
    </nav>
  );
};
