import{_ as s,c as e,o as n,ag as i}from"./chunks/framework.BHAHxt1l.js";const m=JSON.parse('{"title":"🧮 接入 M3E 向量模型","description":"","frontmatter":{},"headers":[],"relativePath":"work/third/m3e.md","filePath":"work/third/m3e.md","lastUpdated":1737639082000}'),l={name:"work/third/m3e.md"};function t(p,a,r,h,d,o){return n(),e("div",null,a[0]||(a[0]=[i(`<h1 id="🧮-接入-m3e-向量模型" tabindex="-1">🧮 接入 M3E 向量模型 <a class="header-anchor" href="#🧮-接入-m3e-向量模型" aria-label="Permalink to &quot;🧮 接入 M3E 向量模型&quot;">​</a></h1><p>如果你想私有部署的话，可以使用 M3E 向量模型进行替换。M3E 向量模型属于小模型，资源使用不高，CPU 也可以运行。</p><h2 id="🚀-部署教程" tabindex="-1">🚀 部署教程 <a class="header-anchor" href="#🚀-部署教程" aria-label="Permalink to &quot;🚀 部署教程&quot;">​</a></h2><h3 id="_1️⃣-下载python文件" tabindex="-1">1️⃣ 下载Python文件 <a class="header-anchor" href="#_1️⃣-下载python文件" aria-label="Permalink to &quot;1️⃣ 下载Python文件&quot;">​</a></h3><p><a href="https://doc.chatmoney.cn/docs/download/m3e.zip" target="_blank" rel="noreferrer">📥 点击下载Python文件</a></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 解压压缩包</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    得到一个 m3e 的目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 在终端进入到目录中</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> m3e</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2️⃣-下载m3e的模型" tabindex="-1">2️⃣ 下载m3e的模型 <a class="header-anchor" href="#_2️⃣-下载m3e的模型" aria-label="Permalink to &quot;2️⃣ 下载m3e的模型&quot;">​</a></h3><p><a href="https://huggingface.co/moka-ai/m3e-large/tree/main" target="_blank" rel="noreferrer">📥 点击下载m3e-large模型</a></p><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-down.png" alt="m3e下载"></p><h3 id="_3️⃣-最终目录结构" tabindex="-1">3️⃣ 最终目录结构 <a class="header-anchor" href="#_3️⃣-最终目录结构" aria-label="Permalink to &quot;3️⃣ 最终目录结构&quot;">​</a></h3><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-dir.png" alt="目录结构"></p><h3 id="_4️⃣-安装依赖" tabindex="-1">4️⃣ 安装依赖 <a class="header-anchor" href="#_4️⃣-安装依赖" aria-label="Permalink to &quot;4️⃣ 安装依赖&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_5️⃣-运行项目" tabindex="-1">5️⃣ 运行项目 <a class="header-anchor" href="#_5️⃣-运行项目" aria-label="Permalink to &quot;5️⃣ 运行项目&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.py</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_6️⃣-运行效果" tabindex="-1">6️⃣ 运行效果 <a class="header-anchor" href="#_6️⃣-运行效果" aria-label="Permalink to &quot;6️⃣ 运行效果&quot;">​</a></h3><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-run.png" alt="运行效果"></p><h2 id="🔧-接口测试" tabindex="-1">🔧 接口测试 <a class="header-anchor" href="#🔧-接口测试" aria-label="Permalink to &quot;🔧 接口测试&quot;">​</a></h2><blockquote><p>⚠️ 注意: 需要传递header头参数</p></blockquote><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-post.png" alt="postman示例"></p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 请求头参数说明</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **Header传参示例:**</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Authorization: Bearer sk-nvO0YlZEIrljq0QXB35b7e4f711d4087Ac215c18De75A407</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>- **参数说明:**</span></span>
<span class="line"><span>- \`Authorization\` 是参数的名称</span></span>
<span class="line"><span>- \`Bearer sk-nv...\` 是值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **特别说明:**</span></span>
<span class="line"><span>- \`sk-nvO0YlZEIrljq0QXB35b7e4f711d4087Ac215c18De75A407\` 是默认密钥</span></span>
<span class="line"><span>- 如需修改，请在 \`m3e\` 源码中的 \`main.py\` 文件中搜索并修改该值</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="🔗-接入系统" tabindex="-1">🔗 接入系统 <a class="header-anchor" href="#🔗-接入系统" aria-label="Permalink to &quot;🔗 接入系统&quot;">​</a></h2><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-set.png" alt="接入设置"></p>`,25)]))}const b=s(l,[["render",t]]);export{m as __pageData,b as default};
