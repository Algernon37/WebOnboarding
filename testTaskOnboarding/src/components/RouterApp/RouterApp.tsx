import { BrowserRouter  } from 'react-router-dom';
import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes'

const RouterApp: React.FC = () => {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
};

export default RouterApp;