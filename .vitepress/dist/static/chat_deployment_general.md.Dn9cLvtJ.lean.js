import{_ as s,c as n,a3 as p,o as e}from"./chunks/framework.DUiUPaIL.js";const g=JSON.parse('{"title":"通用部署②/③","description":"","frontmatter":{},"headers":[],"relativePath":"chat/deployment/general.md","filePath":"chat/deployment/general.md"}'),l={name:"chat/deployment/general.md"};function i(t,a,c,o,r,h){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="通用部署2-3" tabindex="-1">通用部署②/③ <a class="header-anchor" href="#通用部署2-3" aria-label="Permalink to &quot;通用部署②/③&quot;">​</a></h1><p>提示</p><p>推荐服务器最低配置：CPU双核、内存4GB、硬盘20GB、带宽5兆</p><p>如果你非常熟悉PHP项目的部署安装，可以参考一下信息部署项目。不熟悉可参考其他部署方式。</p><h2 id="项目入口" tabindex="-1">项目入口 <a class="header-anchor" href="#项目入口" aria-label="Permalink to &quot;项目入口&quot;">​</a></h2><p>项目入口目录：server/public 　 项目入口文件：server/public/index.php</p><h2 id="php扩展设置" tabindex="-1">PHP扩展设置 <a class="header-anchor" href="#php扩展设置" aria-label="Permalink to &quot;PHP扩展设置&quot;">​</a></h2><p>项目server/license目录有PHP扩展，都是统一个配置扩展，针对不同系统使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>swoole_loader80.so //linux系统、PHP非线程安全,一般nginx环境使用</span></span>
<span class="line"><span>swoole_loader80_zts.so //linux系统、PHP线程安全</span></span>
<span class="line"><span>swoole_loader80_nzts_x64.dll //windows系统、PHP非线程安全,一般nginx环境使用</span></span>
<span class="line"><span>swoole_loader80_zts_x64.dll //windows系统、PHP线程安全</span></span></code></pre></div><h2 id="nginx配置" tabindex="-1">nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;nginx配置&quot;">​</a></h2><p>nginx全配置</p><p>nginx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    listen 443 ssl;</span></span>
<span class="line"><span>    server_name  www.chat.localhost;</span></span>
<span class="line"><span>    ssl_certificate /ssl/www.chat.localhost.crt;</span></span>
<span class="line"><span>    ssl_certificate_key /ssl/www.localhost.key;</span></span>
<span class="line"><span>    access_log /logs/demo.likeadmin.cnt_access_nginx.log;</span></span>
<span class="line"><span>    error_log /logs/demo.likeadmin.cn_error_nginx.log;</span></span>
<span class="line"><span>    client_max_body_size 5M;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root  chat/server/public;#入口文件目录</span></span>
<span class="line"><span>        index  index.html index.htm index.php;</span></span>
<span class="line"><span>        if (!-e $request_filename)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            rewrite ^/(.*)$ /index.php?s=$1 last;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    location ~ /.*\\.php/ {</span></span>
<span class="line"><span>        rewrite ^(.*?/?)(.*\\.php)(.*)$ /$2?s=$3 last;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root   /var/www/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ \\.php$ {</span></span>
<span class="line"><span>        fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>        fastcgi_index  index.php;</span></span>
<span class="line"><span>        fastcgi_param  SCRIPT_FILENAME  chat/server/public$fastcgi_script_name; #入口文件目录</span></span>
<span class="line"><span>        include        fastcgi_params;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    location = /favicon.ico {</span></span>
<span class="line"><span>            log_not_found off;</span></span>
<span class="line"><span>            access_log off;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>nginx伪静态</p><p>nginx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (!-e $request_filename)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            rewrite ^/(.*)$ /index.php?s=$1 last;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span></code></pre></div><h2 id="apache配置" tabindex="-1">apache配置 <a class="header-anchor" href="#apache配置" aria-label="Permalink to &quot;apache配置&quot;">​</a></h2><p>apache伪静态</p><p>apache</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;IfModule mod_rewrite.c&gt;</span></span>
<span class="line"><span>  Options +FollowSymlinks -Multiviews</span></span>
<span class="line"><span>  RewriteEngine On</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RewriteCond %{REQUEST_FILENAME} !-d</span></span>
<span class="line"><span>RewriteCond %{REQUEST_FILENAME} !-f</span></span>
<span class="line"><span>RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span></code></pre></div><h2 id="授权" tabindex="-1">授权 <a class="header-anchor" href="#授权" aria-label="Permalink to &quot;授权&quot;">​</a></h2><p>注意</p><p>1.授权文件与产品一一对应，如果不是同一产品，将无法使用。 2.授权文件与项目域名也是一一对应，不然无法使用。</p><ul><li><strong>步骤1</strong>: 购买后源码，登录官网，下载授权文件。<img src="https://doc.chatmoney.cn/docs/images/chat/deployment/server/license-1.png" alt=""></li><li><strong>步骤2</strong>: 添加授权文件到server/license目录，并命名为：my.license ，如果仍无法使用，请联系客服。<img src="https://doc.chatmoney.cn/docs/images/chat/deployment/server/license-2.png" alt=""></li></ul><h2 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-label="Permalink to &quot;定时任务&quot;">​</a></h2><p>使用crontab命令设置以下命令为定时任务，1分钟运行1次，注意，运行用户要和PHP运行用户一致。</p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>php /www/wwwroot/项目/server/think crontab</span></span></code></pre></div><h2 id="访问地址" tabindex="-1">访问地址 <a class="header-anchor" href="#访问地址" aria-label="Permalink to &quot;访问地址&quot;">​</a></h2><p>管理后台地址：<a href="https://chat-demo.likeshop.cn/admin" target="_blank" rel="noreferrer">http://域名/admin</a> PC端地址：<a href="https://chat.likeshop.cn/pc" target="_blank" rel="noreferrer">http://域名/pc</a> 手机端地址：<a href="https://chat.likeshop.cn/mobile" target="_blank" rel="noreferrer">http://域名/mobile</a></p>`,30)]))}const m=s(l,[["render",i]]);export{g as __pageData,m as default};
