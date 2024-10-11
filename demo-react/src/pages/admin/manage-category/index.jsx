import React from 'react'
import {Table, Button, Modal, Form, Input, Popconfirm }from "antd"
import { useState } from 'react'
import api from '../../../config/axios'
import { toast} from 'react-toastify';
import { useEffect } from 'react';

function ManageCategory() {
const [datas, setDatas] = useState([]);
const [showModal, setShowModal] = useState(false);
const [form] = Form.useForm();
const [loading, setLoading] = useState(false);

  //GET
  const featchData = async () => {
    try{
      const response = await api.get('category');
      setDatas(response.data);
    }catch(err){
      toast.error(err.response.data);
    }
  }
  //CREATE OR UPDATE
  const handleSubmit = async (values) => {
    console.log(values)
    try{
      setLoading(true);

      if(values.id){
        // => update
        const response = await api.put(`category/${values.id}`, values);
      }else{
        // => create
        const response = await api.post('category', values);
      }
      
      toast.success("Successfully saved")
      featchData();
      form.resetFields();
      setShowModal(false);
    }catch(err){
      toast.error(err.response.data)
    } finally{
      setLoading(false);
    }
  }

  //DELETE
  const handleDelete = async (id) => {
    try{
      await api.delete(`category/${id}`);
      toast.success("Successfully deleted!");
      featchData();
    }catch(err){
      toast.error(err.response.data)
    }
  }

  useEffect (() => {
    featchData();
  }, [])

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, category) => (
        <>
          <Button type='primary' onClick={() => {
            setShowModal(true)
            form.setFieldsValue(category);
          }}>Edit</Button>

          <Popconfirm title="Delete" 
                        description='Do you want to delete this category ?'
                        onConfirm={() => handleDelete(id)}
            >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      )
    },
  ];

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add</Button>
      <Table dataSource={datas} columns={columns}/>

      <Modal 
        open={showModal} 
        onCancel={() => setShowModal(false)} 
        title="category"
        onOk={() => form.submit()}
        confirmLoading={loading}
        >

        <Form form={form}
        labelCol={{
          span: 24,
        }}
        onFinish={handleSubmit}
        >
          <Form.Item name="id" hidden>
            <Input/>
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[
            {required: true, message: "Please input catogory's name!"},
          ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea/>
          </Form.Item>
        </Form>

      </Modal>
    </div>
  )
}

export default ManageCategory