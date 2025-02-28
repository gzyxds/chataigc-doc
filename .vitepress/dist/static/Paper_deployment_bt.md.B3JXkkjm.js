import{_ as a,c as e,ag as o,o as l}from"./chunks/framework.BHdmj1Zv.js";const m=JSON.parse('{"title":"宝塔面板部署指南 - 推荐使用①/③","description":"","frontmatter":{},"headers":[],"relativePath":"Paper/deployment/bt.md","filePath":"Paper/deployment/bt.md","lastUpdated":1728331945000}'),r={name:"Paper/deployment/bt.md"};function i(s,t,n,d,p,c){return l(),e("div",null,t[0]||(t[0]=[o('<h1 id="宝塔面板部署指南-推荐使用1-3" tabindex="-1">宝塔面板部署指南 - 推荐使用①/③ <a class="header-anchor" href="#宝塔面板部署指南-推荐使用1-3" aria-label="Permalink to &quot;宝塔面板部署指南 - 推荐使用①/③&quot;">​</a></h1><h2 id="📋-环境要求" tabindex="-1">📋 环境要求 <a class="header-anchor" href="#📋-环境要求" aria-label="Permalink to &quot;📋 环境要求&quot;">​</a></h2><blockquote><p><strong>推荐服务器最低配置</strong>：</p><ul><li>CPU：双核</li><li>内存：4GB</li><li>硬盘：20GB</li><li>带宽：5兆</li></ul></blockquote><p><strong>💡 强烈推荐在正式环境中使用宝塔面板部署项目，让部署更加便捷，减少问题发生。</strong></p><h2 id="🛠️-服务器环境设置" tabindex="-1">🛠️ 服务器环境设置 <a class="header-anchor" href="#🛠️-服务器环境设置" aria-label="Permalink to &quot;🛠️ 服务器环境设置&quot;">​</a></h2><h3 id="步骤1-安装基础运行环境" tabindex="-1"><strong>步骤1</strong>: 安装基础运行环境 <a class="header-anchor" href="#步骤1-安装基础运行环境" aria-label="Permalink to &quot;**步骤1**: 安装基础运行环境&quot;">​</a></h3><p>点击【软件商店】→【运行环境】，安装以下软件：</p><ul><li>Nginx</li><li>MySQL (5.7版本)</li><li>PHP-8.0</li><li>Redis</li></ul><p>⚠️ <strong>警告</strong></p><blockquote><p>安装软件时，请使用极速安装，必须使用PHP8.0和MySQL5.7，否则将无法正常使用。</p></blockquote><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-env-1.png" alt="基础环境安装-1"><br><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-env-2.png" alt="基础环境安装-2"></p><h3 id="步骤2-安装php扩展" tabindex="-1"><strong>步骤2</strong>: 安装PHP扩展 <a class="header-anchor" href="#步骤2-安装php扩展" aria-label="Permalink to &quot;**步骤2**: 安装PHP扩展&quot;">​</a></h3><p>点击【软件商店】→【已安装】，找到PHP-8.0，然后点击【设置】→【安装扩展】，安装以下扩展：</p><ul><li>fileinfo扩展</li><li>redis扩展</li></ul><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-env-3.png" alt="PHP扩展安装"></p><h2 id="🌐-站点部署" tabindex="-1">🌐 站点部署 <a class="header-anchor" href="#🌐-站点部署" aria-label="Permalink to &quot;🌐 站点部署&quot;">​</a></h2><h3 id="步骤1-上传并解压项目文件" tabindex="-1"><strong>步骤1</strong>: 上传并解压项目文件 <a class="header-anchor" href="#步骤1-上传并解压项目文件" aria-label="Permalink to &quot;**步骤1**: 上传并解压项目文件&quot;">​</a></h3><p>打开宝塔面板，进入<code>/www/wwwroot</code>目录，上传下载好的压缩包并解压，解压出来的文件夹即为项目目录。</p><p>⚠️ <strong>警告</strong></p><blockquote><p>请确保项目目录及子目录用户设置为www！如果后续步骤出现问题，请重新设置项目目录及子目录用户为www。</p></blockquote><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-1-1.png" alt="上传项目文件"><br><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-1-2.png" alt="解压项目文件"></p><h3 id="步骤2-添加网站" tabindex="-1"><strong>步骤2</strong>: 添加网站 <a class="header-anchor" href="#步骤2-添加网站" aria-label="Permalink to &quot;**步骤2**: 添加网站&quot;">​</a></h3><p>点击【网站】→【PHP项目】→【添加站点】，按以下信息填写：</p><ul><li>【域名】：填写已解析到本服务器的域名</li><li>【根目录】：选择上一步解压好的项目目录中的server目录</li><li>【数据库】：选择【MySQL】</li><li>【数据库账号】：设置账号密码</li><li>【PHP版本】：选择【PHP-80】</li><li>点击【提交】</li></ul><p>⚠️ <strong>警告</strong></p><blockquote><p>站点目录必须选择server，请勿选择public！选择public会导致宝塔生成配置错误，后续修改也无法解决，只能删除站点重新添加。</p></blockquote><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-2.png" alt="添加网站"></p><h3 id="步骤3-记录数据库信息" tabindex="-1"><strong>步骤3</strong>: 记录数据库信息 <a class="header-anchor" href="#步骤3-记录数据库信息" aria-label="Permalink to &quot;**步骤3**: 记录数据库信息&quot;">​</a></h3><p>请妥善保存数据库名、用户名和密码，步骤13将会用到这些信息。</p><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-3.png" alt="保存数据库信息"></p><h3 id="步骤4-申请ssl证书" tabindex="-1"><strong>步骤4</strong>: 申请SSL证书 <a class="header-anchor" href="#步骤4-申请ssl证书" aria-label="Permalink to &quot;**步骤4**: 申请SSL证书&quot;">​</a></h3><p>找到网站，点击【设置】→【SSL】→【Let&#39;s Encrypt】→【文件验证】→【选择域名】→【申请】，完成SSL证书申请。</p><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-4-1.png" alt="SSL证书申请-1"><br><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-4-2.png" alt="SSL证书申请-2"></p><h3 id="步骤5-设置网站目录" tabindex="-1"><strong>步骤5</strong>: 设置网站目录 <a class="header-anchor" href="#步骤5-设置网站目录" aria-label="Permalink to &quot;**步骤5**: 设置网站目录&quot;">​</a></h3><p>点击【网站目录】→【网站目录】，选择解压的项目目录下的&quot;server&quot;目录，点击保存。 然后设置【运行目录】为&quot;/public&quot;，点击【保存】。</p><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-5.png" alt="设置网站目录"></p><h3 id="步骤6-配置伪静态" tabindex="-1"><strong>步骤6</strong>: 配置伪静态 <a class="header-anchor" href="#步骤6-配置伪静态" aria-label="Permalink to &quot;**步骤6**: 配置伪静态&quot;">​</a></h3><p>点击【伪静态】，选择【thinkphp】，点击【保存】。</p><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-6.png" alt="配置伪静态"></p><h2 id="📦-程序安装" tabindex="-1">📦 程序安装 <a class="header-anchor" href="#📦-程序安装" aria-label="Permalink to &quot;📦 程序安装&quot;">​</a></h2><h3 id="步骤7-启动安装向导" tabindex="-1"><strong>步骤7</strong>: 启动安装向导 <a class="header-anchor" href="#步骤7-启动安装向导" aria-label="Permalink to &quot;**步骤7**: 启动安装向导&quot;">​</a></h3><p>访问设置的网站，进入程序安装界面，点击【我已阅读同意】。</p><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-7-1.png" alt="安装向导-1"><br><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-7-2.png" alt="安装向导-2"></p><h3 id="步骤8-环境检测" tabindex="-1"><strong>步骤8</strong>: 环境检测 <a class="header-anchor" href="#步骤8-环境检测" aria-label="Permalink to &quot;**步骤8**: 环境检测&quot;">​</a></h3><p>系统将对环境进行检测，通常除了【swoole_loader扩展】外，其他项都会通过。 请注意说明内容中是否提示【非线程安全扩展】或【线程安全扩展】，记住这个信息，步骤9、10、11将用到。</p><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-8.png" alt="环境检测"></p><h3 id="步骤9-复制扩展文件" tabindex="-1"><strong>步骤9</strong>: 复制扩展文件 <a class="header-anchor" href="#步骤9-复制扩展文件" aria-label="Permalink to &quot;**步骤9**: 复制扩展文件&quot;">​</a></h3><p>打开宝塔文件管理，进入项目所在的<code>/server/license</code>目录：</p><ul><li>如果步骤8提示【非线程安全扩展】，复制<code>swoole_loader80.so</code>文件</li><li>如果提示【线程安全扩展】，复制<code>swoole_loader80_zts.so</code>文件</li></ul><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-9.png" alt="复制扩展文件"></p><h3 id="步骤10-粘贴扩展文件" tabindex="-1"><strong>步骤10</strong>: 粘贴扩展文件 <a class="header-anchor" href="#步骤10-粘贴扩展文件" aria-label="Permalink to &quot;**步骤10**: 粘贴扩展文件&quot;">​</a></h3><p>打开宝塔文件管理，进入<code>/www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930</code>目录， 粘贴文件，并统一改名为<code>swoole_loader80.so</code>。</p><p><img src="https://doc.mddai.cn/docs/images/cp/deployment/bt/bt-10.png" alt="粘贴扩展文件"></p><h3 id="步骤11-配置php加载扩展" tabindex="-1"><strong>步骤11</strong>: 配置PHP加载扩展 <a class="header-anchor" href="#步骤11-配置php加载扩展" aria-label="Permalink to &quot;**步骤11**: 配置PHP加载扩展&quot;">​</a></h3><p>打开【软件商店】→【运行环境】→【设置】→【配置文件】，在末尾添加：</p>',55)]))}const b=a(r,[["render",i]]);export{m as __pageData,b as default};
