---
prev: ../getting-started
next: BlurButtonView.md
---

# BlurView

#### XMLレイアウトでの使用
```xml
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="20dp"
    app:overlayColor="#66FFFFFF" 
    app:cornerRadius="24dp"/>
```

#### コードでビューのプロパティを設定

```java
BlurView blurView = findViewById(R.id.blurView);
blurView.setBlurRadius(20f);
blurView.setOverlayColor(0x66FFFFFF);
blurView.setCornerRadius(20);
```

#### 属性説明

| 属性名         | 型 | デフォルト値 | 説明 |
|------------------------|------|--------|-------------|
| `app:blurRadius`       | `dimension` | `10` | ブラー半径 |
| `app:overlayColor`     | `color` | `#AAFFFFFF` | オーバーレイカラー |
| `app:cornerRadius`     | `dimension` | `0` | ビューの角半径 |
| `app:setDownsampleFactor` | `float` | `0` | ダウンサンプル係数、値が高いほどパフォーマンスが良いがブラー効果が悪くなる |

### API リファレンス
| メソッド名               | 説明       |
|--------------------------|------------------|
| `setBlurRadius(float)`    | ブラー半径を設定   |
| `setOverlayColor(int)`    | オーバーレイカラーを設定 |
| `setCornerRadius(float)`  | 角半径を設定 |
| `setDownsampleFactor(float)` | ダウンサンプル係数を設定 |