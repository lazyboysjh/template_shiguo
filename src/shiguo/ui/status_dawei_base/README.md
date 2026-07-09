# 大魏芳华状态栏参考副本

说明：
- 本目录是从 `E:\create\大魏芳华\code\tavern_helper_fanghua\src\dawei\ui\status` 复制来的本地参考副本。
- 复制时间：`2026-07-08`
- 目的：作为《十国千娇》状态栏改版基底，避免直接改动《大魏芳华》工程。
- 约束：后续所有试改、裁剪、字段适配都只在《十国千娇》侧进行。

核心文件：
- `index.html`：自包含主入口，含大量内联结构和样式。
- `dwf-mvu.js`：主渲染逻辑，读取 `stat_data.*` 并渲染各 tab。
- `dwf-mvu.css`：状态栏样式。
- `dwf-stat-schema.js`：状态栏使用的 MVU Schema 桥接。
- `preview.html`：状态栏预览页。
- `dwf-task-state.mjs`：机宜/任务状态相关辅助逻辑。
- `vendor/`：本地依赖副本。

建议迁移顺序：
1. 先读 `dwf-stat-schema.js`，确认它吃的变量结构。
2. 再看 `dwf-mvu.js` 里各面板实际依赖的字段。
3. 最后决定《十国千娇》是做完整移植，还是只保留部分 tab。
