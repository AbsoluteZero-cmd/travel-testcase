import { tourCards } from "../sample_data";

import TourCard from "./TourCard";

const BookTourList: React.FC = () => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {tourCards.map((tour) => (
                <div style={{ margin: '5px' }}>
                <TourCard key={tour.tourID} tour={tour} />
                </div>
            ))}
      </div>
    );
}

export default BookTourList;