import React from 'react';
import styles from './FriendList.module.css'; // Імпортуємо модуль стилів

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={styles.name}>{name}</p> {/* Додаємо клас для name */}
        <p className={isOnline ? styles.online : styles.offline}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    );
  };
  
  export default FriendListItem;