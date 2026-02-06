---
prev:
  text: 'BlurTitlebarView の使用'
  link: '/ja/quick-start/BlurTitlebarView.md'
next:
  text: 'BlurFloatingButtonView の使用'
  link: '/ja/quick-start/BlurFloatingButtonView.md'
---

# BlurSwitchButtonView

### XML レイアウトでの使用
```xml
<com.qmdeve.blurview.widget.BlurSwitchButtonView
    android:id="@+id/switchButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:switchThumbColor="@color/white"
    app:switchTrackColor="@color/gray"
    app:switchTrackOnColor="@color/blue"
    app:switchEnabled="true"
    app:switchChecked="true"/>
```

### API リファレンス
| メソッド | 説明 |
|------|---|
| `setChecked` | スイッチの状態を設定 |
| `isChecked` | スイッチの状態を取得 |
| `setOnCheckedChangeListener` | チェック状態変更リスナーを設定 |
| `setEnabled` | スイッチを有効/無効に設定 |
| `setThumbColor` | つまみの色を設定 |
| `setTrackColor` `setTrackOnColor` | トラックの色を設定 |

### 属性説明

| 属性名  | 型 | 説明 |
|-------------------------------|------|-------------|
| `app:switchChecked`           | `boolean` | スイッチの初期状態を設定 |
| `app:switchEnabled`           | `boolean` | スイッチを有効/無効に設定 |
| `app:switchThumbColor`        | `color` | つまみの色を設定 |
| `app:switchTrackColor`        | `color` | トラックの色を設定 |
| `app:switchTrackOnColor`      | `color` | オン状態のトラックの色を設定 |
| `app:blurRadius`              | `dimension` | ブラー半径を設定 |
| `app:overlayColor`            | `color` | オーバーレイ色を設定 |

---