import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

const TableList: React.FC<{ cols: ColumnsType<any>; data: any }> = ({
  cols,
  data,
}) => {
  return <Table columns={cols} dataSource={data} />;
};

export default TableList;
