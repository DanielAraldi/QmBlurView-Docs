---
prev:
  text: 'BlurView 사용'
  link: '/ko/quick-start/BlurView.md'
next:
  text: 'ProgressiveBlurView 사용'
  link: '/ko/quick-start/ProgressiveBlurView.md'
---

# BlurButtonView

### XML 레이아웃에서 사용
```xml
<com.qmdeve.blurview.widget.BlurButtonView
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="버튼 테스트"
    app:buttonCornerRadius="12dp"
    app:buttonIconPadding="8dp"
    app:buttonIconSize="24dp"
    app:buttonTextBold="true"
    aap:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    android:icon="?android:attr/actionModeWebSearchDrawable"
    app:buttonIconTint="@color/black"/>
```

### API 참조
| 메소드 | 설명 |
|------|---|
| `setText` | 텍스트 설정 |
| `setButtonCornerRadius`     | 버튼 모서리 반경 설정 |
| `setTextSize`               | 텍스트 크기 설정 |
| `setTextColor`              | 텍스트 색상 설정 |
| `setTextBold`               | 텍스트 굵게 설정 |
| `setIcon` `setIconResource` | 아이콘 설정 |
| `setIconSize`               | 아이콘 크기 설정 |
| `setIconPadding`            | 아이콘 패딩 설정 |
| `setIconTint`               | 아이콘 색조 설정 |

### 속성 설명

| 속성명  | 타입 | 설명 |
|-------------------------------|------|-------------|
| `app:buttonCornerRadius`      | `dimension` | 버튼 모서리 반경 설정 |
| `app:buttonIconPadding`       | `dimension` | 아이콘 패딩 설정 |
| `app:buttonIconSize`          | `dimension` | 아이콘 크기 설정 |
| `app:buttonTextBold`          | `boolean` | 텍스트 굵게 설정 |
| `app:blurRadius`              | `dimension` | 블러 반경 설정 |
| `app:overlayColor`            | `color` | 오버레이 색상 설정 |
| `app:buttonIconTint`          | `color`| 아이콘 색조 설정 |
| `android:icon`                | - | 아이콘 설정 |
| `android:text`                | - | 텍스트 설정 |
| `android:textSize`            | - | 텍스트 크기 설정 |

---