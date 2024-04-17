import Redis from 'ioredis'

const redis = new Redis()

const initialData = {
    '1702459181837':
        '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
    '1702459182837':
        '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
    '1702459188837':
        '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}
// 获取所有笔记
export async function getAllNotes() {
    const data = await redis.hgetall("notes")
    if(Object.keys(data).length === 0) {
        redis.hset("note", initialData)
    }
    return await redis.hgetall("notes")
}
// 添加笔记
export async function addNote(data) {
    // 使用时间戳作为key值
    const uuid = Date.now().toString()
    redis.hset("notes", [uuid], data)
    return uuid
}
// 获取笔记
export async function getNote(uuid) {
    const data = redis.hget("notes", uuid)
    return JSON.parse(data)
}
// 更新笔记
export async function updateNote(uuid, data) {
    return redis.hset("notes", [uuid], data)
}
// 删除笔记
export async function delNote(uuid) {
    return redis.hdel("notes", uuid)
}

export default redis
