"use client";
import React, { useState, useEffect } from "react";

const frequencies = ["Daily", "Weekly", "Monthly"];

const RecurringDatePicker = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("Daily");
  const [recurringDates, setRecurringDates] = useState<string[]>([]);

  useEffect(() => {
    if (startDate && endDate) {
      const dates: string[] = [];
      const current = new Date(startDate);
      const end = new Date(endDate);

      while (current <= end) {
        dates.push(current.toISOString().split("T")[0]);
        if (frequency === "Daily") current.setDate(current.getDate() + 1);
        else if (frequency === "Weekly") current.setDate(current.getDate() + 7);
        else if (frequency === "Monthly") current.setMonth(current.getMonth() + 1);
      }

      setRecurringDates(dates);
    } else {
      setRecurringDates([]);
    }
  }, [startDate, endDate, frequency]);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-indigo-700 text-center">Recurring Date Picker</h2>

      {/* Start Date */}
      <div>
        <label className="block text-sm font-semibold text-purple-700 mb-1">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full px-4 py-2 border border-purple-400 rounded-lg bg-purple-50 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* End Date */}
      <div>
        <label className="block text-sm font-semibold text-pink-700 mb-1">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full px-4 py-2 border border-pink-400 rounded-lg bg-pink-50 text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Frequency */}
      <div>
        <label className="block text-sm font-semibold text-green-700 mb-1">Frequency</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="w-full px-4 py-2 border border-green-400 rounded-lg bg-green-50 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {frequencies.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      {/* Summary */}
      <div className="text-sm text-gray-800">
        <p>
          Selected frequency: <strong className="text-blue-700">{frequency}</strong>
        </p>
        <p>
          Start: <strong className="text-purple-700">{startDate || "N/A"}</strong> &nbsp;&nbsp;
          End: <strong className="text-pink-700">{endDate || "N/A"}</strong>
        </p>
      </div>

      {/* Recurring Dates List */}
      {recurringDates.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 max-h-60 overflow-y-auto">
          <h4 className="text-md font-semibold text-indigo-600 mb-2">Recurring Dates:</h4>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            {recurringDates.map((date, idx) => (
              <li key={idx}>{date}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecurringDatePicker;
