import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';
import { useController } from 'react-hook-form';

export function RadioGroupField({ name, control, label, disabled, options }) {
    const {
        field: { value, onChange, onBlur },
        fieldState: { invalid, error }
    } = useController({
        name,
        control
    }) 


    return (
        <FormControl margin="normal" disabled={disabled} component="fieldset" error={invalid}>
            <FormLabel component="legend">{label}</FormLabel>

            <RadioGroup name={name} value={value} onChange={onChange} onBlur={onBlur}>
                {options.map((option) => {
                    return (
                        <FormControlLabel 
                            key={option.value} 
                            value={option.value} 
                            control={<Radio />} 
                            label={option.label} 
                        />
                    )
                })}
            </RadioGroup>

            <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
    )
}