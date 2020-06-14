import React from 'react';

import Container from './components/Container/Container';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/Friend/FriendList/FriendList';
import friends from './components/Friend/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => (
  <>
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload files" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory item={transactions} />
    </Container>
  </>
);

export default App;
