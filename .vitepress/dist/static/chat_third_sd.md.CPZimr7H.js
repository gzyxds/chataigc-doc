import{_ as i,c as a,o as e,ag as n}from"./chunks/framework.BHAHxt1l.js";const k=JSON.parse('{"title":"Stable Diffusion WebUI 绘图部署教程","description":"","frontmatter":{},"headers":[],"relativePath":"chat/third/sd.md","filePath":"chat/third/sd.md","lastUpdated":1737634698000}'),l={name:"chat/third/sd.md"};function t(p,s,r,h,o,d){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="stable-diffusion-webui-绘图部署教程" tabindex="-1">Stable Diffusion WebUI 绘图部署教程 <a class="header-anchor" href="#stable-diffusion-webui-绘图部署教程" aria-label="Permalink to &quot;Stable Diffusion WebUI 绘图部署教程&quot;">​</a></h1><p>本教程将指导您如何部署 Stable Diffusion WebUI（SD WebUI）绘图服务，支持服务器连接本地主机部署的绘画模型。使用大模型只需要一台主机，无需其他费用。</p><hr><h2 id="提示" tabindex="-1">提示 <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示&quot;">​</a></h2><ul><li><strong>使用 Docker 部署</strong>：支持服务器连接本地主机部署的绘画模型。</li><li><strong>硬件要求</strong>：由于硬件等问题，部署存在一定难度。小白用户推荐购买已安装 SD 绘画和大模型的显卡 AI 主机：<a href="https://www.goofish.com/item?id=836172376138" target="_blank" rel="noreferrer">https://www.goofish.com/item?id=836172376138</a>。</li><li><strong>网络要求</strong>：如果涉及本地主机部署，需要本地主机可以连接境外站点（如 GitHub）。请自行解决此问题。</li></ul><hr><h2 id="安装-python-环境" tabindex="-1">安装 Python 环境 <a class="header-anchor" href="#安装-python-环境" aria-label="Permalink to &quot;安装 Python 环境&quot;">​</a></h2><ol><li>打开 <a href="https://www.python.org/downloads" target="_blank" rel="noreferrer">Python 官网</a>，找到适合自己系统环境的安装包，下载并安装 <strong>Python 3.10.6</strong>。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-python-1.png" alt="下载 Python"><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-python.png" alt="安装 Python"></p><hr><h2 id="安装-git" tabindex="-1">安装 Git <a class="header-anchor" href="#安装-git" aria-label="Permalink to &quot;安装 Git&quot;">​</a></h2><ol><li>打开 <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git 官网</a>，找到适合自己系统环境的安装包，下载并安装 Git。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-git-1.png" alt="安装 Git"><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/install-git-3.png" alt="安装 Git 完成"></p><hr><h2 id="使用-git-下载-stable-diffusion-webui" tabindex="-1">使用 Git 下载 Stable Diffusion WebUI <a class="header-anchor" href="#使用-git-下载-stable-diffusion-webui" aria-label="Permalink to &quot;使用 Git 下载 Stable Diffusion WebUI&quot;">​</a></h2><p>⚠️ <strong>注意</strong>：由于 GitHub 是境外网站，网络问题可能导致命令执行失败。请确保网络畅通，必要时多次重试。</p><ol><li><p>右键点击桌面或其他目录，选择【在终端中打开】。</p></li><li><p>输入以下命令，按【回车键】执行，将项目克隆到当前目录：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/AUTOMATIC1111/stable-diffusion-webui.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-sd-webui-1.png" alt="下载 SD WebUI"><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/download-sd-webui-2.png" alt="下载完成"></p><hr><h2 id="启动-stable-diffusion-webui" tabindex="-1">启动 Stable Diffusion WebUI <a class="header-anchor" href="#启动-stable-diffusion-webui" aria-label="Permalink to &quot;启动 Stable Diffusion WebUI&quot;">​</a></h2><h3 id="优化启动参数" tabindex="-1">优化启动参数 <a class="header-anchor" href="#优化启动参数" aria-label="Permalink to &quot;优化启动参数&quot;">​</a></h3><ol><li><p>打开 <code>stable-diffusion-webui</code> 目录，找到 <code>webui-user.bat</code> 文件。</p></li><li><p>右键编辑文件，添加以下参数，然后保存：</p><div class="language-bat vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@echo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> off</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PYTHON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GIT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VENV_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> COMMANDLINE_ARGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--api --listen --xformers --no-half</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> webui.bat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/edit-webui-user.bat.png" alt="编辑 webui-user.bat"></p><h3 id="启动服务" tabindex="-1">启动服务 <a class="header-anchor" href="#启动服务" aria-label="Permalink to &quot;启动服务&quot;">​</a></h3><ol><li>双击 <code>webui-user.bat</code> 文件，启动服务。</li><li>启动成功后，浏览器会自动打开默认端口为 <code>7860</code> 的界面。</li><li>如果是云服务器，请在服务器运营商控制台开放 <code>7860</code> 端口，并在管理后台【AI应用】-&gt;【SD绘图】-&gt;【应用配置】-&gt;【AI域名】中配置为 <code>http://公网IP:7860</code>。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/start-sd.png" alt="启动 SD WebUI"></p><hr><h2 id="添加绘画模型" tabindex="-1">添加绘画模型 <a class="header-anchor" href="#添加绘画模型" aria-label="Permalink to &quot;添加绘画模型&quot;">​</a></h2><p>⚠️ <strong>提示</strong>：不添加模型也可使用 SD 默认的模型。</p><ol><li>绘画模型可以在 <a href="https://www.liblib.art/" target="_blank" rel="noreferrer">Liblib</a> 或其他站点下载（部分模型商用需要授权，请自行判断）。</li><li>下载的模型文件格式为 <code>.safetensors</code>。</li><li>将模型文件放入以下目录： <ul><li>大模型：<code>models/Stable-diffusion</code></li><li>微调模型：<code>models/Lora</code></li><li>美化模型：<code>models/VAE</code></li></ul></li><li>放置完成后，关闭并重启程序。</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/sd/models.png" alt="模型目录"></p><hr><h2 id="服务器连接本地主机部署的服务" tabindex="-1">服务器连接本地主机部署的服务 <a class="header-anchor" href="#服务器连接本地主机部署的服务" aria-label="Permalink to &quot;服务器连接本地主机部署的服务&quot;">​</a></h2><h3 id="服务器上的设置" tabindex="-1">服务器上的设置 <a class="header-anchor" href="#服务器上的设置" aria-label="Permalink to &quot;服务器上的设置&quot;">​</a></h3><ol><li><p><strong>配置 frps.toml</strong>：</p><ul><li>打开项目目录 <code>/docker/config/frps/frps.toml</code> 文件。</li><li>修改 <code>auth.token</code> 为任意非中文字符串，保存文件。</li></ul><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bindPort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 7314</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">auth.token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;自己设置的非中文字符串&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frps.toml.png" alt="编辑 frps.toml"></p></li><li><p><strong>配置 supervisor.ini</strong>：</p><ul><li>打开项目目录 <code>/docker/config/supervisor/supervisor.ini</code> 文件。</li><li>在文件底部添加以下内容，保存文件。</li></ul><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[program:frps]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=/usr/bin/frps -c /usr/local/etc/frps.toml</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">directory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=/usr/local/etc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">autostart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">autorestart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">stderr_logfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=/var/log/frps.err.log</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">stdout_logfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=/var/log/frps.out.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/supervisor.ini.png" alt="编辑 supervisor.ini"></p></li><li><p><strong>重启 PHP 容器</strong>：</p><ul><li>在 Docker 中，找到项目的 PHP 容器，点击【重启】。</li></ul><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/php-container-restart.png" alt="重启 PHP 容器"></p></li><li><p><strong>开放端口</strong>：</p><ul><li>在宝塔面板【安全】-&gt;【添加端口规则】，开放 <code>7314</code> 端口。</li><li>在服务器运营商控制台（如阿里云、腾讯云）的安全组中开放 <code>7314</code> 端口。</li></ul><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/port.png" alt="开放端口"></p></li><li><p><strong>测试端口连通性</strong>：</p><ul><li>打开 <a href="https://tool.chinaz.com/port" target="_blank" rel="noreferrer">端口扫描工具</a>，输入服务器 IP 和端口，点击【开启扫描】。状态为“开启”即表示端口连通。</li></ul><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/test-port.png" alt="测试端口"></p></li></ol><hr><h3 id="本地主机上的设置" tabindex="-1">本地主机上的设置 <a class="header-anchor" href="#本地主机上的设置" aria-label="Permalink to &quot;本地主机上的设置&quot;">​</a></h3><ol><li><p><strong>下载 frp</strong>：</p><ul><li>打开 <a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noreferrer">frp 发布页</a>，下载适合自己系统的 <code>frp 0.58.1</code> 版本，并解压。</li></ul><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/download-frp.png" alt="下载 frp"></p></li><li><p><strong>配置 frpc.toml</strong>：</p><ul><li>右键编辑 <code>frpc.toml</code> 文件，设置以下内容并保存：</li></ul><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">serverAddr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你的服务器IP地址&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">serverPort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 7314</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">auth.token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你在服务器上设置的任意非中文字符串&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[[proxies]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sd&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tcp&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">localIP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">localPort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 7860</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">remotePort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 7860</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/frpc.toml.png" alt="编辑 frpc.toml"></p></li><li><p><strong>启动 frpc</strong>：</p><ul><li>在 frp 目录空白处右键【在终端中打开】，运行以下命令启动 frpc：</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">frpc.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frpc.toml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/frp/start-frpc.png" alt="启动 frpc"></p></li></ol><hr><h2 id="管理后台配置" tabindex="-1">管理后台配置 <a class="header-anchor" href="#管理后台配置" aria-label="Permalink to &quot;管理后台配置&quot;">​</a></h2><ol><li>登录管理后台，打开【AI应用】-&gt;【SD绘图】-&gt;【应用配置】。</li><li>如果使用了服务器连接本地主机部署的服务，将【AI域名】设置为 <code>http://127.0.0.1:7860</code>。</li><li>如果不使用，直接配置服务器的 IP 地址 + 端口。</li><li>设置好 SD 绘图分类模型等，即可在前台测试绘画。</li></ol><hr><h2 id="至此-stable-diffusion-webui-部署完成" tabindex="-1">至此 Stable Diffusion WebUI 部署完成 <a class="header-anchor" href="#至此-stable-diffusion-webui-部署完成" aria-label="Permalink to &quot;至此 Stable Diffusion WebUI 部署完成&quot;">​</a></h2><p>通过以上步骤，您可以顺利完成 Stable Diffusion WebUI 的部署工作。如有任何问题，请参考相关文档或联系技术支持。</p>`,44)]))}const g=i(l,[["render",t]]);export{k as __pageData,g as default};
