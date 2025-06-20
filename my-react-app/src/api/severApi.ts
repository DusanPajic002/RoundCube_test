import type {MessageTableResponse, NewMessage } from "../types/allTypes";
import { backendApi } from "./axios";


export const postNewMessage = async (
    message: string, 
    name: string
): Promise<NewMessage> => {
    try {
        const response = await backendApi.post('/newMessages', { message, name });
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(`Error posting message!`, error);
        throw error;
    }
}

export const getAllMessages = async (
    pageNumber: number, 
    pageSize: number
): Promise<MessageTableResponse> => {
    try {
        const response = await backendApi.get('/getAllMessages', {
            params: { pageNumber, pageSize }
        });
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching messages!`, error);
        throw error;
    }
}