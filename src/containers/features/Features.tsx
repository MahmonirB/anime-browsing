import React from 'react';

const featureList = [
  {
    title: 'Studio',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dignissimos amet at reiciendis, quisquam ullam, magnam perspiciatis exercitationem tempora consequuntur similique beatae quasi illo ratione aspernatur animi quod itaque ex.',
  },
  {
    title: 'Genre',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam animi tempora nesciunt alias, harum sed? Ratione odit adipisci architecto quae quas at cum eius hic! Nemo provident dolor consequatur.',
  },
  {
    title: 'Media List',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis delectus voluptatem amet, expedita doloribus eius cumque beatae dolores! Dolorum aliquid alias error voluptatum deserunt incidunt laudantium tempora ducimus ipsam.',
  },
];

function Features() {
  return (
    <div className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mt-6 md:-mx-4 md:mt-12 md:flex md:flex-wrap">
          {featureList.map((item, index) => (
            <div key={index} className="mt-8 text-center md:mt-0 md:w-1/3 md:px-4 xl:px-6">
              <span className="mb-3 inline-block w-20 border-t-2 border-solid border-indigo-200"></span>
              <h5 className="mb-4 text-xl font-bold uppercase text-indigo-900 dark:text-indigo-500">{item.title}</h5>
              <p className="text-justify text-gray-600 dark:text-gray-400">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Features;
