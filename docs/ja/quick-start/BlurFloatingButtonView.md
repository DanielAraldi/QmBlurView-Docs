---
prev:
  text: 'BlurSwitchButtonView の使用'
  link: '/ja/quick-start/BlurSwitchButtonView.md'
next:
  text: 'BlurBottomNavigationView の使用'
  link: '/ja/quick-start/BlurBottomNavigationView.md'
---

# BlurFloatingButtonView

### XML レイアウトでの使用
```xml
<com.qmdeve.blurview.widget.BlurFloatingButtonView
    android:id="@+id/fab"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom|end"
    android:layout_margin="16dp"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:fabSize="normal"
    app:fabIcon="?android:attr/actionModeWebSearchDrawable"
    app:fabIconTint="@color/black"
    app:fabBackgroundTint="@color/white"
    app:fabElevation="8dp"
    app:fabRippleColor="@color/gray"/>
```

### API リファレンス
| メソッド | 説明 |
|------|---|
| `setIcon` | アイコンを設定 |
| `setIconTint` | アイコンの色調を設定 |
| `setBackgroundTint` | 背景の色調を設定 |
| `setRippleColor` | リップルの色を設定 |
| `setElevation` | エレベーションを設定 |
| `setOnClickListener` | クリックリスナーを設定 |
| `setEnabled` | ボタンを有効/無効に設定 |

### 属性説明

| 属性名  | 型 | 説明 |
|-------------------------------|------|-------------|
| `app:fabSize`                | `enum` | FAB のサイズを設定 (normal, mini, auto) |
| `app:fabIcon`                | `reference` | アイコンを設定 |
| `app:fabIconTint`            | `color` | アイコンの色調を設定 |
| `app:fabBackgroundTint`      | `color` | 背景の色調を設定 |
| `app:fabElevation`           | `dimension` | エレベーションを設定 |
| `app:fabRippleColor`         | `color` | リップルの色を設定 |
| `app:blurRadius`              | `dimension` | ブラー半径を設定 |
| `app:overlayColor`            | `color` | オーバーレイ色を設定 |

---