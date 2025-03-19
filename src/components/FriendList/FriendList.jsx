import React from 'react';
import styles from './FriendList.module.css'; // Імпортуємо модуль стилів
import FriendListItem from './FriendListItem'; // Імпортуємо FriendListItem

const FriendList = ({ friends }) => {
    return (
      <ul className={styles.friendList}>  {/* Додаємо клас для ul */}
        {friends.map(friend => (
          <li key={friend.id} className={styles.friendListItem}>  {/* Правильне застосування класу для li */}
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    );
  };
  
  export default FriendList;