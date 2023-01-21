import './landing.css';
import { gql, useQuery } from '@apollo/client';

const GENRE_COLLECTION = gql`
  query GetGenreQuery {
  GenreCollection
}
`;

function Landing() {
    const { data } = useQuery(GENRE_COLLECTION);

    return <>Landing</>
}

export default Landing;
