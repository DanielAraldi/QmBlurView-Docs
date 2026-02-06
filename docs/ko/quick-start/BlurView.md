---
prev: ../getting-started
next: BlurButtonView.md
---

# BlurView

#### XML 레이아웃에서 사용
```xml
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="20dp"
    app:overlayColor="#66FFFFFF" 
    app:cornerRadius="24dp"/>
```

#### 코드로 뷰 속성 설정

```java
BlurView blurView = findViewById(R.id.blurView);
blurView.setBlurRadius(20f);
blurView.setOverlayColor(0x66FFFFFF);
blurView.setCornerRadius(20);
```

#### 속성 설명

| 속성명         | 타입 | 기본값 | 설명 |
|------------------------|------|--------|-------------|
| `app:blurRadius`       | `dimension` | `10` | 블러 반경 |
| `app:overlayColor`     | `color` | `#AAFFFFFF` | 오버레이 색상 |
| `app:cornerRadius`     | `dimension` | `0` | 뷰의 모서리 반경 |
| `app:setDownsampleFactor` | `float` | `0` | 다운샘플링 계수, 값이 높을수록 성능은 좋지만 블러 효과가 나빠집니다 |

### API 참조
| 메소드명               | 설명       |
|--------------------------|------------------|
| `setBlurRadius(float)`    | 블러 반경 설정   |
| `setOverlayColor(int)`    | 오버레이 색상 설정 |
| `setCornerRadius(float)`  | 모서리 반경 설정 |
| `setDownsampleFactor(float)` | 다운샘플링 계수 설정 |