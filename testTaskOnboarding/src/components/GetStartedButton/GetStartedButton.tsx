import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const GetStartedButton: React.FC = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/welcome');
    };

    return (
        <Button onClick={handleNext}>
            Get Started!
        </Button>
    );
};

export default GetStartedButton;