import s from './../Dialogs.module.css'

const Messages = (props) => {
    return (
        <div className={s.message__area}>
            <div className={s.messages__message}>
            {props.text}
            </div>
        </div>
    )
}

export default Messages