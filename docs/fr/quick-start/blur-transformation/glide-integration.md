---
prev: false
next:
  text: 'Picasso'
  link: '/fr/quick-start/blur-transformation/picasso-integration.md'
---

# Glide

::: warning
Avant d'utiliser `Transform`, assurez-vous d'avoir intégré la bibliothèque Glide.
```groovy :no-line-numbers
dependencies {
    // Dépendance QmBlurView Transform
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Dépendance Glide
    implementation 'com.github.bumptech.glide:glide:5.0.5'
}
```
:::

### Importer la classe
```java :no-line-numbers
// Classe principale Glide
import com.bumptech.glide.Glide;

// Classe de transformation floue QmBlurView
import com.qmdeve.blurview.transform.glide.BlurTransformation;
```

### Exemple d'utilisation
```java :no-line-numbers
Glide.with(this)
    .load(R.drawable.image)
    .apply(new RequestOptions().transform(
           new CenterCrop(),

         /**
          * Utiliser la transformation floue
          * new BlurTransformation() // Rayon de flou par défaut 25f, sans coins arrondis
          * new BlurTransformation(float blurRadius) // Rayon de flou personnalisé, sans coins arrondis
          * new BlurTransformation(float blurRadius, float roundedCorners) // Rayon de flou personnalisé et coins arrondis
          */
           new BlurTransformation(24f, 50)
       ))
    .into(imageView);
```

### Constructeurs
| Constructeur                                 | Description               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | Crée une transformation floue avec un rayon de flou par défaut de 25f et sans coins arrondis |
| `BlurTransformation(float blurRadius)`  | Crée une transformation floue avec un rayon de flou personnalisé et sans coins arrondis |
| `BlurTransformation(float blurRadius, float roundedCorners)` | Crée une transformation floue avec un rayon de flou personnalisé et des coins arrondis personnalisés |