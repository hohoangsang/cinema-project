import React from 'react'
import { useTranslation } from 'react-i18next';
import Container from "@material-ui/core/Container"

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer__top">
                <Container >
                    <div className="footer__top-brand"></div>
                </Container>
            </div>
            <div className="footer__middle">
                <Container maxWidth='lg'>
                    <div className="footer__middle__policy">
                        <div className="policy--item cgv-vietnam">
                            <h4 className="policy--item__title">{t('footer.ul-1.title')}</h4>
                            <ul className="policy--item__menu">
                                <li>{t('footer.ul-1.about_us')}</li>
                                <li>{t('footer.ul-1.e_cgv')}</li>
                                <li>{t('footer.ul-1.gift_card')}</li>
                                <li>{t('footer.ul-1.carrer')}</li>
                                <li>{t('footer.ul-1.contact')}</li>
                            </ul>
                        </div>
                        <div className="policy--item cgv-policy">
                            <h4 className="policy--item__title">{t('footer.ul-2.title')}</h4>
                            <ul className="policy--item__menu">
                                <li>{t('footer.ul-2.condition')}</li>
                                <li>{t('footer.ul-2.terms')}</li>
                                <li>{t('footer.ul-2.payment_policy')}</li>
                                <li>{t('footer.ul-2.privacy_policy')}</li>
                                <li>{t('footer.ul-2.f_a_q')}</li>
                            </ul>
                        </div>
                        <div className="policy--item cgv-follow-us">
                            <h4 className="policy--item__title">{t('footer.ul-3.title')}</h4>
                            <ul className="policy--item__menu cgv-social--menu">
                                <li className="follow-fb">
                                    <a className="follow-fb" href="https://www.facebook.com/cgvcinemavietnam" target="_blank">facebook</a>
                                </li>
                                <li className="follow-youtube">
                                    <a className="follow-youtube" href="https://www.youtube.com/cgvvietnam" target="_blank">youtube</a>
                                </li>
                                <li className="follow-instagram">
                                    <a className="follow-instagram" href="https://www.instagram.com/cgvcinemasvietnam" target="_blank">instagram</a>
                                </li>
                                <li className="follow-zalo">
                                    <a className="follow-zalo" href="https://zalo.me/1884424922722396289" target="_blank">zalo</a>
                                </li>
                            </ul>
                            <div className="policy--item-permision">
                                <a href="http://online.gov.vn/Home/WebDetails/30270" target="_blank">permision</a>
                            </div>
                        </div>
                        <div className="policy--item customer-cgv">
                            <h4 className="policy--item__title">{t('footer.ul-4.title')}</h4>
                            <ul className="policy--item__menu">
                                <li>{t('footer.ul-4.hotline')}</li>
                                <li>{t('footer.ul-4.working_hour')}</li>
                                <li>{t('footer.ul-4.email_support')}</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="footer__bottom"></div>
        </footer>
    )
}

export default Footer
