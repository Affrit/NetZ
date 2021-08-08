import s from './Login.module.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/authReducer'
import CustomField from '../common/FormsControls/Textarea'
import { requiredField } from '../../utils/validators'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset className={s.form__contacts}>
        <legend>Enter your registration data</legend>
        <div className={s.contacts__item}>
          <label className={s.contacts__label} htmlFor="email">E-mail</label>
          <Field placeholder={"email"} component={CustomField} name={"email"}
            id={"email"} className={s.contacts__input}
            validate={[requiredField]} mytype="input"/>
        </div>
        <div className={s.contacts__item}>
          <label className={s.contacts__label} htmlFor="password">Password</label>
          <Field placeholder={"password"} component={CustomField}
            name={"password"} type={"password"} id={"password"}
            className={s.contacts__input} validate={[requiredField]} mytype="input"/>
        </div>
        <div className={s.contacts__item}>
          <Field type={"checkbox"} component={'input'} name={"rememberMe"} 
          id={"checkbox"} className={s.checkbox__input} mytype="input"/>
          <label className={s.checkbox__label} htmlFor="checkbox">Remember me</label>
        </div>
        <div className={s.button__wrapper}>
          <button className={s.button}>Send</button>
        </div>
      </fieldset>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'loginForm'
})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  return (
    props.isAuth ?
      <Redirect to={"/profile"} /> :
      <div className={s.login__wrapper}>
        <h1>Login to Netz</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)