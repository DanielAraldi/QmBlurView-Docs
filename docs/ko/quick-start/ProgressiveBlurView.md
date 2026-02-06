---
prev:
  text: 'BlurButtonView 사용'
  link: '/ko/quick-start/BlurButtonView.md'
next:
  text: 'BlurTitlebarView 사용'
  link: '/ko/quick-start/BlurTitlebarView.md'
---

# ProgressiveBlurView
### XML 레이아웃에서 사용
```xml
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:blurRadius="20dp"
    app:progressiveDirection="topToBottom"
    app:progressiveLayers="5"
    app:progressiveOverlayColor="#80FFFFFF" />
```

### 속성 설명
| 속성명                         | 타입     |
|------------------------------|------------|
| `app:progressiveOverlayColor` | `color`    |
| `app:progressiveDirection`    | `enum`     |
| `app:progressiveLayers`       | `integer`  |
| `app:progressiveBlurRadius`   | `dimension`|

---