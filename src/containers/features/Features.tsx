import React from 'react';

const featureList = [
    {
        title: 'Studio',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dignissimos amet at reiciendis, quisquam ullam, magnam perspiciatis exercitationem tempora consequuntur similique beatae quasi illo ratione aspernatur animi quod itaque ex.'
    },
    {
        title: 'Genre',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam animi tempora nesciunt alias, harum sed? Ratione odit adipisci architecto quae quas at cum eius hic! Nemo provident dolor consequatur.'
    },
    {
        title: 'Media List',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis delectus voluptatem amet, expedita doloribus eius cumque beatae dolores! Dolorum aliquid alias error voluptatum deserunt incidunt laudantium tempora ducimus ipsam.',
    }
];

function Features() {
    return (
        <div className="py-6 md:py-12">
            <div className="container px-4 mx-auto">
                <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
                    {featureList.map((item, index) => <div key={index} className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                        <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                        <h5 className="text-xl font-bold uppercase mb-4 text-indigo-900">{item.title}</h5>
                        <p className="text-gray-600 text-justify">{item.content}</p>
                    </div>)}
                </div>

            </div>
        </div>
    )
}
export default Features;
