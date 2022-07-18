import {Messages} from './Messages';
import {
    addMessage, updateNewMessage, DialogType, MessageType
} from '../../redux/messages-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';


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

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     // dispatch из store
//     return {
//         // То, что попадёт в пропс
//         addMessage: () => {
//             dispatch(addMessage())
//         },
//         updateNewMessage: (text: string) => {
//             dispatch(updateNewMessage(text))
//         }
//     }
// }

export const MessagesContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    addMessage,
    updateNewMessage
})(Messages)

export type MessagesPropsType = MapStateToProps & MapDispatchToProps

