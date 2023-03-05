import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userData } from '../../../recoil';

const PROFILE = gql`
query Query {
  Viewer {
    name
    id
  }
}`;

function Profile() {
  const { data } = useQuery(PROFILE);
  const [, setRecoilState] = useRecoilState(userData);

  const userInfo = data?.Viewer;

  useEffect(() => {
    setRecoilState(userInfo);
  }, [data]);

  return <div className='flex justify-center items-center w-full h-40'>
    <h2>Dear <span className=' font-bold'>{userInfo?.name}</span> welcome!</h2>
  </div>
}

export default Profile;
