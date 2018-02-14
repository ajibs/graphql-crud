import Business from '../models/Business';

// create demo data
const seedDB = async (req, res) => {
  const baseData = {
    address: 'lagos, nigeria',
    website: 'https://domain.com',
    email: 'hello@domain.com',
    phone: '+23412345678'
  };
  const companies = [
    { name: 'konga', description: 'buy anything online' },
    { name: 'devcenter', description: 'hire great developers' },
    { name: 'paystack', description: 'simple payments' },
    { name: 'andela', description: 'training world class developers' },
    { name: 'jumia', description: 'best online shopping' },
    { name: 'flutterwave', description: 'powerful payments apis' },
    { name: 'hotels.ng', description: 'book hotels in nigeria' },
    { name: 'booking.com', description: 'largest hotel booking website' }
  ];

  const demo = await companies.map(company => Object.assign({}, baseData, company));

  await Business.remove({}, () => {
    demo.forEach((element) => {
      new Business(element).save();
    });
  });

  res.json({ demo });
};

export default seedDB;
