---
prev: false
next: 
  text: 'Picasso'
  link: '/ru/quick-start/blur-transformation/picasso.md'
---

# Glide

::: warning
Использование `Transform` требует интеграции `QmBlurView` и `Glide`.
```groovy
dependencies {
    // QmBlurView Transform dependency
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Glide dependency
    implementation 'com.github.bumptech.glide:glide:5.0.5'
}
```
:::

### Imports
```java :no-line-numbers
import com.bumptech.glide.Glide;

import com.qmdeve.blurview.transform.glide.BlurTransformation;
```

### Usage Example
```java :no-line-numbers
Glide.with(this)
    .load(R.drawable.image)
    .apply(new RequestOptions().transform(
           new CenterCrop(),

         /**
          * Используйте нечеткую конверсию
          * new BlurTransformation() // По умолчанию размыть радиус 25f, без скругленных углов
          * new BlurTransformation(float blurRadius) // Пользовательский радиус размытия без скругленных углов
          * new BlurTransformation(float blurRadius, float roundedCorners) // Пользовательский радиус размытия и пользовательские скругленные углы
          */
           new BlurTransformation(24f, 50)
       ))
    .into(imageView);
```

### Конструкторы
| Конструктор                                 | Описание               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | Создает преобразование с радиусом размытия по умолчанию 25f и без скругленных углов |
| `BlurTransformation(float blurRadius)`  | Создает преобразование с пользовательским радиусом размытия и без скругленных углов |
| `BlurTransformation(float blurRadius, float roundedCorners)` | Создает преобразование с пользовательским радиусом размытия и пользовательскими скругленными углами |