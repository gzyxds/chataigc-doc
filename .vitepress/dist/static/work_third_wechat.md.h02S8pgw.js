import{_ as a,c as t,a3 as s,o as e}from"./chunks/framework.DUiUPaIL.js";const d=JSON.parse('{"title":"对接微信","description":"","frontmatter":{},"headers":[],"relativePath":"work/third/wechat.md","filePath":"work/third/wechat.md"}'),o={name:"work/third/wechat.md"};function p(l,n,i,r,c,h){return e(),t("div",null,n[0]||(n[0]=[s(`<h1 id="对接微信" tabindex="-1">对接微信 <a class="header-anchor" href="#对接微信" aria-label="Permalink to &quot;对接微信&quot;">​</a></h1><h2 id="接入说明" tabindex="-1">接入说明 <a class="header-anchor" href="#接入说明" aria-label="Permalink to &quot;接入说明&quot;">​</a></h2><p>提示</p><p>我们使用 <strong>chatgpt-on-wechat</strong> 这个项目来接入； 无论是个人微信还是企业微信都使用这个项目。 具体如何安装这边不过多阐述，请自行阅读官方文档安装。 <strong>官方项目地址:</strong> <strong><a href="https://github.com/zhayujie/chatgpt-on-wechat" target="_blank" rel="noreferrer">https://github.com/zhayujie/chatgpt-on-wechat</a></strong></p><h2 id="需要设备" tabindex="-1">需要设备 <a class="header-anchor" href="#需要设备" aria-label="Permalink to &quot;需要设备&quot;">​</a></h2><ul><li><strong>1. 一台服务器，国内国外均可</strong></li><li><strong>2. 一个企业微信账号，个人和已认证的企业均支持</strong></li><li><strong>3. 特别说明: 企业微信的监听需要 windows 的系统</strong></li><li><strong>PS: 必须是已进行实名认证的微信号 (未实名的无法登录)</strong></li></ul><h2 id="一、接入企业微信" tabindex="-1">一、接入企业微信 <a class="header-anchor" href="#一、接入企业微信" aria-label="Permalink to &quot;一、接入企业微信&quot;">​</a></h2><p>企业微信的接入在开源项目 <code>chatgpt-on-wechat</code> 的基础上进行。</p><p><strong>步骤一:</strong></p><p><code>根据自己的系统版本获取到apiKey</code></p><p><a href="https://doc.chatmoney.cn/pro/third-deployment/on-wechat.html#v1%E7%89%88%E6%9C%AC%E7%9A%84%E5%88%86%E4%BA%AB%E5%AF%86%E9%92%A5" target="_blank" rel="noreferrer">【1.7.* 版本 获取密钥的方法, 点击跳转查看】</a></p><p><a href="https://doc.chatmoney.cn/pro/third-deployment/on-wechat.html#v2%E7%89%88%E6%9C%AC%E7%9A%84%E5%88%86%E4%BA%AB%E5%AF%86%E9%92%A5" target="_blank" rel="noreferrer">【&gt;=2.0.0版本 获取密钥的方法, 点击跳转查看】</a></p><p><strong>步骤二:</strong></p><ul><li>1、下载 <code>chatgpt-on-wechat</code> 第三方开源项目</li><li>2、下载地址: <code>https://github.com/zhayujie/chatgpt-on-wechat</code></li><li>3、下载完成后得到一个压缩包: <code>chatgpt-on-wechat-master.zip</code> (把它解压)</li></ul><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/chatgpt-on-wechat.png" alt=""></p><p><strong>步骤三:</strong></p><ul><li>1、打开 <code>chatgpt-on-wechat</code> 解压出来的项目,进行配置修改</li><li>2、主要修改三个配置参数, (PS: 配置文件里面没有的配置自行加上即可)</li><li>3、操作如下图所示:</li></ul><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/config_001.png" alt=""></p><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/config_002.png" alt=""></p><p>注意事项：</p><p>企业微信需要 下载一个 指定的企业微信版本 用来监听 具体使用请参考以下文档: <strong>文档地址:</strong> <strong><a href="https://github.com/zhayujie/chatgpt-on-wechat/pull/1385" target="_blank" rel="noreferrer">https://github.com/zhayujie/chatgpt-on-wechat/pull/1385</a></strong></p><p><strong>文档提到要安装一个依赖:</strong> pip install ntwork <strong>这个依赖你可能无法安装上,你可以用以下命令进行安装:</strong> (国内源安装): pip install -i <a href="https://pypi.tuna.tsinghua.edu.cn/simple" target="_blank" rel="noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple</a> ntwork <strong>PS: 经测试需要使用</strong> <strong>​<code>3.10.*</code>​</strong> <strong>python的版本才能安装该依赖, 否则可能会提示找不到依赖包的错误。</strong></p><p><strong>步骤四 (安装依赖):</strong></p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 1、终端打开项目</span></span>
<span class="line"><span>cd chatgpt-on-wechat-master</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2、安装核心依赖：</span></span>
<span class="line"><span>pip3 install -r requirements.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3、安装拓展依赖：</span></span>
<span class="line"><span>pip3 install -r requirements-optional.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4、安装好依赖后、就可以把项目运行起来了</span></span>
<span class="line"><span>python app.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 5、运行后会弹出一个二维码, 企业微信扫码登录, 按提示等待大概1分钟左右</span></span>
<span class="line"><span></span></span>
<span class="line"><span># PS: 企业微信上述有提到 要安装指定的版本, 别搞错了。还要安装 ntwork依赖</span></span></code></pre></div><p><strong>步骤五:</strong></p><ul><li>1、其实到这里整个项目的部署已经完成了</li><li>2、接下来就是打开企业微信正常使用即可</li><li>3、如何使用就自行看 <code>chatgpt-on-wechat</code> 文档吧</li><li>4、私聊: 私聊默认是发送: @bot 要提问的问题</li><li>5、群聊: 是@登录的企业微信账号</li><li><strong>PS: 群聊需要在 config.json 配置群名称白名单, 否则无法群聊。（官方文档有说）</strong></li></ul><h2 id="二、接入个人微信" tabindex="-1">二、接入个人微信 <a class="header-anchor" href="#二、接入个人微信" aria-label="Permalink to &quot;二、接入个人微信&quot;">​</a></h2><ul><li>需要修改 config.json 的几个配置项</li><li>如企业微信不一样的是 channel_type 等于 wx</li><li>配置如下:</li></ul><p>json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;channel_type&quot;: &quot;wx&quot;,</span></span>
<span class="line"><span>  &quot;open_ai_api_key&quot;: &quot;YOUR API KEY&quot;,</span></span>
<span class="line"><span>  &quot;open_ai_api_base&quot;: &quot;YOUR BASE URL&quot;,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>启动运行：</strong></p><ul><li>1、然后运行项目 <code>python app.py</code></li><li>2、按提示登录扫码登录微信</li><li>3、PS: 群聊需要在 config.json 配置群名称白名单, 否则无法群聊。（官方文档有说）</li></ul><p><strong>个人微信的部署和企业微信的区别</strong></p><ul><li><strong>1、<strong>​</strong>​<code>channel_type</code>​</strong> <strong>参数值不一样</strong></li><li><strong>2、 个人微信不需要指定微信版本, 企业微信需要指定版本</strong></li><li><strong>3、 个人微信不需要安装额外的依赖, 企业微信需要安装</strong> <strong>​<code>ntwork</code>​</strong> <strong>依赖</strong></li><li><strong>除上述3个不一样的地方, 其它的地方是完全一样的。</strong></li></ul><h2 id="v1版本的分享密钥" tabindex="-1">v1版本的分享密钥 <a class="header-anchor" href="#v1版本的分享密钥" aria-label="Permalink to &quot;v1版本的分享密钥&quot;">​</a></h2><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/get_key_001.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/get_key_002.png" alt=""></p><h2 id="v2版本的分享密钥" tabindex="-1">v2版本的分享密钥 <a class="header-anchor" href="#v2版本的分享密钥" aria-label="Permalink to &quot;v2版本的分享密钥&quot;">​</a></h2><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/2.0-key-001.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/2.0-key-002.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/on-wechat/2.0-key-003.png" alt=""></p>`,39)]))}const u=a(o,[["render",p]]);export{d as __pageData,u as default};