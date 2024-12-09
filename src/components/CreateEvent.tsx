import { useRef, useState } from "react";

function CreateEvent() {
  const title = useRef<string>("");
  const category = useRef<string>("");
  const banner = useRef<string>("");
  const date = useRef<string>("");
  const time = useRef<string>("");
  const [eventType,setEventType] = useState<"Online" | "Offline" | null>(null);
  const venue = useRef<string | null>(null);

  function CreateEvent(){
    console.log(title.current,category.current,date.current,time.current,banner.current,eventType,venue.current)
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
              onChange={e => title.current = e.target.value}
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
                  onChange={e => category.current = e.target.value}
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
                  onChange= {e => banner.current = e.target.value}
                  id="image"
                  placeholder="Select an Image for Banner..."
                />
                <label htmlFor="image">Event's Banner</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="date"
                  onChange={e => date.current = e.target.value}
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
                  onChange={e => time.current = e.target.value}
                  id="time"
                  placeholder="Select an Image for Banner..."
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
                  value={"Offline"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEventType(e.target.value as "Offline" | "Online")
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
                  value={"Online"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEventType(e.target.value as "Offline" | "Online")
                    venue.current = null
                  }
                  }
                  className="btn-check"
                />
                <label className="btn btn-dark" htmlFor="online">
                  Online
                </label>
              </div>
            </div>
            {eventType === "Offline" && (
              <div className="form-floating mb-3 col mb-3">
                <input
                  type="text"
                  required
                  onChange={e => venue.current = e.target.value}
                  className="form-control form-control-lg fs-6 py-3"
                  id="venue"
                  placeholder="Venue of Event"
                />
                <label htmlFor="title" className="text-secondary">
                  Venue of Event <span className="text-danger">*</span>
                </label>
              </div>
            )}
          </div>
          <div className="mb-3">
            <button onClick={() => CreateEvent()} className="btn btn-dark rounded-4 fs-4 fw-bold float-end">
              CREATE EVENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEvent;
