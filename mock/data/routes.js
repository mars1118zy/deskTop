 /**
     * @id {string} -- 路由编号
     * @parentId {string} -- 父级路由编号
     * @orderNum {Int} -- 记录序号
     * @menuType {string} -- 菜单项类型  “M”标识Menu，“C”标识Child,"B"标识Button
     * @isShow {Int} -- 是否显示
     * @path {string} -- 调用接口
     * @title {string} -- 菜单外显名称
     * @icon {string} -- 使用图标
     * @menuDesc {string} -- 描述说明Description 
     * @createdAt {date} -- 创建时间
     * @updateAt {date} -- 修改时间
     * @authority {string} -- 检测规则
     **/

export const RoutesList = [
    {
        "id": "001",
        "parentId": "1",
        "orderNum": 98,
        "menuType": "M",
        "isShow": 1,
        "path": "home",
        "title": "会员中心",
        "icon": "el-icon-user-solid",
        "menuDesc": null,
        "createdAt": "9/11/2024 14:24:11",
        "updatedAt": "14/11/2024 22:43:31",
        "authority": null,
        "state": false,
        "record_state": 0
    },
    {
        "id": "001-1",
        "parentId": "001",
        "orderNum": 1,
        "menuType": "C",
        "isShow": 1,
        "path": "home/Index",
        "title": "会员信息",
        "icon": "el-icon-user-solid",
        "menuDesc": null,
        "createdAt": "9/11/2024 14:09:36",
        "updatedAt": "18/11/2024 09:10:40",
        "authority": null,
        "state": false,
        "record_state": 0
    },
    {
        "id": "001-1-1",
        "parentId": "001-1",
        "orderNum": null,
        "menuType": "B",
        "isShow": 1,
        "path": "",  // post&patch /api/private/users/upload
        "title": "上传头像",
        "icon": "svg-icon-circle",
        "menuDesc": null,
        "createdAt": "9/11/2024 18:56:33",
        "updatedAt": "12/11/2024 16:02:44",
        "authority": "upload",
        "state": false,
        "record_state": 0
    },
    {
        "id": "001-1-2",
        "parentId": "001-1",
        "orderNum": null,
        "menuType": "B",
        "isShow": 1,
        "path": "",  // post&patch /api/private/users/code
        "title": "发送邮件",
        "icon": "svg-icon-circle",
        "menuDesc": null,
        "createdAt": "30/10/2024 19:01:10",
        "updatedAt": "30/10/2024 19:01:10",
        "authority": "code",
        "state": false,
        "record_state": 0
    },
    {
        "id": "001-1-3",
        "parentId": "001-1",
        "orderNum": null,
        "menuType": "B",
        "isShow": 1,
        "path": "", // post&patch /api/private/users/email
        "title": "修改邮箱",
        "icon": "svg-icon-circle",
        "menuDesc": null,
        "createdAt": "30/4/2023 20:00:00",
        "updatedAt": "30/4/2023 20:00:00",
        "authority": "email",
        "state": false,
        "record_state": 0
    },
    {
        "id": "001-1-4",
        "parentId": "001-1",
        "orderNum": null,
        "menuType": "B",
        "isShow": 1,
        "path": "", // POST&Patch /api/private/users/phone
        "title": "修改电话",
        "icon": "svg-icon-circle",
        "menuDesc": null,
        "createdAt": "3/5/2023 14:10:34",
        "updatedAt": "3/5/2023 14:10:34",
        "authority": "phone",
        "state": false,
        "record_state": 0
    },
    {
        "id": "002",
        "parentId": "1",
        "orderNum": 99,
        "menuType": "M",
        "isShow": 1,
        "path": "/system",
        "title": "内容管理",
        "icon": "el-icon-coordinate",
        "menuDesc": null,
        "createdAt": "26/4/2022 14:15:37",
        "updatedAt": "14/4/2024 22:43:09",
        "authority": "",
        "state": false,
        "record_state": 0
    },
    {
        "id": "002-1",
        "parentId": "002",
        "orderNum": 1,
        "menuType": "C",
        "isShow": 1,
        "path": "/system/notice",
        "title": "信息发布",
        "icon": "svg-icon-horn",
        "menuDesc": null,
        "createdAt": "23/9/2023 00:20:39",
        "updatedAt": "23/9/2023 00:20:39",
        "authority": null,
        "state": false,
        "record_state": 0
    },
    {
        "id": "002-1-1",
        "parentId": "002-1",
        "orderNum": 1,
        "menuType": "B",
        "isShow": 1,
        "path": "", // POST /api/private/notice/list
        "title": "查询",
        "icon": "svg-icon-circle",
        "menuDesc": null,
        "createdAt": "2/5/2024 23:12:10",
        "updatedAt": "23/9/2024 00:29:51",
        "authority": "query",
        "state": false,
        "record_state": 0
    },
    {
        "id": "002-1-2",
        "parentId": "002-1",
        "orderNum": 1,
        "menuType": "B",
        "isShow": 1,
        "path": "", // POST /api/private/notice/create
        "title": "添加",
        "icon": "svg-icon-circle",
        "menuDesc": null,
        "createdAt": "2/5/2024 23:14:18",
        "updatedAt": "23/9/2024 00:29:56",
        "authority": "add",
        "state": false,
        "record_state": 0
    },
    {
        "id": "002-1-3",
        "parentId": "002-1",
        "orderNum": 1,
        "menuType": "B",
        "isShow": 1,
        "path": "", // POST /api/private/notice/delete
        "title": "删除",
        "icon": "svg-icon-circle",
        "menuDesc": null,
        "createdAt": "2/6/2024 23:14:42",
        "updatedAt": "23/7/2024 00:30:01",
        "authority": "delete",
        "state": false,
        "record_state": 0
    },
    {
        "id": "002-1-4",
        "parentId": "002-1",
        "orderNum": 1,
        "menuType": "B",
        "isShow": 1,
        "path": "", // POST /api/private/notice/update
        "title": "修改",
        "icon": "svg-icon-circle",
        "menuDesc": null,
        "createdAt": "2/6/2024 23:15:04",
        "updatedAt": "23/7/2024 00:30:05",
        "authority": "update",
        "state": false,
        "record_state": 0
    }
]