import {StepIndicatorProps} from '../../../interfaces/Tasksinterfaces';
import style from '../style/AnimatedRoutes.module.sass'

const StepIndicator: React.FC<StepIndicatorProps> = ({currentStep}) => {
    const totalSteps = 4; 
    return (
        <div className={style.stepIndicator}>
            {[...Array(totalSteps)].map((_, index) => (
                <span
                    key={index}
                    className={`${style.dot} ${currentStep === index + 1 ? style.active : ''}`}
                ></span>
            ))}
        </div>
    )
}


export default StepIndicator;