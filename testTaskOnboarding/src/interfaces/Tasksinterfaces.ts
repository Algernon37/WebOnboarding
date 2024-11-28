export interface IUser {
    uid: string;
    email: string | null;
}

export interface StepIndicatorProps {
    currentStep: number;
}

export interface AnimatedPageWrapperProps {
    children: React.ReactNode;
}