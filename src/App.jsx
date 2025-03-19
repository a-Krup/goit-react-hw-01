import React from "react";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json"; // Імпортуємо дані користувача з JSON
import FriendList from "./components/FriendList/FriendList"; // Імпортуємо FriendList
import friends from "./friends.json"; // Імпортуємо дані про друзів з JSON

const App = () => {
  return (
    <>
      {/* Окремий компонент для профілю */}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      
      {/* Окремий компонент для списку друзів */}
      <FriendList friends={friends} />
    </>
  );
};

export default App;


