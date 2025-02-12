
const { RoutesList } = require('./routes')

/**
     * @id {string} -- 角色编号
     * @role_name {string} -- 角色
     * @role_Desc {string} -- 角色信息描述
     * @createdAt {date} -- 创建时间
     * @menus {object} -- 角色对应菜单项目
     **/
export const RolesList = [
    {
        "id": "2024103100000001",
        "role_name": "SVIP",
        "role_desc":"超级VIP会员",
        "state": false,
        "createdAt":"2024-11-01T07:04:36.000Z",
        "menus": RoutesList
    }, {
        "id": "2034103100000001",
        "role_name": "一般用户",
        "role_desc":"普通用户",
        "state": false,
        "createdAt":"2024-11-02T07:00:36.000Z",
        "updatedAt": "2024-11-06T07:04:36.000Z",
        "menus": RoutesList
    },
    {
        "id": "test-test",
        "role_name": "VIP2",
        "state": true,
        "createdAt":"2024-11-02T07:00:36.000Z",
        "role_desc":"",
        "updatedAt": "2024-01-03T07:04:36.000Z",
        "menus": RoutesList.filter(i=>i.lever!==3),
    }
]