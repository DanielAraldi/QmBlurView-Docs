---
prev:
  text: 'ProgressiveBlurView の使用'
  link: '/ja/quick-start/ProgressiveBlurView.md'
next:
  text: 'BlurSwitchButtonView の使用'
  link: '/ja/quick-start/BlurSwitchButtonView.md'
---

# BlurTitlebarView

### XML レイアウトでの使用
```xml
<com.qmdeve.blurview.widget.BlurTitlebarView
    android:id="@+id/titlebar"
    android:layout_width="match_parent"
    android:layout_height="?android:attr/actionBarSize"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:titleText="タイトルバー"
    app:titleTextColor="@color/black"
    app:titleTextSize="18sp"
    app:titleTextBold="true"
    app:leftIcon="?android:attr/homeAsUpIndicator"
    app:rightIcon="?android:attr/actionModeWebSearchDrawable"/>
```

### API リファレンス
| メソッド | 説明 |
|------|---|
| `setTitle` | タイトルを設定 |
| `setTitleColor` | タイトルの色を設定 |
| `setTitleSize` | タイトルのサイズを設定 |
| `setTitleBold` | タイトルを太字に設定 |
| `setLeftIcon` `setRightIcon` | アイコンを設定 |
| `setLeftIconClickListener` `setRightIconClickListener` | アイコンのクリックリスナーを設定 |

### 属性説明

| 属性名  | 型 | 説明 |
|-------------------------------|------|-------------|
| `app:titleText`              | `string` | タイトルテキストを設定 |
| `app:titleTextColor`         | `color` | タイトルの色を設定 |
| `app:titleTextSize`          | `dimension` | タイトルのサイズを設定 |
| `app:titleTextBold`          | `boolean` | タイトルを太字に設定 |
| `app:leftIcon` `app:rightIcon` | `reference` | アイコンを設定 |
| `app:blurRadius`              | `dimension` | ブラー半径を設定 |
| `app:overlayColor`            | `color` | オーバーレイ色を設定 |

---