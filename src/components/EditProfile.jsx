import { useState } from "react";

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [photoId, setPhotoId] = useState(user.photoId);
  return (
    <div className="flex justify-center my-7">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Edit Profile</h2>
          <div>
          <label className="input input-bordered flex items-center gap-2 my-3">
              <input
                type="text"
                value={firstName}
                className="grow"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
              <input
                type="text"
                value={lastName}
                className="grow"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
              <input
                type="text"
                value={photoId}
                className="grow"
                placeholder="Last Name"
                onChange={(e) => setPhotoId(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
              <input
                type="number"
                value={age}
                className="grow"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
              <input
                type="text"
                value={gender}
                className="grow"
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
