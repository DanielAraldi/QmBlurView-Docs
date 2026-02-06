---
prev:
  text: 'Utiliser BlurFloatingButtonView'
  link: '/fr/quick-start/BlurFloatingButtonView.md'
next: false
---

# BlurBottomNavigationView

### Utilisation dans la mise en page XML
```xml
<com.qmdeve.blurview.widget.BlurBottomNavigationView
    android:id="@+id/bottomNavigation"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom"
    app:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    app:menu="@menu/bottom_nav_menu"
    app:itemIconTint="@color/bottom_nav_icon_tint"
    app:itemTextColor="@color/bottom_nav_text_color"
    app:itemBackground="@drawable/bottom_nav_item_background"
    app:elevation="8dp"
    app:labelVisibilityMode="labeled"/>
```

### Référence API
| Méthode | Description |
|------|---|
| `setMenu` | Définir le menu |
| `setOnNavigationItemSelectedListener` | Définir l'écouteur de sélection d'élément de navigation |
| `setOnNavigationItemReselectedListener` | Définir l'écouteur de resélection d'élément de navigation |
| `getMenu` | Obtenir le menu actuel |
| `setSelectedItemId` | Définir l'élément sélectionné |
| `setItemIconTintList` | Définir la liste de teintes d'icône |
| `setItemTextColor` | Définir la couleur du texte des éléments |

### Description des attributs

| Nom de l'attribut  | Type | Description |
|-------------------------------|------|-------------|
| `app:menu` | `reference` | Définir la ressource de menu de navigation inférieure |
| `app:itemIconTint` | `color` | Définir la liste de teintes d'icône |
| `app:itemTextColor` | `color` | Définir la couleur du texte des éléments |
| `app:itemBackground` | `drawable` | Définir l'arrière-plan des éléments |
| `app:elevation` | `dimension` | Définir l'élévation |
| `app:labelVisibilityMode` | `enum` | Définir le mode de visibilité de l'étiquette (labeled, selected, unlabeled, auto) |

---