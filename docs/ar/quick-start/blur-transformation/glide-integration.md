---
prev: false
next:
  text: 'Picasso'
  link: '/ar/quick-start/blur-transformation/picasso-integration.md'
---

# Glide

::: warning
قبل استخدام `Transform`، تأكد من أنك قد قمت بدمج مكتبة Glide.
```groovy :no-line-numbers
dependencies {
    // تبعيات QmBlurView Transform
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // تبعيات Glide
    implementation 'com.github.bumptech.glide:glide:5.0.5'
}
```
:::

### استيراد الفئة
```java :no-line-numbers
// الفئة الرئيسية لـ Glide
import com.bumptech.glide.Glide;

// فئة تحويل التمويه لـ QmBlurView
import com.qmdeve.blurview.transform.glide.BlurTransformation;
```

### مثال على الاستخدام
```java :no-line-numbers
Glide.with(this)
    .load(R.drawable.image)
    .apply(new RequestOptions().transform(
           new CenterCrop(),

         /**
          * استخدام تحويل التمويه
          * new BlurTransformation() // نصف قطر التمويه الافتراضي 25f، بدون زوايا دائرية
          * new BlurTransformation(float blurRadius) // نصف قطر التمويه المخصص، بدون زوايا دائرية
          * new BlurTransformation(float blurRadius, float roundedCorners) // نصف قطر التمويه المخصص وزوايا دائرية
          */
           new BlurTransformation(24f, 50)
       ))
    .into(imageView);
```

### البناءة
| البناء                                 | الوصف               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | يخلق تحويلًا蒙蒙ًا بنصف قطر التمويه الافتراضي 25f وبدون زوايا دائرية |
| `BlurTransformation(float blurRadius)`  | يخلق تحويلًا蒙蒙ًا بنصف قطر التمويه المخصص وبدون زوايا دائرية |
| `BlurTransformation(float blurRadius, float roundedCorners)` | يخلق تحويلًا蒙蒙ًا بنصف قطر التمويه المخصص وزوايا دائرية مخصصة |