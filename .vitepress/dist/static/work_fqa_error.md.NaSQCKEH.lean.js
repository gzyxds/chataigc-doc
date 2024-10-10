import{_ as e,c as r,a3 as o,o as t}from"./chunks/framework.OIXTx_-L.js";const m=JSON.parse('{"title":"常见错误问题处理","description":"","frontmatter":{},"headers":[],"relativePath":"work/fqa/error.md","filePath":"work/fqa/error.md","lastUpdated":null}'),n={name:"work/fqa/error.md"};function h(i,a,l,c,d,s){return t(),r("div",null,a[0]||(a[0]=[o('<h1 id="常见错误问题处理" tabindex="-1">常见错误问题处理 <a class="header-anchor" href="#常见错误问题处理" aria-label="Permalink to &quot;常见错误问题处理&quot;">​</a></h1><h2 id="授权错误提示" tabindex="-1">授权错误提示 <a class="header-anchor" href="#授权错误提示" aria-label="Permalink to &quot;授权错误提示&quot;">​</a></h2><h3 id="_1站点设置多域名" tabindex="-1">①站点设置多域名 <a class="header-anchor" href="#_1站点设置多域名" aria-label="Permalink to &quot;①站点设置多域名&quot;">​</a></h3><p>站点配置了两个域名，授权文件只支持单域名，无论访问哪个域名，都会提醒授权错误。删除没有授权的域名即可。</p><h3 id="_2反向代理和docker运行" tabindex="-1">②反向代理和docker运行 <a class="header-anchor" href="#_2反向代理和docker运行" aria-label="Permalink to &quot;②反向代理和docker运行&quot;">​</a></h3><p>使用了反向代理，导致授权文件识别不出来，发送域名选项需要填写$host，如果反向代理的是docker，需要将docker域名设置为和授权域名一致。 改完nginx以后记得重启nginx，改完nginx容器以后，记得重启容器。<img src="https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-1.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/qa/error/license-3-2.png" alt=""></p><h2 id="pc端无法扫码登录" tabindex="-1">PC端无法扫码登录 <a class="header-anchor" href="#pc端无法扫码登录" aria-label="Permalink to &quot;PC端无法扫码登录&quot;">​</a></h2><h3 id="_1缺少配置" tabindex="-1">①缺少配置 <a class="header-anchor" href="#_1缺少配置" aria-label="Permalink to &quot;①缺少配置&quot;">​</a></h3><p>登录管理后台-&gt;【渠道设置】-&gt;【微信公众号设置】-&gt;【公众号配置】。 登录微信公众平台<a href="https://mp.weixin.qq.com/%EF%BC%8C%E3%80%90%E8%AE%BE%E7%BD%AE%E4%B8%8E%E5%BC%80%E5%8F%91%E3%80%91-" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/，【设置与开发】-</a>&gt;【基本设置】。 按一下步骤，将信息填写即可。<img src="https://doc.chatmoney.cn/docs/images/general/qa/error/pc-wechat-login.png" alt=""></p><h3 id="_1域名被微信封了" tabindex="-1">①域名被微信封了 <a class="header-anchor" href="#_1域名被微信封了" aria-label="Permalink to &quot;①域名被微信封了&quot;">​</a></h3><p>在后台设置了公众号，设置的时候参数都正确，但是报错了，或者设置好了，无法扫码登录。很可能是域名被微信封了。可以用微信发条链接，自己打开试试，可以申诉解决。</p><h2 id="微信支付问题" tabindex="-1">微信支付问题 <a class="header-anchor" href="#微信支付问题" aria-label="Permalink to &quot;微信支付问题&quot;">​</a></h2><h3 id="_1没有填写api3密钥" tabindex="-1">①没有填写API3密钥 <a class="header-anchor" href="#_1没有填写api3密钥" aria-label="Permalink to &quot;①没有填写API3密钥&quot;">​</a></h3><p>本系统要求填写的是微信API3的密钥，并非API2密钥，虽然填写API2密钥完可以支付，但是微信支付回调会异常，导致会员没开通或者次数无增加。</p><h3 id="_2api2密钥与api3密钥设置一样" tabindex="-1">②API2密钥与API3密钥设置一样 <a class="header-anchor" href="#_2api2密钥与api3密钥设置一样" aria-label="Permalink to &quot;②API2密钥与API3密钥设置一样&quot;">​</a></h3><p>如果将微信的API2和API3密钥设置一样，虽然填写完可以支付，但是微信支付回调会异常，导致会员没开通或者次数无增加。</p><h3 id="_3设置支付的时候-微信支付证书和微信支付证书密钥搞反" tabindex="-1">③设置支付的时候，微信支付证书和微信支付证书密钥搞反 <a class="header-anchor" href="#_3设置支付的时候-微信支付证书和微信支付证书密钥搞反" aria-label="Permalink to &quot;③设置支付的时候，微信支付证书和微信支付证书密钥搞反&quot;">​</a></h3><p>微信支付证书和微信支付证书密钥搞反会导致无法支付或者支付完会员没开通或者次数无增加。</p><h2 id="海报无法生成" tabindex="-1">海报无法生成 <a class="header-anchor" href="#海报无法生成" aria-label="Permalink to &quot;海报无法生成&quot;">​</a></h2><p>之前部分环境无法使用海报，更新系统以后，重新选图片设置海报背景即可。</p><h2 id="小程序编译错误" tabindex="-1">小程序编译错误 <a class="header-anchor" href="#小程序编译错误" aria-label="Permalink to &quot;小程序编译错误&quot;">​</a></h2><p>在上传小程序的时候，出现HbuilderX编译错误，请重新下载最新的源码，按教程重新操作。如果已是使用最新源码，删除依赖，然后重新编译。<img src="https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-build.png" alt=""></p><h2 id="小程序无法下载绘图生成的图片" tabindex="-1">小程序无法下载绘图生成的图片 <a class="header-anchor" href="#小程序无法下载绘图生成的图片" aria-label="Permalink to &quot;小程序无法下载绘图生成的图片&quot;">​</a></h2><p>提示&quot;downloadFile:fail ur not in domain list&quot;，因为绘图的链接与小程序接口不是同一域名，可能是第三方或者反向代理的域名。<img src="https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-error.png" alt="">需要在小程序后台设置该图片域名。获取改域名的方法是打开后台菜单【绘画记录】，然后右键生成的图片，或者链接，内容前面的域名为图片域名。<img src="https://doc.chatmoney.cn/docs/images/general/qa/error/mnp-download-url.png" alt=""></p><h2 id="mj直链绘图失败" tabindex="-1">MJ直链绘图失败 <a class="header-anchor" href="#mj直链绘图失败" aria-label="Permalink to &quot;MJ直链绘图失败&quot;">​</a></h2><h3 id="_1mj官网绘图失败" tabindex="-1">①MJ官网绘图失败 <a class="header-anchor" href="#_1mj官网绘图失败" aria-label="Permalink to &quot;①MJ官网绘图失败&quot;">​</a></h3><p>首先登录MJ账号，看看账号里绘图是否成功，如果没成功话，可能是词的问题或者其他原因，JM官方绘图失败。</p><h3 id="_2图片代理域名错误" tabindex="-1">②图片代理域名错误 <a class="header-anchor" href="#_2图片代理域名错误" aria-label="Permalink to &quot;②图片代理域名错误&quot;">​</a></h3><p>如果登录MJ账号绘图成功了，系统却看不到图或者没成功，检查一下图片代理域名是否有问题，检查一下是否防火墙阻挡了绘图回调。代理域名不要使用http，需要 https。</p><h3 id="_3完全没看mj直连文档或者跳着看就操作" tabindex="-1">③完全没看MJ直连文档或者跳着看就操作 <a class="header-anchor" href="#_3完全没看mj直连文档或者跳着看就操作" aria-label="Permalink to &quot;③完全没看MJ直连文档或者跳着看就操作&quot;">​</a></h3><p>所有文档都是没多余的字，需要全部阅读理解。</p><h2 id="频繁出现502" tabindex="-1">频繁出现502 <a class="header-anchor" href="#频繁出现502" aria-label="Permalink to &quot;频繁出现502&quot;">​</a></h2><p>部署好，访问网站频繁出现502，要考虑为PHP扩展冲突，检测所有的PHP版本是否安装opcache，建议删除。该扩展删除一般对系统没有任何影响。<img src="https://doc.chatmoney.cn/docs/images/general/php/error/502-1.png" alt=""></p><h2 id="忘记超级管理密码怎么办" tabindex="-1">忘记超级管理密码怎么办？ <a class="header-anchor" href="#忘记超级管理密码怎么办" aria-label="Permalink to &quot;忘记超级管理密码怎么办？&quot;">​</a></h2><p>登录宝塔以后，单击【网站】-&gt;【PHP项目】,在站点列表找到网站的站点，根目录里面点击进入站点根目录。<img src="https://doc.chatmoney.cn/docs/images/general/php/error/password-1.png" alt="">点击【终端】。<img src="https://doc.chatmoney.cn/docs/images/general/php/error/password-2.png" alt="">输入root账号密码并登录，在终端输入 <code>php think passwor (你想设置的密码,不含括号)</code>，回车即可重新设置管理密码。<img src="https://doc.chatmoney.cn/docs/images/general/php/error/password-3.png" alt=""></p><h3 id="_500错误" tabindex="-1">500错误 <a class="header-anchor" href="#_500错误" aria-label="Permalink to &quot;500错误&quot;">​</a></h3><p>具体请参考500错误文档</p>',37)]))}const q=e(n,[["render",h]]);export{m as __pageData,q as default};
