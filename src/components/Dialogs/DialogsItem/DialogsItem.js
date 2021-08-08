import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
import React, { useRef } from "react"

const DialogsItem = (props) => {

  const reference = useRef(null)  // реализация перехода поссылке при клике по блоку
  const onBlockClick = () => {
  reference.current.click()
}

  const path = `/dialogs/${props.id}`

  return (
    <div className={s.dialogs__dialog} onClick={onBlockClick}>
      <img className={s.dialog__img} src={props.avatar} alt="#" />
      <NavLink ref={reference} className={s.dialog__name} activeClassName={s.active} to={path}>{props.name}</NavLink>
  </div>
  )
}

export default DialogsItem