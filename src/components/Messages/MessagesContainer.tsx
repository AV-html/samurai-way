import {Messages} from './Messages';
import {
    addMessageActionCreator, DialogType, MessageType,
    updateNewMessageActionCreator
} from '../../redux/messages-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


// export function MessagesContainer() {
//
//     return (
// <StoreContext.Consumer>
//     {
//         (store) => {
//             const addMessage = () => {
//                 store.dispatch(addMessageActionCreator())
//             }
//             const updateNewMessage = (text: string) => {
//                 store.dispatch(updateNewMessageActionCreator(text))
//             }
//
//             const dialogsData = store.getState().messagesPage.dialogsData
//             const messagesData = store.getState().messagesPage.messagesData;
//             const newMessageText = store.getState().messagesPage.newMessageText;
//
//             return <Messages dialogsData={dialogsData}
//                              messagesData={messagesData}
//                              newPostText={newMessageText}
//                              addMessage={addMessage}
//                              updateNewMessage={updateNewMessage}
//             />
//         }
//     }
// </StoreContext.Consumer>
//     );
// }

type MapStateToProps = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}

type MapDispatchToProps = {
    addMessage: () => void
    updateNewMessage: (text: string) => void
}


const mapStateToProps = (state: AppStateType): MapStateToProps => {
    // Данные из стейта
    return {
        // То, что попадёт в пропс
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    // dispatch из store
    return {
        // То, что попадёт в пропс
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export type MessagesPropsType = MapStateToProps & MapDispatchToProps

