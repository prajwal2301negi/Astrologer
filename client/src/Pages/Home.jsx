import React, { useState } from 'react';
import axios from 'axios';

const AstrologyForm = () => {
  const [first_name, setFirstName] = useState('');
  const [first_year, setFirstYear] = useState('');
  const [first_month, setFirstMonth] = useState('');
  const [first_day, setFirstDay] = useState('');
  const [first_hour, setFirstHour] = useState('');
  const [first_minute, setFirstMinute] = useState('');
  const [first_longitude, setFirstLongitude] = useState('');
  const [first_latitude, setFirstLatitude] = useState('');
  const [first_city, setFirstCity] = useState('');
  const [first_nation, setFirstNation] = useState('');
  const [first_timezone, setFirstTimezone] = useState('');
  const [first_zodiacType, setFirstZodiacType] = useState('Tropic');

  const [second_name, setSecondName] = useState('');
  const [second_year, setSecondYear] = useState('');
  const [second_month, setSecondMonth] = useState('');
  const [second_day, setSecondDay] = useState('');
  const [second_hour, setSecondHour] = useState('');
  const [second_minute, setSecondMinute] = useState('');
  const [second_longitude, setSecondLongitude] = useState('');
  const [second_latitude, setSecondLatitude] = useState('');
  const [second_city, setSecondCity] = useState('');
  const [second_nation, setSecondNation] = useState('');
  const [second_timezone, setSecondTimezone] = useState('');
  const [second_zodiacType, setSecondZodiacType] = useState('Tropic');

  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  API_KEY = ''

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      url: 'https://astrologer.p.rapidapi.com/api/v4/relationship-score',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'astrologer.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        first_subject: {
          name: first_name,
          year: parseInt(first_year),
          month: parseInt(first_month),
          day: parseInt(first_day),
          hour: parseInt(first_hour),
          minute: parseInt(first_minute),
          longitude: parseFloat(first_longitude),
          latitude: parseFloat(first_latitude),
          city: first_city,
          nation: first_nation,
          timezone: first_timezone,
          zodiac_type: first_zodiacType
        },
        second_subject: {
          name: second_name,
          year: parseInt(second_year),
          month: parseInt(second_month),
          day: parseInt(second_day),
          hour: parseInt(second_hour),
          minute: parseInt(second_minute),
          longitude: parseFloat(second_longitude),
          latitude: parseFloat(second_latitude),
          city: second_city,
          nation: second_nation,
          timezone: second_timezone,
          zodiac_type: second_zodiacType
        }
      }
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setResponseData(response.data);
      setLoading(false);
    } catch (error) {
      setError('An error occurred while fetching the data.');
      setLoading(false);
    }
  };

  return (
    <div className="p-4 mt-8 max-w-md mx-auto bg-[#21212110] my-2 rounded-xl shadow-xl space-y-4">
      <h2 className="text-4xl p-2 font-bold text-[#212121] flex justify-center">Astrology Birth Chart</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h2 className='font-bold text-2xl flex justify-center p-2 m-2 '>Your Details</h2>

          <label className="block text-[#212121]">Name</label>
          <input
            type="text"
            name="name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Year</label>
          <input
            type="number"
            name="year"
            value={first_year}
            onChange={(e) => setFirstYear(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Month</label>
          <input
            type="number"
            name="month"
            value={first_month}
            onChange={(e) => setFirstMonth(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Day</label>
          <input
            type="number"
            name="day"
            value={first_day}
            onChange={(e) => setFirstDay(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Hour</label>
          <input
            type="number"
            name="hour"
            value={first_hour}
            onChange={(e) => setFirstHour(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Minute</label>
          <input
            type="number"
            name="minute"
            value={first_minute}
            onChange={(e) => setFirstMinute(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Longitude</label>
          <input
            type="number"
            step="0.000001"
            name="longitude"
            value={first_longitude}
            onChange={(e) => setFirstLongitude(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Latitude</label>
          <input
            type="number"
            step="0.000001"
            name="latitude"
            value={first_latitude}
            onChange={(e) => setFirstLatitude(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">City</label>
          <input
            type="text"
            name="city"
            value={first_city}
            onChange={(e) => setFirstCity(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Nation</label>
          <input
            type="text"
            name="nation"
            value={first_nation}
            onChange={(e) => setFirstNation(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Timezone</label>
          <input
            type="text"
            name="timezone"
            value={first_timezone}
            onChange={(e) => setFirstTimezone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Zodiac Type</label>
          <select
            name="zodiac_type"
            value={first_zodiacType}
            onChange={(e) => setFirstZodiacType(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="Tropic">Tropic</option>
            <option value="Sidereal">Sidereal</option>
          </select>
        </div>



        <h2 className='font-bold text-2xl flex justify-center p-2 m-2 '>Your Partner Details</h2>

        <div>
          <label className="block text-[#212121]">Name</label>
          <input
            type="text"
            name="name"
            value={second_name}
            onChange={(e) => setSecondName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Year</label>
          <input
            type="number"
            name="year"
            value={second_year}
            onChange={(e) => setSecondYear(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Month</label>
          <input
            type="number"
            name="month"
            value={second_month}
            onChange={(e) => setSecondMonth(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Day</label>
          <input
            type="number"
            name="day"
            value={second_day}
            onChange={(e) => setSecondDay(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Hour</label>
          <input
            type="number"
            name="hour"
            value={second_hour}
            onChange={(e) => setSecondHour(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Minute</label>
          <input
            type="number"
            name="minute"
            value={second_minute}
            onChange={(e) => setSecondMinute(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Longitude</label>
          <input
            type="number"
            step="0.000001"
            name="longitude"
            value={second_longitude}
            onChange={(e) => setSecondLongitude(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Latitude</label>
          <input
            type="number"
            step="0.000001"
            name="latitude"
            value={second_latitude}
            onChange={(e) => setSecondLatitude(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">City</label>
          <input
            type="text"
            name="city"
            value={second_city}
            onChange={(e) => setSecondCity(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Nation</label>
          <input
            type="text"
            name="nation"
            value={second_nation}
            onChange={(e) => setSecondNation(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Timezone</label>
          <input
            type="text"
            name="timezone"
            value={second_timezone}
            onChange={(e) => setSecondTimezone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-[#212121]">Zodiac Type</label>
          <select
            name="zodiac_type"
            value={second_zodiacType}
            onChange={(e) => setSecondZodiacType(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="Tropic">Tropic</option>
            <option value="Sidereal">Sidereal</option>
          </select>
        </div>







        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
        >
          Generate Birth Chart
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {responseData && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Result:</h3>
          <div className="text-sm text-[#212121] overflow-x-auto">
            <h4 className="font-bold">Score: {responseData.score}</h4>
            <h4 className="font-bold mt-2">Aspects:</h4>
            <ul className="space-y-2">
              {responseData.aspects.map((aspect, index) => (
                <li key={index} className="bg-white p-2 rounded-md shadow-sm">
                  <p><strong>Points:</strong> {aspect.points}</p>
                  <p><strong>Aspect:</strong> {aspect.p1_name} and {aspect.p2_name} - {aspect.aspect}</p>
                  <p><strong>Orbit:</strong> {aspect.orbit.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}


    </div>
  );
};

export default AstrologyForm;
