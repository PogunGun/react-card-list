import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
    const [age, setAge] = React.useState('1');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{m: 1, minWidth: 120}} size="small">
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="1"
                onChange={handleChange}
            >
                <MenuItem value="2">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
            </Select>
        </FormControl>
    );
}