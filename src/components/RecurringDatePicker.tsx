'use client';

import React, { useState } from 'react';

type Frequency = 'Daily' | 'Weekly' | 'Monthly';

const RecurringDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [frequency, setFrequency] = useState<Frequency>('Daily');
  const [repeatCount, setRepeatCount] = useState(1);

  const handleSubmit = () => {
    console.log('Start Date:', startDate);
    console.log('Frequency:', frequency);
    console.log('Repeat Count:', repeatCount);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Recurring Date Picker</h2>

      <label className="block">
        <span className="text-gray-700">Start Date</span>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Frequency</span>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as Frequency)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </label>

      <label className="block">
        <span className="text-gray-700">Repeat Count</span>
        <input
          type="number"
          min={1}
          value={repeatCount}
          onChange={(e) => setRepeatCount(parseInt(e.target.value))}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </label>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default RecurringDatePicker;
