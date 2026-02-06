---
prev:
  text: 'Начинай быстро'
  link: '/ru/getting-started.md'
next: 
  text: 'Используйте BlurButtonView'
  link: '/ru/quick-start/BlurButtonView.md'
---

# BlurView

#### В XML-макете
```xml
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="20dp"
    app:overlayColor="#66FFFFFF" 
    app:cornerRadius="24dp"/>
```

#### Используйте код для установки вида

```java
BlurView blurView = findViewById(R.id.blurView);
blurView.setBlurRadius(20f);
blurView.setOverlayColor(0x66FFFFFF);
blurView.setCornerRadius(20);
```

#### Атрибуты XML

| Имя атрибута         | Тип | Значение по умолчанию | Описание |
|------------------------|------|--------|-------------|
| `app:blurRadius`       | `dimension` | `10` | Полупрозрачность |
| `app:overlayColor`     | `color` | `#AAFFFFFF` | Цвет наложения |
| `app:cornerRadius`     | `dimension` | `0` | Радиус скругления |
| `app:setDownsampleFactor` | `float` | `0` | Фактор понижающей выборки, более высокое значение означает лучшую производительность, но худший эффект размытия |

### API методы
| Метод               | Описание       |
|--------------------------|------------------|
| `setBlurRadius(float)`    | Установить радиус размытия   |
| `setOverlayColor(int)`    | Установить цвет наложения |
| `setCornerRadius(float)`  | Установить радиус скругления |
| `setDownsampleFactor(float)` | Установить фактор понижающей выборки |