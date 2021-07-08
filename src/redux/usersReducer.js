import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_MORE_USERS = 'SET_MORE_USERS'
const IS_FETCHING = 'IS_FETCHING'
const IS_FOLLOW_IN_PROGRESS = 'IS_FOLLOW_IN_PROGRESS'
const CHOOSE_PAGE_NUMBER_VALUE = 'CHOOSE_PAGE_NUMBER_VALUE'
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
const IS_PAGE_SELECTION = 'IS_PAGE_SELECTION'


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowInProgress: [],
  isPageSelection: false,
  PageNumberValue: null,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.userID ? { ...user, followed: true } : user
        })
      }

    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.userID ? { ...user, followed: false } : user
        })
      }

    case 'SET_USERS':
      return {
        ...state,
        users: [...action.users],  // перезатирает старых юзеров. users: [...state.users, ...action.users] позволит добавлять в конец 
      }

    case 'SET_MORE_USERS': // показывает больше пользователей на одной странице по нажатию кнопки 
      return {
        ...state,
        users: [...state.users, ...action.users],
      }

    case 'SET_TOTAL_USERS_COUNT': // устанавливает значение количества пользователей (из ответа сервера)
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }

    case 'SET_CURRENT_PAGE': // установить страницу на которую перешли как текущую
      return {
        ...state,
        currentPage: action.pageNumber,
        isPageSelection: false,
      }

    case 'IS_FETCHING': // загружается ли контент
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case 'IS_FOLLOW_IN_PROGRESS': // нажата ли кнопка подписаться/отписаться
      return {
        ...state,
        isFollowInProgress: action.isFetching ?
          [...state.isFollowInProgress, action.userID] : // если идет загрузка добавляем id в массив
          state.isFollowInProgress.filter(id => id !== action.userID), // если загрузка закончилась убираем id
      }

    case 'CHOOSE_PAGE_NUMBER_VALUE': // flux для поля ввода номера страницы
      return {
        ...state,
        PageNumberValue: action.choosePageNumber,
      }

    case 'SET_PAGE_NUMBER':  // установить страницу записанную в поле ввода как текущую
      return {
        ...state,
        currentPage: action.PageNumberValue,
        PageNumberValue: null,
      }

    case 'IS_PAGE_SELECTION': // был ли клик по кнопке ввода страницы
      return {
        ...state,
        isPageSelection: action.isPageSelection,
      }

    default: return state
  }
}

// Action Creators
export const followAccepted = (userID) => ({ type: FOLLOW, userID })
export const unfollowAccepted = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setMoreUsers = (users) => ({ type: SET_MORE_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching })
export const setIsFollowInProgress = (isFetching, userID) => ({ type: IS_FOLLOW_IN_PROGRESS, isFetching, userID })
export const setPageNumber = (PageNumberValue) => ({ type: SET_PAGE_NUMBER, PageNumberValue })
export const choosePageNumberValue = (choosePageNumber) => ({ type: CHOOSE_PAGE_NUMBER_VALUE, choosePageNumber })
export const setIsPageSelection = (isPageSelection) => ({ type: IS_PAGE_SELECTION, isPageSelection })

// thunks

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsFetching(true))
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
      dispatch(setIsFetching(false))
    })
}

export const getMoreUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsFetching(true))
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(setMoreUsers(data.items))
      dispatch(setIsFetching(false))
    })
}

export const follow = (userID) => (dispatch) => {
  dispatch(setIsFollowInProgress(true, userID))
  usersAPI.followUser(userID)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(followAccepted(userID))
      }
    }).finally(res => {
      dispatch(setIsFollowInProgress(false, userID))
    })
}

export const unfollow = (userID) => (dispatch) => {
  dispatch(setIsFollowInProgress(true, userID))
  usersAPI.unfollowUser(userID)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowAccepted(userID))
      }
    }).finally(res => {
      dispatch(setIsFollowInProgress(false, userID))
    })
}


export default usersReducer
