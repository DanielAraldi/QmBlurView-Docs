---
prev:
  text: 'BlurFloatingButtonView の使用'
  link: '/ja/quick-start/BlurFloatingButtonView.md'
next: false
---

# BlurBottomNavigationView

### XML レイアウトでの使用
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

### API リファレンス
| メソッド | 説明 |
|------|---|
| `setMenu` | メニューを設定 |
| `setOnNavigationItemSelectedListener` | ナビゲーションアイテム選択リスナーを設定 |
| `setOnNavigationItemReselectedListener` | ナビゲーションアイテム再選択リスナーを設定 |
| `getMenu` | 現在のメニューを取得 |
| `setSelectedItemId` | 選択されたアイテムを設定 |
| `setItemIconTintList` | アイコンの色調リストを設定 |
| `setItemTextColor` | アイテムのテキスト色を設定 |

### 属性説明

| 属性名  | 型 | 説明 |
|-------------------------------|------|-------------|
| `app:menu` | `reference` | ボトムナビゲーションメニューリソースを設定 |
| `app:itemIconTint` | `color` | アイコンの色調リストを設定 |
| `app:itemTextColor` | `color` | アイテムのテキスト色を設定 |
| `app:itemBackground` | `drawable` | アイテムの背景を設定 |
| `app:elevation` | `dimension` | エレベーションを設定 |
| `app:labelVisibilityMode` | `enum` | ラベルの表示モードを設定 (labeled, selected, unlabeled, auto) |

---