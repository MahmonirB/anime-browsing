import { gql, useQuery } from '@apollo/client';
import Header from '../../containers/header/Header';
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
          
      </div>
  );
}

export default Landing;
