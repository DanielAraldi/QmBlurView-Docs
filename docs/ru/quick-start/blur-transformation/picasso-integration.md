---
prev: 
  text: 'Glide'
  link: '/ru/quick-start/blur-transformation/glide-integration.md'
next: false
---

# Picasso

::: warning
Использование `Transform` требует интеграции `QmBlurView` и `Picasso`.
```groovy :no-line-numbers
dependencies {
    // QmBlurView Transform dependency
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Picasso dependency
    implementation 'com.squareup.picasso:picasso:2.8'
}
```
:::

### Imports
```java
import com.squareup.picasso.Picasso;

import com.qmdeve.blurview.transform.picasso.BlurTransformation;
```

### Usage Example
```java :no-line-numbers
Picasso.get()
         .load(R.drawable.image)
         .fit()
         .centerCrop()
         .transform(

            /**
            * Используйте нечеткую конверсию
            * Import class: com.qmdeve.blurview.transform.picasso.BlurTransformation
            *
            * new BlurTransformation() // По умолчанию размыть радиус 25f, без скругленных углов
            * new BlurTransformation(float blurRadius) // Пользовательский радиус размытия без скругленных углов
            * new BlurTransformation(float blurRadius, float roundedCorners) // Пользовательский радиус размытия и пользовательские скругленные углы
            */
            new BlurTransformation(25f, 50)
         )
         .into(imageView);
```

### Конструкторы
| Конструктор                                 | Описание               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | Создает преобразование с радиусом размытия по умолчанию 25f и без скругленных углов |
| `BlurTransformation(float blurRadius)`  | Создает преобразование с пользовательским радиусом размытия и без скругленных углов |
| `BlurTransformation(float blurRadius, float roundedCorners)` | Создает преобразование с пользовательским радиусом размытия и пользовательскими скругленными углами |