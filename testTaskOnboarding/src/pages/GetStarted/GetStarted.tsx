import style from './style/GetStarted.module.sass';
import GetStartedButton from '../../components/GetStartedButton/GetStartedButton'

const GetStarted: React.FC = () => {

  return (
    <div className={style.wrapper}>
        <div className={style.overlay}>
          <h1>Glam AI</h1>
          <GetStartedButton />
        </div>
    </div>
  );
};

export default GetStarted;
