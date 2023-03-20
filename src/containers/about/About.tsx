import React from 'react';

function About() {
  return (
    <div className="flex flex-col p-4">
      <span className=" p-5 text-3xl font-bold">About</span>
      <span className=" whitespace-pre-line p-4 text-justify text-lg">
        The AniList GraphQL Api provides quick and powerful access to over 500k anime and manga entries, including
        character, staff, and live airing data. The AniList & AniChart websites themselves run on the Api, so everything
        you can do on the sites, you can do via the Api.
      </span>
    </div>
  );
}
export default About;
