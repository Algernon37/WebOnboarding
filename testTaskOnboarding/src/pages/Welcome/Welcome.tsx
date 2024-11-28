import style from './style/Welcome.module.sass';
import Buttons from '../../components/Buttons/Buttons';

const Welcome: React.FC = () => {

  return (
    <div className={style.wrapper}>
      <div className={style.videoContainer}>
        <video autoPlay loop>
          <source src="https://cdn.getglam.app/content/paywalls/240515_web2web_video1_v04.mp4" type="video/mp4" />
        </video>
        <div className={style.overlay}>
          <h1>Welcome to Glam!</h1>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
