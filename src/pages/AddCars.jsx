import React, { useState } from 'react';
import '../styles/AddCars.css'; // You can style the form separately

const AddCars = () => {
  const [carData, setCarData] = useState({
    carName: '',
    carModel: '',
    carNumber: '',
    rentPerDay: '',
    availability: 'Available',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to the backend
    console.log('Car Data Submitted:', carData);
  };

  return (
    <div className="add-cars-container">
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="carName">Car Name:</label>
          <input
            type="text"
            id="carName"
            name="carName"
            value={carData.carName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="carModel">Car Model:</label>
          <input
            type="text"
            id="carModel"
            name="carModel"
            value={carData.carModel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="carNumber">Car Number:</label>
          <input
            type="text"
            id="carNumber"
            name="carNumber"
            value={carData.carNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rentPerDay">Rent per Day (₹):</label>
          <input
            type="number"
            id="rentPerDay"
            name="rentPerDay"
            value={carData.rentPerDay}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="availability">Availability:</label>
          <select
            id="availability"
            name="availability"
            value={carData.availability}
            onChange={handleChange}
          >
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCars;
