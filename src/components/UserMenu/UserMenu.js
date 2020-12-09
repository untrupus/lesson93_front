import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {logoutUser} from "../../store/actions/usersAction";

const useStyles = makeStyles(() => ({
    menu: {
        color: "white",
        fontWeight: "bold",
    },
    history: {
        '&:hover': {
            textDecoration: "none"
        }
    },
    username: {
        marginRight: '15px'
    },
    avatar: {
        width: '40px',
        height: "40px",
        borderRadius: "50%",
        position: "absolute",
        right: '10px',
        '&:hover': {
            width: '150px',
            height: "150px",
            top: '5px',
            right: '80px',
            zIndex: '99'
        }
    }
}));

const UserMenu = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <div>
            <Button aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.menu}
            >
                <span className={classes.username}>Hello, {props.name} &#160;</span>

            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default UserMenu;
