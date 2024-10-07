import{_ as t,c as n,a3 as s,o as l}from"./chunks/framework.DUiUPaIL.js";const g=JSON.parse('{"title":"ChatGLM本地模型部署","description":"","frontmatter":{},"headers":[],"relativePath":"chat/third/sd.md","filePath":"chat/third/sd.md"}'),p={name:"chat/third/sd.md"};function e(i,a,o,d,h,c){return l(),n("div",null,a[0]||(a[0]=[s(`<h1 id="chatglm本地模型部署" tabindex="-1">ChatGLM本地模型部署 <a class="header-anchor" href="#chatglm本地模型部署" aria-label="Permalink to &quot;ChatGLM本地模型部署&quot;">​</a></h1><h2 id="chatglm2-6b" tabindex="-1">ChatGLM2-6B <a class="header-anchor" href="#chatglm2-6b" aria-label="Permalink to &quot;ChatGLM2-6B&quot;">​</a></h2><h3 id="chatglm2-6b-简介" tabindex="-1">ChatGLM2-6B 简介 <a class="header-anchor" href="#chatglm2-6b-简介" aria-label="Permalink to &quot;ChatGLM2-6B 简介&quot;">​</a></h3><p>ChatGLM2-6B 是开源中英双语对话模型 ChatGLM-6B 的第二代版本，具体介绍可参阅 <a href="https://github.com/THUDM/ChatGLM2-6B" target="_blank" rel="noreferrer">ChatGLM2-6B 项目主页</a></p><p>注意</p><p>ChatGLM2-6B 权重对学术研究完全开放，在获得官方的书面许可后，亦允许商业使用。本教程只是介绍了一种用法，无权给予任何授权！</p><h3 id="推荐配置" tabindex="-1">推荐配置 <a class="header-anchor" href="#推荐配置" aria-label="Permalink to &quot;推荐配置&quot;">​</a></h3><p>依据官方数据，同样是生成 8192 长度，量化等级为 FP16 要占用 12.8GB 显存、int8 为 8.1GB 显存、int4 为 5.1GB 显存，量化后会稍微影响性能，但不多。</p><table tabindex="0"><thead><tr><th>类型</th><th>内存</th><th>显存</th><th>硬盘空间</th></tr></thead><tbody><tr><td>fp16</td><td>&gt;=16GB</td><td>&gt;=16GB</td><td>&gt;=25GB</td></tr><tr><td>int8</td><td>&gt;=16GB</td><td>&gt;=9GB</td><td>&gt;=25GB</td></tr><tr><td>int4</td><td>&gt;=16GB</td><td>&gt;=6GB</td><td>&gt;=25GB</td></tr></tbody></table><h3 id="源码部署" tabindex="-1">源码部署 <a class="header-anchor" href="#源码部署" aria-label="Permalink to &quot;源码部署&quot;">​</a></h3><p>提示</p><p>根据上面的环境配置配置好环境，具体教程自行百度； 可参考的部署文章: <a href="https://blog.csdn.net/lovelylord/article/details/132349967" target="_blank" rel="noreferrer">https://blog.csdn.net/lovelylord/article/details/132349967</a></p><ul><li><strong>1、从GitHub仓库中拉取代码</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 1.从GitHub仓库中拉取代码</span></span>
<span class="line"><span>git clone https://github.com/THUDM/ChatGLM2-6B</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2.进入下载源码的目录</span></span>
<span class="line"><span>cd ChatGLM2-6B</span></span></code></pre></div><ul><li><p><strong>2、下载python文件：</strong> <a href="https://doc.chatmoney.cn/docs/download/glm.zip" target="_blank" rel="noreferrer">点击Python文件</a></p><ul><li>得到两个文件: openai_ai.py 和 requirements.txt</li><li>把这两个文件替换到 ChatGLM2-6B 目录里面</li></ul></li><li><p><strong>3、在命令行输入命令(安装依赖)：</strong> <strong>​<code>pip install -r requirments.txt</code>​</strong></p><ul><li>建议使用python的虚拟环境,以免产生一些不必要的麻烦。</li></ul></li><li><p><strong>4、运行项目：</strong> <strong>​<code>python openai_api.py --model 16</code>​</strong> <strong>这里的数字根据上面的配置进行选择。</strong></p><ul><li>然后等待模型下载，直到模型加载完毕为止。如果出现报错先问百度。</li><li>这里可能需要科学上网</li></ul></li><li><p><strong>5、启动成功后应该会显示如下地址：</strong></p></li></ul><p>提示</p><p>这里的 <a href="http://0.0.0.0:8000/" target="_blank" rel="noreferrer">http://0.0.0.0:8000</a> 就是连接地址。</p><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/chat-glm/chatglm-start.png" alt=""></p><h3 id="关于-openai-api-py-启动的一些参数" tabindex="-1">关于 openai_api.py 启动的一些参数 <a class="header-anchor" href="#关于-openai-api-py-启动的一些参数" aria-label="Permalink to &quot;关于 openai\\_api.py 启动的一些参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数名</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>--device</td><td>cuda=显卡运行, cpu=cpu运行</td><td>cuda</td></tr><tr><td>--path</td><td>local=本地下载的模型运行, thudm=线上自动下载</td><td>thudm</td></tr><tr><td>--model</td><td>4=chatglm2-6b-int4, 8=chatglm2-6b-int8, 16=chatglm2-6b</td><td>16</td></tr></tbody></table><ul><li><p>说明:</p><ul><li>如果你 <code>--path</code> 参数设置为 local, 那需要你先把模型下载下来, 放到 ChatGLM2-6B/models 目录下</li><li>比如: ChatGLM2-6B/models/chatglm2-6b-int4</li><li>然后再去运行: <code>python openai_api.py --model 4 --path local</code></li></ul></li></ul><h3 id="接口测试" tabindex="-1">接口测试 <a class="header-anchor" href="#接口测试" aria-label="Permalink to &quot;接口测试&quot;">​</a></h3><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/chat-glm/chatglm-post.png" alt=""></p><h3 id="接入到系统" tabindex="-1">接入到系统 <a class="header-anchor" href="#接入到系统" aria-label="Permalink to &quot;接入到系统&quot;">​</a></h3><p><img src="https://doc.chatmoney.cn/docs/images/general/third-deployment/chat-glm/chatglm-set.png" alt=""></p><h2 id="chatglm3-6b" tabindex="-1">ChatGLM3-6B <a class="header-anchor" href="#chatglm3-6b" aria-label="Permalink to &quot;ChatGLM3-6B&quot;">​</a></h2><p>注意</p><p>部署方案和ChatGLM2-6B的方式基本上是一样的。</p><ul><li><strong>1、从GitHub仓库中拉取代码</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 1.从GitHub仓库中拉取代码</span></span>
<span class="line"><span>https://github.com/THUDM/ChatGLM3</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2.进入下载源码的目录</span></span>
<span class="line"><span>cd ChatGLM3-6B</span></span></code></pre></div><ul><li><strong>2、在命令行输入命令(安装依赖)</strong></li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># PS: 建议使用python的虚拟环境,以免产生一些不必要的麻烦。</span></span>
<span class="line"><span>pip install -r requirments.txt</span></span></code></pre></div><ul><li><strong>3、安装cuda依赖 (如果你是用显卡运行,否则忽略该步骤)</strong></li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>3.1、我这边是使用windows系统,首先需要运行一下命令看一下CUDA的版本</span></span>
<span class="line"><span>    在cmd终端运行: nvidia-smi</span></span>
<span class="line"><span>    我这边得到的版本是: CUDA Version: 12.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.2、然后去torch官网中查看CUDA适配的torch版本</span></span>
<span class="line"><span>   官网: https://pytorch.org/get-started/locally/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.3、进入网站后按版本选择安装命令 (根据你电脑实际情况选择)</span></span>
<span class="line"><span>    PyTorch Build    :  Stable(2.1.0)</span></span>
<span class="line"><span>    Your OS          : Windows</span></span>
<span class="line"><span>    Package          : Pip</span></span>
<span class="line"><span>    Language         : Python</span></span>
<span class="line"><span>    Compute Platform : CUDA 12.1</span></span>
<span class="line"><span>    Run this Command : pip3 install torch trchvision ......</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.4、你只需要复制后面 Run this Command 选项的这串 pip3的安装命令, 然后回到你电脑的终端运行即可</span></span></code></pre></div><ul><li><p><strong>4、下载python文件：</strong> <a href="https://doc.chatmoney.cn/docs/download/glm3.zip" target="_blank" rel="noreferrer">点击Python文件</a></p><ul><li>得到1个文件: openai_ai.py (此文件就是启动文件)</li><li>把这个文件放到到 ChatGLM3-6B 目录里面</li></ul></li><li><p><strong>5、下载模型文件到本地：</strong></p><ul><li>下载地址: <a href="https://modelscope.cn/models/ZhipuAI/chatglm3-6b/files" target="_blank" rel="noreferrer">https://modelscope.cn/models/ZhipuAI/chatglm3-6b/files</a></li><li>把里面列表所有文件都下载回来, 并统一用一个名为 chatglm3-6b 的文件夹存放</li><li>然后把该文件夹的(含所有内容) 一并移动到 ChatGLM3-6B/models 目录下面</li></ul></li><li><p><strong>6、运行项目：</strong> <strong>​<code>python openai_api.py</code>​</strong> <strong>这里的数字根据上面的配置进行选择。</strong></p><ul><li><p>然后等待模型下载，直到模型加载完毕为止。如果出现报错先问百度。</p></li><li><p>这里可能需要科学上网 (默认是需要从 www.huggingface.org 上面下载模型文件回来的, 时间会比较长)</p></li><li><p>以上什么参数都没有的实际运行命令是 <code>python openai_api.py --device cuda --path local --model 4</code></p><ul><li>该命令的意思是 启动脚本 使用 【显卡驱动、使用本地下载的模型文件(即上面第5步) 、 使用量化版本】</li><li>为什么默认使用量化版本? 因为如果你的显卡显存不够13GB是没办法运行正常的版本的。</li><li>如果运行正常版本? 把参数 --model 4 改成 --model 16 即可。</li><li>问: 我要运行32k的模型呢? 答: 那你就去下载32k的模型 当然放到源码的models目录下面, 修改一些运行命令运行就行了</li></ul></li></ul></li><li><p><strong>7、运行后的效果</strong></p></li></ul><p>shell</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(venv) PS E:\\AI\\GLM3&gt; python .\\openai_api.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span>===========================</span></span>
<span class="line"><span>本次加载模型的设备为GPU:  NVIDIA CMP 40HX</span></span>
<span class="line"><span>===========================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正在启动的是量化版本...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Loading checkpoint shards: 100%|█████████████████████████████████████████████████████████| 7/7 [00:23&lt;00:00,  3.41s/it]</span></span>
<span class="line"><span>INFO:     Started server process [11136]</span></span>
<span class="line"><span>INFO:     Waiting for application startup.</span></span>
<span class="line"><span>INFO:     Application startup complete.</span></span>
<span class="line"><span>INFO:     Uvicorn running on http://0.0.0.0:8100 (Press CTRL+C to quit)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 注意</span></span>
<span class="line"><span>## 注意</span></span>
<span class="line"><span>## 这个就是你的运行接口,配置到知识库系统里那个</span></span>
<span class="line"><span>接口: http://0.0.0.0:8100</span></span></code></pre></div><ul><li><strong>8、关于 openai_api.py 启动的一些参数</strong></li></ul><table tabindex="0"><thead><tr><th>参数名</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>--device</td><td>cuda=显卡运行, cpu=cpu运行</td><td>cuda</td></tr><tr><td>--path</td><td>local=本地下载的模型运行, thudm=线上自动下载</td><td>thudm</td></tr><tr><td>--model</td><td>4=量化模型, 16=chatglm3-6b, 32=chatglm2-6b-32k, 128=chatglm2-6b-32k</td><td>4</td></tr></tbody></table><ul><li><p>说明:</p><ul><li>如果你 <code>--path</code> 参数设置为 local, 那需要你先把模型下载下来, 放到 ChatGLM2-6B/models 目录下</li><li>比如: ChatGLM3-6B/models/chatglm3-6b</li><li>然后再去运行: <code>python openai_api.py --model 4 --path local</code></li><li>PS: 温馨小提示,GLM3不再像之前GLM2那样单独提供量化版本模型下载, 现在是量化模型直接继承在 chatglm3-6b模型上,使用运行命令作为区分。</li></ul></li></ul>`,42)]))}const u=t(p,[["render",e]]);export{g as __pageData,u as default};
