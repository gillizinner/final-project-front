import * as React from 'react';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker(props) {
  const [selectedStartDate, setselectedStartDate] = useState(null);
  const [selectedEndDate, setselectedEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setselectedStartDate(date);
    props.handleStartDateChange(date);
  };
  const handleEndDateChange = (date) => {
    setselectedEndDate(date);
    props.handleEndDateChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Start Date"
          value={selectedStartDate}
          onChange={handleStartDateChange}
        />
        {/* {selectedStartDate && (
          <p>Selected Start date: {new Date(selectedStartDate).toLocaleDateString()}</p>
        )} */}
        <DatePicker
          label="End Date"
          value={selectedEndDate}
          onChange={handleEndDateChange}
        />
        {/* {selectedEndDate && (
          <p>Selected End date: {new Date(selectedEndDate).toLocaleDateString()}</p>
        )} */}
      </DemoContainer>
    </LocalizationProvider>
  );
}
