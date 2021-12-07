import { Box, Button, CircularProgress } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { InputField, RadioGroupField, SelectField } from '../../../../components/formFields';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { phoneNumberRegex } from '../../../../utils/regex';

function UserForm({initialValues, onSubmit}) {
    const schema = yup.object().shape({
        fullname: yup
            .string()
            .required("Please enter Full name")
            .test('Two-words', 'Please enter at least two words', (value) => {
                if(!value) return true

                const parts = value.split(' ');
                return parts.filter(x => Boolean(x)).length >= 2;
            }),
        gender: yup 
            .string()
            .oneOf(['male', 'female'], "Please select either male or female")
            .required('Please select gender'),
        birthday: yup
            .date()
            .required('Please enter your birthday')
            .typeError("Please enter valid birthday"),
        city: yup
            .string()
            .required("Please enter city"),
        email: yup   
            .string()
            .required("Please enter your email")
            .email("Invalid email"),
        phone_number: yup
            .string()
            .required("Please enter new phone number")
            .matches(phoneNumberRegex, "Invalid phone number")
    });
      
    const {
        control,
        handleSubmit,
        formState: {isSubmitting}
    } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(schema)
    });

    const { cityOptions } = useSelector(state => state.city);

    const handleFormSubmit = async (formValues) => {
        if(!onSubmit) return;

        const { birthday } = formValues;
        const newBirthday = (new Date(birthday.getTime() + Math.abs(birthday.getTimezoneOffset()*60000))).toISOString().substring(0, 10);   

        const newFormValues = {
            ...formValues,
            birthday: newBirthday
        }

        try {
            await onSubmit(newFormValues)
        } catch (error) {
            console.log('Faild to Add/Edit user', error)
        }
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                {/* Form Fields (Base Control) */}
                <InputField
                    name='fullname'
                    label='Full Name'
                    control={control}
                />

                <RadioGroupField
                    name='gender'
                    label='Gender'
                    control={control}
                    options={[
                        { label: 'Male', value: 'male' },
                        { label: 'Female', value: 'female' } 
                    ]}
                />

                <InputField
                    name='birthday'
                    label='Birthday'
                    control={control}
                    type="date"
                    inputLabelPropsShrink={true}
                />

                <SelectField
                    name='city'
                    label='City'
                    control={control}
                    options={cityOptions}
                />

                <InputField
                    name='email'
                    label='Email'
                    control={control}
                />

                <InputField
                    name='phone_number'
                    label='Phone Number'
                    control={control}
                />

                <Box>
                    <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                        {isSubmitting && (<CircularProgress size={20} color="secondary"/>)}
                        &nbsp;Save&nbsp;
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default UserForm
