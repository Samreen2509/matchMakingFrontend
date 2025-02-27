import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => {
    store.feed;
  });
  const dispatch = useDispatch();
  const getFeed = async () =>{
    if(feed)
       return;
    try{
      const res = await axios.get( BASE_URL + "/feed",{ withCredentials: true });
      dispatch(addFeed(res?.data?.data));
    }catch(err){
      console.error(err);
    } 
  };

  useEffect(() =>
  {
    getFeed();
  },[]);
  return (
          feed && (
               <div className="flex justify-center"> <UserCard/>  </div>
        )
    );
};

export default Feed;
