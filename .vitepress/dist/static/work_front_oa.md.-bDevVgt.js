import{_ as t,c as e,o,ag as n}from"./chunks/framework.BHAHxt1l.js";const g=JSON.parse('{"title":"微信公众号","description":"","frontmatter":{},"headers":[],"relativePath":"work/front/oa.md","filePath":"work/front/oa.md","lastUpdated":1737637816000}'),r={name:"work/front/oa.md"};function c(s,a,i,l,p,d){return o(),e("div",null,a[0]||(a[0]=[n('<h1 id="微信公众号" tabindex="-1">微信公众号 <a class="header-anchor" href="#微信公众号" aria-label="Permalink to &quot;微信公众号&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">⚠️ 警告</p><p>需要使用企业认证的服务号，订阅号不可用。</p></div><h2 id="ip白名单配置" tabindex="-1">IP白名单配置 <a class="header-anchor" href="#ip白名单配置" aria-label="Permalink to &quot;IP白名单配置&quot;">​</a></h2><p>打开<a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">https://mp.weixin.qq.com</a>，登录微信公众号。单击【设置与开发】-&gt;【基本设置】，找到IP白名单项，设置你使用服务器的外网IP，一般为宝塔可以登录的地址的IP。<img src="https://doc.chatmoney.cn/docs/images/general/front/oa/ip-whitelist.png" alt=""></p><h2 id="开发者信息与服务器配置" tabindex="-1">开发者信息与服务器配置 <a class="header-anchor" href="#开发者信息与服务器配置" aria-label="Permalink to &quot;开发者信息与服务器配置&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">⚠ ⚠️ 警告</p><p>此步骤比较多，没按步骤做，容易出错。 1.第⑲步一定要先保存，不然第⑳步启用的时候，会报token验证失败。 2.最后一步一定要让公众号服务器配置属于启用状态，否则PC端无法使用。</p></div><p>①②③登录管理后台，单击【渠道设置】-&gt;【微信公众号】-&gt;【公众号设置】。 ④⑤浏览器打开新的窗口，登录微信公众号后台，单击【设置与开发】-&gt;【基本配置】。 ⑥⑦在公众号后台复制AppID到管理后台相应输入框。 ⑧⑨在公众号后台复制AppSecret到管理后台相应输入框。 ⑩在公众号后台单击【修改配置】。 ⑪⑫在管理后台复制【服务器配置】-&gt;【URL】到公众号后台【服务器配置】-&gt;【服务器地址(URL)】。 ⑬⑭按要求在管理后台自行填写【服务器配置】的【Token】值，Token值可以自己定义填写，然后复制到【服务器配置】-&gt;【令牌(Token)】。 ⑮⑯在公众号管理后台的【消息加密密钥(EncodingAESkey)】随机生成一个值，复制到管理后台的【EncodingAESkey】。 ⑰⑱在管理后台设置【服务器配置】-&gt;【消息加密方式】为【明文模式】，然后在公众号后台的【消息加解密方式】设置为【明文模式】。 ⑲在管理后台单击【保存】。 ⑳在公众号单击【启用】，要用服务器配置为启用状态。 <img src="https://doc.chatmoney.cn/docs/images/general/front/oa/config.png" alt=""></p><h2 id="域名配置" tabindex="-1">域名配置 <a class="header-anchor" href="#域名配置" aria-label="Permalink to &quot;域名配置&quot;">​</a></h2><p>⚠️ 警告</p><p>下载验证文件，重复下载系统可能会对文件进行改名，文件名要与公众号后台显示的一直，否则无法验证。</p><p>在公众号后台单击【设置与开发】-&gt;【公众号设置】，【业务域名】-&gt;【设置】，下载验证文件。<img src="https://doc.chatmoney.cn/docs/images/general/front/oa/domain-1.png" alt="">登录宝塔，点击【文件】，找到项目的server/public目录，上验证传文件。<img src="https://doc.chatmoney.cn/docs/images/general/front/oa/domain-2.png" alt="">在【业务域名】项中填写项目域名，单击【保存】。<img src="https://doc.chatmoney.cn/docs/images/general/front/oa/domain-3.png" alt="">在【JS接口安全域名】项中填写项目域名，单击【保存】。<img src="https://doc.chatmoney.cn/docs/images/general/front/oa/domain-4.png" alt="">在【网页授权域名】项中填写项目域名，单击【保存】。<img src="https://doc.chatmoney.cn/docs/images/general/front/oa/domain-5.png" alt=""></p><h2 id="菜单设置" tabindex="-1">菜单设置 <a class="header-anchor" href="#菜单设置" aria-label="Permalink to &quot;菜单设置&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">⚠注意</p><p>填写域名一定要加上mobile，否则IOS设备进入页面后分享链接会出现问题。</p></div><p>在管理后台单击【渠道设置】-&gt;【微信公众号】-&gt;【菜单管理】，填写菜单名称，设置跳转链接，填写 <a href="https://xn--eqrt2g/mobile" target="_blank" rel="noreferrer">https://域名/mobile</a> ,单击【保存】。<img src="https://doc.chatmoney.cn/docs/images/general/front/oa/menu.png" alt=""></p>',14)]))}const h=t(r,[["render",c]]);export{g as __pageData,h as default};
