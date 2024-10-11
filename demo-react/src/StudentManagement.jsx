import {Button, Form, Image, Input, InputNumber,  Modal,  Popconfirm,  Table,  Upload,} from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PlusOutlined } from "@ant-design/icons";
import uploadFile from "./utils/file";

function StudentManagement() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => {
        return <img src={image} alt="" width={70} />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return (
          <>
            <Popconfirm
              onConfirm={() => handleDeleteStudent(id)}
              title="Delete"
              description="Do you want to delete this"
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  // Quan ly sinh vien
  // 1. Xem danh sach sinh vien
  // 2. Them 1 thang sinh vien moi
  // 3. Update thong tin cho sinh vien
  // 4. Delete 1 thang sinh vien nao do

  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false); // mặc định modal sẽ đóng
  const [submitting, setSubmitting] = useState(false);
  const [form] = useForm();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const api = "https://66dc4a9c47d749b72acb3558.mockapi.io/Student";

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const fetchStudent = async () => {
    // Lay du lieu tu backend

    // promised => function bất đồng bộ => cần thời gian để thực hiện
    // await: đợi tới khi api trả về kết quả
    const response = await axios.get(api);

    console.log(response.data);
    setStudents(response.data);

    // GET => Lay du lieu
  };

  // []: dependency array
  useEffect(() => {
    // hành động
    // chạy 1 cái hành động gì đó
    // event
    // [] => chạy khi load trang lần đầu
    // [number] => chạy mỗi khi mà number thay đỗi
    fetchStudent();
  }, []);

  const handelOpenModal = () => {
    // tác động vào cái biến openModal true => mở Modal
    setOpenModal(true);
  };

  const handelCloseModal = () => {
    // tác động vào cái biến openModal false => đóng Modal
    setOpenModal(false);
  };

  const handleSubmitStudent = async (student) => {
    //xử lý lấy thông tin thằng student trong form
    // =) POST xuống API

    //upload ảnh lên trước
    if (fileList.length > 0) {
      const file = fileList[0];
      console.log(file);
      const url = await uploadFile(file.originFileObj);
      console.log(url);
      student.image = url;
    }

    console.log(student);
    //quăng data xuống cho thằng BE

    try {
      setSubmitting(true); // bắt đầu loading
      const response = await axios.post(api, student); // lỗi
      // => SUCCESS
      toast.success("Successfully create new student");
      setOpenModal(false);
      // clear dữ liệu cũ
      form.resetFields();

      // lấy lại danh sách mới
      fetchStudent();
    } catch (err) {
      toast.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`${api}/${studentId}`);
      toast.success("Delete Successfully");
      fetchStudent()
    } catch (ex) {
      toast.error("Failed to delete student");
    }
  };

  return (
    <div>
      <h1>Student management </h1>
      <Button onClick={handelOpenModal}>Create new student</Button>
      <Table columns={columns} dataSource={students} />
      {/* nếu open là true modal hien. false là modal ẩn đi */}
      {/* onCancel: antd cung cấp */}
      <Modal
        confirmLoading={submitting}
        onOk={() => form.submit()}
        title="Create new student"
        Modal
        open={openModal}
        onCancel={handelCloseModal}
      >
        {/*Form */}
        {/*Input name, input age */}
        {/* form: đại diện cho cái form này */}
        <Form onFinish={handleSubmitStudent} form={form}>
          {/* name => tên biến phải match tên biến bên api*/}
          {/* rule => định nghĩa validation => []*/}
          <Form.Item
            label="Student name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input student's name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* SE123456 */}
          <Form.Item
            label="Student code"
            name="code"
            rules={[
              {
                required: true,
                message: "Please input student's code!",
              },
              {
                pattern: "SE[0-9]{6}",
                message: "Invalid format!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Student score"
            name="score"
            rules={[
              {
                required: true,
                message: "Please input student's score!",
              },
              {
                type: "number",
                min: 0,
                max: 10,
                message: "Invalid score!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item label="image" name="image">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
}

export default StudentManagement;
