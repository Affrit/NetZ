import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({     // все редюсеры упаковали в объект где имя свойства это ветка из стейта и значение - ее редюсер
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
})

let store = createStore(reducers)   // создали стор, отдав аргументом объект с редюсерами 

export default store