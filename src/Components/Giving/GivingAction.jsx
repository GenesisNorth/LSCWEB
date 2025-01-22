import React, { useState } from 'react';

const YourComponent = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const givingDetails = [
    {
      id: 1,
      title: 'Offering',
      image: 'url(image1.png)',
      account: '1234567890',
      bank: 'Bank A',
      purpose: 'Support church programs',
      details: 'This offering goes towards maintaining church services and programs.',
    },
    {
      id: 2,
      title: 'Tithe',
      image: 'url(image2.png)',
      account: '9876543210',
      bank: 'Bank B',
      purpose: 'Fulfill your tithe obligations',
      details: 'Tithes are used for church expansion and community outreach.',
    },
    {
      id: 3,
      title: 'Project Support',
      image: 'url(image3.png)',
      account: '1122334455',
      bank: 'Bank C',
      purpose: 'Support ongoing projects',
      details: 'Your contributions will help in funding church projects.',
    },
    {
      id: 4,
      title: 'General Donations',
      image: 'url(image4.png)',
      account: '5566778899',
      bank: 'Bank D',
      purpose: 'Make a general donation',
      details: 'These donations are used for various needs and special initiatives.',
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="bg-[#EEE7F6] min-h-screen py-8">
      <div className="container mx-auto p-10">
        {/* Grid of Fixed Items */}
        <div className="grid grid-cols-4 gap-10">
          {givingDetails.map((giving) => (
            <div
              key={giving.id}
              className="frame-513833 bg-purple-800 text-white rounded-lg cursor-pointer transition-all p-4"
              onClick={() => handleCardClick(giving.id)}
            >
              <div
                className="image bg-cover bg-center h-32 w-full rounded-t-lg"
                style={{ backgroundImage: giving.image }}
              ></div>
              <div className="offering text-center py-2 font-bold">{giving.title}</div>
            </div>
          ))}
        </div>

        {/* Selected Item Details */}
        {selectedCard && (
          <div className="details mt-6 bg-white shadow-md rounded-lg p-6">
            {givingDetails
              .filter((giving) => giving.id === selectedCard)
              .map((giving) => (
                <div key={giving.id}>
                  <div
                    className="image bg-cover bg-center h-48 w-full rounded-lg mb-4"
                    style={{ backgroundImage: giving.image }}
                  ></div>
                  <div className="text-lg font-semibold mb-2">{giving.title}</div>
                  <div className="text-sm space-y-2">
                    <p>
                      <strong>Account Number:</strong> {giving.account}
                    </p>
                    <p>
                      <strong>Bank Name:</strong> {giving.bank}
                    </p>
                    <p>
                      <strong>Purpose:</strong> {giving.purpose}
                    </p>
                    <p>{giving.details}</p>
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
