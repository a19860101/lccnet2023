## 快速鍵

| 名稱 | Windows快速鍵 | Mac快速鍵     |備註|
| -------- | -------- | -------- |---|
| 英文亂數假文    | lorem ,lorem+字數     | lorem ,lorem+字數     |
| 中文亂數假文    | ctlorem,ctlorem+字數 |  ctlorem,ctlorem+字數  | 需外掛|
| 換行           | Alt + Z | Opt + Z |
| 向下複製        | Alt + Shift + 下 | Opt + Shift + 下 |
| 向上複製        | Alt + Shift + 上 | Opt + Shift + 上 |
| 向下移動        | Alt + 下 | Opt + 下 |
| 向上移動        | Alt + 上 | Opt + 上 |
| 多重選取 | Ctrl + D | Cmd + D |
| 單行註解 | Ctrl + / | Cmd + / |  不可使用數字鍵上的/ |
| 多行註解 | Alt + Shift + A |   Opt + Shift + A
| 向右分割 | Ctrl + \ | Cmd + \ |
| 刪除列 | Ctrl + Shift + K | Cmd + Shift + K |
| 收合側邊欄 | Ctrl + B | Cmd + B |
| 開發者工具 | F12,Ctrl + Shift + I | Cmd + Opt + I |
| 格式化程式碼 | Alt + Shift + F | |
## 推薦網站

[Unsplash](https://unsplash.com/)

[Lorem Picsum](https://picsum.photos/)

[Coolors](https://coolors.co/)

## CSS
Cascading Style Sheet
串接樣式表
### 選取器 Selector
- 標籤tag
- 類別class（可重複使用）
- id（只可使用一次）
```css
/* 標籤 */
h1 {
    color:red;
}

/* 類別class */
.abc {
    color:blue;
}

/* id */
#xyz {
    color:greenyellow;
}

/* 群組選取器 */
h1,h2,h3 { }
/* h1、h2與h3同時影響 */

/* 後代選取器 */
.box h1 {}
/* .box內的h1受到影響 */

/* 虛擬類別 */
/* nth-of-type() */
li:nth-of-type(1){}
/* 同階層內的第一個li */
li:nth-of-type(odd){}
/* 同階層內的奇數li */
li:nth-of-type(even){}
/* 同階層內的偶數li */
```