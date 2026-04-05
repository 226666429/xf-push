# 基础配置

## 完整配置项

```lua
Config = {
    --=============================================
    -- 基础配置
    --=============================================
    EnableLogging = true,   -- 是否输出控制台日志
    LogLevel = "info",      -- 日志级别：debug / info / warn / error

    --=============================================
    -- 渠道配置
    --=============================================
    Channels = {
        napcat = {
            Enable = true,
            APIURL = "http://你的NapCat地址:端口",
            SecretKey = "你的密钥",
            DefaultGroupId = "你的QQ群号",
            RetryCount = 3,       -- 重试次数
            RetryDelayMs = 1000,  -- 重试间隔（毫秒）
            TimeoutMs = 10000,    -- 超时时间（毫秒）
        },
        kook = {
            Enable = false,
            APIURL = "https://www.kookapp.cn/api/v3",
            Token = "你的KOOK Bot Token",
            DefaultChannelId = "你的KOOK频道ID",
            RetryCount = 3,
            RetryDelayMs = 1000,
            TimeoutMs = 10000,
        },
        discord = {
            Enable = false,
            WebhookURL = "你的Discord Webhook URL",
            RetryCount = 3,
            RetryDelayMs = 1000,
            TimeoutMs = 10000,
        },
    },

    --=============================================
    -- 限流保护
    --=============================================
    RateLimit = {
        Enable = true,
        MaxRequests = 10,    -- 时间窗口内最大请求数
        WindowMs = 60000,    -- 时间窗口（毫秒）
    },

    --=============================================
    -- 玩家进出通知
    --=============================================
    PlayerNotify = {
        Enable = true,
        Channel = "napcat",   -- 推送渠道：napcat / kook / discord
        Events = {
            playerJoined = true,   -- 玩家进入
            playerLeft = false,    -- 玩家离开
        },
        Templates = {
            playerJoined = "🟢 {player} 进入了服务器\n📊 在线：{online}/{max} | 时间：{time}",
            playerLeft = "🔴 {player} 离开了服务器\n📊 在线：{online}/{max} | 时间：{time}",
        },
    },

    --=============================================
    -- 消息聚合
    --=============================================
    Batching = {
        Enable = true,
        MaxMessages = 10,           -- 积压达到这个数量立即发送
        FlushIntervalMs = 600000,   -- 等待多久后发送（毫秒），默认10分钟
        MaxBatchSize = 50,          -- 单次聚合最大条数
    },
}
```

---

## 配置方案参考

| 方案 | 配置 | 适合场景 |
|------|------|---------|
| **A（推荐）** | 进推+聚合同开，离开不推 | 大多数服，兼顾体验和防刷屏 |
| **B** | 进和出都推+聚合 | 想完整掌握进出动态 |
| **C** | 进和出都推，不聚合 | 人数少的测试服，实时通知 |
| **D** | 仅进推，不聚合 | 需要实时掌握入服动态 |
