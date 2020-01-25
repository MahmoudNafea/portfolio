import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';


export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="button">
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} className="button" >
                Portfolio
           </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem component={Link} to='/'>HOME</MenuItem>
                <MenuItem component={Link} to='/about'>ABOUT</MenuItem>
                <MenuItem component={Link} to='/work'>WORK</MenuItem>
                <MenuItem component={Link} to='/contact'>CONTACT</MenuItem>
                <MenuItem component={Link} to='/login'>LOGIN</MenuItem>

            </Menu>
        </div>
    );
}