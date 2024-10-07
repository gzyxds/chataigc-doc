import{_ as e,c as n,a3 as t,o}from"./chunks/framework.OIXTx_-L.js";const g=JSON.parse('{"title":"编译上传微信小程序 推荐使用","description":"","frontmatter":{},"headers":[],"relativePath":"work/front/mnp.md","filePath":"work/front/mnp.md","lastUpdated":1728302493000}'),r={name:"work/front/mnp.md"};function p(i,a,c,l,s,m){return o(),n("div",null,a[0]||(a[0]=[t('<h1 id="编译上传微信小程序-推荐使用" tabindex="-1">编译上传微信小程序 推荐使用 <a class="header-anchor" href="#编译上传微信小程序-推荐使用" aria-label="Permalink to &quot;编译上传微信小程序 推荐使用&quot;">​</a></h1><p>⚠️ 警告</p><p>需要使用企业认证微信小程序。</p><p>提示</p><p>本教程为微信小程序的发布流程，如果有版本更新，请下载最新源码，重复操作编译上传发布微信小程序的步骤。</p><h2 id="微信小程序类目资质" tabindex="-1">微信小程序类目资质 <a class="header-anchor" href="#微信小程序类目资质" aria-label="Permalink to &quot;微信小程序类目资质&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/community/develop/article/doc/000a6c1c700c78bce2204942066813" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/community/develop/article/doc/000a6c1c700c78bce2204942066813</a></p><h2 id="appid、appsecret设置" tabindex="-1">AppID、AppSecret设置 <a class="header-anchor" href="#appid、appsecret设置" aria-label="Permalink to &quot;AppID、AppSecret设置&quot;">​</a></h2><p>登录系统管理后台，点击【渠道设置】-【微信小程序】，打开<a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">https://mp.weixin.qq.com</a>，登录微信小程序，单击【开发】-&gt;【开发管理】，复制AppID、AppSecret到管理后台，单击【保存】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-1.png" alt=""></p><h2 id="服务器域名设置" tabindex="-1">服务器域名设置 <a class="header-anchor" href="#服务器域名设置" aria-label="Permalink to &quot;服务器域名设置&quot;">​</a></h2><p>⚠️ 警告</p><p>这里设置的域名，都为本系统的域名，如果有使用对象存储、或者其他地方设置了图片代理域名等，请将使用的域名也增加进去，不然和域名相关的功能可以存在异常。</p><p>在微信小程序官方管理后台，单击【开发管理】，找到【服务器域名】项，单击【开始配置】。 在系统管理后台，点击【渠道设置】-【微信小程序】，找到【服务器域名】项，将服务器域名复制到微信小程序管理后台对应输入框，单击【保存并提交】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-2.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-3.png" alt=""></p><h2 id="业务域名设置" tabindex="-1">业务域名设置 <a class="header-anchor" href="#业务域名设置" aria-label="Permalink to &quot;业务域名设置&quot;">​</a></h2><p>注意</p><p>如果增加导航链接或者其他非本系统链接需要在小程序webview打开，除了本系统的域名外，还需要再增加该链接的域名。</p><ul><li><strong>步骤1</strong>: 在微信小程序官方管理后台，单击【开发管理】，找到【业务域名】项，单击【开始配置】。 <img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-4.png" alt=""></li><li><strong>步骤2</strong>:</li></ul><p>⚠️ 警告</p><p>1.如果多次下载，文件可能会被电脑修改名称，请上传时保留原来的文件名称。 2.注意不要弄错项目目录。</p><p>单击【下载校验文件】，将文件上传到该域名对应的项目目录的&quot;server/public&quot;路径。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-5.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-6.png" alt=""></p><ul><li><strong>步骤3</strong>: 登录系统管理后台，单击【渠道设置】-&gt;【微信小程序】，【复制】业务域名。然后在微信小程序官方管理后台填写【保存】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-7.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-config-8.png" alt=""></li></ul><h2 id="编译上传微信小程序" tabindex="-1">编译上传微信小程序 <a class="header-anchor" href="#编译上传微信小程序" aria-label="Permalink to &quot;编译上传微信小程序&quot;">​</a></h2><h3 id="下载安装" tabindex="-1">下载安装 <a class="header-anchor" href="#下载安装" aria-label="Permalink to &quot;下载安装&quot;">​</a></h3><p>打开<a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html</a>，下载适合自己系统的版本，并进行安装。</p><h3 id="登录账号" tabindex="-1">登录账号 <a class="header-anchor" href="#登录账号" aria-label="Permalink to &quot;登录账号&quot;">​</a></h3><p>打开微信开发者工具，微信扫码登录，扫码的微信必须是该小程序的管理员或者开发者，是否后续步骤会有问题。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-login.png" alt=""></p><h3 id="配置微信开发者工具" tabindex="-1">配置微信开发者工具 <a class="header-anchor" href="#配置微信开发者工具" aria-label="Permalink to &quot;配置微信开发者工具&quot;">​</a></h3><p>点击【设置】-&gt;【安全】，并启用【服务端口】。这样，下面的步骤中 Hbuilder X 才能够与微信开发者工具进行通信。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-develop.png" alt=""></p><h3 id="下载安装hbuilder-x" tabindex="-1">下载安装Hbuilder X <a class="header-anchor" href="#下载安装hbuilder-x" aria-label="Permalink to &quot;下载安装Hbuilder X&quot;">​</a></h3><p>访问 Hbuilder X 官网 <a href="https://www.dcloud.io/hbuilderx.html" target="_blank" rel="noreferrer">https://www.dcloud.io/hbuilderx.html</a>，下载适合自己系统的版本，然后进行安装。</p><h3 id="打开项目" tabindex="-1">打开项目 <a class="header-anchor" href="#打开项目" aria-label="Permalink to &quot;打开项目&quot;">​</a></h3><p>⚠️ 警告</p><p>请勿打开源码根目录，要打开源码包下面的uniapp目录。</p><ul><li><strong>步骤1</strong>: 本地电脑解压下载源码包。</li><li><strong>步骤2</strong>: 启动Hbuilder X，单击【文件】-&gt;【打开目录】，现在步骤1解压的源码目录，选择目录下的uniapp目录，【打开】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-open-1.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-open-2.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-open-3.png" alt=""></li></ul><h3 id="配置uni-app应用标识" tabindex="-1">配置uni-app应用标识 <a class="header-anchor" href="#配置uni-app应用标识" aria-label="Permalink to &quot;配置uni-app应用标识&quot;">​</a></h3><p>打开unaipp/src/manifest.json文件，找到uni-app 应用标识这一项，然后单击 【重新获取】，这样就可以重新设置 uni-app 应用标识。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/get-uni-app-appid.png" alt=""></p><h3 id="服务端配置" tabindex="-1">服务端配置 <a class="header-anchor" href="#服务端配置" aria-label="Permalink to &quot;服务端配置&quot;">​</a></h3><p>注意</p><p>1.注意了文件名称前面有个“.”。 2.记得改成配置以后，保存文件。 3.配置的服务端域名一定使用https。 4.Java版配置前台的域名。</p><ul><li><strong>步骤1</strong>: 复制.env.production.example文件并改成为.env.production。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/copy-config.png" alt=""></li><li><strong>步骤2</strong>: 点击.env.production文件，文件配置里面的VITE_APP_BASE_URL值改成自己服务端的https域名，点击【文件】-&gt;【保存】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/settings-api.png" alt=""></li></ul><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><p>单击【工具】-&gt;【外部命令】-&gt;【npm install】进行依赖安装。如果提示需要安装插件，请单击确认并继续安装。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/npm-install.png" alt=""></p><h3 id="编译发行" tabindex="-1">编译发行 <a class="header-anchor" href="#编译发行" aria-label="Permalink to &quot;编译发行&quot;">​</a></h3><p>单击【发行】-&gt;【小程序-微信】，并填写小程序名称和 AppID。然后单击【发行】，这时需要登录小程序编译。如果编译不成功，请重试。编译成功后，会自动弹出微信开发者工具。如果多次编译不成功，可能是前面的步骤没有完成。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-release-1.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-release-2.png" alt=""></p><h3 id="上传小程序" tabindex="-1">上传小程序 <a class="header-anchor" href="#上传小程序" aria-label="Permalink to &quot;上传小程序&quot;">​</a></h3><p>编译成功后，会自动弹出小程序开发者窗口，可以在其中预览微信小程序。点击【上传】-&gt;【确定】，填写版本号后，点击【上传】，这样就完成微信小程序上传。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-upload-1.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/mnp-upload-2.png" alt=""></p><h2 id="用户隐私保护指引设置" tabindex="-1">用户隐私保护指引设置 <a class="header-anchor" href="#用户隐私保护指引设置" aria-label="Permalink to &quot;用户隐私保护指引设置&quot;">​</a></h2><ul><li><strong>步骤1</strong>: 在小程序官方后台单击【设置】-&gt;【更新】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-1.png" alt=""></li><li><strong>步骤2</strong>: 选择【本小程字处理了用户信息，将如实填写并及时更新用户信息处理情况。】-&gt;【确定以上内容】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-2.png" alt=""></li><li><strong>步骤3</strong>: 设置用户信息与使用接口对应关系，单击【确定】。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-3.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/agreement-4.png" alt=""></li><li><strong>步骤4</strong>: 按下图设置，其中电话填写自己的手机号码，单击【确定并生成授权】。</li></ul><h2 id="提交审核" tabindex="-1">提交审核 <a class="header-anchor" href="#提交审核" aria-label="Permalink to &quot;提交审核&quot;">​</a></h2><p>上传以后，登录小程序官方后台，可以看到小程序的开发版本，提交审核即可。等审核通过，点按钮发布。<img src="https://doc.chatmoney.cn/docs/images/general/front/mnp/audit.png" alt=""></p>',50)]))}const d=e(r,[["render",p]]);export{g as __pageData,d as default};
