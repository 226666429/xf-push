# TX Admin 事件

监听 TX Admin 后台操作，实时推送通知。

## 支持的事件

| 事件 | 说明 |
|------|------|
| `playerBanned` | 玩家被封禁 |
| `playerKicked` | 玩家被踢出 |
| `whitelistPlayer` | 白名单加入/移除 |
| `scheduledRestart` | 定时重启倒计时 |
| `serverShuttingDown` | 服务器关闭 |
| `scheduledRestartSkipped` | 跳过重启 |
| `announcement` | 全服公告 |
| `actionRevoked` | 撤销封禁/警告 |

## 配置项

```lua
TXAdmin = {
    Enable = true,
    Channel = "napcat",
    Events = {
        playerBanned = true,
        playerKicked = true,
        whitelistPlayer = true,
        scheduledRestart = true,
        serverShuttingDown = true,
        scheduledRestartSkipped = true,
        announcement = true,
        actionRevoked = true,
    },
}
```

## 模板变量

| 变量 | 说明 |
|------|------|
| `{player}` | 玩家名称 |
| `{reason}` | 操作原因 |
| `{admin}` | 操作者 |
| `{duration}` | 封禁时长 |
| `{seconds}` | 重启倒计时秒数 |
| `{actionType}` | 撤销操作类型 |
| `{revokedBy}` | 撤销者 |

## 注意

TX Admin 事件**不受消息聚合影响**，每次操作立即推送。
