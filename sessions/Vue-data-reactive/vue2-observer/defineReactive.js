function defineReactive(
    obj,
    key
) {
  const dep = new Dep();
  // 获取传入属性的描述信息
  const property = Object.getOwnPropertyDescriptor(obj, key);

  // 设置拿到getter，setter
  const getter = property && property.get;
  const setter = property && property.set;
  let val = obj[key]

  // 重新定义defineProperty
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      // 此处Dep.target在哪里赋值呢？
      // Dep.target只有在初始化watch和render的时候赋值。
      // render的时候需要取值，这样就将dep和traget进行关联起来了。
      if (Dep.target) {
        dep.depend();
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val;
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      // 此处将会通知Dep()
      dep.notify();
    },
  });
}
