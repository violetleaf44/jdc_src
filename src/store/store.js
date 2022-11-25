import { configureStore, createSlice } from '@reduxjs/toolkit'


let mysr = createSlice({
    name : 'mysr',
    initialState : ['나의 요청 건수', 83, 41, 19, 22, 1]
})
let mywork = createSlice({
    name : 'mywork',
    initialState : ['나의 작업 건수', 120, 37, 11, 60, 2]
})
let soonend = createSlice({
    name : 'soonend',
    initialState : ['납기 만료 예정', 54, 31, 13, 7, 3]
})
let hurrysr = createSlice({
    name : 'hurrysr ',
    initialState : ['긴급 요청', 46, 22, 13, 9, 2]
})

export default configureStore({
  reducer: {
    mysr : mysr.reducer,
    mywork : mywork.reducer,
    soonend : soonend.reducer,
    hurrysr : hurrysr.reducer
   }
}) 