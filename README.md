# Ethan Lee | Code Island Study Desk

这是 Ethan Lee 的 GitHub Pages 个人主页仓库。页面以 **Code Island** 为主题，把个人介绍、学习方向、项目工作台、Python 学习记录、算法训练、建模实践和 GitHub 展示整合成一个可在线访问的个人主页。

在线访问地址：

[https://lheng2386-png.github.io](https://lheng2386-png.github.io)

## 项目定位

页面主要用于展示当前学习状态、技术兴趣和阶段性项目方向，同时保留清晰的代码结构，方便后续继续维护和扩展。

主页风格采用像素游戏、漫画分镜和霓虹界面结合的视觉方向。内容上更偏向真实学习桌，而不是夸张的作品集模板：项目卡片会明确标注 building、draft、learning、online 等状态，用来展示正在积累和推进的内容。

## 页面内容

- **Hero / Code Island Log**：主页首屏，展示个人定位、学习关键词和 GitHub 入口。
- **About Me**：个人简介与学习态度说明。
- **Quest Log**：当前重点方向，包括算法、数学建模、可解释机器学习、SDN / P4、技术写作和小型 Demo。
- **Code Island Zone**：用漫画分镜形式表达 Read -> Code -> Save 的学习流程。
- **Python Lab**：说明 Python 在算法练习、数据分析、建模实验和项目开发中的用途。
- **Workbench**：项目工作台，展示算法笔记、建模工具箱、健康风险建模草稿、智能教室节能想法、SDN / P4 学习日志和本主页项目。
- **GitHub Shelf**：展示 GitHub 数据卡片、仓库方向和快速链接。
- **Current Tools**：当前使用和学习中的工具与能力方向。
- **Next Steps**：后续学习路线和阶段目标。
- **Contact**：公开联系入口与当前状态说明。

## 技术栈

- HTML5
- CSS3
- JavaScript
- GitHub Pages
- Google Fonts
- GitHub Readme Stats

页面为纯静态项目，不依赖构建工具。`index.html` 负责页面结构，`css/style.css` 负责视觉样式和响应式布局，`js/main.js` 负责打字动画、滚动显示和背景粒子效果。

## 文件结构

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## 本地预览

直接在浏览器中打开 `index.html` 即可预览页面。

如果希望用本地服务器预览，也可以在仓库根目录运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 当前状态

当前版本已经完成以下内容：

- 完整个人主页页面结构
- 响应式布局
- 像素游戏首屏场景
- 左右漫画分镜背景
- 项目工作台卡片
- Python 学习展示区
- GitHub 数据展示区
- 联系信息区域
- 打字动画和背景粒子效果

## 后续维护计划

- 将 Workbench 中的项目卡片逐步替换为真实仓库链接。
- 持续补充算法笔记、建模项目和 SDN / P4 学习记录。
- 优化移动端细节和加载性能。
- 根据实际项目进度更新页面文案，保持主页内容和个人学习状态一致。

## 仓库说明

本仓库是个人主页的源代码仓库，部署目标为 GitHub Pages。主页内容会随着学习记录和项目积累继续更新。
