import React from 'react';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

const ProjectCard = () => {
    return (
        <Card sx={{ minWidth: '100%', minHeight: '10rem', maxHeight: '10rem'}} >
            <CardActionArea sx={{width: '100%', height: '100%',}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        That's your project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dignissimos distinctio dolor facere nemo neque porro praesentium quibusdam quisquam unde.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProjectCard;