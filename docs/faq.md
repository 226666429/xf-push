# 常见问题

## 基础问题

### Q：NapCat 没反应？
检查以下几项：
1. `APIURL` 是否能访问（浏览器打开试试）
2. `SecretKey` 是否填写正确
3. `DefaultGroupId` 是否填写正确
4. NapCat 是否正常运行

### Q：怎么知道插件加载成功了？
服务器启动时控制台会输出 xf-push 启动横幅，QQ 群也会收到启动通知。

### Q：插件占用服务器资源吗？
几乎不占用。插件只在事件触发时执行推送，大部分时间处于等待状态。

---

## 配置问题

### Q：消息不聚合？
确认以下配置：
- `Batching.Enable = true`
- `PlayerNotify.Events` 开启了对应事件

### Q：想推送到多个群怎么办？
使用专业版 xf-pushplus，支持多 QQ 群同时推送。

### Q：KOOK 和 Discord 怎么配置？
KOOK 需要填写 Bot Token 和频道 ID。
Discord 只需要填 Webhook URL，在频道设置 → 整合 → Webhook 里创建。

---

## 技术问题

### Q：服务器重启后推送通知没收到？
检查服务器重启时 NapCat 是否也重启了，确认 NapCat 服务正常运行。

### Q：定时公告没发出来？
1. 确认 `ScheduledPush.Enable = true`
2. 确认对应 `Job.Enabled = true`
3. 检查 Cron 表达式是否正确

### Q：限流了怎么办？
`RateLimit` 配置项可以调整 `MaxRequests` 和 `WindowMs`。

---

## 版本信息

- 当前版本：xf-push v1.0.16
- 专业版：xf-pushplus v2.0.0
- 插件作者：君临 | QQ：226666429
