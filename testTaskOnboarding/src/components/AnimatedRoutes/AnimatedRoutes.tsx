import { Routes, Route, useLocation } from 'react-router-dom';
import style from './style/AnimatedRoutes.module.sass'
import Welcome from '../../pages/Welcome/Welcome';
import MatchAesthetic from '../../pages/MatchAesthetic/MatchAesthetic';
import ExploreStyles from '../../pages/ExploreStyles/ExploreStyles';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import StepIndicator from './StepIndicator/StepIndicator'
import AnimatedPageWrapper from '../AnimatedPageWrapper/AnimatedPageWrapper'
import GetStarted from '../../pages/GetStarted/GetStarted';
import useScrollToTop from '../../hooks/useScrollToTop';

const AnimatedRoutes: React.FC = () => {
    useScrollToTop();
    const location = useLocation();
    const [currentStep, setCurrentStep] = useState(0);
    

    useEffect(() => {
        if (location.pathname === "/") setCurrentStep(1);
        else if (location.pathname === "/welcome") setCurrentStep(2);
        else if (location.pathname === "/match-aesthetic") setCurrentStep(3);
        else if (location.pathname === "/explore-styles") setCurrentStep(4);
    }, [location.pathname]);

    return (
        <>
            <div className={style.wrapper}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/"
                            element={
                                <AnimatedPageWrapper>
                                    <GetStarted />
                                </AnimatedPageWrapper>
                            }
                        />
                        <Route
                            path="/welcome"
                            element={
                                <AnimatedPageWrapper>
                                    <Welcome />
                                </AnimatedPageWrapper>
                            }
                        />
                        <Route
                            path="/match-aesthetic"
                            element={
                                <AnimatedPageWrapper>
                                    <MatchAesthetic />
                                </AnimatedPageWrapper>
                            }
                        />
                        <Route
                            path="/explore-styles"
                            element={
                                <AnimatedPageWrapper>
                                    <ExploreStyles />
                                </AnimatedPageWrapper>
                            }
                        />
                    </Routes>
                </AnimatePresence>
            </div>
            <StepIndicator currentStep={currentStep} />
        </>
    );
};

export default AnimatedRoutes;