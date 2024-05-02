import React, { useEffect } from 'react';

import { FeedInfo } from './FeedInfo';
import { useDispatch } from '../../../utils/Types/reduxThunkTypes';
import { useLocation } from 'react-router-dom';
import { WSClose, WSStart } from '../../../services/actions/ordersFeed';
import { WSCloseUser, WSStartUser } from '../../../services/actions/ordersFeedUser';

const FeedInfoPage = () => {
  const dispatch = useDispatch();
  const token: string = localStorage.getItem("accessToken") as string;
  const location = useLocation();

useEffect(() => {
  if (location.pathname.startsWith('/feed')) {
      dispatch(WSStart());
  } 

  return () => {
      dispatch(WSClose());
  };
}, [location.pathname]);

useEffect(() => {
  if (location.pathname.startsWith('/profile/orders')) {

      if (token !== undefined) {
        dispatch(WSStartUser(token));
}
  } 

  return () => {
      dispatch(WSCloseUser());
  };
}, [location.pathname]);

  return (
    <div>
      <FeedInfo />
    </div>
  );
};

export default FeedInfoPage;
