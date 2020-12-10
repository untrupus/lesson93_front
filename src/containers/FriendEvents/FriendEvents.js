import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import {fetchFriendsEvents} from "../../store/actions/eventsAction";
import {useDispatch, useSelector} from "react-redux";

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

const FriendEvents = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const friendsEvents = useSelector(state => state.events.friendsEvents);

    useEffect(() => {
        dispatch(fetchFriendsEvents(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    let eventList = friendsEvents.map(event => {
            return (
                <div className={classes.eventItem} key={event._id}>
                    <p><b>{event.name}</b> {event.startDate.replace('T', ' ')} - {event.endDate.replace('T', ' ')}</p>

                </div>
            )
    });


    return (
        <Container>
            {eventList}
        </Container>
    );
};

export default FriendEvents;