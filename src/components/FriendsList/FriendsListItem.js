import PropTypes from 'prop-types';
import style from './Friends.module.css';

const FriendsListItem = ({status, avatar, name}) => {
    return (
        <><span className={style.status} style={status ? {backgroundColor: "green"}:{backgroundColor: "red"}}></span>
        <img className={style.avatar} src={avatar} alt="User avatar"/>
        <p className="name">{name}</p></>
    );
}

export default FriendsListItem;

FriendsListItem.propType ={
    status: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}