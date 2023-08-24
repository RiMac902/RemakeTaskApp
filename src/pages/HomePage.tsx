import React, {FC, useState} from "react";
import DashBoard from "../layout/DashBoard.tsx";

import MainLayout from "../layout/MainLayout.tsx";

const HomePage: FC = () => {
    const [taskIsExist, setTaskIsExist] = useState<boolean>();

    return (
        <MainLayout>
            {taskIsExist ? <DashBoard/> : <DashBoard/>}
        </MainLayout>
    );
};

export default HomePage;