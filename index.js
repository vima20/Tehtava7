import React, { useState } from 'react';

export const useField = (type) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false); // Add state for focus tracking

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(''); // Clear the input field value
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return {
    type,
    value,
    onChange,
    reset,
    onFocus,
    onBlur,
    isFocused, // Provide the isFocused state
  };
};
