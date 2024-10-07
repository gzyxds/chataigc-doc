import{_ as e,c as t,a3 as n,o}from"./chunks/framework.DUiUPaIL.js";const h=JSON.parse('{"title":"后台上传微信小程序 一键上传","description":"","frontmatter":{},"headers":[],"relativePath":"work/front/fastmnp.md","filePath":"work/front/fastmnp.md"}'),r={name:"work/front/fastmnp.md"};function s(c,a,p,i,l,m){return o(),t("div",null,a[0]||(a[0]=[n('<h1 id="后台上传微信小程序-一键上传" tabindex="-1">后台上传微信小程序 一键上传 <a class="header-anchor" href="#后台上传微信小程序-一键上传" aria-label="Permalink to &quot;后台上传微信小程序 一键上传&quot;">​</a></h1><p>提示</p><p>本教程为微信小程序一键上传，如果上传失败，推荐使用方式手动编译上传。</p><h2 id="微信小程序类目资质" tabindex="-1">微信小程序类目资质 <a class="header-anchor" href="#微信小程序类目资质" aria-label="Permalink to &quot;微信小程序类目资质&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/community/develop/article/doc/000a6c1c700c78bce2204942066813" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/community/develop/article/doc/000a6c1c700c78bce2204942066813</a></p><h2 id="appid、appsecret设置" tabindex="-1">AppID、AppSecret设置 <a class="header-anchor" href="#appid、appsecret设置" aria-label="Permalink to &quot;AppID、AppSecret设置&quot;">​</a></h2><p>登录系统管理后台，点击【渠道设置】-【微信小程序】，打开<a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">https://mp.weixin.qq.com</a>，登录微信小程序，单击【开发】-&gt;【开发管理】，复制AppID、AppSecret到管理后台，单击【保存】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-1.png" alt=""></p><h2 id="服务器域名设置" tabindex="-1">服务器域名设置 <a class="header-anchor" href="#服务器域名设置" aria-label="Permalink to &quot;服务器域名设置&quot;">​</a></h2><p>⚠️ 警告</p><p>这里设置的域名，都为本系统的域名，如果有使用对象存储、或者其他地方设置了图片代理域名等，请将使用的域名也增加进去，不然和域名相关的功能可以存在异常。</p><p>在微信小程序官方管理后台，单击【开发管理】，找到【服务器域名】项，单击【开始配置】。 在系统管理后台，点击【渠道设置】-【微信小程序】，找到【服务器域名】项，将服务器域名复制到微信小程序管理后台对应输入框，单击【保存并提交】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-2.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-3.png" alt=""></p><h2 id="业务域名设置" tabindex="-1">业务域名设置 <a class="header-anchor" href="#业务域名设置" aria-label="Permalink to &quot;业务域名设置&quot;">​</a></h2><p>注意</p><p>如果增加导航链接或者其他非本系统链接需要在小程序webview打开，除了本系统的域名外，还需要再增加该链接的域名。</p><ul><li><strong>步骤1</strong>: 在微信小程序官方管理后台，单击【开发管理】，找到【业务域名】项，单击【开始配置】。 <img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-4.png" alt=""></li><li><strong>步骤2</strong>:</li></ul><p>⚠️ 警告</p><p>1.如果多次下载，文件可能会被电脑修改名称，请上传时保留原来的文件名称。 2.注意不要弄错项目目录。</p><p>单击【下载校验文件】，将文件上传到该域名对应的项目目录的&quot;server/public&quot;路径。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-5.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-6.png" alt=""></p><ul><li><strong>步骤3</strong>: 登录系统管理后台，单击【渠道设置】-&gt;【微信小程序】，【复制】业务域名。然后在微信小程序官方管理后台填写【保存】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-7.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-8.png" alt=""></li></ul><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h2><ul><li><strong>步骤1</strong>: 单击【网站】-&gt;【Node项目】-&gt;【安装node】，建议node18，设置命令版为安装的node版本。<img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/mnp-env-1.png" alt=""></li><li><strong>步骤2</strong>: 单击【文件】，找到项目目录下“server/extend/miniprogram-ci”，单击【终端】，运行一下命令安装node相关依赖。</li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install miniprogram-ci --save</span></span></code></pre></div><p><img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/mnp-env-2.png" alt=""></p><ul><li><strong>步骤3</strong>: 单击【软件商店】-&gt;【已安装】，找到项目所用的PHP版，单击【设置】-&gt;【禁用函数】-&gt;【删除】函数exec。<img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/mnp-env-3.png" alt=""></li></ul><h2 id="后台上传" tabindex="-1">后台上传 <a class="header-anchor" href="#后台上传" aria-label="Permalink to &quot;后台上传&quot;">​</a></h2><h3 id="ip白名单" tabindex="-1">IP白名单 <a class="header-anchor" href="#ip白名单" aria-label="Permalink to &quot;IP白名单&quot;">​</a></h3><p>如果设置了上传小程序的IP白名单，请填写服务器IP地址。<img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/set-ip.png" alt=""></p><h3 id="上传小程序" tabindex="-1">上传小程序 <a class="header-anchor" href="#上传小程序" aria-label="Permalink to &quot;上传小程序&quot;">​</a></h3><p>单击【渠道设置】-&gt;【微信小程序】-&gt;【小程序一键上传】-&gt;【上传小程序】。<img src="https://doc.chatmoney.cn/docs/images/general/front/fastmnp/update.png" alt=""></p><h2 id="用户隐私保护指引设置" tabindex="-1">用户隐私保护指引设置 <a class="header-anchor" href="#用户隐私保护指引设置" aria-label="Permalink to &quot;用户隐私保护指引设置&quot;">​</a></h2><ul><li><strong>步骤1</strong>: 在小程序官方后台单击【设置】-&gt;【更新】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-1.png" alt=""></li><li><strong>步骤2</strong>: 选择【本小程字处理了用户信息，将如实填写并及时更新用户信息处理情况。】-&gt;【确定以上内容】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-2.png" alt=""></li><li><strong>步骤3</strong>: 设置用户信息与使用接口对应关系，单击【确定】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-3.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-4.png" alt=""></li><li><strong>步骤4</strong>: 按下图设置，其中电话填写自己的手机号码，单击【确定并生成授权】。</li></ul><h2 id="提交审核" tabindex="-1">提交审核 <a class="header-anchor" href="#提交审核" aria-label="Permalink to &quot;提交审核&quot;">​</a></h2><p>上传以后，登录小程序官方后台，可以看到小程序的开发版本，提交审核即可。等审核通过，点按钮发布。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/audit.png" alt=""></p>',34)]))}const d=e(r,[["render",s]]);export{h as __pageData,d as default};