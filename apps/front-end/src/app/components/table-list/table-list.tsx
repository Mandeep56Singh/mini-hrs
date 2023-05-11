import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import './table-list.css';

const TableList: React.FC<{ cols: ColumnsType<any>; data: any;}> = ({
  cols,
  data
}) => {
  return(
  <div className='table-list'>
       <Table 
       columns={cols} 
       dataSource={data}
       />
  </div>
  )
};

export default TableList;
