# Kotob for nodejs
これはNodejsで動作する、Gemini APIを使用した翻訳クライアントです。
API KeyはGoogle Cloud Platformで取得できます。

## 対応環境
- Node.js v18以上
- npm v8以上
## インストール
```bash
npm install kotob
```
## 使い方
```javascript
const { Kotob } = require('kotob');
const kotob = new Kotob({
  apiKey: 'YOUR_API_KEY',
});

(async () => {
  const result = await kotob.translate('Hello, world!', 'en', 'ja');
  console.log(result); // こんにちは、世界！
})();
```
## API
### `translate(text: string, sourceLang: string, targetLang: string): Promise<string>`
テキストを翻訳します。
- `text`: 翻訳するテキスト
- `sourceLang`: 元の言語コード（例: 'en', 指定されなかった場合、自動で推測されます）
- `targetLang`: 翻訳先の言語コード（例: 'ja', 指定されなかった場合、自動で推測されます）

## ライセンス
MIT License