import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { USER_EDIT_PATH } from '../../../constant/route';

function UserPage() {
    const { t } = useTranslation();
    const { currentUser } = useSelector(state => state.user);

    return (
        <div className="infoPage">
            <div className="infoPage__title page-title"> 
                <h2>{t('info.dashboard')}</h2>
            </div>
            { currentUser && 
                (
                    <div className="infoPage__profile">
                        <div className="infoPage__profile--top">
                            <div className="profile__img">
                                <img src={currentUser.default_avatar} alt={currentUser.fullname}/>
                            </div>
                            <div className="profile__bio">  
                                <p>{t('info.hi')} {currentUser.fullname}!</p>
                                <span>{t('info.bio')}</span>
                            </div>
                        </div>
                        <div className="infoPage__profile--box">
                            <div className="box-head">
                                <p>{t('info.info_person')}</p>
                            </div>
                            <div className="box-content">
                                <span>{t('register.fullname')}: {currentUser.fullname}</span>
                                <span>{t('register.email')}: {currentUser.email}</span>
                                <span>{t('register.birthday')}: {currentUser.birthday}</span>
                                <span>{t('register.phone_number')}: {currentUser.phone_number}</span>
                            </div>
                            <div className="box-btn">
                                <Link to={USER_EDIT_PATH}>
                                    <p>{t('info.edit')}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UserPage
