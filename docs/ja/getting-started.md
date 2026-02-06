---
prev: false
next:
  text: 'BlurView の使用'
  link: '/ja/quick-start/BlurView.md'
---

# クイックスタート

## スクリーンショット
|                                BlurView                                |                              BlurButtonView                              |                                ProgressiveBlurView                                |
|:----------------------------------------------------------------------:|:------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/eqsn/BlurView.jpeg" alt="Image" style="border-radius: 8px;" /> | <img src="https://cloud.qmdeve.com/f/YyT3/BlurButton.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/xYug/ProgressiveBlurView.jpeg" alt="Image" style="border-radius: 10px;" /> |

|                                BlurTitleBarView                                |                                BlurSwitchButtonView                                 |                              BlurBottomNavigationView                              |
|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/Rbhn/BlurTitlebarView.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/3Nfl/BlurSwitchButton_true.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/gecr/BlurBottomNavigation.jpeg" alt="Image" style="border-radius: 10px;" /> |

### プロジェクト要件
|  最小 SDK  | コンパイル SDK |  Java バージョン  |
|-----------|-------------|----------------|  
| `API 21+` | `API 34+`      | `Java 11+` |

## 統合

### 依存関係の追加 <Badge type="tip" text="v{{VERSION}}" />

モジュールの `build.gradle` ファイルに依存関係を追加します：

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