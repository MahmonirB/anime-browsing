import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import Header from '../../components/navbar/Header';
import Features from '../../containers/features/Features';
import Footer from '../../containers/footer/Footer';
import PushNotification from '../../containers/pushNotification/PushNotification';
import SearchPanel from '../../containers/searchPanel/SearchPanel';
import { client } from '../../../apollorestLink';
import { useRecoilState } from 'recoil';
import { authenticationData } from '../../../recoil';

const GENRE_COLLECTION = gql`
  query GetGenreQuery {
    GenreCollection
  }
`;

const GET_TOKEN = gql`
  query getToken {
    data @rest(type: "Data", path: "/success") {
      access_token
    }
  }
`;

function Landing() {
  const { data } = useQuery(GENRE_COLLECTION);
  const [, setAuthToken] = useRecoilState(authenticationData)

  useEffect(() => {
    client.query({ query: GET_TOKEN }).then(response =>
      setAuthToken(response.data.data.access_token)
    );
  }, []);

  return (
    <div>
      <Header />
      <SearchPanel />
      <Features />
      <Footer />
      <PushNotification />
    </div>
  );
}

export default Landing;
