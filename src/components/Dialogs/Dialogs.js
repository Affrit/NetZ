import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomField from '../common/FormsControls/Textarea'
import { requiredField, maxLength } from '../../utils/validators'

const maxLengthofField = maxLength(10)

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.newMessage}>
        <div className={s.newMessage__area}>
          <Field placeholder={"New message"} component={CustomField} 
          name={"newMessage"} id={"newMessage"} className={s.message__textarea}
          validate={[requiredField, maxLengthofField]} mytype="textarea"
          />
        </div>
        <div className={s.newMessage__wrapper}>
          <button className={s.newMessage__button}>Send</button>
        </div>
    </form>
  )
}

const NewMessageReduxForm = reduxForm({
  form: 'NewMessageForm'
})(NewMessageForm)



const Dialogs = (props) => {

  const onSubmit = (formData) => {
    props.addNewMessage(formData.newMessage)
  }

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {props.dialogsPage.dialogsData.map(obj => <DialogsItem key={obj.id} name={obj.name} avatar={obj.avatar} id={obj.id} />)}
      </div>
      <div className={s.messages}>
        {props.dialogsPage.messageData.map(obj => <Messages key={obj.id} text={obj.text} />)}
        <NewMessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

export default Dialogs