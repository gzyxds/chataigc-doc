import{_ as e,c as s,a3 as t,o as n}from"./chunks/framework.OIXTx_-L.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Paper/deployment/bt.md","filePath":"Paper/deployment/bt.md","lastUpdated":1728331945000}'),p={name:"Paper/deployment/bt.md"};function i(r,a,o,l,h,c){return n(),s("div",null,a[0]||(a[0]=[t(`<h2 id="宝塔面板部署推荐方式" tabindex="-1">宝塔面板部署<strong>推荐方式</strong> <a class="header-anchor" href="#宝塔面板部署推荐方式" aria-label="Permalink to &quot;宝塔面板部署**推荐方式**&quot;">​</a></h2><p>服务器配置提示:</p><ol><li>推荐服务器最低配置：CPU双核、内存4GB、带宽5兆</li><li>推荐服务器系统选择 <code>Dabian12系统</code> 是完美兼容的</li><li><strong>强烈推荐</strong> 正式环境使用宝塔面板部署项目，让部署更方便，减少部署出现问题。</li></ol><h2 id="服务器系统设置" tabindex="-1">服务器系统设置 <a class="header-anchor" href="#服务器系统设置" aria-label="Permalink to &quot;服务器系统设置&quot;">​</a></h2><p>注意:</p><ol><li>服务器购买后安装 <strong>Dabian12</strong> 系统和 <strong>宝塔面板</strong> ，具体怎么安装宝塔面板请查看<a href="https://www.bt.cn/new/download.html" target="_blank" rel="noreferrer">宝塔官网Linux面板安装脚本</a>或直接复制以下 <strong>Dabian12</strong> 的脚本安装。</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wget -O install.sh https://download.bt.cn/install/install_lts.sh &amp;&amp; bash install.sh ed8484bec</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="服务器环境设置" tabindex="-1">服务器环境设置 <a class="header-anchor" href="#服务器环境设置" aria-label="Permalink to &quot;服务器环境设置&quot;">​</a></h2><h3 id="_1-环境安装" tabindex="-1">1. 环境安装 <a class="header-anchor" href="#_1-环境安装" aria-label="Permalink to &quot;1. 环境安装&quot;">​</a></h3><p>点击【软件商店】-&gt;【运行环境】，安装Nginx、MySQL、PHP-8.0、Redis,其中Mysql选择5.7版本。</p><p>注意:</p><p>💡 安装软件的时候，使用极速安装，一定要使用 <strong>PHP8.0</strong> 和 <strong>Mysql5.7</strong> ，否则无法使用。</p><p><img src="https://doc.2021it.com/assets/bt-env-1.BPL1WotD.png" alt=""></p><p><img src="https://doc.2021it.com/assets/bt-env-2.et4oARBn.png" alt=""></p><h3 id="_2-php安装扩展" tabindex="-1">2. php安装扩展 <a class="header-anchor" href="#_2-php安装扩展" aria-label="Permalink to &quot;2. php安装扩展&quot;">​</a></h3><p>点击【软件商店】-&gt;【已安装】，找到PHP-8.0，然后点击【设置】-&gt;【安装扩展】，【安装】fileinfo扩展，【安装】redis扩展。</p><p><img src="https://doc.2021it.com/assets/bt-env-3.BndumsaJ.png" alt=""></p><h2 id="站点部署" tabindex="-1">站点部署 <a class="header-anchor" href="#站点部署" aria-label="Permalink to &quot;站点部署&quot;">​</a></h2><h3 id="_1-上传源代码" tabindex="-1">1. 上传源代码 <a class="header-anchor" href="#_1-上传源代码" aria-label="Permalink to &quot;1. 上传源代码&quot;">​</a></h3><p>打开宝塔面板/www/wwwroot目录，上传下载的压缩包,解压压缩包，解压出来的文件夹就是项目目录。</p><p>注意:</p><p>💡 注意项目目录及子目录用户要为 <strong>www</strong> ！如果后续步骤出现问题，重新设置一下项目目录及子目录用户为 <strong>www</strong> 。</p><p><img src="https://doc.2021it.com/assets/bt-1-1.DeT5xnRB.png" alt=""></p><p><img src="https://doc.2021it.com/assets/bt-1-2.D-DYu3J7.png" alt=""></p><h3 id="_2-添加站点" tabindex="-1">2. 添加站点 <a class="header-anchor" href="#_2-添加站点" aria-label="Permalink to &quot;2. 添加站点&quot;">​</a></h3><p>点击【网站】-&gt;【PHP项目】-&gt;【添加站点】，【域名】项填好已解析到本服务器的域名，【根目录】选择上一步解压好的项目目录的server目录，数据库选择【MySQL】，【数据库帐号】项设置好帐号密码，【PHP版本】选择【PHP-80】，点击【提交】。</p><p>注意:</p><p>💡 站点目录要选择 <strong>server</strong> ，请勿选择 <strong>public</strong> ，选择public会导致宝塔生成配置错误，等后面设置修改回来也无济于事，只能删除站点新添加。</p><p><img src="https://doc.2021it.com/assets/bt-2.C-t2XkvC.png" alt=""></p><p>保存好数据库名、用户、密码，下面填写数据库步骤需要用到。</p><p><img src="https://doc.2021it.com/assets/bt-3.BLBljI_o.png" alt=""></p><h3 id="_4-申请ssl证书" tabindex="-1">4. 申请SSL证书 <a class="header-anchor" href="#_4-申请ssl证书" aria-label="Permalink to &quot;4. 申请SSL证书&quot;">​</a></h3><p>找到网站，点击【设置】-&gt;【SSL】-&gt;【Let&#39;s Encrypt】-&gt;【文件验证】-&gt;【选择域名】-&gt;【申请】，申请SSL证书。</p><p><img src="https://doc.2021it.com/assets/bt-4-1.C7b4_upf.png" alt=""></p><p><img src="https://doc.2021it.com/assets/bt-4-2.DGOSumii.png" alt=""></p><h3 id="_5-设置站点目录和运行目录" tabindex="-1">5. 设置站点目录和运行目录 <a class="header-anchor" href="#_5-设置站点目录和运行目录" aria-label="Permalink to &quot;5. 设置站点目录和运行目录&quot;">​</a></h3><p>点击【网站目录】-&gt;【网站目录】，选择解压的项目目下的&quot;server&quot;目录，点击保存。【运行目录】选择&quot;/public&quot;项目，点击【保存】。</p><p><img src="https://doc.2021it.com/assets/bt-5.BwA3rXud.png" alt=""></p><h3 id="_6-设置伪静态" tabindex="-1">6. 设置伪静态 <a class="header-anchor" href="#_6-设置伪静态" aria-label="Permalink to &quot;6. 设置伪静态&quot;">​</a></h3><p>点击【伪静态】-选择【thinkphp】，点击【保存】。</p><p><img src="https://doc.2021it.com/assets/bt-6.Cx4Jiags.png" alt=""></p><h3 id="_7-程序安装" tabindex="-1">7. 程序安装 <a class="header-anchor" href="#_7-程序安装" aria-label="Permalink to &quot;7. 程序安装&quot;">​</a></h3><p>访问设置的网站，进入程序安装界面，点击【我已阅读同意】。</p><h3 id="_8-环境检测" tabindex="-1">8. 环境检测 <a class="header-anchor" href="#_8-环境检测" aria-label="Permalink to &quot;8. 环境检测&quot;">​</a></h3><p>进入此步骤，对环境进行检测，一般情况，除了【swoole_loader扩展】，其他项都会通过，说明内容可能提示【非线程安全扩展】或【线程安全扩展】，记住说明内容，下面9、10、11需要用到。</p><p><img src="https://doc.2021it.com/assets/bt-8.i665yMjF.png" alt=""></p><h3 id="_9-修改线程安全扩展" tabindex="-1">9. 修改线程安全扩展 <a class="header-anchor" href="#_9-修改线程安全扩展" aria-label="Permalink to &quot;9. 修改线程安全扩展&quot;">​</a></h3><p>打开宝塔文件，进入项目所在的/server/license目录，上一步说明内容如果是【非线程安全扩展】复制swoole_loader80.so文件，如果是【线程安全扩展】复制swoole_loader80_zts.so文件。</p><p><img src="https://doc.2021it.com/assets/bt-9.BbrN-OJE.png" alt=""></p><h3 id="_10-复制粘贴线程安全扩展" tabindex="-1">10. 复制粘贴线程安全扩展 <a class="header-anchor" href="#_10-复制粘贴线程安全扩展" aria-label="Permalink to &quot;10. 复制粘贴线程安全扩展&quot;">​</a></h3><p>打开宝塔文件，进入/www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930目录，粘贴文件，统一改名为swoole_loader80.so 。</p><p><img src="https://doc.2021it.com/assets/bt-10.CWYDXS_D.png" alt=""></p><h3 id="_11-添加运行环境配置" tabindex="-1">11. 添加运行环境配置 <a class="header-anchor" href="#_11-添加运行环境配置" aria-label="Permalink to &quot;11. 添加运行环境配置&quot;">​</a></h3><p>打开【软件商店】-&gt;【运行环境】-&gt;【设置】-&gt;【配置文件】，在末尾添加以下代码信息，【保存】。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>extension = swoole_loader80.so</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://doc.2021it.com/assets/bt-11-1.C_7pPTSU.png" alt=""></p><p>添加完后选择【服务】-&gt;【重启】。</p><p><img src="https://doc.2021it.com/assets/bt-11-3.CQjAhfqB.png" alt=""></p><h3 id="_12-重新检查环境监测" tabindex="-1">12. 重新检查环境监测 <a class="header-anchor" href="#_12-重新检查环境监测" aria-label="Permalink to &quot;12. 重新检查环境监测&quot;">​</a></h3><p>回到安装界面，然后点击【重新检测】。【swoole_loader扩展】安装好以后，一般情况环境检测通过，直接点击【继续】。</p><h3 id="_13-填写数据库" tabindex="-1">13. 填写数据库 <a class="header-anchor" href="#_13-填写数据库" aria-label="Permalink to &quot;13. 填写数据库&quot;">​</a></h3><p>上面步骤2保存的数据库信息填写到数据库选项，填写Redis地址密码，没设置密码无需填写（一般都是默认），然后设置后台管理员帐号密码，点击【继续】。</p><h3 id="_14-系统安装完毕添加授权文件" tabindex="-1">14. 系统安装完毕添加授权文件 <a class="header-anchor" href="#_14-系统安装完毕添加授权文件" aria-label="Permalink to &quot;14. 系统安装完毕添加授权文件&quot;">​</a></h3><p>程序安装完成以后，可以点击【进入管理平台】，后台管理员登录之前，需要添加授权文件。</p><h2 id="授权文件" tabindex="-1">授权文件 <a class="header-anchor" href="#授权文件" aria-label="Permalink to &quot;授权文件&quot;">​</a></h2><p>📍 注意:</p><p>1.授权文件与AI系统要对应，如果不是同一AI系统，将无法使用。 2.授权文件与项目域名要对应，不然无法使用。</p><p><strong>步骤1</strong></p><p>付款后联系管理员发送需要绑定的域名，管理员会返回一个授权文件。</p><p><strong>步骤2</strong></p><p>添加授权文件到 <code>server/license</code> 目录，并命名为：<code>my.license</code> ，如果仍无法使用，请联系管理员。</p><p><img src="https://doc.2021it.com/assets/5ce85c6c-e38a-41b3-9737-aaf5723945ab.DBZa4kJH.png" alt=""></p><h2 id="访问地址" tabindex="-1">访问地址 <a class="header-anchor" href="#访问地址" aria-label="Permalink to &quot;访问地址&quot;">​</a></h2><p>安装成功后，打开以下链接可以访问相应页面。 管理后台地址：<a href="http://xn--eqrt2g/admin" target="_blank" rel="noreferrer">http://域名/admin</a> 用户PC前台地址：<a href="http://xn--eqrt2g/" target="_blank" rel="noreferrer">http://域名</a> 用户H5前台地址：<a href="http://xn--eqrt2g/mobile" target="_blank" rel="noreferrer">http://域名/mobile</a></p><h2 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-label="Permalink to &quot;定时任务&quot;">​</a></h2><p>📍 注意:</p><p>定时任务不设置，会导致一些业务无法正常使用。</p><p>点击【计划任务】，设置任务类型为 【shell脚本】、填写任务名称、执行周期设置为【N分钟】【1分钟】，脚本内容为&quot;php80 项目实际目录/server/think crontab&quot;，请以项目实际域名为准，然后【添加任务】。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>php80 项目实际目录/server/think crontab</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://doc.2021it.com/assets/crontab.ISMWXC6q.png" alt=""></p><h2 id="任务队列" tabindex="-1">任务队列 <a class="header-anchor" href="#任务队列" aria-label="Permalink to &quot;任务队列&quot;">​</a></h2><p>📍 注意:</p><ol><li>不配置任务队列将无法生成写作内容.</li><li>队列进程数量按需设置.</li><li>配置成功后查看守护进程日志，无错误则配置成功.</li></ol><h3 id="添加队列驱动配置" tabindex="-1">添加队列驱动配置 <a class="header-anchor" href="#添加队列驱动配置" aria-label="Permalink to &quot;添加队列驱动配置&quot;">​</a></h3><p>项目server文件夹下.env文件，添加队列驱动配置(驱动使用Redis)</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[QUEUE]</span></span>
<span class="line"><span>NAME = &quot;ws&quot;</span></span>
<span class="line"><span>HOST = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>PORT = &quot;6379&quot;</span></span>
<span class="line"><span>PASSWORD = &quot;填写你的Redis密码，没有设置密码则留空&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://doc.2021it.com/assets/env-set.DGNvV9mQ.png" alt=""></p><p><img src="https://doc.2021it.com/assets/redis-1.DvDNozfR.png" alt=""></p><h3 id="添加队列守护进程" tabindex="-1">添加队列守护进程 <a class="header-anchor" href="#添加队列守护进程" aria-label="Permalink to &quot;添加队列守护进程&quot;">​</a></h3><p>添加写作内容任务队列</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>php80 think queue:listen --queue maJob --timeout 0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://doc.2021it.com/assets/supervisor-2.61RuUBoc.png" alt=""></p><p>添加降重任务队列</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>php80 think queue:listen --queue reJob --timeout 0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://doc.2021it.com/assets/supervisor-1.DXVLWiHx.png" alt=""></p>`,95)]))}const u=e(p,[["render",i]]);export{b as __pageData,u as default};