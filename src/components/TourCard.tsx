import { Card, Space, Typography, Button } from 'antd';
import { openModal } from '../store/features/bookTour/bookTourModalSlice';
import { useAppDispatch } from '../store/hooks';


const { Meta } = Card;

type TourCardProps = {
    tour: {
        tourID: number,
        tourName: string,
    }
}

const TourCard: React.FC<TourCardProps> = ({tour}) => {
    const dispatch = useAppDispatch();
    
    return (
    <>
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://i.natgeofe.com/n/65b5d84b-c44e-41d0-8ee9-5295e1e6eba5/silkroad_shutterstock_1236828025_HR.jpg" />}
        >
            <Meta title={tour.tourName} />
            <div style={{ marginTop: 12 }}>
                <Typography>Стана: Казахстан</Typography>
                <Typography>Цена: 12000 KZT</Typography>
                <Space />
                <Typography>Дата начала: 12.12.12</Typography>
                <Button type='primary' onClick={() => dispatch(openModal({tourID: tour.tourID, tourName: tour.tourName}))}>Забронировать</Button>
            </div>
        </Card>
    </>);
}

export default TourCard;