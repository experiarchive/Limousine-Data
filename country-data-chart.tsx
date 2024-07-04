import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: '1월', 중국: 148377, 일본: 93615, 미국: 55862, 대만: 54497, 베트남: 16586, 필리핀: 15656, 홍콩: 23496, 싱가포르: 11941, 말레이시아: 14623, 태국: 17558 },
  { month: '2월', 중국: 211522, 일본: 126603, 미국: 55233, 대만: 51353, 베트남: 30996, 필리핀: 14335, 홍콩: 32185, 싱가포르: 12877, 말레이시아: 25935, 태국: 19082 },
  { month: '3월', 중국: 194655, 일본: 241881, 미국: 102564, 대만: 55121, 베트남: 37772, 필리핀: 30664, 홍콩: 42493, 싱가포르: 32181, 말레이시아: 21294, 태국: 26809 },
  { month: '4월', 중국: 211154, 일본: 152268, 미국: 100190, 대만: 58771, 베트남: 42308, 필리핀: 28419, 홍콩: 36686, 싱가포르: 27175, 말레이시아: 26559, 태국: 36670 },
  { month: '5월', 중국: 204791, 일본: 170224, 미국: 106527, 대만: 58503, 베트남: 30075, 필리핀: 22982, 홍콩: 39152, 싱가포르: 31545, 말레이시아: 24336, 태국: 22709 },
];

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#a4de6c', '#d88cf0', '#8dd1e1', '#e6ac00', '#ff6b6b', '#66c2a5'];

const AllCountriesDataChart = () => {
  const [visibleCountries, setVisibleCountries] = useState(
    Object.keys(data[0]).filter(key => key !== 'month')
  );

  const toggleCountry = (country) => {
    setVisibleCountries(prev =>
      prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };

  return (
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend onClick={(e) => toggleCountry(e.dataKey)} />
          {Object.keys(data[0]).filter(key => key !== 'month').map((country, index) => (
            <Line
              type="monotone"
              dataKey={country}
              stroke={colors[index]}
              key={country}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              hide={!visibleCountries.includes(country)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AllCountriesDataChart;
