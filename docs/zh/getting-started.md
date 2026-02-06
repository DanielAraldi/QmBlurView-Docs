---
prev: false
next: 
  text: '使用 BlurView'
  link: '/zh/quick-start/BlurView.md'
---

# 快速开始

## 预览
|                                BlurView                                |                              BlurButtonView                              |                                ProgressiveBlurView                                |
|:----------------------------------------------------------------------:|:------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/eqsn/BlurView.jpeg" alt="Image" style="border-radius: 8px;" /> | <img src="https://cloud.qmdeve.com/f/YyT3/BlurButton.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/xYug/ProgressiveBlurView.jpeg" alt="Image" style="border-radius: 10px;" /> |

|                                BlurTitleBarView                                |                                BlurSwitchButtonView                                 |                              BlurBottomNavigationView                              |
|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/Rbhn/BlurTitlebarView.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/3Nfl/BlurSwitchButton_true.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/gecr/BlurBottomNavigation.jpeg" alt="Image" style="border-radius: 10px;" /> |

### 项目要求
|  Min SDK  | Compile SDK |  Java Version  |
|-----------|-------------|----------------|
| `API 21+` | `API 34+`      | `Java 11+` |

## 集成

### 添加依赖项 <Badge type="tip" text="v{{VERSION}}" />
在模块的 `build.gradle` 文件中添加依赖项：
::: code-group
```groovy [build.gradle]
dependencies {
   // 核心依赖（必须）
   implementation '{{GROUP_ID}}:core:{{VERSION}}'

   // 导航依赖（可选）
   implementation '{{GROUP_ID}}:navigation:{{VERSION}}'

   // 图像加载 Transform（可选）
   implementation '{{GROUP_ID}}:transform:{{VERSION}}'
}
```

```kotlin [build.gradle.kts]
dependencies {
   // 核心依赖（必须）
   implementation("{{GROUP_ID}}:core:{{VERSION}}")

   // 导航依赖（可选）
   implementation("{{GROUP_ID}}:navigation:{{VERSION}}")

   // 图像加载 Transform（可选）
   implementation("{{GROUP_ID}}:transform:{{VERSION}}")
}
```
:::