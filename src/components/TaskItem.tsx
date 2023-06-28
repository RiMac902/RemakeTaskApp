import React from 'react';
import {
    Avatar,
    AvatarGroup, IconButton,
    LinearProgress,
    linearProgressClasses,
    Paper,
    Slider,
    Stack,
    styled,
    Typography
} from "@mui/material";
import {indigo} from "@mui/material/colors";
import {deepOrange} from "@mui/material/colors";
import {deepPurple} from "@mui/material/colors";
import {green} from "@mui/material/colors";
import {formattedDate} from "../helpers/date.ts";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

const TaskItem = () => {
    return (
        <Stack direction="column" sx={{marginTop: 2}}>
            <Paper sx={{bgcolor: indigo[500], marginX: 1, padding: 2, borderRadius: 5}} elevation={5}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant="h6" sx={{marginX: 1, color: 'white'}}>Task Item</Typography>
                   <Stack  direction={'row'} alignItems={'center'}>
                       <AvatarGroup max={4}>
                           <Avatar alt="Remy Sharp" sx={{ bgcolor: deepOrange[500] }} src="/static/images/avatar/1.jpg" />
                           <Avatar alt="Travis Howard" sx={{ bgcolor: deepPurple[500] }} src="/static/images/avatar/2.jpg" />
                           <Avatar alt="Cindy Baker" sx={{ bgcolor: green[500] }} src="/static/images/avatar/3.jpg" />
                           <Avatar alt="Agnes Walker" sx={{ bgcolor: deepPurple[500] }} src="/static/images/avatar/4.jpg" />
                           <Avatar alt="Trevor Henderson"  sx={{ bgcolor: deepOrange[500] }} src="/static/images/avatar/5.jpg" />
                       </AvatarGroup>
                       <IconButton sx={{marginX: 2}}>
                           <AddCircleOutlineTwoToneIcon sx={{color: 'white',  fontSize: 30 }} />
                       </IconButton>
                   </Stack>
                    <BorderLinearProgress variant="determinate" value={70} sx={{width: '19%', marginX: 1}}/>
                    <Typography variant="h6" sx={{marginX: 3, color: 'white'}}>{formattedDate}</Typography>
                    <IconButton sx={{marginX: 2}}>
                        <MoreHorizIcon sx={{color: 'white', fontSize: 30}} />
                    </IconButton>
                </Stack>
            </Paper>
        </Stack>
    );
};

export default TaskItem;



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 400 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? 'white' : '#308fe8',
    },
}));