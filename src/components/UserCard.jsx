import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserCard = () => {
  const [userData, setUserData] = useState({
    loading: false,
    data: [],
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    setUserData((pre) => ({ ...pre, loading: true }));
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = res.data;
      setUserData((prev) => ({ ...prev, data: data }));
    } catch (error) {
      console.log(error.message);
      setUserData((pre) => ({ ...pre, error: error.message }));
    } finally {
      setUserData((pre) => ({ ...pre, loading: false }));
    }
  }

  return (
    <div className="flex flex-col justify-center items-center px-4">
      {userData.loading ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : userData.error ? (
        <div>
          <h1>Failed to fetch users....</h1>
        </div>
      ) : (
        <>
          <h1 className="text-center py-5 text-xl font-bold">User Details:</h1>

          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[90%] p-6 md:p-8 leading-8 bg-gray-100 rounded-sm ">
            <label htmlFor=""> Name:</label>
            <h1 className="font-bold">{userData.data.name}</h1>
            <hr />
            <label htmlFor=""> Username:</label>
            <p className="font-bold">{userData.data.username}</p>
            <hr />
            <label htmlFor=""> Email:</label>
            <p className="font-bold">{userData.data.email}</p>
            <hr />
            <label htmlFor=""> Address:</label>
            <p className="font-bold">
              {userData.data.address?.street}, {userData.data.address?.suite},{" "}
              {userData.data.address?.city}, {userData.data.address?.zipcode}
            </p>
            <hr />
            <label htmlFor=""> Phone:</label>
            <p className="font-bold">{userData.data.phone}</p>
            <hr />
            <label htmlFor=""> Website:</label>
            <p className="font-bold">{userData.data.website}</p>
            <hr />
            <label htmlFor=""> Company:</label>
            <p className="font-bold">
              {userData.data.company?.name} (
              {userData.data.company?.catchPhrase}), {userData.data.company?.bs}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCard;
