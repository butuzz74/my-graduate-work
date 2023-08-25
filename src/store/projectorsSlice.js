import { createSlice } from "@reduxjs/toolkit";
import projectorService from "../service/projector.service";

const initialState = {
    entities: [],
    isLoading: true,
    error: null
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
        create: (state, action) => {
            state.entities.push(action.payload);
            state.isLoading = false;
        },
        deleteGood: (state, action) => {
            state.isLoading = false;
            const a = state.entities.filter(
                (item) => item.id !== action.payload
            );
            state.entities = a;
        },
        update: (state, action) => {
            state.isLoading = false;
            state.entities.push(action.payload);
        }
    }
});

const { reducer: projectorsReducer, actions } = projectorsSlice;
const {
    projectorsRequested,
    projectorsReceived,
    projectorsRequestFailed,
    create,
    deleteGood,
    update
} = actions;

export const loadProjectors = () => async (dispatch) => {
    dispatch(projectorsRequested());
    try {
        const content = await projectorService.fetchAll();
        const newContent = Object.keys(content).map((elem) => content[elem]);
        dispatch(projectorsReceived(newContent));
    } catch (error) {
        dispatch(projectorsRequestFailed(error.message));
    }
};
export const createProjector = (data) => async (dispatch) => {
    dispatch(projectorsRequested());
    try {
        const content = await projectorService.create(data);
        dispatch(create(content));
    } catch (error) {
        dispatch(projectorsRequestFailed(error.message));
    }
};
export const deleteProjector = (id) => async (dispatch) => {
    dispatch(projectorsRequested());
    try {
        const content = await projectorService.delete(id);
        console.log(content);
        dispatch(deleteGood(id));
    } catch (error) {
        dispatch(projectorsRequestFailed(error.message));
    }
};
export const updatedProjector = (id, data) => async (dispatch) => {
    dispatch(projectorsRequested());
    try {
        const content = await projectorService.update(id, data);
        dispatch(deleteGood(id));
        dispatch(update(content));
    } catch (error) {
        dispatch(projectorsRequestFailed(error.message));
    }
};

export const getProjectorsRedux = () => (state) => state.projectors.entities;
export const getProjectorsLoadingStatus = () => (state) =>
    state.projectors.isLoading;
export const getProjectorById = (userId) => (state) => {
    if (state.projectors.entities) {
        return state.projectors.entities.find((u) => u.id === userId);
    }
};

export default projectorsReducer;
