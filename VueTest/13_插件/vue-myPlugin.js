/*
(function (window) {
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive',function (el, binding) {
      el.textContent = 'my-directive----'+binding.value
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }
  window.MyPlugin = MyPlugin
})(window)
*/

(function (window) {
  // 需要向外暴露的插件对象
  const MyPlugin = {};

  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
      console.log('Vue函数对象的方法myGlobalMethod（）');
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      el.textContent = binding.value.toUpperCase();
    })

    // 3. 注入组件选项
    // Vue.mixin({
    //   created: function () {
    //     // 逻辑...
    //   }
    //   ...
    // })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
      console.log('Vue实例对象的方法$myMethod()');
    }
  }
  // 向外暴露
  window.Myplugin = MyPlugin;
})(window)
