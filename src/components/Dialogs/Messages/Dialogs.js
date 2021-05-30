import s from './../Dialogs.module.css'

const Messages = (props) => {
    return (
        <div className={s.messages__message}>
            {props.text}
        </div>
    )
}

export default Messages