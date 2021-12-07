import { Container } from '@material-ui/core';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOG_IN_PATH } from '../../../../constant/route';
import { emailRegex, nameRegex, passwordRegex, phoneNumberRegex } from '../../../../utils/regex';
import InputText from '../../../../components/form/inputText/InputText';
import { registerRequest } from '../../../../redux/action/authAction'
import Alert from '@material-ui/lab/Alert';

function Register() {
    const [notice, setNotice] = useState(null)
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { error } = useSelector(state => state.auth);
    const { 
        control,  
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onHandleSubmit = (values) => {
        if(values.password === values.confirm_password){
            delete values.confirm_password;
            dispatch(registerRequest(values))
        } else {
            setNotice(t('register.confirm_password_error'));
        }
    }

    return (
        <div className="login-register--box">
            <Container>
                <div className="login-register--box__content">
                    <h2 className="login-register--box__content__header">
                        <span>
                            <Link to={LOG_IN_PATH}>
                                {t('login.login')}
                            </Link>
                        </span>
                        <span className="active">  
                            {t('register.register')}
                        </span>
                    </h2>
                    <form className="login-register--box__form form" onSubmit={handleSubmit(onHandleSubmit)}>
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

                        <div className="row-block">
                            <InputText
                                control={control}
                                fieldName="password"
                                error={errors.password}
                                type="password"
                                validatePattern={passwordRegex}
                                placeholder={t('register.password_placeholder')}
                            />
                        </div>

                        <div className="row-block">
                            <InputText
                                control={control}
                                fieldName="confirm_password"
                                error={errors.password}
                                type="password"
                                placeholder={t('register.confirm_password_placeholder')}
                            />
                        </div>

                        <div className="row-block" style={{display: notice ? "block" : "none"}}>
                            <span className="error-message">{notice}</span>
                        </div>

                        {error && (<Alert className="alert" severity="error">{error}</Alert>)}
                        <br/>
                        <button type="submit" className="primary-btn">
                            {t('register.register')}
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Register
