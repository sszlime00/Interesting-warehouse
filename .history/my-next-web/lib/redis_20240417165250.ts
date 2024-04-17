import Redis from 'ioredis'

const redis = new Redis

const initialData = {
    "20230630": '{"title": "universery", "content": "this day, we decide to start", ,"updateTime":"2023-12-13T09:19:48.837Z","updateTime":"2023-12-13T09:19:48.837Z"}',
    "20240606": '{"title": "room", "content": "this day, we start move place"}'
}

export const getAllNotes = async() => {

}
export async function addNote(data) {
    
} 