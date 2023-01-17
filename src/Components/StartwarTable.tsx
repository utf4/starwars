import React from 'react';
import { Table } from 'antd'
import { TableSkeleton } from '../Utils/Skeltons';
import { TableProps } from '../Utils/types';

const StarwarsTable: React.FC<TableProps> = ({movies, columns, loading}) => {
    return (
        <>
            {loading ? <TableSkeleton/> :
            <Table dataSource={movies || []} columns={columns} />}
        </>
    )
}

export default StarwarsTable;
