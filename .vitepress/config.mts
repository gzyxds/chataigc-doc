import { defineConfig } from "vitepress";
	export default defineConfig({
  "title": "AIGC创作系统",
  "description": "专注提供AI系统源代码解决方案的技术团队「超级全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧",
  "head": [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }]
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "🏚️首页",
        "link": "/"
      },
      {
        "text": "🖥️项目介绍",
        "items": [
          {
            "text": "📗项目介绍",
            "link": "/product/Project/Product"
          },
          {
            "text": "🤖产品授权",
            "link": "/product/Project/auth"
          },
          {   
            "text": "🛒授权购买",
            "link": "/product/Project/shop"
          },
          {
            "text": "🎉系统演示",
            "link": "/product/aigc/demo.html"
          },
          {
            "text": "📢联系我们",
            "link": "/product/Project/contact"
          }
        ]
      },
      {
        "text": "📑部署文档",
        "items": [
          {
            "text": "🚀AI数字人",
            "link": "/human"
          },
          {
            "text": "🤖全能知识库",
            "link": "/work/deployment/demo"
          },
          {
            "text": "🎉聊天绘画",
            "link": "/chat/index"
          },
          {
            "text": "📝论文写作",
            "link": "/Paper/deployment/bt"
          }
        ]
      },
      {
        "text": "🌍官网",
        "link": "https://www.urlnet.cn"
      },
      {
        "text": "🧠AI助手",
        "items": [
          {
            "text": "艺创AI",
            "link": "http://cnai.art"
          },
          {
            "text": "知识库",
            "link": "https://comnew.cn"
          },
          {
            "text": "AI数字人",
            "link": "http://hd.cnai.art"
          },
          {
            "text": "APP下载",
            "link": "https://www.123865.com/s/AIVRVv-eEIJA"
          }
        ]
      },
      {
        "text": "🔎生态体系",
        "items": [
          {
            "text": "OpenApi",
            "link": "https://api.cnai.art"
          },
          {
            "text": "优刻云计算",
            "link": "https://www.cloudcvm.com/"
          },
        ]
      },
      {
        "text": "💬联系我们",
        "items": [
          {
            "text": "📢联系方式",
            "link": "/product/Project/contact"
          },
          {
            "text": "🎉技术支持",
            "link": "/product/Project/contact"
          },
          
        ]
      }
    ],     
    "sidebar": {
      "/work/": [
        {
          "text": "🐳 知识库部署",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "📄 部署文档",
              "link": "/work/deployment/btdocke"
            },
            {
              "text": "🎥 版本演示",
              "link": "work/deployment/demo.md"
            },
            {
              "text": "📚 知识库PDF",
              "link": "https://rwm01l8tn3x.feishu.cn/file/BkclbxFSUohtf8xWYRuc5XB7n1g?from=from_copylink"
            },
            {
              "text": "📊 运营文档",
              "link": "/work/fqa/operation"
            },
            {
              "text": "📜 更新日志",
              "link": "/work/deployment/update"
            }
          ]
        },
        {
          "text": "🎉 第三方部署",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "🤖 ChatGLM本地模型部署",
              "link": "/work/third/chatglm"
            },
            {
              "text": "🧮 M3E向量模型部署",
              "link": "/work/third/m3e"
            },
            {
              "text": "💬 接入个人/企业微信",
              "link": "/work/third/wechat"
            },
            {
              "text": "🎨 SD绘图部署",
              "link": "/work/third/sd"
            },
            {
              "text": "💻 LMstudio（本地大模型）",
              "link": "/work/third/LMstudio"
            }
          ]
        },
        {
          "text": "🐹 前端部署",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "📱 微信公众号",
              "link": "/work/front/oa"
            },
            {
              "text": "📲 编译上传微信小程序 ①",
              "link": "/work/front/mnp"
            },
            {
              "text": "⚡ 后台上传微信小程序 ②",
              "link": "/work/front/fastmnp"
            }
          ]
        },
        {
          "text": "🐰 其他配置",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "🔓 微信开放平台（微信帐号统一）",
              "link": "/work/other/open"
            },
            {
              "text": "💳 微信支付",
              "link": "/work/other/wechatpay"
            },
            {
              "text": "💰 支付宝支付",
              "link": "/work/other/alipay"
            },
            {
              "text": "📨 短信配置",
              "link": "/work/other/sms"
            },
            {
              "text": "📦 对象存储",
              "link": "/work/other/oss"
            },
            {
              "text": "🌐 自定义API域名代理",
              "link": "/work/other/proxy"
            },
            {
              "text": "🎨 Dalle绘画配置",
              "link": "/work/other/dalle"
            }
          ]
        },
        {
          "text": "🐞 常见问题",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "🆙 升级更新",
              "link": "/work/fqa/version"
            },
            {
              "text": "❌ 报错排查",
              "link": "/work/fqa/error"
            },
            {
              "text": "500 错误",
              "link": "/work/fqa/debug"
            },
            {
              "text": "🤖 GPT使用指南",
              "link": "/work/fqa/gpt"
            }
          ]
        },
        {
          "text": "🦧 二次开发",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "📝 基本介绍",
              "link": "/work/develop/base"
            },
            {
              "text": "💻 前端开发",
              "link": "/work/develop/web"
            },
            {
              "text": "🗃️ 数据库结构",
              "link": "/work/develop/database"
            }
          ]
        }
      ],
      "/human/": [
        {
          "text": "🐳 AI数字人Saas系统",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "🏠 项目首页",
              "link": "/hd/"
            },
            {
              "text": "🌐 系统官网",
              "link": "https://www.urlnet.cn/human"
            },
            {
              "text": "📜 更新日志",
              "link": "/human/deployment/update"
            },
            {
              "text": "📖 系统介绍",
              "link": "/human/index"
            },
            {
              "text": "📊 PPT介绍",
              "link": "https://rwm01l8tn3x.feishu.cn/file/OSQ3bgCa8oeVARx0L5mc3haCnpe?from=from_copylink"
            },
            {
              "text": "🛠️ 宝塔面板部署 ①",
              "link": "/human/deployment/bt"
            },
            {
              "text": "⚙️ 通用部署 ②", 
              "link": "/human/deployment/general"
            },
            {
              "text": "🐹 前端部署",
              "collapsed": false,
              "collapsible": true,
              "items": [
                {
                  "text": "💬 微信公众号",
                  "link": "/human/front/oa"
                }
              ]
            },
            {
              "text": "🐰 其他配置",
              "collapsed": false,
              "collapsible": true,
              "items": [
                {
                  "text": "🔓 微信开放平台（微信帐号统一）",
                  "link": "/human/other/open"
                },
                {
                  "text": "💳 微信支付",
                  "link": "/human/other/wechatpay"
                },
                {
                  "text": "💰 支付宝支付",
                  "link": "/human/other/alipay"
                }
              ]
            },
            {
              "text": "🦧 二次开发",
              "collapsed": false,
              "collapsible": true,
              "items": [
                {
                  "text": "🔌 数据接口",
                  "link": "/human/develop/api"
                }
              ]
            }
          ]
        }
      ],

      "/chat/": [
        {
          "text": "🐳 聊天绘画部署",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "宝塔部署",
              "link": "/chat/deployment/bt"
            },
            {
              "text": "Docker部署",
              "link": "/chat/deployment/docker"
            },
            {
              "text": "通用部署",
              "link": "/chat/deployment/general"
            },
            {
              "text": "更新日志",
              "link": "/chat/deployment/update"
            },
            {
              "text": "聊天绘画PDF",
              "link": "https://rwm01l8tn3x.feishu.cn/slides/DJrEs6r3KlzjpCdo53UcXu8mnYb?from=from_copylink"
            },
            // {
            //   "text": "运营文档",
            //   "link": "/chat/deployment/Operations"
            // },
            {
              "text": "系统演示",
              "link": "/chat/deployment/demo"
            }
          ]
        },
        {
          "text": "🐹 前端部署",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "微信公众号",
              "link": "/chat/front/oa"
            },
            {
              "text": "后台上传微信小程序 ②",
              "link": "/chat/front/fastmnp"
            },
            {
              "text": "编译上传微信小程序 ①",
              "link": "/chat/front/mnp"
            },
            {
              "text": "安卓APP",
              "link": "/chat/front/android"
            },
            {
              "text": "苹果APP",
              "link": "/chat/front/ios"
            }
          ]
        },
        {
          "text": "🎉 第三方部署",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "SD绘图部署",
              "link": "/chat/third/sd"
            }
          ]
        },
        {
          "text": "🐰 其他配置",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "微信开放平台",
              "link": "/chat/config/open"
            },
            {
              "text": "微信支付",
              "link": "/chat/config/wechatpay"
            },
            {
              "text": "支付宝支付",
              "link": "/chat/config/alipay"
            },
            {
              "text": "短信配置",
              "link": "/chat/config/sms"
            },
            {
              "text": "对象存储",
              "link": "/chat/config/oss"
            },
            {
              "text": "MJ配置",
              "link": "/chat/config/MJ"
            },
            {
              "text": "自定义API域名代理",
              "link": "/chat/config/proxy"
            }
          ]
        },
        {
          "text": "🐞 常见问题",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "升级更新",
              "link": "/chat/fqa/version"
            },
            {
              "text": "报错排查",
              "link": "/chat/fqa/error"
            },
            {
              "text": "500错误",
              "link": "/chat/fqa/debug"
            },
            {
              "text": "GPT使用指南",
              "link": "/chat/fqa/gpt"
            }
          ]
        },
        {
          "text": "🦧 二次开发",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "基本介绍",
              "link": "/chat/develop/base"
            },
            {
              "text": " 前端开发",
              "link": "/chat/develop/web"
            },
            {
              "text": "数据库结构",
              "link": "/chat/develop/database"
            }
          ]
        }
      ],
      "/docs/": [],
      "/Paper/": [
        {
          "text": "🐳论文写作部署",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "宝塔部署 ",
              "link": "/Paper/deployment/bt"
            },
            {
              "text": "通用部署 ",
              "link": "/Paper/deployment/general"
            },
            {
              "text": "版本演示",
              "link": "/Paper/deployment/demo"
            }
          ]
        },
        {
          "text": "🐹前端部署",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "微信公众号",
              "link": "/Paper/front/oa"
            }
          ]
        },
        {
          "text": "🐰其他配置",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "微信开放平台",
              "link": "/Paper/config/open"
            },
            {
              "text": "微信支付",
              "link": "/Paper/config/wechatpay"
            },
            {
              "text": "支付宝支付",
              "link": "/Paper/config/alipay"
            },
            {
              "text": "短信配置",
              "link": "/Paper/config/sms"
            },
            {
              "text": "对象存储",
              "link": "/Paper/config/oss"
            },
            {
              "text": "API域名代理",
              "link": "/Paper/config/proxy"
            }
          ]
        },
        {
          "text": "🐞常见问题",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "升级更新",
              "link": "/Paper/fqa/version"
            },
            {
              "text": "报错排查",
              "link": "/Paper/fqa/error"
            },
            {
              "text": "500错误",
              "link": "/Paper/fqa/debug"
            },
            {
              "text": "GPT使用指南",
              "link": "/Paper/fqa/gpt"
            }
          ]
        },
        {
          "text": "🦧二次开发",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "基本介绍",
              "link": "/Paper/develop/base"
            },
            {
              "text": "前端开发",
              "link": "/Paper/develop/web"
            }
          ]
        }
      ],
      "/Project/": [
        {
          "text": "Contact",
          "collapsed": false,
          "collapsible": true,
          "link": "/Project/Contact"
        },
        {
          "text": "Project",
          "link": "/Project/Project"
        },
        {
          "text": "Purchase",
          "link": "/Project/Purchase"
        },
        {
          "text": "api-examples",
          "link": "/Project/api-examples"
        },
        {
          "text": "auth",
          "link": "/Project/auth"
        }
      ],
      "/项目介绍/": [
        {
          "text": "项目介绍",
          "items": [
            {
              "text": "产品授权",
              "link": "/项目介绍/产品授权.md"
            },
            {
              "text": "授权购买",
              "link": "/项目介绍/授权购买"
            },
            {
              "text": "联系我们",
              "link": "/项目介绍/联系我们"
            },
            {
              "text": "项目介绍",
              "link": "/项目介绍/项目介绍"
            }
          ]
        },
        {
          "text": "AIGC系统",
          "items": [
            {
              "text": "企业知识库",
              "link": "/项目介绍/AIGC系统/Work"
            },
            {
              "text": "聊天绘画",
              "link": "/聊天绘画/AIGC系统/chat"
            },
            {
              "text": "论文写做",
              "link": "/项目介绍/AIGC系统/paper"
            }
          ]
        }
      ],
      "/project/": [
        {
          "text": "🐳AIGC系统",
          "items": [
            {
              "text": "🐳企业知识库",
              "link": "/project/aigc/Work"
            },
            {
              "text": "🎨聊天绘画",
              "link": "/project/aigc/chat"
            },
            {
              "text": "📖论文写作",
              "link": "/project/aigc/paper"
            }
          ]
        },
        {
          "text": "🗂项目介绍",
          "link": "/project/Product"
        },
        {
          "text": "💰代理分销",
          "link": "/project/agent"
        },
        {
          "text": "🏅商业授权",
          "link": "/project/auth"
        },
        {
          "text": "📞联系我们",
          "link": "/project/contact"
        },
        {
          "text": "📢授权购买",
          "link": "/project/shop"
        },
        {
          "text": "Markdown",
          "link": "/project/Markdown"
        }
      ],
      "/product/": [
        {
          "text": "🖥产品中心",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "🖥️项目介绍",
              "link": "/product/Project/Product"
            },
            {
              "text": "🏅商业授权",
              "link": "/product/Project/auth"
            },
            {
              "text": "✨代理加盟",
              "link": "/product/Project/agent"
            },
            {
              "text": "💰授权购买",
              "link": "/product/Project/shop"
            },
            {
              "text": "📢联系我们",
              "link": "/product/Project/contact"
            },
            {
              "text": "🎉产品演示",
              "link": "/product/Project/demo"
            }
          ]
        },
        
        {
          "text": "🎉AIGC系统",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "🖥️企业知识库",
              "link": "/product/aigc/Work"
            },
            {
              "text": "🎭SaaS数字人",
              "link": "/hd"
            },
            {
              "text": "🎨聊天绘画",
              "link": "/product/aigc/chat"
            },
            {
              "text": "📖论文写作",
              "link": "/product/aigc/paper"
            },
            {
              "text": "🖥️系统官网",
              "link": "https://www.urlnet.cn/"
            }
            
          ]
        },

        {
          "text": "🍵友情连接",
          "collapsed": false,
          "collapsible": true,
          "items": [
            {
              "text": "☁优刻云",
              "link": "https://www.cloudcvm.com/"
            },
            {
              "text": "📫枭格科技",
              "link": "http://www.xgphp.cn/"
            },
            {
              "text": "🔍172号卡",
              "link": "http://www.urlka.cn/"
            },
            {
              "text": "🎉支付系统",
              "link": "http://www.payphp.cn/"
            },
            {
              "text": "👀源码市场",
              "link": "http://www.codepu.cn/"
            }
          
          ]
        }
      ]
    },  //  侧边栏页面导航结束


    "socialLinks": [    //    社交链接
      {
        "icon": "github",
        "link": "https://urlnet.cn"
      },
      {
        "icon": "discord",
        "link": "https://urlnet.cn"
      },
      
      {
        "icon": "twitter",
        "link": "https://urlnet.cn"
      },

    ],

    "i18nRouting": false,
    "logo": "/images/logo.svg",
    "siteTitle": "AIGC创作系统",
    "level": 2,
    "label": "页面导航",
    "lastUpdated": {
      "text": "最后更新时间"
    },
    "head": [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
      ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
      ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }]
    ],
    // "carbonAds": {          
    //   "carbon": "CEBDT27Y"
    // },
    // "carbon": {  // 自定义组件
    //   "key": "CEBDT27Y",
    //   "component": "EditLink",
    //   "componentProps": {
    //     "repo": "vuejs/vitepress",
    //     "branch": "main",
    //     "dir": "docs"
    //   },
    //   "customComponent": "EditLink",  // 自定义组件名称
    //   "customComponentProps": {
    //     "repo": "vuejs/vitepress",
    //     "branch": "main",
    //     "dir": "docs"
    //   },
    //   "customComponentProps2": {  // 自定义组件名称2
    //     "repo": "vuejs/vitepress",
    //     "branch": "main",
    //     "dir": "docs"
      // }
    "chunkSizeWarningLimit": 1500,
    "search": {   // 搜索
      "provider": "local",  // 本地搜索
      "options": {   // 配置项
        "appId": "", 
        "apiKey": "",
        "indexName": "搜索", // 索引名称
        "locales": {   // 配置多语言
          "zh": {
            "placeholder": "搜索文档",
            "translations": {  // 搜索框提示语
              "button": {  // 搜索按钮
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "清除查询条件",
                  "resetButtonAriaLabel": "清除查询条件",
                  "cancelButtonText": "取消",
                  "cancelButtonAriaLabel": "取消"
                },
                "startScreen": {
                  "recentSearchesTitle": "搜索历史",
                  "noRecentSearchesText": "没有搜索历史",
                  "saveRecentSearchButtonTitle": "保存至搜索历史",
                  "removeRecentSearchButtonTitle": "从搜索历史中移除",
                  "favoriteSearchesTitle": "收藏",
                  "removeFavoriteSearchButtonTitle": "从收藏中移除"
                },
                "errorScreen": {
                  "titleText": "无法获取结果",
                  "helpText": "你可能需要检查你的网络连接"
                },
                "footer": {
                  "selectText": "选择",
                  "navigateText": "切换",
                  "closeText": "关闭",
                  "searchByText": "搜索提供者"
                },
                "noResultsScreen": {
                  "noResultsText": "无法找到相关结果",
                  "suggestedQueryText": "你可以尝试查询",
                  "reportMissingResultsText": "你认为该查询应该有结果？",
                  "reportMissingResultsLinkText": "点击反馈"
                }
              }
            }
          },
          "en": {
            "placeholder": "搜索",
            "translations": {
              "button": {
                "buttonText": "搜索",
                "buttonAriaLabel": "搜索"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "Clear query",
                  "resetButtonAriaLabel": "Clear query",
                  "cancelButtonText": "Cancel",
                  "cancelButtonAriaLabel": "Cancel"
                },
                "startScreen": {
                  "recentSearchesTitle": "Recent searches",
                  "noRecentSearchesText": "No recent searches",
                  "saveRecentSearchButtonTitle": "Save search",
                  "removeRecentSearchButtonTitle": "Remove search",
                  "favoriteSearchesTitle": "Favorites",
                  "removeFavoriteSearchButtonTitle": "Remove from favorites"
                },
                "errorScreen": {
                  "titleText": "Unable to fetch results",
                  "helpText": "You may want to check your network connection"
                },
                "footer": {
                  "selectText": "select",
                  "navigateText": "navigate",
                  "closeText": "close",
                  "searchByText": "Search by"
                },
                "noResultsScreen": {
                  "noResultsText": "No results for",
                  "suggestedQueryText": "You can try searching for",
                  "reportMissingResultsText": "You think it should have results?",
                  "reportMissingResultsLinkText": "Click here to report it"  
                }
              }
            }
          }
        }
      }
    },
    "langMenuLabel": "多语言",
    "langs": [
      {}
    ],
    "returnToTopLabel": "返回顶部",
    "lastUpdatedText": "最近更新于",
    "externalLinkIcon": true,
    "outline": {},
    "darkModeSwitchLabel": "主题",
    "lightModeSwitchTitle": "切换到浅色模式",
    "darkModeSwitchTitle": "切换到深色模式",
    "editLink": {
      "text": "编辑文档",
      "pattern": "https://github.com/gzyxds/chataigc-doc"
    },
    "docFooter": {
      "prev": "上一页",
      "next": "下一页"
    },
    "footer": {
      "copyright": "版权所有@ 2025 Albert AIGC创作系统 ICP备2022147728号"
    },
    "siteTitle": false,
    "sidebarMenuLabel": "菜单"
  },
  "markdown": {  
    "lineNumbers": true 
  },
  "srcDir": "./",
  "assetsDir": "static",
  "sitemap": {  
    "hostname": "https://www.cnai.art",
    "lastmodDateOnly": false
  },
  "locales": {},
  "cacheDir": "./.vitepress/cache",
  "titleTemplate": "AI系统源码|AI数字人系统|聊天绘画系统|ai平台源码|ai创作系统源码|ai官网源码",
  "lang": "en-US",
  "base": "/",
  "outDir": "./.vitepress/dist",
  "cleanUrls": false,
  "rewrites": {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  }
});
