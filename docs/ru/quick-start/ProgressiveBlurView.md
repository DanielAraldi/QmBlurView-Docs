---
prev: 
  text: '使用 BlurButtonView'
  link: '/ru/quick-start/BlurButtonView.md'
next: 
  text: '使用 BlurTitlebarView'
  link: '/ru/quick-start/BlurTitlebarView.md'
---

# ProgressiveBlurView
### В XML-макете
```xml
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:blurRadius="20dp"
    app:progressiveDirection="topToBottom"
    app:progressiveLayers="5"
    app:progressiveOverlayColor="#80FFFFFF" />
```

### Атрибуты XML
| Имя атрибута                         | Тип     |  Описание       |
|------------------------------|------------|-------------|
| `app:progressiveOverlayColor` | `color`    | Цвет наложения |
| `app:progressiveDirection`    | `enum`     | Направление градиента, поддерживает следующие значения: `topToBottom`、`bottomToTop`、`leftToRight`、`rightToLeft` |
| `app:progressiveLayers`       | `integer`  | Количество слоев, обозначает количество слоев градиентного размытия, чем больше значение, тем плавнее эффект градиента |
| `app:progressiveBlurRadius`   | `dimension`| Радиус размытия градиента |

---