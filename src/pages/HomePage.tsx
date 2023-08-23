import React, {FC, useState} from "react";
import DashBoard from "../layout/DashBoard.tsx";
import Header from "../components/Header.tsx";

const HomePage: FC = () => {
    const [taskIsExist, setTaskIsExist] = useState<boolean>();

    return (
        <>
            <Header/>
            {taskIsExist ? <DashBoard/> : <DashBoard/>}
        </>
    );
};

export default HomePage;