import BookTourModal from "./components/BookTourModal";
import TourCard from "./components/TourCard"
import { useAppDispatch, useAppSelector } from "./store/hooks";

import { tourCards } from "./sample_data";
import { Modal } from "antd";
import { closeModal } from "./store/features/bookTour/bookTourModalSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.bookTourModal.isModalOpen);

  return (
    <div>
      <div style={{ display: "flex" }}>
      {tourCards.map((tourCard) => (
        <div style={{ margin: '5px' }}>
        <TourCard key={tourCard.tourID} tourID={tourCard.tourID} />
        </div>
      ))}
      </div>

      <Modal
        title="Book Tour"
        visible={isModalOpen}
        onCancel={() => dispatch(closeModal())}
        footer={null}
      >
        <BookTourModal />
      </Modal>
    </div>
  );
};

export default App
