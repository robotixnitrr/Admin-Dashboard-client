import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Event } from '../types/Event'; // Import the Event interface

const API_BASE_URL = 'http://localhost:5000/api';

function EventPage() {
    const [events, setEvents] = useState<Event[]>([]); // Use the Event interface for state

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get<Event[]>(`${API_BASE_URL}/events`); // Specify the response type
                setEvents(response.data); // Assuming the response is an array of events
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="container-fluid pt-3">
            <h1 className="text-center">Events</h1>
            <div className="row">
                {events.length > 0 ? events.map((event) => (
                    <div className="col-md-4 mb-4" key={event._id}>
                        <div className="card">
                            <img src={event.imageUrl} className="card-img-top" alt={event.title} /> {/* Assuming each event has an image */}
                            <div className="card-body">
                                <h5 className="card-title">{event.title}</h5>
                                <p className="card-text">{event.description}</p> {/* Description of the event */}
                                <p className="card-text"><small className="text-muted">Date: {new Date(event.date).toLocaleDateString()}</small></p>
                                <p className="card-text"><small className="text-muted">Location: {event.location}</small></p>
                                <Link to={`/events/${event._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                )) : (
                    <>
                        No Events to display
                    </>
                )}
            </div>
        </div>
    );
}

export default EventPage;
