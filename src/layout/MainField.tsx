import React, {FC, ReactNode} from 'react';
import Header from "../components/Header.tsx";
import {Box, Paper} from "@mui/material";


type Children = {
    children: ReactNode;
}

const MainField: FC<Children> = ({children}) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" flexDirection='column'>
            <Paper sx={{minWidth: '90vw', minHeight: '90vh', borderRadius: 5, alignItems: "center",}}
                   elevation={24}>
                <Header/>
                {children}
            </Paper>
        </Box>
    );
};

export default MainField;