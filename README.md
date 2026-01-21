# 知啁 Reso 官网

> 有些话，不需要答案，只需要被认真地听完

## 项目简介

这是知啁 Reso App 的官方网站，采用纯 HTML + CSS + JavaScript 开发，具有科技感十足的设计风格和完整的响应式布局。

## 项目结构

```
reso官网/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── script.js       # 交互脚本
├── images/             # 图片资源
│   ├── logo.jpg        # App Logo
│   └── page*.png       # 产品展示截图
└── README.md           # 项目说明
```

## 功能特点

### 设计特色
- 🎨 科技感深色主题设计
- 🌈 青绿色渐变主色调 (#20D2D9 / #2BBEB3)
- ✨ 平滑的动画和过渡效果
- 📱 完整的响应式布局（支持手机、平板、电脑）
- 🎭 玻璃态（Glassmorphism）效果

### 页面模块
1. **导航栏** - 固定顶部，滚动时背景变化
2. **Hero 区域** - 大标题展示，带动态背景网格
3. **应用介绍** - 详细的产品说明
4. **产品特色** - 6个核心功能卡片展示
5. **产品展示** - 7张精美的 App 截图展示
6. **下载区域** - iOS 和 Android 下载按钮
7. **联系我们** - 邮箱、地址、企微客服
8. **页脚** - 备案信息

### 交互功能
- ✅ 平滑滚动导航
- ✅ 移动端响应式菜单
- ✅ 返回顶部按钮
- ✅ 滚动触发元素动画
- ✅ 卡片悬停效果
- ✅ 图片懒加载优化
- ✅ 触摸设备优化

## 本地预览

### 方法 1：直接打开
双击 `index.html` 文件，即可在浏览器中预览。

### 方法 2：使用本地服务器（推荐）

**使用 Python（Python 3）：**
```bash
cd /Users/yangshan/Desktop/Reso/reso官网
python3 -m http.server 8000
```
然后在浏览器中打开：http://localhost:8000

**使用 Node.js（需要安装 http-server）：**
```bash
# 安装 http-server
npm install -g http-server

# 启动服务器
cd /Users/yangshan/Desktop/Reso/reso官网
http-server -p 8000
```
然后在浏览器中打开：http://localhost:8000

## 部署指南

### 部署到静态托管服务

#### 1. Vercel（推荐）
1. 访问 [vercel.com](https://vercel.com)
2. 注册/登录账号
3. 点击 "New Project"
4. 导入项目文件夹或 GitHub 仓库
5. 点击 "Deploy"
6. 完成！会自动生成一个 .vercel.app 域名

#### 2. Netlify
1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录账号
3. 拖拽项目文件夹到部署区域
4. 等待部署完成
5. 可以绑定自定义域名

#### 3. GitHub Pages
1. 在 GitHub 创建一个新仓库
2. 将项目文件推送到仓库
3. 进入仓库 Settings → Pages
4. 选择分支和目录
5. 保存，等待部署完成

#### 4. 云服务器（阿里云、腾讯云等）
1. 购买云服务器和域名
2. 配置 Nginx 或 Apache
3. 上传项目文件到 web 目录
4. 配置域名解析
5. 配置 SSL 证书（HTTPS）

### 域名配置
部署后，可以绑定自定义域名：
1. 在域名服务商处添加 DNS 解析记录
2. 在托管平台添加自定义域名
3. 配置 SSL 证书（大多数平台自动提供）

## 浏览器兼容性

- ✅ Chrome / Edge (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ iOS Safari (iOS 12+)
- ✅ Android Chrome (Android 5+)

## 性能优化

已实现的优化：
- 图片懒加载
- 滚动事件节流
- CSS 动画使用 GPU 加速
- 响应式图片加载
- 代码压缩优化

## 后续优化建议

### 图片优化
建议将图片转换为 WebP 格式以减小体积：
```bash
# 使用 cwebp 工具转换
cwebp -q 80 logo.jpg -o logo.webp
```

### 代码压缩
部署前可以压缩 CSS 和 JS 文件：
- 在线工具：https://cssminifier.com/、https://javascript-minifier.com/
- 命令行工具：使用 UglifyJS、Terser、cssnano 等

### SEO 优化
1. 添加 sitemap.xml
2. 添加 robots.txt
3. 优化 meta 标签
4. 添加结构化数据（JSON-LD）
5. 提交到搜索引擎

## 维护更新

### 更新内容
修改对应的 HTML 内容即可，主要位置：
- **App 介绍**：`index.html` 中的 `.about` 区域
- **产品特色**：`.features` 区域
- **联系方式**：`.contact` 区域
- **下载链接**：`.download` 区域的 href 属性

### 更新图片
替换 `images/` 文件夹中的对应图片即可，保持文件名一致。

### 更新样式
修改 `css/style.css` 文件中的：
- 颜色变量：`:root` 中的 CSS 变量
- 布局样式：对应区域的 CSS 类
- 响应式断点：`@media` 查询部分

## 技术支持

如有问题或建议，请联系：
- 邮箱：reso@tianjichat.com
- 企微客服：https://work.weixin.qq.com/kfid/kfce3e7cb58502861c0

## 备案信息

鲁ICP备2023047808号-3A

---

**© 2026 知啁 Reso. All rights reserved.**
