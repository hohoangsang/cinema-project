import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import InputText from '../../../components/form/inputText/InputText';
import { emailRegex, nameRegex, phoneNumberRegex } from '../../../utils';

function EditPage() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { currentUser } = useSelector(state => state.user);
    const userId = sessionStorage.getItem('userId');
    const [showChangePassword, setShowChangePassword] = useState(false);

    const initialValues = {
        default_avatar: "",
        fullname: "",
        birthday: "",
        phone_number: "",
        email: "",
        id: userId,

        ...currentUser[0]
    }

    const {
        control, 
        handleSubmit,
        formState: { errors } 
    } = useForm({
        defaultValues: initialValues
    })

    const handleFormSubmit = (e) => {
        console.log(e);
    }

    return (
        <div className="editPage">
            <div className="editPage__title page-title">                       
                <h2>{t('info.edit')} {t('info.account_detail')}</h2>
            </div>
            <div className="editPage__form">    
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="default_avatar"
                            error={errors.default_avatar}
                        />
                    </div>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="fullname"
                            error={errors.fullname}
                            validatePattern={nameRegex}
                            placeholder={t('register.fullname_placeholder')}
                        />
                    </div>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="birthday"
                            error={errors.birthday}
                            type="date"
                        />
                    </div>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="phone_number"
                            error={errors.phone_number}
                            type="text"
                            validatePattern={phoneNumberRegex}
                            placeholder={t('register.phone_number_placeholder')}
                        />
                    </div>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="email"
                            error={errors.email}
                            validatePattern={emailRegex}
                            placeholder={t('register.email_placeholder')}
                        />
                    </div>
                    <div className="form-btn">
                        <button type="submit" className="primary-btn">
                            {t('info.edit')}
                        </button>
                        <button className="secondary-btn" onClick={() => {setShowChangePassword(true)}}>
                            {t('info.change_password')}
                        </button>
                    </div>
                </form>

                <form className = "form-changePassword" onSubmit={handleSubmit(handleFormSubmit)} style={{display: showChangePassword ? "block" : "none"}}>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="default_avatar"
                            error={errors.default_avatar}
                            type="password"
                        />
                    </div>
                    <div className="row-block">
                        <InputText
                            type="password"
                            control={control}
                            fieldName="fullname"
                            error={errors.fullname}
                            validatePattern={nameRegex}
                            placeholder={t('register.fullname_placeholder')}
                        />
                    </div>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="birthday"
                            error={errors.birthday}
                            type="password"
                        />
                    </div>
                    <div className="form-btn">
                        <button className="primary-btn" type="submit">
                            {t('info.change_password')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPage
