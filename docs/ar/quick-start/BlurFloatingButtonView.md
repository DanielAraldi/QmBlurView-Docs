---
prev:
  text: 'استخدام BlurSwitchButtonView'
  link: '/ar/quick-start/BlurSwitchButtonView.md'
next:
  text: 'استخدام BlurBottomNavigationView'
  link: '/ar/quick-start/BlurBottomNavigationView.md'
---

# BlurFloatingButtonView

### استخدام في تخطيط XML
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

### مرجع API
| الطريقة | الوصف |
|------|---|
| `setIcon` | تعيين الأيقونة |
| `setIconTint` | تعيين لون الأيقونة |
| `setBackgroundTint` | تعيين لون الخلفية |
| `setRippleColor` | تعيين لون الريبل |
| `setElevation` | تعيين الارتفاع |
| `setOnClickListener` | تعيين слушатель النقر |
| `setEnabled` | تعيين تمكين/تعطيل الزر |

### وصف السمات

| اسم السمة  | النوع | الوصف |
|-------------------------------|------|-------------|
| `app:fabSize`                | `enum` | تعيين حجم FAB (normal, mini, auto) |
| `app:fabIcon`                | `reference` | تعيين الأيقونة |
| `app:fabIconTint`            | `color` | تعيين لون الأيقونة |
| `app:fabBackgroundTint`      | `color` | تعيين لون الخلفية |
| `app:fabElevation`           | `dimension` | تعيين الارتفاع |
| `app:fabRippleColor`         | `color` | تعيين لون الريبل |
| `app:blurRadius`              | `dimension` | تعيين نصف قطر التمويه |
| `app:overlayColor`            | `color` | تعيين لون التغطية |

---