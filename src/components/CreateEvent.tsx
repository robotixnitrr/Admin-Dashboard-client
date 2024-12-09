function CreateEvent() {
  return (
    <>
      <div className="card w-100 rounded-4 border-1 border-secondary mt-4">
        <div className="card-body">
          <p className="fs-3 fw-bold">Create new Event</p>
          <hr />
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control form-control-lg fs-6 py-3"
              id="title"
              placeholder="Blog Title"
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
                  id="iamge"
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
                  id="time"
                  placeholder="Select an Image for Banner..."
                />
                <label htmlFor="time">Time of Event</label>
              </div>
            </div>
          </div>
          <div className="fmb-3">
            <label htmlFor="date">Event Type</label> <br />
            <div className="btn-group">
              <input
                type="radio"
                name="eventType"
                id="offline"
                className="btn-check"
              />
              <label className="btn btn-dark" htmlFor="offline">
                Offline
              </label>
              <input
                type="radio"
                name="eventType"
                id="online"
                className="btn-check"
              />
              <label className="btn btn-dark" htmlFor="online">
                Online
              </label>
            </div>
          </div>
          <div className="mb-3">
            <button className="btn btn-dark rounded-4 fs-4 fw-bold float-end">
              CREATE EVENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEvent;
