import React, {FC} from 'react';
import {
    Avatar,
    AvatarGroup,
    IconButton,
    LinearProgress,
    linearProgressClasses,
    Paper,
    Stack,
    styled,
    Typography
} from "@mui/material";
import {deepOrange, deepPurple, green, indigo} from "@mui/material/colors";
import {formattedDate} from "../helpers/date.ts";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

const TaskItem: FC = () => {
    return (
        <Stack direction="column" sx={{marginTop: 2}}>
            <Paper sx={{bgcolor: indigo[500], marginX: 1, padding: 2, borderRadius: 5}} elevation={5}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant="h6" sx={{marginX: 1, color: 'white', userSelect: 'none'}}>Task Item</Typography>
                   <Stack  direction={'row'} alignItems={'center'}>
                       <AvatarGroup max={4}>
                           <Avatar alt="Remy Sharp" sx={{ bgcolor: deepOrange[500] }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
                           <Avatar alt="Travis Howard" sx={{ bgcolor: deepPurple[500] }} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                           <Avatar alt="Cindy Baker" sx={{ bgcolor: green[500] }} src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
                           <Avatar alt="Agnes Walker" sx={{ bgcolor: deepPurple[500] }} src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
                           <Avatar alt="Trevor Henderson"  sx={{ bgcolor: deepOrange[500] }} src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
                       </AvatarGroup>
                       <IconButton sx={{marginX: 2}}>
                           <AddCircleOutlineTwoToneIcon sx={{color: 'white',  fontSize: 30 }} />
                       </IconButton>
                   </Stack>
                    <BorderLinearProgress variant="determinate" value={70} sx={{width: '19%', marginX: 1}}/>
                    <Typography variant="h6" sx={{marginX: 3, color: 'white', userSelect: 'none'}}>{formattedDate}</Typography>
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