# 智游邕城 - 南宁旅游服务平台

一个基于 Vue 3 + Spring Boot 的南宁旅游服务 Web 应用，提供景点浏览、门票预订、订单管理等功能。

## 功能模块

- **景点浏览** - 查看南宁热门景点详情
- **门票预订** - 在线预订景区门票
- **订单管理** - 查看和管理预订订单
- **景点收藏** - 收藏感兴趣的景点
- **实时人流** - 查看景点客流情况
- **用户中心** - 个人信息管理

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Vue 3 + Vite + Pinia + Vue Router |
| 后端 | Spring Boot 3.2 + Lombok |
| 数据存储 | JSON 文件 |
| 部署 | Docker + Nginx |

## 快速开始

### 环境要求

- JDK 17+
- Node.js 18+
- Maven 3.6+
- Docker（可选）

### 本地开发

**启动后端：**

```bash
cd zhiyou-spring-boot
mvn spring-boot:run
```

后端服务运行在 http://localhost:8080

**启动前端：**

```bash
cd zhiyou-vue
npm install
npm run dev
```

前端服务运行在 http://localhost:5173

### Docker 部署

```bash
docker-compose up -d --build
```

- 前端：http://localhost:89
- 后端：http://localhost:8089

## 项目结构

```
wx-zhiyouyongcheng/
├── data/                    # JSON 数据文件
│   ├── spot.json            # 景点数据
│   ├── ticket.json          # 票务数据
│   ├── order.json           # 订单数据
│   ├── user.json            # 用户数据
│   ├── favorite.json        # 收藏数据
│   └── flow.json            # 人流数据
├── zhiyou-vue/              # 前端项目
│   └── src/
│       ├── api/             # API 接口
│       ├── views/           # 页面组件
│       ├── router/          # 路由配置
│       └── stores/          # 状态管理
├── zhiyou-spring-boot/      # 后端项目
│   └── src/main/java/com/zhiyou/
│       ├── controller/      # 控制器
│       ├── service/         # 业务逻辑
│       ├── model/           # 数据模型
│       └── repository/      # 数据访问
└── docker-compose.yml       # Docker 编排
```

## API 接口

| 模块 | 路径 | 说明 |
|------|------|------|
| 景点 | `/api/spot/list` | 景点列表 |
| 景点 | `/api/spot/{id}` | 景点详情 |
| 票务 | `/api/ticket/list` | 票务列表 |
| 订单 | `/api/order/list` | 订单列表 |
| 订单 | `/api/order/create` | 创建订单 |
| 用户 | `/api/user/login` | 用户登录 |
| 收藏 | `/api/favorite/list` | 收藏列表 |
| 人流 | `/api/flow/list` | 人流数据 |

## License

MIT
