import './App.css';
import { gql, useQuery } from '@apollo/client';

const GENRE_COLLECTION = gql`
  query GetGenreQuery {
  GenreCollection
}
`;


function App() {
  const { data } = useQuery(GENRE_COLLECTION);
  
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
