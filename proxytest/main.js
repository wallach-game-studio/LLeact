obj = {};


const handler = {
  set: function(target,prop,receiver)
  {
    console.log(`obj ${target} changed`);
  }
}

proxy = new Proxy(obj, handler);

proxy.test = "dfsdfds";
proxy.bool = false;