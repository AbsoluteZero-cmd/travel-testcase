import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface BookTourModal {
    isModalOpen: boolean,
    tourID: number,
}

const initialState: BookTourModal = {
    isModalOpen: false,
    tourID: 0,
}


export const bookTourModalSlice = createSlice({
    name: 'bookTourModal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{tourID: number}>) => {
            state.isModalOpen = true
            state.tourID = action.payload.tourID
        },
        closeModal: (state) => {
            state.isModalOpen = false
        },
    }
})

export default bookTourModalSlice.reducer;
export const {openModal, closeModal}=bookTourModalSlice.actions;