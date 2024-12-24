import { AxiosResponse } from "axios";
import { Blog } from "../types/Blog";
import api from "./axios";
const API_BASE_URL = 'http://localhost:5000/api/post';

export const createPost = (postData: Partial<Blog>): Promise<AxiosResponse<Blog>> => {
    return api.post<Blog>(`${API_BASE_URL}`, postData);
};
