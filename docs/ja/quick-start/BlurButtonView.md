---
prev:
  text: 'BlurView の使用'
  link: '/ja/quick-start/BlurView.md'
next:
  text: 'ProgressiveBlurView の使用'
  link: '/ja/quick-start/ProgressiveBlurView.md'
---

# BlurButtonView

### XML レイアウトでの使用
```xml
<com.qmdeve.blurview.widget.BlurButtonView
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="ボタンテスト"
    app:buttonCornerRadius="12dp"
    app:buttonIconPadding="8dp"
    app:buttonIconSize="24dp"
    app:buttonTextBold="true"
    aap:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    android:icon="?android:attr/actionModeWebSearchDrawable"
    app:buttonIconTint="@color/black"/>
```

### API リファレンス
| メソッド | 説明 |
|------|---|
| `setText` | テキストを設定 |
| `setButtonCornerRadius`     | ボタンの角半径を設定 |
| `setTextSize`               | テキストサイズを設定 |
| `setTextColor`              | テキスト色を設定 |
| `setTextBold`               | テキストを太字に設定 |
| `setIcon` `setIconResource` | アイコンを設定 |
| `setIconSize`               | アイコンサイズを設定 |
| `setIconPadding`            | アイコンのパディングを設定 |
| `setIconTint`               | アイコンの色調を設定 |

### 属性説明

| 属性名  | 型 | 説明 |
|-------------------------------|------|-------------|
| `app:buttonCornerRadius`      | `dimension` | ボタンの角半径を設定 |
| `app:buttonIconPadding`       | `dimension` | アイコンのパディングを設定 |
| `app:buttonIconSize`          | `dimension` | アイコンサイズを設定 |
| `app:buttonTextBold`          | `boolean` | テキストを太字に設定 |
| `app:blurRadius`              | `dimension` | ブラー半径を設定 |
| `app:overlayColor`            | `color` | オーバーレイ色を設定 |
| `app:buttonIconTint`          | `color`| アイコンの色調を設定 |
| `android:icon`                | - | アイコンを設定 |
| `android:text`                | - | テキストを設定 |
| `android:textSize`            | - | テキストサイズを設定 |

---