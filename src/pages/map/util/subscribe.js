
export class Subscribe {
  constructor() {
    this.handles = {};
  }

  // 订阅事件
  on(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType] = [];
    }
    if (typeof handle == 'function') {
      this.handles[eventType].push(handle);
    } else {
      throw new Error('缺少回调函数');
    }
    return this;
  }

  // 发布事件
  emit(eventType, ...args) {
    if (this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType].forEach((item, key, arr) => {
        item.apply(null, args);
      })
    } else {
      throw new Error(`"${eventType}"事件未注册`);
    }
    return this;
  }
}