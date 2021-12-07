import { Container } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link, useHistory } from 'react-router-dom';
import { REGISTER_PATH } from '../../../../constant/route';
import { logInRequest } from '../../../../redux/action/authAction';
import { emailRegex } from '../../../../utils/regex';
import InputText from '../../../../components/form/inputText/InputText';
import Alert from '@material-ui/lab/Alert';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { t } = useTranslation();
    const { error } = useSelector(state => state.auth);
    const { 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onHandleSunmit = (values) => {
        dispatch(logInRequest(values.email, values.password));
    }

    return (
        <div className="login-register--box">
            <Container>
                <div className="login-register--box__content">
                    <h2 className="login-register--box__content__header">
                        <span className="active">  
                            {t('login.login')}
                        </span>
                        <span>
                            <Link to={REGISTER_PATH}>
                                {t('register.register')}
                            </Link>
                        </span>
                    </h2>
                    <form className="login-register--box__content__form form" onSubmit={handleSubmit(onHandleSunmit)}>
                        <div className="row-block">
                            <InputText
                                control={control}
                                fieldName="email"
                                error={errors.email}
                                validatePattern={emailRegex}
                                placeholder={t('login.email_placeholder')}
                            />
                        </div>

                        <div className="row-block">
                            <InputText
                                control={control}
                        fieldName="password"
                                error={errors.password}
                                type="password"
                                placeholder={t('login.password_placeholder')}
                            />
                        </div>

                        {error && (<Alert className="alert" severity="error">{error}</Alert>)}
                        <br/>
                        <button type="submit" className="primary-btn">
                            {t('login.login')}
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login
