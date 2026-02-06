---
prev:
  text: 'استخدام BlurTitlebarView'
  link: '/ar/quick-start/BlurTitlebarView.md'
next:
  text: 'استخدام BlurFloatingButtonView'
  link: '/ar/quick-start/BlurFloatingButtonView.md'
---

# BlurSwitchButtonView

### استخدام في تخطيط XML
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

### مرجع API
| الطريقة | الوصف |
|------|---|
| `setChecked` | تعيين حالة المفتاح |
| `isChecked` | الحصول على حالة المفتاح |
| `setOnCheckedChangeListener` | تعيين слушатель تغيير حالة التحديد |
| `setEnabled` | تعيين تمكين/تعطيل المفتاح |
| `setThumbColor` | تعيين لون الإبهام |
| `setTrackColor` `setTrackOnColor` | تعيين لون المسار |

### وصف السمات

| اسم السمة  | النوع | الوصف |
|-------------------------------|------|-------------|
| `app:switchChecked`           | `boolean` | تعيين حالة المفتاح الأولية |
| `app:switchEnabled`           | `boolean` | تعيين تمكين/تعطيل المفتاح |
| `app:switchThumbColor`        | `color` | تعيين لون الإبهام |
| `app:switchTrackColor`        | `color` | تعيين لون المسار |
| `app:switchTrackOnColor`      | `color` | تعيين لون المسار في حالة التفعيل |
| `app:blurRadius`              | `dimension` | تعيين نصف قطر التمويه |
| `app:overlayColor`            | `color` | تعيين لون التغطية |

---