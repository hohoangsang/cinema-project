import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { USER_EDIT_PATH } from '../../../constant/route';

function UserPage() {
    const { t } = useTranslation();
    const { currentUser } = useSelector(state => state.user)

    return (
        <div className="infoPage">
            <div className="infoPage__title page-title"> 
                <h2>{t('info.dashboard')}</h2>
            </div>
            { currentUser &&
                currentUser.map(user => {
                    return (
                        <div className="infoPage__profile">
                            <div className="infoPage__profile--top">
                                <div className="profile__img">
                                    <img src={user.default_avatar} alt={user.fullname}/>
                                </div>
                                <div className="profile__bio">  
                                    <p>{t('info.hi')} {user.fullname}!</p>
                                    <span>{t('info.bio')}</span>
                                </div>
                            </div>
                            <div className="infoPage__profile--box">
                                <div className="box-head">
                                    <p>{t('info.info_person')}</p>
                                </div>
                                <div className="box-content">
                                    <span>{t('register.fullname')}: {user.fullname}</span>
                                    <span>{t('register.email')}: {user.email}</span>
                                    <span>{t('register.birthday')}: {user.birthday}</span>
                                    <span>{t('register.phone_number')}: {user.phone_number}</span>
                                </div>
                                <div className="box-btn">
                                    <Link to={USER_EDIT_PATH}>
                                        <p>{t('info.edit')}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserPage
