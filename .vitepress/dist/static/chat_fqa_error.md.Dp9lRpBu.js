import{_ as r,c as l,ag as o,o as i}from"./chunks/framework.BHdmj1Zv.js";const u=JSON.parse('{"title":"常见错误问题处理","description":"","frontmatter":{},"headers":[],"relativePath":"chat/fqa/error.md","filePath":"chat/fqa/error.md","lastUpdated":1737634698000}'),t={name:"chat/fqa/error.md"};function e(n,a,s,h,c,g){return i(),l("div",null,a[0]||(a[0]=[o('<h1 id="常见错误问题处理" tabindex="-1">常见错误问题处理 <a class="header-anchor" href="#常见错误问题处理" aria-label="Permalink to &quot;常见错误问题处理&quot;">​</a></h1><p>本指南将帮助您解决系统运行中可能遇到的常见错误问题，包括授权错误、微信支付问题、小程序编译错误等。</p><h2 id="授权错误提示" tabindex="-1">授权错误提示 <a class="header-anchor" href="#授权错误提示" aria-label="Permalink to &quot;授权错误提示&quot;">​</a></h2><h3 id="_1-站点设置多域名" tabindex="-1">① 站点设置多域名 <a class="header-anchor" href="#_1-站点设置多域名" aria-label="Permalink to &quot;① 站点设置多域名&quot;">​</a></h3><ul><li><strong>问题描述</strong>：站点配置了两个域名，授权文件只支持单域名，无论访问哪个域名，都会提醒授权错误。</li><li><strong>解决方案</strong>：删除未授权的域名。</li></ul><hr><h3 id="_2-反向代理和-docker-运行" tabindex="-1">② 反向代理和 Docker 运行 <a class="header-anchor" href="#_2-反向代理和-docker-运行" aria-label="Permalink to &quot;② 反向代理和 Docker 运行&quot;">​</a></h3><ul><li><strong>问题描述</strong>：使用反向代理或 Docker 运行时，授权文件无法识别域名。</li><li><strong>解决方案</strong>： <ol><li>在 Nginx 配置中，确保 <code>$host</code> 正确传递。</li><li>如果使用 Docker，确保容器域名与授权域名一致。</li><li>修改后重启 Nginx 或 Docker 容器。</li></ol></li><li><strong>参考截图</strong>： <ul><li><img src="https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-1.png" alt="Nginx 配置"></li><li><img src="https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-2.png" alt="Docker 配置"></li></ul></li></ul><hr><h2 id="pc-端无法扫码登录" tabindex="-1">PC 端无法扫码登录 <a class="header-anchor" href="#pc-端无法扫码登录" aria-label="Permalink to &quot;PC 端无法扫码登录&quot;">​</a></h2><h3 id="_1-缺少配置" tabindex="-1">① 缺少配置 <a class="header-anchor" href="#_1-缺少配置" aria-label="Permalink to &quot;① 缺少配置&quot;">​</a></h3><ul><li><strong>问题描述</strong>：PC 端无法扫码登录，可能是缺少微信公众号配置。</li><li><strong>解决方案</strong>： <ol><li>登录管理后台，进入【渠道设置】-&gt;【微信公众号设置】-&gt;【公众号配置】。</li><li>登录 <a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">微信公众平台</a>，进入【设置与开发】-&gt;【基本设置】。</li><li>根据提示填写相关信息。</li></ol></li><li><strong>参考截图</strong>： <ul><li><img src="https://doc.chatmoney.cn/docs/images/general/qa/error/pc-wechat-login.png" alt="公众号配置"></li></ul></li></ul><hr><h3 id="_2-域名被微信封禁" tabindex="-1">② 域名被微信封禁 <a class="header-anchor" href="#_2-域名被微信封禁" aria-label="Permalink to &quot;② 域名被微信封禁&quot;">​</a></h3><ul><li><strong>问题描述</strong>：设置公众号时参数正确，但无法扫码登录，可能是域名被微信封禁。</li><li><strong>解决方案</strong>：尝试在微信中发送链接，确认是否被封禁。如被封禁，需申诉解决。</li></ul><hr><h2 id="微信支付问题" tabindex="-1">微信支付问题 <a class="header-anchor" href="#微信支付问题" aria-label="Permalink to &quot;微信支付问题&quot;">​</a></h2><h3 id="_1-未填写-apiv3-密钥" tabindex="-1">① 未填写 APIv3 密钥 <a class="header-anchor" href="#_1-未填写-apiv3-密钥" aria-label="Permalink to &quot;① 未填写 APIv3 密钥&quot;">​</a></h3><ul><li><strong>问题描述</strong>：系统要求填写微信 APIv3 密钥，而非 APIv2 密钥。填写 APIv2 密钥会导致支付回调异常。</li><li><strong>解决方案</strong>：确保填写的是 APIv3 密钥。</li></ul><hr><h3 id="_2-apiv2-与-apiv3-密钥相同" tabindex="-1">② APIv2 与 APIv3 密钥相同 <a class="header-anchor" href="#_2-apiv2-与-apiv3-密钥相同" aria-label="Permalink to &quot;② APIv2 与 APIv3 密钥相同&quot;">​</a></h3><ul><li><strong>问题描述</strong>：APIv2 和 APIv3 密钥设置相同，会导致支付回调异常。</li><li><strong>解决方案</strong>：确保 APIv2 和 APIv3 密钥不同。</li></ul><hr><h3 id="_3-支付证书与密钥混淆" tabindex="-1">③ 支付证书与密钥混淆 <a class="header-anchor" href="#_3-支付证书与密钥混淆" aria-label="Permalink to &quot;③ 支付证书与密钥混淆&quot;">​</a></h3><ul><li><strong>问题描述</strong>：微信支付证书和密钥混淆，导致无法支付或支付后会员未开通。</li><li><strong>解决方案</strong>：确保正确填写微信支付证书和密钥。</li></ul><hr><h2 id="海报无法生成" tabindex="-1">海报无法生成 <a class="header-anchor" href="#海报无法生成" aria-label="Permalink to &quot;海报无法生成&quot;">​</a></h2><ul><li><strong>问题描述</strong>：部分环境无法生成海报。</li><li><strong>解决方案</strong>：更新系统后，重新选择图片设置海报背景。</li></ul><hr><h2 id="小程序编译错误" tabindex="-1">小程序编译错误 <a class="header-anchor" href="#小程序编译错误" aria-label="Permalink to &quot;小程序编译错误&quot;">​</a></h2><ul><li><strong>问题描述</strong>：上传小程序时，HbuilderX 编译错误。</li><li><strong>解决方案</strong>： <ol><li>重新下载最新源码，按教程操作。</li><li>如果已使用最新源码，删除依赖后重新编译。</li></ol></li><li><strong>参考截图</strong>： <ul><li><img src="https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-build.png" alt="编译错误"></li></ul></li></ul><hr><h2 id="小程序无法下载绘图生成的图片" tabindex="-1">小程序无法下载绘图生成的图片 <a class="header-anchor" href="#小程序无法下载绘图生成的图片" aria-label="Permalink to &quot;小程序无法下载绘图生成的图片&quot;">​</a></h2><ul><li><strong>问题描述</strong>：提示 &quot;downloadFile:fail ur not in domain list&quot;，因为绘图链接与小程序接口域名不一致。</li><li><strong>解决方案</strong>： <ol><li>在小程序后台设置图片域名。</li><li>获取图片域名的方法：打开后台菜单【绘画记录】，右键生成的图片或链接，获取域名。</li></ol></li><li><strong>参考截图</strong>： <ul><li><img src="https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-error.png" alt="下载错误"></li><li><img src="https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-url.png" alt="获取域名"></li></ul></li></ul><hr><h2 id="mj-直链绘图失败" tabindex="-1">MJ 直链绘图失败 <a class="header-anchor" href="#mj-直链绘图失败" aria-label="Permalink to &quot;MJ 直链绘图失败&quot;">​</a></h2><h3 id="_1-mj-官网绘图失败" tabindex="-1">① MJ 官网绘图失败 <a class="header-anchor" href="#_1-mj-官网绘图失败" aria-label="Permalink to &quot;① MJ 官网绘图失败&quot;">​</a></h3><ul><li><strong>问题描述</strong>：MJ 官网绘图失败。</li><li><strong>解决方案</strong>：登录 MJ 账号，检查绘图是否成功。如果失败，可能是关键词问题或其他原因。</li></ul><hr><h3 id="_2-图片代理域名错误" tabindex="-1">② 图片代理域名错误 <a class="header-anchor" href="#_2-图片代理域名错误" aria-label="Permalink to &quot;② 图片代理域名错误&quot;">​</a></h3><ul><li><strong>问题描述</strong>：MJ 官网绘图成功，但系统无法显示图片。</li><li><strong>解决方案</strong>：检查图片代理域名是否正确，确保使用 HTTPS。</li></ul><hr><h3 id="_3-未完整阅读-mj-直连文档" tabindex="-1">③ 未完整阅读 MJ 直连文档 <a class="header-anchor" href="#_3-未完整阅读-mj-直连文档" aria-label="Permalink to &quot;③ 未完整阅读 MJ 直连文档&quot;">​</a></h3><ul><li><strong>问题描述</strong>：未完整阅读 MJ 直连文档，导致操作错误。</li><li><strong>解决方案</strong>：仔细阅读并理解 MJ 直连文档。</li></ul><hr><h2 id="频繁出现-502-错误" tabindex="-1">频繁出现 502 错误 <a class="header-anchor" href="#频繁出现-502-错误" aria-label="Permalink to &quot;频繁出现 502 错误&quot;">​</a></h2><ul><li><strong>问题描述</strong>：部署后频繁出现 502 错误。</li><li><strong>解决方案</strong>：检查 PHP 扩展冲突，删除 <code>opcache</code> 扩展。</li><li><strong>参考截图</strong>： <ul><li><img src="https://doc.chatmoney.cn/docs/images/general/php/error/502-1.png" alt="502 错误"></li></ul></li></ul><hr><h2 id="忘记超级管理密码" tabindex="-1">忘记超级管理密码 <a class="header-anchor" href="#忘记超级管理密码" aria-label="Permalink to &quot;忘记超级管理密码&quot;">​</a></h2><ul><li><strong>问题描述</strong>：忘记超级管理密码。</li><li><strong>解决方案</strong>： <ol><li>登录宝塔面板，进入【网站】-&gt;【PHP 项目】，找到站点根目录。</li><li>点击【终端】，输入 <code>php think password (你想设置的密码,不含括号)</code>，回车即可重置密码。</li></ol></li><li><strong>参考截图</strong>： <ul><li><img src="https://doc.chatmoney.cn/docs/images/general/php/error/password-1.png" alt="站点根目录"></li><li><img src="https://doc.chatmoney.cn/docs/images/general/php/error/password-2.png" alt="终端"></li><li><img src="https://doc.chatmoney.cn/docs/images/general/php/error/password-3.png" alt="重置密码"></li></ul></li></ul><hr><h2 id="_500-错误" tabindex="-1">500 错误 <a class="header-anchor" href="#_500-错误" aria-label="Permalink to &quot;500 错误&quot;">​</a></h2><ul><li><strong>问题描述</strong>：系统出现 500 错误。</li><li><strong>解决方案</strong>：参考 <a href="https://doc.chatmoney.cn/chat/qa/error.html#_500%E9%94%99%E8%AF%AF" target="_blank" rel="noreferrer">500 错误文档</a> 进行排查。</li></ul><hr><h2 id="至此常见错误问题处理完成" tabindex="-1">至此常见错误问题处理完成 <a class="header-anchor" href="#至此常见错误问题处理完成" aria-label="Permalink to &quot;至此常见错误问题处理完成&quot;">​</a></h2><p>通过以上步骤，您可以解决系统运行中的常见错误问题。如有其他问题，请参考相关文档或联系技术支持。</p>',56)]))}const m=r(t,[["render",e]]);export{u as __pageData,m as default};
