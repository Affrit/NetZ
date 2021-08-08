import s from './Textarea.module.css'

export const CustomField = ({input, meta, ...props}) => {
    console.log({input, meta, ...props})
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? `${s.formControl} ${s.error}` : `${s.formControl}`}>
            {props.mytype === 'textarea' ? <textarea {...input} {...props}/> :
             props.mytype === 'input' ? <input {...input} {...props}/> : ''}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export default CustomField