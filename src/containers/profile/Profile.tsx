import { gql, useQuery } from '@apollo/client';
import React from 'react';

const PROFILE = gql`
query Query {
  Viewer {
    name
    id
  }
}`;

function Profile() {
    const { data } = useQuery(PROFILE);
    console.log(data)

    return <div></div>
}

export default Profile;
