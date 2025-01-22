import React, { useState } from 'react';

const YourComponent = () => {
  const givingDetails = [
    {
      id: 1,
      title: 'Offering',
      icon: 'src/assets/pst.jpg',
      image: 'src/assets/pst.jpg',
      account: '1234567890',
      accountName: 'Church Main Account',
      bank: 'Bank A',
      purpose: 'Support church programs and activities for the betterment of the community.',
      details: 'This offering goes towards maintaining church services and programs.',
    },
    {
      id: 2,
      title: 'Tithe',
      icon: '/images/icon2.png',
      image: '/images/image2.png',
      account: '9876543210',
      accountName: 'Tithe Account',
      bank: 'Bank B',
      purpose: 'Fulfill your tithe obligations and assist in church development.',
      details: 'Tithes are used for church expansion and community outreach.',
    },
    {
      id: 3,
      title: 'Project Support',
      icon: '/images/icon3.png',
      image: '/images/image3.png',
      account: '1122334455',
      accountName: 'Project Support Account',
      bank: 'Bank C',
      purpose: 'Support ongoing projects such as building expansions and renovations.',
      details: 'Your contributions will help in funding church projects.',
    },
    {
      id: 4,
      title: 'General Donations',
      icon: '/images/icon4.png',
      image: '/images/image4.png',
      account: '5566778899',
      accountName: 'General Donations Account',
      bank: 'Bank D',
      purpose: 'Make a general donation to support various needs and initiatives.',
      details: 'These donations are used for various needs and special initiatives.',
    },
  ];

  const [selectedCard, setSelectedCard] = useState(givingDetails[0].id);

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="bg-[#EEE7F6] min-h-screen py-8">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {givingDetails.map((giving) => (
            <div
              key={giving.id}
              className={`text-white rounded-lg cursor-pointer transition-all p-6 shadow-lg ${
                selectedCard === giving.id
                  ? 'bg-purple-600 transform scale-105'
                  : 'bg-purple-800 hover:shadow-xl hover:scale-105'
              }`}
              onClick={() => handleCardClick(giving.id)}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={giving.icon}
                  alt={giving.title}
                  className="h-32 w-32 rounded-full object-cover shadow-md border-4 border-white"
                />
              </div>
              <div className="text-center font-bold text-xl">{giving.title}</div>
            </div>
          ))}
        </div>

        {selectedCard && (
          <div className="mt-6 bg-white shadow-md rounded-lg p-6 flex flex-col space-y-6">
            {givingDetails
              .filter((giving) => giving.id === selectedCard)
              .map((giving) => (
                <div key={giving.id}>
                  <img
                    src={giving.image}
                    alt={giving.title}
                    className="h-48 w-full rounded-lg mb-6 object-cover shadow-md"
                  />
                  <div className="text-2xl font-bold text-gray-800 mb-4">
                    {giving.title}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <p className="text-sm font-semibold text-gray-500">
                        Account Name
                      </p>
                      <p className="text-lg font-medium text-gray-800">
                        {giving.accountName}
                      </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <p className="text-sm font-semibold text-gray-500">
                        Account Number
                      </p>
                      <p className="text-lg font-medium text-gray-800">
                        {giving.account}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg shadow-sm mt-6">
                    <div className="flex justify-between items-center space-x-4">
                      <div className="flex-shrink-0 w-1/4">
                        <p className="text-sm font-semibold text-gray-500">
                          Bank Name:
                        </p>
                        <p className="text-lg font-medium text-gray-800">
                          {giving.bank}
                        </p>
                      </div>

                      <div className="flex-grow">
                        <p className="text-sm font-semibold text-gray-500">
                          Purpose:
                        </p>
                        <p className="text-lg font-medium text-gray-800">
                          {giving.purpose}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-6">
                    <p className="text-sm font-semibold text-gray-500">Details</p>
                    <p className="text-lg font-medium text-gray-800">{giving.details}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourComponent;
