import { gql, useQuery } from '@apollo/client';
import Header from '../../components/navbar/Header';
import Features from '../../containers/features/Features';
import Footer from '../../containers/footer/Footer';
import PushNotification from '../../containers/pushNotification/PushNotification';
import SearchPanel from '../../containers/searchPanel/SearchPanel';

const GENRE_COLLECTION = gql`
  query GetGenreQuery {
    GenreCollection
  }
`;

function Landing() {
  const { data } = useQuery(GENRE_COLLECTION);

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
