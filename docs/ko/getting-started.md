---
prev: false
next:
  text: 'BlurView 사용'
  link: '/ko/quick-start/BlurView.md'
---

# 빠른 시작

## 스크린샷
|                                BlurView                                |                              BlurButtonView                              |                                ProgressiveBlurView                                |
|:----------------------------------------------------------------------:|:------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/eqsn/BlurView.jpeg" alt="Image" style="border-radius: 8px;" /> | <img src="https://cloud.qmdeve.com/f/YyT3/BlurButton.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/xYug/ProgressiveBlurView.jpeg" alt="Image" style="border-radius: 10px;" /> |

|                                BlurTitleBarView                                |                                BlurSwitchButtonView                                 |                              BlurBottomNavigationView                              |
|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/Rbhn/BlurTitlebarView.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/3Nfl/BlurSwitchButton_true.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/gecr/BlurBottomNavigation.jpeg" alt="Image" style="border-radius: 10px;" /> |

### 프로젝트 요구 사항
|  최소 SDK  | 컴파일 SDK |  Java 버전  |
|-----------|-------------|----------------|  
| `API 21+` | `API 34+`      | `Java 11+` |

## 통합

### 의존성 추가 <Badge type="tip" text="v{{VERSION}}" />

모듈의 `build.gradle` 파일에 의존성을 추가합니다：

::: code-group

```groovy [build.gradle]
dependencies {
   // Core Library (Required)
   implementation '{{GROUP_ID}}:core:{{VERSION}}'

   // Navigation Support (Optional)
   implementation '{{GROUP_ID}}:navigation:{{VERSION}}'

   // Image Loading Transformations (Optional - Glide/Picasso)
   implementation '{{GROUP_ID}}:transform:{{VERSION}}'
}
```

```kotlin [build.gradle.kts]
dependencies {
   // Core Library (Required)
   implementation("{{GROUP_ID}}:core:{{VERSION}}")

   // Navigation Support (Optional)
   implementation("{{GROUP_ID}}:navigation:{{VERSION}}")

   // Image Loading Transformations (Optional - Glide/Picasso)
   implementation("{{GROUP_ID}}:transform:{{VERSION}}")
}
```
:::