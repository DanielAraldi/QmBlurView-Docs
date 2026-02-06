---
prev: 
  text: 'Использовать BlurTitlebarView'
  link: '/ru/quick-start/BlurTitlebarView.md'
next: 
  text: 'Использовать BlurFloatingButtonView'
  link: '/ru/quick-start/BlurFloatingButtonView.md'
---

# BlurSwitchButtonView

### В XML-макете
```xml
<com.qmdeve.blurview.widget.BlurSwitchButtonView
    android:layout_width="65dp"
    android:layout_height="wrap_content"
    app:baseColor="#0161F2" />
```

### Атрибуты XML
| Имя атрибута             | Тип      | Значение по умолчанию | Описание                                          |
|------------------------------|---------|-----|---------------------------------------------|
| `app:baseColor` | `color` | `#0161F2` | Базовый цвет (вы должны установить только одно значение цвета, оно автоматически рассчитает цвета для состояний `on` и `off`) |
| `app:useSolidColorMode` | `boolean` | `false` | `-` |
| `app:solidOnColor` | `color` | `-` | `-` |
| `app:solidOffColor` | `color` | `-` | `-` |

### Use the code
```java
BlurSwitchButtonView blurSwitch = findViewById(R.id.blurSwitch);

// Установите слушатель обратного вызова
blurSwitch.setOnCheckedChangeListener(is -> {
    if (is) {
        
    }
});

// Установите базовый цвет
blurSwitch.setBaseColor(0xFF0161F2);

// Первый параметр устанавливает статус, второй определяет, нужна ли анимация
blurSwitch.setChecked(false, false);

// Используйте режим твердого цвета
blurSwitch.setUseSolidColorMode(true);

// Находится ли он в режиме твердого цвета
blurSwitch.isUseSolidColorMode();

// Установите цвет режима твердого цвета
blurSwitch.setSolidColors();
```

::: warning
**`BlurSwitchButtonView` вы должны установить только одно значение цвета, оно автоматически рассчитает цвета для состояний `on` и `off`**
:::