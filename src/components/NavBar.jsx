import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="navbar bg-neutral text-neutral-content">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">matchMAKER</a>
  </div>
  <div className="flex-none gap-2 mx-6">
    {user && <div className="dropdown dropdown-end">
     <p className="px-4">Welcome, {user.firstName}</p>
      <div tabIndex={0} role="button" className="btn btn-accent btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoId} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>}
  </div>
</div>
  );
};

export default NavBar
