import type { ColumnsType } from 'antd/es/table';


export interface TimelineProps {
    movies: Movie[];
    loading: boolean
}

// Refers to movie list
// which is to be populated in table and timeline
export interface Movie {
    title: string
    characters: string
    charactersCount: number
    planets: string
    planetsCount: number
    releaseDate: string
    key?: string
}

export interface TableProps {
    movies: Movie[];
    columns: ColumnsType<Movie>;
    loading: boolean;
}
