import { createSlice } from "@reduxjs/toolkit"
import { IProject } from "../../models/IProject"
import { projectAPI } from "../../service/RTK/ProjectService"
import { RootState } from "../store"

interface ProjectState {
    projects: IProject[]
}

const initialState: ProjectState = {
    projects: []
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            projectAPI.endpoints.fechAllProjects.matchFulfilled,
            (state, { payload }) => {
                state.projects = payload.projects

            },
        )
    },
})

export default projectsSlice.reducer
export const selectCurrentProjects = (state: RootState) => state.projects.projects
