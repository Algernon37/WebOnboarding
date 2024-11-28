import style from './style/ExploreStyles.module.sass';
import Buttons from '../../components/Buttons/Buttons'

const ExploreStyles: React.FC = () => {

  return (
    <div className={style.wrapper}>
      <div className={style.videoContainer}>
        <video autoPlay loop className={style.AIvideo}>
          <source src="https://cdn.getglam.app/content/paywalls/240515_web2web_video3_v01.mp4" />
        </video>
        <div className={style.overlay}>
          <h1>Explore 100+ Styles</h1>
          <Buttons />
        </div>

      </div>
    </div>
  );
};

export default ExploreStyles;

