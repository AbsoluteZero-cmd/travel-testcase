import { Button, Form, Input, message } from "antd";
import { addBookTour } from "../store/features/bookTour/bookTourSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeModal } from "../store/features/bookTour/bookTourModalSlice";


type FieldType = {
    name?: string,
    phone?: string,
    email?: string,
}

const BookTourModal = () => {
    const dispatch = useAppDispatch();
    const tourID = useAppSelector(state => state.bookTourModal.tourID);

    return (<>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"

            onFinish={(values: FieldType) => {
                dispatch(addBookTour({
                    bookTourId: tourID,
                    userName: values.name!,
                    userEmail: values.email!,
                    userPhone: values.phone!,
                }))

                message.success('Заявка отправлена!')
                
                console.log('finished')

                dispatch(closeModal())
            }}
        >
            <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
            >
            <Input/>
            </Form.Item>

            <Form.Item<FieldType>
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone!' }]}
            >
            <Input/>
            </Form.Item>

             <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            >
            <Input/>
            </Form.Item>

            <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
    </>);
}

export default BookTourModal;