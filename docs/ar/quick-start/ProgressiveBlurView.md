---
prev:
  text: 'استخدام BlurButtonView'
  link: '/ar/quick-start/BlurButtonView.md'
next:
  text: 'استخدام BlurTitlebarView'
  link: '/ar/quick-start/BlurTitlebarView.md'
---

# ProgressiveBlurView
### استخدام في تخطيط XML
```xml
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:blurRadius="20dp"
    app:progressiveDirection="topToBottom"
    app:progressiveLayers="5"
    app:progressiveOverlayColor="#80FFFFFF" />
```

### وصف السمات
| اسم السمة                         | النوع     |
|------------------------------|------------|
| `app:progressiveOverlayColor` | `color`    |
| `app:progressiveDirection`    | `enum`     |
| `app:progressiveLayers`       | `integer`  |
| `app:progressiveBlurRadius`   | `dimension`|

---