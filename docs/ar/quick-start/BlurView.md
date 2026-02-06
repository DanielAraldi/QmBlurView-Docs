---
prev: ../getting-started
next: BlurButtonView.md
---

# BlurView

#### استخدام في تخطيط XML
```xml
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="20dp"
    app:overlayColor="#66FFFFFF" 
    app:cornerRadius="24dp"/>
```

#### تعيين خصائص العرض بواسطة الكود

```java
BlurView blurView = findViewById(R.id.blurView);
blurView.setBlurRadius(20f);
blurView.setOverlayColor(0x66FFFFFF);
blurView.setCornerRadius(20);
```

#### وصف السمات

| اسم السمة         | النوع | القيمة الافتراضية | الشرح |
|------------------------|------|--------|-------------|
| `app:blurRadius`       | `dimension` | `10` | نصف قطر التمويه |
| `app:overlayColor`     | `color` | `#AAFFFFFF` | لون التغطية |
| `app:cornerRadius`     | `dimension` | `0` | نصف قطر زاوية العرض |
| `app:setDownsampleFactor` | `float` | `0` | عامل تقليل العينة، القيمة الأعلى تعني أداء أفضل ولكن تأثير التمويه أسوأ |

### مرجع API
| اسم الطريقة               | الوصف       |
|--------------------------|------------------|
| `setBlurRadius(float)`    | تعيين نصف قطر التمويه   |
| `setOverlayColor(int)`    | تعيين لون التغطية |
| `setCornerRadius(float)`  | تعيين نصف قطر الزاوية |
| `setDownsampleFactor(float)` | تعيين عامل تقليل العينة |