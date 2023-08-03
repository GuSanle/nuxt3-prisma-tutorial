# 用户模块
## 代码结构
1. composables： 1获取用户信息 2添加用户 3修改用户信息 4删除用户
2. store的部分： 1 登录用户的信息  2 修改用户信息  
3. pages部分 ：用户列表页mount时，刷新
4. service部分：1获取用户信息 2添加用户 3修改用户信息 4删除用户 5 用户列表 6 查询 
5. schema ： 定义数据库
6. 缓存：用户登录后，如果关闭页面再打开，有session不会重新登录，但是用户信息要重新取，但是打开的可能是其他页面，所以需要在页面中判断是否登录，如果登录，再去取用户信息。或者用中间件实现。比较麻烦。所以直接在store中定义一个持久化的用户信息的全局状态。
   1. 缓存时间：无限期
   2. 登录时获取用户信息并缓存 
   3. 登录时重置用户缓存（用户信息不会串起来），退出时重置缓存，用户更新信息时更新缓存。（防止用户session过期，而用户缓存不过期）
7. 有store时调用顺序：composables -> store -> server -> service 
   无store时调用顺序：composables -> server -> service

# 认证模块
前台认证：
1. 使用session认证。前端界面，使用useAuth()根据status这个接口判断是否登录，如果没有登录，跳转到登录界面。 
后端接口
1. 内部接口（server/routes下），使用session认证。使用server middleware对来源进行判断后，进行认证。
2. 外部接口，使用jwt认证。 

# 登录模块

# 接口模块

# 类型校验
前台：ui的form组件自带
后台：prisma的预组装类型校验，保证到数据库的数据类型正确，
Prisma-client-extensions用来对prisma的类型进行扩展，比如对于email的类型校验，需要使用（比如email。数据库保存string，但是实际上还需要做语义化模式验证）https://github.com/prisma/prisma-client-extensions
也可以使用joi等第三方类库
或者简单点：提前做一些正则判断等。
