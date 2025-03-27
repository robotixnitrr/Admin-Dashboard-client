import EditSvg from "../../../assets/edit.svg?react";
import DeleteSvg from "../../../assets/delete.svg?react";
import Searchbar from "../../../components/Searchbar";
import { useEffect, useState } from "react";
import CalendarSvg from '../../../assets/calendar.svg?react'
import LocationSvg from '../../../assets/location.svg?react'
import { toast } from "react-toastify";
import api from "../../../api/axios";
import CustomModal from '../../../components/CustomModal';
import CreateEvent from '../../../components/CreateEvent';

interface IEvent {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  date: Date;
  time: string;
  type: "online" | "offline";
  venue: string | null;
}

function ManageEvents() {
  const [sortType, setSortType] = useState<
    "a-z" | "z-a" | "popularity" | "mostLiked" | "leastLiked"
  >("a-z");

  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState<IEvent[]>([]);
  // const [newEvent, setNewEvent] = useState<IEvent>({
  //   id: 0,
  //   title: "",
  //   category: "",
  //   banner: "",
  //   date: new Date(),
  //   time: "",
  //   type: "online",
  //   venue: null,
  // });

  const fetchEvents = async () => {
    try {
      const response = await api.get("/events");
      setEventData(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events.");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setNewEvent(prevState => ({
  //     ...prevState,
  //     [name]: name === "date" ? new Date(value) : value,
  //   }));
  // };

  // const handleCreateEvent = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await api.post("/events", newEvent);
  //     setEventData(prevData => [...prevData, response.data]);
  //     toast.success("Event created successfully!");
  //     setNewEvent({ id: 0, title: "", category: "", banner: "", date: new Date(), time: "", type: "online", venue: null });
  //   } catch (error) {
  //     console.error("Error creating event:", error);
  //     toast.error("Failed to create event.");
  //   }
  //   handleClose();
  // };

  useEffect(() => {
    if (eventData !== null) {
      switch (sortType) {
        case "a-z": {
          const tempArr = [...eventData].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          setEventData(() => tempArr);
          break;
        }
        case "z-a": {
          const tempArr = [...eventData]
            .sort((a, b) => a.title.localeCompare(b.title))
            .reverse();
          setEventData(() => tempArr);
          break;
        }
        default:
        // DO NOTHING
      }
    }
  }, [sortType]);

  function handleSort(
    sortType: "a-z" | "z-a" | "popularity" | "mostLiked" | "leastLiked"
  ) {
    setSortType(() => sortType);
  }
  function handleSearch(str: string) {
    if (str.length > 0) {
      const arr = eventData.filter((d) =>
        d.title.toLocaleLowerCase().includes(str.toLocaleLowerCase())
      );
      setEventData(() => arr);
    }
  }

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container-fluid bg-white p-2">
      <p className="fs-2 fw-bold">Manage Events</p>
      <button onClick={handleShow} className="btn btn-primary">Create Event</button>

      {showModal && (
        <CustomModal show={showModal} onClose={handleClose}>
          <CreateEvent />
        </CustomModal>
      )}

      <Searchbar
        sortType={sortType}
        placeholder="Enter event title to search."
        handleSort={handleSort}
        handleSearch={handleSearch}
      />
      <div className="row g-2">
        {eventData?.map((i) => {
          const eventDate = new Date(i.date);
          return (
            <div key={i.id} className="col-lg-3 d-flex align-items-stretch ">
              <div
                className="card w-100 rounded-2 mb-3"
                style={{ borderColor: "#e8e8e8" }}
              >
                <div className="card-body">
                  <div className="ratio ratio-16x9 card-img">
                    <img
                      src={i.imageUrl}
                      alt=""
                      className="img-fluid rounded-2"
                    />
                  </div>
                  <div className="card-img-overlay">
                    <div className="card-text d-flex gap-2 align-items-center p-2">
                      <LocationSvg height={18} width={18} />
                      <p className="text-light my-0 ">{i.venue !== null ? i.venue : "Online event"}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span
                      className="badge text-white rounded-pill mb-3 px-2"
                      style={{ backgroundColor: "#ccc" }}
                    >
                      {i.category}
                    </span>
                    <div style={{ minHeight: "4rem" }}>
                      <p className="fw-semibold mb-2 fs-5 pb-0 lh-sm text-truncate">
                        {i.title}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-2 align-items-stretch gap-2">
                    <CalendarSvg height={20} width={20} />
                    <p className="small fw-light my-0">
                      {eventDate.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      , {i.time}
                    </p>
                  </div>
                  <div className="d-flex gap-1">
                    <button className="btn btn-outline-primary text-primary fw-semibold border-0 btn-sm rounded-2 primaryOutline d-flex gap-1">
                      <EditSvg height={20} width={20} />
                      <span>Edit</span>
                    </button>
                    <button className="btn btn-outline-danger text-danger fw-semibold border-0 btn-sm rounded-2 dangerOutline d-flex gap-1">
                      <DeleteSvg height={20} width={20} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ManageEvents;
