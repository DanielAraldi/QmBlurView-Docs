---
prev:
  text: 'Utiliser ProgressiveBlurView'
  link: '/fr/quick-start/ProgressiveBlurView.md'
next:
  text: 'Utiliser BlurSwitchButtonView'
  link: '/fr/quick-start/BlurSwitchButtonView.md'
---

# BlurTitlebarView

### Utilisation dans la mise en page XML
```xml
<com.qmdeve.blurview.widget.BlurTitlebarView
    android:id="@+id/titlebar"
    android:layout_width="match_parent"
    android:layout_height="?android:attr/actionBarSize"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:titleText="Barre de titre"
    app:titleTextColor="@color/black"
    app:titleTextSize="18sp"
    app:titleTextBold="true"
    app:leftIcon="?android:attr/homeAsUpIndicator"
    app:rightIcon="?android:attr/actionModeWebSearchDrawable"/>
```

### Référence API
| Méthode | Description |
|------|---|
| `setTitle` | Définir le titre |
| `setTitleColor` | Définir la couleur du titre |
| `setTitleSize` | Définir la taille du titre |
| `setTitleBold` | Définir le titre en gras |
| `setLeftIcon` `setRightIcon` | Définir les icônes |
| `setLeftIconClickListener` `setRightIconClickListener` | Définir les écouteurs de clic des icônes |

### Description des attributs

| Nom de l'attribut  | Type | Description |
|-------------------------------|------|-------------|
| `app:titleText`              | `string` | Définir le texte du titre |
| `app:titleTextColor`         | `color` | Définir la couleur du titre |
| `app:titleTextSize`          | `dimension` | Définir la taille du titre |
| `app:titleTextBold`          | `boolean` | Définir le titre en gras |
| `app:leftIcon` `app:rightIcon` | `reference` | Définir les icônes |
| `app:blurRadius`              | `dimension` | Définir le rayon de flou |
| `app:overlayColor`            | `color` | Définir la couleur de superposition |

---