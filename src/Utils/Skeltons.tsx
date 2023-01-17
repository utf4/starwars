import React from 'react';
import {Col, Row, Skeleton} from 'antd';

export const TimelineSkelton: React.FC = () => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Skeleton.Input active size="small" style={{margin: '5px 0', height: '15px'}} block/>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={12}>
                    <Skeleton.Input active size="small" style={{margin: '5px 0', height: '15px'}} block/>
                    <Skeleton.Input active size="small" style={{margin: '5px 0', height: '15px'}} block/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Skeleton.Input active size="small" style={{margin: '5px 0', height: '15px'}} block/>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={12}>
                    <Skeleton.Input active size="small" style={{margin: '5px 0', height: '15px'}} block/>
                    <Skeleton.Input active size="small" style={{margin: '5px 0', height: '15px'}} block/>
                </Col>
            </Row>
        </>
    )
}

export const TableSkeleton: React.FC = () => {
    return <>
        <Skeleton.Input style={{margin: '5px 0'}} size="small" block/>
        <Skeleton.Input style={{margin: '5px 0'}} size="small" block/>
        <Skeleton.Input style={{margin: '5px 0'}} size="small" block/>
        <Skeleton.Input style={{margin: '5px 0'}} size="small" block/>
        <Skeleton.Input style={{margin: '5px 0'}} size="small" block/>
    </>
}

