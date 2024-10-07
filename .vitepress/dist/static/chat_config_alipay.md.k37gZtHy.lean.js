import{_ as e,c as s,a3 as t,o as p}from"./chunks/framework.OIXTx_-L.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"chat/config/alipay.md","filePath":"chat/config/alipay.md","lastUpdated":1728302493000}'),i={name:"chat/config/alipay.md"};function r(o,a,n,l,c,d){return p(),s("div",null,a[0]||(a[0]=[t(`<p>Super-智能AI知识库部署文档</p><h2 id="宝塔面板docker部署推荐部署方式" tabindex="-1">宝塔面板Docker部署推荐部署方式 <a class="header-anchor" href="#宝塔面板docker部署推荐部署方式" aria-label="Permalink to &quot;宝塔面板Docker部署推荐部署方式&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>部署提示:</span></span>
<span class="line"><span>💡 1. 推荐服务器最低配置：CPU双核、内存4GB、硬盘20GB、带宽5兆，</span></span>
<span class="line"><span>💡 2. 系统推荐安装\`dabian12\` 系统</span></span>
<span class="line"><span>💡 3. 知识库系统涉及的运行环境比较复杂，建议使用Docker部署，Docker的使用在宝塔面板上操作非常方便。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="运行环境" tabindex="-1">运行环境 <a class="header-anchor" href="#运行环境" aria-label="Permalink to &quot;运行环境&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>宝塔提示:</span></span>
<span class="line"><span>💡 在不影响其他站点的情况下，建议将宝塔升级到最新版本。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-开启docker" tabindex="-1">1. 开启docker <a class="header-anchor" href="#_1-开启docker" aria-label="Permalink to &quot;1. 开启docker&quot;">​</a></h3><p>登录宝塔面板后，单击左侧菜单最底部的【自定义菜单】，开启【Docker】菜单。单击左侧菜单【Docker】，出现提示安装Docker，单击【安装】。</p><p><img src="https://doc.2021it.com/assets/bt1.Yui1sChv.png" alt="开启Docker" title="开启Docker"></p><p><img src="https://doc.2021it.com/assets/bt2.DWNmARsJ.png" alt="安装Docker" title="安装Docker"></p><h3 id="_2-安装必要软件" tabindex="-1">2. 安装必要软件 <a class="header-anchor" href="#_2-安装必要软件" aria-label="Permalink to &quot;2. 安装必要软件&quot;">​</a></h3><p>单击【软件商店】，安装好【Nginx】和【进程守护管理器】。</p><p><img src="https://doc.2021it.com/assets/bt3.CxwJomqC.png" alt="安装" title="安装"></p><h2 id="部署源码" tabindex="-1">部署源码 <a class="header-anchor" href="#部署源码" aria-label="Permalink to &quot;部署源码&quot;">​</a></h2><h3 id="_1-新建目录" tabindex="-1">1. 新建目录 <a class="header-anchor" href="#_1-新建目录" aria-label="Permalink to &quot;1. 新建目录&quot;">​</a></h3><p>点击【文件】，进入【/www/wwwroot】目录，在目录下新建目录，后续步骤，我们都称该目录为【站点目录】。</p><p><img src="https://doc.2021it.com/assets/552cc539-83ba-4cf7-ba13-1dac040888ab.C-xxEoAa.png" alt="新建目录" title="新建目录"></p><h3 id="_2-上传源码" tabindex="-1">2. 上传源码 <a class="header-anchor" href="#_2-上传源码" aria-label="Permalink to &quot;2. 上传源码&quot;">​</a></h3><p>进入【站点目录】，并上传从管理员那获得的源码包，上传完成后，右键点击【解压】源码包。</p><p><img src="https://doc.2021it.com/assets/20605aa1-2e0d-4832-904b-87f1044d8f29.B3Qdng_D.png" alt="上传1" title="上传1"></p><p><img src="https://doc.2021it.com/assets/4cc21b84-96c2-4c99-b1db-5767a7b22134.CMbLdzAK.png" alt="上传2" title="上传2"></p><h2 id="docker部署" tabindex="-1">Docker部署 <a class="header-anchor" href="#docker部署" aria-label="Permalink to &quot;Docker部署&quot;">​</a></h2><h3 id="修改docker编排文件" tabindex="-1">修改Docker编排文件 <a class="header-anchor" href="#修改docker编排文件" aria-label="Permalink to &quot;修改Docker编排文件&quot;">​</a></h3><p>💡 Docker知识科普:</p><p>一般情况下，docker端口挂载的格式都是&quot;端口1:端口2&quot;，&quot;端口1&quot;为挂载主机端口，&quot;端口2&quot;为容器内部端口。 所以我们在主机访问端口时，要访问&quot;127.0.0.1:端口1&quot;。 如果进入容器内部或者容器之间进行通信时，访问&quot;端口2&quot;。容器之间的访问，使用“容器名:端口&quot;。 本项目除了使用主机Nginx代理nginx容器，其他都是容器与容器他们之间通讯。</p><p>💡 注意:</p><p>修改的参数按自己实际情况填写，请勿直接复制文档。</p><p>进入【站点目录】下的docker目录，右键单击【docker-compose.example.yml】文件，单击【重命名】，将新文件命名为【docker-compose.yml】。打开【docker-compose.yml】文件，修改①~⑤的选项。</p><ul><li>修改第①项: 浏览器打开新的窗口访问宝塔面板，单击【终端】，登录系统管理员账号，在终端输入id www并按回车键，可以看到终端返回的信息，信息为 www用户的用户id和用户组id，分别将uid的id和gid的id复制到【docker-compose.yml】文件中&quot;user:&quot;后面，要去掉前面”#“，格式如&quot;uid的id:gid的id&quot;，修改后【保存】文件，这样PHP容器就可以以www的权限进行运行。</li></ul><p><img src="https://doc.2021it.com/assets/5d13d3dd-73bf-4f56-be35-e05a00aa0c9b.CtpsxjEz.png" alt="修改1" title="修改1"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>user: &quot;1000:1000&quot; ①【挂载主机ID】</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>1</p><ul><li>修改第②项:</li></ul><p>修改MySQL的root密码，记住密码，安装程序需要填写。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> MYSQL_ROOT_PASSWORD: 123456Abcd #②【123456Abcd】为MySQL容器root账号的密码，建议修改成复杂密码。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>1</p><ul><li>修改第③④⑤项: 分别修改postgres容器的帐号、密码、数据库名。记住这些信息，安装程序需要填写。</li></ul><p>💡 建议:</p><p>建议直接默认就好，否则容易出现各种各样问题</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- POSTGRES_USER=postgres #③【postgres】为postgres容器的默认账号。</span></span>
<span class="line"><span>- POSTGRES_PASSWORD=123456Abcd #④【123456Abcd】为postgres容器默认账号的密码。</span></span>
<span class="line"><span>- POSTGRES_DB=postgres #⑤【postgres】为postgres容器的默认数据库名。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>1 2 3</p><h3 id="添加docker编排模板" tabindex="-1">添加Docker编排模板 <a class="header-anchor" href="#添加docker编排模板" aria-label="Permalink to &quot;添加Docker编排模板&quot;">​</a></h3><p>🚫 注意:</p><p>1.如果添加失败，很可能是编辑编排模板的时候没有操作正确，yml文件用缩进来表示层次结构，每一行需要有规则的对齐。 2.如果提示模板已存在，可以修改文件名，保持yml（结尾）格式。</p><p>单击【Docker】-&gt;【编排模板】-&gt;【搜索本地模块】-&gt;【📂(文件夹小图标)】，选择【站点目录下】的docker目录，单击【搜索】，模板名选择编辑的docker-compose.yml文件，单击【添加】。</p><p><img src="https://doc.2021it.com/assets/aa2904e8-775e-4c6f-8686-6720727339b0.BPmMZPSq.png" alt="编排" title="编排"></p><h3 id="添加容器编排" tabindex="-1">添加容器编排 <a class="header-anchor" href="#添加容器编排" aria-label="Permalink to &quot;添加容器编排&quot;">​</a></h3><p>🚫 警告:</p><p>如果添加失败，很可能是编排模板问题，请重新编排编辑模板。注意挂载主机的端口号，不要与主机已有的其他软件冲突。</p><p>单击【容器编排】-&gt;【项目】-&gt;【添加Composer项目】，在【Composer模块】选择【docker】，填写自定义名称，单击【添加】。添加成功以后，如图所示。然后在点击【容器】，可以看到项目运行的</p><p><img src="https://doc.2021it.com/assets/8eb1a2e9-62ec-4da7-9080-5b9a52d89e53.CjApvvYM.png" alt="编排2" title="编排2"></p><p><img src="https://doc.2021it.com/assets/be75cb52-314b-4f6e-b49f-72d95c2d26d5.YcriAPpX.png" alt="编排3" title="编排3"></p><h3 id="反向代理容器" tabindex="-1">反向代理容器 <a class="header-anchor" href="#反向代理容器" aria-label="Permalink to &quot;反向代理容器&quot;">​</a></h3><p>💡 提示:</p><p>该反向代理为主机Nginx代理到Ngxin容器，代理的端口为Nginx容器挂载主机的端口。</p><h4 id="_1-添加站点" tabindex="-1">1. 添加站点 <a class="header-anchor" href="#_1-添加站点" aria-label="Permalink to &quot;1. 添加站点&quot;">​</a></h4><p>单击【网站】-&gt;【反向代理】-&gt;【添加反代】,填写站点域名，【目标】选择URL地址，填写 <a href="http://127.0.0.1:180/" target="_blank" rel="noreferrer"><code>http://127.0.0.1:180</code></a> ，其中180为Docker的Nginx容器挂载主机的端口，按实际挂载的端口填写。传递域名时按默认填写$http_host，然后【确定】。</p><p><img src="https://doc.2021it.com/assets/e046134a-c026-47d8-8cac-745e5c4efba1.CrZm9Knv.png" alt="添加站点" title="添加站点"></p><h4 id="_2-设置代理参数" tabindex="-1">2. 设置代理参数 <a class="header-anchor" href="#_2-设置代理参数" aria-label="Permalink to &quot;2. 设置代理参数&quot;">​</a></h4><p>单击【URL代理】-&gt; 【设置】-&gt;【自定义配置】，复制下面配置内容填写，然后【保存】。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>proxy_set_header X-Forwarded-Proto $scheme;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>1</p><p><img src="https://doc.2021it.com/assets/e7e97065-77c2-440c-9dfe-62e2ba5d9318.CHL3Afrk.png" alt="设置代理参数" title="设置代理参数"></p><h4 id="_3-申请ssl证书" tabindex="-1">3. 申请SSL证书 <a class="header-anchor" href="#_3-申请ssl证书" aria-label="Permalink to &quot;3. 申请SSL证书&quot;">​</a></h4><p>点击【SSL】-&gt; 【Let&#39;s Encrypt】,选择【DNS验证】，选中域名，点击【申请】。 出现了弹出窗，需要手动在域名服务商（阿里云腾讯云等）后台给域名添加TXT解析，按要求添加TXT解析，主机信息填写①的值，记录值填写②的值，点击选择可以复制到整值。TXT解析添加好完成以后，点击【验证】。</p><p><img src="https://doc.2021it.com/assets/b11f1e58-e07e-4d66-a41b-4cd8a49f20f5.CsDrpsbm.png" alt=""></p><p><img src="https://doc.2021it.com/assets/95bbe32d-d5c9-48dd-a356-021e982dcc36.BuSEgIeW.png" alt=""></p><p><img src="https://doc.2021it.com/assets/8bf3d702-5448-4939-958f-ac0b4539830d.C_yP7xL7.png" alt=""></p><h3 id="程序安装" tabindex="-1">程序安装 <a class="header-anchor" href="#程序安装" aria-label="Permalink to &quot;程序安装&quot;">​</a></h3><p>🚫 警告:</p><p>如果访问页面出现&quot;No input file specified&quot;，是因为站点目录设置为server/pulibc，宝塔面板生成.user.ini文件影响到容器运行。请将目录设置为项目根目录，并删除掉server/public/.user.ini文件，单击【Docker】-&gt;【容器】，选择所有容器，单击【批量操作】-&gt;【重启容器】。重新访问即可。</p><p>如果安装的时候，出现了提示数据库密码错误，很大可能是创建容器后才修改docker-compose.yml的配置导致，这时密码是容器创建前docker-compose.yml的密码，不是后来修改的密码。确认数据不要保留的情况下，可以删除docker/data目录，然后删除所有容器和容器编排，重新创建容器编排。</p><ul><li><ol><li>在浏览器访问站点，进入程序安装界面，单击【我已阅读并同意】-&gt;【继续】。</li></ol></li><li><ol start="2"><li>然后将编排模板 <code>docker-compose.yml</code> 文件的信息填写到安装界面。</li></ol></li><li><ol start="3"><li>其他所有数据库主机，都是填写容器名称，默认不需要修改。</li></ol></li><li><ol start="4"><li>MySQL数据库密码填写 <code>docker-compose.yml</code> 设置的密码。</li></ol></li><li><ol start="5"><li>postgreSQL项的数据库用户，数据库密码，数据名称，分别填写docker-compose.yml设置的值。</li></ol></li><li><ol start="6"><li>设置好后台管理员账号密码后，点击【继续】。</li></ol></li></ul><p><img src="https://doc.2021it.com/assets/96b276e4-a5e4-4c88-8706-7bb02446a521.CH8AhBqs.png" alt=""></p><h2 id="授权" tabindex="-1">授权 <a class="header-anchor" href="#授权" aria-label="Permalink to &quot;授权&quot;">​</a></h2><p>📍 注意:</p><p>1.授权文件与AI系统要对应，如果不是同一AI系统，将无法使用。 2.授权文件与项目域名要对应，不然无法使用。</p><p><strong>步骤1</strong></p><p>付款后联系管理员发送需要绑定的域名，管理员会返回一个授权文件。</p><p><strong>步骤2</strong></p><p>添加授权文件到 <code>server/license</code> 目录，并命名为：<code>my.license</code> ，如果仍无法使用，请联系管理员。</p><p><img src="https://doc.2021it.com/assets/5ce85c6c-e38a-41b3-9737-aaf5723945ab.DBZa4kJH.png" alt=""></p><h2 id="访问地址" tabindex="-1">访问地址 <a class="header-anchor" href="#访问地址" aria-label="Permalink to &quot;访问地址&quot;">​</a></h2><p>安装成功后，打开以下链接可以访问相应页面。 管理后台地址：<a href="http://xn--eqrt2g/admin" target="_blank" rel="noreferrer">http://域名/admin</a> 用户PC前台地址：<a href="http://xn--eqrt2g/" target="_blank" rel="noreferrer">http://域名</a> 用户PC前台地址：<a href="http://xn--eqrt2g/mobile" target="_blank" rel="noreferrer">http://域名/mobile</a></p><h2 id="验证自动任务" tabindex="-1">验证自动任务 <a class="header-anchor" href="#验证自动任务" aria-label="Permalink to &quot;验证自动任务&quot;">​</a></h2><p>💡 提示:</p><p>新版本在文件权限挂载正确情况下，会自动定时任务和守护进程。 配置在docker/config/supervisor/supervisor.ini，一般情况下不要修改。</p><p>💡 警告:</p><p>如果登录后台发现定时任务没有执行，说明守护进程也没有执行，这时需要将docker/log/supervisor目录设置为777权限，然后重启PHP容器。</p><p>登录系统后台，打开菜单【系统维护】-&gt;【定时任务】，如果有出现今天的执行时间，说明定时任务和守护进程配置正常。</p>`,89)]))}const u=e(i,[["render",r]]);export{b as __pageData,u as default};
