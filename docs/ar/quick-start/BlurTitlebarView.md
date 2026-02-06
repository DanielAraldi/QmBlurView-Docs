---
prev:
  text: 'استخدام ProgressiveBlurView'
  link: '/ar/quick-start/ProgressiveBlurView.md'
next:
  text: 'استخدام BlurSwitchButtonView'
  link: '/ar/quick-start/BlurSwitchButtonView.md'
---

# BlurTitlebarView

### استخدام في تخطيط XML
```xml
<com.qmdeve.blurview.widget.BlurTitlebarView
    android:id="@+id/titlebar"
    android:layout_width="match_parent"
    android:layout_height="?android:attr/actionBarSize"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:titleText="شريط العنوان"
    app:titleTextColor="@color/black"
    app:titleTextSize="18sp"
    app:titleTextBold="true"
    app:leftIcon="?android:attr/homeAsUpIndicator"
    app:rightIcon="?android:attr/actionModeWebSearchDrawable"/>
```

### مرجع API
| الطريقة | الوصف |
|------|---|
| `setTitle` | تعيين العنوان |
| `setTitleColor` | تعيين لون العنوان |
| `setTitleSize` | تعيين حجم العنوان |
| `setTitleBold` | تعيين العنوان عريضًا |
| `setLeftIcon` `setRightIcon` | تعيين الأيقونات |
| `setLeftIconClickListener` `setRightIconClickListener` | تعيين слушатели النقر على الأيقونات |

### وصف السمات

| اسم السمة  | النوع | الوصف |
|-------------------------------|------|-------------|
| `app:titleText`              | `string` | تعيين نص العنوان |
| `app:titleTextColor`         | `color` | تعيين لون العنوان |
| `app:titleTextSize`          | `dimension` | تعيين حجم العنوان |
| `app:titleTextBold`          | `boolean` | تعيين العنوان عريضًا |
| `app:leftIcon` `app:rightIcon` | `reference` | تعيين الأيقونات |
| `app:blurRadius`              | `dimension` | تعيين نصف قطر التمويه |
| `app:overlayColor`            | `color` | تعيين لون التغطية |

---