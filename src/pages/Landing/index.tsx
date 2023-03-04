import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import Header from '../../components/navbar/Header';
import Features from '../../containers/features/Features';
import Footer from '../../containers/footer/Footer';
import PushNotification from '../../containers/pushNotification/PushNotification';
import SearchPanel from '../../containers/searchPanel/SearchPanel';
import { client } from '../../../apolloRestLink';
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
  const [authToken, setAuthToken] = useRecoilState(authenticationData)

  useEffect(() => {
    client.query({ query: GET_TOKEN }).then(response => {
      localStorage.setItem('access_token', response.data.data.access_token);
      setAuthToken(response.data.data.access_token);
    });
  }, []);

  return (
    <div>
      <Header />
      <SearchPanel isAuthenticated={!!authToken} />
      <Features />
      <Footer />
      <PushNotification />
    </div>
  );
}

export default Landing;
