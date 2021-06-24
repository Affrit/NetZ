import React from "react"
import s from './ChoosePage.module.css'

const ChoosePage = (props) => {
  const choosePage = React.useRef()
  const onChangeChoosePageNumber = () => {
    let value = +choosePage.current.value || null
    if (value < 0 || value > props.pagesCount) return
    props.choosePageNumberValue(value)
  }

const onPressEnter = (e) => {
  let key = e.keyCode || e.which;
     if (key === 13) { // Клавиша Enter
      props.setIsPageSelection(false)
      if (!props.PageNumberValue) return
      props.setPageNumber(props.PageNumberValue)
     }
   }

const onClickChoosePage = () => {
  props.setIsPageSelection(true)
}

  return (
    <>
    {
    props.isPageSelection ? <input onKeyPress={onPressEnter} onChange={onChangeChoosePageNumber} value={props.PageNumberValue} ref={choosePage} className={s.choosePageTextarea} placeholder="input page number" type="number" /> :
    <span className={s.choosePageButton} onClick={onClickChoosePage} key={Math.random()}>to page:</span>
    }
    </>
  )
}

export default ChoosePage