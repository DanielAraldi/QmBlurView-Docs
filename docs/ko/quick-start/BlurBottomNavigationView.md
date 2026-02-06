---
prev:
  text: 'BlurFloatingButtonView 사용'
  link: '/ko/quick-start/BlurFloatingButtonView.md'
next: false
---

# BlurBottomNavigationView

### XML 레이아웃에서 사용
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

### API 참조
| 메소드 | 설명 |
|------|---|
| `setMenu` | 메뉴 설정 |
| `setOnNavigationItemSelectedListener` | 네비게이션 아이템 선택 리스너 설정 |
| `setOnNavigationItemReselectedListener` | 네비게이션 아이템 재선택 리스너 설정 |
| `getMenu` | 현재 메뉴 가져오기 |
| `setSelectedItemId` | 선택된 아이템 설정 |
| `setItemIconTintList` | 아이콘 색조 리스트 설정 |
| `setItemTextColor` | 아이템 텍스트 색상 설정 |

### 속성 설명

| 속성명  | 타입 | 설명 |
|-------------------------------|------|-------------|
| `app:menu` | `reference` | 바텀 네비게이션 메뉴 리소스 설정 |
| `app:itemIconTint` | `color` | 아이콘 색조 리스트 설정 |
| `app:itemTextColor` | `color` | 아이템 텍스트 색상 설정 |
| `app:itemBackground` | `drawable` | 아이템 배경 설정 |
| `app:elevation` | `dimension` | 고도 설정 |
| `app:labelVisibilityMode` | `enum` | 레이블 표시 모드 설정 (labeled, selected, unlabeled, auto) |

---