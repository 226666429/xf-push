# 心跳健康检查

定时推送服务器存活状态，验证推送通道是否畅通。

## 配置项

```lua
HealthCheck = {
    Enable = true,
    IntervalMs = 300000,    -- 检查间隔（毫秒），默认5分钟
    Channel = "napcat",
    ServerName = "FiveM 服务器",
    Message = "💓 ━━━ 服务器心跳报告 ━━━\n" ..
              "━━━━━━━━━━━━━━━━━━━━━━\n" ..
              "🖥 服务器：{servername}\n" ..
              "📊 在线：{online}/{max} 人\n" ..
              "⏱ 运行时长：{uptime}\n" ..
              "🕐 检查时间：{date} {time}\n" ..
              "━━━━━━━━━━━━━━━━━━━━━━\n" ..
              "✅ 服务器运行正常",
}
```

## 模板变量

| 变量 | 说明 |
|------|------|
| `{servername}` | 服务器名称（按 ServerName 配置） |
| `{online}` | 当前在线人数 |
| `{max}` | 服务器最大人数 |
| `{uptime}` | 服务器运行时长 |
| `{date}` | 当前日期 |
| `{time}` | 当前时间 |
