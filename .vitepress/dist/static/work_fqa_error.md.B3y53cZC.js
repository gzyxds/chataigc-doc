import{_ as l,c as r,o,ag as i}from"./chunks/framework.BHAHxt1l.js";const u=JSON.parse('{"title":"🚨 常见错误问题处理","description":"","frontmatter":{},"headers":[],"relativePath":"work/fqa/error.md","filePath":"work/fqa/error.md","lastUpdated":1737639082000}'),e={name:"work/fqa/error.md"};function t(n,a,s,h,c,d){return o(),r("div",null,a[0]||(a[0]=[i('<h1 id="🚨-常见错误问题处理" tabindex="-1">🚨 常见错误问题处理 <a class="header-anchor" href="#🚨-常见错误问题处理" aria-label="Permalink to &quot;🚨 常见错误问题处理&quot;">​</a></h1><h2 id="🔑-授权错误提示" tabindex="-1">🔑 授权错误提示 <a class="header-anchor" href="#🔑-授权错误提示" aria-label="Permalink to &quot;🔑 授权错误提示&quot;">​</a></h2><h3 id="_1-站点设置多域名" tabindex="-1">1. 站点设置多域名 <a class="header-anchor" href="#_1-站点设置多域名" aria-label="Permalink to &quot;1. 站点设置多域名&quot;">​</a></h3><ul><li><strong>问题描述</strong>：站点配置了两个域名，但授权文件只支持单域名</li><li><strong>解决方案</strong>：删除未授权的域名即可</li></ul><h3 id="_2-反向代理和docker运行" tabindex="-1">2. 反向代理和Docker运行 <a class="header-anchor" href="#_2-反向代理和docker运行" aria-label="Permalink to &quot;2. 反向代理和Docker运行&quot;">​</a></h3><ul><li><strong>问题描述</strong>：使用反向代理导致授权文件无法识别</li><li><strong>解决方案</strong>： <ol><li>发送域名选项填写<code>$host</code></li><li>如果是Docker反向代理，需将Docker域名设置为与授权域名一致</li><li>修改后： <ul><li>Nginx：重启Nginx服务</li><li>Docker：重启容器</li></ul></li></ol></li><li><strong>参考截图</strong>： <img src="https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-1.png" alt="授权错误1"><img src="https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-2.png" alt="授权错误2"></li></ul><h2 id="💻-pc端无法扫码登录" tabindex="-1">💻 PC端无法扫码登录 <a class="header-anchor" href="#💻-pc端无法扫码登录" aria-label="Permalink to &quot;💻 PC端无法扫码登录&quot;">​</a></h2><h3 id="_1-缺少配置" tabindex="-1">1. 缺少配置 <a class="header-anchor" href="#_1-缺少配置" aria-label="Permalink to &quot;1. 缺少配置&quot;">​</a></h3><ul><li><strong>配置步骤</strong>： <ol><li>登录管理后台 -&gt; 【渠道设置】 -&gt; 【微信公众号设置】 -&gt; 【公众号配置】</li><li>登录<a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">微信公众平台</a></li><li>进入【设置与开发】 -&gt; 【基本设置】</li><li>按提示填写相关信息</li></ol></li><li><strong>参考截图</strong>： <img src="https://doc.chatmoney.cn/docs/images/general/qa/error/pc-wechat-login.png" alt="PC端微信登录"></li></ul><h3 id="_2-域名被封禁" tabindex="-1">2. 域名被封禁 <a class="header-anchor" href="#_2-域名被封禁" aria-label="Permalink to &quot;2. 域名被封禁&quot;">​</a></h3><ul><li><strong>问题描述</strong>：域名被微信封禁导致无法扫码登录</li><li><strong>解决方案</strong>： <ol><li>通过微信发送链接测试</li><li>如确认被封，可进行申诉</li></ol></li></ul><h2 id="💳-微信支付问题" tabindex="-1">💳 微信支付问题 <a class="header-anchor" href="#💳-微信支付问题" aria-label="Permalink to &quot;💳 微信支付问题&quot;">​</a></h2><h3 id="_1-api密钥配置错误" tabindex="-1">1. API密钥配置错误 <a class="header-anchor" href="#_1-api密钥配置错误" aria-label="Permalink to &quot;1. API密钥配置错误&quot;">​</a></h3><ul><li><strong>问题描述</strong>：未正确配置API3密钥</li><li><strong>解决方案</strong>： <ul><li>必须使用API3密钥，而非API2密钥</li><li>API2密钥会导致支付回调异常</li></ul></li></ul><h3 id="_2-api密钥重复" tabindex="-1">2. API密钥重复 <a class="header-anchor" href="#_2-api密钥重复" aria-label="Permalink to &quot;2. API密钥重复&quot;">​</a></h3><ul><li><strong>问题描述</strong>：API2和API3密钥设置相同</li><li><strong>解决方案</strong>：确保API2和API3密钥不同</li></ul><h3 id="_3-证书配置错误" tabindex="-1">3. 证书配置错误 <a class="header-anchor" href="#_3-证书配置错误" aria-label="Permalink to &quot;3. 证书配置错误&quot;">​</a></h3><ul><li><strong>问题描述</strong>：微信支付证书和密钥配置颠倒</li><li><strong>解决方案</strong>：正确区分支付证书和密钥</li></ul><h2 id="🖼️-海报生成问题" tabindex="-1">🖼️ 海报生成问题 <a class="header-anchor" href="#🖼️-海报生成问题" aria-label="Permalink to &quot;🖼️ 海报生成问题&quot;">​</a></h2><ul><li><strong>解决方案</strong>：更新系统后重新选择图片设置海报背景</li></ul><h2 id="📱-小程序问题" tabindex="-1">📱 小程序问题 <a class="header-anchor" href="#📱-小程序问题" aria-label="Permalink to &quot;📱 小程序问题&quot;">​</a></h2><h3 id="_1-编译错误" tabindex="-1">1. 编译错误 <a class="header-anchor" href="#_1-编译错误" aria-label="Permalink to &quot;1. 编译错误&quot;">​</a></h3><ul><li><strong>解决方案</strong>： <ol><li>重新下载最新源码</li><li>删除依赖后重新编译</li></ol></li><li><strong>参考截图</strong>： <img src="https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-build.png" alt="小程序编译错误"></li></ul><h3 id="_2-图片下载失败" tabindex="-1">2. 图片下载失败 <a class="header-anchor" href="#_2-图片下载失败" aria-label="Permalink to &quot;2. 图片下载失败&quot;">​</a></h3><ul><li><strong>错误提示</strong>：<code>downloadFile:fail ur not in domain list</code></li><li><strong>解决方案</strong>： <ol><li>获取图片域名： <ul><li>进入后台【绘画记录】</li><li>右键图片获取域名</li></ul></li><li>在小程序后台添加该域名</li></ol></li><li><strong>参考截图</strong>： <img src="https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-error.png" alt="下载错误"><img src="https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-url.png" alt="获取域名"></li></ul><h2 id="🎨-mj绘图问题" tabindex="-1">🎨 MJ绘图问题 <a class="header-anchor" href="#🎨-mj绘图问题" aria-label="Permalink to &quot;🎨 MJ绘图问题&quot;">​</a></h2><h3 id="_1-官网绘图失败" tabindex="-1">1. 官网绘图失败 <a class="header-anchor" href="#_1-官网绘图失败" aria-label="Permalink to &quot;1. 官网绘图失败&quot;">​</a></h3><ul><li><strong>排查步骤</strong>： <ol><li>登录MJ账号确认绘图状态</li><li>检查提示词是否正确</li></ol></li></ul><h3 id="_2-代理域名错误" tabindex="-1">2. 代理域名错误 <a class="header-anchor" href="#_2-代理域名错误" aria-label="Permalink to &quot;2. 代理域名错误&quot;">​</a></h3><ul><li><strong>排查要点</strong>： <ul><li>检查图片代理域名配置</li><li>确保使用HTTPS协议</li><li>检查防火墙设置</li></ul></li></ul><h3 id="_3-文档阅读不完整" tabindex="-1">3. 文档阅读不完整 <a class="header-anchor" href="#_3-文档阅读不完整" aria-label="Permalink to &quot;3. 文档阅读不完整&quot;">​</a></h3><ul><li><strong>建议</strong>：仔细阅读全部文档内容</li></ul><h2 id="🚦-502错误" tabindex="-1">🚦 502错误 <a class="header-anchor" href="#🚦-502错误" aria-label="Permalink to &quot;🚦 502错误&quot;">​</a></h2><ul><li><strong>问题原因</strong>：PHP扩展冲突</li><li><strong>解决方案</strong>： <ol><li>检查所有PHP版本</li><li>移除opcache扩展</li></ol></li><li><strong>参考截图</strong>： <img src="https://doc.chatmoney.cn/docs/images/general/php/error/502-1.png" alt="502错误"></li></ul><h2 id="🔐-忘记管理员密码" tabindex="-1">🔐 忘记管理员密码 <a class="header-anchor" href="#🔐-忘记管理员密码" aria-label="Permalink to &quot;🔐 忘记管理员密码&quot;">​</a></h2><ul><li><strong>重置步骤</strong>： <ol><li>登录宝塔面板</li><li>进入【网站】 -&gt; 【PHP项目】</li><li>找到对应站点，进入根目录</li><li>打开终端</li><li>执行命令：<code>php think password 新密码</code></li></ol></li><li><strong>参考截图</strong>： <img src="https://doc.chatmoney.cn/docs/images/general/php/error/password-1.png" alt="密码重置1"><img src="https://doc.chatmoney.cn/docs/images/general/php/error/password-2.png" alt="密码重置2"><img src="https://doc.chatmoney.cn/docs/images/general/php/error/password-3.png" alt="密码重置3"></li></ul><h2 id="⚠️-500错误" tabindex="-1">⚠️ 500错误 <a class="header-anchor" href="#⚠️-500错误" aria-label="Permalink to &quot;⚠️ 500错误&quot;">​</a></h2><ul><li><strong>处理方式</strong>：请参考专门的500错误文档</li></ul>',38)]))}const m=l(e,[["render",t]]);export{u as __pageData,m as default};
