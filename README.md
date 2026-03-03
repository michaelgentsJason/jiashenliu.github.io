# 学术个人主页模板（GitHub Pages）

这是一个可直接部署到 `GitHub Pages` 的静态学术主页模板，使用纯 `HTML + CSS + JS` 实现，默认包含以下栏目：

- 关于
- 论文 / Publications
- 成果展示 / Research
- 招生信息
- 获奖
- 教学
- 学术服务

## 1. 文件结构

```text
academicpages/
├─ assets/
│  ├─ avatar.jpg
│  ├─ CV_Jiashen.pdf
│  └─ profile-placeholder.svg
├─ index.html
├─ styles.css
├─ script.js
├─ .nojekyll
└─ README.md
```

## 2. 本地预览

在项目根目录运行以下任一命令：

```bash
# 方式 A：Python
python -m http.server 8000

# 方式 B：Node（已安装 npx 时）
npx serve .
```

然后在浏览器访问：

- `http://localhost:8000`（方式 A）
- `http://localhost:3000` 或终端提示地址（方式 B）

## 3. 修改你的个人信息

重点修改这些位置：

- `index.html`
  - 姓名、单位、职位、简介、联系方式
  - 研究方向标签
  - 论文列表
  - 招生信息、获奖、教学、学术服务
- `assets/avatar.jpg`
  - 替换为你的真实头像
- `assets/CV_Jiashen.pdf`
  - 替换为最新 CV，并保持文件名一致（或同步修改 `index.html` 中链接）

## 4. 部署到 GitHub Pages（`yourname.github.io`）

> 假设你的 GitHub 用户名是 `yourname`。

1. 在 GitHub 新建仓库：`yourname.github.io`（必须同名）
2. 在本地项目目录执行：

```bash
git init
git add .
git commit -m "Initial academic homepage"
git branch -M main
git remote add origin https://github.com/yourname/yourname.github.io.git
git push -u origin main
```

3. 打开仓库网页：
   - `Settings` -> `Pages`
   - `Build and deployment` 选择 `Deploy from a branch`
   - Branch 选择 `main` 和 `/ (root)`，保存

4. 等待 1-3 分钟后访问：
   - `https://yourname.github.io`

## 5. 后续更新

每次修改后执行：

```bash
git add .
git commit -m "Update homepage content"
git push
```

GitHub Pages 会自动重新部署。
