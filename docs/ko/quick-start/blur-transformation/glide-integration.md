---
prev: false
next:
  text: 'Picasso'
  link: '/ko/quick-start/blur-transformation/picasso-integration.md'
---

# Glide

::: warning
`Transform` 을 사용하기 전에 Glide 라이브러리를 통합했는지 확인하세요。
```groovy :no-line-numbers
dependencies {
    // QmBlurView Transform 의존성
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Glide 의존성
    implementation 'com.github.bumptech.glide:glide:5.0.5'
}
```
:::

### 클래스 가져오기
```java :no-line-numbers
// Glide 메인 클래스
import com.bumptech.glide.Glide;

// QmBlurView 블러 변환 클래스
import com.qmdeve.blurview.transform.glide.BlurTransformation;
```

### 사용 예제
```java :no-line-numbers
Glide.with(this)
    .load(R.drawable.image)
    .apply(new RequestOptions().transform(
           new CenterCrop(),

         /**
          * 블러 변환 사용
          * new BlurTransformation() // 기본 블러 반경 25f, 둥근 모서리 없음
          * new BlurTransformation(float blurRadius) // 사용자 정의 블러 반경, 둥근 모서리 없음
          * new BlurTransformation(float blurRadius, float roundedCorners) // 사용자 정의 블러 반경과 둥근 모서리
          */
           new BlurTransformation(24f, 50)
       ))
    .into(imageView);
```

### 생성자
| 생성자                                 | 설명               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | 기본 블러 반경 25f, 둥근 모서리 없이 블러 변환 생성 |
| `BlurTransformation(float blurRadius)`  | 사용자 정의 블러 반경, 둥근 모서리 없이 블러 변환 생성 |
| `BlurTransformation(float blurRadius, float roundedCorners)` | 사용자 정의 블러 반경과 사용자 정의 둥근 모서리로 블러 변환 생성 |