import React from "react"
import { Column } from "@ant-design/plots"
import { Table } from 'antd';
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";

const columns = [
  {
    title: '$No',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const dataSource = Array.from({
  length: 46,
}).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const Dashboard = () => {
  const data = [
    { 
      type: "Jan",
      sales: 38,
    },
    { 
      type: "Feb",
      sales: 52,
    },
    { 
      type: "Mar",
      sales: 61,
    },
    { 
      type: "Apr",
      sales: 145,
    },
    { 
      type: "Mei",
      sales: 48,
    },
    { 
      type: "Jun",
      sales: 38,
    },
    { 
      type: "Jul",
      sales: 38,
    },
    { 
      type: "Aug",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      style: {
        color: "#ff3ddd",
        fill: "#ffd333",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Months",
      },
      sales: {
        alias: "Income",
      },
    },

  };

  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p> 
            <h5 className="mb-0 sub-title">Rp100.000</h5>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="">
              <GoArrowDownRight />  
              32%
            </h6>
            <p className="mb-0">Compared to April 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p> 
            <h5 className="mb-0 sub-title">Rp100.000</h5>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <GoArrowDownRight />  
              32%
            </h6>
            <p className="mb-0 desc">Compared to April 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p> 
            <h5 className="mb-0 sub-title">Rp100.000</h5>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <GoArrowUpRight />  
              32%
            </h6>
            <p className="mb-0 desc">Compared to April 2024</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
          <h3 className="mb-5 title">Income Statics</h3>
          <div>
            <Column {...config} />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-5 title">Recent Orders</h3>
          <div>
            <Table 
              columns={columns} 
              dataSource={dataSource} 
            />
          </div>
        </div>
    </div>
  )
}

export default Dashboard;