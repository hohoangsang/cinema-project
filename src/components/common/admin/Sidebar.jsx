import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { ConfirmationNumber, Dashboard, MonetizationOn, Movie, PeopleAlt } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ADMIN_DASHBOARD_PATH, ADMIN_MOVIES_PATH, ADMIN_PATH, ADMIN_REVENUES_PATH, ADMIN_TICKET_PATH, ADMIN_USERS_PATH } from '../../../constant/route';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },

    link: {
        color: 'inherit',

        '&.selected > div ' : {
            backgroundColor: 'rgba(0,0,0,0.08)'
        }
    }
}));

export function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <aside>
                <List component="nav" aria-label="main mailbox folders">
                    <NavLink to={ADMIN_DASHBOARD_PATH} className={classes.link} activeClassName="selected">
                        <ListItem button>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </NavLink>

                    <NavLink to={ADMIN_USERS_PATH} className={classes.link} activeClassName="selected">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleAlt />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                    </NavLink>

                    <NavLink to={ADMIN_MOVIES_PATH} className={classes.link} activeClassName="selected">
                        <ListItem button>
                            <ListItemIcon>
                                <Movie />
                            </ListItemIcon>
                            <ListItemText primary="Movies" />
                        </ListItem>
                    </NavLink>

                    <NavLink to={ADMIN_REVENUES_PATH} className={classes.link} activeClassName="selected">
                        <ListItem button>
                            <ListItemIcon>
                                <MonetizationOn/>
                            </ListItemIcon>
                            <ListItemText primary="Revenues" />
                        </ListItem>
                    </NavLink>

                    <NavLink to={ADMIN_TICKET_PATH} className={classes.link} activeClassName="selected">
                        <ListItem button>
                            <ListItemIcon>
                                <ConfirmationNumber />
                            </ListItemIcon>
                            <ListItemText primary="Tickets" />
                        </ListItem>
                    </NavLink>
                </List>
            </aside>
        </div>
    );
}
