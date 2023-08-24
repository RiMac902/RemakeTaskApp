import React, {FC, ReactNode} from 'react';
import Header from "../components/Header.tsx";
import {Box, Paper} from "@mui/material";


type Children = {
    children: ReactNode;
}

const MainLayout: FC<Children> = ({children}) => {
    return (
        <>
                <Header/>
                {children}
        </>
    );
};

export default MainLayout;