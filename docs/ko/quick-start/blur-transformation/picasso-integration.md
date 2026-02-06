---
prev:
  text: 'Glide'
  link: '/ko/quick-start/blur-transformation/glide-integration.md'
next: false
---

# Picasso

::: warning
`Transform` 을 사용하기 전에 Picasso 라이브러리를 통합했는지 확인하세요。
```groovy :no-line-numbers
dependencies {
    // QmBlurView Transform 의존성
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Picasso 의존성
    implementation 'com.squareup.picasso:picasso:2.8'
}
```
:::

### 클래스 가져오기
```java :no-line-numbers
// Picasso 메인 클래스
import com.squareup.picasso.Picasso;

// QmBlurView 블러 변환 클래스
import com.qmdeve.blurview.transform.picasso.BlurTransformation;
```

### 사용 예제
```java :no-line-numbers
Picasso.get()
         .load(R.drawable.image)
         .fit()
         .centerCrop()
         .transform(

            /**
            * 블러 변환 사용
            * 클래스 가져오기: com.qmdeve.blurview.transform.picasso.BlurTransformation
            *
            * new BlurTransformation() // 기본 블러 반경 25f, 둥근 모서리 0
            * new BlurTransformation(float blurRadius) // 사용자 정의 블러 반경, 둥근 모서리 없음
            * new BlurTransformation(float blurRadius, float roundedCorners) // 사용자 정의 블러 반경과 둥근 모서리
            */
            new BlurTransformation(25f, 50)
         )
         .into(imageView);
```

### 생성자
| 생성자                                 | 설명               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | 기본 블러 반경 25f, 둥근 모서리 없이 블러 변환 생성 |
| `BlurTransformation(float blurRadius)`  | 사용자 정의 블러 반경, 둥근 모서리 없이 블러 변환 생성 |
| `BlurTransformation(float blurRadius, float roundedCorners)` | 사용자 정의 블러 반경과 사용자 정의 둥근 모서리로 블러 변환 생성 |