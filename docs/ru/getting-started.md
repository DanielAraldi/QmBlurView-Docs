---
prev: false
next: 
  text: 'Использовать BlurView'
  link: '/ru/quick-start/BlurView.md'
---

# Начинай быстро
## Примеры скриншотов
|                                BlurView                                |                              BlurButtonView                              |                                ProgressiveBlurView                                |
|:----------------------------------------------------------------------:|:------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/eqsn/BlurView.jpeg" alt="Image" style="border-radius: 8px;" /> | <img src="https://cloud.qmdeve.com/f/YyT3/BlurButton.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/xYug/ProgressiveBlurView.jpeg" alt="Image" style="border-radius: 10px;" /> |

|                                BlurTitleBarView                                |                                BlurSwitchButtonView                                 |                              BlurBottomNavigationView                              |
|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/Rbhn/BlurTitlebarView.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/3Nfl/BlurSwitchButton_true.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/gecr/BlurBottomNavigation.jpeg" alt="Image" style="border-radius: 10px;" /> |

### Требования к проекту
|  Min SDK  | Compile SDK |  Java Version  |
|-----------|-------------|----------------|
| `API 21+` | `API 34+`      | `Java 11+` |

## Установка

### Добавление зависимостей <Badge type="tip" text="v{{VERSION}}" />
В модуле `build.gradle` файле добавьте зависимости:
::: code-group
```groovy [build.gradle]
dependencies {
   // Ядро (обязательно)
   implementation '{{GROUP_ID}}:core:{{VERSION}}'

   // Навигация (опционально)
   implementation '{{GROUP_ID}}:navigation:{{VERSION}}'

   // Image Load Transform (опционально)
   implementation '{{GROUP_ID}}:transform:{{VERSION}}'
}
```

```kotlin [build.gradle.kts]
dependencies {
   // Ядро (обязательно)
   implementation("{{GROUP_ID}}:core:{{VERSION}}")

   // Навигация (опционально)
   implementation("{{GROUP_ID}}:navigation:{{VERSION}}")

   // Image Load Transform (опционально)
   implementation("{{GROUP_ID}}:transform:{{VERSION}}")
}
```
:::