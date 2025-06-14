import { tourCards } from "../sample_data";

import TourCard from "./TourCard";

const BookTourList = () => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {tourCards.map((tourCard) => (
                <div style={{ margin: '5px' }}>
                <TourCard key={tourCard.tourID} tourID={tourCard.tourID} tourName={tourCard.tourName} />
                </div>
            ))}
      </div>
    );
}

export default BookTourList;