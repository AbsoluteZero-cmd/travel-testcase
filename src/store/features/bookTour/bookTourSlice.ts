import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface BookTour {
    ID: number,
    userName: string,
    userPhone: string,
    userEmail: string,
}

export interface BookTourState {
    bookTours: BookTour[],
}

const initialState: BookTourState = {
    bookTours: [],
}

export const bookTourSlice = createSlice({
    name: 'bookTour',
    initialState,
    reducers: {
        addBookTour: (state, action: PayloadAction<{bookTourId: number, userName: string, userPhone: string, userEmail: string}>) => {
            state.bookTours.push({
                ID: action.payload.bookTourId,
                userName: action.payload.userName,
                userPhone: action.payload.userPhone,
                userEmail: action.payload.userEmail,
            })
        }
    }
})

export default bookTourSlice.reducer;
export const {addBookTour}=bookTourSlice.actions;