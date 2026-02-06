---
prev:
  text: 'Use BlurSwitchButtonView'
  link: '/quick-start/BlurSwitchButtonView.md'
next:
  text: 'Use BlurBottomNavigationView'
  link: '/quick-start/BlurBottomNavigationView.md'
---

# BlurFloatingButtonView

### Use in XML layout
```xml
<com.qmdeve.blurview.widget.BlurFloatingButtonView 
    android:id="@+id/blurFloatingButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

### Use the code
```java
BlurFloatingButtonView floatingButtonView = findViewById(R.id.blurFloatingButton);

floatingButtonView.setOnClickListener(view -> {
    Toast.makeText(BlurFloatingButtonActivity.this, "Click", Toast.LENGTH_SHORT).show();
});

floatingButtonView.setOnLongPressListener(view -> {
    Toast.makeText(this, "Long Press", Toast.LENGTH_SHORT).show();
});

floatingButtonView.setPosition(BlurFloatingButtonView.POSITION_RIGHT);

floatingButtonView.setIcon();

floatingButtonView.setIconTint();

floatingButtonView.setIconSize();

floatingButtonView.setButtonSize();

floatingButtonView.setOverlayColor();

floatingButtonView.setCornerRadius();
```