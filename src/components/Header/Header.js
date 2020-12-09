import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import {useSelector} from "react-redux";
import UserMenu from "../UserMenu/UserMenu";


const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        display: 'flex',
        color: "white",
        textTransform: "uppercase",
        fontSize: "15px",
    },
    logo: {
        color: "white",
        fontWeight: "bold",
        '&:hover': {
            textDecoration: "none"
        }
    }
}));

const Header = () => {
    const classes = useStyles();
    const user = useSelector(state => state.users.user);

    return (
        <AppBar position="static">
            <Container maxWidth="lg" >
                <Toolbar className={classes.header}>
                    <Typography variant="h6" className={classes.title}>
                        <Link component={RouterLink} className={classes.logo} to="/">Calendar</Link>
                    </Typography>

                    {!user ?
                        <Button color="inherit">
                            <Link component={RouterLink} className={classes.logo} to="/signin">Sign in </Link>
                            <span className={classes.logo}>&#160;/&#160;</span>
                            <Link component={RouterLink} className={classes.logo} to="/signup"> Sign up</Link>
                        </Button> :
                        <UserMenu
                            name={user.user.displayName}
                        />
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;