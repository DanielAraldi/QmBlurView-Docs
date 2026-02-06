---
prev:
  text: 'Glide'
  link: '/ar/quick-start/blur-transformation/glide-integration.md'
next: false
---

# Picasso

::: warning
قبل استخدام `Transform`، تأكد من أنك قد قمت بدمج مكتبة Picasso.
```groovy :no-line-numbers
dependencies {
    // تبعيات QmBlurView Transform
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // تبعيات Picasso
    implementation 'com.squareup.picasso:picasso:2.8'
}
```
:::

### استيراد الفئة
```java :no-line-numbers
// الفئة الرئيسية لـ Picasso
import com.squareup.picasso.Picasso;

// فئة تحويل التمويه لـ QmBlurView
import com.qmdeve.blurview.transform.picasso.BlurTransformation;
```

### مثال على الاستخدام
```java :no-line-numbers
Picasso.get()
         .load(R.drawable.image)
         .fit()
         .centerCrop()
         .transform(

            /**
            * استخدام تحويل التمويه
            * استيراد الفئة: com.qmdeve.blurview.transform.picasso.BlurTransformation
            *
            * new BlurTransformation() // نصف قطر التمويه الافتراضي 25f، زوايا دائرية 0
            * new BlurTransformation(float blurRadius) // نصف قطر التمويه المخصص، بدون زوايا دائرية
            * new BlurTransformation(float blurRadius, float roundedCorners) // نصف قطر التمويه المخصص وزوايا دائرية
            */
            new BlurTransformation(25f, 50)
         )
         .into(imageView);
```

### البناءة
| البناء                                 | الوصف               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | يخلق تحويلًا蒙蒙ًا بنصف قطر التمويه الافتراضي 25f وبدون زوايا دائرية |
| `BlurTransformation(float blurRadius)`  | يخلق تحويلًا蒙蒙ًا بنصف قطر التمويه المخصص وبدون زوايا دائرية |
| `BlurTransformation(float blurRadius, float roundedCorners)` | يخلق تحويلًا蒙蒙ًا بنصف قطر التمويه المخصص وزوايا دائرية مخصصة |