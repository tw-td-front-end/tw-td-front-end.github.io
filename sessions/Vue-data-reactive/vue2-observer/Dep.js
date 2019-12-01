var DepId = 0;
function Dep() {
  this.id = DepId++;
  this.subs = [];
  this.addSub = function (sub) {
    this.subs.push(sub)
  }

  this.removeSub = function (sub) {
    remove(this.subs, sub)
  }

  this.depend = function () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  this.notify = function (){
    // copy array;
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
  return this;
}
Dep.target = null;
const targetStack = []

function pushTarget (target) {
  targetStack.push(target)
  Dep.target = target
}

function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}

// util
function remove (arr, item){
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}