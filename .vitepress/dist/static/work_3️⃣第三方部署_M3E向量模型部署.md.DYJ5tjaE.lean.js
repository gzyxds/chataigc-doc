import{_ as s,c as n,a3 as e,o as p}from"./chunks/framework.DUiUPaIL.js";const m=JSON.parse('{"title":"接入 M3E 向量模型","description":"","frontmatter":{},"headers":[],"relativePath":"work/3️⃣第三方部署/M3E向量模型部署.md","filePath":"work/3️⃣第三方部署/M3E向量模型部署.md"}'),t={name:"work/3️⃣第三方部署/M3E向量模型部署.md"};function l(i,a,o,c,r,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="接入-m3e-向量模型" tabindex="-1">接入 M3E 向量模型 <a class="header-anchor" href="#接入-m3e-向量模型" aria-label="Permalink to &quot;接入 M3E 向量模型&quot;">​</a></h1><p>如果你想私有部署的话，可以使用 M3E 向量模型进行替换。M3E 向量模型属于小模型，资源使用不高，CPU 也可以运行。</p><h2 id="部署教程" tabindex="-1">部署教程 <a class="header-anchor" href="#部署教程" aria-label="Permalink to &quot;部署教程&quot;">​</a></h2><p><strong>1、下载Python文件:</strong> <a href="https://doc.chatmoney.cn/docs/download/m3e.zip" target="_blank" rel="noreferrer">点击Python文件</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 1.解压压缩包:</span></span>
<span class="line"><span>    得到一个 m3e 的目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2.在终端进入到目录中</span></span>
<span class="line"><span>    cd m3e</span></span></code></pre></div><p><strong>2、下载m3e的模型</strong>: <a href="https://huggingface.co/moka-ai/m3e-large/tree/main" target="_blank" rel="noreferrer">点击下载m3e-large模型</a><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-down.png" alt=""></p><p><strong>3、最终整个目录</strong><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-dir.png" alt=""></p><p><strong>4、在终端安装依赖 (进入到m3e目录里)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pip install -r requirements.txt</span></span></code></pre></div><p><strong>5、运行项目</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python main.py</span></span></code></pre></div><p><strong>6、运行起来的效果</strong><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-run.png" alt=""></p><h2 id="接口测试" tabindex="-1">接口测试 <a class="header-anchor" href="#接口测试" aria-label="Permalink to &quot;接口测试&quot;">​</a></h2><p><code>注意: 需要传递header头参数:</code><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-post.png" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PS: 注意设置请求头参数(header), 需要你传递1个密钥, 才可以正常访问</span></span>
<span class="line"><span>如果你没有传递密钥, 请求将会返回(即无权限):</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;detail&quot;: &quot;Not authenticated&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Header传参示例:</span></span>
<span class="line"><span>    Authorization: Bearer sk-nvO0YlZEIrljq0QXB35b7e4f711d4087Ac215c18De75A407</span></span>
<span class="line"><span>参数说明:</span></span>
<span class="line"><span>    Authorization是参数的名称</span></span>
<span class="line"><span>    Bearer sk-nv... 值 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>特别说明:</span></span>
<span class="line"><span>    sk-nvO0YlZEIrljq0QXB35b7e4f711d4087Ac215c18De75A407</span></span>
<span class="line"><span>    这个密钥是默认的密钥,如果你没有自行修改,默认就传这个值。</span></span>
<span class="line"><span>    如何修改他呢:</span></span>
<span class="line"><span>        m3e源码中的main.py, 搜索一直这个值,改成你自己的即可</span></span></code></pre></div><h2 id="接入系统" tabindex="-1">接入系统 <a class="header-anchor" href="#接入系统" aria-label="Permalink to &quot;接入系统&quot;">​</a></h2><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/m3e/m3e-set.png" alt=""></p>`,17)]))}const g=s(t,[["render",l]]);export{m as __pageData,g as default};
