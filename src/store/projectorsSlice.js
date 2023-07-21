import { createSlice } from "@reduxjs/toolkit";
import projectorService from "../service/projector.service";

const initialState = {
  entities: [],
  isLoading: true,
  error: null,
};

const projectorsSlice = createSlice({
  name: "projectors",
  initialState,
  reducers: {
    projectorsRequested: (state) => {
      state.isLoading = true;
    },
    projectorsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    projectorsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;      
    },
  },
});

const {reducer: projectorsReducer, actions} = projectorsSlice;
const {projectorsRequested, projectorsReceived, projectorsRequestFailed} = actions;

export const loadProjectors = () => async (dispatch) => {
    dispatch(projectorsRequested());
    try {
        const  content = await projectorService.fetchAll();        
        const newContent = Object.keys(content).map((elem) => content[elem]);        
        dispatch(projectorsReceived(newContent));
    } catch (error) {
        dispatch(projectorsRequestFailed(error.message));
    }
};

export const getProjectorsRedux = () => (state) => state.projectors.entities;
export const getProjectorsLoadingStatus = () => (state) =>
    state.projectors.isLoading;

export default projectorsReducer;