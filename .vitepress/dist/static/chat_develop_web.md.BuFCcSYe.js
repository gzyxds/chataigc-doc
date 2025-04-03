import{_ as s,c as a,o as i,ag as l}from"./chunks/framework.BHAHxt1l.js";const u=JSON.parse('{"title":"前端开发指南","description":"","frontmatter":{},"headers":[],"relativePath":"chat/develop/web.md","filePath":"chat/develop/web.md","lastUpdated":1737634698000}'),n={name:"chat/develop/web.md"};function t(p,e,d,o,r,c){return i(),a("div",null,e[0]||(e[0]=[l(`<h1 id="前端开发指南" tabindex="-1">前端开发指南 <a class="header-anchor" href="#前端开发指南" aria-label="Permalink to &quot;前端开发指南&quot;">​</a></h1><p>本指南将帮助您完成前端项目的环境准备、初始化、开发模式和生产模式的配置与运行。</p><hr><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">⚠️ 警告</p><ul><li><strong>Node 版本</strong>：推荐使用 Node 16+ 版本。</li><li><strong>包管理工具</strong>：推荐使用 <code>yarn</code>。</li><li><strong>首次使用</strong>：如果未安装 <code>yarn</code>，可以通过以下命令安装：</li></ul></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h2 id="通过命令自动初始化项目" tabindex="-1">通过命令自动初始化项目 <a class="header-anchor" href="#通过命令自动初始化项目" aria-label="Permalink to &quot;通过命令自动初始化项目&quot;">​</a></h2><h3 id="操作步骤" tabindex="-1">操作步骤 <a class="header-anchor" href="#操作步骤" aria-label="Permalink to &quot;操作步骤&quot;">​</a></h3><ol><li><p><strong>进入项目目录</strong>：</p><ul><li>下载安装包后，进入 <code>uniapp/</code>、<code>pc/</code> 或 <code>admin/</code> 目录。</li></ul></li><li><p><strong>运行初始化命令</strong>：</p><ul><li>在终端中运行以下命令：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>选择是否安装依赖（如果已安装过依赖，可以选择 <code>n</code>）。</li></ul></li><li><p><strong>输入服务器域名</strong>：</p><ul><li>输入您的服务器域名地址，例如：<code>https://xxx.com</code>。</li></ul></li><li><p><strong>选择客户端</strong>：</p><ul><li>选择需要运行的客户端。</li></ul></li><li><p><strong>完成初始化</strong>：</p><ul><li>运行成功后，项目初始化完成，可以开始二次开发。</li></ul></li></ol><hr><h2 id="pc-端-pc" tabindex="-1">PC 端 (pc) <a class="header-anchor" href="#pc-端-pc" aria-label="Permalink to &quot;PC 端 (pc)&quot;">​</a></h2><h3 id="首次使用" tabindex="-1">首次使用 <a class="header-anchor" href="#首次使用" aria-label="Permalink to &quot;首次使用&quot;">​</a></h3><ol><li><p><strong>安装依赖</strong>：</p><ul><li>确保 Node 版本为 16+，运行以下命令安装依赖：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><p><strong>复制环境文件</strong>：</p><ul><li>复制以下文件并重命名： <ul><li>复制 <code>.env.example</code> 为 <code>.env</code>。</li><li>复制 <code>.env.development.example</code> 为 <code>.env.development</code>。</li><li>复制 <code>.env.production.example</code> 为 <code>.env.production</code>。</li></ul></li></ul></li><li><p><strong>配置环境变量</strong>：</p><ul><li><strong><code>.env</code></strong>：应用全局配置（通常无需修改）。<div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NUXT_VERSION=1.0.0</span></span>
<span class="line"><span>NUXT_API_PREFIX=/api</span></span>
<span class="line"><span>NUXT_CLIENT=4</span></span>
<span class="line"><span>NUXT_BASE_URL=/pc/</span></span>
<span class="line"><span>NUXT_SSR=</span></span>
<span class="line"><span>NITRO_PORT=3000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><strong><code>.env.development</code></strong>：开发环境。<div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NUXT_API_URL=&#39;输入你的域名&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><strong><code>.env.production</code></strong>：生产环境。<div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NUXT_API_URL=&#39;输入你的请求域名&#39;  // 填空则跟随网站域名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li></ol><hr><h3 id="开发模式" tabindex="-1">开发模式 <a class="header-anchor" href="#开发模式" aria-label="Permalink to &quot;开发模式&quot;">​</a></h3><ul><li><strong>运行开发环境</strong>：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><hr><h3 id="生产模式" tabindex="-1">生产模式 <a class="header-anchor" href="#生产模式" aria-label="Permalink to &quot;生产模式&quot;">​</a></h3><ol><li><p><strong>非 SEO 模式</strong>：</p><ul><li>修改 <code>.env.production</code> 文件中的 <code>NUXT_API_URL</code> 为项目部署的服务端地址。</li><li>运行以下命令打包：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><p><strong>SEO 模式</strong>：</p><ul><li>修改 <code>.env</code> 文件，开启 SSR：<div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NUXT_SSR=1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>运行以下命令打包：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:ssr</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li></ol><hr><h2 id="移动端-uniapp" tabindex="-1">移动端 (uniapp) <a class="header-anchor" href="#移动端-uniapp" aria-label="Permalink to &quot;移动端 (uniapp)&quot;">​</a></h2><h3 id="首次使用-1" tabindex="-1">首次使用 <a class="header-anchor" href="#首次使用-1" aria-label="Permalink to &quot;首次使用&quot;">​</a></h3><ol><li><p><strong>安装依赖</strong>：</p><ul><li>确保 Node 版本为 16+，运行以下命令安装依赖：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><p><strong>复制环境文件</strong>：</p><ul><li>复制以下文件并重命名： <ul><li>复制 <code>.env.development.example</code> 为 <code>.env.development</code>。</li><li>复制 <code>.env.production.example</code> 为 <code>.env.production</code>。</li></ul></li></ul></li><li><p><strong>配置环境变量</strong>：</p><ul><li><strong><code>.env.development</code></strong>：开发环境。<div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NODE_ENV = &#39;development&#39;</span></span>
<span class="line"><span>VITE_APP_BASE_URL=&#39;输入你的请求域名&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><strong><code>.env.production</code></strong>：生产环境。<div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NODE_ENV = &#39;production&#39;</span></span>
<span class="line"><span>VITE_APP_BASE_URL=&#39;输入你的请求域名&#39;  // 填空则跟随网站域名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul></li></ol><hr><h3 id="在-vscode-中开发" tabindex="-1">在 VSCode 中开发 <a class="header-anchor" href="#在-vscode-中开发" aria-label="Permalink to &quot;在 VSCode 中开发&quot;">​</a></h3><ol><li><p><strong>开发模式</strong>：</p><ul><li><strong>运行 H5</strong>：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev:h5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><strong>运行小程序</strong>：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev:mp-weixin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>运行完成后，打开微信开发者工具，导入 <code>uniapp/dist/dev/mp-weixin</code> 目录。</li></ul></li></ul></li><li><p><strong>生产模式</strong>：</p><ul><li><strong>打包 H5</strong>：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:h5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>将打包后的代码上传到服务器或仓库。</li></ul></li><li><strong>打包小程序</strong>：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:mp-weixin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>运行完成后，打开微信开发者工具，导入 <code>uniapp/dist/dev/mp-weixin</code> 目录并上传代码。</li></ul></li></ul></li></ol><hr><h3 id="在-hbuilderx-中开发" tabindex="-1">在 HbuilderX 中开发 <a class="header-anchor" href="#在-hbuilderx-中开发" aria-label="Permalink to &quot;在 HbuilderX 中开发&quot;">​</a></h3><ol><li><p><strong>运行 uniapp</strong>：</p><ul><li>导入项目：点击 <code>文件</code> -&gt; <code>导入</code> -&gt; <code>从本地目录导入</code>，选择 <code>uniapp</code> 目录。</li><li>安装依赖：点击 <code>工具</code> -&gt; <code>外部命令</code> -&gt; <code>npm install</code>。</li><li>运行 H5：点击 <code>运行</code> -&gt; <code>运行到浏览器</code> -&gt; <code>Chrome</code>。</li><li>运行小程序：点击 <code>运行</code> -&gt; <code>运行到小程序模拟器</code> -&gt; <code>微信开发者工具</code>。</li></ul></li><li><p><strong>发行 uniapp</strong>：</p><ul><li><strong>发行 H5</strong>： <ul><li>点击 <code>发行</code> -&gt; <code>网站-PC Web 或手机 H5</code>，输入标题并打包。</li><li>将打包后的代码上传到服务器或仓库。</li></ul></li><li><strong>发行小程序</strong>： <ul><li>点击 <code>发行</code> -&gt; <code>小程序-微信</code>，输入小程序名称和 AppID 并打包。</li><li>运行完成后，自动打开微信开发者工具并上传代码。</li></ul></li></ul></li></ol><hr><h2 id="后台管理-admin" tabindex="-1">后台管理 (admin) <a class="header-anchor" href="#后台管理-admin" aria-label="Permalink to &quot;后台管理 (admin)&quot;">​</a></h2><h3 id="首次使用-2" tabindex="-1">首次使用 <a class="header-anchor" href="#首次使用-2" aria-label="Permalink to &quot;首次使用&quot;">​</a></h3><ol><li><p><strong>安装依赖</strong>：</p><ul><li>确保 Node 版本为 16+，运行以下命令安装依赖：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><p><strong>复制环境文件</strong>：</p><ul><li>复制以下文件并重命名： <ul><li>复制 <code>.env.development.example</code> 为 <code>.env.development</code>。</li><li>复制 <code>.env.production.example</code> 为 <code>.env.production</code>。</li></ul></li></ul></li><li><p><strong>配置环境变量</strong>：</p><ul><li><strong><code>.env.development</code></strong>：开发环境。<div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NODE_ENV = &#39;development&#39;</span></span>
<span class="line"><span>VITE_APP_BASE_URL=&#39;输入你的请求域名&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><strong><code>.env.production</code></strong>：生产环境。<div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NODE_ENV = &#39;production&#39;</span></span>
<span class="line"><span>VITE_APP_BASE_URL=&#39;输入你的请求域名&#39;  // 填空则跟随网站域名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul></li></ol><hr><h3 id="开发模式-1" tabindex="-1">开发模式 <a class="header-anchor" href="#开发模式-1" aria-label="Permalink to &quot;开发模式&quot;">​</a></h3><ul><li><strong>运行开发环境</strong>：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><hr><h3 id="生产模式-1" tabindex="-1">生产模式 <a class="header-anchor" href="#生产模式-1" aria-label="Permalink to &quot;生产模式&quot;">​</a></h3><ul><li><strong>打包生产环境</strong>：<div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><hr><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><p><strong>依赖安装</strong>：</p><ul><li>确保 Node 版本为 16+，运行 <code>yarn install</code> 安装依赖。</li><li>如果安装或运行出错，尝试删除 <code>yarn.lock</code> 和 <code>node_modules</code> 后重新安装。</li></ul></li><li><p><strong>持续更新</strong>：</p><ul><li>本指南将持续更新，请关注最新版本。</li></ul></li></ol><hr><h2 id="至此前端开发指南完成" tabindex="-1">至此前端开发指南完成 <a class="header-anchor" href="#至此前端开发指南完成" aria-label="Permalink to &quot;至此前端开发指南完成&quot;">​</a></h2><p>通过以上步骤，您可以顺利完成前端项目的初始化、开发和打包操作。如有其他问题，请参考相关文档或联系技术支持。</p>`,46)]))}const b=s(n,[["render",t]]);export{u as __pageData,b as default};
