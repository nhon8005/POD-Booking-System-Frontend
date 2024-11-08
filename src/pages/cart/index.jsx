import { Button, Image, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../config/axios";
import { toast } from "react-toastify";
import styles from "./CartPage.module.scss";
import { clearAll } from "../../redux/features/cartSlice";

function CartPage() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const data = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (img) => {
        return <Image className={styles["cart-image"]} src={img} width="200px" height="200px"></Image>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
  ];
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const handleBuy = (record) => {
    axios.post('/api/orders', {
      detail: [
        {
          productId: record.id,
          quantity: record.quantity,
        },
      ],
    })
    .then(response => {
      console.log('Order submitted:', response.data);
    })
    .catch(error => {
      console.error('There was an error submitting the order!', error);
    });
  };
  return (
    <div className={styles["cart-page"]}>
      <Button
        className={`${styles["cart-button"]} ${styles["clear"]}`}
        onClick={() => dispatch(clearAll())}
      >
        Clear
      </Button>
      <Table
        className={styles["cart-table"]}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        rowKey="id"
      />
      <Button
        className={`${styles["cart-button"]} ${styles["buy"]}`}
        onClick={handleBuy}
      >
        Buy
      </Button>
    </div>
  );
}

export default CartPage;
