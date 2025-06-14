import { Button, Form, Input, message, Typography, type FormInstance } from "antd";

import { useAppDispatch, useAppSelector } from "../store/hooks";

import { addBookTour } from "../store/features/bookTour/bookTourSlice";
import { closeModal } from "../store/features/bookTour/bookTourModalSlice";


type FieldType = {
    name?: string,
    phone?: string,
    email?: string,
}

const { Title } = Typography;

const BookTourModal: React.FC = () => {

    const dispatch = useAppDispatch();
    const tourID = useAppSelector(state => state.bookTourModal.tourID);
    const tourName = useAppSelector(state => state.bookTourModal.tourName);

    const [form]:[FormInstance] = Form.useForm()

    const [messageApi, contextHolder] = message.useMessage();

    return (<>
        {contextHolder}
        <Form
            form={form}

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

                messageApi.success('Заявка отправлена!')

                dispatch(closeModal())

                form.resetFields()
            }}
        >
            <Title level={2}>{ tourName }</Title>

            <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!'}, { pattern: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, message: 'Input valid name'}]}
            >
            <Input/>
            </Form.Item>

            <Form.Item<FieldType>
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone!'}, { pattern: /^\+?[\d\s\-()]{7,}$/, message: 'Input valid phone number' }]}
            >
            <Input/>
            </Form.Item>

             <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }, {type: "email", message: 'Input valid email'}]}
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