// Generated by dart2js, the Dart to JavaScript compiler.
(function($){function dart() {}var A=new dart
delete A.x
var B=new dart
delete B.x
var C=new dart
delete C.x
var D=new dart
delete D.x
var E=new dart
delete E.x
var F=new dart
delete F.x
var G=new dart
delete G.x
var H=new dart
delete H.x
var J=new dart
delete J.x
var K=new dart
delete K.x
var L=new dart
delete L.x
var M=new dart
delete M.x
var N=new dart
delete N.x
var O=new dart
delete O.x
var P=new dart
delete P.x
var Q=new dart
delete Q.x
var R=new dart
delete R.x
var S=new dart
delete S.x
var T=new dart
delete T.x
var U=new dart
delete U.x
var V=new dart
delete V.x
var W=new dart
delete W.x
var X=new dart
delete X.x
var Y=new dart
delete Y.x
var Z=new dart
delete Z.x
function I(){}
init()
$=I.p
var $$={}
;(function (reflectionData) {
  "use strict";
  function map(x){x={x:x};delete x.x;return x}
    function processStatics(descriptor) {
      for (var property in descriptor) {
        if (!hasOwnProperty.call(descriptor, property)) continue;
        if (property === "") continue;
        var element = descriptor[property];
        var firstChar = property.substring(0, 1);
        var previousProperty;
        if (firstChar === "+") {
          mangledGlobalNames[previousProperty] = property.substring(1);
          if (descriptor[property] == 1) descriptor[previousProperty].$reflectable = 1;
          if (element && element.length) init.typeInformation[previousProperty] = element;
        } else if (firstChar === "@") {
          property = property.substring(1);
          $[property]["@"] = element;
        } else if (firstChar === "*") {
          globalObject[previousProperty].$defaultValues = element;
          var optionalMethods = descriptor.$methodsWithOptionalArguments;
          if (!optionalMethods) {
            descriptor.$methodsWithOptionalArguments = optionalMethods = {}
          }
          optionalMethods[property] = previousProperty;
        } else if (typeof element === "function") {
          globalObject[previousProperty = property] = element;
          functions.push(property);
          init.globalFunctions[property] = element;
        } else if (element.constructor === Array) {
          addStubs(globalObject, element, property, true, descriptor, functions);
        } else {
          previousProperty = property;
          var newDesc = {};
          var previousProp;
          for (var prop in element) {
            if (!hasOwnProperty.call(element, prop)) continue;
            firstChar = prop.substring(0, 1);
            if (prop === "static") {
              processStatics(init.statics[property] = element[prop]);
            } else if (firstChar === "+") {
              mangledNames[previousProp] = prop.substring(1);
              if (element[prop] == 1) element[previousProp].$reflectable = 1;
            } else if (firstChar === "@" && prop !== "@") {
              newDesc[prop.substring(1)]["@"] = element[prop];
            } else if (firstChar === "*") {
              newDesc[previousProp].$defaultValues = element[prop];
              var optionalMethods = newDesc.$methodsWithOptionalArguments;
              if (!optionalMethods) {
                newDesc.$methodsWithOptionalArguments = optionalMethods={}
              }
              optionalMethods[prop] = previousProp;
            } else {
              var elem = element[prop];
              if (prop && elem != null && elem.constructor === Array && prop !== "<>") {
                addStubs(newDesc, elem, prop, false, element, []);
              } else {
                newDesc[previousProp = prop] = elem;
              }
            }
          }
          $$[property] = [globalObject, newDesc];
          classes.push(property);
        }
      }
    }
  function addStubs(descriptor, array, name, isStatic, originalDescriptor, functions) {
    var f, funcs = [originalDescriptor[name] = descriptor[name] = f = (function() {
  var result = array[0];
  if (result != null && typeof result != "function") {
    throw new Error(
        name + ": expected value of type 'function' at index " + (0) +
        " but got " + (typeof result));
  }
  return result;
})()];
    f.$stubName = name;
    functions.push(name);
    for (var index = 0; index < array.length; index += 2) {
      f = array[index + 1];
      if (typeof f != "function") break;
      f.$stubName = (function() {
  var result = array[index + 2];
  if (result != null && typeof result != "string") {
    throw new Error(
        name + ": expected value of type 'string' at index " + (index + 2) +
        " but got " + (typeof result));
  }
  return result;
})();
      funcs.push(f);
      if (f.$stubName) {
        originalDescriptor[f.$stubName] = descriptor[f.$stubName] = f;
        functions.push(f.$stubName);
      }
    }
    for (var i = 0; i < funcs.length; index++, i++) {
      funcs[i].$callName = (function() {
  var result = array[index + 1];
  if (result != null && typeof result != "string") {
    throw new Error(
        name + ": expected value of type 'string' at index " + (index + 1) +
        " but got " + (typeof result));
  }
  return result;
})();
    }
    var getterStubName = (function() {
  var result = array[++index];
  if (result != null && typeof result != "string") {
    throw new Error(
        name + ": expected value of type 'string' at index " + (++index) +
        " but got " + (typeof result));
  }
  return result;
})();
    array = array.slice(++index);
    var requiredParameterInfo = (function() {
  var result = array[0];
  if (result != null && (typeof result != "number" || (result|0) !== result)) {
    throw new Error(
        name + ": expected value of type 'int' at index " + (0) +
        " but got " + (typeof result));
  }
  return result;
})();
    var requiredParameterCount = requiredParameterInfo >> 1;
    var isAccessor = (requiredParameterInfo & 1) === 1;
    var isSetter = requiredParameterInfo === 3;
    var isGetter = requiredParameterInfo === 1;
    var optionalParameterInfo = (function() {
  var result = array[1];
  if (result != null && (typeof result != "number" || (result|0) !== result)) {
    throw new Error(
        name + ": expected value of type 'int' at index " + (1) +
        " but got " + (typeof result));
  }
  return result;
})();
    var optionalParameterCount = optionalParameterInfo >> 1;
    var optionalParametersAreNamed = (optionalParameterInfo & 1) === 1;
    var isIntercepted = requiredParameterCount + optionalParameterCount != funcs[0].length;
    var functionTypeIndex = (function() {
  var result = array[2];
  if (result != null && (typeof result != "number" || (result|0) !== result) && typeof result != "function") {
    throw new Error(
        name + ": expected value of type 'function or int' at index " + (2) +
        " but got " + (typeof result));
  }
  return result;
})();
    var isReflectable = array.length > requiredParameterCount + optionalParameterCount + 3;
    if (getterStubName) {
      f = tearOff(funcs, array, isStatic, name, isIntercepted);
      if (isStatic) init.globalFunctions[name] = f;
      originalDescriptor[getterStubName] = descriptor[getterStubName] = f;
      funcs.push(f);
      if (getterStubName) functions.push(getterStubName);
      f.$stubName = getterStubName;
      f.$callName = null;
    }
    if (isReflectable) {
      for (var i = 0; i < funcs.length; i++) {
        funcs[i].$reflectable = 1;
        funcs[i].$reflectionInfo = array;
      }
    }
    if (isReflectable) {
      var unmangledNameIndex = optionalParameterCount * 2 + requiredParameterCount + 3;
      var unmangledName = (function() {
  var result = array[unmangledNameIndex];
  if (result != null && typeof result != "string") {
    throw new Error(
        name + ": expected value of type 'string' at index " + (unmangledNameIndex) +
        " but got " + (typeof result));
  }
  return result;
})();
      var reflectionName = unmangledName + ":" + requiredParameterCount + ":" + optionalParameterCount;
      if (isGetter) {
        reflectionName = unmangledName;
      } else if (isSetter) {
        reflectionName = unmangledName + "=";
      }
      if (isStatic) {
        init.mangledGlobalNames[name] = reflectionName;
      } else {
        init.mangledNames[name] = reflectionName;
      }
      funcs[0].$reflectionName = reflectionName;
      funcs[0].$metadataIndex = unmangledNameIndex + 1;
      if (optionalParameterCount) descriptor[unmangledName + "*"] = funcs[0];
    }
  }
  function tearOffGetterNoCsp(funcs, reflectionInfo, name, isIntercepted) {
    return isIntercepted
        ? new Function("funcs", "reflectionInfo", "name", "H", "c",
            "return function tearOff_" + name + (functionCounter++)+ "(x) {" +
              "if (c === null) c = H.qm(" +
                  "this, funcs, reflectionInfo, false, [x], name);" +
              "return new c(this, funcs[0], x, name);" +
            "}")(funcs, reflectionInfo, name, H, null)
        : new Function("funcs", "reflectionInfo", "name", "H", "c",
            "return function tearOff_" + name + (functionCounter++)+ "() {" +
              "if (c === null) c = H.qm(" +
                  "this, funcs, reflectionInfo, false, [], name);" +
              "return new c(this, funcs[0], null, name);" +
            "}")(funcs, reflectionInfo, name, H, null)
  }
  function tearOffGetterCsp(funcs, reflectionInfo, name, isIntercepted) {
    var cache = null;
    return isIntercepted
        ? function(x) {
            if (cache === null) cache = H.qm(this, funcs, reflectionInfo, false, [x], name);
            return new cache(this, funcs[0], x, name)
          }
        : function() {
            if (cache === null) cache = H.qm(this, funcs, reflectionInfo, false, [], name);
            return new cache(this, funcs[0], null, name)
          }
  }
  function tearOff(funcs, reflectionInfo, isStatic, name, isIntercepted) {
    var cache;
    return isStatic
        ? function() {
            if (cache === void 0) cache = H.qm(this, funcs, reflectionInfo, true, [], name).prototype;
            return cache;
          }
        : tearOffGetter(funcs, reflectionInfo, name, isIntercepted);
  }
  var functionCounter = 0;
  var tearOffGetter = (typeof dart_precompiled == "function")
      ? tearOffGetterCsp : tearOffGetterNoCsp;
  if (!init.libraries) init.libraries = [];
  if (!init.mangledNames) init.mangledNames = map();
  if (!init.mangledGlobalNames) init.mangledGlobalNames = map();
  if (!init.statics) init.statics = map();
  if (!init.typeInformation) init.typeInformation = map();
  if (!init.globalFunctions) init.globalFunctions = map();
  var libraries = init.libraries;
  var mangledNames = init.mangledNames;
  var mangledGlobalNames = init.mangledGlobalNames;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var length = reflectionData.length;
  for (var i = 0; i < length; i++) {
    var data = reflectionData[i];
    var name = data[0];
    var uri = data[1];
    var metadata = data[2];
    var globalObject = data[3];
    var descriptor = data[4];
    var isRoot = !!data[5];
    var fields = descriptor && descriptor[""];
    var classes = [];
    var functions = [];
    processStatics(descriptor);
    libraries.push([name, uri, classes, functions, metadata, fields, isRoot,
                    globalObject]);
  }
})
([["_foreign_helper","dart:_foreign_helper",,H,{
"":"",
FK:{
"":"a;tT"}}],["_interceptors","dart:_interceptors",,J,{
"":"",
x:function(a){return void 0},
vB:{
"":"a;",
n:function(a,b){return a===b},
giO:function(a){return H.eQ(a)},
bu:function(a){return H.a5(a)}},
yE:{
"":"bool/vB;",
bu:function(a){return String(a)},
giO:function(a){return a?519018:218159},
$isbool:true},
CD:{
"":"vB;",
n:function(a,b){return null==b},
bu:function(a){return"null"},
giO:function(a){return 0}},
Q:{
"":"List/vB;",
aN:function(a,b){return H.bQ(a,b)},
bu:function(a){return H.mx(a,"[","]")},
giO:function(a){return H.eQ(a)},
gB:function(a){return a.length},
t:function(a,b){if(b>=a.length||b<0)throw H.b(P.N(b))
return a[b]},
$isList:true,
static:{Qi:function(a,b){var z
if(J.u6(a,0))throw H.b(P.u("Length must be a non-negative integer: "+H.d(a)))
z=H.VM(new Array(a),[b])
z.fixed$length=init
return z}}},
P:{
"":"num/vB;",
bu:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
giO:function(a){return a&0x1FFFFFFF},
g:function(a,b){return a+b},
GG:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
C:function(a,b){return a<b},
$isnum:true,
static:{"":"SA,N6"}},
im:{
"":"int/P;",
$isnum:true,
$isint:true},
VA:{
"":"double/P;",
$isnum:true},
O:{
"":"String/vB;",
j:function(a,b){if(b>=a.length)throw H.b(P.N(b))
return a.charCodeAt(b)},
g:function(a,b){throw H.b(P.u(b))},
Nj:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.vh(P.u(c))
if(b<0)throw H.b(P.N(b))
if(typeof c!=="number")return H.s(c)
if(b>c)throw H.b(P.N(b))
if(c>a.length)throw H.b(P.N(c))
return a.substring(b,c)},
yn:function(a,b){return this.Nj(a,b,null)},
bu:function(a){return a},
giO:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10>>>0)
y^=y>>6}y=536870911&y+((67108863&y)<<3>>>0)
y^=y>>11
return 536870911&y+((16383&y)<<15>>>0)},
gB:function(a){return a.length},
t:function(a,b){if(b>=a.length||!1)throw H.b(P.N(b))
return a[b]},
$isString:true}}],["_js_helper","dart:_js_helper",,H,{
"":"",
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.AG(a)
if(typeof z!=="string")throw H.b(P.u(a))
return z},
eQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
lh:function(a){var z,y
z=C.AS(J.x(a))
if(z==="Object"){y=String(a.constructor).match(/^\s*function\s*(\S*)\s*\(/)[1]
if(typeof y==="string")z=y}if(J.rY(z).j(z,0)===36)z=C.xB.yn(z,1)
return z+H.ia(H.oX(a),0,null)},
a5:function(a){return"Instance of '"+H.lh(a)+"'"},
RF:function(a){var z,y,x,w,v,u
z=a.length
for(y=z<=500,x="",w=0;w<z;w+=500){if(y)v=a
else{u=w+500
u=u<z?u:z
v=a.slice(w,u)}x+=String.fromCharCode.apply(null,v)}return x},
Cq:function(a){var z,y,x
z=[]
z.$builtinTypeInfo=[J.im]
for(y=new H.a7(a,a.length,0,null);y.G();){x=y.mD
if(typeof x!=="number"||Math.floor(x)!==x)throw H.b(P.u(x))
if(x<=65535)z.push(x)
else if(x<=1114111){z.push(55296+(C.jn.GG(x-65536,10)&1023))
z.push(56320+(x&1023))}else throw H.b(P.u(x))}return H.RF(z)},
eT:function(a){var z,y
for(z=new H.a7(a,a.length,0,null);z.G();){y=z.mD
if(typeof y!=="number"||Math.floor(y)!==y)throw H.b(P.u(y))
if(y<0)throw H.b(P.u(y))
if(y>65535)return H.Cq(a)}return H.RF(a)},
VK:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(P.u(a))
return a[b]},
aw:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(P.u(a))
a[b]=c},
s:function(a){throw H.b(P.u(a))},
e:function(a,b){if(a==null)J.Lu(a)
if(typeof b!=="number"||Math.floor(b)!==b)H.s(b)
throw H.b(P.N(b))},
b:function(a){var z
if(a==null)a=new P.LK()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z, "message", { get: H.Ju })
z.name=""}else z.toString=H.Ju
return z},
Ju:function(){return J.AG(this.dartException)},
vh:function(a){var z
if(a==null)a=new P.LK()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z, "message", { get: H.Ju })
z.name=""}else z.toString=H.Ju
throw z},
CU:function(a){if(a==null||typeof a!='object')return J.v1(a)
else return H.eQ(a)},
iA:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
z.$stubName
y=z.$callName
z.$reflectionInfo=c
x=H.zh(z).AM
w=d?Object.create(new H.Bp().constructor.prototype):Object.create(new H.v(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else if(typeof dart_precompiled=="function"){u=function(a,b,c,d) {this.$initialize(a,b,c,d)}
v=u}else{u=$.yj
$.yj=J.WB(u,1)
u=new Function("a","b","c","d","this.$initialize(a,b,c,d);"+u)
v=u}w.constructor=v
v.prototype=w
u=!d
if(u){t=e.length==1&&!0
s=H.bx(z,t)}else{w.$name=f
s=z
t=!1}if(typeof x=="number")r=(function(s){return function(){return init.metadata[s]}})(x)
else if(u&&typeof x=="function"){q=t?H.yS:H.DV
r=function(f,r){return function(){return f.apply({$receiver:r(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$signature=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.bx(o,t)
w[n]=m}}w["call*"]=z
return v},
vq:function(a,b){var z=H.DV
switch(a){case 0:return function(F,S){return function(){return F.call(S(this))}}(b,z)
case 1:return function(F,S){return function(a){return F.call(S(this),a)}}(b,z)
case 2:return function(F,S){return function(a,b){return F.call(S(this),a,b)}}(b,z)
case 3:return function(F,S){return function(a,b,c){return F.call(S(this),a,b,c)}}(b,z)
case 4:return function(F,S){return function(a,b,c,d){return F.call(S(this),a,b,c,d)}}(b,z)
case 5:return function(F,S){return function(a,b,c,d,e){return F.call(S(this),a,b,c,d,e)}}(b,z)
default:return function(f,s){return function(){return f.apply(s(this),arguments)}}(b,z)}},
bx:function(a,b){var z,y,x,w
if(b)return H.Hf(a)
z=a.length
if(typeof dart_precompiled=="function")return H.vq(z,a)
else if(z===0){y=$.mJ
if(y==null){y=H.E2("self")
$.mJ=y}y="return function(){return F.call(this."+H.d(y)+");"
x=$.yj
$.yj=J.WB(x,1)
return new Function("F",y+H.d(x)+"}")(a)}else if(1<=z&&z<27){w="abcdefghijklmnopqrstuvwxyz".split("").splice(0,z).join(",")
y="return function("+w+"){return F.call(this."
x=$.mJ
if(x==null){x=H.E2("self")
$.mJ=x}x=y+H.d(x)+","+w+");"
y=$.yj
$.yj=J.WB(y,1)
return new Function("F",x+H.d(y)+"}")(a)}else return H.vq(z,a)},
Z4:function(a,b,c){var z,y
z=H.DV
y=H.yS
switch(a){case 0:throw H.b(H.Ef("Intercepted function with no arguments."))
case 1:return function(n,s,r){return function(){return s(this)[n](r(this))}}(b,z,y)
case 2:return function(n,s,r){return function(a){return s(this)[n](r(this),a)}}(b,z,y)
case 3:return function(n,s,r){return function(a,b){return s(this)[n](r(this),a,b)}}(b,z,y)
case 4:return function(n,s,r){return function(a,b,c){return s(this)[n](r(this),a,b,c)}}(b,z,y)
case 5:return function(n,s,r){return function(a,b,c,d){return s(this)[n](r(this),a,b,c,d)}}(b,z,y)
case 6:return function(n,s,r){return function(a,b,c,d,e){return s(this)[n](r(this),a,b,c,d,e)}}(b,z,y)
default:return function(f,s,r,a){return function(){a=[r(this)];Array.prototype.push.apply(a,arguments);return f.apply(s(this),a)}}(c,z,y)}},
Hf:function(a){var z,y,x,w,v
z=a.$stubName
y=a.length
if(typeof dart_precompiled=="function")return H.Z4(y,z,a)
else if(y===1){x="return this."+H.d(H.oN())+"."+z+"(this."+H.d(H.Wz())+");"
w=$.yj
$.yj=J.WB(w,1)
return new Function(x+H.d(w))}else if(1<y&&y<28){v="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y-1).join(",")
x="return function("+v+"){return this."+H.d(H.oN())+"."+z+"(this."+H.d(H.Wz())+","+v+");"
w=$.yj
$.yj=J.WB(w,1)
return new Function(x+H.d(w)+"}")()}else return H.Z4(y,z,a)},
qm:function(a,b,c,d,e,f){b.fixed$length=init
c.fixed$length=init
return H.iA(a,b,c,!!d,e,f)},
O9:function(a,b,c,d){throw H.b(P.lr(a,new H.GD(b),c,P.L5(null,null,null,P.wv,null),d))},
ag:function(a){throw H.b(P.Gz("Cyclic initialization for static "+H.d(a)))},
VM:function(a,b){if(a!=null)a.$builtinTypeInfo=b
return a},
oX:function(a){if(a==null)return
return a.$builtinTypeInfo},
Ko:function(a,b){if(a==null)return"dynamic"
else if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ia(a,1,b)
else if(typeof a=="function")return a.builtin$cls
else if(typeof a==="number"&&Math.floor(a)===a)return C.jn.bu(a)
else return},
ia:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=P.p9("")
for(y=b,x=!0,w=!0;y<a.length;++y){if(x)x=!1
else z.vM=z.vM+", "
v=a[y]
if(v!=null)w=!1
u=H.Ko(v,c)
u=typeof u==="string"?u:H.d(u)
z.vM=z.vM+u}return w?"":"<"+H.d(z)+">"},
FD:{
"":"a;mr,Rn,XZ,Rv,hG,Mo,AM",
static:{"":"t4,FV,Oc,pv",zh:function(a){var z,y,x,w
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=init
z=z
y=z[0]
x=y>>1
w=z[1]
return new H.FD(a,z,(y&1)===1,x,w>>1,(w&1)===1,z[2])}}},
Tp:{
"":"a;",
bu:function(a){return"Closure"}},
Bp:{
"":"Tp;"},
v:{
"":"Bp;nw<,jm,cR<,Vb",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.x(b)
if(typeof b!=="object"||b===null||!z.$isv)return!1
return this.nw===b.nw&&this.jm===b.jm&&this.cR===b.cR},
giO:function(a){var z,y
z=this.cR
if(z==null)y=H.eQ(this.nw)
else y=typeof z!=="object"?J.v1(z):H.eQ(z)
return(y^H.eQ(this.jm))>>>0},
$isv:true,
static:{"":"mJ,P4",DV:function(a){return a.gnw()},yS:function(a){return a.gcR()},oN:function(){var z=$.mJ
if(z==null){z=H.E2("self")
$.mJ=z}return z},Wz:function(){var z=$.P4
if(z==null){z=H.E2("receiver")
$.P4=z}return z},E2:function(a){var z,y,x,w,v
z=new H.v("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=init
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
Eq:{
"":"Ge;G1",
bu:function(a){return"RuntimeError: "+H.d(this.G1)},
static:{Ef:function(a){return new H.Eq(a)}}}}],["dart._collection.dev","dart:_collection-dev",,H,{
"":"",
bQ:function(a,b){var z
for(z=new H.a7(a,a.length,0,null);z.G();)b.call$1(z.mD)},
mx:function(a,b,c){var z,y,x
for(y=0;x=$.RM(),y<x.length;++y)if(x[y]===a)return H.d(b)+"..."+H.d(c)
z=P.p9("")
try{$.RM().push(a)
z.KF(b)
z.We(a,", ")
z.KF(c)}finally{x=$.RM()
if(0>=x.length)return H.e(x,0)
x.pop()}return z.gvM()},
a7:{
"":"a;Kw,qn,j2,mD",
G:function(){var z,y,x
z=this.Kw
y=z.length
if(this.qn!==y)throw H.b(P.a4(z))
x=this.j2
if(x>=y){this.mD=null
return!1}this.mD=z[x]
this.j2=x+1
return!0}},
GD:{
"":"a;hr<",
n:function(a,b){var z
if(b==null)return!1
z=J.x(b)
return typeof b==="object"&&b!==null&&!!z.$isGD&&J.xC(this.hr,b.hr)},
giO:function(a){return 536870911&664597*J.v1(this.hr)},
bu:function(a){return"Symbol(\""+H.d(this.hr)+"\")"},
$isGD:true,
static:{"":"yQ"}}}],["dart.collection","dart:collection",,P,{
"":"",
Ou:[function(a,b){return J.xC(a,b)},"call$2","iv",4,0,0],
T9:[function(a){return J.v1(a)},"call$1","py",2,0,1],
L5:function(a,b,c,d,e){return H.VM(new P.YB(0,null,null,null,null,null,0),[d,e])},
vW:function(a){var z,y,x,w
z={}
for(x=0;w=$.tw(),x<w.length;++x)if(w[x]===a)return"{...}"
y=P.p9("")
try{$.tw().push(a)
y.KF("{")
z.a=!0
J.Uq(a,new P.W0(z,y))
y.KF("}")}finally{z=$.tw()
if(0>=z.length)return H.e(z,0)
z.pop()}return y.gvM()},
YB:{
"":"a;X5,vv,OX,OB,H9,lX,zN",
gB:function(a){return this.X5},
t:function(a,b){var z,y,x,w,v
if((b&0x3ffffff)===b){z=this.OX
if(z==null)return
y=z[b]
return y==null?null:y.gcA()}else{x=this.OB
if(x==null)return
w=x[this.nm(b)]
v=this.aH(w,b)
if(v<0)return
return w[v].gcA()}},
aN:function(a,b){var z,y
z=this.H9
y=this.zN
for(;z!=null;){b.call$2(z.kh,z.cA)
if(y!==this.zN)throw H.b(P.a4(this))
z=z.DG}},
nm:function(a){return J.v1(a)&0x3ffffff},
aH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.xC(a[y].gkh(),b))return y
return-1},
bu:function(a){return P.vW(this)}},
W0:{
"":"Tp;a,b",
call$2:function(a,b){var z=this.a
if(!z.a)this.b.KF(", ")
z.a=!1
z=this.b
z.KF(a)
z.KF(": ")
z.KF(b)}}}],["dart.core","dart:core",,P,{
"":"",
hl:function(a){var z,y,x,w,v,u
if(typeof a==="number"||typeof a==="boolean"||null==a)return J.AG(a)
if(typeof a==="string"){z=new P.Rn("")
z.vM="\""
for(y=a.length,x=0,w="\"";x<y;++x){if(x>=y)H.vh(P.N(x))
v=a.charCodeAt(x)
if(v<=31)if(v===10){w=z.vM+"\\n"
z.vM=w}else if(v===13){w=z.vM+"\\r"
z.vM=w}else if(v===9){w=z.vM+"\\t"
z.vM=w}else{w=z.vM+"\\x"
z.vM=w
if(v<16)z.vM=w+"0"
else{z.vM=w+"1"
v-=16}w=v<10?48+v:87+v
u=P.O8(1,w,J.im)
w=H.eT(u)
w=z.vM+w
z.vM=w}else if(v===92){w=z.vM+"\\\\"
z.vM=w}else if(v===34){w=z.vM+"\\\""
z.vM=w}else{u=P.O8(1,v,J.im)
w=H.eT(u)
w=z.vM+w
z.vM=w}}y=w+"\""
z.vM=y
return y}return"Instance of '"+H.lh(a)+"'"},
ad:[function(a,b){return a==null?b==null:a===b},"call$2","N3",4,0,2],
xv:[function(a){return H.CU(a)},"call$1","J2",2,0,3],
O8:function(a,b,c){var z,y,x
z=J.Qi(a,c)
if(a!==0&&!0)for(y=z.length,x=0;x<y;++x)z[x]=b
return z},
CL:{
"":"Tp;a",
call$2:function(a,b){var z=this.a
if(z.b>0)z.a.KF(", ")
z.a.KF(a.ghr())
z.a.KF(": ")
z.a.KF(P.hl(b))
z.b=z.b+1}},
Ge:{
"":"a;"},
LK:{
"":"Ge;",
bu:function(a){return"Throw of null."}},
AT:{
"":"Ge;G1",
bu:function(a){var z=this.G1
if(z!=null)return"Illegal argument(s): "+H.d(z)
return"Illegal argument(s)"},
static:{u:function(a){return new P.AT(a)}}},
bJ:{
"":"AT;G1",
bu:function(a){return"RangeError: "+H.d(this.G1)},
static:{N:function(a){return new P.bJ("value "+H.d(a))}}},
JS:{
"":"Ge;uF,UP,mP,SA,vG",
bu:function(a){var z,y,x,w,v,u,t,s,r
z={}
z.a=P.p9("")
z.b=0
y=this.mP
if(y!=null)for(x=J.dD(y),w=0;w<x.gB(y);v=z.b+1,z.b=v,w=v){w=z.b
if(w>0){u=z.a
u.vM=u.vM+", "}u=z.a
t=P.hl(x.t(y,w))
t=typeof t==="string"?t:H.d(t)
u.vM=u.vM+t}y=this.SA
y.aN(y,new P.CL(z))
y=this.vG
if(y==null)return"NoSuchMethodError : method not found: '"+H.d(this.UP)+"'\nReceiver: "+H.d(P.hl(this.uF))+"\nArguments: ["+H.d(z.a)+"]"
else{s=z.a.vM
z.a=P.p9("")
for(x=J.dD(y),v=0;v<x.gB(y);++v){if(v>0){w=z.a
w.vM=w.vM+", "}w=z.a
t=x.t(y,v)
t=typeof t==="string"?t:H.d(t)
w.vM=w.vM+t}r=z.a.vM
z=this.UP
return"NoSuchMethodError: incorrect number of arguments passed to method named '"+H.d(z)+"'\nReceiver: "+H.d(P.hl(this.uF))+"\nTried calling: "+H.d(z)+"("+s+")\nFound: "+H.d(z)+"("+r+")"}},
static:{lr:function(a,b,c,d,e){return new P.JS(a,b,c,d,e)}}},
UV:{
"":"Ge;YA",
bu:function(a){return"Concurrent modification during iteration: "+H.d(P.hl(this.YA))+"."},
static:{a4:function(a){return new P.UV(a)}}},
t7:{
"":"Ge;Wo",
bu:function(a){return"Reading static variable '"+this.Wo+"' during its initialization"},
static:{Gz:function(a){return new P.t7(a)}}},
kM:{
"":"a;oc",
bu:function(a){return"Expando:"+this.oc},
t:function(a,b){var z=H.VK(b,"expando$values")
return z==null?null:H.VK(z,this.J4())},
J4:function(){var z,y
z=H.VK(this,"expando$key")
if(z==null){y=$.Ss
$.Ss=y+1
z="expando$key$"+y
H.aw(this,"expando$key",z)}return z},
static:{"":"bZ,rl,Ss"}},
c8:{
"":"a;",
bu:function(a){return"null"}},
a:{
"":";",
n:function(a,b){return this===b},
giO:function(a){return H.eQ(this)},
bu:function(a){return H.a5(this)}},
Rn:{
"":"a;vM<",
gB:function(a){return this.vM.length},
KF:function(a){var z=typeof a==="string"?a:H.d(a)
this.vM=this.vM+z},
We:function(a,b){var z,y
z=new H.a7(a,a.length,0,null)
if(!z.G())return
if(b.length===0)do{y=z.mD
y=typeof y==="string"?y:H.d(y)
this.vM=this.vM+y}while(z.G())
else{this.KF(z.mD)
for(;z.G();){this.vM=this.vM+b
y=z.mD
y=typeof y==="string"?y:H.d(y)
this.vM=this.vM+y}}},
bu:function(a){return this.vM},
PD:function(a){this.vM=a},
static:{p9:function(a){var z=new P.Rn("")
z.PD(a)
return z}}},
wv:{
"":"a;"}}],["mdv","package:mdv/mdv.dart",,V,{
"":"",
pb:[function(a){var z,y,x
z=$.ax()
y=z.t(z,a)
if(y!=null)return y
x=H.VK(a,"expando$values")
if(x==null){x=new P.a()
H.aw(a,"expando$values",x)}H.aw(x,z.J4(),a)
return a},"call$1","el",2,0,4]}],["web_stopwatch_index_html_1","file:///Volumes/Daten/DevLocal/DevDart/Test/PolymerHelloWorld/web/stopwatch/index.html.1.dart",,Q,{
"":"",
Iq:function(){H.O9("","set mdvPackage",[V.el()],null)}},1],])
I.$finishClasses($$,$,null)
$$=null
J.Qc=function(a){if(typeof a=="number")return J.P.prototype
if(typeof a=="string")return J.O.prototype
if(a==null)return a
return a}
J.Wx=function(a){if(typeof a=="number")return J.P.prototype
if(a==null)return a
return a}
J.dD=function(a){if(typeof a=="string")return J.O.prototype
if(a==null)return a
if(a.constructor==Array)return J.Q.prototype
return a}
J.lG=function(a){if(a==null)return a
if(a.constructor==Array)return J.Q.prototype
return a}
J.rY=function(a){if(typeof a=="string")return J.O.prototype
if(a==null)return a
return a}
J.x=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.im.prototype
return J.VA.prototype}if(typeof a=="string")return J.O.prototype
if(a==null)return J.CD.prototype
if(typeof a=="boolean")return J.yE.prototype
if(a.constructor==Array)return J.Q.prototype
return a}
J.AG=function(a){return J.x(a).bu(a)}
J.Lu=function(a){return J.dD(a).gB(a)}
J.Uq=function(a,b){return J.lG(a).aN(a,b)}
J.WB=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Qc(a).g(a,b)}
J.u6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.Wx(a).C(a,b)}
J.v1=function(a){return J.x(a).giO(a)}
J.xC=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).n(a,b)}
C.jn=J.im.prototype
C.xB=J.O.prototype
C.AS=function getTagFallback(o) {
  var constructor = o.constructor;
  if (typeof constructor == "function") {
    var name = constructor.name;
    if (typeof name == "string"
        && name !== ""
        && name !== "Object"
        && name !== "Function.prototype") {
      return name;
    }
  }
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$.yj=0
$.mJ=null
$.P4=null
$.Ss=0
I.$lazy($,"_toStringList","Ml","RM",function(){return[]})
I.$lazy($,"_toStringList","yu","tw",function(){return[]})
I.$lazy($,"_mdvExpando","xp","ax",function(){return new P.kM("mdv")})

init.functionAliases={}
init.metadata=[{func:"Gl",ret:J.yE,args:[null,null]},{func:"bX",ret:J.im,args:[null]},{func:"E0",ret:J.yE,args:[P.a,P.a]},{func:"ZY",ret:J.im,args:[P.a]},{func:"aB",args:[null]},];$=null
I = I.$finishIsolateConstructor(I)
$=new I()
function convertToFastObject(properties) {
  function MyClass() {};
  MyClass.prototype = properties;
  new MyClass();
  return properties;
}
A = convertToFastObject(A)
B = convertToFastObject(B)
C = convertToFastObject(C)
D = convertToFastObject(D)
E = convertToFastObject(E)
F = convertToFastObject(F)
G = convertToFastObject(G)
H = convertToFastObject(H)
J = convertToFastObject(J)
K = convertToFastObject(K)
L = convertToFastObject(L)
M = convertToFastObject(M)
N = convertToFastObject(N)
O = convertToFastObject(O)
P = convertToFastObject(P)
Q = convertToFastObject(Q)
R = convertToFastObject(R)
S = convertToFastObject(S)
T = convertToFastObject(T)
U = convertToFastObject(U)
V = convertToFastObject(V)
W = convertToFastObject(W)
X = convertToFastObject(X)
Y = convertToFastObject(Y)
Z = convertToFastObject(Z)
;(function (callback) {
  if (typeof document === "undefined") {
    callback(null);
    return;
  }
  if (document.currentScript) {
    callback(document.currentScript);
    return;
  }

  var scripts = document.scripts;
  function onLoad(event) {
    for (var i = 0; i < scripts.length; ++i) {
      scripts[i].removeEventListener("load", onLoad, false);
    }
    callback(event.target);
  }
  for (var i = 0; i < scripts.length; ++i) {
    scripts[i].addEventListener("load", onLoad, false);
  }
})(function(currentScript) {
  init.currentScript = currentScript;

  if (typeof dartMainRunner === "function") {
    dartMainRunner(function() { Q.Iq(); });
  } else {
    Q.Iq();
  }
})
function init(){I.p={}
function generateAccessor(a,b,c){var y=a.split("-")
var x=y[0]
var w=x.length
var v=x.charCodeAt(w-1)
var u
if(y.length>1)u=true
else u=false
v=v>=60&&v<=64?v-59:v>=123&&v<=126?v-117:v>=37&&v<=43?v-27:0
if(v){var t=v&3
var s=v>>2
var r=x=x.substring(0,w-1)
var q=x.indexOf(":")
if(q>0){r=x.substring(0,q)
x=x.substring(q+1)}if(t){var p=t&2?"r":""
var o=t&1?"this":"r"
var n="return "+o+"."+x
var m=c+".prototype.g"+r+"="
var l="function("+p+"){"+n+"}"
if(u)b.push(m+"$reflectable("+l+");\n")
else b.push(m+l+";\n")}if(s){var p=s&2?"r,v":"v"
var o=s&1?"this":"r"
var n=o+"."+x+"=v"
var m=c+".prototype.s"+r+"="
var l="function("+p+"){"+n+"}"
if(u)b.push(m+"$reflectable("+l+");\n")
else b.push(m+l+";\n")}}return x}I.p.$generateAccessor=generateAccessor
function defineClass(a,b,c){var y=[]
var x="function "+b+"("
var w=""
for(var v=0;v<c.length;v++){if(v!=0)x+=", "
var u=generateAccessor(c[v],y,b)
var t="parameter_"+u
x+=t
w+="this."+u+" = "+t+";\n"}x+=") {\n"+w+"}\n"
x+=b+".builtin$cls=\""+a+"\";\n"
x+="$desc=$collectedClasses."+b+";\n"
x+="if($desc instanceof Array) $desc = $desc[1];\n"
x+=b+".prototype = $desc;\n"
if(typeof defineClass.name!="string"){x+=b+".name=\""+b+"\";\n"}x+=y.join("")
return x}var z=function(){function tmp(){}var y=Object.prototype.hasOwnProperty
return function(a,b){tmp.prototype=b.prototype
var x=new tmp()
var w=a.prototype
for(var v in w)if(y.call(w,v))x[v]=w[v]
x.constructor=a
a.prototype=x
return x}}()
I.$finishClasses=function(a,b,c){var y={}
if(!init.allClasses)init.allClasses={}
var x=init.allClasses
var w=Object.prototype.hasOwnProperty
if(typeof dart_precompiled=="function"){var v=dart_precompiled(a)}else{var u="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
var t=[]}for(var s in a){if(w.call(a,s)){var r=a[s]
if(r instanceof Array)r=r[1]
var q=r[""],p,o=s,n=q
if(typeof q=="string"){var m=q.split("/")
if(m.length==2){o=m[0]
n=m[1]}}var l=n.split(";")
n=l[1]==""?[]:l[1].split(",")
p=l[0]
m=p.split(":")
if(m.length==2){p=m[0]
var k=m[1]
if(k)r.$signature=function(d){return function(){return init.metadata[d]}}(k)}if(typeof dart_precompiled!="function"){u+=defineClass(o,s,n)
t.push(s)}if(p)y[s]=p}}if(typeof dart_precompiled!="function"){u+="return [\n  "+t.join(",\n  ")+"\n]"
var v=new Function("$collectedClasses",u)(a)
u=null}for(var j=0;j<v.length;j++){var i=v[j]
var s=i.name
var r=a[s]
var h=b
if(r instanceof Array){h=r[0]||b
r=r[1]}x[s]=i
h[s]=i}v=null
var g={}
init.interceptorsByTag=Object.create(null)
init.leafTags={}
function finishClass(a2){var f=Object.prototype.hasOwnProperty
if(f.call(g,a2))return
g[a2]=true
var e=y[a2]
if(!e||typeof e!="string")return
finishClass(e)
var d=x[a2]
var a0=x[e]
if(!a0)a0=c[e]
var a1=z(d,a0)}for(var s in y)finishClass(s)}
I.$lazy=function(a,b,c,d,e){var y={}
var x={}
a[c]=y
a[d]=function(){var w=$[c]
try{if(w===y){$[c]=x
try{w=$[c]=e()}finally{if(w===y){if($[c]===x){$[c]=null}}}}else{if(w===x)H.ag(b)}return w}finally{$[d]=function(){return this[c]}}}}
I.$finishIsolateConstructor=function(a){var y=a.p
function Isolate(){var x=Object.prototype.hasOwnProperty
for(var w in y)if(x.call(y,w))this[w]=y[w]
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=y
Isolate.$finishClasses=a.$finishClasses
return Isolate}}
})()