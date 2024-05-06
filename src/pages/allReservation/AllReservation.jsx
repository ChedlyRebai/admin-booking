import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ReservationItem from "../myreservation/ReservationItem";

const AllReservation = () => {
  const [AllReservation, setAllReservation] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/reservation/getallreservation`
        );
        console.log(response.data);
        setAllReservation(response.data); // assuming the data is the reservation
      } catch (error) {
        console.error("Failed to fetch reservations", error);
      }
    };
    fetchReservations();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container mt-4 mb-5">
        <h1>All Reservation</h1>
        {[...AllReservation].reverse().map((item, index) => (
          <ReservationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllReservation;
