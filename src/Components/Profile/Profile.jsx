import React from "react";
import profile from "./Profile.module.css";

const Profile = () => {
  let newPost = React.createRef();
  let addPost = () => {
    let text = newPost.current.value;
    alert(text);
  };

  return (
    <div className={profile.profile}>
      <h2 className={profile.title}>Profile</h2>
      <div>
        <textarea ref={newPost}></textarea>
        <button onClick={addPost}>push</button>
      </div>
    </div>
  );
};

export default Profile;
