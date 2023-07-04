import {useNavigate} from "react-router-dom";

export const navigate = useNavigate();

// Інші навігаційні функції
export const redirectToHome = () => {
    navigate('/home');
};

export const redirectToLogin = () => {
    navigate('/login');
};