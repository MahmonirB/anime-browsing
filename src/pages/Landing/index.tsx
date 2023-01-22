import { gql, useQuery } from '@apollo/client';
import Header from '../../components/header/Header';

const GENRE_COLLECTION = gql`
  query GetGenreQuery {
  GenreCollection
}
`;

function Landing() {
    const { data } = useQuery(GENRE_COLLECTION);

    return (
      <div className='flex w-full h-full flex-col'>
          <Header />
          
      </div>
  );
}

export default Landing;
