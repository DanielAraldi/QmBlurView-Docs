---
prev: 
  text: 'Использовать BlurView'
  link: '/ru/quick-start/BlurView.md'
next: 
  text: 'Использовать ProgressiveBlurView'
  link: '/ru/quick-start/ProgressiveBlurView.md'
---

# BlurButtonView

### В XML-макете
```xml
<com.qmdeve.blurview.widget.BlurButtonView
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Button Test"
    app:buttonCornerRadius="12dp"
    app:buttonIconPadding="8dp"
    app:buttonIconSize="24dp"
    app:buttonTextBold="true"
    aap:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    android:icon="?android:attr/actionModeWebSearchDrawable"
    app:buttonIconTint="@color/black"/>
```

### API методы
| Метод | Описание |
|------|---|
| `setText` | Установить текст |
| `setButtonCornerRadius`     | Установить радиус скругления кнопки |
| `setTextSize`               | Установить размер текста |
| `setTextColor`              | Установить цвет текста |
| `setTextBold`               | Установить жирный текст |
| `setIcon` `setIconResource` | Установить иконку |
| `setIconSize`               | Установить размер иконки |
| `setIconPadding`            | Установить внутренний отступ иконки |
| `setIconTint`               | Установить цвет иконки |

### Атрибуты XML

| Имя атрибута  | Тип | Описание |
|-------------------------------|------|-------------|
| `app:buttonCornerRadius`      | `dimension` | Установить радиус скругления кнопки |
| `app:buttonIconPadding`       | `dimension` | Установить внутренний отступ иконки |
| `app:buttonIconSize`          | `dimension` | Установить размер иконки |
| `app:buttonTextBold`          | `boolean` | Установить жирный текст |
| `app:blurRadius`              | `dimension` | Установить радиус размытия |
| `app:overlayColor`            | `color` | Установить цвет наложения |
| `app:buttonIconTint`          | `color`| Установить цвет иконки |
| `android:icon`                | - | Установить иконку |
| `android:text`                | - | Установить текст |
| `android:textSize`            | - | Установить размер текста |

---