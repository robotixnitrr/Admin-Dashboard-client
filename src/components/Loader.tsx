import Lottie from "react-lottie-player";
import lottieJson from "../assets/loadingAnimation.json";
function Loader() {
  return (
    <div
      className="position-fixed loader shadow rounded-4 d-flex justify-content-center align-items-center"
      style={{
        left: 0,
        right: 0,
        // top: "50%",
        // translate: "translateY(-50%)",
        marginInline: "auto",
        width: "100%",
        zIndex: 3,
        height:'100%',
        backgroundColor: "transparent",
      }}
    >
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 100, height: 100 }}
      />
    </div>
  );
}

export default Loader;
