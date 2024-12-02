# datepicker

作者: Andy Lee

## 成果

- 切換不同月份，顯示該月日期
- 可點擊決定起始日期及結束日期
- 顯示每日的月份和日期

## 技術使用

- React.js 專用
- 使用 TypeScript
- styled-components 注入 CSS 樣式
- eslint, prettier, eslint 統一程式碼風格

## 專案架構

- src
  - components：
    - Calendar
      - ButtonBase：Button 基礎組件
      - CalendarHeader：Calendar Header組件
      - CalendarMonth：月份的 Calendar
      - CalendarTemplate：Calendar 模板，供未來擴充不同樣板使用
      - DayButton：天數使用的 Button 組件
  - constants
  - utils：日期處理
  - type：typescript型別

## Local 啟動方法

安裝

```bash
npm install
# or
yarn install
```

啟動服務

```bash
yarn start
# or
npm start
```
