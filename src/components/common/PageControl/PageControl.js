import s from './PageControl.module.css'

const PageControl = (props) => {

  const showPageNumbers = () => {
    switch(props.currentPage) {
      case 1:
        return [props.pages.slice(props.currentPage - 1, props.currentPage + 6).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, props.pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]

      case 2:
        return [props.pages.slice(props.currentPage - 2, props.currentPage + 5).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, props.pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]

      case 3:
        return [props.pages.slice(props.currentPage - 3, props.currentPage + 4).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, props.pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]

      case 4:
        return [props.pages.slice(props.currentPage - 4, props.currentPage + 3).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active :  s.pagesNumber}>{page}</span>}), <span>...</span>, props.pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]

      case props.pages.length:
        return [<span onClick={() => props.onPageChanged(1)} className={props.currentPage === 1 ? s.pagesNumber_active : s.pagesNumber}>1</span>, <span>...</span>, props.pages.slice(props.currentPage - 4).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active :  s.pagesNumber}>{page}</span>})]

      default:
        return [<span onClick={() => props.onPageChanged(1)} className={props.currentPage === 1 ? s.pagesNumber_active : s.pagesNumber}>1</span>, <span>...</span>, props.pages.slice(props.currentPage - 4, props.currentPage + 3).map(page => {
          return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>}), <span>...</span>, props.pages.slice(-1).map(page => {
            return <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? s.pagesNumber_active : s.pagesNumber}>{page}</span>
          })]
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
      {showPageNumbers()}
    </div>
    </>
  )
}

export default PageControl
