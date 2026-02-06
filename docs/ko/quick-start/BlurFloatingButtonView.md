---
prev:
  text: 'BlurSwitchButtonView 사용'
  link: '/ko/quick-start/BlurSwitchButtonView.md'
next:
  text: 'BlurBottomNavigationView 사용'
  link: '/ko/quick-start/BlurBottomNavigationView.md'
---

# BlurFloatingButtonView

### XML 레이아웃에서 사용
```xml
<com.qmdeve.blurview.widget.BlurFloatingButtonView
    android:id="@+id/fab"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom|end"
    android:layout_margin="16dp"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:fabSize="normal"
    app:fabIcon="?android:attr/actionModeWebSearchDrawable"
    app:fabIconTint="@color/black"
    app:fabBackgroundTint="@color/white"
    app:fabElevation="8dp"
    app:fabRippleColor="@color/gray"/>
```

### API 참조
| 메소드 | 설명 |
|------|---|
| `setIcon` | 아이콘 설정 |
| `setIconTint` | 아이콘 색조 설정 |
| `setBackgroundTint` | 배경 색조 설정 |
| `setRippleColor` | 리플 색상 설정 |
| `setElevation` | 엘리베이션 설정 |
| `setOnClickListener` | 클릭 리스너 설정 |
| `setEnabled` | 버튼 활성화/비활성화 설정 |

### 속성 설명

| 속성명  | 타입 | 설명 |
|-------------------------------|------|-------------|
| `app:fabSize`                | `enum` | FAB 크기 설정 (normal, mini, auto) |
| `app:fabIcon`                | `reference` | 아이콘 설정 |
| `app:fabIconTint`            | `color` | 아이콘 색조 설정 |
| `app:fabBackgroundTint`      | `color` | 배경 색조 설정 |
| `app:fabElevation`           | `dimension` | 엘리베이션 설정 |
| `app:fabRippleColor`         | `color` | 리플 색상 설정 |
| `app:blurRadius`              | `dimension` | 블러 반경 설정 |
| `app:overlayColor`            | `color` | 오버레이 색상 설정 |

---