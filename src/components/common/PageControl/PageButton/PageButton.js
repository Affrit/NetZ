import s from './PageButton.module.css'

const PageButton = (props) => {
  return (
    <>
    <span onClick={() => props.setCurrentPage(props.page)} key={Math.random()} className={props.currentPage === props.page ? s.pagesNumber_active : s.pagesNumber}>{props.page}</span>
    </>
  )
}

export default PageButton