import{_ as e,c as i,ag as l,o as t}from"./chunks/framework.BHdmj1Zv.js";const g=JSON.parse('{"title":"对象存储设置","description":"","frontmatter":{},"headers":[],"relativePath":"Paper/config/oss.md","filePath":"Paper/config/oss.md","lastUpdated":1741352082000}'),s={name:"Paper/config/oss.md"};function o(r,a,c,n,d,h){return t(),i("div",null,a[0]||(a[0]=[l('<h1 id="对象存储设置" tabindex="-1">对象存储设置 <a class="header-anchor" href="#对象存储设置" aria-label="Permalink to &quot;对象存储设置&quot;">​</a></h1><h2 id="支持平台" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台" aria-label="Permalink to &quot;支持平台&quot;">​</a></h2><ul><li>七牛云存储</li><li>阿里云 OSS<br> OSS对象存储配置注意</li></ul><h1 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h1><h2 id="本地切换成oss" tabindex="-1">本地切换成OSS <a class="header-anchor" href="#本地切换成oss" aria-label="Permalink to &quot;本地切换成OSS&quot;">​</a></h2><p>所有产品在切换成OSS以后，需要手动把本地server/pbulic下面的图片视频等资源文件按目录复制到对应OSS后台。<br><img src="https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&amp;sign=9681f94c20399399d2bb7bdb5a6f9289" alt=""></p><h2 id="阿里云oss" tabindex="-1">阿里云OSS <a class="header-anchor" href="#阿里云oss" aria-label="Permalink to &quot;阿里云OSS&quot;">​</a></h2><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>阿里云OSS上传需要3个参数，配置到系统即可。<br> 参数空间域名<br><img src="https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&amp;sign=5ecf7e3776eebc082503656342d46448" alt=""><br> ACCESS_KEY 和SECRET_KEY<br><img src="https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&amp;sign=f49cfe4f4225d7d8a2f098421be7467d" alt=""><br><img src="https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&amp;sign=37beaab4b9dd349a82b314e3e2560519" alt=""></p><h3 id="跨域设置" tabindex="-1">跨域设置 <a class="header-anchor" href="#跨域设置" aria-label="Permalink to &quot;跨域设置&quot;">​</a></h3><p>阿里云OSS需要跨域设置，否则某些场景可能会加载图片失败。填写项目要设置的域名。<br><img src="https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&amp;sign=6a2d6a95f0d160b24ab01ea5d44f0b6c" alt=""><br><img src="https://md.likeshop.cn/server/index.php?s=/api/attachment/visitFile&amp;sign=22328b8c860971754bd83c1173bf371b" alt=""></p><ul><li>腾讯云 COS</li></ul><h2 id="腾讯云-cos-配置指南" tabindex="-1">腾讯云 COS 配置指南 <a class="header-anchor" href="#腾讯云-cos-配置指南" aria-label="Permalink to &quot;腾讯云 COS 配置指南&quot;">​</a></h2><h3 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-label="Permalink to &quot;配置说明&quot;">​</a></h3><p>腾讯云 COS 的配置为可选配置，请根据实际业务需求进行配置。</p><h3 id="详细配置步骤" tabindex="-1">详细配置步骤 <a class="header-anchor" href="#详细配置步骤" aria-label="Permalink to &quot;详细配置步骤&quot;">​</a></h3><ol><li><p><strong>登录腾讯云控制台</strong></p><ul><li>访问 <a href="https://cloud.tencent.com/" target="_blank" rel="noreferrer">腾讯云官网</a></li><li>使用腾讯云账号登录</li><li>点击右上角头像 -&gt; 【访问管理】 <img src="https://doc.chatmoney.cn/docs/images/general/config/oss/cos-1.png" alt=""></li></ul></li><li><p><strong>获取 API 密钥</strong></p><ul><li>进入【访问密钥】-&gt;【API 密钥管理】</li><li>如无密钥，请新建密钥</li><li>登录系统管理后台 -&gt; 【系统设置】-&gt;【存储设置】-&gt; 腾讯云 COS -&gt; 【设置】</li><li>将腾讯云的 SecretId 和 SecretKey 复制到系统后台对应位置 <img src="https://doc.chatmoney.cn/docs/images/general/config/oss/cos-2.png" alt=""></li></ul></li><li><p><strong>创建存储桶</strong></p><ul><li>进入【云产品】-&gt;【对象存储】 <img src="https://doc.chatmoney.cn/docs/images/general/config/oss/cos-3.png" alt=""></li><li>点击【创建存储桶】</li><li>选择【所属地址】</li><li>填写【存储桶名称】</li><li>选择【公有读私有写】</li><li>点击【下一步】 <img src="https://doc.chatmoney.cn/docs/images/general/config/oss/cos-4.png" alt=""></li><li>确认配置后点击【创建】 <img src="https://doc.chatmoney.cn/docs/images/general/config/oss/cos-5.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/oss/cos-6.png" alt=""></li></ul></li><li><p><strong>完成配置</strong></p><ul><li>进入存储桶【概况】页面</li><li>复制以下信息到系统后台： <ul><li>存储桶名称 -&gt; 存储空间名称</li><li>访问域名 -&gt; 空间域名</li><li>所属地区 -&gt; REGION</li></ul></li><li>开启【状态】</li><li>点击【保存】 <img src="https://doc.chatmoney.cn/docs/images/general/config/oss/cos-7.png" alt=""></li></ul></li></ol><h2 id="注意事项-1" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项-1" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><h3 id="数据迁移指南" tabindex="-1">数据迁移指南 <a class="header-anchor" href="#数据迁移指南" aria-label="Permalink to &quot;数据迁移指南&quot;">​</a></h3><ul><li><p><strong>PHP 版本</strong></p><ol><li>将 <code>server/public</code> 目录下的 <code>resource</code> 和 <code>uploads</code> 目录复制到 OSS 根目录</li><li>确保原有资源图片可正常显示</li></ol></li><li><p><strong>Java 版本</strong></p><ol><li>将 <code>/public/uploads</code> 目录复制到 OSS 根目录</li><li>新建 <code>api</code> 目录</li><li>将 <code>server/like-common/src/main/resources/static</code> 目录复制到 <code>api</code> 中</li><li>上传完成后，图片路径示例：<code>/api/static/xxxxp.png</code></li></ol></li></ul><h3 id="跨域设置-1" tabindex="-1">跨域设置 <a class="header-anchor" href="#跨域设置-1" aria-label="Permalink to &quot;跨域设置&quot;">​</a></h3><p>使用对象存储后，需配置跨域访问权限：</p>',22)]))}const m=e(s,[["render",o]]);export{g as __pageData,m as default};
