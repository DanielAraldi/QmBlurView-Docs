---
prev:
  text: 'Utiliser BlurButtonView'
  link: '/fr/quick-start/BlurButtonView.md'
next:
  text: 'Utiliser BlurTitlebarView'
  link: '/fr/quick-start/BlurTitlebarView.md'
---

# ProgressiveBlurView
### Utilisation dans la mise en page XML
```xml
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:blurRadius="20dp"
    app:progressiveDirection="topToBottom"
    app:progressiveLayers="5"
    app:progressiveOverlayColor="#80FFFFFF" />
```

### Description des attributs
| Nom de l'attribut                         | Type     |
|------------------------------|------------|
| `app:progressiveOverlayColor` | `color`    |
| `app:progressiveDirection`    | `enum`     |
| `app:progressiveLayers`       | `integer`  |
| `app:progressiveBlurRadius`   | `dimension`|

---