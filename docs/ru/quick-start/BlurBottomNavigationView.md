---
prev: 
  text: 'Используйте BlurFloatingButtonView'
  link: '/ru/quick-start/BlurFloatingButtonView.md'
next: false
---

# BlurBottomNavigationView

::: warning
Перед использованием `BlurBottomNavigationView`, пожалуйста, убедитесь, что вы интегрировали зависимость NavigationView.
```groovy
dependencies {
    // BottomNavigationView Dependencies
    implementation '{{GROUP_ID}}:navigation:{{VERSION}}'
}
```
:::

### В XML-макете
```xml
<com.qmdeve.blurview.widget.BlurBottomNavigationView
    android:id="@+id/bottomnav"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:item_iconSize="24dp"
    app:item_textBold="true"
    app:item_textSize="12dp"
    app:menu="@menu/bottom_nav_menu"
    app:navOverlayColor="#AAFFFFFF"
    app:navSelectedColor="#0161F2"
    app:navUnselectedColor="#000"
    android:layout_alignParentBottom="true" />
```

### API методы
| Метод                | Описание                 |
|----------------------|--------------------------|
| `bind(Object)`       | `Привязать ViewPager или ViewPager2` |
| `setMenu(int)`       |          `Установить меню`          |
| `setSelectedTab(int)`| `Установить выбранный таб`             |
| `setSelectedColor(int)`    | `Установить выбранный цвет`             |
| `setUnselectedColor(int)`  | `Установить не выбранный цвет`           |
| `setIconSize(float)`         | `Установить размер иконки`               |
| `setTextSize(float)`         | `Установить размер текста`               |
| `setTextBold(boolean)`       | `Установить жирный текст`           |

### Атрибуты XML
| Имя атрибута              | Тип       | Значение по умолчанию      | Описание |
|---------------------------|------------|--------------------|-------------|
|`app:navBlurRadius`          | `dimension`| `25dp`             | Установить радиус размытия |
|`app:navOverlayColor`        | `color`    | `#AAFFFFFF`        | Установить цвет наложения |
|`app:menu`                   | `reference`| `null`             | Установить ресурс меню |
|`app:navSelectedColor`       | `color`    | `BLUE`             | Установить цвет выбранного элемента |
|`app:navUnselectedColor`     | `color`    | `GRAY`             | Установить цвет не выбранного элемента |
|`app:item_iconSize`          | `dimension`| `24dp`             | Установить размер иконки |
|`app:item_textSize`          | `dimension`| `12dp`             | Установить размер текста |
|`app:item_textBold`          | `boolean`  | `false`            | Установить жирный текст |