import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function RangeSlider(props) {
  const { minValue, maxValue, onPriceRangeChange } = props;
  const [value, setValue] = useState([minValue, maxValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onPriceRangeChange(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minValue}
        max={maxValue}
      />
    </Box>
  );
}
