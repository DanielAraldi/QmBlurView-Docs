---
prev:
  text: 'Utiliser BlurSwitchButtonView'
  link: '/fr/quick-start/BlurSwitchButtonView.md'
next:
  text: 'Utiliser BlurBottomNavigationView'
  link: '/fr/quick-start/BlurBottomNavigationView.md'
---

# BlurFloatingButtonView

### Utilisation dans la mise en page XML
```xml
<com.qmdeve.blurview.widget.BlurFloatingButtonView
    android:id="@+id/fab"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom|end"
    android:layout_margin="16dp"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:fabSize="normal"
    app:fabIcon="?android:attr/actionModeWebSearchDrawable"
    app:fabIconTint="@color/black"
    app:fabBackgroundTint="@color/white"
    app:fabElevation="8dp"
    app:fabRippleColor="@color/gray"/>
```

### Référence API
| Méthode | Description |
|------|---|
| `setIcon` | Définir l'icône |
| `setIconTint` | Définir la teinte de l'icône |
| `setBackgroundTint` | Définir la teinte de fond |
| `setRippleColor` | Définir la couleur de ripple |
| `setElevation` | Définir l'élévation |
| `setOnClickListener` | Définir l'écouteur de clic |
| `setEnabled` | Activer/désactiver le bouton |

### Description des attributs

| Nom de l'attribut  | Type | Description |
|-------------------------------|------|-------------|
| `app:fabSize`                | `enum` | Définir la taille du FAB (normal, mini, auto) |
| `app:fabIcon`                | `reference` | Définir l'icône |
| `app:fabIconTint`            | `color` | Définir la teinte de l'icône |
| `app:fabBackgroundTint`      | `color` | Définir la teinte de fond |
| `app:fabElevation`           | `dimension` | Définir l'élévation |
| `app:fabRippleColor`         | `color` | Définir la couleur de ripple |
| `app:blurRadius`              | `dimension` | Définir le rayon de flou |
| `app:overlayColor`            | `color` | Définir la couleur de superposition |

---