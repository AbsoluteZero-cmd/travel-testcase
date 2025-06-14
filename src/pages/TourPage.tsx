import { Modal, Typography } from "antd";
import BookTourList from "../components/BookTourList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import BookTourModal from "../components/BookTourModal";
import { closeModal } from "../store/features/bookTour/bookTourModalSlice";

const TourPage = () => {
    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector((state) => state.bookTourModal.isModalOpen);

    const { Title } = Typography

    return (
        <div>
            <Title level={2}>Tour Page</Title>

            <BookTourList />

            <Modal
                title="Book Tour"
                open={isModalOpen}
                onCancel={() => dispatch(closeModal())}
                footer={null}
            >
                <BookTourModal />
            </Modal>
        </div>
    );
}

export default TourPage;