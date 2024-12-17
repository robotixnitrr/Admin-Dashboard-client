import EditSvg from "../../../assets/edit.svg?react";
import DeleteSvg from "../../../assets/delete.svg?react";
import Searchbar from "../../../components/Searchbar";
import { useEffect, useState } from "react";
import CalendarSvg from '../../../assets/calendar.svg?react'
import LocationSvg from '../../../assets/location.svg?react'
interface IEvent {
  id: number;
  title: string;
  category: string;
  banner: string;
  date: Date;
  time: string;
  type:"online" | "offline";
  venue: string | null;
}

function ManageEvents() {
  const [sortType, setSortType] = useState<
    "a-z" | "z-a" | "popularity" | "mostLiked" | "leastLiked"
  >("a-z");

  const [eventData, setEventData] = useState<IEvent[]>([
    {
      id: 1,
      title: "Robotics Innovation Conference 2024",
      category: "Conference",
      banner:
        "https://via.placeholder.com/800x400?text=Robotics+Innovation+Conference",
      date: new Date("2024-02-15"),
      time: "10:00 AM",
      type: "offline",
      venue:'E-Hall, NIT Raipur'
    },
    {
      id: 2,
      title: "AI in Robotics Webinar",
      category: "Webinar",
      banner: "https://via.placeholder.com/800x400?text=AI+in+Robotics+Webinar",
      date: new Date("2024-03-10"),
      time: "03:00 PM",
      type: "online",
      venue:null
    },
    {
      id: 3,
      title: "Hands-on Workshop: Building Autonomous Robots",
      category: "Workshop",
      banner:
        "https://via.placeholder.com/800x400?text=Autonomous+Robots+Workshop",
      date: new Date("2024-04-05"),
      time: "09:30 AM",
      type: "offline",
      venue:'E-Hall, NIT Raipur'
    },
    {
      id: 4,
      title: "Future of Robotics Panel Discussion",
      category: "Panel Discussion",
      banner:
        "https://via.placeholder.com/800x400?text=Future+of+Robotics+Panel",
      date: new Date("2024-05-20"),
      time: "01:00 PM",
      type: "online",
      venue:null
    },
    {
      id: 5,
      title: "Robotics in Healthcare Expo",
      category: "Expo",
      banner:
        "https://via.placeholder.com/800x400?text=Robotics+in+Healthcare+Expo",
      date: new Date("2024-06-18"),
      time: "11:00 AM",
      type: "offline",
      venue:'CCC, Bihar, NIT Raipur'
    },
  ]);
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
  return (
    <div className="container-fluid bg-white p-2">
      <p className="fs-2 fw-bold">Manage Events</p>
      <Searchbar
        sortType={sortType}
        placeholder="Enter event title to search."
        handleSort={handleSort}
        handleSearch={handleSearch}
      />
      <div className="row g-2">
        {eventData?.map((i) => {
          return (
            <div key={i.id} className="col-lg-3 d-flex align-items-stretch ">
              <div
                className="card w-100 rounded-2 mb-3"
                style={{ borderColor: "#e8e8e8" }}
              >
                <div className="card-body">
                  <div className="ratio ratio-16x9 card-img">
                    <img
                      src={i.banner}
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
                      {i.date.toLocaleDateString(undefined, {
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
