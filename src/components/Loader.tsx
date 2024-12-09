import Lottie from 'react-lottie-player'
import lottieJson from '../assets/loadingAnimation.json'
function Loader() {
  return (
    <div className='position-absolute shadow rounded-4' style={{left:0,right:0,top:'50%',translate: 'translateY(-50%)',marginInline:'auto',width:'fit-content',zIndex:2,backgroundColor:"white"}}>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 100, height: 100 }}
      />
    </div>
  );
}

export default Loader