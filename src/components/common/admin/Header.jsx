import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { logOutRequest } from '../../../redux/action/authAction';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  header: {
    backgroundColor: '#e71a0f'
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },

}));

export function Header() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOutRequest())
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" className={`${classes.title} header__title`}>
            CGV Management
          </Typography>
          <Button onClick={handleLogout} color="inherit" className="header__button">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
