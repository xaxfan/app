# 宸宸画画 App

给 3 岁儿子做的引导式涂鸦 PWA。选一个简笔画，分步展示参考线，跟着画，点 Next 进入下一步。

**在线地址**: https://xaxfan.github.io/app/

## 背景

- 起因：儿子喜欢画画但不会画，市面上的 app（如 Labu 涂鸦）要付费且不够灵活
- 用 Claude Code 从零搭建，纯前端 PWA，无依赖
- iPad 上添加到主屏幕即可全屏使用

## 技术架构

- **单页 PWA**：HTML + CSS + JS，无框架
- **Canvas 三层**：guide 层（参考线）、user 层（用户笔迹）、input 层（触控事件）
- **300×350 逻辑画布**，自适应屏幕缩放
- **Pointer Events** 支持触控 + Apple Pencil
- **Web Speech API** 完成时语音鼓励（"宸宸你真棒"、"宸宸你真是妈妈的乖宝宝"）

## 绘图数据 - 两种渲染模式

### 1. SVG 图片模式（`step.svg`）
每一步引用一个 SVG 文件，`guide.js` 用 `drawImage` 渲染。适合复杂图形。

使用此模式的类别：
- **动物**（13个）：十二生肖 + 猫
- **Labu 风格**（6个）：猫咪、小熊、小狗、兔兔、小羊、小猴
- **场景**（6个）：房子、树、花、草、太阳、云
- **数字**（10个）：0-9，单步完成

### 2. 坐标路径模式（`step.paths`）
每一步包含 path/line/circle/ellipse 等坐标数据，`guide.js` 用 Canvas API 绘制。适合笔画清晰的文字类内容。

使用此模式的类别：
- **形状**（7个）：正方形、三角形、圆形等
- **字母**（26个）：A-Z，多步笔顺引导
- **声母**（23个）：b-w，多步笔顺引导
- **韵母**（14个）：a-eng，多步笔顺引导

## 关键文件

```
index.html          — 主页面（选择 + 画画，单页）
js/
├── drawings.js     — 所有绘图数据（含分类），运行时使用
├── guide.js        — 参考线渲染、缩略图绘制、SVG 预加载
├── canvas.js       — 画布逻辑（触控事件、绘制、撤销）
├── pinyin_initials.json  — 声母源数据（维护用）
├── pinyin_finals.json    — 韵母源数据（维护用）
├── letters.json    — 字母源数据（维护用）
└── labu_animals.json     — Labu 动物源数据（维护用）
svg/                — SVG 图片文件（按 drawing id 分目录）
css/style.css       — 样式
```

## drawings.js 数据结构

```js
const CATEGORIES = [
  {
    id: "animals",
    name: "动物",
    emoji: "🐾",
    drawings: [
      {
        id: "rat",
        name: "小老鼠",
        emoji: "🐭",
        steps: [
          { label: "头", svg: "svg/rat/step1_头.svg" },  // SVG图片模式
          // 或
          { label: "横", paths: [{type:"line", x1:0, y1:0, x2:100, y2:0}] }  // 坐标模式
        ]
      }
    ]
  }
];
```

## guide.js 核心逻辑

- `drawGuide(ctx, step, ...)`: 检查 `step.svg` → 有则 drawImage，无则 drawStepPaths
- `drawThumbnail(ctx, drawing, size)`: 拼音/字母/数字用字体文字渲染缩略图（更清晰）；其他用 SVG 图片或坐标路径
- `svgImageCache`: SVG 图片缓存，`preloadDrawingSVGs(drawing)` 预加载
- `drawStepPaths(ctx, step)`: 支持 path/line/circle/ellipse/rect/arc/polygon 类型

## 设计决策记录

1. **Labu 风格最好看** → 动物/场景/数字都转成 SVG 图片文件
2. **字母和拼音用坐标路径** → 因为缩略图显示文字就很好看，进去画时坐标路径足够清晰
3. **形状保持坐标路径** → 几何图形用坐标精确
4. **数字不分步** → 一步完成，对 3 岁小孩更友好
5. **字母/拼音分步** → 教笔顺，每个字母拆成笔画
6. **缩略图渲染策略** → pinyin/letter/digit 直接用 `fillText` 渲染大字，比缩小的路径清晰得多
7. **拼音带勾的字母**（g/j/q/t/l）→ 勾要画得足够大，小尺寸下也能看出来
8. **声母 r** → 竖线要明显高出弯头（y=90 开始，弯头 y=135）

## 待优化方向

- 动物图形可以进一步优化造型（目前是从坐标转的 SVG，不如 Labu 手绘好看）
- 可以增加更多 Labu 风格的动物
- 背景音乐（已有基础设施，可以加更多曲子）
- 更多场景类图形
- 完成动画可以更丰富

## 部署

推送到 main 分支即自动部署到 GitHub Pages：
```bash
git push origin main
```

iPad 使用：Safari 打开链接 → 分享 → 添加到主屏幕
