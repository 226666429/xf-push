# 测试模式

开启后，服务器启动时自动测试所有推送功能，快速排查配置问题。

## 开启方式

```lua
TestMode = {
    Enable = true,       -- 改成 true 开启
    IntervalMs = 2000,  -- 每项测试间隔（毫秒）
}
```

## 自动测试项

1. 基础推送（NapCat）
2. KOOK 渠道
3. Discord 渠道
4. 心跳健康检查
5. 定时任务推送
6. 消息聚合
7. 玩家进出（有玩家在线时自动等待进出事件）

## TX Admin 测试

TX Admin 相关功能需在 TX 面板手动触发测试：
- 封禁玩家（playerBanned）
- 踢出玩家（playerKicked）
- 添加/移除白名单（whitelistPlayer）
- 触发重启倒计时（scheduledRestart）
- 服务器关机（serverShuttingDown）
- 跳过重启（scheduledRestartSkipped）
- 撤销封禁/警告（actionRevoked）
- 发布公告（announcement）

## 手动指令

| 指令 | 说明 |
|------|------|
| `/xfpush-test` | 手动触发一次基础推送测试 |
| `/xfpush-status` | 查看插件当前状态 |

## 注意

测试完成后记得把 `TestMode.Enable` 改回 `false`，避免每次重启都自动测试。
