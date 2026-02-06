---
prev:
  text: 'Использовать BlurSwitchButtonView'
  link: '/ru/quick-start/BlurSwitchButtonView.md'
next:
  text: 'Использовать BlurBottomNavigationView'
  link: '/ru/quick-start/BlurBottomNavigationView.md'
---

# BlurFloatingButtonView

### В XML-макете
```xml
<com.qmdeve.blurview.widget.BlurFloatingButtonView 
    android:id="@+id/blurFloatingButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

### Use the code
```java
BlurFloatingButtonView floatingButtonView = findViewById(R.id.blurFloatingButton);

// Установите событие щелчка
floatingButtonView.setOnClickListener(view -> {
    Toast.makeText(BlurFloatingButtonActivity.this, "Click", Toast.LENGTH_SHORT).show();
});

// Установите событие долгого нажатия
floatingButtonView.setOnLongPressListener(view -> {
    Toast.makeText(this, "Long Press", Toast.LENGTH_SHORT).show();
});

// Установите позицию
floatingButtonView.setPosition(BlurFloatingButtonView.POSITION_RIGHT);

// Установите иконку
floatingButtonView.setIcon();

// Установите цвет иконки
floatingButtonView.setIconTint();

// Установите размер иконки
floatingButtonView.setIconSize();

// Установите размер кнопки
floatingButtonView.setButtonSize();

// Установите цвет наложения
floatingButtonView.setOverlayColor();

// Установите радиус скругления
floatingButtonView.setCornerRadius();
```