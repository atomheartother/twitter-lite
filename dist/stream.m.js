var t=function(t){function e(){t.call(this),this.buffer=""}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.parse=function(t){var e,o;for(console.log("Got "+t.length+"B buffer"),this.buffer+=t.toString("utf8");(e=this.buffer.indexOf("\r\n"))>-1;)if(o=this.buffer.slice(0,e),this.buffer=this.buffer.slice(e+2),o.length>0)try{o=JSON.parse(o),console.log("Emitting "+(o.event||"data")+" with json body"),console.log(o),this.emit(o.event||"data",o)}catch(t){t.source=o,this.emit("error",t)}else this.emit("ping")},e}(require("events"));module.exports=t;
//# sourceMappingURL=stream.m.js.map
