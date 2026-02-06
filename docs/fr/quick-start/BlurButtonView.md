---
prev:
  text: 'Utiliser BlurView'
  link: '/fr/quick-start/BlurView.md'
next:
  text: 'Utiliser ProgressiveBlurView'
  link: '/fr/quick-start/ProgressiveBlurView.md'
---

# BlurButtonView

### Utilisation dans la mise en page XML
```xml
<com.qmdeve.blurview.widget.BlurButtonView
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Test de bouton"
    app:buttonCornerRadius="12dp"
    app:buttonIconPadding="8dp"
    app:buttonIconSize="24dp"
    app:buttonTextBold="true"
    aap:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    android:icon="?android:attr/actionModeWebSearchDrawable"
    app:buttonIconTint="@color/black"/>
```

### Référence API
| Méthode | Description |
|------|---|
| `setText` | Définir le texte |
| `setButtonCornerRadius`     | Définir le rayon des coins du bouton |
| `setTextSize`               | Définir la taille du texte |
| `setTextColor`              | Définir la couleur du texte |
| `setTextBold`               | Définir le texte en gras |
| `setIcon` `setIconResource` | Définir l'icône |
| `setIconSize`               | Définir la taille de l'icône |
| `setIconPadding`            | Définir le rembourrage de l'icône |
| `setIconTint`               | Définir la teinte de l'icône |

### Description des attributs

| Nom de l'attribut  | Type | Description |
|-------------------------------|------|-------------|
| `app:buttonCornerRadius`      | `dimension` | Définir le rayon des coins du bouton |
| `app:buttonIconPadding`       | `dimension` | Définir le rembourrage de l'icône |
| `app:buttonIconSize`          | `dimension` | Définir la taille de l'icône |
| `app:buttonTextBold`          | `boolean` | Définir le texte en gras |
| `app:blurRadius`              | `dimension` | Définir le rayon de flou |
| `app:overlayColor`            | `color` | Définir la couleur de superposition |
| `app:buttonIconTint`          | `color`| Définir la teinte de l'icône |
| `android:icon`                | - | Définir l'icône |
| `android:text`                | - | Définir le texte |
| `android:textSize`            | - | Définir la taille du texte |

---