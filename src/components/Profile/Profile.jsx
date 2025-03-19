import styles from './Profile.module.css'; // Імпортуємо стилі

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}> {/* Відображаємо клас для контейнера профілю */}
      <div>
        <img src={image} alt="User avatar" className={styles.avatar} /> {/* Відображаємо клас для аватара */}
        <p className={styles.name}>{name}</p> {/* Відображаємо клас для імені */}
        <p className={styles.tag}>@{tag}</p> {/* Відображаємо клас для тега */}
        <p className={styles.location}>{location}</p> {/* Відображаємо клас для локації */}
      </div>

      <ul className={styles.stats}> {/* Відображаємо клас для статистики */}
        <li className={styles.statItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.statItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.statItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;