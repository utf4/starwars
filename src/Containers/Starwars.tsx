import React, {useMemo, useState} from 'react';
import { Col, Row, Layout, Button, Tabs, TabsProps } from 'antd'
import { Content, Header } from 'antd/es/layout/layout';
import { useLazyQuery } from '@apollo/client';
import { GET_MOVIES } from '../gql-service';
import StarwarsTable from '../Components/StartwarTable';
import StarwarsTimeline from '../Components/StarwarsTimeline';
import {Character, Film, Planet} from '../__generated__/graphql';
import {Movie } from '../Utils/types';
import type { ColumnsType } from 'antd/es/table';

const mapResults = (result: Film, t: 'characters' | 'planets'): string => {
    if(result && result[t] && result[t].results){
        return result[t].results.map((p: Character | Planet) => p.name)
            .join(', ').slice(0, -2)
    }
    return ''
}

const columns: ColumnsType<Movie> = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Characters',
        dataIndex: 'characters',
        key: 'characters',
    },
    {
        title: 'Total Characters',
        dataIndex: 'charactersCount',
        key: 'charactersCount',
    },
    {
        title: 'Planets',
        dataIndex: 'planets',
        key: 'planets',
    },
    {
        title: 'Total Planets',
        dataIndex: 'planetsCount',
        key: 'planetsCount',
    },
];

const Starwars: React.FC = () => {
    const [ movies, setMovies ] = useState<Movie[]>([])
    const [ getMovies, {data, loading} ] = useLazyQuery<any, {data: Film[], loading: boolean}>(GET_MOVIES)

    useMemo(() => {
        if(data?.films?.results) {
            const list: Movie[] = data?.films?.results.map((r: Film) => {
                return {
                    title: r.title,
                    characters: mapResults(r, 'characters'),
                    charactersCount: r.characters.count,
                    planets: mapResults(r, 'planets'),
                    planetsCount: r.planets.count,
                    releaseDate: r.releaseDate,
                    key: r.id,
                }
            })
            setMovies(list)
        }
    }, [data])

    const tabItems: TabsProps['items'] = [
        {
            key: '1',
            label: 'Movies List',
            children: <StarwarsTable movies={movies} columns={columns} loading={loading}/>,
        },
        {
            key: '2',
            label: 'Movies Timeline',
            children: <StarwarsTimeline movies={movies} loading={loading}/>,
        },
    ];


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header>StarWars GraphQL</Header>
            <Content>
                <br/>
                <Row>
                    <Col span={12} offset={6} style={{alignContent: 'end'}}>
                        <Button type="primary" onClick={() => getMovies()}>Load Now</Button>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={12} offset={6}>
                        <Tabs defaultActiveKey="1" items={tabItems} />
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default Starwars;
