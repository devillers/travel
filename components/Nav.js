import React from 'react';

const Nav = () => {
  return (
    <div className="p-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect x="0" y="0" width="100" height="20" fill="gray" />
        <rect x="80" y="40" width="20" height="20" fill="gray" />
      </svg>
      <ul className="flex flex-row-reverse text-sm font-light">
        <li className="px-3 py-1 border-[1px] border-slate-600 tracking-wide text-slate-600 rounded-full mr-2 ">
          accueil
        </li>
        <li className="px-3 py-1 border-slate-600 tracking-wide text-slate-600 rounded-full mr-2 ">
          contact
        </li>
        <li className="px-3 py-1 border-slate-600 tracking-wide text-slate-600 rounded-full mr-2">
          bio
        </li>
      </ul>
    </div>
  );
};

export default Nav;
