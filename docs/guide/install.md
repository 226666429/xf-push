# 快速开始

FiveM 服务器事件驱动推送插件，5 分钟配置完成。

---

## 环境要求

- FiveM 服务器（Linux 或 Windows）
- NapCat（用于 QQ 推送）
- KOOK Bot Token（可选，用于 KOOK 推送）
- Discord Webhook URL（可选，用于 Discord 推送）

---

## 第一步：下载插件

下载 `xf-push` 文件夹，上传到 FiveM 服务器 `resources` 目录。

---

## 第二步：修改配置

编辑 `resources/xf-push/config.lua`，填入你的渠道信息：

```lua
Channels = {
    napcat = {
        Enable = true,
        APIURL = "http://你的NapCat地址:端口",
        SecretKey = "你的密钥",
        DefaultGroupId = "你的QQ群号",
    },
    kook = {
        Enable = false,
        Token = "你的KOOK Bot Token",
        DefaultChannelId = "你的KOOK频道ID",
    },
    discord = {
        Enable = false,
        WebhookURL = "你的Discord Webhook URL",
    },
}
```

---

## 第三步：启动插件

在 `server.cfg` 中添加：

```cfg
ensure xf-push
```

---

## 第四步：重启服务器

插件加载成功后，QQ 群会收到启动通知：

```
━━━━━━━━━━━━━━━━━━━━━━
🤖 xf-push 插件加载中...
━━━━━━━━━━━━━━━━━━━━━━
✅ 监听已加载
✅ 服务事件已加载
✅ 消息聚合模块已加载
✅ 渠道模块已就绪
━━━━━━━━━━━━━━━━━━━━━━
🎉 xf-push 插件启动成功！
📦 版本：v1.0.16
━━━━━━━━━━━━━━━━━━━━━━
```

---

## 常见问题

> Q：NapCat 没反应？
> A：检查 `APIURL` 是否能访问，`SecretKey` 和 `DefaultGroupId` 是否填写正确。

> Q：怎么知道插件加载成功了？
> A：服务器启动时控制台会输出 xf-push 启动横幅，QQ 群也会收到启动通知。
