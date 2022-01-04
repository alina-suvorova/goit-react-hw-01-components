import PropTypes from 'prop-types';
import style from './Profile.module.css'

const Profile = ({avatar, name, tag, location, stats}) => { 
return (
    <div className={style.profile}>
        <div className={style.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={style.avatar}
            />
            <p className={style.name}>{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={style.stats}>
            <li className={style.statsItem}>
                <span className="label">Followers</span>
                <span className={style.quantity}>{stats.followers}</span>
            </li>
            <li className={style.statsItem}>
                <span className="label">Views</span>
                <span className={style.quantity}>{stats.views}</span>
            </li>
            <li className={style.statsItem}>
                <span className="label">Likes</span>
                <span className={style.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>)
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}

export default Profile;