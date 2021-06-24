import ChoosePage from './PageButton/ChoosePage'
import PageButton from './PageButton/PageButton'
import s from './PageControl.module.css'

// props.pages must be array of pages

const PageControl = (props) => {
  const showPageNumbers = () => {
    switch(props.currentPage) {
      case 1:
        return [props.pages.slice(props.currentPage - 1, props.currentPage + 6).map(page => {
          return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>}),
          <span>...</span>,
          props.pages.slice(-1).map(page => {
            return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>})]

      case 2:
        return [props.pages.slice(props.currentPage - 2, props.currentPage + 5).map(page => {
          return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>}),
          <span>...</span>,
          props.pages.slice(-1).map(page => {
            return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>})]

      case 3:
        return [props.pages.slice(props.currentPage - 3, props.currentPage + 4).map(page => {
          return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>}),
          <span>...</span>,
          props.pages.slice(-1).map(page => {
            return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>})]

      case 4:
        return [props.pages.slice(props.currentPage - 4, props.currentPage + 3).map(page => {
          return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>}),
          <span>...</span>,
          props.pages.slice(-1).map(page => {
            return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>})]

      case props.pages.length:
        return [<PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={1}/>,
          <span>...</span>,
        props.pages.slice(props.currentPage - 4).map(page => {
          return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>})]

      default:
        return [<PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={1}/>,
          <span>...</span>,
          props.pages.slice(props.currentPage - 4, props.currentPage + 3).map(page => {
            return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>}),
            <span>...</span>,
          props.pages.slice(-1).map(page => {
            return <PageButton currentPage={props.currentPage} onPageChanged={props.onPageChanged} page={page}/>})]
    }
  }

  return (
    <>
    <div onClick={props.onShowMoreUsers} className={s.showMore__wrapper}>
          <img className={s.showMore__icon} src="https://pics.freeicons.io/uploads/icons/png/17446653211558965377-512.png" alt="#" />
          <span className={s.showMore_button}>Show more...</span>
    </div>
    <hr />
    <div className={s.pagesNumber__wrapper}>
      {showPageNumbers()} <ChoosePage choosePageNumberValue={props.choosePageNumberValue} onPageChanged={props.onPageChanged} PageNumberValue={props.PageNumberValue} setPageNumber={props.setPageNumber} isPageSelection={props.isPageSelection} setIsPageSelection={props.setIsPageSelection} pagesCount={props.pages.length}/>
    </div>
    </>
  )
}

export default PageControl
