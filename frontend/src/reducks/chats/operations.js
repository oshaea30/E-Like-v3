import API from '../../API';
import { addChatAction, fetchChatsAction, resetChatAction } from './actions';

const api = new API();

export const fetchChats = (matchId, page) => {
    return async (dispatch) => {
        return api.getChats(matchId, page)
            .then((chats) => {
                dispatch(fetchChatsAction(chats))
            }).catch((error) => {
                alert("Failed to connect API: /chats/")
            });
    }
}

export const resetChats = () => {
    return resetChatAction()
}

export const addChat = (chatBody) => {
    return async (dispatch) => {
        return api.addChat(chatBody)
            .then((chats) => {
                dispatch(addChatAction(chats))
            }).catch((error) => {
                alert("Failed to connect API: /chats/add/")
            });
    }
}
