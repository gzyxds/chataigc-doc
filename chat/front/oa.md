# 微信公众号配置指南 🔧

## ⚠️ 重要提示
- 必须使用**企业认证的服务号**,订阅号不支持此功能
- 请严格按照以下步骤进行配置,避免出错

## 1. IP白名单配置 🌐

1. 访问[微信公众平台](https://mp.weixin.qq.com)并登录
2. 进入【设置与开发】->【基本设置】
3. 找到IP白名单设置项
4. 添加服务器外网IP(通常是宝塔登录地址的IP)

![IP白名单设置](https://doc.chatmoney.cn/docs/images/general/front/oa/ip-whitelist.png)

## 2. 开发者信息与服务器配置 ⚙️

### ⚠️ 特别注意
- 配置步骤较多,请严格按顺序操作
- 第19步必须先保存,否则第20步启用时会报token验证失败
- 最终必须确保公众号服务器配置处于启用状态,否则PC端无法使用

### 配置步骤
1. 登录管理后台:【渠道设置】->【微信公众号】->【公众号设置】
2. 登录微信公众号后台:【设置与开发】->【基本配置】
3. 复制AppID和AppSecret到管理后台对应位置
4. 按照界面提示完成服务器配置:
   - 复制URL配置
   - 设置Token
   - 配置EncodingAESKey 
   - 选择明文模式
5. 保存并启用服务器配置

![服务器配置](https://doc.chatmoney.cn/docs/images/general/front/oa/config.png)

## 3. 域名配置 🌍

### ⚠️ 验证文件说明
下载验证文件时请注意:文件名必须与公众号后台显示的完全一致,否则验证将失败

### 配置步骤
1. 在公众号后台:【设置与开发】->【公众号设置】
2. 下载域名验证文件
3. 上传验证文件到项目server/public目录
4. 配置以下域名:
   - 业务域名
   - JS接口安全域名  
   - 网页授权域名

![域名配置示例](https://doc.chatmoney.cn/docs/images/general/front/oa/domain-1.png)

## 4. 菜单设置 📱

### ⚠️ 注意事项
域名配置必须包含mobile路径,否则iOS设备分享链接可能出现问题

### 配置步骤
1. 进入管理后台:【渠道设置】->【微信公众号】->【菜单管理】
2. 设置菜单名称
3. 配置跳转链接: `https://域名/mobile`
4. 保存配置