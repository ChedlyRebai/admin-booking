import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { hotelId } = useParams();
  const history = useHistory();
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`/api/hotels/${hotelId}`);
        setHotel(response.data);
      } catch (error) {
        console.error('Error fetching hotel:', error);
      }
    };

    fetchHotel();
  }, [hotelId]);

  const handleSubmit = async () => {
    try {
      await axios.put(`/api/hotels/${hotelId}`, hotel);
      console.log('Hotel updated successfully!');
      history.push('/hotels'); // Redirect to the hotel list after successful update
    } catch (error) {
      console.error('Error updating hotel:', error);
    }
  };

  return (
    <div>
      <h1>Edit Hotel {hotel.name}</h1>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={hotel.name || ''}
          onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
        />
        {/* Add other input fields for editing */}
        <button type="button" onClick={handleSubmit}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
