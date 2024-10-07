

[项目介绍](/) <!-- 将用户导航至根目录下的 index.html -->
[项目介绍](/项目介绍/) <!-- 将用户导航至目录 foo 下的 index.html -->
[foo heading](./#heading) <!-- 将用户锚定到目录 foo 下的index文件中的一个标题上 -->
[bar - three](../bar/three) <!-- 可以省略扩展名 -->
[bar - three](../bar/three.md) <!-- 可以添加 .md -->
[bar - four](../bar/four.html) <!-- 或者可以添加 .html -->





# 一级标题
## 二级标题
### 三级标题



这是第一段。

这是第二段。

*斜体* 或 _斜体_
**粗体** 或 __粗体__

- 项目1
- 项目2
- 项目3

1. 项目1
2. 项目2
3. 项目3

[豆包MarsCode](https://www.doubao.com/marscode)



7. **引用**
使用 `>` 符号来表示引用，例如：
```markdown
> 这是一个引用。


```python
print("Hello, World!")



| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 数据1 | 数据2 | 数据3 |



GitHub 风格的表格
输入


| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
输出

Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成结构化的HTML（或者其他格式）。以下是一些常用的Markdown语法：

### 标题
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### 强调
```markdown
*斜体文本*
_斜体文本_

**粗体文本**
__粗体文本__

**_同时斜体和粗体_**
```

### 列表
#### 无序列表
```markdown
- 列表项
- 列表项
  - 子列表项
```

#### 有序列表
```markdown
1. 第一项
2. 第二项
3. 第三项
```

### 链接
```markdown
[链接文本](链接地址)
```

### 图片
```markdown
![图片描述](图片地址)
```

### 引用
```markdown
> 这是一个引用
```

### 代码
```markdown
`代码片段`

```代码块
```
```

### 分隔线
```markdown
---
或者

***
```

### 表格
```markdown
| 表头 | 表头 |
| ---- | ---- |
| 单元 | 单元 |
| 单元 | 单元 |
```

### 任务列表
```markdown
- [x] 完成的任务
- [ ] 未完成的任务
```

### 内嵌HTML
```html
<div>这是一个HTML块</div>
```

### 脚注
```markdown
这是一个脚注的例子[^1]

[^1]: 这是脚注的内容
```

### 缩写
```markdown
*[HTML]: Hyper Text Markup Language
HTML是一种超文本标记语言。
```

### 高亮
```markdown
==高亮文本==
```

### 删除线
```markdown
~~删除线文本~~
```

### 标记
```markdown
==标记文本==
```

### 自定义容器
```markdown
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::
```

### 锚点
```markdown
[链接到段落](#段落标题)
```

### 转义字符
```markdown
\* 星号不会被解析为斜体
```

这只是Markdown语法的一部分，Markdown的语法非常灵活，可以根据需要进行扩展和自定义。