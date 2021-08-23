import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import SwitchLang from '../switchLang/SwitchLang'
import { EVENT_PATH, LOG_IN_PATH, MOVIE_COMING_PATH, MOVIE_SHOWING_PATH } from '../../../constant/route';
import iconTicket from '../../../assets/img/icon_ticket25.png'

function HeaderMobile(props) {
    const {
        isLogIn,
        handleLogOut,
    } = props
    const [showMenu, setShowMenu] = useState(false)
    const [showSubMenu, setShowSubMenu] = useState({
        movies:false,
        theaters:false
    })
    const [showAccount, setShowAccount] = useState(false)
    const { t } = useTranslation();

    return (
        <div className="header__mobile">
            <h1 className="header__mobile__logo">
                <Link to="/">
                    <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="logoCgv" />
                </Link>
            </h1>
            <div className="header__mobile__content">
                <div 
                    className={`header__mobile__content-item ${showMenu ? "header__mobile__content-item--active" : ""}`}
                    onClick={() => {setShowMenu(showMenu ? false : true); setShowAccount(false)}}
                >
                    <i className="far fa-bars"></i>
                </div>
                <div className="header__mobile__content-item">
                    <img src={iconTicket} alt="ticket" />
                </div>
                <div 
                    className={`header__mobile__content-item ${showAccount ? "header__mobile__content-item--active" : ""}`} 
                    onClick={() => {setShowAccount(showAccount ? false : true); setShowMenu(false)}}
                >
                    <i className="fas fa-user"></i>
                </div>
                <div className="header__mobile__content-item">
                    <div>
                        <SwitchLang></SwitchLang>
                    </div>
                </div>
            </div>
            <div className="header__mobile__nav" style={{display: showMenu ? "block" : "none"}}>
                <div className="nav-item">
                    <Link className="nav-item--lvl0">
                        <p onClick={() => {setShowSubMenu({...showSubMenu, movies: showSubMenu.movies ? false : true})}}>
                            <i className={`fas ${showSubMenu.movies ? "fa-caret-down" : "fa-caret-right"}`}></i>
                            {t('header.navBottom.movies.title')}
                        </p>
                    </Link>
                    <div className="nav-item--lvl1" style={{display: showSubMenu.movies ? "block" : "none"}}>
                        <Link to={MOVIE_SHOWING_PATH} className="lvl1-item">
                            <p>{t('header.navBottom.movies.now_showing')}</p>
                        </Link>
                        <Link to={MOVIE_COMING_PATH} className="lvl1-item">
                            <p>{t('header.navBottom.movies.coming_soon')}</p>
                        </Link>
                    </div>
                </div>

                <div className="nav-item">
                    <Link className="nav-item--lvl0">
                        <p onClick={() => {setShowSubMenu({...showSubMenu, theaters: showSubMenu.theaters ? false : true})}}>
                            <i className={`fas ${showSubMenu.theaters ? "fa-caret-down" : "fa-caret-right"}`}></i> 
                            {t('header.navBottom.theaters.title')}
                        </p>
                    </Link>
                    <div className="nav-item--lvl1" style={{display: showSubMenu.theaters ? "block" : "none"}}>
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

                <div className="nav-item">
                    <Link className="nav-item--lvl0" to="/">
                        <p>{t('header.navBottom.membership')}</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-item--lvl0" to="/">
                        <p>{t('header.navBottom.contact')}</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-item--lvl0" to="/">
                        <p>{t('header.navTop.careers')}</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-item--lvl0" to={EVENT_PATH}>
                        <p>{t('header.navTop.news_&_offers')}</p>
                    </Link>
                </div>
            </div>

            <div className="header__mobile__account" style={{display: showAccount ? "block" : "none"}}>
                <Link className="header__mobile__account-item" to="/">
                    <p>{t('header.navTop.my_account')}</p>
                </Link>
                {!isLogIn
                    ? (
                        <Link className="header__mobile__account-item" to={LOG_IN_PATH}>
                            <p>{t('header.navTop.account')}</p>
                        </Link>
                    )
                    : (
                        <a href="#" onClick={() => handleLogOut()}>
                            <p style = {{textTransform:"uppercase"}}>{t('info.logout')}</p>
                        </a>
                    )
                }

            </div>
        </div>
    )
}

export default HeaderMobile