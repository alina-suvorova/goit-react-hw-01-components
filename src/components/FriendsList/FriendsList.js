import PropTypes from 'prop-types';
import style from './Friends.module.css'
import FriendsListItem from "./FriendsListItem";

const FriendsList = ({friends}) => {
    return (
        <ul className={style.friendsList}>
            {friends.map((friend)=>
            <li className={style.friendsListItem}  key={friend.id}>
                <FriendsListItem 
                status={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}/>
            </li>
            )}
        </ul>
    );
}

export default FriendsList;

FriendsList.propType = {
    friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired,}),),
}