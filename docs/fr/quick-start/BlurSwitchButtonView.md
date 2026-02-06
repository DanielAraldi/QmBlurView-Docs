---
prev:
  text: 'Utiliser BlurTitlebarView'
  link: '/fr/quick-start/BlurTitlebarView.md'
next:
  text: 'Utiliser BlurFloatingButtonView'
  link: '/fr/quick-start/BlurFloatingButtonView.md'
---

# BlurSwitchButtonView

### Utilisation dans la mise en page XML
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

### Référence API
| Méthode | Description |
|------|---|
| `setChecked` | Définir l'état du commutateur |
| `isChecked` | Obtenir l'état du commutateur |
| `setOnCheckedChangeListener` | Définir l'écouteur de changement d'état |
| `setEnabled` | Activer/désactiver le commutateur |
| `setThumbColor` | Définir la couleur du pouce |
| `setTrackColor` `setTrackOnColor` | Définir la couleur de la piste |

### Description des attributs

| Nom de l'attribut  | Type | Description |
|-------------------------------|------|-------------|
| `app:switchChecked`           | `boolean` | Définir l'état initial du commutateur |
| `app:switchEnabled`           | `boolean` | Activer/désactiver le commutateur |
| `app:switchThumbColor`        | `color` | Définir la couleur du pouce |
| `app:switchTrackColor`        | `color` | Définir la couleur de la piste |
| `app:switchTrackOnColor`      | `color` | Définir la couleur de la piste en état actif |
| `app:blurRadius`              | `dimension` | Définir le rayon de flou |
| `app:overlayColor`            | `color` | Définir la couleur de superposition |

---