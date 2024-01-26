/* eslint-disable react/prop-types */

import TextField from '@mui/material/TextField';

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}) {
  return (
    <div className="my-5">
      <TextField
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        label={labelText}
        variant="outlined"
        fullWidth
        margin="normal"
        className={customClass}
        placeholder={placeholder}
      />
    </div>
  );
}
