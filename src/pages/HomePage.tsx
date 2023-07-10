import {Box, Paper} from "@mui/material";
import React, {FC, useState} from "react";
import Dashboard from "../components/Dashboard.tsx";
import Header from "../components/Header.tsx";
import NoneTask from "../components/NoneTask.tsx";

const HomePage: FC = () => {
    const [taskIsExist, setTaskIsExist] = useState<boolean>();

    return (
            <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" flexDirection='column'>
                <Paper sx={{minWidth: '90vw', minHeight: '90vh', borderRadius: 5, alignItems: "center",}}
                       elevation={24}>
                    <Header/>
                    {taskIsExist ? <Dashboard/> : <NoneTask/>}

                </Paper>
            </Box>
    );
};

export default HomePage;