import React from 'react';
import {Checkbox, Chip, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CreateIcon from '@mui/icons-material/Create';

const TaskItem = ({task}) => {
    return (
            <ListItemButton
                alignItems={"flex-start"}
                key={task.id}
                sx={{
                    px: 3,
                    borderBottom: 1,
                    borderBottomColor: 'divider',

                    '&:hover .update-task': {
                        opacity: 1,
                        color: 'grey.700',
                        backgroundColor: 'common.white',
                        transform: 'translateY(-50%) scale(1)',
                    }
                }}
            >
                <ListItemIcon sx={{minWidth: 40, mt: 0}}>
                    <Checkbox edge="start"/>
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={"h5"} mb={.5}>{task.title}</Typography>
                    }
                    secondary={
                        <Typography component={"div"}>
                            <Typography variant={"body1"} color={"text.secondary"} mb={1}>{task.description}</Typography>
                            <Chip label={task.category} size={"small"}/>
                        </Typography>
                    }
                />
                <IconButton
                    className={"update-task"}
                    aria-label="update-task"
                    sx={{
                        position: 'absolute',
                        zIndex: 5,
                        right: 20,
                        top: '50%',
                        opacity: 0,
                        boxShadow: 1,
                        color: 'text.primary',
                        backgroundColor: 'common.white',
                        transform: 'translateY(-50%) scale(0.5)',
                        transition: 'all 0.2s ease-in-out'
                    }}
                >
                    <CreateIcon fontSize={"small"}/>
                </IconButton>
            </ListItemButton>
    );
};
/* Todo item prop define */
export default TaskItem;
