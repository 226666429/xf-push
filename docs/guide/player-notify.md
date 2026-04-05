# 玩家进出通知

玩家进入或离开服务器时自动推送通知。

## 配置项

```lua
PlayerNotify = {
    Enable = true,
    Channel = "napcat",
    Events = {
        playerJoined = true,   -- 开启玩家进入通知
        playerLeft = false,   -- 关闭玩家离开通知
    },
    Templates = {
        playerJoined = "🟢 {player} 进入了服务器\n📊 在线：{online}/{max} | 时间：{time}",
        playerLeft = "🔴 {player} 离开了服务器\n📊 在线：{online}/{max} | 时间：{time}",
    },
}
```

## 模板变量

| 变量 | 说明 | 示例 |
|------|------|------|
| `{player}` | 玩家名称 | 张三 |
| `{online}` | 当前在线人数 | 12 |
| `{max}` | 服务器最大人数 | 64 |
| `{time}` | 当前时间 | 2026-04-05 20:00 |

## 消息聚合

玩家进出通知默认走消息聚合，短时间多条消息合并成一条推送，减少群内刷屏。

详见 [消息聚合](./batching)

## 效果示例

```
🟢 张三 进入了服务器
📊 在线：12/64 | 时间：20:00
```
