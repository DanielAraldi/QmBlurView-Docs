---
prev: false
next:
  text: 'Picasso'
  link: '/ja/quick-start/blur-transformation/picasso-integration.md'
---

# Glide

::: warning
`Transform` を使用する前に、Glide ライブラリを統合していることを確認してください。
```groovy :no-line-numbers
dependencies {
    // QmBlurView Transform 依存関係
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Glide 依存関係
    implementation 'com.github.bumptech.glide:glide:5.0.5'
}
```
:::

### クラスのインポート
```java :no-line-numbers
// Glide メインクラス
import com.bumptech.glide.Glide;

// QmBlurView ブラートランスフォーメーションクラス
import com.qmdeve.blurview.transform.glide.BlurTransformation;
```

### 使用例
```java :no-line-numbers
Glide.with(this)
    .load(R.drawable.image)
    .apply(new RequestOptions().transform(
           new CenterCrop(),

         /**
          * ブラートランスフォーメーションを使用
          * new BlurTransformation() // デフォルトのブラー半径 25f、角丸なし
          * new BlurTransformation(float blurRadius) // カスタムブラー半径、角丸なし
          * new BlurTransformation(float blurRadius, float roundedCorners) // カスタムブラー半径と角丸
          */
           new BlurTransformation(24f, 50)
       ))
    .into(imageView);
```

### コンストラクタ
| コンストラクタ                                 | 説明               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | デフォルトのブラー半径 25f、角丸なしでブラートランスフォーメーションを作成 |
| `BlurTransformation(float blurRadius)`  | カスタムブラー半径、角丸なしでブラートランスフォーメーションを作成 |
| `BlurTransformation(float blurRadius, float roundedCorners)` | カスタムブラー半径とカスタム角丸でブラートランスフォーメーションを作成 |