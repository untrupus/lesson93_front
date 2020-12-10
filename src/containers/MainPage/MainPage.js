import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {addEvent, fetchEvent, deleteEvent} from "../../store/actions/eventsAction";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "25%",
        padding: "10px",
        textAlign: 'center'
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
        width: '60%',
        padding: '10px'
    },
    eventItem: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid black'
    },
    del: {
        cursor: 'pointer'
    }
}));

const MainPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events);
    const user = useSelector(state => state.users.user.user);
    const [state, setState] = useState({
        startDate: '',
        name: '',
        endDate: '',
    });

    useEffect(() => {
        dispatch(fetchEvent());
    }, [dispatch]);

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
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

    let eventList = events.map(event => {
        return (
            <div className={classes.eventItem} key={event._id}>
                <p><b>{event.name}</b> {event.startDate.replace('T', ' ')} - {event.endDate.replace('T', ' ')}</p>
                {(user && user._id === event.user) ? <HighlightOffIcon
                    className={classes.del}
                    onClick={() => remove(event._id)}
                /> : null}
            </div>
        )
    });

    return (
        <Container className={classes.main}>
            <form className={classes.container} onSubmit={formSubmit}>
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
            <div className={classes.events}>
                <h3>Events</h3>
                {eventList}
            </div>
        </Container>
    );
};

export default MainPage;