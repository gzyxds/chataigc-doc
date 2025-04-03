import{_ as e,c as t,o as n,ag as o}from"./chunks/framework.BHAHxt1l.js";const m=JSON.parse('{"title":"微信小程序一键上传教程","description":"","frontmatter":{},"headers":[],"relativePath":"chat/front/fastmnp.md","filePath":"chat/front/fastmnp.md","lastUpdated":1737634698000}'),i={name:"chat/front/fastmnp.md"};function r(l,a,s,p,c,h){return n(),t("div",null,a[0]||(a[0]=[o('<h1 id="微信小程序一键上传教程" tabindex="-1">微信小程序一键上传教程 <a class="header-anchor" href="#微信小程序一键上传教程" aria-label="Permalink to &quot;微信小程序一键上传教程&quot;">​</a></h1><p>本教程将指导您如何通过后台一键上传微信小程序。如果上传失败，建议使用手动编译上传的方式。</p><h2 id="微信小程序类目资质" tabindex="-1">微信小程序类目资质 <a class="header-anchor" href="#微信小程序类目资质" aria-label="Permalink to &quot;微信小程序类目资质&quot;">​</a></h2><p>请参考微信官方文档：<a href="https://developers.weixin.qq.com/community/develop/article/doc/000a6c1c700c78bce2204942066813" target="_blank" rel="noreferrer">微信小程序类目资质</a></p><h2 id="appid、appsecret设置" tabindex="-1">AppID、AppSecret设置 <a class="header-anchor" href="#appid、appsecret设置" aria-label="Permalink to &quot;AppID、AppSecret设置&quot;">​</a></h2><ol><li>登录系统管理后台，点击【渠道设置】-【微信小程序】。</li><li>打开<a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">微信公众平台</a>，登录微信小程序。</li><li>单击【开发】-&gt;【开发管理】，复制AppID、AppSecret到管理后台，单击【保存】。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-1.png" alt="AppID、AppSecret设置"></p><h2 id="服务器域名设置" tabindex="-1">服务器域名设置 <a class="header-anchor" href="#服务器域名设置" aria-label="Permalink to &quot;服务器域名设置&quot;">​</a></h2><p>⚠️ <strong>警告</strong>：这里设置的域名都为本系统的域名。如果使用了对象存储或其他设置了图片代理域名的地方，请将使用的域名也增加进去，否则与域名相关的功能可能会出现异常。</p><ol><li>在微信小程序官方管理后台，单击【开发管理】，找到【服务器域名】项，单击【开始配置】。</li><li>在系统管理后台，点击【渠道设置】-【微信小程序】，找到【服务器域名】项，将服务器域名复制到微信小程序管理后台对应输入框，单击【保存并提交】。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-2.png" alt="服务器域名设置1"><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-3.png" alt="服务器域名设置2"></p><h2 id="业务域名设置" tabindex="-1">业务域名设置 <a class="header-anchor" href="#业务域名设置" aria-label="Permalink to &quot;业务域名设置&quot;">​</a></h2><p><strong>注意</strong>：如果增加导航链接或其他非本系统链接需要在小程序webview打开，除了本系统的域名外，还需要增加该链接的域名。</p><h3 id="步骤1" tabindex="-1">步骤1 <a class="header-anchor" href="#步骤1" aria-label="Permalink to &quot;步骤1&quot;">​</a></h3><ol><li>在微信小程序官方管理后台，单击【开发管理】，找到【业务域名】项，单击【开始配置】。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-4.png" alt="业务域名设置1"></p><h3 id="步骤2" tabindex="-1">步骤2 <a class="header-anchor" href="#步骤2" aria-label="Permalink to &quot;步骤2&quot;">​</a></h3><p>⚠️ <strong>警告</strong>：</p><ol><li><p>如果多次下载，文件可能会被电脑修改名称，请上传时保留原来的文件名称。</p></li><li><p>注意不要弄错项目目录。</p></li><li><p>单击【下载校验文件】，将文件上传到该域名对应的项目目录的&quot;server/public&quot;路径。</p></li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-5.png" alt="业务域名设置2"><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-6.png" alt="业务域名设置3"></p><h3 id="步骤3" tabindex="-1">步骤3 <a class="header-anchor" href="#步骤3" aria-label="Permalink to &quot;步骤3&quot;">​</a></h3><ol><li>登录系统管理后台，单击【渠道设置】-&gt;【微信小程序】，【复制】业务域名。</li><li>在微信小程序官方管理后台填写【保存】。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-7.png" alt="业务域名设置4"><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-8.png" alt="业务域名设置5"></p><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h2><h3 id="步骤1-1" tabindex="-1">步骤1 <a class="header-anchor" href="#步骤1-1" aria-label="Permalink to &quot;步骤1&quot;">​</a></h3><ol><li>单击【网站】-&gt;【Node项目】-&gt;【安装node】，建议node18，设置命令版为安装的node版本。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/mnp-env-1.png" alt="环境配置1"></p><h3 id="步骤2-1" tabindex="-1">步骤2 <a class="header-anchor" href="#步骤2-1" aria-label="Permalink to &quot;步骤2&quot;">​</a></h3><ol><li>单击【文件】，找到项目目录下“server/extend/miniprogram-ci”，单击【终端】，运行以下命令安装node相关依赖。</li></ol><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> miniprogram-ci</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/mnp-env-2.png" alt="环境配置2"></p><h3 id="步骤3-1" tabindex="-1">步骤3 <a class="header-anchor" href="#步骤3-1" aria-label="Permalink to &quot;步骤3&quot;">​</a></h3><ol><li>单击【软件商店】-&gt;【已安装】，找到项目所用的PHP版，单击【设置】-&gt;【禁用函数】-&gt;【删除】函数exec。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/mnp-env-3.png" alt="环境配置3"></p><h2 id="后台上传" tabindex="-1">后台上传 <a class="header-anchor" href="#后台上传" aria-label="Permalink to &quot;后台上传&quot;">​</a></h2><h3 id="ip白名单" tabindex="-1">IP白名单 <a class="header-anchor" href="#ip白名单" aria-label="Permalink to &quot;IP白名单&quot;">​</a></h3><p>如果设置了上传小程序的IP白名单，请填写服务器IP地址。</p><p><img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/set-ip.png" alt="IP白名单"></p><h3 id="上传小程序" tabindex="-1">上传小程序 <a class="header-anchor" href="#上传小程序" aria-label="Permalink to &quot;上传小程序&quot;">​</a></h3><ol><li>单击【渠道设置】-&gt;【微信小程序】-&gt;【小程序一键上传】-&gt;【上传小程序】。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/update.png" alt="上传小程序"></p><h2 id="用户隐私保护指引设置" tabindex="-1">用户隐私保护指引设置 <a class="header-anchor" href="#用户隐私保护指引设置" aria-label="Permalink to &quot;用户隐私保护指引设置&quot;">​</a></h2><h3 id="步骤1-2" tabindex="-1">步骤1 <a class="header-anchor" href="#步骤1-2" aria-label="Permalink to &quot;步骤1&quot;">​</a></h3><ol><li>在小程序官方后台单击【设置】-&gt;【更新】。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-1.png" alt="用户隐私保护指引设置1"></p><h3 id="步骤2-2" tabindex="-1">步骤2 <a class="header-anchor" href="#步骤2-2" aria-label="Permalink to &quot;步骤2&quot;">​</a></h3><ol><li>选择【本小程序处理了用户信息，将如实填写并及时更新用户信息处理情况。】-&gt;【确定以上内容】。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-2.png" alt="用户隐私保护指引设置2"></p><h3 id="步骤3-2" tabindex="-1">步骤3 <a class="header-anchor" href="#步骤3-2" aria-label="Permalink to &quot;步骤3&quot;">​</a></h3><ol><li>设置用户信息与使用接口对应关系，单击【确定】。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-3.png" alt="用户隐私保护指引设置3"><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-4.png" alt="用户隐私保护指引设置4"></p><h3 id="步骤4" tabindex="-1">步骤4 <a class="header-anchor" href="#步骤4" aria-label="Permalink to &quot;步骤4&quot;">​</a></h3><ol><li>按下图设置，其中电话填写自己的手机号码，单击【确定并生成授权】。</li></ol><h2 id="提交审核" tabindex="-1">提交审核 <a class="header-anchor" href="#提交审核" aria-label="Permalink to &quot;提交审核&quot;">​</a></h2><p>上传以后，登录小程序官方后台，可以看到小程序的开发版本，提交审核即可。等审核通过，点击按钮发布。</p><hr><p>通过以上步骤，您可以顺利完成微信小程序的一键上传和发布。如有任何问题，请参考相关文档或联系技术支持。</p>',57)]))}const g=e(i,[["render",r]]);export{m as __pageData,g as default};
