import Profile from "./components/Profile/Profile";
import user from './data/user.json';
import StatisticsList from './components/Statistics/StatisticsList';
import data from './data/data.json';

import friends from './data/friends.json';
import transactions from './data/transactions.json';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
    return (
        <><Profile 
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} />
        <StatisticsList title="Upload stats" items = {data}/>
        <FriendsList friends={friends}/>
        <TransactionHistory transactions={transactions}/></>
    );
}

export default App;