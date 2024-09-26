import React from 'react'
import { Table } from 'antd';

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
  
const Enquiries = () => {
  return (
    <div>
        <h3 className="mb-4 title">Recent Complains</h3>
        <div>
            <Table 
                columns={columns} 
                dataSource={dataSource} 
            />
        </div>
      </div>
  )
}

export default Enquiries