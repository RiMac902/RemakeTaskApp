import {Box, Paper} from "@mui/material";
import React, {FC} from "react";
import Dashboard from "../components/Dashboard.tsx";
import Header from "../components/Header.tsx";

const HomePage: FC = () => {
    return (
            <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" flexDirection='column'>
                <Paper sx={{minWidth: '90vw', minHeight: '90vh', borderRadius: 5, alignItems: "center",}}
                       elevation={24}>
                    <Header/>
                    <Dashboard/>
                </Paper>
            </Box>
    );
};

export default HomePage;