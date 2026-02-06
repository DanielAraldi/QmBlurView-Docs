---
prev:
  text: 'BlurTitlebarView 사용'
  link: '/ko/quick-start/BlurTitlebarView.md'
next:
  text: 'BlurFloatingButtonView 사용'
  link: '/ko/quick-start/BlurFloatingButtonView.md'
---

# BlurSwitchButtonView

### XML 레이아웃에서 사용
```xml
<com.qmdeve.blurview.widget.BlurSwitchButtonView
    android:id="@+id/switchButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:switchThumbColor="@color/white"
    app:switchTrackColor="@color/gray"
    app:switchTrackOnColor="@color/blue"
    app:switchEnabled="true"
    app:switchChecked="true"/>
```

### API 참조
| 메소드 | 설명 |
|------|---|
| `setChecked` | 스위치 상태 설정 |
| `isChecked` | 스위치 상태 가져오기 |
| `setOnCheckedChangeListener` | 체크 상태 변경 리스너 설정 |
| `setEnabled` | 스위치 활성화/비활성화 설정 |
| `setThumbColor` | 썸브 색상 설정 |
| `setTrackColor` `setTrackOnColor` | 트랙 색상 설정 |

### 속성 설명

| 속성명  | 타입 | 설명 |
|-------------------------------|------|-------------|
| `app:switchChecked`           | `boolean` | 스위치 초기 상태 설정 |
| `app:switchEnabled`           | `boolean` | 스위치 활성화/비활성화 설정 |
| `app:switchThumbColor`        | `color` | 썸브 색상 설정 |
| `app:switchTrackColor`        | `color` | 트랙 색상 설정 |
| `app:switchTrackOnColor`      | `color` | 켜진 상태 트랙 색상 설정 |
| `app:blurRadius`              | `dimension` | 블러 반경 설정 |
| `app:overlayColor`            | `color` | 오버레이 색상 설정 |

---