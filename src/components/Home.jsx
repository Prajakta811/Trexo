import React from "react";

const Home = () => {
  const data = [
    "Signup with mobile number",
    "Enter your PAN Card Details",
    "Setup your Savings Account ",
    "Activate your account with KYC",
    "Start using Trexo!",
  ];

  return (
    <div className="p-4 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row gap-6">

        <div className="sm:basis-1/2 flex flex-col justify-between px-6 py-6 rounded-md bg-white">
          <div>
            <h1 className="font-semibold text-2xl mb-2">
              Open. Activate. Bank — all in minutes
            </h1>
            <p className="text-gray-700">
              Set up your account instantly and start banking hassle-free
            </p>
          </div>

          <ul className="mt-6 pl-5 text-gray-800  border-l-1 border-teal-700 font-medium space-y-5 pt-6">
            <li className="w-full truncate overflow-hidden whitespace-nowrap">
              ➝ Instant account opening with Aadhaar and PAN
            </li>
            <li className="w-full truncate overflow-hidden whitespace-nowrap">
              ➝ No minimum balance requirement
            </li>
            <li className="w-full truncate overflow-hidden whitespace-nowrap">
              ➝ Convenient KYC with video verification
            </li>
            <li className="w-full truncate overflow-hidden whitespace-nowrap">
              ➝ Free virtual debit card
            </li>
            <li className="w-full truncate overflow-hidden whitespace-nowrap">
              ➝ Physical debit card deliv ered with an insta kit
            </li>
          </ul>
        </div>
        <div className="sm:basis-1/2 flex items-center justify-center">
          <div className="w-full py-5 bg-[url('/images/bgImage.png')] bg-no-repeat bg-center bg-gray-100 bg-[length:300px] rounded-md">
            <div className="relative flex flex-col items-start pl-10">
              <div className="absolute top-6 left-14 sm:left-14 h-[85%] w-0.5 bg-teal-700"></div>

              {data.map((item, idx) => (
                <div
                  key={idx}
                  className="flex w-full items-start mt-6 relative"
                >
                  <div className="z-10 w-8 h-8 flex items-center justify-center rounded-full bg-teal-700 text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="ml-6">
                    <p className="text-gray-800 font-medium truncate overflow-hidden whitespace-nowrap">{item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
