---
prev: ../getting-started
next: BlurButtonView.md
---

# BlurView

#### Utilisation dans la mise en page XML
```xml
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="20dp"
    app:overlayColor="#66FFFFFF" 
    app:cornerRadius="24dp"/>
```

#### Configuration des propriétés de la vue par code

```java
BlurView blurView = findViewById(R.id.blurView);
blurView.setBlurRadius(20f);
blurView.setOverlayColor(0x66FFFFFF);
blurView.setCornerRadius(20);
```

#### Description des attributs

| Nom de l'attribut         | Type | Valeur par défaut | Explication |
|------------------------|------|--------|-------------|
| `app:blurRadius`       | `dimension` | `10` | Rayon de flou |
| `app:overlayColor`     | `color` | `#AAFFFFFF` | Couleur de superposition |
| `app:cornerRadius`     | `dimension` | `0` | Rayon des coins de la vue |
| `app:setDownsampleFactor` | `float` | `0` | Facteur de rééchantillonnage, une valeur plus élevée signifie de meilleures performances mais un effet de flou moins bon |

### Référence API
| Nom de la méthode               | Description       |
|--------------------------|------------------|
| `setBlurRadius(float)`    | Définir le rayon de flou   |
| `setOverlayColor(int)`    | Définir la couleur de superposition |
| `setCornerRadius(float)`  | Définir le rayon des coins |
| `setDownsampleFactor(float)` | Définir le facteur de rééchantillonnage |