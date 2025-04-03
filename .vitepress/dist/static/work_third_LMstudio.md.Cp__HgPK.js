import{_ as a,c as e,o as t,ag as n}from"./chunks/framework.BHAHxt1l.js";const u=JSON.parse('{"title":"LMstudio（本地大模型）","description":"","frontmatter":{},"headers":[],"relativePath":"work/third/LMstudio.md","filePath":"work/third/LMstudio.md","lastUpdated":1737637816000}'),p={name:"work/third/LMstudio.md"};function l(o,s,r,i,c,d){return t(),e("div",null,s[0]||(s[0]=[n(`<h1 id="lmstudio-本地大模型" tabindex="-1">LMstudio（本地大模型） <a class="header-anchor" href="#lmstudio-本地大模型" aria-label="Permalink to &quot;LMstudio（本地大模型）&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">⚠提示</p><p>使用Docker部署，支持服务器连接本地主机部署的大语言模型。使用大模型只需要一台主机，不需要其他费用。</p></div><p>信息</p><p>由于硬件等问题，部署存在一起难度，小白用户推荐购买已安装SD绘画和大模型的显卡AI主机：<a href="https://www.goofish.com/item?id=836172376138" target="_blank" rel="noreferrer">https://www.goofish.com/item?id=836172376138</a></p><div class="tip custom-block"><p class="custom-block-title">⚠ 提示注意</p><p>本教程如果涉及本地主机部署，需要本地主机可以连接境外站点，请自行解决此问题。</p></div><h2 id="安装lmstudio" tabindex="-1">安装LMstudio <a class="header-anchor" href="#安装lmstudio" aria-label="Permalink to &quot;安装LMstudio&quot;">​</a></h2><p>打开<a href="https://lmstudio.ai/" target="_blank" rel="noreferrer">https://lmstudio.ai/</a>，找到适合自己系统环境的安装包，下载好后双击安装包进行安装。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/download-lmstudio.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/install-lmstudio.png" alt=""></p><h2 id="下载大语言模型" tabindex="-1">下载大语言模型 <a class="header-anchor" href="#下载大语言模型" aria-label="Permalink to &quot;下载大语言模型&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">⚠ 提示注意</p><p>本步骤可能由于网络问题，无法显示大模型列表和下载。</p></div><p>在LMstudio上搜索大语言模型，这里以通义千问为例进行说明。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/search-model.png" alt="">然后从大模型列表中选择并下载模型。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/download-model.png" alt=""></p><h2 id="测试大语言模型" tabindex="-1">测试大语言模型 <a class="header-anchor" href="#测试大语言模型" aria-label="Permalink to &quot;测试大语言模型&quot;">​</a></h2><p>点击【💬图标】，选择加载已经下载好的大语言模型，在聊天框输入信息即可得到大模型语言的回复。 回复速度与主机配置有关，同时也可以查阅关于如何配置LMstudio GPU的相关资料。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/loading-model.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/test-model.png" alt=""></p><h2 id="启动大语言模型接口服务" tabindex="-1">启动大语言模型接口服务 <a class="header-anchor" href="#启动大语言模型接口服务" aria-label="Permalink to &quot;启动大语言模型接口服务&quot;">​</a></h2><p>点击【↔︎图标】-&gt;【Start Server】，启动接口服务，默认端口为1234。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/start-api.png" alt=""></p><h2 id="服务器连接本地主机部署的服务" tabindex="-1">服务器连接本地主机部署的服务 <a class="header-anchor" href="#服务器连接本地主机部署的服务" aria-label="Permalink to &quot;服务器连接本地主机部署的服务&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">⚠ 提示</p><p>全能AI知识库系统3.5以后的版本，支持使用frp连接本地部署的绘画服务器和模型，无需购买GPU服务器，即可使用开源模型。</p></div><div class="danger custom-block"><p class="custom-block-title">⚠ 注意</p><p>如果你在服务器部署大语言模型，直接绕过本步骤。</p></div><h3 id="服务器上的设置" tabindex="-1">服务器上的设置 <a class="header-anchor" href="#服务器上的设置" aria-label="Permalink to &quot;服务器上的设置&quot;">​</a></h3><ul><li><strong>步骤1</strong>: 打开项目下/docker/config/frps/frps.toml文件，将auth.token字符串的密钥重新定义，可以使用其他任意非中文字符串，然后保存。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bindPort = 7314</span></span>
<span class="line"><span>auth.token = &quot;自己设置的非中文字符串&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frps.toml.png" alt=""></p><ul><li><strong>步骤2</strong>: 打开项目下/docker/config/supervisor/supervisor.ini文件，在最底部增加frps的守护进程，然后保存。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[program:frps]</span></span>
<span class="line"><span>command=/usr/bin/frps -c /usr/local/etc/frps.toml</span></span>
<span class="line"><span>directory=/usr/local/etc</span></span>
<span class="line"><span>autostart=true</span></span>
<span class="line"><span>autorestart=true</span></span>
<span class="line"><span>stderr_logfile=/var/log/frps.err.log</span></span>
<span class="line"><span>stdout_logfile=/var/log/frps.out.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/supervisor.ini.png" alt=""></p><ul><li><strong>步骤3</strong>: 点击【Docker】-&gt;【容器】，找到项目的PHP容器，点击【重启】。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/php-container-restart.png" alt=""></li><li><strong>步骤4</strong>: 点击在宝塔面板【安全】-&gt;【添加端口规则】，将7314端口放行。 然后在服务器服务商的（阿里云、腾讯云等）控制台的安全组开放7314端口，保障端口是连通的。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/port.png" alt=""></li></ul><p>提示</p><p>如何测试端口是否放行，可以打开<a href="https://tool.chinaz.com/port" target="_blank" rel="noreferrer">https://tool.chinaz.com/port</a>,输入服务器IP地址和端口，点击【开启扫描】，状态为开启，即端口是连通的。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/test-port.png" alt=""></p><div class="tip custom-block"><p class="custom-block-title">⚠ ⚠️ 提示</p><p>如果已经使用3.5以下老版本，步骤所有不同，步骤1的文件可能不存在，可以从新下载的源码复制进去，放在相同的位置，按步骤1的操作。步骤2照样操作。 然后打开项目下docker-compose.yml文件，找到PHP容器配置，将除了&quot;user:xxxx&quot;选项以外替换为新版本的内容，注意保持缩进（就是前面有多少空格不要更改）。 <img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/docker-compose-php.png" alt="">返回【Docker】-&gt;【容器】，然后删除属于本项目下的所有容器，一般情况下，删除容器不会数据，如果不放心可先备份。接着返回【容器编排】，删除之前添加的容器编排，重新添加即可。</p></div><h3 id="本地主机上的设置" tabindex="-1">本地主机上的设置 <a class="header-anchor" href="#本地主机上的设置" aria-label="Permalink to &quot;本地主机上的设置&quot;">​</a></h3><div class="danger custom-block"><p class="custom-block-title">⚠ 提示</p><p>frp是一款非常优秀的内网穿透软件。</p></div><ul><li><strong>步骤1</strong>: 在部署SD服务的主机上，打开<a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noreferrer">https://github.com/fatedier/frp/releases</a>，下载自己系统相对应的frp0.58.1软件版本，“解压下载的压缩包。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/download-frp.png" alt=""></li><li><strong>步骤2</strong>: 右键点击【frpc.toml】文件，点击【在记事本中编辑】，打开文件，然后设置frpc信息，其中serverAddr为服务器ip地址，auth.token为服务器上frps.toml的auth.token的值一致，localPort和remotePort为SD服务器的端口，然后保存文件。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>serverAddr = &quot;你的ip地址&quot;</span></span>
<span class="line"><span>serverPort = 7314</span></span>
<span class="line"><span>auth.token = &quot;你服务上设置的任意非中文字符串&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[proxies]]</span></span>
<span class="line"><span>name = &quot;sd&quot;</span></span>
<span class="line"><span>type = &quot;tcp&quot;</span></span>
<span class="line"><span>localIP = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>localPort = 1234</span></span>
<span class="line"><span>remotePort = 1234</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frpc.toml.png" alt=""></p><div class="tip custom-block"><p class="custom-block-title">⚠ 提示</p><p>frpc启动失败，可能是以下原因。 1.服务器公网IP地址、端口、auth.token设置不正确。 2.服务器端口没有对外开放，无法连通。 3.服务器上容器的frps没有正确运行。</p></div><ul><li><strong>步骤3</strong>: 在frp目录空白处右键【在终端中打开】，在终端运行以下命令，运行frpc，启动成功好，可以看到以下界面。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.\\frpc.exe -c frpc.toml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/start-frpc.png" alt=""></p><h2 id="管理后台配置" tabindex="-1">管理后台配置 <a class="header-anchor" href="#管理后台配置" aria-label="Permalink to &quot;管理后台配置&quot;">​</a></h2><p>登录管理后台，打开【AI应用】-&gt;【SD绘图】-&gt;【应用配置】，【AI域名】如果了使用【## 服务器连接本地主机部署的服务 】，设置为<code>http://127.0.0.1:1234</code>，如果不使用，直接配置服务器的公网IP地址和端口。配置完成以后，可以在前台选择LMstudio测试。<img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/admin-settings-model-1.png" alt=""><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/lmstudio/admin-settings-model-2.png" alt=""></p>`,39)]))}const h=a(p,[["render",l]]);export{u as __pageData,h as default};
