---
prev:
  text: 'Glide'
  link: '/fr/quick-start/blur-transformation/glide-integration.md'
next: false
---

# Picasso

::: warning
Avant d'utiliser `Transform`, assurez-vous d'avoir intégré la bibliothèque Picasso.
```groovy :no-line-numbers
dependencies {
    // Dépendance QmBlurView Transform
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Dépendance Picasso
    implementation 'com.squareup.picasso:picasso:2.8'
}
```
:::

### Importer la classe
```java :no-line-numbers
// Classe principale Picasso
import com.squareup.picasso.Picasso;

// Classe de transformation floue QmBlurView
import com.qmdeve.blurview.transform.picasso.BlurTransformation;
```

### Exemple d'utilisation
```java :no-line-numbers
Picasso.get()
         .load(R.drawable.image)
         .fit()
         .centerCrop()
         .transform(

            /**
            * Utilisation de la transformation floue
            * Importer la classe: com.qmdeve.blurview.transform.picasso.BlurTransformation
            *
            * new BlurTransformation() // Rayon de flou par défaut 25f, coins arrondis 0
            * new BlurTransformation(float blurRadius) // Rayon de flou personnalisé, sans coins arrondis
            * new BlurTransformation(float blurRadius, float roundedCorners) // Rayon de flou personnalisé et coins arrondis
            */
            new BlurTransformation(25f, 50)
         )
         .into(imageView);
```

### Constructeurs
| Constructeur                                 | Description               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | Crée une transformation floue avec un rayon de flou par défaut de 25f et sans coins arrondis |
| `BlurTransformation(float blurRadius)`  | Crée une transformation floue avec un rayon de flou personnalisé et sans coins arrondis |
| `BlurTransformation(float blurRadius, float roundedCorners)` | Crée une transformation floue avec un rayon de flou personnalisé et des coins arrondis personnalisés |