import EditSvg from "../../../assets/edit.svg?react";
import DeleteSvg from "../../../assets/delete.svg?react";
import profileImage from "../../../assets/profile.webp";
import Searchbar from "../../../components/Searchbar";
import { useEffect,  useState } from "react";

interface IBlog {
  id: number;
  title: string;
  category: string;
  author: string;
  banner: string;
}

function ManageBlogs() {
  const [sortType, setSortType] = useState<
    "a-z" | "z-a" | "popularity" | "mostLiked" | "leastLiked"
  >("a-z");

  const [demoData, setDemoData] = useState<IBlog[]>([
    {
      id: 1,
      title: "Advancements in Humanoid Robotics",
      category: "Robotics",
      author: "Dr. Alice Carter",
      banner: "https://via.placeholder.com/800x400?text=Humanoid+Robotics",
    },
    {
      id: 2,
      title: "AI-Powered Robots Revolutionizing Industries",
      category: "Robotics",
      author: "John Matthews",
      banner: "https://via.placeholder.com/800x400?text=AI+Powered+Robots",
    },
    {
      id: 3,
      title: "Exploring Robotics in Space Exploration",
      category: "Robotics",
      author: "Dr. Sarah Johnson",
      banner:
        "https://via.placeholder.com/800x400?text=Space+Exploration+Robots",
    },
    {
      id: 4,
      title: "The Role of Robotics in Healthcare",
      category: "Robotics",
      author: "Emily Watson",
      banner: "https://via.placeholder.com/800x400?text=Robotics+in+Healthcare",
    },
    {
      id: 5,
      title: "How Robotics is Shaping the Future of Agriculture",
      category: "Robotics",
      author: "Mark Peterson",
      banner:
        "https://via.placeholder.com/800x400?text=Robotics+in+Agriculture",
    },
  ]);
  useEffect(() => {
    if (demoData !== null) {
      switch (sortType) {
        case "a-z": {
          const tempArr = [...demoData].sort((a, b) => a.title.localeCompare(b.title));
          setDemoData(() => tempArr);
          break;
        }
        case "z-a": {
          const tempArr = [...demoData].sort((a, b) => a.title.localeCompare(b.title)).reverse();
          setDemoData(() => tempArr);
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
  function handleSearch(str: string){
    if(str.length > 0) {
      const arr = demoData.filter(d => d.title.toLocaleLowerCase().includes(str.toLocaleLowerCase()));
      setDemoData(() => arr);
    }
  }
  return (
    <div className="container-fluid bg-white p-2">
      <p className="fs-2 fw-bold">Manage Blogs</p>
      <Searchbar 
        sortType={sortType}
        placeholder="Enter blog title to search."
        handleSort={handleSort}
        handleSearch={handleSearch}
      />
      <div className="row g-2">
        {demoData?.map((i) => {
          return (
            <div key={i.id} className="col-lg-3 d-flex align-items-stretch ">
              <div
                className="card w-100 rounded-2 mb-3"
                style={{ borderColor: "#e8e8e8" }}
              >
                <div className="card-body">
                  <div className="ratio ratio-16x9">
                    <img
                      src={i.banner}
                      alt=""
                      className="img-fluid rounded-2"
                    />
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
                  <div className="d-flex mb-2 align-items-center gap-2">
                    <img
                      src={profileImage}
                      width={"30"}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <p className="small fw-light my-0">{i.author}</p>
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

export default ManageBlogs;
