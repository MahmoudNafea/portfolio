import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import FadeMenu from './ui/menu'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar className="navbar" position="static" >
            <Toolbar className="toolbar" >
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
                {/* <MenuIcon /> */}
                <FadeMenu />

                {/* </IconButton> */}
                <Typography variant="h6" className={classes.title}>

                </Typography>
                <Button component={Link} to='/' color="inherit">Home</Button>
                <Button component={Link} to='/about' color="inherit">About</Button>
                <Button component={Link} to='/work' color="inherit">Work</Button>
                <Button component={Link} to='/contact' color="inherit">Contact</Button>
                <Button component={Link} to='/login' color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

