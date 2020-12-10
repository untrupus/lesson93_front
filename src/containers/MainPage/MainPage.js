import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {addEvent, fetchEvent, deleteEvent} from "../../store/actions/eventsAction";
import {fetchFriends, addFriend, deleteFriend, fetchMyFriends} from "../../store/actions/friendsAction";
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "25%",
        padding: "10px",
        textAlign: 'center',
    },
    main: {
        padding: '20px',
        display: "flex",
        justifyContent: 'space-between'
    },
    textField: {
        width: '100%',
        marginBottom: "20px"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    events: {
        width: '40%',
        padding: '10px',
    },
    eventItem: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid black'
    },
    del: {
        cursor: 'pointer'
    },
    friends: {
        width: '25%',
        padding: '10px'
    }
}));

const MainPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events);
    const user = useSelector(state => state.users.user);
    const friends = useSelector(state => state.friends.friends);
    const myFriends = useSelector(state => state.friends.myFriends)
    const [state, setState] = useState({
        startDate: '',
        name: '',
        endDate: '',
    });
    const [friend, setFriend] = useState({email: ''})

    useEffect(() => {
        dispatch(fetchEvent());
        dispatch(fetchFriends());
        dispatch(fetchMyFriends());
    }, [dispatch]);

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };
    const inputChangeEmail = (e) => {
        const value = e.target.value;
        setFriend({email: value});
    };

    const remove = id => {
        dispatch(deleteEvent(id));
        dispatch(fetchEvent());
    };

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(addEvent({...state}));
        dispatch(fetchEvent());
        setState({
            startDate: '',
            name: '',
            endDate: '',
        });
    };

    const friendSubmit = (e) => {
        e.preventDefault();
        dispatch(addFriend({...friend}));
        dispatch(fetchFriends());
        setFriend({email: ''});
    };

    const removeFriend = id => {
        dispatch(deleteFriend(id));
        dispatch(fetchFriends());
    };

    let eventList = events.map(event => {
        let eventsUser;
        if (user) {
            eventsUser = (
                <div className={classes.eventItem} key={event._id}>
                    <p><b>{event.name}</b> {event.startDate.replace('T', ' ')} - {event.endDate.replace('T', ' ')}</p>
                    {user.user && user.user._id === event.user ? <HighlightOffIcon
                        className={classes.del}
                        onClick={() => remove(event._id)}
                    /> : null}
                </div>
            )
        }
        return eventsUser;
    });

    let myFriendsList = myFriends.map(myFriend => {
        let myUserFriends;
        if (user) {
            myUserFriends = (
                <div className={classes.eventItem} key={myFriend._id}>
                    <Link component={RouterLink}  to={"/events/" + myFriend.user}  >
                        <p><b>{myFriend.friendName}</b></p>
                    </Link>
                </div>
            );
        }
        return myUserFriends;
    });

    let friendsList = friends.map(fr => {
        let userFriends;
        if (user) {
            userFriends = (
                <div className={classes.eventItem} key={fr._id}>
                    <p><b>{fr.name}</b></p>
                    {user.user && user.user._id === fr.user ? <HighlightOffIcon
                        className={classes.del}
                        onClick={() => removeFriend(fr._id)}
                    /> : null}
                </div>
            );
        }
        return userFriends;
    });

    let mainPage;
    if (user) {
        mainPage = (
            <Container className={classes.main}>
                <div className={classes.container}>
                    <form onSubmit={formSubmit}>
                        <h3>Add event</h3>
                        <TextField
                            id="datetime-local"
                            type="datetime-local"
                            label="Date"
                            name='startDate'
                            value={state.startDate}
                            className={classes.textField}
                            onChange={inputChangeHandler}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Name"
                            name='name'
                            value={state.name}
                            className={classes.textField}
                            onChange={inputChangeHandler}
                        />
                        <TextField
                            id="datetime-local"
                            label="Date"
                            type="datetime-local"
                            name='endDate'
                            value={state.endDate}
                            className={classes.textField}
                            onChange={inputChangeHandler}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            ADD
                        </Button>
                    </form>
                    <form onSubmit={friendSubmit}>
                        <h3>Add friend</h3>
                        <TextField
                            id="email"
                            label="Email"
                            name='email'
                            value={friend.email}
                            className={classes.textField}
                            onChange={inputChangeEmail}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            ADD FRIEND
                        </Button>
                    </form>
                    <h3>Friends</h3>
                    {friendsList}
                </div>

                <div className={classes.events}>
                    <h3>Events</h3>
                    {eventList}
                </div>
                <div className={classes.friends}>
                    <h3>My friends events</h3>
                    {myFriendsList}
                </div>
            </Container>
        )
    } else {
        mainPage = (
            <h2>Please login...</h2>
        )
    }

    return (
        <>
            {mainPage}
        </>
    );
};

export default MainPage;