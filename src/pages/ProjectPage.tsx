import React from 'react';
import MainLayout from "../layout/MainLayout.tsx";
import {useParams} from "react-router-dom";

const ProjectPage = () => {
    const { id } = useParams();

    console.log(id)

    return (
        <MainLayout>

        </MainLayout>
    );
};

export default ProjectPage;