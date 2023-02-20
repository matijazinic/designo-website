import React from "react";

export default function Locations() {
  const data = [
    {
      country: "Canada",
      id: "canada",
      title: "Designo Central Office",
      addressLine1: "3886 Wellington Street",
      addressLine2: "Toronto, Ontario M9C 3J5",
      phone: "+1 253-863-8967",
      email: "contact@designo.co",
      image: "/designo-website/assets/locations/desktop/image-map-canada.png",
    },
    {
      country: "Australia",
      id: "australia",
      title: "Designo AU Office",
      addressLine1: "19 Balonne Street",
      addressLine2: "New South Wales 2443",
      phone: "(02) 6720 9092",
      email: "contact@designo.au",
      image:
        "/designo-website/assets/locations/desktop/image-map-australia.png",
    },
    {
      country: "United Kingdom",
      id: "united-kingdom",
      title: "Designo UK Office",
      addressLine1: "13 Colorado Way",
      addressLine2: "Rhyd-y-fro SA8 9GA",
      phone: "078 3115 1400",
      email: "contact@designo.uk",
      image:
        "/designo-website/assets/locations/desktop/image-map-united-kingdom.png",
    },
  ];
  return data.map((item) => {
    return (
      <div
        className="locations sm:rounded-lg lg:grid lg:gap-4 xl:gap-8"
        id={item.id}
      >
        <img
          className="w-full object-cover max-h-[320px] lg:h-full lg:max-h-full sm:rounded-tr-lg sm:rounded-tl-lg md:rounded-br-lg md:rounded-bl-lg order-2"
          src={item.image}
        />
        <div className="py-16 px-10 flex flex-col justify-center items-center text-center gap-6 bg-brand-alt sm:rounded-lg md:mt-8 lg:mt-0 md:items-start md:text-left md:px-20 lg:py-28 lg:gap-10">
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-brand">
            {item.country}
          </h2>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:w-full">
            <div>
              <p className="font-medium">{item.title}</p>
              <p>
                {item.addressLine1} <br />
                {item.addressLine2}
              </p>
            </div>
            <div>
              <p className="font-medium">Contact</p>
              <p>
                P: {item.phone} <br />
                M: {item.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
