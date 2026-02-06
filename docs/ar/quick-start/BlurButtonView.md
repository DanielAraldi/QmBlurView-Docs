---
prev:
  text: 'استخدام BlurView'
  link: '/ar/quick-start/BlurView.md'
next:
  text: 'استخدام ProgressiveBlurView'
  link: '/ar/quick-start/ProgressiveBlurView.md'
---

# BlurButtonView

### استخدام في تخطيط XML
```xml
<com.qmdeve.blurview.widget.BlurButtonView
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="اختبار الزر"
    app:buttonCornerRadius="12dp"
    app:buttonIconPadding="8dp"
    app:buttonIconSize="24dp"
    app:buttonTextBold="true"
    aap:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    android:icon="?android:attr/actionModeWebSearchDrawable"
    app:buttonIconTint="@color/black"/>
```

### مرجع API
| الطريقة | الوصف |
|------|---|
| `setText` | تعيين النص |
| `setButtonCornerRadius`     | تعيين نصف قطر زاوية الزر |
| `setTextSize`               | تعيين حجم النص |
| `setTextColor`              | تعيين لون النص |
| `setTextBold`               | تعيين النص عريضًا |
| `setIcon` `setIconResource` | تعيين الأيقونة |
| `setIconSize`               | تعيين حجم الأيقونة |
| `setIconPadding`            | تعيين حشو الأيقونة |
| `setIconTint`               | تعيين لون الأيقونة |

### وصف السمات

| اسم السمة  | النوع | الوصف |
|-------------------------------|------|-------------|
| `app:buttonCornerRadius`      | `dimension` | تعيين نصف قطر زاوية الزر |
| `app:buttonIconPadding`       | `dimension` | تعيين حشو الأيقونة |
| `app:buttonIconSize`          | `dimension` | تعيين حجم الأيقونة |
| `app:buttonTextBold`          | `boolean` | تعيين النص عريضًا |
| `app:blurRadius`              | `dimension` | تعيين نصف قطر التمويه |
| `app:overlayColor`            | `color` | تعيين لون التغطية |
| `app:buttonIconTint`          | `color`| تعيين لون الأيقونة |
| `android:icon`                | - | تعيين الأيقونة |
| `android:text`                | - | تعيين النص |
| `android:textSize`            | - | تعيين حجم النص |

---