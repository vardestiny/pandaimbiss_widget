// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: comments;
// 
// iOS 桌面组件脚本 @「小件件」
// 开发说明：请从 Widget 类开始编写，注释请勿修改
// https://x.im3x.cn
// 

// 添加require，是为了vscode中可以正确引入包，以获得自动补全等功能
if (typeof require === 'undefined') require = importModule
const { Base } = require("./「小件件」开发环境")

// @组件代码开始
class Widget extends Base {
  /**
   * 传递给组件的参数，可以是桌面 Parameter 数据，也可以是外部如 URLScheme 等传递的数据
   * @param {string} arg 自定义参数
   */
  constructor (arg) {
    super(arg)
    this.name = '菜单展示'
    this.desc = '从App Copy订单过来用于简单展示'
  }

  /**
   * 渲染函数，函数名固定
   * 可以根据 this.widgetFamily 来判断小组件尺寸，以返回不同大小的内容
   */
  async render () {
    const data = await this.getData()
    switch (this.widgetFamily) {
      case 'large':
        return await this.renderLarge(data)
      case 'medium':
        return await this.renderMedium(data)
      default:
        return await this.renderSmall(data)
    }
  }

  /**
   * 渲染小尺寸组件
   */
  async renderSmall (data) {
    let w = new ListWidget()
    let logo = 'https://www.pandaimbiss.ml/wp-content/uploads/2021/12/600x250.png';
    await this.renderHeader(w, logo, '胖达麻辣烫小工具');
    const t = w.addText(data['content'])
    t.font = Font.lightSystemFont(16)
    w.addSpacer()
    w.url = this.actionUrl('open-url', data['url'])
    return w
  }
  /**
   * 渲染中尺寸组件
   */
  async renderMedium (data, num = 3) {
    let w = new ListWidget()
    await this.renderHeader(w, data['logo'], data['title'])
    data['data'].slice(0, num).map(d => {
      const cell = w.addStack()
      cell.centerAlignContent()
      const cell_box = cell.addStack()
      cell_box.size = new Size(3, 15)
      cell_box.backgroundColor = new Color('#ff837a', 0.6)
      cell.addSpacer(10)
      const cell_text = cell.addText(d['title'])
      cell_text.font = Font.lightSystemFont(16)
      cell.url = this.actionUrl("open-url", d['url'])
      cell.addSpacer()
      w.addSpacer(10)
    })
    w.addSpacer()
    return w
  }
  /**
   * 渲染大尺寸组件
   */
  async renderLarge (data) {
    return await this.renderMedium(data, 10)
  }

  /**
   * 获取数据函数，函数名可不固定
   */
  async getData () {
// ===new order===

// 订单号:419755261
// Accepted at:Fri 17 Dec - 05:50 PM
// Fulfillment at:Fri 17 Dec - 06:30 PM

// 输入:PICKUP (ORDER FOR LATER)
// 自取外卖时间Fri 17 Dec - 06:30 PM
// 付款方式现金

// Subtotal:24.59 EUR
// VAT (7% included):1.11 EUR
// VAT (19% included):1.21 EUR
// TOTAL:24.59 EUR

// ===client info===

// 姓名:Wenbiao Peng
// 邮箱:vardestiny.de@gmail.com
// 电话:0173 3558327

// ===items===

// 1x Tomatensuppe 番茄浓汤 🥦 15.99 EUR
// Gemüse 素菜 🥦:Pakchoi 上海青 
// Gemüse 素菜 🥦:Sommerkohl 黄叶菜 
// Gemüse 素菜 🥦:Algen 海带 
// Gemüse 素菜 🥦:Pilz 香菇 
// Fleisch 肉类:Lammrolle 羊肉卷 
// Fleisch 肉类:Rindersehne 牛筋 
// Fleisch 肉类:Frühstücksfleisch 午餐肉 
// Sojaprodukte 豆制品 🥦:Panierte Tofu 豆腐泡 
// Sojaprodukte 豆制品 🥦:Yuba 腐竹 
// Grundnahrungsmittel 主食:Udon Nudel 乌冬面 
// Grundnahrungsmittel 主食:Nudeln 方便面 
// Meeresfrüchte 海鲜:Sepia 小墨鱼 
// Kräuter und Gewürze 小料:Lauchzwiebeln 葱花 
// Kräuter und Gewürze 小料:Koriander 香菜 
// Kräuter und Gewürze 小料:Chili-Öl 辣椒油 
// Kräuter und Gewürze 小料:Sesam 芝麻 
// Kräuter und Gewürze 小料:Sesampaste 秘制麻酱 
// Gewicht 重量:1000g 11.00 EUR
// 微辣
// -----------------------
// 1x White Peach Lemon Green Tea 白桃绿研 4.40 EUR
// Size:700ml 
// Toppings Extra 额外配料:Boba ball 爆爆珠 0.50 EUR
// -----------------------
// 1x Pineapple Lemonade 菠萝苏打水 4.20 EUR
// Size:700ml 
// Toppings Extra 额外配料:Boba ball 爆爆珠 0.50 EUR
// -----------------------

// ===end of order=====
// Get your order instantly confirmed by us in real-time:https://www.pandaimbiss.ml

    const api = 'https://x.im3x.cn/v1/test-api.json'
    return await this.httpGet(api, true, false) 
    
  }

  /**
   * 自定义注册点击事件，用 actionUrl 生成一个触发链接，点击后会执行下方对应的 action
   * @param {string} url 打开的链接
   */
  async actionOpenUrl (url) {
    Safari.openInApp(url, false)
  }

}
// @组件代码结束

const { Testing } = require("./「小件件」开发环境")
await Testing(Widget)