import { useRef, useState } from "react";
import { createEvent } from "../api/eventApi";

function CreateEvent() {
  const title = useRef<string>("");
  const category = useRef<string>("");
  const imageUrl = useRef<string>("");
  const date = useRef<Date | null>(null);
  const time = useRef<string>("");
  const [eventType,setEventType] = useState<"online" | "offline" | null>(null);
  const venue = useRef<string>("");
  const description = useRef<string>("");
  const registrationLink = useRef<string>("");
  const capacity = useRef<Number | null>(null);


  async function CreateEvent(){

    const eventData = {
      title: title.current,
      category: category.current,
      imageUrl: imageUrl.current,
      date: date.current,         
      time: time.current,
      eventType: eventType,
      venue: venue.current,
      description: description.current,
      registrationLink: registrationLink.current,
      capacity: capacity.current
    };

    try{
      const response = await createEvent(eventData);
      console.log("EVENT CREATED !!!",response.data);
    }catch(error){
      console.log("ERROR CREATING EVENT ",error);
    }

  }

  return (
    <>
      <div className="card w-100 rounded-4 border-1 border-secondary mt-4">
        <div className="card-body">
          <p className="fs-3 fw-bold">Create new Event</p>
          <hr />
          <div className="form-floating mb-3">
            <input
              type="text"
              onChange={(e) => (title.current = e.target.value)}
              className="form-control form-control-lg fs-6"
              id="title"
              placeholder="Event Title"
            />
            <label htmlFor="title" className="text-secondary">
              Event Title
            </label>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <select
                  className="form-select form-select-lg fs-6"
                  id="category"
                  onChange={(e) => (category.current = e.target.value)}
                >
                  <option value="">Select a Category</option>
                  <option value="Projects">Projects</option>
                  <option value="News">News</option>
                  <option value="AI & Machine Learning">
                    AI & Machine Learning
                  </option>
                  <option value="Collaborations">Collaborations</option>
                  <option value="Instructions">Instructions</option>
                  <option value="Events">Events</option>
                  <option value="Career Pathways">Career Pathways</option>
                </select>
                <label htmlFor="category">Category</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control form-control-lg fs-6"
                  onChange={(e) => (imageUrl.current = e.target.value)}
                  id="image"
                  placeholder="Select an Image for imageUrl..."
                />
                <label htmlFor="image">Event's imageUrl</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="date"
                  onChange={(e) => (date.current = new Date(e.target.value))}
                  className="form-control form-control-lg fs-6"
                  id="date"
                  placeholder="Date of Event..."
                />
                <label htmlFor="date">Date of Event</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="time"
                  className="form-control form-control-lg fs-6"
                  onChange={(e) => (time.current = e.target.value)}
                  id="time"
                  placeholder="Select an Image for imageUrl..."
                />
                <label htmlFor="time">Time of Event</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <label htmlFor="date">Event Type</label> <br />
              <div className="btn-group w-100">
                <input
                  type="radio"
                  name="eventType"
                  id="offline"
                  value={"offline"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEventType(e.target.value as "offline" | "online")
                  }
                  className="btn-check"
                />
                <label className="btn btn-dark" htmlFor="offline">
                  Offline
                </label>
                <input
                  type="radio"
                  name="eventType"
                  id="online"
                  value={"online"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEventType(e.target.value as "offline" | "online");
                    // venue.current = null;
                  }}
                  className="btn-check"
                />
                <label className="btn btn-dark" htmlFor="online">
                  Online
                </label>
              </div>
            </div>
            {eventType === "offline" && (
              <div className="form-floating mb-3 col mb-3">
                <input
                  type="text"
                  required
                  onChange={(e) => (venue.current = e.target.value)}
                  className="form-control form-control-lg fs-6 py-3"
                  id="venue"
                  placeholder="Venue of Event"
                />
                <label htmlFor="venue" className="text-secondary">
                  Venue of Event <span className="text-danger">*</span>
                </label>
              </div>
            )}
            {eventType === "online" && (
              <div className="form-floating mb-3 col mb-3">
                <input
                  type="text"
                  required
                  onChange={(e) => (venue.current = e.target.value)}
                  className="form-control form-control-lg fs-6 py-3"
                  id="onlineVenue"
                  placeholder="Online Platform (e.g., Zoom, Google Meet)"
                />
                <label htmlFor="onlineVenue" className="text-secondary">
                  Online Platform (e.g., Zoom, Google Meet)
                </label>
              </div>
            )}
          </div>
          <div className="form-floating mb-3">
            <textarea
              onChange={(e) => (description.current = e.target.value)}
              className="form-control form-control-lg fs-6"
              id="description"
              placeholder="Event Description"
              style={{ height: "150px" }}
            />
            <label htmlFor="description" className="text-secondary">
              Event Description
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              onChange={(e) => (capacity.current = parseInt(e.target.value))}
              className="form-control form-control-lg fs-6"
              id="capacity"
              placeholder="Capacity"
            />
            <label htmlFor="capacity" className="text-secondary">
              Capacity
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              onChange={(e) => (registrationLink.current = e.target.value)}
              className="form-control form-control-lg fs-6"
              id="registrationLink"
              placeholder="Registration Link"
            />
            <label htmlFor="registrationLink" className="text-secondary">
              Registration Link
            </label>
          </div>
          <div className="mb-3">
            <button
              onClick={() => CreateEvent()}
              className="btn btn-dark rounded-4 fs-4 fw-bold float-end"
            >
              CREATE EVENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default CreateEvent;
