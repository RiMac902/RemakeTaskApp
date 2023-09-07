import {ProjectValues} from "./formType.ts";


export interface ProjectState extends ProjectValues {
    isLoading: boolean;
    error: string | null;
}
