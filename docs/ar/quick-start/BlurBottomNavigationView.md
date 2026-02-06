---
prev:
  text: 'استخدام BlurFloatingButtonView'
  link: '/ar/quick-start/BlurFloatingButtonView.md'
next: false
---

# BlurBottomNavigationView

### استخدام في تخطيط XML
```xml
<com.qmdeve.blurview.widget.BlurBottomNavigationView
    android:id="@+id/bottomNavigation"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:menu="@menu/bottom_nav_menu"
    app:itemIconTint="@color/bottom_nav_icon_tint"
    app:itemTextColor="@color/bottom_nav_text_color"
    app:itemBackground="@drawable/bottom_nav_item_background"
    app:elevation="8dp"
    app:labelVisibilityMode="labeled"/>
```

### مرجع API
| الطريقة | الوصف |
|------|---|
| `setMenu` | تعيين القائمة |
| `setOnNavigationItemSelectedListener` | تعيين слушатель تحديد عنصر التنقل |
| `setOnNavigationItemReselectedListener` | تعيين слушатель إعادة تحديد عنصر التنقل |
| `getMenu` | الحصول على القائمة الحالية |
| `setSelectedItemId` | تعيين العنصر المحدد |
| `setItemIconTintList` | تعيين قائمة تدرجات الأيقونات |
| `setItemTextColor` | تعيين لون نص العناصر |

### وصف السمات

| اسم السمة  | النوع | الوصف |
|-------------------------------|------|-------------|
| `app:menu` | `reference` | تعيين مورد قائمة التنقل السفلية |
| `app:itemIconTint` | `color` | تعيين قائمة تدرجات الأيقونات |
| `app:itemTextColor` | `color` | تعيين لون نص العناصر |
| `app:itemBackground` | `drawable` | تعيين خلفية العناصر |
| `app:elevation` | `dimension` | تعيين الارتفاع |
| `app:labelVisibilityMode` | `enum` | تعيين وضع رؤية التسمية (labeled, selected, unlabeled, auto) |

---