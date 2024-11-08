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
  const handleBuy = async () => {
    try {
      const productBought = data.filter((product) => selectedRowKeys.includes(product.id));
      const detail = productBought.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
      }));
      const response = await api.post("order", { detail });
      dispatch(clearAll());
      console.log(response.data);
      window.open(response.data);
    } catch (err) {
      toast.error("Purchase failed");
    }
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
