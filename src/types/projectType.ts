import {ProjectValues} from "./formType.ts";


export interface ProjectState extends ProjectValues {
    projectId: string | null;
    isLoading: boolean;
    error: string | null;
}
