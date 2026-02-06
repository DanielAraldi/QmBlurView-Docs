---
prev: false
next:
  text: 'Utiliser BlurView'
  link: '/fr/quick-start/BlurView.md'
---

# Démarrage rapide

## Captures d'écran
|                                BlurView                                |                              BlurButtonView                              |                                ProgressiveBlurView                                |
|:----------------------------------------------------------------------:|:------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/eqsn/BlurView.jpeg" alt="Image" style="border-radius: 8px;" /> | <img src="https://cloud.qmdeve.com/f/YyT3/BlurButton.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/xYug/ProgressiveBlurView.jpeg" alt="Image" style="border-radius: 10px;" /> |

|                                BlurTitleBarView                                |                                BlurSwitchButtonView                                 |                              BlurBottomNavigationView                              |
|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/Rbhn/BlurTitlebarView.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/3Nfl/BlurSwitchButton_true.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/gecr/BlurBottomNavigation.jpeg" alt="Image" style="border-radius: 10px;" /> |

### Exigences du projet
|  SDK minimal  | SDK de compilation |  Version Java  |
|-----------|-------------|----------------|  
| `API 21+` | `API 34+`      | `Java 11+` |

## Intégration

### Ajout de dépendances <Badge type="tip" text="v{{VERSION}}" />

Ajoutez la dépendance dans le fichier `build.gradle` du module：

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