import{_ as e,c as n,a3 as s,o as p}from"./chunks/framework.ClyJLzC8.js";const u=JSON.parse('{"title":"版本号","description":"","frontmatter":{},"headers":[],"relativePath":"docs/work/二次开发/前端开发.md","filePath":"docs/work/二次开发/前端开发.md"}'),l={name:"docs/work/二次开发/前端开发.md"};function i(o,a,d,t,c,r){return p(),n("div",null,a[0]||(a[0]=[s(`<h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h2><hr><p>⚠️ 警告</p><p>首先需要在本地安装node，推荐node的版本16+ 推荐使用的包管理工具是 yarn 首次使用yarn可以先安装=&gt;<code>npm install yarn -g</code></p><h2 id="通过命令自动初始化项目" tabindex="-1">通过命令自动初始化项目 <a class="header-anchor" href="#通过命令自动初始化项目" aria-label="Permalink to &quot;通过命令自动初始化项目&quot;">​</a></h2><hr><p>在官网下载安装包以后想为前端进行二开， 进入<code>uniapp/</code>或者<code>pc/</code>或者<code>admin/</code>时，可以通过一条命令自动帮你初始化你的项目</p><p><strong>下面以uniapp文件夹为例子使用</strong> 在终端命令行中输入</p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run init</span></span></code></pre></div><ol><li>运行npm run init 回车 选择是否安装依赖（如果已经安装过可以选择n）</li></ol><p><img src="https://doc.chatmoney.cn/docs/images/general/develop/web/uniapp_01.png" alt=""> 2. 自动安装成功后会让你输入你的服务器域名地址，例如: <a href="https://xxx.com/" target="_blank" rel="noreferrer">https://xxx.com</a></p><p><img src="https://doc.chatmoney.cn/docs/images/general/develop/web/uniapp_02.png" alt=""> 3. 选择你需要运行的客户端</p><p><img src="https://doc.chatmoney.cn/docs/images/general/develop/web/uniapp_03.png" alt=""> 4. 运行成功（则表示当前项目的初始化已经完成，可以开始二开本项目了</p><p><img src="https://doc.chatmoney.cn/docs/images/general/develop/web/uniapp_04.png" alt=""></p><p>⚠️ 警告</p><p>如果通过自动初始化项目的则不需要对下面的教程文档看了，只需看打包生产那部分就好</p><h2 id="pc端-pc" tabindex="-1">PC端(pc) <a class="header-anchor" href="#pc端-pc" aria-label="Permalink to &quot;PC端(pc)&quot;">​</a></h2><hr><p><strong>首次使用先安装</strong>​<strong>​<code>yarn install</code>​</strong>​<strong>安装前请确保node版本为推荐的16+</strong></p><ul><li><p>复制env文件</p><ol><li>复制<code>.env.example</code>，将复制的文件名修改为<code>.env</code></li><li>复制<code>.env.development.example</code>，将复制的文件名修改为<code>.env.developme</code></li><li>复制<code>.env.production.example</code>，将复制的文件名修改为<code>.env.production</code></li></ol></li><li><p>复制以后示例 <img src="https://doc.chatmoney.cn/docs/images/general/develop/web/pc_dev01.png" alt=""></p></li><li><p>.env 应用全局配置（通常将他复制出来以后无需修改里面的内容</p></li></ul><h1 id="版本号" tabindex="-1">版本号 <a class="header-anchor" href="#版本号" aria-label="Permalink to &quot;版本号&quot;">​</a></h1><p>NUXT_VERSION=1.0.0</p><h1 id="接口默认前缀" tabindex="-1">接口默认前缀 <a class="header-anchor" href="#接口默认前缀" aria-label="Permalink to &quot;接口默认前缀&quot;">​</a></h1><p>NUXT_API_PREFIX=/api</p><h1 id="客户端类型" tabindex="-1">客户端类型 <a class="header-anchor" href="#客户端类型" aria-label="Permalink to &quot;客户端类型&quot;">​</a></h1><p>NUXT_CLIENT=4</p><h1 id="基础路径" tabindex="-1">基础路径 <a class="header-anchor" href="#基础路径" aria-label="Permalink to &quot;基础路径&quot;">​</a></h1><p>NUXT_BASE_URL=/pc/</p><h1 id="是否开启ssr-填些任意值开启" tabindex="-1">是否开启ssr，填些任意值开启 <a class="header-anchor" href="#是否开启ssr-填些任意值开启" aria-label="Permalink to &quot;是否开启ssr，填些任意值开启&quot;">​</a></h1><p>NUXT_SSR=</p><h1 id="端口号" tabindex="-1">端口号 <a class="header-anchor" href="#端口号" aria-label="Permalink to &quot;端口号&quot;">​</a></h1><p>NITRO_PORT=3000</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>点击打开</span></span>
<span class="line"><span>* .env.development</span></span>
<span class="line"><span>  开发环境</span></span></code></pre></div><h1 id="请求域名" tabindex="-1">请求域名 <a class="header-anchor" href="#请求域名" aria-label="Permalink to &quot;请求域名&quot;">​</a></h1><p>NUXT_API_URL=&#39;输入你的域名&#39;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>* .env.production</span></span>
<span class="line"><span>  生产环境</span></span></code></pre></div><h1 id="请求域名-1" tabindex="-1">请求域名 <a class="header-anchor" href="#请求域名-1" aria-label="Permalink to &quot;请求域名&quot;">​</a></h1><p>NUXT_API_URL=&#39;输入你的请求域名&#39; //填空则跟着网站的域名来请求</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>**以上配置完成后可运行下面命令**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### PC端开发模式</span></span>
<span class="line"><span>* 运行开发环境  </span></span>
<span class="line"><span>终端中运行命令</span></span>
<span class="line"><span>‍‍\`\`\`shell</span></span>
<span class="line"><span>yarn dev</span></span></code></pre></div><h3 id="pc端生产模式-打包" tabindex="-1">PC端生产模式（打包） <a class="header-anchor" href="#pc端生产模式-打包" aria-label="Permalink to &quot;PC端生产模式（打包）&quot;">​</a></h3><p>打包前修改接口请求域名，打开<code>.env.production</code>，修改<code>NUXT_API_URL</code>变量的值为项目安装部署的服务端地址</p><ul><li>运行生产环境（非seo） 终端中运行命令</li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn build</span></span></code></pre></div><p>注意</p><p>如果是非seo模式则不需要修改，将<code>NUXT_API_URL</code>留空即可，这样请求接口时会自动读取当前的域名做为接口请求的域名</p><ul><li>运行生产环境（seo） 打包支持<code>seo模式</code>和非<code>seo模式</code>（类似于vue的单页面应用），默认为<code>非seo</code>模式，修改<code>.env</code>文件可以修改模式</li></ul><p>.env 文件中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> # 是否开启ssr，填些任意值开启，为空则关闭</span></span>
<span class="line"><span> NUXT_SSR=1</span></span></code></pre></div><p>终端中运行命令</p><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn build:ssr</span></span></code></pre></div><p>注意</p><ol><li>首先拉取依赖包（拉取之前node版本必须为指定16+版本以上） =&gt;<code>yarn install</code></li><li>拉取成功无错误时开始执行打包或者运行模式</li><li>如果 运行 或者 拉取 时有错误，请先尝试删除yarn.lock文件以及node_modules文件夹以后重复1和2步骤</li></ol><h3 id="移动端-uniapp" tabindex="-1">移动端（uniapp） <a class="header-anchor" href="#移动端-uniapp" aria-label="Permalink to &quot;移动端（uniapp）&quot;">​</a></h3><hr><p><strong>首次使用先安装</strong>​<strong>​<code>yarn install</code>​</strong>​<strong>安装前请确保node版本为推荐的16+</strong></p><ul><li><p>复制env文件</p><ol><li>复制<code>.env.development.example</code>，将复制的文件名修改为<code>.env.developme</code></li><li>复制<code>.env.production.example</code>，将复制的文件名修改为<code>.env.production</code></li></ol></li><li><p>复制以后示例 <img src="https://doc.chatmoney.cn/docs/images/general/develop/web/admin_dev01.png" alt=""></p></li></ul><p>点击打开</p><ul><li>.env.development 开发环境</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NODE_ENV = &#39;development&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 请求域名</span></span>
<span class="line"><span>VITE_APP_BASE_URL=&#39;输入你的请求域名&#39;</span></span></code></pre></div><ul><li>.env.production 生产环境</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NODE_ENV = &#39;production&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 请求域名</span></span>
<span class="line"><span>VITE_APP_BASE_URL=&#39;输入你的请求域名&#39;  //填空则跟着网站的域名来请求</span></span></code></pre></div><h3 id="uniapp在vscode开发" tabindex="-1">uniapp在VSCode开发 <a class="header-anchor" href="#uniapp在vscode开发" aria-label="Permalink to &quot;uniapp在VSCode开发&quot;">​</a></h3><hr><h4 id="开发模式" tabindex="-1">开发模式 <a class="header-anchor" href="#开发模式" aria-label="Permalink to &quot;开发模式&quot;">​</a></h4><ul><li>运行h5 终端中运行命令</li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn dev:h5</span></span></code></pre></div><ul><li>运行小程序 终端中运行命令</li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn dev:mp-weixin</span></span></code></pre></div><p>运行完毕，打开<a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html" target="_blank" rel="noreferrer">微信开发者工具</a>，点击左上角菜单<code>项目</code>&gt;<code>导入项目</code>，导入地址选择<code>uniapp/dist/dev/mp-weixin</code>，点击确定成功导入项目</p><h4 id="生产模式" tabindex="-1">生产模式 <a class="header-anchor" href="#生产模式" aria-label="Permalink to &quot;生产模式&quot;">​</a></h4><ul><li><p>发行h5</p><ol><li>终端中运行命令</li></ol><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn build:h5</span></span></code></pre></div><ol start="2"><li>上传打包好的代码到服务器或仓库</li></ol></li><li><p>运行小程序 终端中运行命令</p></li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn build:mp-weixin</span></span></code></pre></div><p>运行完毕，打开<a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html" target="_blank" rel="noreferrer">微信开发者工具</a>，点击左上角菜单<code>项目</code>&gt;<code>导入项目</code>，导入地址选择<code>uniapp/dist/dev/mp-weixin</code>，点击确定成功导入项目</p><h3 id="uniapp在hbuilderx开发" tabindex="-1">uniapp在HbuilderX开发 <a class="header-anchor" href="#uniapp在hbuilderx开发" aria-label="Permalink to &quot;uniapp在HbuilderX开发&quot;">​</a></h3><hr><p>插件推荐安装：在运行过程中会自动安装需要插件</p><h4 id="运行uniapp" tabindex="-1">运行uniapp <a class="header-anchor" href="#运行uniapp" aria-label="Permalink to &quot;运行uniapp&quot;">​</a></h4><p>注意</p><p>apple M系列芯片在uniapp下编译的报错处理：在<code>node_modules</code>下复制粘贴<code>esbuild-darwin-arm64</code>一份，重命名为<code>esbuild-darwin-64</code></p><ul><li>导入项目，点击HbuilderX左上角菜单<code>文件</code>&gt;<code>导入</code>&gt;<code>从本地目录导入</code>，目录选择<code>uniapp</code></li><li>安装依赖，选中当前项目，点击HbuilderX左上角菜单<code>工具</code>&gt;<code>外部命令</code>&gt;<code>npm install</code>安装依赖</li><li>运行到h5，点击HbuilderX左上角菜单<code>运行</code>&gt;<code>运行到浏览器</code>&gt;<code>Chrome</code></li><li>运行到微信小程序，点击HbuilderX左上角菜单<code>运行</code>&gt;<code>运行到小程序模拟器</code>&gt;<code>微信开发者工具 - (uniapp)</code></li></ul><p>注意</p><ul><li>运行到微信小程序前，先配置好小程序的appid，点击<code>uniapp/src/manifest.json</code>，选择<code>微信小程序配置</code>&gt;<code>微信小程序AppID</code>，输入appid即可</li><li>一般运行到微信小程序，会自动打开微信开发者工具，如果打开失败，可能是工具的服务端口没有打开，手动打开工具 -&gt; 设置 -&gt; 安全设置，将服务端口开启，也有可能是你配置的小程序appid中，你登录的账号不是这个小程序的开发者，只需要去微信小程序后台将该账号添加到开发者，重新运行即可</li></ul><h4 id="发行uniapp" tabindex="-1">发行uniapp <a class="header-anchor" href="#发行uniapp" aria-label="Permalink to &quot;发行uniapp&quot;">​</a></h4><ul><li><p>发行到h5</p><ol><li>点击HbuilderX左上角菜单<code>发行</code>&gt;<code>网站-PC Web或手机H5(仅适用于uni-app)</code>，输入网站标题，点击发行按钮，编译完成后可在<code>uniapp/dist/build/h5</code>下</li><li>将h5下面的代码复制到发布目录，然后上传代码到服务器或仓库即可</li></ol></li><li><p>发行到小程序</p><ol><li>点击HbuilderX左上角菜单<code>发行</code>&gt;<code>小程序-微信(仅适用于uni-app)</code>，输入<code>小程序名称</code>和<code>小程序appid</code>，点击发行，编译完成后会自动打开微信开发者工具</li><li>点击微信开发者工具的<code>上传</code>按钮，将代码上传到微信小程序后台</li></ol></li></ul><h3 id="后台管理-admin" tabindex="-1">后台管理（admin） <a class="header-anchor" href="#后台管理-admin" aria-label="Permalink to &quot;后台管理（admin）&quot;">​</a></h3><hr><p><strong>首次使用先安装</strong>​<strong>​<code>yarn install</code>​</strong>​<strong>安装前请确保node版本为推荐的16+</strong></p><ul><li><p>复制env文件</p><ol><li>复制<code>.env.development.example</code>，将复制的文件名修改为<code>.env.developme</code></li><li>复制<code>.env.production.example</code>，将复制的文件名修改为<code>.env.production</code></li></ol></li><li><p>复制以后示例 <img src="https://doc.chatmoney.cn/docs/images/general/develop/web/admin_dev01.png" alt=""></p></li></ul><p>点击打开</p><ul><li>.env.development 开发环境</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NODE_ENV = &#39;development&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 请求域名</span></span>
<span class="line"><span>VITE_APP_BASE_URL=&#39;输入你的请求域名&#39;</span></span></code></pre></div><ul><li>.env.production 生产环境</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NODE_ENV = &#39;production&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 请求域名</span></span>
<span class="line"><span>VITE_APP_BASE_URL=&#39;输入你的请求域名&#39;  //填空则跟着网站的域名来请求</span></span></code></pre></div><p><strong>以上配置完成后可运行下面命令</strong></p><h3 id="后台管理开发模式-运行-admin" tabindex="-1">后台管理开发模式（运行 admin <a class="header-anchor" href="#后台管理开发模式-运行-admin" aria-label="Permalink to &quot;后台管理开发模式（运行 admin&quot;">​</a></h3><ul><li>运行开发环境 终端中运行命令</li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn dev</span></span></code></pre></div><h3 id="后台管理生产模式-打包-admin" tabindex="-1">后台管理生产模式（打包 admin <a class="header-anchor" href="#后台管理生产模式-打包-admin" aria-label="Permalink to &quot;后台管理生产模式（打包 admin&quot;">​</a></h3><ul><li>运行生产环境 终端中运行命令</li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn build</span></span></code></pre></div><p>注意</p><ol><li>首先拉取依赖包（拉取之前node版本必须为指定16+版本以上） =&gt;<code>yarn install</code></li><li>拉取成功无错误时开始执行打包或者运行模式（yarn build / yarn dev）</li><li>如果 运行 或者 拉取 时有错误，请先尝试删除yarn.lock文件以及node_modules文件夹以后重复1和2步骤</li></ol><h2 id="持续更新" tabindex="-1">持续更新 <a class="header-anchor" href="#持续更新" aria-label="Permalink to &quot;持续更新&quot;">​</a></h2>`,111)]))}const g=e(l,[["render",i]]);export{u as __pageData,g as default};
