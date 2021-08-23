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
        type = "text",
        disabled = false
    } = props
    const { t } = useTranslation();

    return (
        <div className="input-block">
            <label htmlFor={fieldName}>{t(`register.${fieldName}`)}<span>*</span> </label>
            <Controller
                control={control}
                name={fieldName}
                render={({ field: { onChange, onBlur, value, ref, name } }) => (
                    <input
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value || ""}
                        type={type}
                        id={fieldName}
                        disabled={disabled}
                        placeholder={placeholder}
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
