import RegisterForm from "../../components/RegisterForm/RegisterFrom";
import style from './style/MatchAesthetic.module.sass'
import Buttons from '../../components/Buttons/Buttons'

const MatchAesthetic: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.videoContainer}>
                <video autoPlay loop>
                    <source src="https://cdn.getglam.app/content/paywalls/240515_web2web_video2_v01.mp4" />
                </video>
                <div className={style.overlay}>
                    <h1>Match your Aesthetic</h1>
                    <RegisterForm />
                    <Buttons />
                </div>
            </div>
        </div>
    );
};

export default MatchAesthetic;