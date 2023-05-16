import React from "react"
import {Button, Form, Input, Upload, UploadProps, message} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {IProductInfo} from "../../store/productsReducer/productsReducer.props";
import {addNewProduct} from "../../async/addNewProduct";


export const AdminForm = (): JSX.Element => {
    const [form] = Form.useForm(),
        dispatch = useDispatch()

    const formSettings = {
            labelCol: {span: 8},
            wrapperCol: {span: 16},
            form: form,
            name: "control-hooks",
            style: {maxWidth: 600},
            onFinish: onFinishFunc
        },
        textAreaSettings = {
            rows: 4,
            maxLength: 255,
            showCount: true
        },
        buttonsLayout = {
            wrapperCol: {offset: 8, span: 16},
        },
        uploadProps: UploadProps = {
            name: 'product_img',
            action: '127.0.0.1',
            headers: {
                authorization: 'authorization-text'
            },
            onChange(info) {
                if (info.file.status !== 'uploading') console.log(info.file, info.fileList)
                if (info.file.status === 'done') message.success(`${info.file.name} file uploaded successfully`)
                else if (info.file.status === 'error') message.error(`${info.file.name} file upload failed.`)
            }
        };

    function onFinishFunc(data: IProductInfo) {
        dispatch(addNewProduct(data))
        form.resetFields()
    }

    function onReset() {
        form.resetFields()
    }

    function onFill() {
        form.setFieldsValue({
            name: 'Xiaomi 12 Max',
            price: 900,
            description: '2022 year model'
        });
    }

    return (
        <Form {...formSettings}>
            <Form.Item name="name" label="Product name" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name="price" label="Product price" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name="img" label="Product image" rules={[{required: false}]}>
                <Upload {...uploadProps}>
                    <Button icon={<UploadOutlined/>}>Upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item name="description" label="Product description">
                <Input.TextArea {...textAreaSettings}/>
            </Form.Item>

            <Form.Item {...buttonsLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                    Fill form
                </Button>
            </Form.Item>
        </Form>
    )
}


