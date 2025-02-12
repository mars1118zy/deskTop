
const { RolesList } = require('./role')

export const UserList = [
    {
        "id": "1",
        "nickName": "Maggie&JackJack",
        "userAccount": "20350101",
        "user_desc":"SVIP",
        "avatar": "",
        "introduction": "我就是我，不一样的烟火~",
        "createdAt": 1540533196000,
        "roleId": "2024103100000001",
        "role_name": RolesList.filter(i => i.id === '2024103100000001')[0].role_name,
        "state": true,
        "password": "123456",
        "email": "mars_1118zy@163.com",
        "phone": "15000056201",
        "loginAt": "2024-11-09T03:50:48.000Z",
    },
    {
        "id": "2",
        "nickName": "测试账户01",
        "user_desc":"一般用户",
        "avatar": "",
        "userAccount": "test",
        "introduction": "黑呵呵！！！测试",
        "createdAt": 1557042558000,
        "roleId": "2034103100000001",
        "role_name": RolesList.filter(i => i.id === '2034103100000001')[0].role_name,
        "state": true,
        "password": "123456",
        "email": "",
        "phone": "",
        "loginAt": "2024-11-09T03:50:48.000Z",
    }
]




