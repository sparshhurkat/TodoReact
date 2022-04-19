import { useState } from "react";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OutlinedInput from '@mui/material/OutlinedInput';

const AddTodo = ({ addTask }) => {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      value && addTask(value)
      setValue("");
    };
  
    return (
        <FormControl variant="standard">
        <form onSubmit={handleSubmit} >
        <OutlinedInput
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <KeyboardArrowDownIcon />
                </InputAdornment>}
            value={value}
            
            placeholder="What needs to be done?"
            onChange={e => setValue(e.target.value)}
            
        />
      </form>
      </FormControl>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={value}
    //       placeholder="Enter a title for this task…"
    //       onChange={e => setValue(e.target.value)}
    //     />
    //     <button type="submit"><i class="fas fa-plus"></i></button>
    //   </form>
    );
  }

  export default AddTodo;