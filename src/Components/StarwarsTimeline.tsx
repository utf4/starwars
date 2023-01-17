import React from 'react';
import { Card, Timeline, Empty} from 'antd'
import {Movie, TimelineProps} from '../Utils/types';
import {TimelineSkelton} from '../Utils/Skeltons';

const StarwarsTimeline: React.FC<TimelineProps> = ({movies, loading}) => {

    return (
        <>
            <Card bordered={false} style={{ width: '100%' }}>
                <br/>
                {loading ? <TimelineSkelton/> :
                    movies.length > 0 ?
                <Timeline mode="left">
                    {movies.map((m: Movie, i) =>
                        <Timeline.Item
                            key={i}
                            label={new Date(m.releaseDate).toDateString()}
                        >
                            {m.title}
                        </Timeline.Item>
                    )}
                </Timeline>
                :
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            </Card>
        </>
    )
}

export default StarwarsTimeline;
