import { FormHelperText, MenuItem, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import { useController } from 'react-hook-form';

export function SelectField({ name, control, label, disabled, options }) {
    const {
        field: { value, onChange, onBlur },
        fieldState: { invalid, error }
    } = useController({
        name,
        control
    })

    return (
        <FormControl fullWidth variant="outlined" margin="normal" disabled={disabled} error={invalid} size="small">
            <InputLabel id={`${name}_label`}>{label}</InputLabel>
            <Select
                id={`${name}_label`}
                label={label}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            >
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
            </Select>

            <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
    )
}
