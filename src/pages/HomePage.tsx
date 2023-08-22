import React, {FC, useState} from "react";
import DashBoard from "../layout/DashBoard.tsx";
import MainField from "../layout/MainField.tsx";

const HomePage: FC = () => {
    const [taskIsExist, setTaskIsExist] = useState<boolean>();

    return (
        <MainField>
            {taskIsExist ? <DashBoard/> : <DashBoard/>}
        </MainField>
    );
};

export default HomePage;