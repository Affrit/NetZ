import s from './Posts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requiredField, maxLength } from '../../../utils/validators'
import CustomField from '../../common/FormsControls/Textarea'

const maxLengthofField = maxLength(5)

const NewPostForm = (props) => {
  return (
    <form className={s.newPost} onSubmit={props.handleSubmit}>
        <div className={s.newPost__area}>
          <Field placeholder={"New Post"} component={CustomField} 
          name={"newPost"} id={"newPost"} className={s.post__textarea} 
          validate={[requiredField, maxLengthofField]} mytype="textarea"/>
        </div>
        <div className={s.button__wrapper}>
          <div className={s.newPost__buttons}>
            <button className={s.newPost__button}>Add post</button>
          </div>
        </div>
    </form>
  )
}

const NewPostReduxForm = reduxForm({
  form: 'NewPostForm'
})(NewPostForm)

const Posts = (props) => {

  const onSubmit = (formData) => {
    props.addNewPost(formData.newPost)
  }

  return (
    <div className={s.item}>
      <h3 className={s.title}>New Post</h3>
      <NewPostReduxForm onSubmit={onSubmit} />
      <div className={s.posts}>
        {props.posts.map(post => <Post key={post.id} message={post.message} likes={post.likes} reposts={post.reposts} />)}
      </div>
    </div>
  )
}

export default Posts
