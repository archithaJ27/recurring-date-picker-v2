"use client";

import React, { useState } from "react";

const RecurringDatePicker = () => {
  const [frequency, setFrequency] = useState("daily");
  const [day, setDay] = useState("Monday");
  const [date, setDate] = useState(1);

  return (
    <div className="max-w-md mx-auto p-4 rounded-xl shadow-md bg-white space-y-4">
      <h2 className="text-xl font-semibold">Recurring Date Picker</h2>

      {/* Frequency Dropdown */}
      <div className="space-y-1">
        <label className="block text-sm font-medium">Repeat</label>
        <select
          className="w-full border p-2 rounded"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Weekly Selection */}
      {frequency === "weekly" && (
        <div className="space-y-1">
          <label className="block text-sm font-medium">Select Day</label>
          <select
            className="w-full border p-2 rounded"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
              (d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              )
            )}
          </select>
        </div>
      )}

      {/* Monthly Selection */}
      {frequency === "monthly" && (
        <div className="space-y-1">
          <label className="block text-sm font-medium">Select Date (1–31)</label>
          <input
            type="number"
            min={1}
            max={31}
            className="w-full border p-2 rounded"
            value={date}
            onChange={(e) => setDate(parseInt(e.target.value))}
          />
        </div>
      )}

      {/* Output Summary */}
      <div className="pt-4 text-sm text-gray-700">
        <strong>Summary:</strong>{" "}
        {frequency === "daily"
          ? "Every day"
          : frequency === "weekly"
          ? `Every ${day}`
          : `Every month on the ${date}${getOrdinal(date)}`}
      </div>
    </div>
  );
};

const getOrdinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export default RecurringDatePicker;
