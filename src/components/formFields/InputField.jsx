import { TextField } from '@material-ui/core'
import React from 'react'
import { useController } from 'react-hook-form'

export function InputField({name, control, label, inputLabelPropsShrink, ...inputProps}) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error }
    } = useController({
        name,
        control
    })

    return (
        <TextField 
            size="small"
            fullWidth
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            label={label} 
            variant="outlined" 
            error={invalid}
            helperText={error?.message}
            inputRef={ref}
            margin="normal"
            InputLabelProps={{
                shrink: inputLabelPropsShrink
            }}
            inputProps={inputProps}
        />
    )
}


