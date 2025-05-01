import axios from "axios";
import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router";

const UserList = () => {
  const [userData, setUserData] = useState({
    loading: false,
    data: [],
    error: null,
  });
  const [activeTab, setActiveTab] = useState("NSD");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setUserData((pre) => ({ ...pre, loading: true }));
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = res.data;
      setUserData((prev) => ({ ...prev, data: data }));
    } catch (error) {
      console.log(error.message);
      setUserData((pre) => ({ ...pre, error: error.message }));
    } finally {
      setUserData((pre) => ({ ...pre, loading: false, error: null }));
    }
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 500px)": {
        slides: { perView: 1 },
      },
      "(min-width: 600px) and (max-width: 1024px)": {
        slides: { perView: 2 },
      },
    },
  });

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [userData]);

  return (
    <>
      {userData?.loading ? (
        <div>
          <h1>Loading.....</h1>
        </div>
      ) : userData.error ? (
        <div>
          <h1>Failed to fetch users...</h1>
        </div>
      ) : (
        <div className="py-8 px-4">
          <div className="text-center">
            <h1 className="font-bold text-xl">
              How can I register a complaint?
            </h1>
            <p>User Cards:</p>
          </div>

          <div ref={sliderRef} className="keen-slider py-5">
            {userData?.data &&
              userData?.data?.map((item) => (
                <div
                  key={item.id}
                  className="keen-slider__slide bg-gray-50 mx-2 text-base px-3 py-5  leading-8 cursor-pointer"
                  onClick={() => navigate(`/userdata/${item.id}`)}
                >
                  <h2>
                    <b>Name :</b> {item.name}
                  </h2>
                  <p>
                    <b>Phone :</b> {item.phone}
                  </p>
                  <p>
                    <b>Email :</b> {item.email}
                  </p>
                  <p>
                    <b>Website :</b> {item.website}
                  </p>
                </div>
              ))}
          </div>

          <div className="text-center py-8">
            <h1 className="font-bold text-xl">
              Your NSDL Payments Bank account
            </h1>
            <p>This includes saving, corporate, and salary accounts.</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-evenly gap-2 w-full md:w-[50%]">
              <button
                className={`border border-[#333] p-4 ${
                  activeTab === "NSD" ? "bg-[#000] text-white" : ""
                }`}
                onClick={() => setActiveTab("NSD")}
              >
                NSD
              </button>
              <button
                className={`border border-[#333] p-4 ${
                  activeTab === "credit-card" ? "bg-[#000] text-white" : ""
                }`}
                onClick={() => setActiveTab("credit-card")}
              >
                Credit Card
              </button>
              <button
                className={`border border-[#333] p-4 ${
                  activeTab === "loans" ? "bg-[#000] text-white" : ""
                }`}
                onClick={() => setActiveTab("loans")}
              >
                Loans
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center py-8 w-full">
            {activeTab === "NSD" ? (
              <div className="sm:w-[90%] md:w-[80%] lg:w-[90%] p-6 md:p-8 leading-8 bg-gray-100 rounded-sm">
                <h1 className="font-bold text-2xl"> Level 1: Customer Support </h1>
                <label>Name:</label>
                <h1 className="font-bold">{userData?.data[0]?.name}</h1>
                <hr />
                <label>Email:</label>
                <p className="font-bold">{userData?.data[0]?.email}</p>
                <hr />
                <label>Phone:</label>
                <p className="font-bold">{userData?.data[0]?.phone}</p>
                <hr />
                <label>Website:</label>
                <p className="font-bold">{userData?.data[0]?.website}</p>
                <hr />
                <label>Company:</label>
                <p className="font-bold">
                  {userData?.data[0]?.company?.name} (
                  {userData?.data[0]?.company?.catchPhrase})
                  {userData?.data[0]?.company?.bs}
                </p>
              </div>
            ) : activeTab === "credit-card" ? (
              <div className="sm:w-[90%] md:w-[80%] lg:w-[90%] p-6 md:p-8 leading-8 bg-gray-100 rounded-sm">
                <h1 className="font-bold text-2xl"> Level 2: Customer Support </h1>
                <label>Name:</label>
                <h1 className="font-bold">{userData?.data[4]?.name}</h1>
                <hr />
                <label>Email:</label>
                <p className="font-bold">{userData?.data[4]?.email}</p>
                <hr />
                <label>Phone:</label>
                <p className="font-bold">{userData?.data[4]?.phone}</p>
                <hr />
                <label>Website:</label>
                <p className="font-bold">{userData?.data[4]?.website}</p>
                <hr />
                <label>Company:</label>
                <p className="font-bold">
                  {userData?.data[4]?.company?.name} (
                  {userData?.data[4]?.company?.catchPhrase}),{" "}
                  {userData?.data[4]?.company?.bs}
                </p>
              </div>
            ) : (
              activeTab === "loans" && (
                <div className="sm:w-[90%] md:w-[80%] lg:w-[90%] p-6 md:p-8 leading-8 bg-gray-100 rounded-sm">
                  <h1 className="font-bold text-2xl"> Level 3: Customer Support </h1>
                  <label>Name:</label>
                  <h1 className="font-bold">{userData?.data[8]?.name}</h1>
                  <hr />
                  <label>Email:</label>
                  <p className="font-bold">{userData?.data[8]?.email}</p>
                  <hr />
                  <label>Phone:</label>
                  <p className="font-bold">{userData?.data[8]?.phone}</p>
                  <hr />
                  <label>Website:</label>
                  <p className="font-bold">{userData?.data[8]?.website}</p>
                  <hr />
                  <label>Company:</label>
                  <p className="font-bold">
                    {userData?.data[8]?.company?.name} (
                    {userData?.data[8]?.company?.catchPhrase})
                     {userData?.data[8]?.company?.bs}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
