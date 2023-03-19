import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GENRE_COLLECTION = gql`
  query GetGenreQuery {
    GenreCollection
  }
`;

function Genres() {
  const { data } = useQuery(GENRE_COLLECTION);

  return (
    <div className="flex flex-col items-center justify-center">
      <label className=" mt-6 mb-12 text-4xl text-slate-900">Genres</label>
      <div className=" flex flex-wrap items-center justify-center">
        {data?.GenreCollection?.map((item: string) => (
          <div
            key={item}
            className="m-4 flex h-9 min-w-fit items-center justify-center rounded-3xl bg-indigo-400 p-6 text-gray-50"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genres;
