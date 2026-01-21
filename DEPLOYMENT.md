# 知啁 Reso 官网 - Vercel 部署指南

## 📦 部署准备

已完成：
- ✅ 网站文件已准备完毕
- ✅ Vercel 配置文件已创建
- ✅ 已优化缓存和安全头

## 🚀 部署步骤

### 方法一：网页拖拽部署（最简单，推荐）

1. **访问 Vercel**
   - 打开浏览器，访问：https://vercel.com

2. **注册/登录账号**
   - 点击右上角 "Sign Up" 或 "Login"
   - 推荐使用 GitHub、GitLab 或 Bitbucket 账号登录（最方便）
   - 也可以使用邮箱注册

3. **部署网站**
   - 登录后，点击 "Add New..." → "Project"
   - 选择 "Browse" 或直接拖拽整个项目文件夹：
     ```
     /Users/yangshan/Desktop/Reso/reso官网
     ```
   - 等待上传完成

4. **配置项目**
   - Project Name: 可以自定义，如 `reso-official`
   - Framework Preset: 选择 "Other"（因为是纯静态网站）
   - Root Directory: 保持默认 `./`
   - 点击 "Deploy" 开始部署

5. **等待部署完成**
   - 通常需要 30-60 秒
   - 部署成功后会显示庆祝动画 🎉
   - 会自动分配一个临时域名，如：`reso-official.vercel.app`

### 方法二：使用 Vercel CLI（适合开发者）

如果你熟悉命令行，也可以使用 CLI：

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 进入项目目录
cd "/Users/yangshan/Desktop/Reso/reso官网"

# 3. 登录 Vercel
vercel login

# 4. 部署
vercel

# 5. 生产环境部署
vercel --prod
```

## 🌐 绑定自定义域名

部署成功后，绑定你的域名：

### 在 Vercel 中添加域名

1. **进入项目设置**
   - 在 Vercel 控制台，点击你的项目
   - 点击顶部 "Settings" 标签
   - 在左侧菜单选择 "Domains"

2. **添加域名**
   - 在输入框中输入你的域名，例如：
     - `www.yourreso.com`（推荐同时添加）
     - `yourreso.com`
   - 点击 "Add"

3. **获取 DNS 配置信息**
   - Vercel 会显示需要配置的 DNS 记录
   - 通常是两种方式之一：

     **方式 A：CNAME 记录（推荐）**
     ```
     类型: CNAME
     主机记录: www
     记录值: cname.vercel-dns.com
     ```

     **方式 B：A 记录**
     ```
     类型: A
     主机记录: @
     记录值: 76.76.21.21
     ```

### 在域名服务商处配置 DNS

根据你的域名注册商（阿里云、腾讯云、GoDaddy 等）：

#### 阿里云示例

1. 登录阿里云控制台
2. 进入 "域名" → "解析设置"
3. 点击 "添加记录"
4. 填入 Vercel 提供的 DNS 信息：
   - 记录类型：CNAME 或 A
   - 主机记录：www 或 @
   - 记录值：Vercel 提供的值
   - TTL：默认即可
5. 点击 "确定"

#### 腾讯云示例

1. 登录腾讯云控制台
2. 进入 "云解析" → "解析列表"
3. 点击域名后的 "解析"
4. 点击 "添加记录"
5. 填入 Vercel 提供的 DNS 信息
6. 点击 "保存"

### 等待 DNS 生效

- DNS 解析通常需要 **5-30 分钟**生效
- 最长可能需要 24-48 小时（很少见）
- 可以使用 https://dnschecker.org 检查解析是否生效

### 验证域名

回到 Vercel：
- 在 Domains 页面，点击 "Refresh" 检查状态
- 看到绿色的勾号 ✅ 表示域名配置成功
- Vercel 会自动为你的域名配置 **免费的 SSL 证书（HTTPS）**

## 🎯 访问你的网站

域名绑定成功后，你可以通过以下地址访问：
- ✅ https://你的域名.com
- ✅ https://www.你的域名.com
- ✅ https://reso-official.vercel.app（Vercel 临时域名）

## 🔧 后续更新网站

当你需要更新网站内容时：

### 方法一：拖拽更新
1. 访问 Vercel 控制台
2. 进入项目
3. 点击 "Deployments" 标签
4. 拖拽新的文件夹上传
5. 自动触发新的部署

### 方法二：使用 Git（推荐）

如果你把项目放在 GitHub 上：
1. 在 Vercel 中连接 GitHub 仓库
2. 每次 push 代码到 GitHub
3. Vercel 会自动检测并部署

## 📊 性能优化建议

Vercel 已自动优化以下内容：
- ✅ 全球 CDN 加速
- ✅ 自动压缩（Gzip/Brotli）
- ✅ 图片优化
- ✅ SSL/HTTPS 证书
- ✅ HTTP/2 支持

## 🛡️ 安全特性

已配置的安全头：
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ 缓存控制

## 💡 常见问题

### Q: 部署后网站显示 404？
A: 检查 `index.html` 是否在根目录，不是在子目录中。

### Q: 图片不显示？
A: 检查图片路径是否正确，确保 `images/` 文件夹已上传。

### Q: 域名配置后还是无法访问？
A:
1. 检查 DNS 解析是否生效（使用 dnschecker.org）
2. 清除浏览器缓存
3. 等待 5-30 分钟

### Q: 如何查看访问统计？
A: Vercel 提供免费的 Analytics 功能，在项目设置中开启。

### Q: 免费版够用吗？
A: 对于个人官网完全够用！免费版限制：
- 带宽：100 GB/月
- 构建时间：100 小时/月
- 项目数量：无限制

## 📞 需要帮助？

- Vercel 文档：https://vercel.com/docs
- Vercel 社区：https://github.com/vercel/vercel/discussions

---

**部署完成后，记得测试：**
- ✅ 首页加载
- ✅ 导航链接
- ✅ 下载按钮
- ✅ 响应式布局（手机端）
- ✅ 图片显示

**© 2026 知啁 Reso. All rights reserved.**
