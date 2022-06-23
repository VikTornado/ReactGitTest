import React from "react";
import profile from "./Profile.module.css";

const Profile = () => {
  let ref = React.createRef();
  let addPost = () => {
    let addPostNew = ref.current.value;
    alert(addPostNew);
      ref.current.value = "";
  };

  return (
    <div className={profile.profile}>
      <h2 className={profile.title}>Profile</h2>
      <div>
        <textarea ref={ref}></textarea>
        <button onClick={addPost}>push</button>
      </div>
    </div>
  );
};

export default Profile;
