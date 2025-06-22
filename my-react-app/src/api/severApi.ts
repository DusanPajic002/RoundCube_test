
import type { MessageTableResponse, NewMessage } from "../components/types/allTypes";
import { backendApi } from "./axios";


// Function to post a new message
export const postNewMessage = async (
    message: string, 
    user: string, 
): Promise<NewMessage> => {
    try { 
        
        const response = await backendApi.post('/newMessages', { message, user}); 
        return response.data;
    }
    catch (error) {
        console.error(`Error posting message!`, error);
        throw error;
    }
}

//// Function to fetch all messages with pagination
export const getAllMessages = async (
    pageNumber: number, 
    pageSize: number
): Promise<MessageTableResponse> => {
    try {
        const response = await backendApi.get('/getAllMessages', { params: { pageNumber, pageSize } }); 
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching messages!`, error);
        throw error;
    }
}