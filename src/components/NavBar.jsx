import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";
import axios from "axios";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleLogout = async () =>{
   try{
    await axios.post(BASE_URL + "/logout", {},{withCrendientials:true});
    dispatch(removeUser());
    return navigator("/login");
   }catch(err){
    console.error(err);
   }
  }
  return (
    <div className="navbar bg-neutral text-neutral-content">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">matchMAKER</Link>
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
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/setting">Settings</Link></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>}
  </div>
</div>
  );
};

export default NavBar
