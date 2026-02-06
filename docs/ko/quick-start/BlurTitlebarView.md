---
prev:
  text: 'ProgressiveBlurView 사용'
  link: '/ko/quick-start/ProgressiveBlurView.md'
next:
  text: 'BlurSwitchButtonView 사용'
  link: '/ko/quick-start/BlurSwitchButtonView.md'
---

# BlurTitlebarView

### XML 레이아웃에서 사용
```xml
<com.qmdeve.blurview.widget.BlurTitlebarView
    android:id="@+id/titlebar"
    android:layout_width="match_parent"
    android:layout_height="?android:attr/actionBarSize"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:titleText="타이틀바"
    app:titleTextColor="@color/black"
    app:titleTextSize="18sp"
    app:titleTextBold="true"
    app:leftIcon="?android:attr/homeAsUpIndicator"
    app:rightIcon="?android:attr/actionModeWebSearchDrawable"/>
```

### API 참조
| 메소드 | 설명 |
|------|---|
| `setTitle` | 제목 설정 |
| `setTitleColor` | 제목 색상 설정 |
| `setTitleSize` | 제목 크기 설정 |
| `setTitleBold` | 제목 굵게 설정 |
| `setLeftIcon` `setRightIcon` | 아이콘 설정 |
| `setLeftIconClickListener` `setRightIconClickListener` | 아이콘 클릭 리스너 설정 |

### 속성 설명

| 속성명  | 타입 | 설명 |
|-------------------------------|------|-------------|
| `app:titleText`              | `string` | 제목 텍스트 설정 |
| `app:titleTextColor`         | `color` | 제목 색상 설정 |
| `app:titleTextSize`          | `dimension` | 제목 크기 설정 |
| `app:titleTextBold`          | `boolean` | 제목 굵게 설정 |
| `app:leftIcon` `app:rightIcon` | `reference` | 아이콘 설정 |
| `app:blurRadius`              | `dimension` | 블러 반경 설정 |
| `app:overlayColor`            | `color` | 오버레이 색상 설정 |

---