import type { Message, NewMessage } from "../types/sharedTypes";
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
export const getAllMessages = async (): Promise<Message[]> => {
    try {
        const response = await backendApi.get('/getAllMessages');
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching messages!`, error);
        throw error;
    }
}