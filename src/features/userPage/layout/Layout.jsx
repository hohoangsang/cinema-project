import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, Switch, Route, NavLink } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { USER_EDIT_PATH, USER_HISTORY_PATH, USER_INFO_PATH } from '../../../constant/route';

function Layout() {    
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const InfoPage = React.lazy(() => import('../page/InfoPage'));
    const EditPage = React.lazy(() => import('../page/EditPage'));

    return (
        <main className="userPage">
            <Container>
                <div className="userPage-wrapper">
                    <aside>
                        <ul>
                            <li>
                                <NavLink to={USER_INFO_PATH} activeClassName="selected">
                                    <p>{t('info.dashboard')}</p>
                                </NavLink> 
                            </li>
                            <li>
                                <NavLink to={USER_EDIT_PATH} activeClassName="selected">
                                    <p>{t('info.account_detail')}</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={USER_HISTORY_PATH} activeClassName="selected">
                                    <p>{t('info.transactions_history')}</p>
                                </NavLink>
                            </li>
                        </ul>
                    </aside>
                    <article>
                        <Switch>
                            <Route path={USER_INFO_PATH}>
                                <InfoPage></InfoPage>
                            </Route>
                            <Route path={USER_EDIT_PATH}>
                                <EditPage></EditPage>
                            </Route>
                        </Switch>
                    </article>
                </div>
            </Container>
        </main>
    )
}

export default Layout
