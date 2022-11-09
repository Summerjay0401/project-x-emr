import React from 'react';
import {tasksList} from "./data";
import TaskList from "./TaskList";
import CategoryDropdown from "./CategoryDropdown";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import Stack from "@mui/material/Stack";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useTranslation} from "react-i18next";

const TaskListExpandable = ({scrollHeight}) => {
    const {t} = useTranslation();
    const [activeCategory, setActiveCategory] = React.useState("all");
    const [filteredTasks, setFilteredTasks] = React.useState(tasksList);

    React.useEffect(() => {
        if (activeCategory && activeCategory !== "all")
            setFilteredTasks(tasksList.filter(task => task.category === activeCategory));
        else
            setFilteredTasks(tasksList);

    }, [activeCategory]);

    return (
        <JumboCardQuick
            title={t('widgets.title.taskListExpandable')}
            subheader={t('widgets.subheader.taskListExpandable')}
            action={
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <CategoryDropdown activeCategory={activeCategory} onCategoryChange={setActiveCategory}/>
                    <Fab size="small" color="primary" aria-label="add">
                        <AddIcon/>
                    </Fab>
                </Stack>
            }
            headerSx={{
                borderBottom: 1,
                borderBottomColor: 'divider'
            }}
            wrapperSx={{p: 0}}
        >
            <JumboScrollbar
                autoHeight
                autoHeightMin={scrollHeight ? scrollHeight : 392}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <TaskList tasks={filteredTasks}/>
            </JumboScrollbar>

        </JumboCardQuick>
    );
};
/* Todo scrollHeight prop define */
export default TaskListExpandable;
