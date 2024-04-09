import React from "react";

const Pirce = () => {
  const prices = [
    {
      name: "Basic Package",
      price: "$25",
      text:'per month,bill annualy',
      checked: [
        "Basic Package",
        "2x Fitness Consultant",
        "Nutrition Tracking",
        "1x Free Suplement",
        "3 Days per week",
        "Personal Trainer",
      ],
      textBtn:'Register Now'
    },
    {
      name: "Mid Package",
      text:'per month,bill annualy',
      price: "$55",
      checked: [
        "Basic Package",
        "2x Fitness Consultant",
        "Nutrition Tracking",
        "1x Free Suplement",
        "3 Days per week",
        "Personal Trainer",
      ],
      textBtn:'Register Now'
    },
    {
      name: "Pro Package",
      price: "$75",
      text:'per month,bill annualy',
      checked: [
        "Basic Package",
        "2x Fitness Consultant",
        "Nutrition Tracking",
        "1x Free Suplement",
        "3 Days per week",
        "Personal Trainer",
      ],
      textBtn:'Register Now'
    },
    {
      name: "Athlete Package",
      price: "$105",
      text:'per month,bill annualy',
      checked: [
        "Basic Package",
        "2x Fitness Consultant",
        "Nutrition Tracking",
        "1x Free Suplement",
        "3 Days per week",
        "Personal Trainer",
      ],
      textBtn:'Register Now'
    },
  ];

  return (
    <div className="container mx-auto">
      <div>
        <p>Pricing</p>
        <h1>Our List Packages</h1>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {
          prices.map(c => (
            <div className="text-white bg-sky-500">
              <h3>{c.name}</h3>
              <h1>{c.price}</h1>
              <p>{c.text}</p>
              <div>
                {
                  c.checked.map(c =>(
                    <p>{c}</p>
                  ))
                }
              </div>
              <button>{c.textBtn}</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Pirce;
