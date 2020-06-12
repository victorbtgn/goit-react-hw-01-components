import React from "react";

import Profile from "./components/Profile";
import user from "./data/user.json";

import Statistics from "./components/Statistics";
import statisticalData from "./data/statistical-data.json";

import FriendList from "./components/FriendList";
import friends from "./data/friends.json";

import TransactionHistory from "./components/TransactionHistory";
import transactions from "./data/transactions.json";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics stats={statisticalData} />

    <FriendList friends={friends} />

    <TransactionHistory item={transactions} />
  </>
);

export default App;
