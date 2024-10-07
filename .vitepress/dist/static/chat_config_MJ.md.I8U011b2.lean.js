import{_ as e,c as n,a3 as s,o as t}from"./chunks/framework.DUiUPaIL.js";const h=JSON.parse('{"title":"MJ直连服务配置","description":"","frontmatter":{},"headers":[],"relativePath":"chat/config/MJ.md","filePath":"chat/config/MJ.md"}'),o={name:"chat/config/MJ.md"};function i(c,a,r,l,d,g){return t(),n("div",null,a[0]||(a[0]=[s(`<h1 id="mj直连服务配置" tabindex="-1">MJ直连服务配置 <a class="header-anchor" href="#mj直连服务配置" aria-label="Permalink to &quot;MJ直连服务配置&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>目前midjourney没有提供对外开放的接口，只能在discord平台上体验。但是我们可以通过模拟discord接口提交，配合discord机器人监听频道上的消息实现一个接口调用生图的效果。ChatMoneyAI聊天系统PHP版3.3.2以上版本，自带该服务。</p><h2 id="mj监听服务器配置" tabindex="-1">MJ监听服务器配置 <a class="header-anchor" href="#mj监听服务器配置" aria-label="Permalink to &quot;MJ监听服务器配置&quot;">​</a></h2><ul><li><strong>步骤1</strong>: 浏览器打开<a href="https://discord.com/" target="_blank" rel="noreferrer">discord</a>。</li><li><strong>步骤2</strong>: 添加discord服务器。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696907570434.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696907584558.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696907604475.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696907656268.png" alt=""></li><li><strong>步骤3</strong>: 添加discord频道(用默认的【常规】频道也可以)。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696907791831.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696907829249.png" alt=""></li><li><strong>步骤4</strong>: 添加discord机器人。浏览器打开浏览器打开<a href="https://discord.com/developers/applications" target="_blank" rel="noreferrer">地址</a> 。 <img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696907917702.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696907955832.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696908063202.png" alt=""></li><li><strong>步骤5</strong>: 这里token的就是机器人token，要复制下来保存好，后面需要用到。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696908102716.png" alt=""></li><li><strong>步骤6</strong>: 设置一下机器人的一些配置。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696908534305.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696908576437.png" alt=""></li><li><strong>步骤7</strong>: 设置完配置后复制一下最下方的地址，浏览器打开，添加机器人到discord服务器(即前面增加的discord服务器)。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696908594668.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696908651915.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696908717889.png" alt=""></li><li><strong>步骤8</strong>: 开启一下机器人的【MESSAGE CONTENT INTENT】配置。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696908975659.png" alt=""></li><li><strong>步骤9</strong>: 触发生图还需要将midjourney机器人加入到我们的服务器 首先，浏览器打开<a href="https://discord.com/invite/midjourney" target="_blank" rel="noreferrer">midjourney邀请地址</a> 接受邀请。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696909110278.png" alt=""></li><li><strong>步骤10</strong>: 接受midjourney邀请后可以在discord页面看到midjourney的图标。选择其中一个midjourney频道，找到midjourney机器人，点击midjourney机器人的头像，将其加入到前面增加的discord服务器。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696909217145.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696909248356.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696909277777.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696909298078.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696909339327.png" alt=""></li><li><strong>步骤11</strong>: 在discord服务器页面按F12打开调试窗口，然后在输入框内输入/imagine cat，查看调试框内接口请求信息，把接口请求中的guild_id，channel_id，session_id保存下来，后面会用到。(例图中的账号没有付费midjourney，所以输入/imagine后没有生图。)<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696909377276.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696918722897.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/1696909815556.png" alt=""></li></ul><h2 id="mj代理设置" tabindex="-1">MJ代理设置 <a class="header-anchor" href="#mj代理设置" aria-label="Permalink to &quot;MJ代理设置&quot;">​</a></h2><p>提示</p><p>由于网络原因，境内无法直接访问discord。如果你使用的是境内服务器，discord中付费midjourney绘图服务。本教程将向您详细介绍如何使用宝塔反向代理 discord。 MJ代理需要配置3个域名。</p><h3 id="图片代理域名" tabindex="-1">图片代理域名 <a class="header-anchor" href="#图片代理域名" aria-label="Permalink to &quot;图片代理域名&quot;">​</a></h3><p>提示</p><p>MJ绘图后，需要显示图片，境内用户访问无法直接查看图片，需要我们配置一个反向代理域名，用来显示图片。配置图片域名代理，建议使用带宽大一些，没其他业务的境外服务器。</p><ul><li><strong>步骤1</strong>: 单击【网站】-&gt;【PHP项目】-&gt;【添加站点】，填写已经解析到此服务器的域名，设置PHP版为纯静态，单击【提交】。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/pic-1.png" alt=""></li><li><strong>步骤2</strong>: 单击【设置】-&gt;【SSL】，选择【文件验证】-&gt;选择【域名】,单击【申请】，为站点申请SSL证书。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/pic-2.png" alt=""></li><li><strong>步骤3</strong>: 单击【反向代理】-&gt;【添加反向代理】，【目标URL】填写<code>https://cdn.discordapp.com</code>，单击【提交】。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/pic-3.png" alt=""></li></ul><h3 id="api代理域名" tabindex="-1">API代理域名 <a class="header-anchor" href="#api代理域名" aria-label="Permalink to &quot;API代理域名&quot;">​</a></h3><p>单击【网站】-&gt;【PHP项目】-&gt;【添加站点】，填写已经解析到此服务器的域名，设置PHP版为纯静态，单击【提交】。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/pic-1.png" alt=""></p><ul><li><strong>步骤2</strong>: 单击【设置】-&gt;【SSL】，选择【文件验证】-&gt;选择【域名】,单击【申请】，为站点申请SSL证书。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/pic-2.png" alt=""></li><li><strong>步骤3</strong>: 单击【反向代理】-&gt;【添加反向代理】，【目标URL】填写<code>https://discord.com</code>，单击【提交】。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/api-3.png" alt=""></li></ul><h3 id="wss代理域名" tabindex="-1">WSS代理域名 <a class="header-anchor" href="#wss代理域名" aria-label="Permalink to &quot;WSS代理域名&quot;">​</a></h3><p>单击【网站】-&gt;【PHP项目】-&gt;【添加站点】，填写已经解析到此服务器的域名，设置PHP版为纯静态，单击【提交】。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/pic-1.png" alt=""></p><ul><li><strong>步骤2</strong>: 单击【设置】-&gt;【SSL】，选择【文件验证】-&gt;选择【域名】,单击【申请】，为站点申请SSL证书。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/pic-2.png" alt=""></li><li><strong>步骤3</strong>: 单击【反向代理】-&gt;【添加反向代理】，【目标URL】填写<code>https://gateway.discord.gg</code>，单击【提交】。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/wss-3.png" alt=""></li></ul><h2 id="模型配置" tabindex="-1">模型配置 <a class="header-anchor" href="#模型配置" aria-label="Permalink to &quot;模型配置&quot;">​</a></h2><p>⚠️ 警告</p><p>注意WSS域名必须是wss协议，非https协议。</p><p>①填写MJ图片域名，方便境内访问显示，代理域名设置。 ②填写discord代理域名，境外服务器默认不需要代理即可访问。 ③填写discord WSS代理域名，境外服务器默认不需要代理即可访问。 ④填写步骤11的guild_id。 ⑤填写步骤11的channel_id。 ⑥填写步骤11的session_id。 ⑦填写步骤5的机器人token。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/config.png" alt=""></p><h2 id="mj密钥配置" tabindex="-1">MJ密钥配置 <a class="header-anchor" href="#mj密钥配置" aria-label="Permalink to &quot;MJ密钥配置&quot;">​</a></h2><h3 id="使用前提" tabindex="-1">使用前提 <a class="header-anchor" href="#使用前提" aria-label="Permalink to &quot;使用前提&quot;">​</a></h3><ul><li>拥有discord账号并且已在discord中付费midjourney绘图服务。</li><li>知道如何访问外境站点，部分配置操作需要魔法。以下内容默认你已解决网络访问问题。</li></ul><h3 id="配置流程" tabindex="-1">配置流程 <a class="header-anchor" href="#配置流程" aria-label="Permalink to &quot;配置流程&quot;">​</a></h3><ul><li><strong>1</strong>：登录discord账号，获取discord的用户token(需要魔法)。</li><li><strong>2</strong>：后台系统填写获取到的token和图片代理域名。图片代理域名需自行处理，用于替换discord图片域名，替换后可在没有魔法的情况下图片显示不受影响。如果你的服务器在香港或海外，则无需填写图片代理域名。</li></ul><h3 id="discord" tabindex="-1">discord <a class="header-anchor" href="#discord" aria-label="Permalink to &quot;discord&quot;">​</a></h3><ul><li><strong>1</strong>: 浏览器打开<a href="https://discord.com/" target="_blank" rel="noreferrer">discord</a><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/discord1.png" alt=""></li><li><strong>2</strong>：登录discord账号后，浏览器按F12，查看network中接口请求中authorization的值。复制并保存这个token值。 此token值后续将填写在ChatAl聊天系统后台AI绘画配置处。注意：获取token值后请勿主动退出discord，退出discord账号后已获取的token将失效<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/discord2.png" alt=""></li></ul><h3 id="后台添加discord的token" tabindex="-1">后台添加discord的token <a class="header-anchor" href="#后台添加discord的token" aria-label="Permalink to &quot;后台添加discord的token&quot;">​</a></h3><p>登录后台系统，进入【AI设置/key池管理】页面。选择AI绘画点击【新增密钥】,接口类型选择码多多MJ ApiKey填入discord中获取到的token值。<img src="https://doc.chatmoney.cn/docs/images/general/config/mj/admin-set1.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/admin-set2.png" alt=""></p><h2 id="其他配置" tabindex="-1">其他配置 <a class="header-anchor" href="#其他配置" aria-label="Permalink to &quot;其他配置&quot;">​</a></h2><h3 id="小程序图片下载需配置下载域名" tabindex="-1">小程序图片下载需配置下载域名 <a class="header-anchor" href="#小程序图片下载需配置下载域名" aria-label="Permalink to &quot;小程序图片下载需配置下载域名&quot;">​</a></h3><p>下载域名即为图片代理域名。无需图片代理域名情况下，则填写站点域名。如ChatAl聊天系统后台开启模型计费，支持多个绘画模型的情况，则填写多个图片域名。 (例：码多多MJ图片代理域名假设为xxx.com,知数云MJ图片域名为<a href="https://midjourney.cdn.zhishuyun.com/" target="_blank" rel="noreferrer">https://midjourney.cdn.zhishuyun.com</a>，则downloadFile合法域名填写xxx.com;<a href="https://midjourney.cdn.zhishuyun.com/" target="_blank" rel="noreferrer">https://midjourney.cdn.zhishuyun.com</a>😉 <img src="https://doc.chatmoney.cn/docs/images/general/config/mj/mnp-set2.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/config/mj/mnp-set1.png" alt=""></p><h2 id="错误排查" tabindex="-1">错误排查 <a class="header-anchor" href="#错误排查" aria-label="Permalink to &quot;错误排查&quot;">​</a></h2><h4 id="_1-mj可以发起指令-可以画图-图片未返回或者超过10分钟更久时间才返回-openssl版本过低-导致机器人监控出问题。" tabindex="-1">1.MJ可以发起指令，可以画图，图片未返回或者超过10分钟更久时间才返回，openssl版本过低，导致机器人监控出问题。 <a class="header-anchor" href="#_1-mj可以发起指令-可以画图-图片未返回或者超过10分钟更久时间才返回-openssl版本过低-导致机器人监控出问题。" aria-label="Permalink to &quot;1.MJ可以发起指令，可以画图，图片未返回或者超过10分钟更久时间才返回，openssl版本过低，导致机器人监控出问题。&quot;">​</a></h4><p>终端运行一下命令域名加443端口号：</p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>openssl s_client -connect (自己配置的wss的域名,不带协议头,不含括号):443</span></span></code></pre></div><p>如果最后返回内容code不是等于0，说明openssl版本过低。</p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Start Time: 1703497628</span></span>
<span class="line"><span>Timeout   : 300 (sec)</span></span>
<span class="line"><span>Verify return code: 0 (ok)</span></span></code></pre></div><p>终端运行一下命令更新openssl。</p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum update</span></span>
<span class="line"><span>yum update openssl</span></span></code></pre></div><p>或者</p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apt update</span></span>
<span class="line"><span>apt update openssl</span></span></code></pre></div><h4 id="_2-未按文档配置两个守护进程。" tabindex="-1">2.未按文档配置两个守护进程。 <a class="header-anchor" href="#_2-未按文档配置两个守护进程。" aria-label="Permalink to &quot;2.未按文档配置两个守护进程。&quot;">​</a></h4><p>配置好参数以后，设置好守护进程。</p><h4 id="_3-参数配置不正确。" tabindex="-1">3.参数配置不正确。 <a class="header-anchor" href="#_3-参数配置不正确。" aria-label="Permalink to &quot;3.参数配置不正确。&quot;">​</a></h4><p>MJ绘画本身不提供接口，依靠程序模拟人的行为去绘图，MJ账号登录以后，不要去退出登录或者其他地方登录，参数可能会改变，参数不对可能导致无法绘画。重新按文档设置参数以后，再重启两个守护进程。</p><h4 id="_4-某种原因系统权限不足-守护进程无法写入日志。" tabindex="-1">4.某种原因系统权限不足，守护进程无法写入日志。 <a class="header-anchor" href="#_4-某种原因系统权限不足-守护进程无法写入日志。" aria-label="Permalink to &quot;4.某种原因系统权限不足，守护进程无法写入日志。&quot;">​</a></h4><p>重新给server/runtime目录www 用户权限。</p><h4 id="_5-mj封号" tabindex="-1">5.MJ封号 <a class="header-anchor" href="#_5-mj封号" aria-label="Permalink to &quot;5.MJ封号&quot;">​</a></h4><p>无法绘图的原因可能是MJ封号，可以在MJ网站直接绘画测试。不行则需要更换账号。</p><h3 id="_6-代理地址不通" tabindex="-1">6.代理地址不通 <a class="header-anchor" href="#_6-代理地址不通" aria-label="Permalink to &quot;6.代理地址不通&quot;">​</a></h3><p>使用ping命令在部署系统的服务器测试和代理服务器是否可以通讯。</p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ping 域名1</span></span>
<span class="line"><span>ping 域名2</span></span>
<span class="line"><span>ping 域名3</span></span></code></pre></div><h3 id="_7-代理站点ssl证书过期或者证书的域名和使用域名不完全匹配。" tabindex="-1">7.代理站点SSL证书过期或者证书的域名和使用域名不完全匹配。 <a class="header-anchor" href="#_7-代理站点ssl证书过期或者证书的域名和使用域名不完全匹配。" aria-label="Permalink to &quot;7.代理站点SSL证书过期或者证书的域名和使用域名不完全匹配。&quot;">​</a></h3><p>重新申请正确的SSL证书。</p>`,62)]))}const m=e(o,[["render",i]]);export{h as __pageData,m as default};
