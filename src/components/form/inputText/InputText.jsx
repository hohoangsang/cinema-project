import React from 'react'
import { Controller } from 'react-hook-form'
import { useTranslation } from "react-i18next";

function InputText(props) {
    const {
        placeholder,
        control,
        fieldName,
        isRequire = true,
        validatePattern,
        error,
        type,
        disabled = false,
        defaultValue
    } = props
    const { t } = useTranslation();

    return (
        <div className="input-block">
            <label htmlFor={fieldName}>{t(`register.${fieldName}`)}<span>*</span> </label>
            <Controller
                control={control}
                name={fieldName}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value, ref, name } }) => (
                    <input
                        onChange={onChange}
                        onBlur={onBlur}
                        type={type}
                        id={fieldName}
                        disabled={disabled}
                        placeholder={placeholder}
                        defaultValue={defaultValue || ""}
                    />
                )}
                rules={{
                    required: {
                        value: isRequire,
                        message: `${t(`register.${fieldName}`)} ${t('register.require')}`,
                    },
                    pattern: {
                        value: validatePattern,
                        message: t(`register.${fieldName}_error`)
                    }
                }}
            />
            <span className="error-message">{error?.type && error.message}</span>
        </div>
    )
}

export default InputText
