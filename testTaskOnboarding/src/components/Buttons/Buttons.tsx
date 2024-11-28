import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import style from './style/Buttons.module.sass'

const Buttons: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const steps = ['/','/welcome','/match-aesthetic', '/explore-styles'];

  const currentIndex = steps.indexOf(location.pathname);
  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      navigate(steps[currentIndex + 1]);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(steps[currentIndex - 1]);
    }
  };

  return (
    <div className={style.wrapper}>
      {currentIndex > 0 && (
        <Button onClick={handlePrevious}>
          Previous
        </Button>
      )}
      {currentIndex < steps.length - 1 && (
        <Button onClick={handleNext}>
          Next
        </Button>
      )}
    </div>
  );
};

export default Buttons;