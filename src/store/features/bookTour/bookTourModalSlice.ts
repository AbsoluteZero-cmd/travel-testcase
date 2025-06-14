import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface BookTourModal {
    isModalOpen: boolean,
    tourID: number,
    tourName: string,
}

const initialState: BookTourModal = {
    isModalOpen: false,
    tourID: 0,
    tourName: "",
}


export const bookTourModalSlice = createSlice({
    name: 'bookTourModal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{tourID: number, tourName: string}>) => {
            state.isModalOpen = true
            state.tourID = action.payload.tourID
            state.tourName = action.payload.tourName
        },
        closeModal: (state) => {
            state.isModalOpen = false
        },
    }
})

export default bookTourModalSlice.reducer;
export const {openModal, closeModal}=bookTourModalSlice.actions;