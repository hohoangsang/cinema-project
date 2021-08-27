import Container from '@material-ui/core/Container';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import iconAccount from '../../../assets/img/icon_login25.png';
import iconNews from '../../../assets/img/icon_promotion25.png';
import iconTicket from '../../../assets/img/icon_ticket25.png';
import iconCareers from '../../../assets/img/recruitment_icon1.png';
import { LOG_IN_PATH, MOVIE_SHOWING_PATH, MY_TICKET_PATH, MOVIE_COMING_PATH, EVENT_PATH, USER_INFO_PATH } from '../../../constant/route';
import { logOutRequest } from '../../../redux/action/authAction';
import SwitchLang from '../switchLang/SwitchLang';
import HeaderMobile from './HeaderMobile';

function Header() {
    const { t } = useTranslation();
    const { isLogIn } = useSelector(state => state.auth);
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleLogOut = () => {
        dispatch(logOutRequest())
    }

    return (
        <header className="header">
            <div className="header__top">
                <Container className="header__top-container">
                    <Link className="header__top-item" to="/">
                        <img src={iconCareers} alt="careers"/>
                        <p>{t('header.navTop.careers')}</p>
                    </Link>

                    <Link className="header__top-item" to={EVENT_PATH}>
                        <img src={iconNews} alt="news"/>
                        <p>{t('header.navTop.news_&_offers')}</p>
                    </Link>

                    <Link className="header__top-item" to={MY_TICKET_PATH}>
                        <img src={iconTicket} alt="ticket"/>
                        <p>{t('header.navTop.my_ticker')}</p>
                    </Link>

                    { !isLogIn 
                        ? (
                            <Link className="header__top-item" to={LOG_IN_PATH}>
                                <img src={iconAccount} alt="account"/>
                                <p>{t('header.navTop.account')}</p>
                            </Link>
                        )
                        : (
                            <div className="header__top-item">
                                <div className="header__top-item--title">
                                    <img src={iconAccount} alt="account"/>
                                    <p>Xin chào {currentUser[0].fullname}!</p>
                                </div>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to={USER_INFO_PATH} className="sub-menu--item">
                                            <p>{t('info.info_person')}</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="sub-menu--item">
                                            <p>{t('info.help')}</p>
                                        </Link>
                                    </li>
                                    <li onClick= {() => handleLogOut()} className="sub-menu--item">
                                        <p>{t('info.logout')}</p>
                                    </li>
                                </ul>
                            </div>
                        )
                    }

                    <div className="header__top-item">
                        <SwitchLang></SwitchLang>
                    </div>
                </Container>
            </div>
            <div className="header__center">
                <Container className="header__center-container">
                    <h1 className="header__center__logo">
                        <Link to="/">
                            <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="logoCgv"/>
                        </Link>
                    </h1>

                    <div className="header__center__menu">
                        <div className="header__center__menu-item">
                            <Link className="header__center__menu-item--lvl0">
                                {t('header.navBottom.movies.title')}
                            </Link>
                            <div className="header__center__menu-item--lvl1">
                                <Link to={MOVIE_SHOWING_PATH} className="lvl1-item">   
                                    <p>{t('header.navBottom.movies.now_showing')}</p>
                                </Link>
                                <Link to={MOVIE_COMING_PATH} className="lvl1-item">
                                    <p>{t('header.navBottom.movies.coming_soon')}</p>
                                </Link>
                            </div>
                        </div>
                        <div className="header__center__menu-item">
                            <Link className="header__center__menu-item--lvl0">
                                {t('header.navBottom.theaters.title')}
                            </Link>
                            <div className="header__center__menu-item--lvl1">
                                <Link to="/" className="lvl1-item">   
                                    <p>{t('header.navBottom.theaters.all_cinema')}</p>
                                </Link>
                                <Link to="/" className="lvl1-item">
                                    <p>{t('header.navBottom.theaters.special_cinema')}</p>
                                </Link>
                                <Link to="/" className="lvl1-item">
                                    <p>{t('header.navBottom.theaters.opening_soon')}</p>
                                </Link>
                            </div>
                        </div>
                        <div className="header__center__menu-item">
                            <Link className="header__center__menu-item--lvl0" to="/">
                                {t('header.navBottom.membership')}
                            </Link>
                        </div>

                        <div className="header__center__menu-item">
                            <Link className="header__center__menu-item--lvl0" to="/">
                                {t('header.navBottom.contact')}
                            </Link>
                        </div>
                    </div>
                    
                    <div className="header__center__search">
                        <div className="header__center__search-left">
                            <a href="https://kenhcine.cgv.vn/">
                                <img src="https://www.cgv.vn/media/wysiwyg/2019/AUG/kenhcine.gif" alt="kenhcine"/>
                            </a>
                        </div>
                        <div className="header__center__search-right">
                            <Link to="/">
                                <img src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png" alt="orderNow"/>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <HeaderMobile
                isLogIn={isLogIn}
                handleLogOut={handleLogOut}
            />
        </header>
    )
}

export default Header