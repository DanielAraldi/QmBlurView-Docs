---
prev: 
  text: 'Используйте ProgressiveBlurView'
  link: '/ru/quick-start/ProgressiveBlurView.md'
next: 
  text: 'Используйте BlurSwitchButtonView'
  link: '/ru/quick-start/BlurSwitchButtonView.md'
---

# BlurTitlebarView
### В XML-макете
```xml
<com.qmdeve.blurview.widget.BlurTitlebarView
    android:id="@+id/blurTitlebar1"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:overlayColor="#D1FFFFFF"
    app:blurRadius="30dp"
    app:showBack="true"
    app:menuIcon="?android:attr/actionModeWebSearchDrawable"
    app:titleText="Title Test"
    app:subtitleText="Subheading Test"
    app:centerTitle="false"/>
```

### Атрибуты XML

| Имя атрибута               | Тип       |  Описание  |
|------------------------------|------------|-------------|
| `app:titleText`              | `string`   | Текст заголовка |
| `app:subtitleText`           | `string`   | Текст подзаголовка |
| `app:titleTextColor`         | `color`    | Цвет заголовка |
| `app:subtitleTextColor`      | `color`    | Цвет подзаголовка |
| `app:showBack`               | `boolean`  | Отображать кнопку назад |
| `app:backIcon`               | `reference`| Ресурс иконки назад |
| `app:backIconTint`           | `color`    | Цвет иконки назад |
| `app:menuText`               | `string`   | Текст меню |
| `app:menuTextColor`          | `color`    | Цвет текста меню |
| `app:menuIcon`               | `reference`| Ресурс иконки меню |
| `app:menuIconTint`           | `color`    | Цвет иконки меню |
| `app:centerTitle`            | `boolean`  | Центрировать заголовок |

### Используйте код для установки центрирования заголовка
```java
blurTitlebarView.setCenterTitle(true);
```