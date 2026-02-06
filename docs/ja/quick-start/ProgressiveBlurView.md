---
prev:
  text: 'BlurButtonView の使用'
  link: '/ja/quick-start/BlurButtonView.md'
next:
  text: 'BlurTitlebarView の使用'
  link: '/ja/quick-start/BlurTitlebarView.md'
---

# ProgressiveBlurView
### XML レイアウトでの使用
```xml
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:blurRadius="20dp"
    app:progressiveDirection="topToBottom"
    app:progressiveLayers="5"
    app:progressiveOverlayColor="#80FFFFFF" />
```

### 属性説明
| 属性名                         | 型     |
|------------------------------|------------|
| `app:progressiveOverlayColor` | `color`    |
| `app:progressiveDirection`    | `enum`     |
| `app:progressiveLayers`       | `integer`  |
| `app:progressiveBlurRadius`   | `dimension`|

---