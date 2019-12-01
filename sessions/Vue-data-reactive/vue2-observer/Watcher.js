let uid = 0;

function Watcher(vm, getter) {

  this.vm = vm;

  vm._watchers.push(this);

  this.id = ++uid;
  this.deps = [];
  this.newDeps = [];
  this.depIds = new Set();
  this.newDepIds = new Set();
  this.getter = getter;
  this.value = this.get()
}
// 该方法会将observe的值在读取时将该watcher关联起来。
Watcher.prototype.get = function () {
  pushTarget(this);
  let value;
  const vm = this.vm;
  try {
    value = this.getter.call(vm, vm)
  } catch (e) {
    throw e
  } finally {
    popTarget()
    this.cleanupDeps()
  }
  return value
}

// 当observe的值读取时会调用该方法；
Watcher.prototype.addDep = function (dep) {
  const id = dep.id
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id)
    this.newDeps.push(dep)
    if (!this.depIds.has(id)) {
      dep.addSub(this)
    }
  }
}

/**
 * 清理依赖链
 */
Watcher.prototype.cleanupDeps = function () {
  let i = this.deps.length
  while (i--) {
    const dep = this.deps[i]
    // 如果之前有依赖的deps不在新的依赖中
    if (!this.newDepIds.has(dep.id)) {
      // 则移除deps中的当前watcher
      dep.removeSub(this)
    }
  }
  let tmp = this.depIds
  this.depIds = this.newDepIds
  this.newDepIds = tmp
  this.newDepIds.clear()
  tmp = this.deps
  this.deps = this.newDeps
  this.newDeps = tmp
  this.newDeps.length = 0
}


Watcher.prototype.update = function () {
  this.run()
}

Watcher.prototype.run = function () {
  const value = this.get();
  this.value = value
}
