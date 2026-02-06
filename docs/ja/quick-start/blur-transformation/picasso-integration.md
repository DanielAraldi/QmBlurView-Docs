---
prev:
  text: 'Glide'
  link: '/ja/quick-start/blur-transformation/glide-integration.md'
next: false
---

# Picasso

::: warning
`Transform` を使用する前に、Picasso ライブラリを統合していることを確認してください。
```groovy :no-line-numbers
dependencies {
    // QmBlurView Transform 依存関係
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Picasso 依存関係
    implementation 'com.squareup.picasso:picasso:2.8'
}
```
:::

### クラスのインポート
```java :no-line-numbers
// Picasso メインクラス
import com.squareup.picasso.Picasso;

// QmBlurView ブラートランスフォーメーションクラス
import com.qmdeve.blurview.transform.picasso.BlurTransformation;
```

### 使用例
```java :no-line-numbers
Picasso.get()
         .load(R.drawable.image)
         .fit()
         .centerCrop()
         .transform(

            /**
            * ブラートランスフォーメーションを使用
            * クラスのインポート: com.qmdeve.blurview.transform.picasso.BlurTransformation
            *
            * new BlurTransformation() // デフォルトのブラー半径 25f、角丸 0
            * new BlurTransformation(float blurRadius) // カスタムブラー半径、角丸なし
            * new BlurTransformation(float blurRadius, float roundedCorners) // カスタムブラー半径と角丸
            */
            new BlurTransformation(25f, 50)
         )
         .into(imageView);
```

### コンストラクタ
| コンストラクタ                                 | 説明               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | デフォルトのブラー半径 25f、角丸なしでブラートランスフォーメーションを作成 |
| `BlurTransformation(float blurRadius)`  | カスタムブラー半径、角丸なしでブラートランスフォーメーションを作成 |
| `BlurTransformation(float blurRadius, float roundedCorners)` | カスタムブラー半径とカスタム角丸でブラートランスフォーメーションを作成 |