// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 接收父元素的数据
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    handleItemTap(e){
      // 1 点击事件
      const {index} = e.currentTarget.dataset;
      console.log(index);

      // 2 触发 父组件中的事件 自定义
      this.triggerEvent("tabsItemChange", {index});
    }

    
  }
})
