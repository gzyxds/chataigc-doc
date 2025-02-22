import{_ as i,c as a,ag as e,o as r}from"./chunks/framework.BHdmj1Zv.js";const p=JSON.parse('{"title":"🚀 更新升级指南","description":"","frontmatter":{},"headers":[],"relativePath":"work/java/fqa/version.md","filePath":"work/java/fqa/version.md","lastUpdated":1740128321000}'),o={name:"work/java/fqa/version.md"};function t(n,l,s,h,d,c){return r(),a("div",null,l[0]||(l[0]=[e('<h1 id="🚀-更新升级指南" tabindex="-1">🚀 更新升级指南 <a class="header-anchor" href="#🚀-更新升级指南" aria-label="Permalink to &quot;🚀 更新升级指南&quot;">​</a></h1><h2 id="📝-更新操作说明" tabindex="-1">📝 更新操作说明 <a class="header-anchor" href="#📝-更新操作说明" aria-label="Permalink to &quot;📝 更新操作说明&quot;">​</a></h2><h3 id="⚠️-重要提示" tabindex="-1">⚠️ 重要提示 <a class="header-anchor" href="#⚠️-重要提示" aria-label="Permalink to &quot;⚠️ 重要提示&quot;">​</a></h3><p>更新前请务必做好以下备份工作：</p><ul><li>✅ 数据库完整备份</li><li>✅ 源码目录完整备份</li><li>✅ 重要配置文件备份</li></ul><p><strong>建议备份方式：</strong></p><ol><li>🗄️ 数据库导出SQL文件</li><li>📦 源码目录打包压缩</li><li>🔐 关键配置文件单独备份</li></ol><hr><h2 id="🔄-升级方式" tabindex="-1">🔄 升级方式 <a class="header-anchor" href="#🔄-升级方式" aria-label="Permalink to &quot;🔄 升级方式&quot;">​</a></h2><h3 id="方式一-在线升级" tabindex="-1">方式一：在线升级 <a class="header-anchor" href="#方式一-在线升级" aria-label="Permalink to &quot;方式一：在线升级&quot;">​</a></h3><h4 id="🎯-适用条件" tabindex="-1">🎯 适用条件 <a class="header-anchor" href="#🎯-适用条件" aria-label="Permalink to &quot;🎯 适用条件&quot;">​</a></h4><ul><li>🖥️ 使用完整项目源码</li><li>📂 未进行目录结构调整</li><li>🛠️ 未进行二次开发</li></ul><h4 id="📌-升级步骤" tabindex="-1">📌 升级步骤 <a class="header-anchor" href="#📌-升级步骤" aria-label="Permalink to &quot;📌 升级步骤&quot;">​</a></h4><ol><li><p><strong>关闭防跨站攻击</strong></p><ul><li>进入宝塔面板</li><li>选择【网站列表】→【设置】→【网站目录】</li><li>临时关闭【防跨站攻击(open_basedir)】 <img src="https://doc.chatmoney.cn/docs/images/general/php/update/update-1-1.png" alt="关闭防跨站"></li></ul></li><li><p><strong>重启Nginx服务</strong></p><ul><li>进入【软件商店】</li><li>找到Nginx，选择【设置】→【重启】 <img src="https://doc.chatmoney.cn/docs/images/general/php/update/update-1-2.png" alt="重启Nginx"></li></ul></li><li><p><strong>重启PHP服务</strong></p><ul><li>进入【软件商店】</li><li>找到PHP-8.0，选择【服务】→【重启】 <img src="https://doc.chatmoney.cn/docs/images/general/php/update/update-1-3.png" alt="重启PHP"></li></ul></li><li><p><strong>执行系统更新</strong></p><ul><li>登录后台</li><li>进入【系统设置】→【系统维护】→【系统更新】</li><li>点击【一键更新】</li></ul></li><li><p><strong>恢复安全设置</strong></p><ul><li>重新开启【防跨站攻击(open_basedir)】</li></ul></li><li><p><strong>清理系统缓存</strong></p><ul><li>进入【系统设置】→【系统维护】→【系统缓存】</li><li>点击【清理缓存】</li></ul></li><li><p><strong>小程序更新</strong></p><ul><li>重新发布小程序版本</li></ul></li></ol><hr><h3 id="方式二-手动升级" tabindex="-1">方式二：手动升级 <a class="header-anchor" href="#方式二-手动升级" aria-label="Permalink to &quot;方式二：手动升级&quot;">​</a></h3><h4 id="📌-升级步骤-1" tabindex="-1">📌 升级步骤 <a class="header-anchor" href="#📌-升级步骤-1" aria-label="Permalink to &quot;📌 升级步骤&quot;">​</a></h4><ol><li><p><strong>备份关键文件</strong></p><ul><li><code>server/.env</code></li><li><code>server/config/install.lock</code></li><li><code>server/public/uploads</code></li><li><code>server/license/my.license</code></li></ul></li><li><p><strong>替换源码</strong></p><ul><li>下载最新源码包</li><li>删除现有<code>server</code>目录</li><li>替换为最新<code>server</code>目录</li><li>恢复备份的关键文件</li></ul></li><li><p><strong>数据库处理</strong></p><ul><li>修改<code>like.sql</code>表前缀（如需要）</li><li>新建测试数据库并导入<code>like.sql</code></li><li>使用Navicat同步数据结构</li></ul></li></ol><hr><h2 id="❓-常见问题处理" tabindex="-1">❓ 常见问题处理 <a class="header-anchor" href="#❓-常见问题处理" aria-label="Permalink to &quot;❓ 常见问题处理&quot;">​</a></h2><h3 id="_1-授权相关问题" tabindex="-1">1. 授权相关问题 <a class="header-anchor" href="#_1-授权相关问题" aria-label="Permalink to &quot;1. 授权相关问题&quot;">​</a></h3><h4 id="_1-1-ip未授权" tabindex="-1">1.1 IP未授权 <a class="header-anchor" href="#_1-1-ip未授权" aria-label="Permalink to &quot;1.1 IP未授权&quot;">​</a></h4><ul><li>🌐 登录官网授权中心</li><li>➕ 添加服务器外网IP</li><li>➕ 添加项目域名</li></ul><h4 id="_1-2-域名授权异常" tabindex="-1">1.2 域名授权异常 <a class="header-anchor" href="#_1-2-域名授权异常" aria-label="Permalink to &quot;1.2 域名授权异常&quot;">​</a></h4><ul><li>🔍 检查站点域名配置</li><li>✔️ 确保仅保留一个授权域名</li><li>❌ 删除未授权域名</li></ul><h3 id="_2-升级失败处理" tabindex="-1">2. 升级失败处理 <a class="header-anchor" href="#_2-升级失败处理" aria-label="Permalink to &quot;2. 升级失败处理&quot;">​</a></h3><h4 id="_2-1-跨域攻击提示" tabindex="-1">2.1 跨域攻击提示 <a class="header-anchor" href="#_2-1-跨域攻击提示" aria-label="Permalink to &quot;2.1 跨域攻击提示&quot;">​</a></h4><ul><li>🔒 确认已关闭防跨站攻击</li><li>🔑 检查目录权限设置</li></ul><h4 id="_2-2-500错误排查" tabindex="-1">2.2 500错误排查 <a class="header-anchor" href="#_2-2-500错误排查" aria-label="Permalink to &quot;2.2 500错误排查&quot;">​</a></h4><p><strong>可能原因：</strong></p><ul><li>🗂️ 目录结构被修改</li><li>🔐 文件权限不足</li><li>🧩 PHP缺少ZipArchive扩展</li></ul><p><strong>解决方案：</strong></p><ul><li>🔄 恢复标准目录结构</li><li>👤 设置目录权限为www用户</li><li>📦 安装PHP Zip扩展</li></ul>',33)]))}const g=i(o,[["render",t]]);export{p as __pageData,g as default};
