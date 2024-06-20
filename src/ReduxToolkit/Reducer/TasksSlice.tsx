import { createSlice } from '@reduxjs/toolkit'
import { newTaskData } from '../../Data/Application/Tasks/Tasks';
import { TasksType } from '../../Types/Application/Tasks/Tasks';

const initialState:TasksType = {
    activeTab: "1",
    allTasks : newTaskData
  };
const TasksSlice = createSlice({
    name: "Tasks",
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        setAllTasks:(state, action) => {
            state.allTasks = action.payload;
        }
    },
})

export const { setActiveTab ,setAllTasks} = TasksSlice.actions;

export default TasksSlice.reducer