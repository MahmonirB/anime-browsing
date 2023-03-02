import { gql, useApolloClient, useQuery } from '@apollo/client';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { authenticationState } from '../../../recoil/selectors';

const USER_PROFILE = gql`
query Query {
Viewer {
  name
  id
}
}
}`;

function Profile() {
    const token = useRecoilValue(authenticationState);
    const { data: userInfo } = useQuery(USER_PROFILE);
    console.log(userInfo)

    return <div></div>
}

export default Profile;
