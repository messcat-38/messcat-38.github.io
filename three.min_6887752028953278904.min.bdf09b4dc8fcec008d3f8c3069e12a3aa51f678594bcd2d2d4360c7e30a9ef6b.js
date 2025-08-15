console.warn('Scripts "build/three.js" and "build/three.min.js" are deprecated with r150+, and will be removed with r160. Please use ES Modules or alternatives: https://threejs.org/docs/index.html#manual/en/introduction/Installation'),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).THREE={})}(this,function(e){"use strict";const Es="160",Fa=1,La=2,de=3,pe=0,R=1,Te=100,lo=204,no=205,cn=0,Ra=1,Ha=2,ge=0,Ia=1,Va=2,$a=3,Ua=4,Za=5,Ja=6,Xi="attached",er="detached",Wn=300,we=301,Fe=302,Zt=303,Tn=304,_t=306,An=1e3,U=1001,kn=1002,C=1003,ls=1004,bn=1005,_=1006,vi=1007,Xe=1008,Ie=1009,$n=1012,pi=1013,ue=1014,Z=1015,Dt=1016,ii=1017,Zo=1018,ke=1020,X=1023,De=1026,rt=1027,Qo=1029,qo=1031,Ko=1033,qs=33776,Ys=33777,so=33778,ro=33779,Oo=35840,wo=35841,go=35842,po=35843,xo=36196,Co=37492,Eo=37496,To=37808,zo=37809,Do=37810,Lo=37811,Bo=37812,Uo=37813,Xo=37814,Jo=37815,ni=37816,ri=37817,di=37818,ui=37819,hi=37820,bi=37821,Cs=36492,Ai=36494,Mi=36495,Fi=36284,Ti=36285,zi=36286,yn=2300,_n=2301,ms=2302,nt=2400,tt=2401,wn=2402,or=2500,mo=2501,Pi=3e3,Pe=3001,se="",A="srgb",ce="srgb-linear",Jn="display-p3",Sn="display-p3-linear",Mn="linear",g="srgb",Fn="rec709",Dn="p3",Ye=7680,Nn=35044,Ui="300 es",Un=1035,He=2e3,Ot=2001;class ve{addEventListener(e,t){void 0===this._listeners&&(this._listeners={});const n=this._listeners;void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;const n=this._listeners;return void 0!==n[e]&&-1!==n[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;const n=this._listeners[e];if(void 0!==n){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;const t=this._listeners[e.type];if(void 0!==t){e.target=this;const n=t.slice(0);for(let t=0,s=n.length;t<s;t++)n[t].call(this,e);e.target=null}}}const D=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lr=1234567;const st=Math.PI/180,pt=180/Math.PI;function q(){const e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,s=4294967295*Math.random()|0;return(D[255&e]+D[e>>8&255]+D[e>>16&255]+D[e>>24&255]+"-"+D[255&t]+D[t>>8&255]+"-"+D[t>>16&15|64]+D[t>>24&255]+"-"+D[63&n|128]+D[n>>8&255]+"-"+D[n>>16&255]+D[n>>24&255]+D[255&s]+D[s>>8&255]+D[s>>16&255]+D[s>>24&255]).toLowerCase()}function b(e,t,n){return Math.max(t,Math.min(n,e))}function Qi(e,t){return(e%t+t)%t}function Hn(e,t,n){return(1-n)*e+n*t}function Zi(e){return 0==(e&e-1)&&0!==e}function qn(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function V(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function c(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(4294967295*e);case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int32Array:return Math.round(2147483647*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw new Error("Invalid component type.")}}const Ru={DEG2RAD:st,RAD2DEG:pt,generateUUID:q,clamp:b,euclideanModulo:Qi,mapLinear:function(e,t,n,s,o){return s+(e-t)*(o-s)/(n-t)},inverseLerp:function(e,t,n){return e!==t?(n-e)/(t-e):0},lerp:Hn,damp:function(e,t,n,s){return Hn(e,t,1-Math.exp(-n*s))},pingpong:function(e,t=1){return t-Math.abs(Qi(e,2*t)-t)},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t))*e*(3-2*e)},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t))*e*e*(e*(6*e-15)+10)},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){void 0!==e&&(lr=e);let t=lr+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296},degToRad:function(e){return e*st},radToDeg:function(e){return e*pt},isPowerOfTwo:Zi,ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:qn,setQuaternionFromProperEuler:function(e,t,n,s,o){const l=Math.cos,d=Math.sin,i=l(n/2),a=d(n/2),r=l((t+s)/2),c=d((t+s)/2),u=l((t-s)/2),h=d((t-s)/2),m=l((s-t)/2),f=d((s-t)/2);switch(o){case"XYX":e.set(i*c,a*u,a*h,i*r);break;case"YZY":e.set(a*h,i*c,a*u,i*r);break;case"ZXZ":e.set(a*u,a*h,i*c,i*r);break;case"XZX":e.set(i*c,a*f,a*m,i*r);break;case"YXY":e.set(a*m,i*c,a*f,i*r);break;case"ZYZ":e.set(a*f,a*m,i*c,i*r);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}},normalize:c,denormalize:V};class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6],this.y=t[1]*n+t[4]*s+t[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(0===t)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(b(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,i=this.y-e.y;return this.x=o*n-i*s+e.x,this.y=o*s+i*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class d{constructor(e,t,n,s,o,i,a,r,c){d.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],void 0!==e&&this.set(e,t,n,s,o,i,a,r,c)}set(e,t,n,s,o,i,a,r,c){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=o,l[5]=r,l[6]=n,l[7]=i,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[3],r=n[6],c=n[1],l=n[4],d=n[7],u=n[2],h=n[5],m=n[8],f=s[0],p=s[3],g=s[6],v=s[1],b=s[4],j=s[7],y=s[2],_=s[5],w=s[8];return o[0]=i*f+a*v+r*y,o[3]=i*p+a*b+r*_,o[6]=i*g+a*j+r*w,o[1]=c*f+l*v+d*y,o[4]=c*p+l*b+d*_,o[7]=c*g+l*j+d*w,o[2]=u*f+h*v+m*y,o[5]=u*p+h*b+m*_,o[8]=u*g+h*j+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],i=e[4],a=e[5],r=e[6],c=e[7],l=e[8];return t*i*l-t*a*c-n*o*l+n*a*r+s*o*c-s*i*r}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],d=e[3],a=e[4],i=e[5],r=e[6],c=e[7],l=e[8],u=l*a-i*c,h=i*r-l*d,m=c*d-a*r,f=n*u+s*h+o*m;if(0===f)return this.set(0,0,0,0,0,0,0,0,0);const t=1/f;return e[0]=u*t,e[1]=(o*c-l*s)*t,e[2]=(i*s-o*a)*t,e[3]=h*t,e[4]=(l*n-o*r)*t,e[5]=(o*d-i*n)*t,e[6]=m*t,e[7]=(s*r-c*n)*t,e[8]=(a*n-s*d)*t,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,i,a){const r=Math.cos(o),c=Math.sin(o);return this.set(n*r,n*c,-n*(r*i+c*a)+i+e,-s*c,s*r,-s*(-c*i+r*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ji.makeScale(e,t)),this}rotate(e){return this.premultiply(Ji.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ji.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return(new this.constructor).fromArray(this.elements)}}const Ji=new d;function fr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}const Fu={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function jt(e,t){return new Fu[e](t)}function En(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function jr(){const e=En("canvas");return e.style.display="block",e}const Cr={};function On(e){e in Cr||(Cr[e]=!0,console.warn(e))}const Dr=(new d).set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hr=(new d).set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[ce]:{transfer:Mn,primaries:Fn,toReference:e=>e,fromReference:e=>e},[A]:{transfer:g,primaries:Fn,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Sn]:{transfer:Mn,primaries:Dn,toReference:e=>e.applyMatrix3(Hr),fromReference:e=>e.applyMatrix3(Dr)},[Jn]:{transfer:g,primaries:Dn,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Hr),fromReference:e=>e.applyMatrix3(Dr).convertLinearToSRGB()}},bu=new Set([ce,Sn]),m={enabled:!0,_workingColorSpace:ce,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!bu.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(!1===this.enabled||t===n||!t||!n)return e;const s=us[t].toReference;return(0,us[n].fromReference)(s(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return us[e].primaries},getTransfer:function(e){return e===se?Mn:us[e].transfer}};function St(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function da(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}let Ft;class ua{static getDataURL(e){if(/^data:/i.test(e.src))return e.src;if("undefined"==typeof HTMLCanvasElement)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{void 0===Ft&&(Ft=En("canvas")),Ft.width=e.width,Ft.height=e.height;const n=Ft.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ft}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){const t=En("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),s=o.data;for(let e=0;e<s.length;e++)s[e]=255*St(s[e]/255);return n.putImageData(o,0,0),t}if(e.data){const t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*St(t[e]/255)):t[e]=St(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pu=0;class Ge{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=q(),this.data=e,this.version=0}set needsUpdate(e){!0===e&&this.version++}toJSON(e){const s=void 0===e||"string"==typeof e;if(!s&&void 0!==e.images[this.uuid])return e.images[this.uuid];const n={uuid:this.uuid,url:""},t=this.data;if(null!==t){let e;if(Array.isArray(t)){e=[];for(let n=0,s=t.length;n<s;n++)t[n].isDataTexture?e.push(va(t[n].image)):e.push(va(t[n]))}else e=va(t);n.url=e}return s||(e.images[this.uuid]=n),n}}function va(e){return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?ua.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fu=0;class w extends ve{constructor(e=w.DEFAULT_IMAGE,t=w.DEFAULT_MAPPING,s=1001,o=1001,i=1006,a=1008,r=1023,c=1009,l=w.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=q(),this.name="",this.source=new Ge(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=i,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new n(0,0),this.repeat=new n(1,1),this.center=new n(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new d,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,"string"==typeof u?this.colorSpace=u:(On("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Pe?A:se),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=void 0===e||"string"==typeof e;if(!n&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),n||(e.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wn)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case U:e.x=e.x<0?0:1;break;case kn:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case U:e.y=e.y<0?0:1;break;case kn:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return On("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===A?Pe:Pi}set encoding(e){On("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pe?A:se}}w.DEFAULT_IMAGE=null,w.DEFAULT_MAPPING=Wn,w.DEFAULT_ANISOTROPY=1;class p{constructor(e=0,t=0,n=0,s=1){p.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,i=this.w,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o+t[12]*i,this.y=t[1]*n+t[5]*s+t[9]*o+t[13]*i,this.z=t[2]*n+t[6]*s+t[10]*o+t[14]*i,this.w=t[3]*n+t[7]*s+t[11]*o+t[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let v,n,s,o;const a=.01,m=.1,t=e.elements,f=t[0],i=t[4],r=t[8],c=t[1],p=t[5],l=t[9],d=t[2],u=t[6],g=t[10];if(Math.abs(i-c)<a&&Math.abs(r-d)<a&&Math.abs(l-u)<a){if(Math.abs(i+c)<m&&Math.abs(r+d)<m&&Math.abs(l+u)<m&&Math.abs(f+p+g-3)<m)return this.set(1,0,0,0),this;v=Math.PI;const e=(f+1)/2,t=(p+1)/2,h=(g+1)/2,b=(i+c)/4,j=(r+d)/4,y=(l+u)/4;return e>t&&e>h?e<a?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(e),s=b/n,o=j/n):t>h?t<a?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(t),n=b/s,o=y/s):h<a?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(h),n=j/o,s=y/o),this.set(n,s,o,v),this}let h=Math.sqrt((u-l)*(u-l)+(r-d)*(r-d)+(c-i)*(c-i));return Math.abs(h)<.001&&(h=1),this.x=(u-l)/h,this.y=(r-d)/h,this.z=(c-i)/h,this.w=Math.acos((f+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qr extends ve{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new p(0,0,e,t),this.scissorTest=!1,this.viewport=new p(0,0,e,t);const s={width:e,height:t,depth:1};void 0!==n.encoding&&(On("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pe?A:se),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new w(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return(new this.constructor).copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ge(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ie extends Qr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class eo extends w{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=C,this.minFilter=C,this.wrapR=U,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa extends w{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=C,this.minFilter=C,this.wrapR=U,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ${constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,i,a){let r=n[s+0],c=n[s+1],l=n[s+2],d=n[s+3];const u=o[i+0],h=o[i+1],m=o[i+2],f=o[i+3];if(0===a)return e[t+0]=r,e[t+1]=c,e[t+2]=l,void(e[t+3]=d);if(1===a)return e[t+0]=u,e[t+1]=h,e[t+2]=m,void(e[t+3]=f);if(d!==f||r!==u||c!==h||l!==m){let e=1-a;const t=r*u+c*h+l*m+d*f,s=t>=0?1:-1,o=1-t*t;if(o>Number.EPSILON){const n=Math.sqrt(o),i=Math.atan2(n,t*s);e=Math.sin(e*i)/n,a=Math.sin(a*i)/n}const n=a*s;if(r=r*e+u*n,c=c*e+h*n,l=l*e+m*n,d=d*e+f*n,e===1-a){const e=1/Math.sqrt(r*r+c*c+l*l+d*d);r*=e,c*=e,l*=e,d*=e}}e[t]=r,e[t+1]=c,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,o,i){const a=n[s],r=n[s+1],c=n[s+2],l=n[s+3],d=o[i],u=o[i+1],h=o[i+2],m=o[i+3];return e[t]=a*m+l*d+r*h-c*u,e[t+1]=r*m+l*u+c*d-a*h,e[t+2]=c*m+l*h+a*u-r*d,e[t+3]=l*m-a*d-r*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const d=e._x,u=e._y,h=e._z,m=e._order,c=Math.cos,l=Math.sin,n=c(d/2),s=c(u/2),o=c(h/2),i=l(d/2),a=l(u/2),r=l(h/2);switch(m){case"XYZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"YXZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"ZXY":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"ZYX":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"YZX":this._x=i*s*o+n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o-i*a*r;break;case"XZY":this._x=i*s*o-n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o+i*a*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+m)}return!0===t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,n=Math.sin(s);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],s=t[5],c=t[9],l=t[2],d=t[6],o=t[10],u=n+s+o;if(u>0){const e=.5/Math.sqrt(u+1);this._w=.25/e,this._x=(d-c)*e,this._y=(a-l)*e,this._z=(r-i)*e}else if(n>s&&n>o){const e=2*Math.sqrt(1+n-s-o);this._w=(d-c)/e,this._x=.25*e,this._y=(i+r)/e,this._z=(a+l)/e}else if(s>o){const e=2*Math.sqrt(1+s-n-o);this._w=(a-l)/e,this._x=(i+r)/e,this._y=.25*e,this._z=(c+d)/e}else{const e=2*Math.sqrt(1+o-n-s);this._w=(r-i)/e,this._x=(a+l)/e,this._y=(c+d)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(b(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(0===n)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,i=e._w,a=t._x,r=t._y,c=t._z,l=t._w;return this._x=n*l+i*a+s*c-o*r,this._y=s*l+i*r+o*a-n*c,this._z=o*l+i*c+n*r-s*a,this._w=i*l-n*a-s*r-o*c,this._onChangeCallback(),this}slerp(e,t){if(0===t)return this;if(1===t)return this.copy(e);const s=this._x,o=this._y,i=this._z,a=this._w;let n=a*e._w+s*e._x+o*e._y+i*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=a,this._x=s,this._y=o,this._z=i,this;const d=1-n*n;if(d<=Number.EPSILON){const e=1-t;return this._w=e*a+t*this._w,this._x=e*s+t*this._x,this._y=e*o+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}const l=Math.sqrt(d),u=Math.atan2(l,n),r=Math.sin((1-t)*u)/l,c=Math.sin(t*u)/l;return this._w=a*r+this._w*c,this._x=s*r+this._x*c,this._y=o*r+this._y*c,this._z=i*r+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(o),n*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class t{constructor(e=0,n=0,s=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,t,n){return void 0===n&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jr.setFromAxisAngle(e,t))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6]*o,this.y=t[1]*n+t[4]*s+t[7]*o,this.z=t[2]*n+t[5]*s+t[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,t=e.elements,i=1/(t[3]*n+t[7]*s+t[11]*o+t[15]);return this.x=(t[0]*n+t[4]*s+t[8]*o+t[12])*i,this.y=(t[1]*n+t[5]*s+t[9]*o+t[13])*i,this.z=(t[2]*n+t[6]*s+t[10]*o+t[14])*i,this}applyQuaternion(e){const o=this.x,i=this.y,a=this.z,t=e.x,n=e.y,s=e.z,r=e.w,c=2*(n*a-s*i),l=2*(s*o-t*a),d=2*(t*i-n*o);return this.x=o+r*c+n*d-s*l,this.y=i+r*l+s*c-t*d,this.z=a+r*d+t*l-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o,this.y=t[1]*n+t[5]*s+t[9]*o,this.z=t[2]*n+t[6]*s+t[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,i=t.x,a=t.y,r=t.z;return this.x=s*r-o*a,this.y=o*i-n*r,this.z=n*a-s*i,this}projectOnVector(e){const t=e.lengthSq();if(0===t)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(0===t)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(b(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new t,Jr=new $;class P{constructor(e=new t(1/0,1/0,1/0),n=new t(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ae.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ae.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ae.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return(new this.constructor).copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(void 0!==n){const s=n.getAttribute("position");if(!0===t&&void 0!==s&&!0!==e.isInstancedMesh)for(let t=0,n=s.count;t<n;t++)!0===e.isMesh?e.getVertexPosition(t,ae):ae.fromBufferAttribute(s,t),ae.applyMatrix4(e.matrixWorld),this.expandByPoint(ae);else void 0!==e.boundingBox?(null===e.boundingBox&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(null===n.boundingBox&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const s=e.children;for(let e=0,n=s.length;e<n;e++)this.expandByObject(s[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ae),ae.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sn),Js.subVectors(this.max,sn),zt.subVectors(e.a,sn),Xt.subVectors(e.b,sn),Kt.subVectors(e.c,sn),Ve.subVectors(Xt,zt),Se.subVectors(Kt,Xt),ht.subVectors(zt,Kt);let t=[0,-Ve.z,Ve.y,0,-Se.z,Se.y,0,-ht.z,ht.y,Ve.z,0,-Ve.x,Se.z,0,-Se.x,ht.z,0,-ht.x,-Ve.y,Ve.x,0,-Se.y,Se.x,0,-ht.y,ht.x,0];return!!_a(t,zt,Xt,Kt,Js)&&(t=[1,0,0,0,1,0,0,0,1],!!_a(t,zt,Xt,Kt,Js)&&(Hs.crossVectors(Ve,Se),t=[Hs.x,Hs.y,Hs.z],_a(t,zt,Xt,Kt,Js)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ae).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ae).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fe)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fe=[new t,new t,new t,new t,new t,new t,new t,new t],ae=new t,rs=new P,zt=new t,Xt=new t,Kt=new t,Ve=new t,Se=new t,ht=new t,sn=new t,Js=new t,Hs=new t,We=new t;function _a(e,t,n,s,o){for(let i=0,l=e.length-3;i<=l;i+=3){We.fromArray(e,i);const d=o.x*Math.abs(We.x)+o.y*Math.abs(We.y)+o.z*Math.abs(We.z),a=t.dot(We),r=n.dot(We),c=s.dot(We);if(Math.max(-Math.max(a,r,c),Math.min(a,r,c))>d)return!1}return!0}const Zd=new P,dn=new t,ba=new t;class F{constructor(e=new t,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;void 0!==t?n.copy(t):Zd.setFromPoints(e).getCenter(n);let s=0;for(let t=0,o=e.length;t<o;t++)s=Math.max(s,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dn.subVectors(e,this.center);const t=dn.lengthSq();if(t>this.radius*this.radius){const e=Math.sqrt(t),n=.5*(e-this.radius);this.center.addScaledVector(dn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dn.copy(e.center).add(ba)),this.expandByPoint(dn.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return(new this.constructor).copy(this)}}const he=new t,ga=new t,xs=new t,Be=new t,fa=new t,js=new t,ma=new t;class Tt{constructor(e=new t,n=new t(0,0,-1)){this.origin=e,this.direction=n}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,he)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=he.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(he.copy(this.origin).addScaledVector(this.direction,t),he.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ga.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),Be.copy(this.origin).sub(ga);const a=.5*e.distanceTo(t),r=-this.direction.dot(xs),l=Be.dot(this.direction),c=-Be.dot(xs),u=Be.lengthSq(),m=Math.abs(1-r*r);let i,o,d,h;if(m>0)if(i=r*c-l,o=r*l-c,h=a*m,i>=0)if(o>=-h)if(o<=h){const e=1/m;i*=e,o*=e,d=i*(i+r*o+2*l)+o*(r*i+o+2*c)+u}else o=a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o=-a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o<=-h?(i=Math.max(0,-(-r*a+l)),o=i>0?-a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u):o<=h?(i=0,o=Math.min(Math.max(-a,-c),a),d=o*(o+2*c)+u):(i=Math.max(0,-(r*a+l)),o=i>0?a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u);else o=r>0?-a:a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,i),s&&s.copy(ga).addScaledVector(xs,o),d}intersectSphere(e,t){he.subVectors(e.center,this.origin);const n=he.dot(this.direction),s=he.dot(he)-n*n,o=e.radius*e.radius;if(s>o)return null;const i=Math.sqrt(o-s),a=n-i,r=n+i;return r<0?null:a<0?this.at(r,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(0===t)return 0===e.distanceToPoint(this.origin)?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return null===n?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return 0===t||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,i,a,r,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,o=this.origin;return l>=0?(n=(e.min.x-o.x)*l,s=(e.max.x-o.x)*l):(n=(e.max.x-o.x)*l,s=(e.min.x-o.x)*l),d>=0?(i=(e.min.y-o.y)*d,a=(e.max.y-o.y)*d):(i=(e.max.y-o.y)*d,a=(e.min.y-o.y)*d),n>a||i>s?null:((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),u>=0?(r=(e.min.z-o.z)*u,c=(e.max.z-o.z)*u):(r=(e.max.z-o.z)*u,c=(e.min.z-o.z)*u),n>c||r>s?null:((r>n||n!=n)&&(n=r),(c<s||s!=s)&&(s=c),s<0?null:this.at(n>=0?n:s,t)))}intersectsBox(e){return null!==this.intersectBox(e,he)}intersectTriangle(e,t,n,s,o){fa.subVectors(t,e),js.subVectors(n,e),ma.crossVectors(fa,js);let a,i=this.direction.dot(ma);if(i>0){if(s)return null;a=1}else{if(!(i<0))return null;a=-1,i=-i}Be.subVectors(this.origin,e);const r=a*this.direction.dot(js.crossVectors(Be,js));if(r<0)return null;const c=a*this.direction.dot(fa.cross(Be));if(c<0)return null;if(r+c>i)return null;const l=-a*Be.dot(ma);return l<0?null:this.at(l/i,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}}class a{constructor(e,t,n,s,o,i,r,c,l,d,u,h,m,f,p,g){a.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],void 0!==e&&this.set(e,t,n,s,o,i,r,c,l,d,u,h,m,f,p,g)}set(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=i,g[9]=a,g[13]=r,g[2]=c,g[6]=l,g[10]=d,g[14]=u,g[3]=h,g[7]=m,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new a).fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Et.setFromMatrixColumn(e,0).length(),o=1/Et.setFromMatrixColumn(e,1).length(),i=1/Et.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*i,t[9]=n[9]*i,t[10]=n[10]*i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,c=e.x,l=e.y,d=e.z,i=Math.cos(c),n=Math.sin(c),a=Math.cos(l),s=Math.sin(l),r=Math.cos(d),o=Math.sin(d);if("XYZ"===e.order){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=-a*o,t[8]=s,t[1]=c+l*s,t[5]=e-d*s,t[9]=-n*a,t[2]=d-e*s,t[6]=l+c*s,t[10]=i*a}else if("YXZ"===e.order){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e+d*n,t[4]=l*n-c,t[8]=i*s,t[1]=i*o,t[5]=i*r,t[9]=-n,t[2]=c*n-l,t[6]=d+e*n,t[10]=i*a}else if("ZXY"===e.order){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e-d*n,t[4]=-i*o,t[8]=l+c*n,t[1]=c+l*n,t[5]=i*r,t[9]=d-e*n,t[2]=-i*s,t[6]=n,t[10]=i*a}else if("ZYX"===e.order){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=l*s-c,t[8]=e*s+d,t[1]=a*o,t[5]=d*s+e,t[9]=c*s-l,t[2]=-s,t[6]=n*a,t[10]=i*a}else if("YZX"===e.order){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=d-e*o,t[8]=l*o+c,t[1]=o,t[5]=i*r,t[9]=-n*r,t[2]=-s*r,t[6]=c*o+l,t[10]=e-d*o}else if("XZY"===e.order){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=-o,t[8]=s*r,t[1]=e*o+d,t[5]=i*r,t[9]=c*o-l,t[2]=l*o-c,t[6]=n*r,t[10]=d*o+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,qd)}lookAt(e,t,n){const s=this.elements;return K.subVectors(e,t),0===K.lengthSq()&&(K.z=1),K.normalize(),Ne.crossVectors(n,K),0===Ne.lengthSq()&&(1===Math.abs(n.z)?K.x+=1e-4:K.z+=1e-4,K.normalize(),Ne.crossVectors(n,K)),Ne.normalize(),os.crossVectors(K,Ne),s[0]=Ne.x,s[4]=os.x,s[8]=K.x,s[1]=Ne.y,s[5]=os.y,s[9]=K.y,s[2]=Ne.z,s[6]=os.z,s[10]=K.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[4],r=n[8],c=n[12],l=n[1],d=n[5],u=n[9],h=n[13],m=n[2],f=n[6],p=n[10],g=n[14],v=n[3],b=n[7],j=n[11],y=n[15],_=s[0],w=s[4],O=s[8],x=s[12],C=s[1],E=s[5],k=s[9],A=s[13],S=s[2],M=s[6],F=s[10],T=s[14],z=s[3],D=s[7],N=s[11],L=s[15];return o[0]=i*_+a*C+r*S+c*z,o[4]=i*w+a*E+r*M+c*D,o[8]=i*O+a*k+r*F+c*N,o[12]=i*x+a*A+r*T+c*L,o[1]=l*_+d*C+u*S+h*z,o[5]=l*w+d*E+u*M+h*D,o[9]=l*O+d*k+u*F+h*N,o[13]=l*x+d*A+u*T+h*L,o[2]=m*_+f*C+p*S+g*z,o[6]=m*w+f*E+p*M+g*D,o[10]=m*O+f*k+p*F+g*N,o[14]=m*x+f*A+p*T+g*L,o[3]=v*_+b*C+j*S+y*z,o[7]=v*w+b*E+j*M+y*D,o[11]=v*O+b*k+j*F+y*N,o[15]=v*x+b*A+j*T+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],i=e[1],a=e[5],r=e[9],c=e[13],l=e[2],d=e[6],u=e[10],h=e[14];return e[3]*(+o*r*d-s*c*d-o*a*u+n*c*u+s*a*h-n*r*h)+e[7]*(+t*r*h-t*c*u+o*i*u-s*i*h+s*c*l-o*r*l)+e[11]*(+t*c*d-t*a*h-o*i*d+n*i*h+o*a*l-n*c*l)+e[15]*(-s*a*l-t*r*d+t*a*u+s*i*d-n*i*u+n*r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],d=e[4],f=e[5],r=e[6],c=e[7],l=e[8],i=e[9],u=e[10],h=e[11],m=e[12],a=e[13],p=e[14],g=e[15],b=i*p*c-a*u*c+a*r*h-f*p*h-i*r*g+f*u*g,j=m*u*c-l*p*c-m*r*h+d*p*h+l*r*g-d*u*g,y=l*a*c-m*i*c+m*f*h-d*a*h-l*f*g+d*i*g,_=m*i*r-l*a*r-m*f*u+d*a*u+l*f*p-d*i*p,w=t*b+n*j+s*y+o*_;if(0===w)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/w;return e[0]=b*v,e[1]=(a*u*o-i*p*o-a*s*h+n*p*h+i*s*g-n*u*g)*v,e[2]=(f*p*o-a*r*o+a*s*c-n*p*c-f*s*g+n*r*g)*v,e[3]=(i*r*o-f*u*o-i*s*c+n*u*c+f*s*h-n*r*h)*v,e[4]=j*v,e[5]=(l*p*o-m*u*o+m*s*h-t*p*h-l*s*g+t*u*g)*v,e[6]=(m*r*o-d*p*o-m*s*c+t*p*c+d*s*g-t*r*g)*v,e[7]=(d*u*o-l*r*o+l*s*c-t*u*c-d*s*h+t*r*h)*v,e[8]=y*v,e[9]=(m*i*o-l*a*o-m*n*h+t*a*h+l*n*g-t*i*g)*v,e[10]=(d*a*o-m*f*o+m*n*c-t*a*c-d*n*g+t*f*g)*v,e[11]=(l*f*o-d*i*o-l*n*c+t*i*c+d*n*h-t*f*h)*v,e[12]=_*v,e[13]=(l*a*s-m*i*s+m*n*u-t*a*u-l*n*p+t*i*p)*v,e[14]=(m*f*s-d*a*s-m*n*r+t*a*r+d*n*p-t*f*p)*v,e[15]=(d*i*s-l*f*s+l*n*r-t*i*r-d*n*u+t*f*u)*v,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),c=1-a,r=e.x,o=e.y,n=e.z,i=c*r,l=c*o;return this.set(i*r+a,i*o-s*n,i*n+s*o,0,i*o+s*n,l*o+a,l*n-s*r,0,i*n-s*o,l*n+s*r,c*n*n+a,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,i){return this.set(1,n,o,0,e,1,i,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,i=t._y,r=t._z,c=t._w,w=o+o,d=i+i,a=r+r,_=o*w,y=o*d,m=o*a,f=i*d,p=i*a,g=r*a,v=c*w,b=c*d,j=c*a,h=n.x,u=n.y,l=n.z;return s[0]=(1-(f+g))*h,s[1]=(y+j)*h,s[2]=(m-b)*h,s[3]=0,s[4]=(y-j)*u,s[5]=(1-(_+g))*u,s[6]=(p+v)*u,s[7]=0,s[8]=(m+b)*l,s[9]=(p-v)*l,s[10]=(1-(_+f))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=Et.set(s[0],s[1],s[2]).length();const c=Et.set(s[4],s[5],s[6]).length(),l=Et.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],oe.copy(this);const i=1/o,a=1/c,r=1/l;return oe.elements[0]*=i,oe.elements[1]*=i,oe.elements[2]*=i,oe.elements[4]*=a,oe.elements[5]*=a,oe.elements[6]*=a,oe.elements[8]*=r,oe.elements[9]*=r,oe.elements[10]*=r,t.setFromRotationMatrix(oe),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,s,o,i,a=2e3){const r=this.elements,d=2*o/(t-e),u=2*o/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s);let c,l;if(a===He)c=-(i+o)/(i-o),l=-2*i*o/(i-o);else{if(a!==Ot)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);c=-i/(i-o),l=-i*o/(i-o)}return r[0]=d,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=u,r[9]=m,r[13]=0,r[2]=0,r[6]=0,r[10]=c,r[14]=l,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,s,o,i,a=2e3){const r=this.elements,u=1/(t-e),h=1/(n-s),c=1/(i-o),m=(t+e)*u,f=(n+s)*h;let l,d;if(a===He)l=(i+o)*c,d=-2*c;else{if(a!==Ot)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);l=o*c,d=-1*c}return r[0]=2*u,r[4]=0,r[8]=0,r[12]=-m,r[1]=0,r[5]=2*h,r[9]=0,r[13]=-f,r[2]=0,r[6]=0,r[10]=d,r[14]=-l,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Et=new t,oe=new a,Qd=new t(0,0,0),qd=new t(1,1,1),Ne=new t,os=new t,K=new t,mc=new a,gc=new $;class Xn{constructor(e=0,t=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],c=s[8],l=s[1],i=s[5],d=s[9],u=s[2],h=s[6],a=s[10];switch(t){case"XYZ":this._y=Math.asin(b(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,a),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,i),this._z=0);break;case"YXZ":this._x=Math.asin(-b(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,a),this._z=Math.atan2(l,i)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(b(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,a),this._z=Math.atan2(-r,i)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-b(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,a),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,i));break;case"YZX":this._z=Math.asin(b(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,i),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(c,a));break;case"XZY":this._z=Math.asin(-b(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,i),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,a),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===n&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Gn{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return 0!=(this.mask&e.mask)}isEnabled(e){return 0!=(this.mask&(1<<e|0))}}let Bd=0;const yc=new t,yt=new $,xe=new a,Kn=new t,Pn=new t,Pd=new t,Rd=new $,wc=new t(1,0,0),Cc=new t(0,1,0),kc=new t(0,0,1),Fd={type:"added"},Md={type:"removed"};class h extends ve{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=q(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=h.DEFAULT_UP.clone();const s=new t,e=new Xn,n=new $,o=new t(1,1,1);e._onChange(function(){n.setFromEuler(e,!1)}),n._onChange(function(){e.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:s},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new a},normalMatrix:{value:new d}}),this.matrix=new a,this.matrixWorld=new a,this.matrixAutoUpdate=h.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=h.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yt.setFromAxisAngle(e,t),this.quaternion.multiply(yt),this}rotateOnWorldAxis(e,t){return yt.setFromAxisAngle(e,t),this.quaternion.premultiply(yt),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Cc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Cc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xe.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kn.copy(e):Kn.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xe.lookAt(Pn,Kn,this.up):xe.lookAt(Kn,Pn,this.up),this.quaternion.setFromRotationMatrix(xe),s&&(xe.extractRotation(s.matrixWorld),yt.setFromRotationMatrix(xe),this.quaternion.premultiply(yt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const t=this.children.indexOf(e);return-1!==t&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Md)),this}removeFromParent(){const e=this.parent;return null!==e&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xe.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),xe.multiply(e.parent.matrixWorld)),e.applyMatrix4(xe),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const s=this.children[n].getObjectByProperty(e,t);if(void 0!==s)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,i=s.length;o<i;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pn,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pn,Rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++){const s=t[n];!0!==s.matrixWorldAutoUpdate&&!0!==e||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(!0===e&&null!==n&&!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t){const e=this.children;for(let t=0,s=e.length;t<s;t++){const n=e[t];!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=void 0===e||"string"==typeof e,n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const t={};function o(t,n){return void 0===t[n.uuid]&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),!0===this.castShadow&&(t.castShadow=!0),!0===this.receiveShadow&&(t.receiveShadow=!0),!1===this.visible&&(t.visible=!1),!1===this.frustumCulled&&(t.frustumCulled=!1),0!==this.renderOrder&&(t.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(t.userData=this.userData),t.layers=this.layers.mask,t.matrix=this.matrix.toArray(),t.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(t.matrixAutoUpdate=!1),this.isInstancedMesh&&(t.type="InstancedMesh",t.count=this.count,t.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(t.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(t.type="BatchedMesh",t.perObjectFrustumCulled=this.perObjectFrustumCulled,t.sortObjects=this.sortObjects,t.drawRanges=this._drawRanges,t.reservedRanges=this._reservedRanges,t.visibility=this._visibility,t.active=this._active,t.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),t.maxGeometryCount=this._maxGeometryCount,t.maxVertexCount=this._maxVertexCount,t.maxIndexCount=this._maxIndexCount,t.geometryInitialized=this._geometryInitialized,t.geometryCount=this._geometryCount,t.matricesTexture=this._matricesTexture.toJSON(e),null!==this.boundingSphere&&(t.boundingSphere={center:t.boundingSphere.center.toArray(),radius:t.boundingSphere.radius}),null!==this.boundingBox&&(t.boundingBox={min:t.boundingBox.min.toArray(),max:t.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?t.background=this.background.toJSON():this.background.isTexture&&(t.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(t.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){t.geometry=o(e.geometries,this.geometry);const n=this.geometry.parameters;if(void 0!==n&&void 0!==n.shapes){const t=n.shapes;if(Array.isArray(t))for(let n=0,s=t.length;n<s;n++){const i=t[n];o(e.shapes,i)}else o(e.shapes,t)}}if(this.isSkinnedMesh&&(t.bindMode=this.bindMode,t.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(o(e.skeletons,this.skeleton),t.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){const n=[];for(let t=0,s=this.material.length;t<s;t++)n.push(o(e.materials,this.material[t]));t.material=n}else t.material=o(e.materials,this.material);if(this.children.length>0){t.children=[];for(let n=0;n<this.children.length;n++)t.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){t.animations=[];for(let n=0;n<this.animations.length;n++){const s=this.animations[n];t.animations.push(o(e.animations,s))}}if(i){const t=s(e.geometries),o=s(e.materials),i=s(e.textures),a=s(e.images),r=s(e.shapes),c=s(e.skeletons),l=s(e.animations),d=s(e.nodes);t.length>0&&(n.geometries=t),o.length>0&&(n.materials=o),i.length>0&&(n.textures=i),a.length>0&&(n.images=a),r.length>0&&(n.shapes=r),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),d.length>0&&(n.nodes=d)}return n.object=t,n;function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}}clone(e){return(new this.constructor).copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){const n=e.children[t];this.add(n.clone())}return this}}h.DEFAULT_UP=new t(0,1,0),h.DEFAULT_MATRIX_AUTO_UPDATE=!0,h.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const J=new t,me=new t,$i=new t,ye=new t,Ct=new t,kt=new t,Sc=new t,Vi=new t,Bi=new t,Hi=new t;let ss=!1;class Y{constructor(e=new t,n=new t,s=new t){this.a=e,this.b=n,this.c=s}static getNormal(e,t,n,s){s.subVectors(n,t),J.subVectors(e,t),s.cross(J);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){J.subVectors(s,t),me.subVectors(n,t),$i.subVectors(e,t);const a=J.dot(J),i=J.dot(me),r=J.dot($i),c=me.dot(me),l=me.dot($i),d=a*c-i*i;if(0===d)return o.set(0,0,0),null;const u=1/d,h=(c*r-i*l)*u,m=(a*l-i*r)*u;return o.set(1-h-m,m,h)}static containsPoint(e,t,n,s){return null!==this.getBarycoord(e,t,n,s,ye)&&ye.x>=0&&ye.y>=0&&ye.x+ye.y<=1}static getUV(e,t,n,s,o,i,a,r){return!1===ss&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),this.getInterpolation(e,t,n,s,o,i,a,r)}static getInterpolation(e,t,n,s,o,i,a,r){return null===this.getBarycoord(e,t,n,s,ye)?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(o,ye.x),r.addScaledVector(i,ye.y),r.addScaledVector(a,ye.z),r)}static isFrontFacing(e,t,n,s){return J.subVectors(n,t),me.subVectors(e,t),J.cross(me).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return(new this.constructor).copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return J.subVectors(this.c,this.b),me.subVectors(this.a,this.b),.5*J.cross(me).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Y.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Y.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,o){return!1===ss&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),Y.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}getInterpolation(e,t,n,s,o){return Y.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Y.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Y.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,d=this.b,h=this.c;let u,i;Ct.subVectors(d,o),kt.subVectors(h,o),Vi.subVectors(e,o);const a=Ct.dot(Vi),r=kt.dot(Vi);if(a<=0&&r<=0)return t.copy(o);Bi.subVectors(e,d);const n=Ct.dot(Bi),c=kt.dot(Bi);if(n>=0&&c<=n)return t.copy(d);const m=a*c-n*r;if(m<=0&&a>=0&&n<=0)return u=a/(a-n),t.copy(o).addScaledVector(Ct,u);Hi.subVectors(e,h);const l=Ct.dot(Hi),s=kt.dot(Hi);if(s>=0&&l<=s)return t.copy(h);const f=l*r-a*s;if(f<=0&&r>=0&&s<=0)return i=r/(r-s),t.copy(o).addScaledVector(kt,i);const p=n*s-l*c;if(p<=0&&c-n>=0&&l-s>=0)return Sc.subVectors(h,d),i=(c-n)/(c-n+(l-s)),t.copy(d).addScaledVector(Sc,i);const g=1/(p+f+m);return u=f*g,i=m*g,t.copy(o).addScaledVector(Ct,u).addScaledVector(kt,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Le={h:0,s:0,l:0},cs={h:0,s:0,l:0};function Ri(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+6*(t-e)*(2/3-n):e}class o{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(void 0===t&&void 0===n){const t=e;t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=A){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,m.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=m.workingColorSpace){return this.r=e,this.g=t,this.b=n,m.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=m.workingColorSpace){if(e=Qi(e,1),t=b(t,0,1),n=b(n,0,1),0===t)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ri(o,s,e+1/3),this.g=Ri(o,s,e),this.b=Ri(o,s,e-1/3)}return m.toWorkingColorSpace(this,s),this}setStyle(e,t=A){function s(t){void 0!==t&&parseFloat(t)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^)]*)\)/.exec(e)){let o;const a=n[1],i=n[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)%\s*,\s*(\d*\.?\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(3===o)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(6===o)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=A){const n=Fc[e.toLowerCase()];return void 0!==n?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=St(e.r),this.g=St(e.g),this.b=St(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=A){return m.fromWorkingColorSpace(T.copy(this),e),65536*Math.round(b(255*T.r,0,255))+256*Math.round(b(255*T.g,0,255))+Math.round(b(255*T.b,0,255))}getHexString(e=A){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=m.workingColorSpace){m.fromWorkingColorSpace(T.copy(this),t);const a=T.r,n=T.g,s=T.b,o=Math.max(a,n,s),r=Math.min(a,n,s);let i,c;const l=(r+o)/2;if(r===o)i=0,c=0;else{const e=o-r;switch(c=l<=.5?e/(o+r):e/(2-o-r),o){case a:i=(n-s)/e+(n<s?6:0);break;case n:i=(s-a)/e+2;break;case s:i=(a-n)/e+4}i/=6}return e.h=i,e.s=c,e.l=l,e}getRGB(e,t=m.workingColorSpace){return m.fromWorkingColorSpace(T.copy(this),t),e.r=T.r,e.g=T.g,e.b=T.b,e}getStyle(e=A){m.fromWorkingColorSpace(T.copy(this),e);const t=T.r,n=T.g,s=T.b;return e!==A?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*s)})`}offsetHSL(e,t,n){return this.getHSL(Le),this.setHSL(Le.h+e,Le.s+t,Le.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Le),e.getHSL(cs);const n=Hn(Le.h,cs.h,t),s=Hn(Le.s,cs.s,t),o=Hn(Le.l,cs.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,o=this.b,t=e.elements;return this.r=t[0]*n+t[3]*s+t[6]*o,this.g=t[1]*n+t[4]*s+t[7]*o,this.b=t[2]*n+t[5]*s+t[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const T=new o;o.NAMES=Fc;let Ed=0;class z extends ve{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=q(),this.name="",this.type="Material",this.blending=1,this.side=pe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=no,this.blendEquation=Te,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new o(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ye,this.stencilZFail=Ye,this.stencilZPass=Ye,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(void 0!==e)for(const s in e){const n=e[s];if(void 0===n){console.warn(`THREE.Material: parameter '${s}' has value of undefined.`);continue}const t=this[s];void 0!==t?t&&t.isColor?t.set(n):t&&t.isVector3&&n&&n.isVector3?t.copy(n):this[s]=n:console.warn(`THREE.Material: '${s}' is not a property of THREE.${this.type}.`)}}toJSON(e){const n=void 0===e||"string"==typeof e;n&&(e={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),void 0!==this.roughness&&(t.roughness=this.roughness),void 0!==this.metalness&&(t.metalness=this.metalness),void 0!==this.sheen&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(t.shininess=this.shininess),void 0!==this.clearcoat&&(t.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(t.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(t.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),void 0!==this.anisotropy&&(t.anisotropy=this.anisotropy),void 0!==this.anisotropyRotation&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(e).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(e).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(e).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(e).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(e).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(e).uuid,void 0!==this.combine&&(t.combine=this.combine)),void 0!==this.envMapIntensity&&(t.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(t.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.transmission&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(e).uuid),void 0!==this.thickness&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(e).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(t.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(t.size=this.size),null!==this.shadowSide&&(t.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(t.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(t.blending=this.blending),this.side!==pe&&(t.side=this.side),!0===this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),!0===this.transparent&&(t.transparent=!0),this.blendSrc!==lo&&(t.blendSrc=this.blendSrc),this.blendDst!==no&&(t.blendDst=this.blendDst),this.blendEquation!==Te&&(t.blendEquation=this.blendEquation),null!==this.blendSrcAlpha&&(t.blendSrcAlpha=this.blendSrcAlpha),null!==this.blendDstAlpha&&(t.blendDstAlpha=this.blendDstAlpha),null!==this.blendEquationAlpha&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),0!==this.blendAlpha&&(t.blendAlpha=this.blendAlpha),3!==this.depthFunc&&(t.depthFunc=this.depthFunc),!1===this.depthTest&&(t.depthTest=this.depthTest),!1===this.depthWrite&&(t.depthWrite=this.depthWrite),!1===this.colorWrite&&(t.colorWrite=this.colorWrite),255!==this.stencilWriteMask&&(t.stencilWriteMask=this.stencilWriteMask),519!==this.stencilFunc&&(t.stencilFunc=this.stencilFunc),0!==this.stencilRef&&(t.stencilRef=this.stencilRef),255!==this.stencilFuncMask&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ye&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Ye&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Ye&&(t.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(t.stencilWrite=this.stencilWrite),void 0!==this.rotation&&0!==this.rotation&&(t.rotation=this.rotation),!0===this.polygonOffset&&(t.polygonOffset=!0),0!==this.polygonOffsetFactor&&(t.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(t.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(t.linewidth=this.linewidth),void 0!==this.dashSize&&(t.dashSize=this.dashSize),void 0!==this.gapSize&&(t.gapSize=this.gapSize),void 0!==this.scale&&(t.scale=this.scale),!0===this.dithering&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),!0===this.alphaHash&&(t.alphaHash=!0),!0===this.alphaToCoverage&&(t.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(t.premultipliedAlpha=!0),!0===this.forceSinglePass&&(t.forceSinglePass=!0),!0===this.wireframe&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(t.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(t.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(t.flatShading=!0),!1===this.visible&&(t.visible=!1),!1===this.toneMapped&&(t.toneMapped=!1),!1===this.fog&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData),n){const n=s(e.textures),o=s(e.images);n.length>0&&(t.textures=n),o.length>0&&(t.images=o)}return t}clone(){return(new this.constructor).copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(null!==t){const e=t.length;n=new Array(e);for(let s=0;s!==e;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}}class Me extends z{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new o(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const je=Cd();function Cd(){const o=new ArrayBuffer(4),a=new Float32Array(o),r=new Uint32Array(o),e=new Uint32Array(512),t=new Uint32Array(512);for(let n=0;n<256;++n){const s=n-127;s<-27?(e[n]=0,e[256|n]=32768,t[n]=24,t[256|n]=24):s<-14?(e[n]=1024>>-s-14,e[256|n]=1024>>-s-14|32768,t[n]=-s-1,t[256|n]=-s-1):s<=15?(e[n]=s+15<<10,e[256|n]=s+15<<10|32768,t[n]=13,t[256|n]=13):s<128?(e[n]=31744,e[256|n]=64512,t[n]=24,t[256|n]=24):(e[n]=31744,e[256|n]=64512,t[n]=13,t[256|n]=13)}const s=new Uint32Array(2048),n=new Uint32Array(64),i=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;0==(8388608&t);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,s[e]=t|n}for(let e=1024;e<2048;++e)s[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)n[e]=e<<23;n[31]=1199570944,n[32]=2147483648;for(let e=33;e<63;++e)n[e]=2147483648+(e-32<<23);n[63]=3347054592;for(let e=1;e<64;++e)32!==e&&(i[e]=1024);return{floatView:a,uint32View:r,baseTable:e,shiftTable:t,mantissaTable:s,exponentTable:n,offsetTable:i}}function W(e){Math.abs(e)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=b(e,-65504,65504),je.floatView[0]=e;const t=je.uint32View[0],n=t>>23&511;return je.baseTable[n]+((8388607&t)>>je.shiftTable[n])}function jn(e){const t=e>>10;return je.uint32View[0]=je.mantissaTable[je.offsetTable[t]+(1023&e)]+je.exponentTable[t],je.floatView[0]}const xd={toHalfFloat:W,fromHalfFloat:jn},O=new t,_s=new n;class f{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=n,this.usage=Nn,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Z,this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(2===this.itemSize)for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(3===this.itemSize)for(let t=0,n=this.count;t<n;t++)O.fromBufferAttribute(this,t),O.applyMatrix3(e),this.setXYZ(t,O.x,O.y,O.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)O.fromBufferAttribute(this,t),O.applyMatrix4(e),this.setXYZ(t,O.x,O.y,O.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)O.fromBufferAttribute(this,t),O.applyNormalMatrix(e),this.setXYZ(t,O.x,O.y,O.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)O.fromBufferAttribute(this,t),O.transformDirection(e),this.setXYZ(t,O.x,O.y,O.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=V(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=c(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=V(t,this.array)),t}setX(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=V(t,this.array)),t}setY(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=V(t,this.array)),t}setZ(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=V(t,this.array)),t}setW(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=c(t,this.array),n=c(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array),o=c(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),this.usage!==Nn&&(e.usage=this.usage),e}}class xi extends f{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oi extends f{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class i extends f{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wd=0;const Q=new a,gi=new h,Bt=new t,G=new P,hn=new P,S=new t;class l extends ve{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=q(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fr(e)?Oi:xi)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return void 0!==this.attributes[e]}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;void 0!==t&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(void 0!==n){const t=(new d).getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}const s=this.attributes.tangent;return void 0!==s&&(s.transformDirection(e),s.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return Q.makeRotationFromQuaternion(e),this.applyMatrix4(Q),this}rotateX(e){return Q.makeRotationX(e),this.applyMatrix4(Q),this}rotateY(e){return Q.makeRotationY(e),this.applyMatrix4(Q),this}rotateZ(e){return Q.makeRotationZ(e),this.applyMatrix4(Q),this}translate(e,t,n){return Q.makeTranslation(e,t,n),this.applyMatrix4(Q),this}scale(e,t,n){return Q.makeScale(e,t,n),this.applyMatrix4(Q),this}lookAt(e){return gi.lookAt(e),gi.updateMatrix(),this.applyMatrix4(gi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bt).negate(),this.translate(Bt.x,Bt.y,Bt.z),this}setFromPoints(e){const t=[];for(let n=0,o=e.length;n<o;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new i(t,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new P);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new t(-1/0,-1/0,-1/0),new t(1/0,1/0,1/0));if(void 0!==e){if(this.boundingBox.setFromBufferAttribute(e),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];G.setFromBufferAttribute(s),this.morphTargetsRelative?(S.addVectors(this.boundingBox.min,G.min),this.boundingBox.expandByPoint(S),S.addVectors(this.boundingBox.max,G.max),this.boundingBox.expandByPoint(S)):(this.boundingBox.expandByPoint(G.min),this.boundingBox.expandByPoint(G.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new F);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new t,1/0);if(e){const s=this.boundingSphere.center;if(G.setFromBufferAttribute(e),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(S.addVectors(G.min,hn.min),G.expandByPoint(S),S.addVectors(G.max,hn.max),G.expandByPoint(S)):(G.expandByPoint(hn.min),G.expandByPoint(hn.max))}G.getCenter(s);let t=0;for(let n=0,o=e.count;n<o;n++)S.fromBufferAttribute(e,n),t=Math.max(t,s.distanceToSquared(S));if(n)for(let o=0,a=n.length;o<a;o++){const i=n[o],r=this.morphTargetsRelative;for(let n=0,o=i.count;n<o;n++)S.fromBufferAttribute(i,n),r&&(Bt.fromBufferAttribute(e,n),S.add(Bt)),t=Math.max(t,s.distanceToSquared(S))}this.boundingSphere.radius=Math.sqrt(t),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const x=this.index,s=this.attributes;if(null===x||void 0===s.position||void 0===s.normal||void 0===s.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const e=x.array,v=s.position.array,k=s.normal.array,y=s.uv.array,w=v.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new f(new Float32Array(4*w),4));const u=this.getAttribute("tangent").array,r=[],l=[];for(let e=0;e<w;e++)r[e]=new t,l[e]=new t;const b=new t,h=new t,d=new t,j=new n,i=new n,o=new n,p=new t,g=new t;function E(e,t,n){b.fromArray(v,3*e),h.fromArray(v,3*t),d.fromArray(v,3*n),j.fromArray(y,2*e),i.fromArray(y,2*t),o.fromArray(y,2*n),h.sub(b),d.sub(b),i.sub(j),o.sub(j);const s=1/(i.x*o.y-o.x*i.y);isFinite(s)&&(p.copy(h).multiplyScalar(o.y).addScaledVector(d,-i.y).multiplyScalar(s),g.copy(d).multiplyScalar(i.x).addScaledVector(h,-o.x).multiplyScalar(s),r[e].add(p),r[t].add(p),r[n].add(p),l[e].add(g),l[t].add(g),l[n].add(g))}let a=this.groups;0===a.length&&(a=[{start:0,count:e.length}]);for(let t=0,o=a.length;t<o;++t){const n=a[t],s=n.start;for(let t=s,o=s+n.count;t<o;t+=3)E(e[t+0],e[t+1],e[t+2])}const c=new t,O=new t,m=new t,C=new t;function _(e){m.fromArray(k,3*e),C.copy(m);const t=r[e];c.copy(t),c.sub(m.multiplyScalar(m.dot(t))).normalize(),O.crossVectors(C,t);const n=O.dot(l[e])<0?-1:1;u[4*e]=c.x,u[4*e+1]=c.y,u[4*e+2]=c.z,u[4*e+3]=n}for(let t=0,o=a.length;t<o;++t){const n=a[t],s=n.start;for(let t=s,o=s+n.count;t<o;t+=3)_(e[t+0]),_(e[t+1]),_(e[t+2])}}computeVertexNormals(){const n=this.index,e=this.getAttribute("position");if(void 0!==e){let o=this.getAttribute("normal");if(void 0===o)o=new f(new Float32Array(3*e.count),3),this.setAttribute("normal",o);else for(let e=0,t=o.count;e<t;e++)o.setXYZ(e,0,0,0);const l=new t,i=new t,d=new t,a=new t,r=new t,c=new t,s=new t,u=new t;if(n)for(let t=0,p=n.count;t<p;t+=3){const h=n.getX(t+0),m=n.getX(t+1),f=n.getX(t+2);l.fromBufferAttribute(e,h),i.fromBufferAttribute(e,m),d.fromBufferAttribute(e,f),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),a.fromBufferAttribute(o,h),r.fromBufferAttribute(o,m),c.fromBufferAttribute(o,f),a.add(s),r.add(s),c.add(s),o.setXYZ(h,a.x,a.y,a.z),o.setXYZ(m,r.x,r.y,r.z),o.setXYZ(f,c.x,c.y,c.z)}else for(let t=0,n=e.count;t<n;t+=3)l.fromBufferAttribute(e,t+0),i.fromBufferAttribute(e,t+1),d.fromBufferAttribute(e,t+2),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),o.setXYZ(t+0,s.x,s.y,s.z),o.setXYZ(t+1,s.x,s.y,s.z),o.setXYZ(t+2,s.x,s.y,s.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)S.fromBufferAttribute(e,t),S.normalize(),e.setXYZ(t,S.x,S.y,S.z)}toNonIndexed(){function t(e,t){const s=e.array,n=e.itemSize,a=e.normalized,o=new s.constructor(t.length*n);let i=0,r=0;for(let a=0,c=t.length;a<c;a++){i=e.isInterleavedBufferAttribute?t[a]*e.data.stride+e.offset:t[a]*n;for(let e=0;e<n;e++)o[r++]=s[i++]}return new f(o,n,a)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new l,n=this.index.array,s=this.attributes;for(const o in s){const i=t(s[o],n);e.setAttribute(o,i)}const o=this.morphAttributes;for(const s in o){const i=[],a=o[s];for(let e=0,s=a.length;e<s;e++){const o=t(a[e],n);i.push(o)}e.morphAttributes[s]=i}e.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let t=0,s=i.length;t<s;t++){const n=i[t];e.addGroup(n.start,n.count,n.materialIndex)}return e}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),void 0!==this.parameters){const t=this.parameters;for(const n in t)void 0!==t[n]&&(e[n]=t[n]);return e}e.data={attributes:{}};const t=this.index;null!==t&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const t in s){const n=s[t];e.data.attributes[t]=n.toJSON(e.data)}const o={};let i=!1;for(const n in this.morphAttributes){const s=this.morphAttributes[n],t=[];for(let n=0,o=s.length;n<o;n++){const i=s[n];t.push(i.toJSON(e.data))}t.length>0&&(o[n]=t,i=!0)}i&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const n=this.boundingSphere;return null!==n&&(e.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),e}clone(){return(new this.constructor).copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;null!==n&&this.setIndex(n.clone(t));const s=e.attributes;for(const e in s){const n=s[e];this.setAttribute(e,n.clone(t))}const o=e.morphAttributes;for(const e in o){const n=[],s=o[e];for(let e=0,o=s.length;e<o;e++)n.push(s[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;const i=e.groups;for(let e=0,n=i.length;e<n;e++){const t=i[e];this.addGroup(t.start,t.count,t.materialIndex)}const a=e.boundingBox;null!==a&&(this.boundingBox=a.clone());const r=e.boundingSphere;return null!==r&&(this.boundingSphere=r.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new a,mt=new Tt,Ls=new F,Pc=new t,Ut=new t,qt=new t,Yt=new t,Wo=new t,Vs=new t,$s=new n,Ws=new n,Us=new n,Hc=new t,Vc=new t,dl=new t,Gs=new t,Xs=new t;class k extends h{constructor(e=new l,t=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Vs.set(0,0,0);for(let n=0,r=s.length;n<r;n++){const i=o[n],c=s[n];0!==i&&(Wo.fromBufferAttribute(c,e),a?Vs.addScaledVector(Wo,i):Vs.addScaledVector(Wo.sub(t),i))}t.add(Vs)}return t}raycast(e,t){const n=this.geometry,o=this.material,s=this.matrixWorld;if(void 0!==o){if(null===n.boundingSphere&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),mt.copy(e.ray).recast(e.near),!1===Ls.containsPoint(mt.origin)){if(null===mt.intersectSphere(Ls,Pc))return;if(mt.origin.distanceToSquared(Pc)>(e.far-e.near)**2)return}Lc.copy(s).invert(),mt.copy(e.ray).applyMatrix4(Lc),null!==n.boundingBox&&!1===mt.intersectsBox(n.boundingBox)||this._computeIntersections(e,t,mt)}}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,i=a.index,h=a.attributes.position,c=a.attributes.uv,l=a.attributes.uv1,d=a.attributes.normal,u=a.groups,o=a.drawRange;if(null!==i)if(Array.isArray(r))for(let h=0,m=u.length;h<m;h++){const a=u[h],f=r[a.materialIndex];for(let r=Math.max(a.start,o.start),u=Math.min(i.count,Math.min(a.start+a.count,o.start+o.count));r<u;r+=3)s=Zs(this,f,e,n,c,l,d,i.getX(r),i.getX(r+1),i.getX(r+2)),s&&(s.faceIndex=Math.floor(r/3),s.face.materialIndex=a.materialIndex,t.push(s))}else for(let a=Math.max(0,o.start),u=Math.min(i.count,o.start+o.count);a<u;a+=3)s=Zs(this,r,e,n,c,l,d,i.getX(a),i.getX(a+1),i.getX(a+2)),s&&(s.faceIndex=Math.floor(a/3),t.push(s));else if(void 0!==h)if(Array.isArray(r))for(let a=0,m=u.length;a<m;a++){const i=u[a],f=r[i.materialIndex];for(let a=Math.max(i.start,o.start),r=Math.min(h.count,Math.min(i.start+i.count,o.start+o.count));a<r;a+=3)s=Zs(this,f,e,n,c,l,d,a,a+1,a+2),s&&(s.faceIndex=Math.floor(a/3),s.face.materialIndex=i.materialIndex,t.push(s))}else for(let i=Math.max(0,o.start),a=Math.min(h.count,o.start+o.count);i<a;i+=3)s=Zs(this,r,e,n,c,l,d,i,i+1,i+2),s&&(s.faceIndex=Math.floor(i/3),t.push(s))}}function Zs(e,s,o,i,a,r,c,l,d,u){e.getVertexPosition(l,Ut),e.getVertexPosition(d,qt),e.getVertexPosition(u,Yt);const h=function(e,t,n,s,o,i,a,r){let l;if(l=t.side===R?s.intersectTriangle(a,i,o,!0,r):s.intersectTriangle(o,i,a,t.side===pe,r),null===l)return null;Xs.copy(r),Xs.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Xs);return c<n.near||c>n.far?null:{distance:c,point:Xs.clone(),object:e}}(e,s,o,i,Ut,qt,Yt,Gs);if(h){a&&($s.fromBufferAttribute(a,l),Ws.fromBufferAttribute(a,d),Us.fromBufferAttribute(a,u),h.uv=Y.getInterpolation(Gs,Ut,qt,Yt,$s,Ws,Us,new n)),r&&($s.fromBufferAttribute(r,l),Ws.fromBufferAttribute(r,d),Us.fromBufferAttribute(r,u),h.uv1=Y.getInterpolation(Gs,Ut,qt,Yt,$s,Ws,Us,new n),h.uv2=h.uv1),c&&(Hc.fromBufferAttribute(c,l),Vc.fromBufferAttribute(c,d),dl.fromBufferAttribute(c,u),h.normal=Y.getInterpolation(Gs,Ut,qt,Yt,Hc,Vc,dl,new t),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const e={a:l,b:d,c:u,normal:new t,materialIndex:0};Y.getNormal(Ut,qt,Yt,e.normal),h.face=e}return h}class wt extends l{constructor(e=1,n=1,s=1,o=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:o,heightSegments:a,depthSegments:r};const p=this;o=Math.floor(o),a=Math.floor(a),r=Math.floor(r);const d=[],h=[],m=[],u=[];let l=0,f=0;function c(e,n,s,o,i,a,r,c,g,v,b){const O=a/g,x=r/v,C=a/2,E=r/2,k=c/2,y=g+1,A=v+1;let w=0,_=0;const j=new t;for(let t=0;t<A;t++){const a=t*x-E;for(let r=0;r<y;r++){const l=r*O-C;j[e]=l*o,j[n]=a*i,j[s]=k,h.push(j.x,j.y,j.z),j[e]=0,j[n]=0,j[s]=c>0?1:-1,m.push(j.x,j.y,j.z),u.push(r/g),u.push(1-t/v),w+=1}}for(let e=0;e<v;e++)for(let t=0;t<g;t++){const o=l+t+y*e,n=l+t+y*(e+1),i=l+(t+1)+y*(e+1),s=l+(t+1)+y*e;d.push(o,n,s),d.push(n,i,s),_+=6}p.addGroup(f,_,b),f+=_,l+=w}c("z","y","x",-1,-1,s,n,e,r,a,0),c("z","y","x",1,-1,s,n,-e,r,a,1),c("x","z","y",1,1,e,s,n,o,r,2),c("x","z","y",1,-1,e,s,-n,o,r,3),c("x","y","z",1,-1,e,n,s,o,a,4),c("x","y","z",-1,-1,e,n,-s,o,a,5),this.setIndex(d),this.setAttribute("position",new i(h,3)),this.setAttribute("normal",new i(m,3)),this.setAttribute("uv",new i(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wt(e){const t={};for(const n in e){t[n]={};for(const o in e[n]){const s=e[n][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][o]=null):t[n][o]=s.clone():Array.isArray(s)?t[n][o]=s.slice():t[n][o]=s}}return t}function H(e){const t={};for(let n=0;n<e.length;n++){const s=Wt(e[n]);for(const e in s)t[e]=s[e]}return t}function ml(e){return null===e.getRenderTarget()?e.outputColorSpace:m.workingColorSpace}const bl={clone:Wt,merge:H};class le extends z{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==e&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wt(e.uniforms),this.uniformsGroups=function(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const n=this.uniforms[s].value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const e in this.extensions)!0===this.extensions[e]&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class io extends h{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new a,this.projectionMatrix=new a,this.projectionMatrixInverse=new a,this.coordinateSystem=He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}class M extends io{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*pt*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*st*this.fov);return.5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*pt*Math.atan(Math.tan(.5*st*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,o,i){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=this.near;let t=i*Math.tan(.5*st*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const e=this.view;if(null!==this.view&&this.view.enabled){const i=e.fullWidth,a=e.fullHeight;o+=e.offsetX*s/i,t-=e.offsetY*n/a,s*=e.width/i,n*=e.height/a}const a=this.filmOffset;0!==a&&(o+=i*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,i,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vt=-90;class jl extends h{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new M(Vt,1,e,t);s.layers=this.layers,this.add(s);const o=new M(Vt,1,e,t);o.layers=this.layers,this.add(o);const i=new M(Vt,1,e,t);i.layers=this.layers,this.add(i);const a=new M(Vt,1,e,t);a.layers=this.layers,this.add(a);const r=new M(Vt,1,e,t);r.layers=this.layers,this.add(r);const c=new M(Vt,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const a=this.coordinateSystem,r=this.children.concat(),[e,t,n,s,o,i]=r;for(const e of r)this.remove(e);if(a===He)e.up.set(0,1,0),e.lookAt(1,0,0),t.up.set(0,1,0),t.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),i.up.set(0,1,0),i.lookAt(0,0,-1);else{if(a!==Ot)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);e.up.set(0,-1,0),e.lookAt(-1,0,0),t.up.set(0,-1,0),t.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),i.up.set(0,-1,0),i.lookAt(0,0,-1)}for(const e of r)this.add(e),e.updateMatrixWorld()}update(e,t){null===this.parent&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,i,a,r,c,l]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,i),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,r),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(d,u,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class en extends w{constructor(e,t,n,s,o,i,a,r,c,l){super(e=void 0!==e?e:[],t=void 0!==t?t:we,n,s,o,i,a,r,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yl extends ie{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];void 0!==t.encoding&&(On("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Pe?A:se),this.texture=new en(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,this.texture.minFilter=void 0!==t.minFilter?t.minFilter:_}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wt(5,5,5),o=new le({name:"CubemapFromEquirect",uniforms:Wt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:R,blending:0});o.uniforms.tEquirect.value=t;const s=new k(i,o),a=t.minFilter;return t.minFilter===Xe&&(t.minFilter=_),new jl(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(o)}}const vo=new t,Ql=new t,Xl=new d;class Ee{constructor(e=new t(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=vo.subVectors(n,t).cross(Ql.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(vo),o=this.normal.dot(s);if(0===o)return 0===this.distanceToPoint(e.start)?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/o;return n<0||n>1?null:t.copy(e.start).addScaledVector(s,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xl.getNormalMatrix(e),s=this.coplanarPoint(vo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return(new this.constructor).copy(this)}}const ut=new F,ho=new t;class Jt{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee,o=new Ee,i=new Ee){this.planes=[e,t,n,s,o,i]}set(e,t,n,s,o,i){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(i),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const s=this.planes,n=e.elements,j=n[0],g=n[1],l=n[2],r=n[3],m=n[4],h=n[5],c=n[6],a=n[7],f=n[8],p=n[9],d=n[10],i=n[11],v=n[12],b=n[13],u=n[14],o=n[15];if(s[0].setComponents(r-j,a-m,i-f,o-v).normalize(),s[1].setComponents(r+j,a+m,i+f,o+v).normalize(),s[2].setComponents(r+g,a+h,i+p,o+b).normalize(),s[3].setComponents(r-g,a-h,i-p,o-b).normalize(),s[4].setComponents(r-l,a-c,i-d,o-u).normalize(),t===He)s[5].setComponents(r+l,a+c,i+d,o+u).normalize();else{if(t!==Ot)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);s[5].setComponents(l,c,d,u).normalize()}return this}intersectsObject(e){if(void 0!==e.boundingSphere)null===e.boundingSphere&&e.computeBoundingSphere(),ut.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;null===t.boundingSphere&&t.computeBoundingSphere(),ut.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ut)}intersectsSprite(e){return ut.center.set(0,0,0),ut.radius=.7071067811865476,ut.applyMatrix4(e.matrixWorld),this.intersectsSphere(ut)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const n=t[s];if(ho.x=n.normal.x>0?e.max.x:e.min.x,ho.y=n.normal.y>0?e.max.y:e.min.y,ho.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}}function _l(){let e=null,t=!1,n=null,s=null;function o(t,i){n(t,i),s=e.requestAnimationFrame(o)}return{start:function(){!0!==t&&null!==n&&(s=e.requestAnimationFrame(o),t=!0)},stop:function(){e.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Yl(e,t){const s=t.isWebGL2,n=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),n.get(e)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);const s=n.get(t);s&&(e.deleteBuffer(s.buffer),n.delete(t))},update:function(t,o){if(t.isGLBufferAttribute){const e=n.get(t);return void((!e||e.version<t.version)&&n.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}t.isInterleavedBufferAttribute&&(t=t.data);const i=n.get(t);if(void 0===i)n.set(t,function(t,n){const o=t.array,r=t.usage,c=o.byteLength,a=e.createBuffer();let i;if(e.bindBuffer(n,a),e.bufferData(n,o,r),t.onUploadCallback(),o instanceof Float32Array)i=e.FLOAT;else if(o instanceof Uint16Array)if(t.isFloat16BufferAttribute){if(!s)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");i=e.HALF_FLOAT}else i=e.UNSIGNED_SHORT;else if(o instanceof Int16Array)i=e.SHORT;else if(o instanceof Uint32Array)i=e.UNSIGNED_INT;else if(o instanceof Int32Array)i=e.INT;else if(o instanceof Int8Array)i=e.BYTE;else if(o instanceof Uint8Array)i=e.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);i=e.UNSIGNED_BYTE}return{buffer:a,type:i,bytesPerElement:o.BYTES_PER_ELEMENT,version:t.version,size:c}}(t,o));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");!function(t,n,o){const a=n.array,i=n._updateRange,r=n.updateRanges;if(e.bindBuffer(o,t),-1===i.count&&0===r.length&&e.bufferSubData(o,0,a),0!==r.length){for(let n=0,i=r.length;n<i;n++){const t=r[n];s?e.bufferSubData(o,t.start*a.BYTES_PER_ELEMENT,a,t.start,t.count):e.bufferSubData(o,t.start*a.BYTES_PER_ELEMENT,a.subarray(t.start,t.start+t.count))}n.clearUpdateRanges()}-1!==i.count&&(s?e.bufferSubData(o,i.offset*a.BYTES_PER_ELEMENT,a,i.offset,i.count):e.bufferSubData(o,i.offset*a.BYTES_PER_ELEMENT,a.subarray(i.offset,i.offset+i.count)),i.count=-1),n.onUploadCallback()}(i.buffer,t,o),i.version=t.version}}}}class co extends l{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const h=e/2,m=t/2,a=Math.floor(n),r=Math.floor(s),o=a+1,f=r+1,p=e/a,g=t/r,c=[],d=[],u=[],l=[];for(let e=0;e<f;e++){const t=e*g-m;for(let n=0;n<o;n++){const s=n*p-h;d.push(s,-t,0),u.push(0,0,1),l.push(n/a),l.push(1-e/r)}}for(let e=0;e<r;e++)for(let t=0;t<a;t++){const i=t+o*e,n=t+o*(e+1),r=t+1+o*(e+1),s=t+1+o*e;c.push(i,n,s),c.push(n,r,s)}this.setIndex(c),this.setAttribute("position",new i(d,3)),this.setAttribute("normal",new i(u,3)),this.setAttribute("uv",new i(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.widthSegments,e.heightSegments)}}const r={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},s={common:{diffuse:{value:new o(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new d},alphaMap:{value:null},alphaMapTransform:{value:new d},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new d}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new d}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new d}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new d},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new d},normalScale:{value:new n(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new d},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new d}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new d}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new d}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new o(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new o(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new d},alphaTest:{value:0},uvTransform:{value:new d}},sprite:{diffuse:{value:new o(16777215)},opacity:{value:1},center:{value:new n(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new d},alphaMap:{value:null},alphaMapTransform:{value:new d},alphaTest:{value:0}}},te={basic:{uniforms:H([s.common,s.specularmap,s.envmap,s.aomap,s.lightmap,s.fog]),vertexShader:r.meshbasic_vert,fragmentShader:r.meshbasic_frag},lambert:{uniforms:H([s.common,s.specularmap,s.envmap,s.aomap,s.lightmap,s.emissivemap,s.bumpmap,s.normalmap,s.displacementmap,s.fog,s.lights,{emissive:{value:new o(0)}}]),vertexShader:r.meshlambert_vert,fragmentShader:r.meshlambert_frag},phong:{uniforms:H([s.common,s.specularmap,s.envmap,s.aomap,s.lightmap,s.emissivemap,s.bumpmap,s.normalmap,s.displacementmap,s.fog,s.lights,{emissive:{value:new o(0)},specular:{value:new o(1118481)},shininess:{value:30}}]),vertexShader:r.meshphong_vert,fragmentShader:r.meshphong_frag},standard:{uniforms:H([s.common,s.envmap,s.aomap,s.lightmap,s.emissivemap,s.bumpmap,s.normalmap,s.displacementmap,s.roughnessmap,s.metalnessmap,s.fog,s.lights,{emissive:{value:new o(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:r.meshphysical_vert,fragmentShader:r.meshphysical_frag},toon:{uniforms:H([s.common,s.aomap,s.lightmap,s.emissivemap,s.bumpmap,s.normalmap,s.displacementmap,s.gradientmap,s.fog,s.lights,{emissive:{value:new o(0)}}]),vertexShader:r.meshtoon_vert,fragmentShader:r.meshtoon_frag},matcap:{uniforms:H([s.common,s.bumpmap,s.normalmap,s.displacementmap,s.fog,{matcap:{value:null}}]),vertexShader:r.meshmatcap_vert,fragmentShader:r.meshmatcap_frag},points:{uniforms:H([s.points,s.fog]),vertexShader:r.points_vert,fragmentShader:r.points_frag},dashed:{uniforms:H([s.common,s.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:r.linedashed_vert,fragmentShader:r.linedashed_frag},depth:{uniforms:H([s.common,s.displacementmap]),vertexShader:r.depth_vert,fragmentShader:r.depth_frag},normal:{uniforms:H([s.common,s.bumpmap,s.normalmap,s.displacementmap,{opacity:{value:1}}]),vertexShader:r.meshnormal_vert,fragmentShader:r.meshnormal_frag},sprite:{uniforms:H([s.sprite,s.fog]),vertexShader:r.sprite_vert,fragmentShader:r.sprite_frag},background:{uniforms:{uvTransform:{value:new d},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:r.background_vert,fragmentShader:r.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:r.backgroundCube_vert,fragmentShader:r.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:r.cube_vert,fragmentShader:r.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:r.equirect_vert,fragmentShader:r.equirect_frag},distanceRGBA:{uniforms:H([s.common,s.displacementmap,{referencePosition:{value:new t},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:r.distanceRGBA_vert,fragmentShader:r.distanceRGBA_frag},shadow:{uniforms:H([s.lights,s.fog,{color:{value:new o(0)},opacity:{value:1}}]),vertexShader:r.shadow_vert,fragmentShader:r.shadow_frag}};te.physical={uniforms:H([te.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new d},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new d},clearcoatNormalScale:{value:new n(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new d},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new d},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new d},sheen:{value:0},sheenColor:{value:new o(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new d},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new d},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new d},transmissionSamplerSize:{value:new n},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new d},attenuationDistance:{value:0},attenuationColor:{value:new o(0)},specularColor:{value:new o(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new d},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new d},anisotropyVector:{value:new n},anisotropyMap:{value:null},anisotropyMapTransform:{value:new d}}]),vertexShader:r.meshphysical_vert,fragmentShader:r.meshphysical_frag};const ao={r:0,b:0,g:0};function ql(e,t,n,s,i,a,r){const u=new o(0);let l,c,d=!0===a?0:1,h=null,f=0,p=null;function v(t,n){t.getRGB(ao,ml(e)),s.buffers.color.setClear(ao.r,ao.g,ao.b,n,r)}return{getClearColor:function(){return u},setClearColor:function(e,t=1){u.set(e),d=t,v(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(e){d=e,v(u,d)},render:function(o,a){let j=!1,b=!0===a.isScene?a.background:null;b&&b.isTexture&&(b=(a.backgroundBlurriness>0?n:t).get(b)),null===b?v(u,d):b&&b.isColor&&(v(b,1),j=!0);const y=e.xr.getEnvironmentBlendMode();"additive"===y?s.buffers.color.setClear(0,0,0,1,r):"alpha-blend"===y&&s.buffers.color.setClear(0,0,0,0,r),(e.autoClear||j)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),b&&(b.isCubeTexture||b.mapping===_t)?(void 0===c&&(c=new k(new wt(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:Wt(te.backgroundCube.uniforms),vertexShader:te.backgroundCube.vertexShader,fragmentShader:te.backgroundCube.fragmentShader,side:R,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&!1===b.isRenderTargetTexture?-1:1,c.material.uniforms.backgroundBlurriness.value=a.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=a.backgroundIntensity,c.material.toneMapped=m.getTransfer(b.colorSpace)!==g,h===b&&f===b.version&&p===e.toneMapping||(c.material.needsUpdate=!0,h=b,f=b.version,p=e.toneMapping),c.layers.enableAll(),o.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(void 0===l&&(l=new k(new co(2,2),new le({name:"BackgroundMaterial",uniforms:Wt(te.background.uniforms),vertexShader:te.background.vertexShader,fragmentShader:te.background.fragmentShader,side:pe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=a.backgroundIntensity,l.material.toneMapped=m.getTransfer(b.colorSpace)!==g,!0===b.matrixAutoUpdate&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),h===b&&f===b.version&&p===e.toneMapping||(l.material.needsUpdate=!0,h=b,f=b.version,p=e.toneMapping),l.layers.enableAll(),o.unshift(l,l.geometry,l.material,0,0,null))}}}function Kl(e,t,n,s){const y=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=s.isWebGL2?null:t.get("OES_vertex_array_object"),j=s.isWebGL2||null!==r,i={},a=m(null);let o=a,l=!1;function h(t){return s.isWebGL2?e.bindVertexArray(t):r.bindVertexArrayOES(t)}function c(t){return s.isWebGL2?e.deleteVertexArray(t):r.deleteVertexArrayOES(t)}function m(e){const t=[],n=[],s=[];for(let e=0;e<y;e++)t[e]=0,n[e]=0,s[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:s,object:e,attributes:{},index:null}}function f(){const e=o.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function d(e){u(e,0)}function u(n,i){const c=o.newAttributes,a=o.enabledAttributes,r=o.attributeDivisors;c[n]=1,0===a[n]&&(e.enableVertexAttribArray(n),a[n]=1),r[n]!==i&&((s.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](n,i),r[n]=i)}function p(){const n=o.newAttributes,t=o.enabledAttributes;for(let s=0,o=t.length;s<o;s++)t[s]!==n[s]&&(e.disableVertexAttribArray(s),t[s]=0)}function g(t,n,s,o,i,a,r){!0===r?e.vertexAttribIPointer(t,n,s,i,a):e.vertexAttribPointer(t,n,s,o,i,a)}function v(){b(),l=!0,o!==a&&(o=a,h(o.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:function(a,c,v,b,y){let _=!1;if(j){const t=function(t,n,o){const d=!0===o.wireframe;let a=i[t.id];void 0===a&&(a={},i[t.id]=a);let c=a[n.id];void 0===c&&(c={},a[n.id]=c);let l=c[d];return void 0===l&&(l=m(s.isWebGL2?e.createVertexArray():r.createVertexArrayOES()),c[d]=l),l}(b,v,c);o!==t&&(o=t,h(o.object)),_=function(e,t,n,s){const r=o.attributes,c=t.attributes;let i=0;const a=n.getAttributes();for(const t in a)if(a[t].location>=0){const s=r[t];let n=c[t];if(void 0===n&&("instanceMatrix"===t&&e.instanceMatrix&&(n=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(n=e.instanceColor)),void 0===s)return!0;if(s.attribute!==n)return!0;if(n&&s.data!==n.data)return!0;i++}return o.attributesNum!==i||o.index!==s}(a,b,v,y),_&&function(e,t,n,s){const i={},c=t.attributes;let a=0;const r=n.getAttributes();for(const t in r)if(r[t].location>=0){let n=c[t];void 0===n&&("instanceMatrix"===t&&e.instanceMatrix&&(n=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(n=e.instanceColor));const s={};s.attribute=n,n&&n.data&&(s.data=n.data),i[t]=s,a++}o.attributes=i,o.attributesNum=a,o.index=s}(a,b,v,y)}else{const e=!0===c.wireframe;o.geometry===b.id&&o.program===v.id&&o.wireframe===e||(o.geometry=b.id,o.program=v.id,o.wireframe=e,_=!0)}null!==y&&n.update(y,e.ELEMENT_ARRAY_BUFFER),(_||l)&&(l=!1,function(o,i,a,r){if(!1===s.isWebGL2&&(o.isInstancedMesh||r.isInstancedBufferGeometry)&&null===t.get("ANGLE_instanced_arrays"))return;f();const h=r.attributes,c=a.getAttributes(),l=i.defaultAttributeValues;for(const i in c){const t=c[i];if(t.location>=0){let a=h[i];if(void 0===a&&("instanceMatrix"===i&&o.instanceMatrix&&(a=o.instanceMatrix),"instanceColor"===i&&o.instanceColor&&(a=o.instanceColor)),void 0!==a){const m=a.normalized,i=a.itemSize,c=n.get(a);if(void 0===c)continue;const f=c.buffer,l=c.type,h=c.bytesPerElement,p=!0===s.isWebGL2&&(l===e.INT||l===e.UNSIGNED_INT||a.gpuType===pi);if(a.isInterleavedBufferAttribute){const n=a.data,s=n.stride,c=a.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<t.locationSize;e++)u(t.location+e,n.meshPerAttribute);!0!==o.isInstancedMesh&&void 0===r._maxInstanceCount&&(r._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<t.locationSize;e++)d(t.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<t.locationSize;e++)g(t.location+e,i/t.locationSize,l,m,s*h,(c+i/t.locationSize*e)*h,p)}else{if(a.isInstancedBufferAttribute){for(let e=0;e<t.locationSize;e++)u(t.location+e,a.meshPerAttribute);!0!==o.isInstancedMesh&&void 0===r._maxInstanceCount&&(r._maxInstanceCount=a.meshPerAttribute*a.count)}else for(let e=0;e<t.locationSize;e++)d(t.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<t.locationSize;e++)g(t.location+e,i/t.locationSize,l,m,i*h,i/t.locationSize*e*h,p)}}else if(void 0!==l){const n=l[i];if(void 0!==n)switch(n.length){case 2:e.vertexAttrib2fv(t.location,n);break;case 3:e.vertexAttrib3fv(t.location,n);break;case 4:e.vertexAttrib4fv(t.location,n);break;default:e.vertexAttrib1fv(t.location,n)}}}}p()}(a,c,v,b),null!==y&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(y).buffer))},reset:v,resetDefaultState:b,dispose:function(){v();for(const t in i){const e=i[t];for(const n in e){const t=e[n];for(const e in t)c(t[e].object),delete t[e];delete e[n]}delete i[t]}},releaseStatesOfGeometry:function(e){if(void 0===i[e.id])return;const t=i[e.id];for(const n in t){const e=t[n];for(const t in e)c(e[t].object),delete e[t];delete t[n]}delete i[e.id]},releaseStatesOfProgram:function(e){for(const s in i){const t=i[s];if(void 0===t[e.id])continue;const n=t[e.id];for(const e in n)c(n[e].object),delete n[e];delete t[e.id]}},initAttributes:f,enableAttribute:d,disableUnusedAttributes:p}}function Wl(e,t,n,s){const i=s.isWebGL2;let o;this.setMode=function(e){o=e},this.render=function(t,s){e.drawArrays(o,t,s),n.update(s,o,1)},this.renderInstances=function(s,a,r){if(0===r)return;let c,l;if(i)c=e,l="drawArraysInstanced";else if(c=t.get("ANGLE_instanced_arrays"),l="drawArraysInstancedANGLE",null===c)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[l](o,s,a,r),n.update(a,o,r)},this.renderMultiDraw=function(e,s,i){if(0===i)return;const a=t.get("WEBGL_multi_draw");if(null===a)for(let t=0;t<i;t++)this.render(e[t],s[t]);else{a.multiDrawArraysWEBGL(o,e,0,s,0,i);let t=0;for(let e=0;e<i;e++)t+=s[e];n.update(t,o,1)}}}function Bl(e,t,n){let s;function c(t){if("highp"===t){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const i="undefined"!=typeof WebGL2RenderingContext&&"WebGL2RenderingContext"===e.constructor.name;let o=void 0!==n.precision?n.precision:"highp";const a=c(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const u=i||t.has("WEBGL_draw_buffers"),h=!0===n.logarithmicDepthBuffer,m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),r=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),g=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),j=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),l=r>0,d=i||t.has("OES_texture_float");return{isWebGL2:i,drawBuffers:u,getMaxAnisotropy:function(){if(void 0!==s)return s;if(!0===t.has("EXT_texture_filter_anisotropic")){const n=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s},getMaxPrecision:c,precision:o,logarithmicDepthBuffer:h,maxTextures:m,maxVertexTextures:r,maxTextureSize:f,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:j,vertexTextures:l,floatFragmentTextures:d,floatVertexTextures:l&&d,maxSamples:i?e.getParameter(e.MAX_SAMPLES):0}}function Il(e){const o=this;let i=null,n=0,r=!1,s=!1;const c=new Ee,l=new d,t={value:null,needsUpdate:!1};function a(e,n,s,i){const r=null!==e?e.length:0;let a=null;if(0!==r){if(a=t.value,!0!==i||null===a){const t=s+4*r,o=n.matrixWorldInverse;l.getNormalMatrix(o),(null===a||a.length<t)&&(a=new Float32Array(t));for(let t=0,n=s;t!==r;++t,n+=4)c.copy(e[t]).applyMatrix4(o,l),c.normal.toArray(a,n),a[n+3]=c.constant}t.value=a,t.needsUpdate=!0}return o.numPlanes=r,o.numIntersection=0,a}this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){const s=0!==e.length||t||0!==n||r;return r=t,n=e.length,s},this.beginShadows=function(){s=!0,a(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(e,t){i=a(e,t,0)},this.setState=function(c,l,d){const u=c.clippingPlanes,m=c.clipIntersection,f=c.clipShadows,h=e.get(c);if(!r||null===u||0===u.length||s&&!f)s?a(null):function(){t.value!==i&&(t.value=i,t.needsUpdate=n>0),o.numPlanes=n,o.numIntersection=0}();else{const o=s?0:n,r=4*o;let e=h.clippingState||null;t.value=e,e=a(u,l,r,d);for(let t=0;t!==r;++t)e[t]=i[t];h.clippingState=e,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=o}}}function Hl(e){let t=new WeakMap;function n(e,t){return t===Zt?e.mapping=we:t===Tn&&(e.mapping=Fe),e}function s(e){const n=e.target;n.removeEventListener("dispose",s);const o=t.get(n);void 0!==o&&(t.delete(n),o.dispose())}return{get:function(o){if(o&&o.isTexture){const i=o.mapping;if(i===Zt||i===Tn){if(t.has(o))return n(t.get(o).texture,o.mapping);{const i=o.image;if(i&&i.height>0){const a=new yl(i.height/2);return a.fromEquirectangularTexture(e,o),t.set(o,a),o.addEventListener("dispose",s),n(a.texture,o.mapping)}return null}}}return o},dispose:function(){t=new WeakMap}}}class to extends io{constructor(e=-1,t=1,n=1,s=-1,o=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=i,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,i){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let e=o-n,a=o+n,t=i+s,r=i-s;if(null!==this.view&&this.view.enabled){const n=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;e+=n*this.view.offsetX,a=e+n*this.view.width,t-=s*this.view.offsetY,r=t-s*this.view.height}this.projectionMatrix.makeOrthographic(e,a,t,r,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}}const El=[.125,.215,.35,.446,.526,.582],on=20,No=new to,kl=new o;let Ro=null,Po=0,Ho=0;const dt=(1+Math.sqrt(5))/2,Ht=1/dt,Al=[new t(1,1,1),new t(-1,1,1),new t(1,1,-1),new t(-1,1,-1),new t(0,dt,Ht),new t(0,dt,-Ht),new t(Ht,0,dt),new t(-Ht,0,dt),new t(dt,Ht,0),new t(-dt,Ht,0)];class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ro=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro,Po,Ho),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===we||e.mapping===Fe?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:_,minFilter:_,generateMipmaps:!1,type:Dt,format:X,colorSpace:ce,depthBuffer:!1},o=ac(e,n,s);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=ac(e,n,s);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(e){const n=[],s=[],o=[];let t=e;const i=e-4+1+El.length;for(let d=0;d<i;d++){const p=Math.pow(2,t);s.push(p);let b=1/p;d>e-4?b=El[d-e+4-1]:0===d&&(b=0),o.push(b);const j=1/(p-2),r=-j,c=1+j,O=[r,r,c,r,c,c,r,r,c,c,r,c],h=6,a=6,m=3,g=2,v=1,y=new Float32Array(m*a*h),_=new Float32Array(g*a*h),w=new Float32Array(v*a*h);for(let e=0;e<h;e++){const t=e%3*2/3-1,n=e>2?0:-1,s=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];y.set(s,m*a*e),_.set(O,g*a*e);const o=[e,e,e,e,e,e];w.set(o,v*a*e)}const u=new l;u.setAttribute("position",new f(y,m)),u.setAttribute("uv",new f(_,g)),u.setAttribute("faceIndex",new f(w,v)),n.push(u),t>4&&t--}return{lodPlanes:n,sizeLods:s,sigmas:o}}(o),this._blurMaterial=function(e,n,s){const o=new Float32Array(on),i=new t(0,1,0),a=new le({name:"SphericalGaussianBlur",defines:{n:on,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/s,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1});return a}(o,e,n))}return o}_compileMaterial(e){const t=new k(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,s){const i=new M(90,1,t,n),r=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],o=this._renderer,h=o.autoClear,m=o.toneMapping;o.getClearColor(kl),o.toneMapping=ge,o.autoClear=!1;const l=new Me({name:"PMREM.Background",side:R,depthWrite:!1,depthTest:!1}),d=new k(new wt,l);let u=!1;const a=e.background;a?a.isColor&&(l.color.copy(a),e.background=null,u=!0):(l.color.copy(kl),u=!0);for(let t=0;t<6;t++){const a=t%3;0===a?(i.up.set(0,r[t],0),i.lookAt(c[t],0,0)):1===a?(i.up.set(0,0,r[t]),i.lookAt(0,c[t],0)):(i.up.set(0,r[t],0),i.lookAt(0,0,c[t]));const n=this._cubeSize;Is(s,a*n,t>2?n:0,n,n),o.setRenderTarget(s),u&&o.render(d,i),o.render(e,i)}d.geometry.dispose(),d.material.dispose(),o.toneMapping=m,o.autoClear=h,e.background=a}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===we||e.mapping===Fe;s?(null===this._cubemapMaterial&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=Fl());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new k(this._lodPlanes[0],o);o.uniforms.envMap.value=e;const i=this._cubeSize;Is(t,0,0,3*i,2*i),n.setRenderTarget(t),n.render(a,No)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){const n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),s=Al[(t-1)%Al.length];this._blur(e,t-1,t,n,s)}t.autoClear=n}_blur(e,t,n,s,o){const i=this._pingPongRenderTarget;this._halfBlur(e,i,t,n,s,"latitudinal",o),this._halfBlur(i,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,i,a){const m=this._renderer,f=this._blurMaterial;"latitudinal"!==i&&"longitudinal"!==i&&console.error("blur direction must be either latitudinal or longitudinal!");const v=new k(this._lodPlanes[s],f),r=f.uniforms,b=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*b):2*Math.PI/39,g=o/p,l=isFinite(o)?1+Math.floor(3*g):on;l>on&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${l} samples when the maximum is set to 20`);const c=[];let u=0;for(let e=0;e<on;++e){const n=e/g,t=Math.exp(-n*n/2);c.push(t),0===e?u+=t:e<l&&(u+=2*t)}for(let e=0;e<c.length;e++)c[e]=c[e]/u;r.envMap.value=e.texture,r.samples.value=l,r.weights.value=c,r.latitudinal.value="latitudinal"===i,a&&(r.poleAxis.value=a);const{_lodMax:h}=this;r.dTheta.value=p,r.mipInt.value=h-n;const d=this._sizeLods[s];Is(t,3*d*(s>h-4?s-h+4:0),4*(this._cubeSize-d),3*d,2*d),m.setRenderTarget(t),m.render(v,No)}}function ac(e,t,n){const s=new ie(e,t,n);return s.texture.mapping=_t,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Is(e,t,n,s,o){e.viewport.set(t,n,s,o),e.scissor.set(t,n,s,o)}function Fl(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sl(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nl(e){let n=new WeakMap,t=null;function s(e){const t=e.target;t.removeEventListener("dispose",s);const o=n.get(t);void 0!==o&&(n.delete(t),o.dispose())}return{get:function(o){if(o&&o.isTexture){const i=o.mapping,a=i===Zt||i===Tn,r=i===we||i===Fe;if(a||r){if(o.isRenderTargetTexture&&!0===o.needsPMREMUpdate){o.needsPMREMUpdate=!1;let s=n.get(o);return null===t&&(t=new $o(e)),s=a?t.fromEquirectangular(o,s):t.fromCubemap(o,s),n.set(o,s),s.texture}if(n.has(o))return n.get(o).texture;{const i=o.image;if(a&&i&&i.height>0||r&&i&&function(e){let t=0;const n=6;for(let s=0;s<n;s++)void 0!==e[s]&&t++;return t===n}(i)){null===t&&(t=new $o(e));const i=a?t.fromEquirectangular(o):t.fromCubemap(o);return n.set(o,i),o.addEventListener("dispose",s),i.texture}return null}}}return o},dispose:function(){n=new WeakMap,null!==t&&(t.dispose(),t=null)}}}function Jl(e){const n={};function t(t){if(void 0!==n[t])return n[t];let s;switch(t){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(t)}return n[t]=s,s}return{has:function(e){return null!==t(e)},init:function(e){e.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(e){const n=t(e);return null===n&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),n}}}function ed(e,t,n,s){const i={},o=new WeakMap;function a(e){const r=e.target;null!==r.index&&t.remove(r.index);for(const e in r.attributes)t.remove(r.attributes[e]);for(const n in r.morphAttributes){const e=r.morphAttributes[n];for(let n=0,s=e.length;n<s;n++)t.remove(e[n])}r.removeEventListener("dispose",a),delete i[r.id];const c=o.get(r);c&&(t.remove(c),o.delete(r)),s.releaseStatesOfGeometry(r),!0===r.isInstancedBufferGeometry&&delete r._maxInstanceCount,n.memory.geometries--}function r(e){const n=[],s=e.index,i=e.attributes.position;let a=0;if(null!==s){const e=s.array;a=s.version;for(let t=0,a=e.length;t<a;t+=3){const s=e[t+0],o=e[t+1],i=e[t+2];n.push(s,o,o,i,i,s)}}else{if(void 0===i)return;{const e=i.array;a=i.version;for(let t=0,a=e.length/3-1;t<a;t+=3){const s=t+0,o=t+1,i=t+2;n.push(s,o,o,i,i,s)}}}const r=new(fr(n)?Oi:xi)(n,1);r.version=a;const c=o.get(e);c&&t.remove(c),o.set(e,r)}return{get:function(e,t){return!0===i[t.id]||(t.addEventListener("dispose",a),i[t.id]=!0,n.memory.geometries++),t},update:function(n){const s=n.attributes;for(const n in s)t.update(s[n],e.ARRAY_BUFFER);const o=n.morphAttributes;for(const s in o){const n=o[s];for(let s=0,o=n.length;s<o;s++)t.update(n[s],e.ARRAY_BUFFER)}},getWireframeAttribute:function(e){const t=o.get(e);if(t){const n=e.index;null!==n&&t.version<n.version&&r(e)}else r(e);return o.get(e)}}}function nd(e,t,n,s){const r=s.isWebGL2;let o,i,a;this.setMode=function(e){o=e},this.setIndex=function(e){i=e.type,a=e.bytesPerElement},this.render=function(t,s){e.drawElements(o,s,i,t*a),n.update(s,o,1)},this.renderInstances=function(s,c,l){if(0===l)return;let d,u;if(r)d=e,u="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===d)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](o,c,i,s*a,l),n.update(c,o,l)},this.renderMultiDraw=function(e,s,r){if(0===r)return;const c=t.get("WEBGL_multi_draw");if(null===c)for(let t=0;t<r;t++)this.render(e[t]/a,s[t]);else{c.multiDrawElementsWEBGL(o,s,0,i,e,0,r);let t=0;for(let e=0;e<r;e++)t+=s[e];n.update(t,o,1)}}}function sd(e){const t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(n,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(n/3);break;case e.LINES:t.lines+=o*(n/2);break;case e.LINE_STRIP:t.lines+=o*(n-1);break;case e.LINE_LOOP:t.lines+=o*n;break;case e.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s)}}}}function od(e,t){return e[0]-t[0]}function id(e,t){return Math.abs(t[1])-Math.abs(e[1])}function ad(e,t,s){const c={},a=new Float32Array(8),r=new WeakMap,o=new p,i=[];for(let e=0;e<8;e++)i[e]=[e,0];return{update:function(l,d,u){const h=l.morphTargetInfluences;if(!0===t.isWebGL2){const c=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,a=void 0!==c?c.length:0;let i=r.get(d);if(void 0===i||i.count!==a){void 0!==i&&i.texture.dispose();const h=void 0!==d.morphAttributes.position,f=void 0!==d.morphAttributes.normal,p=void 0!==d.morphAttributes.color,g=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let c=0;!0===h&&(c=1),!0===f&&(c=2),!0===p&&(c=3);let s=d.attributes.position.count*c,l=1;s>t.maxTextureSize&&(l=Math.ceil(s/t.maxTextureSize),s=t.maxTextureSize);const e=new Float32Array(s*l*4*a),u=new eo(e,s,l,a);u.type=Z,u.needsUpdate=!0;const j=4*c;for(let n=0;n<a;n++){const i=g[n],c=v[n],r=b[n],t=s*l*4*n;for(let s=0;s<i.count;s++){const n=s*j;!0===h&&(o.fromBufferAttribute(i,s),e[t+n+0]=o.x,e[t+n+1]=o.y,e[t+n+2]=o.z,e[t+n+3]=0),!0===f&&(o.fromBufferAttribute(c,s),e[t+n+4]=o.x,e[t+n+5]=o.y,e[t+n+6]=o.z,e[t+n+7]=0),!0===p&&(o.fromBufferAttribute(r,s),e[t+n+8]=o.x,e[t+n+9]=o.y,e[t+n+10]=o.z,e[t+n+11]=4===r.itemSize?o.w:1)}}function m(){u.dispose(),r.delete(d),d.removeEventListener("dispose",m)}i={count:a,texture:u,size:new n(s,l)},r.set(d,i),d.addEventListener("dispose",m)}let l=0;for(let e=0;e<h.length;e++)l+=h[e];const f=d.morphTargetsRelative?1:1-l;u.getUniforms().setValue(e,"morphTargetBaseInfluence",f),u.getUniforms().setValue(e,"morphTargetInfluences",h),u.getUniforms().setValue(e,"morphTargetsTexture",i.texture,s),u.getUniforms().setValue(e,"morphTargetsTextureSize",i.size)}else{const n=void 0===h?0:h.length;let t=c[d.id];if(void 0===t||t.length!==n){t=[];for(let e=0;e<n;e++)t[e]=[e,0];c[d.id]=t}for(let e=0;e<n;e++){const s=t[e];s[0]=e,s[1]=h[e]}t.sort(id);for(let e=0;e<8;e++)e<n&&t[e][1]?(i[e][0]=t[e][0],i[e][1]=t[e][1]):(i[e][0]=Number.MAX_SAFE_INTEGER,i[e][1]=0);i.sort(od);const s=d.morphAttributes.position,o=d.morphAttributes.normal;let r=0;for(let e=0;e<8;e++){const c=i[e],t=c[0],n=c[1];t!==Number.MAX_SAFE_INTEGER&&n?(s&&d.getAttribute("morphTarget"+e)!==s[t]&&d.setAttribute("morphTarget"+e,s[t]),o&&d.getAttribute("morphNormal"+e)!==o[t]&&d.setAttribute("morphNormal"+e,o[t]),a[e]=n,r+=n):(s&&!0===d.hasAttribute("morphTarget"+e)&&d.deleteAttribute("morphTarget"+e),o&&!0===d.hasAttribute("morphNormal"+e)&&d.deleteAttribute("morphNormal"+e),a[e]=0)}const l=d.morphTargetsRelative?1:1-r;u.getUniforms().setValue(e,"morphTargetBaseInfluence",l),u.getUniforms().setValue(e,"morphTargetInfluences",a)}}}}function rd(e,t,n,s){let o=new WeakMap;function i(e){const t=e.target;t.removeEventListener("dispose",i),n.remove(t.instanceMatrix),null!==t.instanceColor&&n.remove(t.instanceColor)}return{update:function(a){const r=s.render.frame,l=a.geometry,c=t.get(a,l);if(o.get(c)!==r&&(t.update(c),o.set(c,r)),a.isInstancedMesh&&(!1===a.hasEventListener("dispose",i)&&a.addEventListener("dispose",i),o.get(a)!==r&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),null!==a.instanceColor&&n.update(a.instanceColor,e.ARRAY_BUFFER),o.set(a,r))),a.isSkinnedMesh){const e=a.skeleton;o.get(e)!==r&&(e.update(),o.set(e,r))}return c},dispose:function(){o=new WeakMap}}}class oi extends w{constructor(e,t,n,s,o,i,a,r,c,l){if((l=void 0!==l?l:De)!==De&&l!==rt)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===n&&l===De&&(n=ue),void 0===n&&l===rt&&(n=ke),super(null,s,o,i,a,r,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=void 0!==a?a:C,this.minFilter=void 0!==r?r:C,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return null!==this.compareFunction&&(t.compareFunction=this.compareFunction),t}}const cl=new w,rl=new oi(1,1);rl.compareFunction=515;const al=new eo,il=new Oa,ol=new en,sl=[],nl=[],el=new Float32Array(16),Jc=new Float32Array(9),Zc=new Float32Array(4);function xt(e,t,n){const o=e[0];if(o<=0||o>0)return e;const i=t*n;let s=sl[i];if(void 0===s&&(s=new Float32Array(i),sl[i]=s),0!==t){o.toArray(s,0);for(let o=1,i=0;o!==t;++o)i+=n,e[o].toArray(s,i)}return s}function E(e,t){if(e.length!==t.length)return!1;for(let n=0,s=e.length;n<s;n++)if(e[n]!==t[n])return!1;return!0}function x(e,t){for(let n=0,s=t.length;n<s;n++)e[n]=t[n]}function ks(e,t){let n=nl[t];void 0===n&&(n=new Int32Array(t),nl[t]=n);for(let s=0;s!==t;++s)n[s]=e.allocateTextureUnit();return n}function cd(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ld(e,t){const n=this.cache;if(void 0!==t.x)n[0]===t.x&&n[1]===t.y||(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(E(n,t))return;e.uniform2fv(this.addr,t),x(n,t)}}function dd(e,t){const n=this.cache;if(void 0!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(void 0!==t.r)n[0]===t.r&&n[1]===t.g&&n[2]===t.b||(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(E(n,t))return;e.uniform3fv(this.addr,t),x(n,t)}}function ud(e,t){const n=this.cache;if(void 0!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(E(n,t))return;e.uniform4fv(this.addr,t),x(n,t)}}function hd(e,t){const n=this.cache,s=t.elements;if(void 0===s){if(E(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),x(n,t)}else{if(E(n,s))return;Zc.set(s),e.uniformMatrix2fv(this.addr,!1,Zc),x(n,s)}}function md(e,t){const n=this.cache,s=t.elements;if(void 0===s){if(E(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),x(n,t)}else{if(E(n,s))return;Jc.set(s),e.uniformMatrix3fv(this.addr,!1,Jc),x(n,s)}}function fd(e,t){const n=this.cache,s=t.elements;if(void 0===s){if(E(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),x(n,t)}else{if(E(n,s))return;el.set(s),e.uniformMatrix4fv(this.addr,!1,el),x(n,s)}}function pd(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gd(e,t){const n=this.cache;if(void 0!==t.x)n[0]===t.x&&n[1]===t.y||(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(E(n,t))return;e.uniform2iv(this.addr,t),x(n,t)}}function vd(e,t){const n=this.cache;if(void 0!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(E(n,t))return;e.uniform3iv(this.addr,t),x(n,t)}}function bd(e,t){const n=this.cache;if(void 0!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(E(n,t))return;e.uniform4iv(this.addr,t),x(n,t)}}function yd(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function _d(e,t){const n=this.cache;if(void 0!==t.x)n[0]===t.x&&n[1]===t.y||(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(E(n,t))return;e.uniform2uiv(this.addr,t),x(n,t)}}function Od(e,t){const n=this.cache;if(void 0!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(E(n,t))return;e.uniform3uiv(this.addr,t),x(n,t)}}function kd(e,t){const n=this.cache;if(void 0!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(E(n,t))return;e.uniform4uiv(this.addr,t),x(n,t)}}function Ad(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s);const i=this.type===e.SAMPLER_2D_SHADOW?rl:cl;n.setTexture2D(t||i,s)}function Sd(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture3D(t||il,s)}function Td(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTextureCube(t||ol,s)}function Dd(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture2DArray(t||al,s)}function Nd(e,t){e.uniform1fv(this.addr,t)}function Ld(e,t){const n=xt(t,this.size,2);e.uniform2fv(this.addr,n)}function Id(e,t){const n=xt(t,this.size,3);e.uniform3fv(this.addr,n)}function Vd(e,t){const n=xt(t,this.size,4);e.uniform4fv(this.addr,n)}function Wd(e,t){const n=xt(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ud(e,t){const n=xt(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Kd(e,t){const n=xt(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Gd(e,t){e.uniform1iv(this.addr,t)}function Xd(e,t){e.uniform2iv(this.addr,t)}function eu(e,t){e.uniform3iv(this.addr,t)}function nu(e,t){e.uniform4iv(this.addr,t)}function ou(e,t){e.uniform1uiv(this.addr,t)}function iu(e,t){e.uniform2uiv(this.addr,t)}function cu(e,t){e.uniform3uiv(this.addr,t)}function lu(e,t){e.uniform4uiv(this.addr,t)}function hu(e,t,n){const o=this.cache,i=t.length,s=ks(n,i);E(o,s)||(e.uniform1iv(this.addr,s),x(o,s));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||cl,s[e])}function mu(e,t,n){const o=this.cache,i=t.length,s=ks(n,i);E(o,s)||(e.uniform1iv(this.addr,s),x(o,s));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||il,s[e])}function gu(e,t,n){const o=this.cache,i=t.length,s=ks(n,i);E(o,s)||(e.uniform1iv(this.addr,s),x(o,s));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ol,s[e])}function vu(e,t,n){const o=this.cache,i=t.length,s=ks(n,i);E(o,s)||(e.uniform1iv(this.addr,s),x(o,s));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||al,s[e])}class yu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(e){switch(e){case 5126:return cd;case 35664:return ld;case 35665:return dd;case 35666:return ud;case 35674:return hd;case 35675:return md;case 35676:return fd;case 5124:case 35670:return pd;case 35667:case 35671:return gd;case 35668:case 35672:return vd;case 35669:case 35673:return bd;case 5125:return yd;case 36294:return _d;case 36295:return Od;case 36296:return kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ad;case 35679:case 36299:case 36307:return Sd;case 35680:case 36300:case 36308:case 36293:return Td;case 36289:case 36303:case 36311:case 36292:return Dd}}(t.type)}}class _u{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(e){switch(e){case 5126:return Nd;case 35664:return Ld;case 35665:return Id;case 35666:return Vd;case 35674:return Wd;case 35675:return Ud;case 35676:return Kd;case 5124:case 35670:return Gd;case 35667:case 35671:return Xd;case 35668:case 35672:return eu;case 35669:case 35673:return nu;case 5125:return ou;case 36294:return iu;case 36295:return cu;case 36296:return lu;case 35678:case 36198:case 36298:case 36306:case 35682:return hu;case 35679:case 36299:case 36307:return mu;case 35680:case 36300:case 36308:case 36293:return gu;case 36289:case 36303:case 36311:case 36292:return vu}}(t.type)}}class wu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const i=s[o];i.setValue(e,t[i.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Nr(e,t){e.seq.push(t),e.map[t.id]=t}function xu(e,t,n){const s=e.name,o=s.length;for(aa.lastIndex=0;;){const a=aa.exec(s),c=aa.lastIndex;let i=a[1];const l="]"===a[2],r=a[3];if(l&&(i|=0),void 0===r||"["===r&&c+2===o){Nr(n,void 0===r?new yu(i,e,t):new _u(i,e,t));break}{let e=n.map[i];void 0===e&&(e=new wu(i),Nr(n,e)),n=e}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s);xu(o,e.getUniformLocation(t,o.name),this)}}setValue(e,t,n,s){const o=this.map[t];void 0!==o&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];void 0!==s&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const i=t[o],a=n[i.id];!1!==a.needsUpdate&&i.setValue(e,a.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Er(e,t,n){const s=e.createShader(t);return e.shaderSource(s,n),e.compileShader(s),s}const Eu=37297;let ku=0;function yr(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&""===s)return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const i=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+function(e,t){const n=e.split(`
`),s=[],o=Math.max(t-6,0),i=Math.min(t+6,n.length);for(let e=o;e<i;e++){const a=e+1;s.push(`${a===t?">":" "} ${a}: ${n[e]}`)}return s.join(`
`)}(e.getShaderSource(t),i)}return s}function Su(e,t){const n=function(e){const n=m.getPrimaries(m.workingColorSpace),s=m.getPrimaries(e);let t;switch(n===s?t="":n===Dn&&s===Fn?t="LinearDisplayP3ToLinearSRGB":n===Fn&&s===Dn&&(t="LinearSRGBToLinearDisplayP3"),e){case ce:case Sn:return[t,"LinearTransferOETF"];case A:case Jn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[t,"LinearTransferOETF"]}}(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Mu(e,t){let n;switch(t){case Ia:n="Linear";break;case Va:n="Reinhard";break;case $a:n="OptimizedCineon";break;case Ua:n="ACESFilmic";break;case Ja:n="AgX";break;case Za:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function At(e){return""!==e}function gr(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zu=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(e){return e.replace(zu,Iu)}const Pu=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Iu(e,t){let n=r[t];if(void 0===n){const e=Pu.get(t);if(void 0===e)throw new Error("Can not resolve #include <"+t+">");n=r[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e)}return ya(n)}const Vu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dr(e){return e.replace(Vu,$u)}function $u(e,t,n,s){let o="";for(let e=parseInt(t);e<parseInt(n);e++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return o}function cr(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return"highp"===e.precision?t+=`
#define HIGH_PRECISION`:"mediump"===e.precision?t+=`
#define MEDIUM_PRECISION`:"lowp"===e.precision&&(t+=`
#define LOW_PRECISION`),t}function Wu(e,t,n,s){const o=e.getContext(),x=n.defines;let a=n.vertexShader,c=n.fragmentShader;const _=function(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Fa?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===La?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===de&&(t="SHADOWMAP_TYPE_VSM"),t}(n),O=function(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case we:case Fe:t="ENVMAP_TYPE_CUBE";break;case _t:t="ENVMAP_TYPE_CUBE_UV"}return t}(n),y=function(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Fe&&(t="ENVMAP_MODE_REFRACTION"),t}(n),A=function(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case cn:t="ENVMAP_BLENDING_MULTIPLY";break;case Ra:t="ENVMAP_BLENDING_MIX";break;case Ha:t="ENVMAP_BLENDING_ADD"}return t}(n),m=function(e){const t=e.envMapCubeUVHeight;if(null===t)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}(n),j=n.isWebGL2?"":function(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||"physical"===e.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(At).join(`
`)}(n),k=function(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(At).join(`
`)}(n),f=function(e){const t=[];for(const n in e){const s=e[n];!1!==s&&t.push("#define "+n+" "+s)}return t.join(`
`)}(x),i=o.createProgram();let d,l,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(At).join(`
`),d.length>0&&(d+=`
`),l=[j,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(At).join(`
`),l.length>0&&(l+=`
`)):(d=[cr(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+y:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&!1===n.flatShading?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&!1===n.flatShading?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+_:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(At).join(`
`),l=[j,cr(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+O:"",n.envMap?"#define "+y:"",n.envMap?"#define "+A:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&!1===n.flatShading?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+_:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ge?"#define TONE_MAPPING":"",n.toneMapping!==ge?r.tonemapping_pars_fragment:"",n.toneMapping!==ge?Mu("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",r.colorspace_pars_fragment,Su("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(At).join(`
`)),a=ya(a),a=gr(a,n),a=pr(a,n),c=ya(c),c=gr(c,n),c=pr(c,n),a=dr(a),c=dr(c),n.isWebGL2&&!0!==n.isRawShaderMaterial&&(v=`#version 300 es
`,d=[k,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,l=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Ui?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ui?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const E=v+d+a,C=v+l+c,u=Er(o,o.VERTEX_SHADER,E),h=Er(o,o.FRAGMENT_SHADER,C);function w(t){if(e.debug.checkShaderErrors){const n=o.getProgramInfoLog(i).trim(),s=o.getShaderInfoLog(u).trim(),a=o.getShaderInfoLog(h).trim();let r=!0,c=!0;if(!1===o.getProgramParameter(i,o.LINK_STATUS))if(r=!1,"function"==typeof e.debug.onShaderError)e.debug.onShaderError(o,i,u,h);else{const e=yr(o,u,"vertex"),t=yr(o,h,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(i,o.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}else""!==n?console.warn("THREE.WebGLProgram: Program Info Log:",n):""!==s&&""!==a||(c=!1);c&&(t.diagnostics={runnable:r,programLog:n,vertexShader:{log:s,prefix:d},fragmentShader:{log:a,prefix:l}})}o.deleteShader(u),o.deleteShader(h),b=new is(o,i),g=function(e,t){const n={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=e.getActiveAttrib(t,a),r=o.name;let i=1;o.type===e.FLOAT_MAT2&&(i=2),o.type===e.FLOAT_MAT3&&(i=3),o.type===e.FLOAT_MAT4&&(i=4),n[r]={type:o.type,location:e.getAttribLocation(t,r),locationSize:i}}return n}(o,i)}let b,g;o.attachShader(i,u),o.attachShader(i,h),void 0!==n.index0AttributeName?o.bindAttribLocation(i,0,n.index0AttributeName):!0===n.morphTargets&&o.bindAttribLocation(i,0,"position"),o.linkProgram(i),this.getUniforms=function(){return void 0===b&&w(this),b},this.getAttributes=function(){return void 0===g&&w(this),g};let p=!1===n.rendererExtensionParallelShaderCompile;return this.isReady=function(){return!1===p&&(p=o.getProgramParameter(i,Eu)),p},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(i),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ku++,this.cacheKey=t,this.usedTimes=1,this.program=i,this.vertexShader=u,this.fragmentShader=h,this}let Uu=0;class Ku{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const o=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(o),s=this._getShaderStage(i),t=this._getShaderCacheForMaterial(e);return!1===t.has(n)&&(t.add(n),n.usedTimes++),!1===t.has(s)&&(t.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const e of t)e.usedTimes--,0===e.usedTimes&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let t=n.get(e);return void 0===t&&(t=new Set,n.set(e,t)),t}_getShaderStage(e){const n=this.shaderCache;let t=n.get(e);return void 0===t&&(t=new Xu(e),n.set(e,t)),t}}class Xu{constructor(e){this.id=Uu++,this.code=e,this.usedTimes=0}}function Ju(e,t,n,s,o,i,a){const r=new Gn,d=new Ku,l=[],u=o.isWebGL2,v=o.logarithmicDepthBuffer,f=o.vertexTextures;let h=o.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(e){return 0===e?"uv":`uv${e}`}return{getParameters:function(i,r,l,b,j){const N=b.fog,y=j.geometry,je=i.isMeshStandardMaterial?b.environment:null,w=(i.isMeshStandardMaterial?n:t).get(i.envMap||je),pe=w&&w.mapping===_t?w.image.height:null,L=p[i.type];null!==i.precision&&(h=o.getMaxPrecision(i.precision),h!==i.precision&&console.warn("THREE.WebGLProgram.getParameters:",i.precision,"not supported, using",h,"instead."));const Z=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,he=void 0!==Z?Z.length:0;let F,S,X,G,k=0;if(void 0!==y.morphAttributes.position&&(k=1),void 0!==y.morphAttributes.normal&&(k=2),void 0!==y.morphAttributes.color&&(k=3),L){const e=te[L];F=e.vertexShader,S=e.fragmentShader}else F=i.vertexShader,S=i.fragmentShader,d.update(i),X=d.getVertexShaderID(i),G=d.getFragmentShaderID(i);const x=e.getRenderTarget(),Y=!0===j.isInstancedMesh,me=!0===j.isBatchedMesh,E=!!i.map,Oe=!!i.matcap,oe=!!w,I=!!i.aoMap,B=!!i.lightMap,V=!!i.bumpMap,O=!!i.normalMap,W=!!i.displacementMap,U=!!i.emissiveMap,P=!!i.metalnessMap,q=!!i.roughnessMap,D=i.anisotropy>0,C=i.clearcoat>0,M=i.iridescence>0,T=i.sheen>0,z=i.transmission>0,J=D&&!!i.anisotropyMap,ee=C&&!!i.clearcoatMap,ne=C&&!!i.clearcoatNormalMap,se=C&&!!i.clearcoatRoughnessMap,H=M&&!!i.iridescenceMap,ie=M&&!!i.iridescenceThicknessMap,ae=T&&!!i.sheenColorMap,re=T&&!!i.sheenRoughnessMap,le=!!i.specularMap,de=!!i.specularColorMap,ue=!!i.specularIntensityMap,Q=z&&!!i.transmissionMap,K=z&&!!i.thicknessMap,fe=!!i.gradientMap,A=!!i.alphaMap,ve=i.alphaTest>0,be=!!i.alphaHash,_=!!i.extensions,ye=!!y.attributes.uv1,_e=!!y.attributes.uv2,we=!!y.attributes.uv3;let $=ge;return i.toneMapped&&(null!==x&&!0!==x.isXRRenderTarget||($=e.toneMapping)),{isWebGL2:u,shaderID:L,shaderType:i.type,shaderName:i.name,vertexShader:F,fragmentShader:S,defines:i.defines,customVertexShaderID:X,customFragmentShaderID:G,isRawShaderMaterial:!0===i.isRawShaderMaterial,glslVersion:i.glslVersion,precision:h,batching:me,instancing:Y,instancingColor:Y&&null!==j.instanceColor,supportsVertexTextures:f,outputColorSpace:null===x?e.outputColorSpace:!0===x.isXRRenderTarget?x.texture.colorSpace:ce,map:E,matcap:Oe,envMap:oe,envMapMode:oe&&w.mapping,envMapCubeUVHeight:pe,aoMap:I,lightMap:B,bumpMap:V,normalMap:O,displacementMap:f&&W,emissiveMap:U,normalMapObjectSpace:O&&1===i.normalMapType,normalMapTangentSpace:O&&0===i.normalMapType,metalnessMap:P,roughnessMap:q,anisotropy:D,anisotropyMap:J,clearcoat:C,clearcoatMap:ee,clearcoatNormalMap:ne,clearcoatRoughnessMap:se,iridescence:M,iridescenceMap:H,iridescenceThicknessMap:ie,sheen:T,sheenColorMap:ae,sheenRoughnessMap:re,specularMap:le,specularColorMap:de,specularIntensityMap:ue,transmission:z,transmissionMap:Q,thicknessMap:K,gradientMap:fe,opaque:!1===i.transparent&&1===i.blending,alphaMap:A,alphaTest:ve,alphaHash:be,combine:i.combine,mapUv:E&&c(i.map.channel),aoMapUv:I&&c(i.aoMap.channel),lightMapUv:B&&c(i.lightMap.channel),bumpMapUv:V&&c(i.bumpMap.channel),normalMapUv:O&&c(i.normalMap.channel),displacementMapUv:W&&c(i.displacementMap.channel),emissiveMapUv:U&&c(i.emissiveMap.channel),metalnessMapUv:P&&c(i.metalnessMap.channel),roughnessMapUv:q&&c(i.roughnessMap.channel),anisotropyMapUv:J&&c(i.anisotropyMap.channel),clearcoatMapUv:ee&&c(i.clearcoatMap.channel),clearcoatNormalMapUv:ne&&c(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&c(i.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&c(i.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&c(i.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&c(i.sheenColorMap.channel),sheenRoughnessMapUv:re&&c(i.sheenRoughnessMap.channel),specularMapUv:le&&c(i.specularMap.channel),specularColorMapUv:de&&c(i.specularColorMap.channel),specularIntensityMapUv:ue&&c(i.specularIntensityMap.channel),transmissionMapUv:Q&&c(i.transmissionMap.channel),thicknessMapUv:K&&c(i.thicknessMap.channel),alphaMapUv:A&&c(i.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(O||D),vertexColors:i.vertexColors,vertexAlphas:!0===i.vertexColors&&!!y.attributes.color&&4===y.attributes.color.itemSize,vertexUv1s:ye,vertexUv2s:_e,vertexUv3s:we,pointsUvs:!0===j.isPoints&&!!y.attributes.uv&&(E||A),fog:!!N,useFog:!0===i.fog,fogExp2:N&&N.isFogExp2,flatShading:!0===i.flatShading,sizeAttenuation:!0===i.sizeAttenuation,logarithmicDepthBuffer:v,skinning:!0===j.isSkinnedMesh,morphTargets:void 0!==y.morphAttributes.position,morphNormals:void 0!==y.morphAttributes.normal,morphColors:void 0!==y.morphAttributes.color,morphTargetsCount:he,morphTextureStride:k,numDirLights:r.directional.length,numPointLights:r.point.length,numSpotLights:r.spot.length,numSpotLightMaps:r.spotLightMap.length,numRectAreaLights:r.rectArea.length,numHemiLights:r.hemi.length,numDirLightShadows:r.directionalShadowMap.length,numPointLightShadows:r.pointShadowMap.length,numSpotLightShadows:r.spotShadowMap.length,numSpotLightShadowsWithMaps:r.numSpotLightShadowsWithMaps,numLightProbes:r.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:$,useLegacyLights:e._useLegacyLights,decodeVideoTexture:E&&!0===i.map.isVideoTexture&&m.getTransfer(i.map.colorSpace)===g,premultipliedAlpha:i.premultipliedAlpha,doubleSided:2===i.side,flipSided:i.side===R,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionDerivatives:_&&!0===i.extensions.derivatives,extensionFragDepth:_&&!0===i.extensions.fragDepth,extensionDrawBuffers:_&&!0===i.extensions.drawBuffers,extensionShaderTextureLOD:_&&!0===i.extensions.shaderTextureLOD,extensionClipCullDistance:_&&i.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:i.customProgramCacheKey()}},getProgramCacheKey:function(t){const n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),void 0!==t.defines)for(const e in t.defines)n.push(e),n.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(!function(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}(n,t),function(e,t){r.disableAll(),t.isWebGL2&&r.enable(0),t.supportsVertexTextures&&r.enable(1),t.instancing&&r.enable(2),t.instancingColor&&r.enable(3),t.matcap&&r.enable(4),t.envMap&&r.enable(5),t.normalMapObjectSpace&&r.enable(6),t.normalMapTangentSpace&&r.enable(7),t.clearcoat&&r.enable(8),t.iridescence&&r.enable(9),t.alphaTest&&r.enable(10),t.vertexColors&&r.enable(11),t.vertexAlphas&&r.enable(12),t.vertexUv1s&&r.enable(13),t.vertexUv2s&&r.enable(14),t.vertexUv3s&&r.enable(15),t.vertexTangents&&r.enable(16),t.anisotropy&&r.enable(17),t.alphaHash&&r.enable(18),t.batching&&r.enable(19),e.push(r.mask),r.disableAll(),t.fog&&r.enable(0),t.useFog&&r.enable(1),t.flatShading&&r.enable(2),t.logarithmicDepthBuffer&&r.enable(3),t.skinning&&r.enable(4),t.morphTargets&&r.enable(5),t.morphNormals&&r.enable(6),t.morphColors&&r.enable(7),t.premultipliedAlpha&&r.enable(8),t.shadowMapEnabled&&r.enable(9),t.useLegacyLights&&r.enable(10),t.doubleSided&&r.enable(11),t.flipSided&&r.enable(12),t.useDepthPacking&&r.enable(13),t.dithering&&r.enable(14),t.transmission&&r.enable(15),t.sheen&&r.enable(16),t.opaque&&r.enable(17),t.pointsUvs&&r.enable(18),t.decodeVideoTexture&&r.enable(19),e.push(r.mask)}(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()},getUniforms:function(e){const n=p[e.type];let t;if(n){const e=te[n];t=bl.clone(e.uniforms)}else t=e.uniforms;return t},acquireProgram:function(t,n){let s;for(let e=0,o=l.length;e<o;e++){const t=l[e];if(t.cacheKey===n){s=t,++s.usedTimes;break}}return void 0===s&&(s=new Wu(e,n,t,i),l.push(s)),s},releaseProgram:function(e){if(0==--e.usedTimes){const t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}},releaseShaderCache:function(e){d.remove(e)},programs:l,dispose:function(){d.dispose()}}}function s1(){let e=new WeakMap;return{get:function(t){let n=e.get(t);return void 0===n&&(n={},e.set(t,n)),n},remove:function(t){e.delete(t)},update:function(t,n,s){e.get(t)[n]=s},dispose:function(){e=new WeakMap}}}function o1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function tc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Na(){const o=[];let s=0;const e=[],t=[],n=[];function i(e,t,n,i,a,r){let c=o[s];return void 0===c?(c={id:e.id,object:e,geometry:t,material:n,groupOrder:i,renderOrder:e.renderOrder,z:a,group:r},o[s]=c):(c.id=e.id,c.object=e,c.geometry=t,c.material=n,c.groupOrder=i,c.renderOrder=e.renderOrder,c.z=a,c.group=r),s++,c}return{opaque:e,transmissive:t,transparent:n,init:function(){s=0,e.length=0,t.length=0,n.length=0},push:function(s,o,a,r,c,l){const d=i(s,o,a,r,c,l);a.transmission>0?t.push(d):!0===a.transparent?n.push(d):e.push(d)},unshift:function(s,o,a,r,c,l){const d=i(s,o,a,r,c,l);a.transmission>0?t.unshift(d):!0===a.transparent?n.unshift(d):e.unshift(d)},finish:function(){for(let t=s,n=o.length;t<n;t++){const e=o[t];if(null===e.id)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null}},sort:function(s,o){e.length>1&&e.sort(s||o1),t.length>1&&t.sort(o||tc),n.length>1&&n.sort(o||tc)}}}function d1(){let e=new WeakMap;return{get:function(t,n){const o=e.get(t);let s;return void 0===o?(s=new Na,e.set(t,[s])):n>=o.length?(s=new Na,o.push(s)):s=o[n],s},dispose:function(){e=new WeakMap}}}function l1(){const e={};return{get:function(n){if(void 0!==e[n.id])return e[n.id];let s;switch(n.type){case"DirectionalLight":s={direction:new t,color:new o};break;case"SpotLight":s={position:new t,direction:new t,color:new o,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":s={position:new t,color:new o,distance:0,decay:0};break;case"HemisphereLight":s={direction:new t,skyColor:new o,groundColor:new o};break;case"RectAreaLight":s={color:new o,position:new t,halfWidth:new t,halfHeight:new t}}return e[n.id]=s,s}}}let c1=0;function r1(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function a1(e,o){const r=new l1,d=function(){const e={};return{get:function(t){if(void 0!==e[t.id])return e[t.id];let s;switch(t.type){case"DirectionalLight":case"SpotLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n};break;case"PointLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=s,s}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new t);const c=new t,u=new a,l=new a;return{setup:function(t,n){let _=0,O=0,w=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,h=0,c=0,f=0,b=0,m=0,p=0,g=0,v=0,y=0,j=0;t.sort(r1);const l=!0===n?Math.PI:1;for(let o=0,x=t.length;o<x;o++){const e=t[o],s=e.color,n=e.intensity,C=e.distance,a=e.shadow&&e.shadow.map?e.shadow.map.texture:null;if(e.isAmbientLight)_+=s.r*n*l,O+=s.g*n*l,w+=s.b*n*l;else if(e.isLightProbe){for(let t=0;t<9;t++)i.probe[t].addScaledVector(e.sh.coefficients[t],n);j++}else if(e.isDirectionalLight){const t=r.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*l),e.castShadow){const n=e.shadow,t=d.get(e);t.shadowBias=n.bias,t.shadowNormalBias=n.normalBias,t.shadowRadius=n.radius,t.shadowMapSize=n.mapSize,i.directionalShadow[u]=t,i.directionalShadowMap[u]=a,i.directionalShadowMatrix[u]=e.shadow.matrix,m++}i.directional[u]=t,u++}else if(e.isSpotLight){const t=r.get(e);t.position.setFromMatrixPosition(e.matrixWorld),t.color.copy(s).multiplyScalar(n*l),t.distance=C,t.coneCos=Math.cos(e.angle),t.penumbraCos=Math.cos(e.angle*(1-e.penumbra)),t.decay=e.decay,i.spot[c]=t;const o=e.shadow;if(e.map&&(i.spotLightMap[v]=e.map,v++,o.updateMatrices(e),e.castShadow&&y++),i.spotLightMatrix[c]=o.matrix,e.castShadow){const t=d.get(e);t.shadowBias=o.bias,t.shadowNormalBias=o.normalBias,t.shadowRadius=o.radius,t.shadowMapSize=o.mapSize,i.spotShadow[c]=t,i.spotShadowMap[c]=a,g++}c++}else if(e.isRectAreaLight){const t=r.get(e);t.color.copy(s).multiplyScalar(n),t.halfWidth.set(.5*e.width,0,0),t.halfHeight.set(0,.5*e.height,0),i.rectArea[f]=t,f++}else if(e.isPointLight){const t=r.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*l),t.distance=e.distance,t.decay=e.decay,e.castShadow){const n=e.shadow,t=d.get(e);t.shadowBias=n.bias,t.shadowNormalBias=n.normalBias,t.shadowRadius=n.radius,t.shadowMapSize=n.mapSize,t.shadowCameraNear=n.camera.near,t.shadowCameraFar=n.camera.far,i.pointShadow[h]=t,i.pointShadowMap[h]=a,i.pointShadowMatrix[h]=e.shadow.matrix,p++}i.point[h]=t,h++}else if(e.isHemisphereLight){const t=r.get(e);t.skyColor.copy(e.color).multiplyScalar(n*l),t.groundColor.copy(e.groundColor).multiplyScalar(n*l),i.hemi[b]=t,b++}}f>0&&(o.isWebGL2?!0===e.has("OES_texture_float_linear")?(i.rectAreaLTC1=s.LTC_FLOAT_1,i.rectAreaLTC2=s.LTC_FLOAT_2):(i.rectAreaLTC1=s.LTC_HALF_1,i.rectAreaLTC2=s.LTC_HALF_2):!0===e.has("OES_texture_float_linear")?(i.rectAreaLTC1=s.LTC_FLOAT_1,i.rectAreaLTC2=s.LTC_FLOAT_2):!0===e.has("OES_texture_half_float_linear")?(i.rectAreaLTC1=s.LTC_HALF_1,i.rectAreaLTC2=s.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=_,i.ambient[1]=O,i.ambient[2]=w;const a=i.hash;a.directionalLength===u&&a.pointLength===h&&a.spotLength===c&&a.rectAreaLength===f&&a.hemiLength===b&&a.numDirectionalShadows===m&&a.numPointShadows===p&&a.numSpotShadows===g&&a.numSpotMaps===v&&a.numLightProbes===j||(i.directional.length=u,i.spot.length=c,i.rectArea.length=f,i.point.length=h,i.hemi.length=b,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=p,i.pointShadowMap.length=p,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=p,i.spotLightMatrix.length=g+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=j,a.directionalLength=u,a.pointLength=h,a.spotLength=c,a.rectAreaLength=f,a.hemiLength=b,a.numDirectionalShadows=m,a.numPointShadows=p,a.numSpotShadows=g,a.numSpotMaps=v,a.numLightProbes=j,i.version=c1++)},setupView:function(e,t){let s=0,o=0,a=0,r=0,d=0;const n=t.matrixWorldInverse;for(let h=0,m=e.length;h<m;h++){const t=e[h];if(t.isDirectionalLight){const e=i.directional[s];e.direction.setFromMatrixPosition(t.matrixWorld),c.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(c),e.direction.transformDirection(n),s++}else if(t.isSpotLight){const e=i.spot[a];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),e.direction.setFromMatrixPosition(t.matrixWorld),c.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(c),e.direction.transformDirection(n),a++}else if(t.isRectAreaLight){const e=i.rectArea[r];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),l.identity(),u.copy(t.matrixWorld),u.premultiply(n),l.extractRotation(u),e.halfWidth.set(.5*t.width,0,0),e.halfHeight.set(0,.5*t.height,0),e.halfWidth.applyMatrix4(l),e.halfHeight.applyMatrix4(l),r++}else if(t.isPointLight){const e=i.point[o];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),o++}else if(t.isHemisphereLight){const e=i.hemi[d];e.direction.setFromMatrixPosition(t.matrixWorld),e.direction.transformDirection(n),d++}}},state:i}}function Ba(e,t){const s=new a1(e,t),n=[],o=[];return{init:function(){n.length=0,o.length=0},state:{lightsArray:n,shadowsArray:o,lights:s},setupLights:function(e){s.setup(n,e)},setupLightsView:function(e){s.setupView(n,e)},pushLight:function(e){n.push(e)},pushShadow:function(e){o.push(e)}}}function i1(e,t){let n=new WeakMap;return{get:function(s,o=0){const a=n.get(s);let i;return void 0===a?(i=new Ba(e,t),n.set(s,[i])):o>=a.length?(i=new Ba(e,t),a.push(i)):i=a[o],i},dispose:function(){n=new WeakMap}}}class Ki extends z{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ta extends z{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function n1(e,t,s){let j=new Jt;const o=new n,i=new n,y=new p,w=new Ki({depthPacking:3201}),E=new Ta,d={},c=s.maxTextureSize,x={[pe]:R,[R]:pe,2:2},a=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new n},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),r=a.clone();r.defines.HORIZONTAL_PASS=1;const _=new l;_.setAttribute("position",new f(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new k(_,a),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let m=this.type;function O(n,s){const i=t.update(h);a.defines.VSM_SAMPLES!==n.blurSamples&&(a.defines.VSM_SAMPLES=n.blurSamples,r.defines.VSM_SAMPLES=n.blurSamples,a.needsUpdate=!0,r.needsUpdate=!0),null===n.mapPass&&(n.mapPass=new ie(o.x,o.y)),a.uniforms.shadow_pass.value=n.map.texture,a.uniforms.resolution.value=n.mapSize,a.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(s,null,i,a,h,null),r.uniforms.shadow_pass.value=n.mapPass.texture,r.uniforms.resolution.value=n.mapSize,r.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(s,null,i,r,h,null)}function g(t,n,s,o){let i=null;const a=!0===s.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(void 0!==a)i=a;else if(i=!0===s.isPointLight?E:w,e.localClippingEnabled&&!0===n.clipShadows&&Array.isArray(n.clippingPlanes)&&0!==n.clippingPlanes.length||n.displacementMap&&0!==n.displacementScale||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){const s=i.uuid,o=n.uuid;let e=d[s];void 0===e&&(e={},d[s]=e);let t=e[o];void 0===t&&(t=i.clone(),e[o]=t,n.addEventListener("dispose",v)),i=t}return(i.visible=n.visible,i.wireframe=n.wireframe,i.side=o===de?null!==n.shadowSide?n.shadowSide:n.side:null!==n.shadowSide?n.shadowSide:x[n.side],i.alphaMap=n.alphaMap,i.alphaTest=n.alphaTest,i.map=n.map,i.clipShadows=n.clipShadows,i.clippingPlanes=n.clippingPlanes,i.clipIntersection=n.clipIntersection,i.displacementMap=n.displacementMap,i.displacementScale=n.displacementScale,i.displacementBias=n.displacementBias,i.wireframeLinewidth=n.wireframeLinewidth,i.linewidth=n.linewidth,!0===s.isPointLight&&!0===i.isMeshDistanceMaterial)&&(e.properties.get(i).light=s),i}function b(n,s,o,i,a){if(!1===n.visible)return;if(n.layers.test(s.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&a===de)&&(!n.frustumCulled||j.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,n.matrixWorld);const r=t.update(n),c=n.material;if(Array.isArray(c)){{const t=r.groups;for(let d=0,h=t.length;d<h;d++){const l=t[d],u=c[l.materialIndex];if(u&&u.visible){const t=g(n,u,i,a);n.onBeforeShadow(e,n,s,o,r,t,l),e.renderBufferDirect(o,null,r,t,n,l),n.onAfterShadow(e,n,s,o,r,t,l)}}}}else if(c.visible){const t=g(n,c,i,a);n.onBeforeShadow(e,n,s,o,r,t,null),e.renderBufferDirect(o,null,r,t,n,null),n.onAfterShadow(e,n,s,o,r,t,null)}}const r=n.children;for(let e=0,t=r.length;e<t;e++)b(r[e],s,o,i,a)}function v(e){e.target.removeEventListener("dispose",v);for(const s in d){const t=d[s],n=e.target.uuid;n in t&&(t[n].dispose(),delete t[n])}}this.render=function(t,n,s){if(!1===u.enabled)return;if(!1===u.autoUpdate&&!1===u.needsUpdate)return;if(0===t.length)return;const r=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),a=e.state;a.setBlending(0),a.buffers.color.setClear(1,1,1,1),a.buffers.depth.setTest(!0),a.setScissorTest(!1);const h=m!==de&&this.type===de,f=m===de&&this.type!==de;for(let u=0,m=t.length;u<m;u++){const l=t[u],r=l.shadow;if(void 0===r){console.warn("THREE.WebGLShadowMap:",l,"has no shadow.");continue}if(!1===r.autoUpdate&&!1===r.needsUpdate)continue;o.copy(r.mapSize);const d=r.getFrameExtents();if(o.multiply(d),i.copy(r.mapSize),(o.x>c||o.y>c)&&(o.x>c&&(i.x=Math.floor(c/d.x),o.x=i.x*d.x,r.mapSize.x=i.x),o.y>c&&(i.y=Math.floor(c/d.y),o.y=i.y*d.y,r.mapSize.y=i.y)),null===r.map||!0===h||!0===f){const e=this.type!==de?{minFilter:C,magFilter:C}:{};null!==r.map&&r.map.dispose(),r.map=new ie(o.x,o.y,e),r.map.texture.name=l.name+".shadowMap",r.camera.updateProjectionMatrix()}e.setRenderTarget(r.map),e.clear();const p=r.getViewportCount();for(let e=0;e<p;e++){const t=r.getViewport(e);y.set(i.x*t.x,i.y*t.y,i.x*t.z,i.y*t.w),a.viewport(y),r.updateMatrices(l,e),j=r.getFrustum(),b(n,s,r.camera,l,this.type)}!0!==r.isPointLightShadow&&this.type===de&&O(r,s),r.needsUpdate=!1}m=this.type,u.needsUpdate=!1,e.setRenderTarget(r,l,d)}}function t1(e,t,n){const u=n.isWebGL2,F=new function(){let t=!1;const n=new p;let s=null;const o=new p(0,0,0,0);return{setMask:function(n){s===n||t||(e.colorMask(n,n,n,n),s=n)},setLocked:function(e){t=e},setClear:function(t,s,i,a,r){!0===r&&(t*=a,s*=a,i*=a),n.set(t,s,i,a),!1===o.equals(n)&&(e.clearColor(t,s,i,a),o.copy(n))},reset:function(){t=!1,s=null,o.set(-1,0,0,0)}}},c=new function(){let t=!1,n=null,o=null,a=null;return{setTest:function(t){t?s(e.DEPTH_TEST):i(e.DEPTH_TEST)},setMask:function(s){n===s||t||(e.depthMask(s),n=s)},setFunc:function(t){if(o!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:default:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL)}o=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,n=null,o=null,a=null}}},r=new function(){let t=!1,n=null,o=null,a=null,r=null,c=null,l=null,d=null,u=null;return{setTest:function(n){t||(n?s(e.STENCIL_TEST):i(e.STENCIL_TEST))},setMask:function(s){n===s||t||(e.stencilMask(s),n=s)},setFunc:function(t,n,s){o===t&&a===n&&r===s||(e.stencilFunc(t,n,s),o=t,a=n,r=s)},setOp:function(t,n,s){c===t&&l===n&&d===s||(e.stencilOp(t,n,s),c=t,l=n,d=s)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,n=null,o=null,a=null,r=null,c=null,l=null,d=null,u=null}}},q=new WeakMap,H=new WeakMap;let h={},m={},D=new WeakMap,K=[],U=null,g=!1,_=null,f=null,b=null,y=null,v=null,w=null,O=null,x=new o(0,0,0),j=0,E=!1,z=null,W=null,$=null,P=null,L=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,C=0;const T=e.getParameter(e.VERSION);-1!==T.indexOf("WebGL")?(C=parseFloat(/^WebGL (\d)/.exec(T)[1]),I=C>=1):-1!==T.indexOf("OpenGL ES")&&(C=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),I=C>=2);let a=null,M={};const Z=e.getParameter(e.SCISSOR_BOX),Q=e.getParameter(e.VIEWPORT),B=(new p).fromArray(Z),V=(new p).fromArray(Q);function S(t,n,s,o){const i=new Uint8Array(4),a=e.createTexture();e.bindTexture(t,a),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let a=0;a<s;a++)!u||t!==e.TEXTURE_3D&&t!==e.TEXTURE_2D_ARRAY?e.texImage2D(n+a,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,i):e.texImage3D(n,0,e.RGBA,1,1,o,0,e.RGBA,e.UNSIGNED_BYTE,i);return a}const d={};function s(t){!0!==h[t]&&(e.enable(t),h[t]=!0)}function i(t){!1!==h[t]&&(e.disable(t),h[t]=!1)}d[e.TEXTURE_2D]=S(e.TEXTURE_2D,e.TEXTURE_2D,1),d[e.TEXTURE_CUBE_MAP]=S(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),u&&(d[e.TEXTURE_2D_ARRAY]=S(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),d[e.TEXTURE_3D]=S(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),F.setClear(0,0,0,1),c.setClear(1),r.setClear(0),s(e.DEPTH_TEST),c.setFunc(3),N(!1),G(1),s(e.CULL_FACE),A(0);const l={[Te]:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(u)l[103]=e.MIN,l[104]=e.MAX;else{const e=t.get("EXT_blend_minmax");null!==e&&(l[103]=e.MIN_EXT,l[104]=e.MAX_EXT)}const k={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,[lo]:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,[no]:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function A(t,n,o,a,r,c,d,u,h,m){if(0!==t){if(!1===g&&(s(e.BLEND),g=!0),5===t)r=r||n,c=c||o,d=d||a,n===f&&r===v||(e.blendEquationSeparate(l[n],l[r]),f=n,v=r),o===b&&a===y&&c===w&&d===O||(e.blendFuncSeparate(k[o],k[a],k[c],k[d]),b=o,y=a,w=c,O=d),!1!==u.equals(x)&&h===j||(e.blendColor(u.r,u.g,u.b,h),x.copy(u),j=h),_=t,E=!1;else if(t!==_||m!==E){if(f===Te&&v===Te||(e.blendEquation(e.FUNC_ADD),f=Te,v=Te),m)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}b=null,y=null,w=null,O=null,x.set(0,0,0),j=0,_=t,E=m}}else!0===g&&(i(e.BLEND),g=!1)}function N(t){z!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),z=t)}function G(t){0!==t?(s(e.CULL_FACE),t!==W&&(1===t?e.cullFace(e.BACK):2===t?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):i(e.CULL_FACE),W=t}function X(t,n,o){t?(s(e.POLYGON_OFFSET_FILL),P===n&&L===o||(e.polygonOffset(n,o),P=n,L=o)):i(e.POLYGON_OFFSET_FILL)}return{buffers:{color:F,depth:c,stencil:r},enable:s,disable:i,bindFramebuffer:function(t,n){return m[t]!==n&&(e.bindFramebuffer(t,n),m[t]=n,u&&(t===e.DRAW_FRAMEBUFFER&&(m[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(m[e.DRAW_FRAMEBUFFER]=n)),!0)},drawBuffers:function(s,o){let i=K,a=!1;if(s)if(i=D.get(o),void 0===i&&(i=[],D.set(o,i)),s.isWebGLMultipleRenderTargets){{const t=s.texture;if(i.length!==t.length||i[0]!==e.COLOR_ATTACHMENT0){for(let n=0,s=t.length;n<s;n++)i[n]=e.COLOR_ATTACHMENT0+n;i.length=t.length,a=!0}}}else i[0]!==e.COLOR_ATTACHMENT0&&(i[0]=e.COLOR_ATTACHMENT0,a=!0);else i[0]!==e.BACK&&(i[0]=e.BACK,a=!0);a&&(n.isWebGL2?e.drawBuffers(i):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(i))},useProgram:function(t){return U!==t&&(e.useProgram(t),U=t,!0)},setBlending:A,setMaterial:function(t,n){2===t.side?i(e.CULL_FACE):s(e.CULL_FACE);let o=t.side===R;n&&(o=!o),N(o),1===t.blending&&!1===t.transparent?A(0):A(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),F.setMask(t.colorWrite);const a=t.stencilWrite;r.setTest(a),a&&(r.setMask(t.stencilWriteMask),r.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),r.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),X(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?s(e.SAMPLE_ALPHA_TO_COVERAGE):i(e.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:N,setCullFace:G,setLineWidth:function(t){t!==$&&(I&&e.lineWidth(t),$=t)},setPolygonOffset:X,setScissorTest:function(t){t?s(e.SCISSOR_TEST):i(e.SCISSOR_TEST)},activeTexture:function(t){void 0===t&&(t=e.TEXTURE0+Y-1),a!==t&&(e.activeTexture(t),a=t)},bindTexture:function(t,n,s){void 0===s&&(s=null===a?e.TEXTURE0+Y-1:a);let o=M[s];void 0===o&&(o={type:void 0,texture:void 0},M[s]=o),o.type===t&&o.texture===n||(a!==s&&(e.activeTexture(s),a=s),e.bindTexture(t,n||d[t]),o.type=t,o.texture=n)},unbindTexture:function(){const t=M[a];void 0!==t&&void 0!==t.type&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexImage3D:function(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage2D:function(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage3D:function(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},updateUBOMapping:function(t,n){let s=H.get(n);void 0===s&&(s=new WeakMap,H.set(n,s));let o=s.get(t);void 0===o&&(o=e.getUniformBlockIndex(n,t.name),s.set(t,o))},uniformBlockBinding:function(t,n){const s=H.get(n).get(t);q.get(n)!==s&&(e.uniformBlockBinding(n,s,t.__bindingPointIndex),q.set(n,s))},texStorage2D:function(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texStorage3D:function(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage2D:function(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage3D:function(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},scissor:function(t){!1===B.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),B.copy(t))},viewport:function(t){!1===V.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),V.copy(t))},reset:function(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),!0===u&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},a=null,M={},m={},D=new WeakMap,K=[],U=null,g=!1,_=null,f=null,b=null,y=null,v=null,w=null,O=null,x=new o(0,0,0),j=0,E=!1,z=null,W=null,$=null,P=null,L=null,B.set(0,0,e.canvas.width,e.canvas.height),V.set(0,0,e.canvas.width,e.canvas.height),F.reset(),c.reset(),r.reset()}}}function e1(e,t,n,s,o,i,a){const r=o.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,B="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),k=new WeakMap;let y;const v=new WeakMap;let I=!1;try{I="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch{}function M(e,t){return I?new OffscreenCanvas(e,t):En("canvas")}function P(e,t,n,s){let o=1;if((e.width>s||e.height>s)&&(o=s/Math.max(e.width,e.height)),o<1||!0===t){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){const r=t?qn:Math.floor,s=r(o*e.width),i=r(o*e.height);void 0===y&&(y=M(s,i));const a=n?M(s,i):y;return a.width=s,a.height=i,a.getContext("2d").drawImage(e,0,0,s,i),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+s+"x"+i+")."),a}return"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+")."),e}return e}function j(e){return Zi(e.width)&&Zi(e.height)}function d(e,t){return e.generateMipmaps&&t&&e.minFilter!==C&&e.minFilter!==_}function u(t){e.generateMipmap(t)}function b(n,s,o,i,a=!1){if(!1===r)return s;if(null!==n){if(void 0!==e[n])return e[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let c=s;if(s===e.RED&&(o===e.FLOAT&&(c=e.R32F),o===e.HALF_FLOAT&&(c=e.R16F),o===e.UNSIGNED_BYTE&&(c=e.R8)),s===e.RED_INTEGER&&(o===e.UNSIGNED_BYTE&&(c=e.R8UI),o===e.UNSIGNED_SHORT&&(c=e.R16UI),o===e.UNSIGNED_INT&&(c=e.R32UI),o===e.BYTE&&(c=e.R8I),o===e.SHORT&&(c=e.R16I),o===e.INT&&(c=e.R32I)),s===e.RG&&(o===e.FLOAT&&(c=e.RG32F),o===e.HALF_FLOAT&&(c=e.RG16F),o===e.UNSIGNED_BYTE&&(c=e.RG8)),s===e.RGBA){const t=a?Mn:m.getTransfer(i);o===e.FLOAT&&(c=e.RGBA32F),o===e.HALF_FLOAT&&(c=e.RGBA16F),o===e.UNSIGNED_BYTE&&(c=t===g?e.SRGB8_ALPHA8:e.RGBA8),o===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),o===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return c!==e.R16F&&c!==e.R32F&&c!==e.RG16F&&c!==e.RG32F&&c!==e.RGBA16F&&c!==e.RGBA32F||t.get("EXT_color_buffer_float"),c}function R(e,t,n){return!0===d(e,n)||e.isFramebufferTexture&&e.minFilter!==C&&e.minFilter!==_?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function L(t){return t===C||t===ls||t===bn?e.NEAREST:e.LINEAR}function D(e){const t=e.target;t.removeEventListener("dispose",D),function(e){const n=s.get(e);if(void 0===n.__webglInit)return;const o=e.source,t=v.get(o);if(t){const s=t[n.__cacheKey];s.usedTimes--,0===s.usedTimes&&F(e),0===Object.keys(t).length&&v.delete(o)}s.remove(e)}(t),t.isVideoTexture&&k.delete(t)}function S(t){const n=t.target;n.removeEventListener("dispose",S),function(t){const o=t.texture,n=s.get(t),i=s.get(o);if(void 0!==i.__webglTexture&&(e.deleteTexture(i.__webglTexture),a.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let s=0;s<n.__webglFramebuffer[t].length;s++)e.deleteFramebuffer(n.__webglFramebuffer[t][s]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,i=o.length;t<i;t++){const n=s.get(o[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),a.memory.textures--),s.remove(o[t])}s.remove(o),s.remove(t)}(n)}function F(t){const n=s.get(t);e.deleteTexture(n.__webglTexture);const o=t.source;delete v.get(o)[n.__cacheKey],a.memory.textures--}let E=0;function H(t,o){const i=s.get(t);if(t.isVideoTexture&&function(e){const t=a.render.frame;k.get(e)!==t&&(k.set(e,t),e.update())}(t),!1===t.isRenderTargetTexture&&t.version>0&&i.__version!==t.version){const e=t.image;if(null===e)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==e.complete)return void x(i,t,o);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+o)}const A={[An]:e.REPEAT,[U]:e.CLAMP_TO_EDGE,[kn]:e.MIRRORED_REPEAT},T={[C]:e.NEAREST,[ls]:e.NEAREST_MIPMAP_NEAREST,[bn]:e.NEAREST_MIPMAP_LINEAR,[_]:e.LINEAR,[vi]:e.LINEAR_MIPMAP_NEAREST,[Xe]:e.LINEAR_MIPMAP_LINEAR},V={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function p(n,i,a){if(a?(e.texParameteri(n,e.TEXTURE_WRAP_S,A[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,A[i.wrapT]),n!==e.TEXTURE_3D&&n!==e.TEXTURE_2D_ARRAY||e.texParameteri(n,e.TEXTURE_WRAP_R,A[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,T[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,T[i.minFilter])):(e.texParameteri(n,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(n,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n!==e.TEXTURE_3D&&n!==e.TEXTURE_2D_ARRAY||e.texParameteri(n,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),i.wrapS===U&&i.wrapT===U||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(n,e.TEXTURE_MAG_FILTER,L(i.magFilter)),e.texParameteri(n,e.TEXTURE_MIN_FILTER,L(i.minFilter)),i.minFilter!==C&&i.minFilter!==_&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,V[i.compareFunction])),!0===t.has("EXT_texture_filter_anisotropic")){const a=t.get("EXT_texture_filter_anisotropic");if(i.magFilter===C)return;if(i.minFilter!==bn&&i.minFilter!==Xe)return;if(i.type===Z&&!1===t.has("OES_texture_float_linear"))return;if(!1===r&&i.type===Dt&&!1===t.has("OES_texture_half_float_linear"))return;(i.anisotropy>1||s.get(i).__currentAnisotropy)&&(e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,o.getMaxAnisotropy())),s.get(i).__currentAnisotropy=i.anisotropy)}}function N(t,n){let i=!1;void 0===t.__webglInit&&(t.__webglInit=!0,n.addEventListener("dispose",D));const r=n.source;let s=v.get(r);void 0===s&&(s={},v.set(r,s));const o=function(e){const t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}(n);if(o!==t.__cacheKey){void 0===s[o]&&(s[o]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,i=!0),s[o].usedTimes++;const r=s[t.__cacheKey];void 0!==r&&(s[t.__cacheKey].usedTimes--,0===r.usedTimes&&F(n)),t.__cacheKey=o,t.__webglTexture=s[o].texture}return i}function x(t,a,c){let l=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(l=e.TEXTURE_3D);const g=N(t,a),h=a.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);const f=s.get(h);if(h.version!==f.__version||!0===g){n.activeTexture(e.TEXTURE0+c);const M=m.getPrimaries(m.workingColorSpace),T=a.colorSpace===se?null:m.getPrimaries(a.colorSpace),F=a.colorSpace===se||M===T?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);const S=function(e){return!r&&(e.wrapS!==U||e.wrapT!==U||e.minFilter!==C&&e.minFilter!==_)}(a)&&!1===j(a.image);let t=P(a.image,S,!1,o.maxTextureSize);t=z(a,t);const A=j(t)||r,y=i.convert(a.format,a.colorSpace);let s,w=i.convert(a.type),v=b(a.internalFormat,y,w,a.colorSpace,a.isVideoTexture);p(l,a,A);const O=a.mipmaps,x=r&&!0!==a.isVideoTexture&&v!==xo,E=void 0===f.__version||!0===g,k=R(a,t,A);if(a.isDepthTexture)v=e.DEPTH_COMPONENT,r?v=a.type===Z?e.DEPTH_COMPONENT32F:a.type===ue?e.DEPTH_COMPONENT24:a.type===ke?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:a.type===Z&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),a.format===De&&v===e.DEPTH_COMPONENT&&a.type!==$n&&a.type!==ue&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),a.type=ue,w=i.convert(a.type)),a.format===rt&&v===e.DEPTH_COMPONENT&&(v=e.DEPTH_STENCIL,a.type!==ke&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),a.type=ke,w=i.convert(a.type))),E&&(x?n.texStorage2D(e.TEXTURE_2D,1,v,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,v,t.width,t.height,0,y,w,null));else if(a.isDataTexture)if(O.length>0&&A){x&&E&&n.texStorage2D(e.TEXTURE_2D,k,v,O[0].width,O[0].height);for(let t=0,o=O.length;t<o;t++)s=O[t],x?n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,y,w,s.data):n.texImage2D(e.TEXTURE_2D,t,v,s.width,s.height,0,y,w,s.data);a.generateMipmaps=!1}else x?(E&&n.texStorage2D(e.TEXTURE_2D,k,v,t.width,t.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,t.width,t.height,y,w,t.data)):n.texImage2D(e.TEXTURE_2D,0,v,t.width,t.height,0,y,w,t.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){x&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,k,v,O[0].width,O[0].height,t.depth);for(let o=0,i=O.length;o<i;o++)s=O[o],a.format!==X?null!==y?x?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,o,0,0,0,s.width,s.height,t.depth,y,s.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,o,v,s.width,s.height,t.depth,0,s.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):x?n.texSubImage3D(e.TEXTURE_2D_ARRAY,o,0,0,0,s.width,s.height,t.depth,y,w,s.data):n.texImage3D(e.TEXTURE_2D_ARRAY,o,v,s.width,s.height,t.depth,0,y,w,s.data)}else{x&&E&&n.texStorage2D(e.TEXTURE_2D,k,v,O[0].width,O[0].height);for(let t=0,o=O.length;t<o;t++)s=O[t],a.format!==X?null!==y?x?n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,y,s.data):n.compressedTexImage2D(e.TEXTURE_2D,t,v,s.width,s.height,0,s.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):x?n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,y,w,s.data):n.texImage2D(e.TEXTURE_2D,t,v,s.width,s.height,0,y,w,s.data)}else if(a.isDataArrayTexture)x?(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,k,v,t.width,t.height,t.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,y,w,t.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,v,t.width,t.height,t.depth,0,y,w,t.data);else if(a.isData3DTexture)x?(E&&n.texStorage3D(e.TEXTURE_3D,k,v,t.width,t.height,t.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,y,w,t.data)):n.texImage3D(e.TEXTURE_3D,0,v,t.width,t.height,t.depth,0,y,w,t.data);else if(a.isFramebufferTexture){if(E)if(x)n.texStorage2D(e.TEXTURE_2D,k,v,t.width,t.height);else{let s=t.width,o=t.height;for(let t=0;t<k;t++)n.texImage2D(e.TEXTURE_2D,t,v,s,o,0,y,w,null),s>>=1,o>>=1}}else if(O.length>0&&A){x&&E&&n.texStorage2D(e.TEXTURE_2D,k,v,O[0].width,O[0].height);for(let t=0,o=O.length;t<o;t++)s=O[t],x?n.texSubImage2D(e.TEXTURE_2D,t,0,0,y,w,s):n.texImage2D(e.TEXTURE_2D,t,v,y,w,s);a.generateMipmaps=!1}else x?(E&&n.texStorage2D(e.TEXTURE_2D,k,v,t.width,t.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,y,w,t)):n.texImage2D(e.TEXTURE_2D,0,v,y,w,t);d(a,A)&&u(l),f.__version=h.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function l(t,o,a,r,l,d){const u=i.convert(a.format,a.colorSpace),m=i.convert(a.type),p=b(a.internalFormat,u,m,a.colorSpace);if(!s.get(o).__hasExternalTextures){const t=Math.max(1,o.width>>d),s=Math.max(1,o.height>>d);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,d,p,t,s,o.depth,0,u,m,null):n.texImage2D(l,d,p,t,s,0,u,m,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),c(o)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,r,l,s.get(a).__webglTexture,0,f(o)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,r,l,s.get(a).__webglTexture,d),n.bindFramebuffer(e.FRAMEBUFFER,null)}function w(t,n,s){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer&&!n.stencilBuffer){let o=!0===r?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(s||c(n)){const t=n.depthTexture;t&&t.isDepthTexture&&(t.type===Z?o=e.DEPTH_COMPONENT32F:t.type===ue&&(o=e.DEPTH_COMPONENT24));const s=f(n);c(n)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,s,o,n.width,n.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,s,o,n.width,n.height)}else e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(n.depthBuffer&&n.stencilBuffer){const o=f(n);s&&!1===c(n)?e.renderbufferStorageMultisample(e.RENDERBUFFER,o,e.DEPTH24_STENCIL8,n.width,n.height):c(n)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,o,e.DEPTH24_STENCIL8,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{const t=!0===n.isWebGLMultipleRenderTargets?n.texture:[n.texture];for(let a=0;a<t.length;a++){const o=t[a],d=i.convert(o.format,o.colorSpace),u=i.convert(o.type),r=b(o.internalFormat,d,u,o.colorSpace),l=f(n);s&&!1===c(n)?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,r,n.width,n.height):c(n)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,r,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,r,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function O(t){const o=s.get(t),i=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!o.__autoAllocateDepthBuffer){if(i)throw new Error("target.depthTexture not supported in Cube render targets");!function(t,o){if(o&&o.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,t),!o.depthTexture||!o.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");s.get(o.depthTexture).__webglTexture&&o.depthTexture.image.width===o.width&&o.depthTexture.image.height===o.height||(o.depthTexture.image.width=o.width,o.depthTexture.image.height=o.height,o.depthTexture.needsUpdate=!0),H(o.depthTexture,0);const i=s.get(o.depthTexture).__webglTexture,a=f(o);if(o.depthTexture.format===De)c(o)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0);else{if(o.depthTexture.format!==rt)throw new Error("Unknown depthTexture format");c(o)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0)}}(o.__webglFramebuffer,t)}else if(i){o.__webglDepthbuffer=[];for(let s=0;s<6;s++)n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[s]),o.__webglDepthbuffer[s]=e.createRenderbuffer(),w(o.__webglDepthbuffer[s],t,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),o.__webglDepthbuffer=e.createRenderbuffer(),w(o.__webglDepthbuffer,t,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function f(e){return Math.min(o.maxSamples,e.samples)}function c(e){const n=s.get(e);return r&&e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==n.__useRenderToTexture}function z(e,n){const s=e.colorSpace,o=e.format,i=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||e.format===Un||s!==ce&&s!==se&&(m.getTransfer(s)===g?!1===r?!0===t.has("EXT_sRGB")&&o===X?(e.format=Un,e.minFilter=_,e.generateMipmaps=!1):n=ua.sRGBToLinear(n):o===X&&i===Ie||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",s)),n}this.allocateTextureUnit=function(){const e=E;return e>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+o.maxTextures),E+=1,e},this.resetTextureUnits=function(){E=0},this.setTexture2D=H,this.setTexture2DArray=function(t,o){const i=s.get(t);t.version>0&&i.__version!==t.version?x(i,t,o):n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+o)},this.setTexture3D=function(t,o){const i=s.get(t);t.version>0&&i.__version!==t.version?x(i,t,o):n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+o)},this.setTextureCube=function(t,a){const c=s.get(t);t.version>0&&c.__version!==t.version?function(t,a,c){if(6!==a.image.length)return;const f=N(t,a),l=a.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);const h=s.get(l);if(l.version!==h.__version||!0===f){n.activeTexture(e.TEXTURE0+c);const A=m.getPrimaries(m.workingColorSpace),M=a.colorSpace===se?null:m.getPrimaries(a.colorSpace),S=a.colorSpace===se||A===M?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);const E=a.isCompressedTexture||a.image[0].isCompressedTexture,x=a.image[0]&&a.image[0].isDataTexture,t=[];for(let e=0;e<6;e++)t[e]=E||x?x?a.image[e].image:a.image[e]:P(a.image[e],!1,!0,o.maxCubemapSize),t[e]=z(a,t[e]);const w=t[0],O=j(w)||r,s=i.convert(a.format,a.colorSpace),g=i.convert(a.type),_=b(a.internalFormat,s,g,a.colorSpace),y=r&&!0!==a.isVideoTexture,k=void 0===h.__version||!0===f;let v,C=R(a,w,O);if(p(e.TEXTURE_CUBE_MAP,a,O),E){y&&k&&n.texStorage2D(e.TEXTURE_CUBE_MAP,C,_,w.width,w.height);for(let o=0;o<6;o++){v=t[o].mipmaps;for(let i=0;i<v.length;i++){const t=v[i];a.format!==X?null!==s?y?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,0,0,t.width,t.height,s,t.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,_,t.width,t.height,0,t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):y?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,0,0,t.width,t.height,s,g,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,_,t.width,t.height,0,s,g,t.data)}}}else{v=a.mipmaps,y&&k&&(v.length>0&&C++,n.texStorage2D(e.TEXTURE_CUBE_MAP,C,_,t[0].width,t[0].height));for(let o=0;o<6;o++)if(x){y?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,t[o].width,t[o].height,s,g,t[o].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,_,t[o].width,t[o].height,0,s,g,t[o].data);for(let i=0;i<v.length;i++){const t=v[i].image[o].image;y?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,0,0,t.width,t.height,s,g,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,_,t.width,t.height,0,s,g,t.data)}}else{y?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,s,g,t[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,_,s,g,t[o]);for(let t=0;t<v.length;t++){const i=v[t];y?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,0,0,s,g,i.image[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,_,s,g,i.image[o])}}}d(a,O)&&u(e.TEXTURE_CUBE_MAP),h.__version=l.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}(c,t,a):n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture,e.TEXTURE0+a)},this.rebindTextures=function(t,n,o){const i=s.get(t);void 0!==n&&l(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),void 0!==o&&O(t)},this.setupRenderTarget=function(t){const h=t.texture,m=s.get(t),v=s.get(h);t.addEventListener("dispose",S),!0!==t.isWebGLMultipleRenderTargets&&(void 0===v.__webglTexture&&(v.__webglTexture=e.createTexture()),v.__version=h.version,a.memory.textures++);const _=!0===t.isWebGLCubeRenderTarget,y=!0===t.isWebGLMultipleRenderTargets,g=j(t)||r;if(_){m.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r&&h.mipmaps&&h.mipmaps.length>0){m.__webglFramebuffer[t]=[];for(let n=0;n<h.mipmaps.length;n++)m.__webglFramebuffer[t][n]=e.createFramebuffer()}else m.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r&&h.mipmaps&&h.mipmaps.length>0){m.__webglFramebuffer=[];for(let t=0;t<h.mipmaps.length;t++)m.__webglFramebuffer[t]=e.createFramebuffer()}else m.__webglFramebuffer=e.createFramebuffer();if(y)if(o.drawBuffers){const n=t.texture;for(let t=0,i=n.length;t<i;t++){const o=s.get(n[t]);void 0===o.__webglTexture&&(o.__webglTexture=e.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&t.samples>0&&!1===c(t)){const s=y?h:[h];m.__webglMultisampledFramebuffer=e.createFramebuffer(),m.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,m.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){const o=s[n];m.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,m.__webglColorRenderbuffer[n]);const a=i.convert(o.format,o.colorSpace),r=i.convert(o.type),c=b(o.internalFormat,a,r,o.colorSpace,!0===t.isXRRenderTarget),l=f(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,m.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(m.__webglDepthRenderbuffer=e.createRenderbuffer(),w(m.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(_){n.bindTexture(e.TEXTURE_CUBE_MAP,v.__webglTexture),p(e.TEXTURE_CUBE_MAP,h,g);for(let n=0;n<6;n++)if(r&&h.mipmaps&&h.mipmaps.length>0)for(let s=0;s<h.mipmaps.length;s++)l(m.__webglFramebuffer[n][s],t,h,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,s);else l(m.__webglFramebuffer[n],t,h,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);d(h,g)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(y){const o=t.texture;for(let i=0,r=o.length;i<r;i++){const a=o[i],c=s.get(a);n.bindTexture(e.TEXTURE_2D,c.__webglTexture),p(e.TEXTURE_2D,a,g),l(m.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),d(a,g)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let s=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r?s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(s,v.__webglTexture),p(s,h,g),r&&h.mipmaps&&h.mipmaps.length>0)for(let n=0;n<h.mipmaps.length;n++)l(m.__webglFramebuffer[n],t,h,e.COLOR_ATTACHMENT0,s,n);else l(m.__webglFramebuffer,t,h,e.COLOR_ATTACHMENT0,s,0);d(h,g)&&u(s),n.unbindTexture()}t.depthBuffer&&O(t)},this.updateRenderTargetMipmap=function(t){const i=j(t)||r,o=!0===t.isWebGLMultipleRenderTargets?t.texture:[t.texture];for(let a=0,c=o.length;a<c;a++){const r=o[a];if(d(r,i)){const o=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,i=s.get(r).__webglTexture;n.bindTexture(o,i),u(o),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(r&&t.samples>0&&!1===c(t)){const i=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],d=t.width,u=t.height;let r=e.COLOR_BUFFER_BIT;const c=[],l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,o=s.get(t),a=!0===t.isWebGLMultipleRenderTargets;if(a)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let n=0;n<i.length;n++){c.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&c.push(l);const h=void 0!==o.__ignoreDepthValues&&o.__ignoreDepthValues;if(!1===h&&(t.depthBuffer&&(r|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(r|=e.STENCIL_BUFFER_BIT)),a&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,o.__webglColorRenderbuffer[n]),!0===h&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[l]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[l])),a){const t=s.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,d,u,0,0,d,u,r,e.NEAREST),B&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,c)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),a)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,o.__webglColorRenderbuffer[t]);const a=s.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=l,this.useMultisampledRTT=c}function Ya(e,t,n){const s=n.isWebGL2;return{convert:function(n,o=""){let i;const a=m.getTransfer(o);if(n===Ie)return e.UNSIGNED_BYTE;if(n===ii)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return e.UNSIGNED_SHORT_5_5_5_1;if(1010===n)return e.BYTE;if(1011===n)return e.SHORT;if(n===$n)return e.UNSIGNED_SHORT;if(n===pi)return e.INT;if(n===ue)return e.UNSIGNED_INT;if(n===Z)return e.FLOAT;if(n===Dt)return s?e.HALF_FLOAT:(i=t.get("OES_texture_half_float"),null!==i?i.HALF_FLOAT_OES:null);if(1021===n)return e.ALPHA;if(n===X)return e.RGBA;if(1024===n)return e.LUMINANCE;if(1025===n)return e.LUMINANCE_ALPHA;if(n===De)return e.DEPTH_COMPONENT;if(n===rt)return e.DEPTH_STENCIL;if(n===Un)return i=t.get("EXT_sRGB"),null!==i?i.SRGB_ALPHA_EXT:null;if(1028===n)return e.RED;if(n===Qo)return e.RED_INTEGER;if(1030===n)return e.RG;if(n===qo)return e.RG_INTEGER;if(n===Ko)return e.RGBA_INTEGER;if(n===qs||n===Ys||n===so||n===ro)if(a===g){{if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),null===i)return null;if(n===qs)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}}else{if(i=t.get("WEBGL_compressed_texture_s3tc"),null===i)return null;if(n===qs)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===Oo||n===wo||n===go||n===po){if(i=t.get("WEBGL_compressed_texture_pvrtc"),null===i)return null;if(n===Oo)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===xo)return i=t.get("WEBGL_compressed_texture_etc1"),null!==i?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Co||n===Eo){if(i=t.get("WEBGL_compressed_texture_etc"),null===i)return null;if(n===Co)return a===g?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(n===To||n===zo||n===Do||n===Lo||n===Bo||n===Uo||n===Xo||n===Jo||n===ni||n===ri||n===di||n===ui||n===hi||n===bi){if(i=t.get("WEBGL_compressed_texture_astc"),null===i)return null;if(n===To)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zo)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ni)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ri)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===di)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ui)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hi)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bi)return a===g?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===Cs||n===Ai||n===Mi){if(i=t.get("EXT_texture_compression_bptc"),null===i)return null;if(n===Cs)return a===g?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ai)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mi)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(36283===n||n===Fi||n===Ti||n===zi){if(i=t.get("EXT_texture_compression_rgtc"),null===i)return null;if(n===Cs)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Fi)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ti)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zi)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===ke?s?e.UNSIGNED_INT_24_8:(i=t.get("WEBGL_depth_texture"),null!==i?i.UNSIGNED_INT_24_8_WEBGL:null):void 0!==e[n]?e[n]:null}}}class Ga extends M{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gt extends h{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qu={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new t,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new t),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new t,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new t),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,c=null;const s=this._targetRay,o=this._grip,r=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState){if(r&&e.hand){c=!0;for(const i of e.hand.values()){const o=t.getJointPose(i,n),s=this._getHandJoint(r,i);null!==o&&(s.matrix.fromArray(o.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,s.jointRadius=o.radius),s.visible=null!==o}const a=r.joints["index-finger-tip"],l=r.joints["thumb-tip"],s=a.position.distanceTo(l.position),o=.02,i=.005;r.inputState.pinching&&s>o+i?(r.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!r.inputState.pinching&&s<=o-i&&(r.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==o&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),null!==a&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));null!==s&&(i=t.getPose(e.targetRaySpace,n),null===i&&null!==a&&(i=a),null!==i&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return null!==s&&(s.visible=null!==i),null!==o&&(o.visible=null!==a),null!==r&&(r.visible=null!==c),this}_getHandJoint(e,t){if(void 0===e.joints[t.jointName]){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gu extends ve{constructor(e,s){super();const f=this;let o=null,k=1,j=null,R="local-floor",C=1,v=null,O=null,b=null,a=null,r=null,w=null;const u=s.getContextAttributes();let P=null,h=null;const c=[],d=[],x=new n;let S=null;const m=new M;m.layers.enable(1),m.viewport=new p;const g=new M;g.layers.enable(2),g.viewport=new p;const F=[m,g],i=new Ga;i.layers.enable(1),i.layers.enable(2);let A=null,_=null;function l(e){const n=d.indexOf(e.inputSource);if(-1===n)return;const t=c[n];void 0!==t&&(t.update(e.inputSource,e.frame,v||j),t.dispatchEvent({type:e.type,data:e.inputSource}))}function T(){o.removeEventListener("select",l),o.removeEventListener("selectstart",l),o.removeEventListener("selectend",l),o.removeEventListener("squeeze",l),o.removeEventListener("squeezestart",l),o.removeEventListener("squeezeend",l),o.removeEventListener("end",T),o.removeEventListener("inputsourceschange",z);for(let e=0;e<c.length;e++){const t=d[e];null!==t&&(d[e]=null,c[e].disconnect(t))}A=null,_=null,e.setRenderTarget(P),r=null,a=null,b=null,o=null,h=null,y.stop(),f.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),f.dispatchEvent({type:"sessionend"})}function z(e){for(let t=0;t<e.removed.length;t++){const s=e.removed[t],n=d.indexOf(s);n>=0&&(d[n]=null,c[n].disconnect(s))}for(let s=0;s<e.added.length;s++){const n=e.added[s];let t=d.indexOf(n);if(-1===t){for(let e=0;e<c.length;e++){if(e>=d.length){d.push(n),t=e;break}if(null===d[e]){d[e]=n,t=e;break}}if(-1===t)break}const o=c[t];o&&o.connect(n)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=c[e];return void 0===t&&(t=new Ma,c[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=c[e];return void 0===t&&(t=new Ma,c[e]=t),t.getGripSpace()},this.getHand=function(e){let t=c[e];return void 0===t&&(t=new Ma,c[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){k=e,!0===f.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){R=e,!0===f.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||j},this.setReferenceSpace=function(e){v=e},this.getBaseLayer=function(){return null!==a?a:r},this.getBinding=function(){return b},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(t){if(o=t,null!==o){if(P=e.getRenderTarget(),o.addEventListener("select",l),o.addEventListener("selectstart",l),o.addEventListener("selectend",l),o.addEventListener("squeeze",l),o.addEventListener("squeezestart",l),o.addEventListener("squeezeend",l),o.addEventListener("end",T),o.addEventListener("inputsourceschange",z),!0!==u.xrCompatible&&await s.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),void 0===o.renderState.layers||!1===e.capabilities.isWebGL2){const t={antialias:void 0!==o.renderState.layers||u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:k};r=new XRWebGLLayer(o,s,t),o.updateRenderState({baseLayer:r}),e.setPixelRatio(1),e.setSize(r.framebufferWidth,r.framebufferHeight,!1),h=new ie(r.framebufferWidth,r.framebufferHeight,{format:X,type:Ie,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let t=null,n=null,i=null;u.depth&&(i=u.stencil?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT24,t=u.stencil?rt:De,n=u.stencil?ke:ue);const r={colorFormat:s.RGBA8,depthFormat:i,scaleFactor:k};b=new XRWebGLBinding(o,s),a=b.createProjectionLayer(r),o.updateRenderState({layers:[a]}),e.setPixelRatio(1),e.setSize(a.textureWidth,a.textureHeight,!1),h=new ie(a.textureWidth,a.textureHeight,{format:X,type:Ie,depthTexture:new oi(a.textureWidth,a.textureHeight,n,void 0,void 0,void 0,void 0,void 0,void 0,t),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0}),e.properties.get(h).__ignoreDepthValues=a.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(C),v=null,j=await o.requestReferenceSpace(R),y.setContext(o),y.start(),f.isPresenting=!0,f.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(null!==o)return o.environmentBlendMode};const D=new t,N=new t;function L(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(null===o)return;i.near=g.near=m.near=e.near,i.far=g.far=m.far=e.far,A===i.near&&_===i.far||(o.updateRenderState({depthNear:i.near,depthFar:i.far}),A=i.near,_=i.far);const t=e.parent,n=i.cameras;L(i,t);for(let e=0;e<n.length;e++)L(n[e],t);2===n.length?function(e,t,n){D.setFromMatrixPosition(t.matrixWorld),N.setFromMatrixPosition(n.matrixWorld);const m=D.distanceTo(N),s=t.projectionMatrix.elements,u=n.projectionMatrix.elements,a=s[14]/(s[10]-1),r=s[14]/(s[10]+1),v=(s[9]+1)/s[5],g=(s[9]-1)/s[5],d=(s[8]-1)/s[0],h=(u[8]+1)/u[0],f=a*d,p=a*h,o=m/(-d+h),i=o*-d;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(i),e.translateZ(o),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();const l=a+o,c=r+o,b=f-i,j=p+(m-i),y=v*r/c*l,_=g*r/c*l;e.projectionMatrix.makePerspective(b,j,y,_,l,c),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}(i,m,g):i.projectionMatrix.copy(m.projectionMatrix),function(e,t,n){null===n?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=2*pt*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}(e,i,t)},this.getCamera=function(){return i},this.getFoveation=function(){if(null!==a||null!==r)return C},this.setFoveation=function(e){C=e,null!==a&&(a.fixedFoveation=e),null!==r&&void 0!==r.fixedFoveation&&(r.fixedFoveation=e)};let E=null;const y=new _l;y.setAnimationLoop(function(t,n){if(O=n.getViewerPose(v||j),w=n,null!==O){const t=O.views;null!==r&&(e.setRenderTargetFramebuffer(h,r.framebuffer),e.setRenderTarget(h));let n=!1;t.length!==i.cameras.length&&(i.cameras.length=0,n=!0);for(let o=0;o<t.length;o++){const l=t[o];let c=null;if(null!==r)c=r.getViewport(l);else{const t=b.getViewSubImage(a,l);c=t.viewport,0===o&&(e.setRenderTargetTextures(h,t.colorTexture,a.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(h))}let s=F[o];void 0===s&&(s=new M,s.layers.enable(o),s.viewport=new p,F[o]=s),s.matrix.fromArray(l.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(l.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(c.x,c.y,c.width,c.height),0===o&&(i.matrix.copy(s.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale)),!0===n&&i.cameras.push(s)}}for(let e=0;e<c.length;e++){const t=d[e],s=c[e];null!==t&&void 0!==s&&s.update(t,n,v||j)}E&&E(t,n),n.detectedPlanes&&f.dispatchEvent({type:"planesdetected",data:n}),w=null}),this.setAnimationLoop=function(e){E=e},this.dispose=function(){}}}function Yu(e,t){function n(e,t){!0===e.matrixAutoUpdate&&e.updateMatrix(),t.value.copy(e.matrix)}function s(s,o){s.opacity.value=o.opacity,o.color&&s.diffuse.value.copy(o.color),o.emissive&&s.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(s.map.value=o.map,n(o.map,s.mapTransform)),o.alphaMap&&(s.alphaMap.value=o.alphaMap,n(o.alphaMap,s.alphaMapTransform)),o.bumpMap&&(s.bumpMap.value=o.bumpMap,n(o.bumpMap,s.bumpMapTransform),s.bumpScale.value=o.bumpScale,o.side===R&&(s.bumpScale.value*=-1)),o.normalMap&&(s.normalMap.value=o.normalMap,n(o.normalMap,s.normalMapTransform),s.normalScale.value.copy(o.normalScale),o.side===R&&s.normalScale.value.negate()),o.displacementMap&&(s.displacementMap.value=o.displacementMap,n(o.displacementMap,s.displacementMapTransform),s.displacementScale.value=o.displacementScale,s.displacementBias.value=o.displacementBias),o.emissiveMap&&(s.emissiveMap.value=o.emissiveMap,n(o.emissiveMap,s.emissiveMapTransform)),o.specularMap&&(s.specularMap.value=o.specularMap,n(o.specularMap,s.specularMapTransform)),o.alphaTest>0&&(s.alphaTest.value=o.alphaTest);const i=t.get(o).envMap;if(i&&(s.envMap.value=i,s.flipEnvMap.value=i.isCubeTexture&&!1===i.isRenderTargetTexture?-1:1,s.reflectivity.value=o.reflectivity,s.ior.value=o.ior,s.refractionRatio.value=o.refractionRatio),o.lightMap){s.lightMap.value=o.lightMap;const t=!0===e._useLegacyLights?Math.PI:1;s.lightMapIntensity.value=o.lightMapIntensity*t,n(o.lightMap,s.lightMapTransform)}o.aoMap&&(s.aoMap.value=o.aoMap,s.aoMapIntensity.value=o.aoMapIntensity,n(o.aoMap,s.aoMapTransform))}return{refreshFogUniforms:function(t,n){n.color.getRGB(t.fogColor.value,ml(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)},refreshMaterialUniforms:function(e,o,i,a,r){o.isMeshBasicMaterial||o.isMeshLambertMaterial?s(e,o):o.isMeshToonMaterial?(s(e,o),function(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}(e,o)):o.isMeshPhongMaterial?(s(e,o),function(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}(e,o)):o.isMeshStandardMaterial?(s(e,o),function(e,s){e.metalness.value=s.metalness,s.metalnessMap&&(e.metalnessMap.value=s.metalnessMap,n(s.metalnessMap,e.metalnessMapTransform)),e.roughness.value=s.roughness,s.roughnessMap&&(e.roughnessMap.value=s.roughnessMap,n(s.roughnessMap,e.roughnessMapTransform));const o=t.get(s).envMap;o&&(e.envMapIntensity.value=s.envMapIntensity)}(e,o),o.isMeshPhysicalMaterial&&function(e,t,s){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===R&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=s.texture,e.transmissionSamplerSize.value.set(s.width,s.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}(e,o,r)):o.isMeshMatcapMaterial?(s(e,o),function(e,t){t.matcap&&(e.matcap.value=t.matcap)}(e,o)):o.isMeshDepthMaterial?s(e,o):o.isMeshDistanceMaterial?(s(e,o),function(e,n){const s=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(s.matrixWorld),e.nearDistance.value=s.shadow.camera.near,e.farDistance.value=s.shadow.camera.far}(e,o)):o.isMeshNormalMaterial?s(e,o):o.isLineBasicMaterial?(function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}(e,o),o.isLineDashedMaterial&&function(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}(e,o)):o.isPointsMaterial?function(e,t,s,o){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*s,e.scale.value=.5*o,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,o,i,a):o.isSpriteMaterial?function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,o):o.isShadowMaterial?(e.color.value.copy(o.color),e.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}}}function qu(e,t,n,s){let o={},a={},i=[];const l=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(e,t,n,s){const o=e.value,i=t+"_"+n;if(void 0===s[i])return s[i]="number"==typeof o||"boolean"==typeof o?o:o.clone(),!0;{const e=s[i];if("number"==typeof o||"boolean"==typeof o){if(e!==o)return s[i]=o,!0}else if(!1===e.equals(o))return e.copy(o),!0}return!1}function r(e){const t={boundary:0,storage:0};return"number"==typeof e||"boolean"==typeof e?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",e),t}function c(t){const n=t.target;n.removeEventListener("dispose",c);const s=i.indexOf(n.__bindingPointIndex);i.splice(s,1),e.deleteBuffer(o[n.id]),delete o[n.id],delete a[n.id]}return{bind:function(e,t){const n=t.program;s.uniformBlockBinding(e,n)},update:function(n,u){let h=o[n.id];void 0===h&&(!function(e){const s=e.uniforms;let t=0;const n=16;for(let e=0,i=s.length;e<i;e++){const o=Array.isArray(s[e])?s[e]:[s[e]];for(let s=0,a=o.length;s<a;s++){const e=o[s],i=Array.isArray(e.value)?e.value:[e.value];for(let s=0,c=i.length;s<c;s++){const o=r(i[s]),a=t%n;0!==a&&n-a<o.boundary&&(t+=n-a),e.__data=new Float32Array(o.storage/Float32Array.BYTES_PER_ELEMENT),e.__offset=t,t+=o.storage}}}const o=t%n;o>0&&(t+=n-o),e.__size=t,e.__cache={}}(n),h=function(t){const s=function(){for(let e=0;e<l;e++)if(-1===i.indexOf(e))return i.push(e),e;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();t.__bindingPointIndex=s;const n=e.createBuffer(),o=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,o,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,s,n),n}(n),o[n.id]=h,n.addEventListener("dispose",c));const f=u.program;s.updateUBOMapping(n,f);const m=t.render.frame;a[n.id]!==m&&(!function(t){const s=o[t.id],n=t.uniforms,i=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,s);for(let t=0,o=n.length;t<o;t++){const s=Array.isArray(n[t])?n[t]:[n[t]];for(let o=0,a=s.length;o<a;o++){const n=s[o];if(!0===d(n,t,o,i)){const s=n.__offset,o=Array.isArray(n.value)?n.value:[n.value];let t=0;for(let a=0;a<o.length;a++){const i=o[a],c=r(i);"number"==typeof i||"boolean"==typeof i?(n.__data[0]=i,e.bufferSubData(e.UNIFORM_BUFFER,s+t,n.__data)):i.isMatrix3?(n.__data[0]=i.elements[0],n.__data[1]=i.elements[1],n.__data[2]=i.elements[2],n.__data[3]=0,n.__data[4]=i.elements[3],n.__data[5]=i.elements[4],n.__data[6]=i.elements[5],n.__data[7]=0,n.__data[8]=i.elements[6],n.__data[9]=i.elements[7],n.__data[10]=i.elements[8],n.__data[11]=0):(i.toArray(n.__data,t),t+=c.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,s,n.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}(n),a[n.id]=m)},dispose:function(){for(const t in o)e.deleteBuffer(o[t]);i=[],o={},a={}}}}class nr{constructor(e={}){const{canvas:f=jr(),context:de=null,depth:Ye=!0,stencil:qe=!0,alpha:Ge=!1,antialias:Qe=!1,premultipliedAlpha:Fe=!0,preserveDrawingBuffer:Ke=!1,powerPreference:Ze="default",failIfMajorPerformanceCaveat:Je=!1}=e;let Oe;this.isWebGLRenderer=!0,Oe=null!==de?de.getContextAttributes().alpha:Ge;const I=new Uint32Array(4),q=new Int32Array(4);let j=null,h=null;const D=[],E=[];this.domElement=f,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=A,this._useLegacyLights=!1,this.toneMapping=ge,this.toneMappingExposure=1;const i=this;let ve=!1,oe=0,ye=0,m=null,U=-1,N=null;const L=new p,Y=new p;let be=null;const Me=new o(0);let me=0,F=f.width,S=f.height,v=1,Ve=null,Te=null;const V=new p(0,0,F,S),$=new p(0,0,F,S);let le=!1;const re=new Jt;let K=!1,ae=!1,b=null;const G=new a,B=new n,k=new t,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return null===m?v:1}let u,l,r,_,c,d,H,z,W,fe,P,C,je,J,Q,x,y,w,Ce,Ee,Ae,O,M,ee,s=de;function we(e,t){for(let n=0;n<e.length;n++){const o=e[n],s=f.getContext(o,t);if(null!==s)return s}return null}try{const e={alpha:!0,depth:Ye,stencil:qe,antialias:Qe,premultipliedAlpha:Fe,preserveDrawingBuffer:Ke,powerPreference:Ze,failIfMajorPerformanceCaveat:Je};if("setAttribute"in f&&f.setAttribute("data-engine",`three.js r${Es}`),f.addEventListener("webglcontextlost",Le,!1),f.addEventListener("webglcontextrestored",Re,!1),f.addEventListener("webglcontextcreationerror",Pe,!1),null===s){const t=["webgl2","webgl","experimental-webgl"];if(!0===i.isWebGL1Renderer&&t.shift(),s=we(t,e),null===s)throw we(t)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}"undefined"!=typeof WebGLRenderingContext&&s instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),void 0===s.getShaderPrecisionFormat&&(s.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error("THREE.WebGLRenderer: "+e.message),e}function De(){u=new Jl(s),l=new Bl(s,u,e),u.init(l),O=new Ya(s,u,l),r=new t1(s,u,l),_=new sd(s),c=new s1,d=new e1(s,u,r,c,l,O,_),H=new Hl(i),z=new Nl(i),W=new Yl(s,l),M=new Kl(s,u,W,l),fe=new ed(s,W,_,M),P=new rd(s,fe,W,_),Ce=new ad(s,l,d),x=new Il(c),C=new Ju(i,H,z,u,l,M,x),je=new Yu(i,c),J=new d1,Q=new i1(u,l),w=new ql(i,H,z,r,P,Oe,Fe),y=new n1(i,P,l),ee=new qu(s,_,l,r),Ee=new Wl(s,u,_,l),Ae=new nd(s,u,_,l),_.programs=C.programs,i.capabilities=l,i.extensions=u,i.properties=c,i.renderLists=J,i.shadowMap=y,i.state=r,i.info=_}De();const g=new Gu(i,s);function Le(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),ve=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),ve=!1;const e=_.autoReset,t=y.enabled,n=y.autoUpdate,s=y.needsUpdate,o=y.type;De(),_.autoReset=e,y.enabled=t,y.autoUpdate=n,y.needsUpdate=s,y.type=o}function Pe(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function He(e){const t=e.target;t.removeEventListener("dispose",He),function(e){(function(e){const t=c.get(e).programs;void 0!==t&&(t.forEach(function(e){C.releaseProgram(e)}),e.isShaderMaterial&&C.releaseShaderCache(e))})(e),c.remove(e)}(t)}function _e(e,t,n){!0===e.transparent&&2===e.side&&!1===e.forceSinglePass?(e.side=R,e.needsUpdate=!0,ne(e,t,n),e.side=pe,e.needsUpdate=!0,ne(e,t,n),e.side=2):ne(e,t,n)}this.xr=g,this.getContext=function(){return s},this.getContextAttributes=function(){return s.getContextAttributes()},this.forceContextLoss=function(){const e=u.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){const e=u.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(e){void 0!==e&&(v=e,this.setSize(F,S,!1))},this.getSize=function(e){return e.set(F,S)},this.setSize=function(e,t,n=!0){g.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(F=e,S=t,f.width=Math.floor(e*v),f.height=Math.floor(t*v),!0===n&&(f.style.width=e+"px",f.style.height=t+"px"),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return e.set(F*v,S*v).floor()},this.setDrawingBufferSize=function(e,t,n){F=e,S=t,v=n,f.width=Math.floor(e*n),f.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return e.copy(L)},this.getViewport=function(e){return e.copy(V)},this.setViewport=function(e,t,n,s){e.isVector4?V.set(e.x,e.y,e.z,e.w):V.set(e,t,n,s),r.viewport(L.copy(V).multiplyScalar(v).floor())},this.getScissor=function(e){return e.copy($)},this.setScissor=function(e,t,n,s){e.isVector4?$.set(e.x,e.y,e.z,e.w):$.set(e,t,n,s),r.scissor(Y.copy($).multiplyScalar(v).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(e){r.setScissorTest(le=e)},this.setOpaqueSort=function(e){Ve=e},this.setTransparentSort=function(e){Te=e},this.getClearColor=function(e){return e.copy(w.getClearColor())},this.setClearColor=function(){w.setClearColor.apply(w,arguments)},this.getClearAlpha=function(){return w.getClearAlpha()},this.setClearAlpha=function(){w.setClearAlpha.apply(w,arguments)},this.clear=function(e=!0,t=!0,n=!0){let o=0;if(e){let e=!1;if(null!==m){const t=m.texture.format;e=t===Ko||t===qo||t===Qo}if(e){const e=m.texture.type,r=e===Ie||e===ue||e===$n||e===ke||e===ii||e===Zo,t=w.getClearColor(),n=w.getClearAlpha(),o=t.r,i=t.g,a=t.b;r?(I[0]=o,I[1]=i,I[2]=a,I[3]=n,s.clearBufferuiv(s.COLOR,0,I)):(q[0]=o,q[1]=i,q[2]=a,q[3]=n,s.clearBufferiv(s.COLOR,0,q))}else o|=s.COLOR_BUFFER_BIT}t&&(o|=s.DEPTH_BUFFER_BIT),n&&(o|=s.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),s.clear(o)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){f.removeEventListener("webglcontextlost",Le,!1),f.removeEventListener("webglcontextrestored",Re,!1),f.removeEventListener("webglcontextcreationerror",Pe,!1),J.dispose(),Q.dispose(),c.dispose(),H.dispose(),z.dispose(),P.dispose(),M.dispose(),ee.dispose(),C.dispose(),g.dispose(),g.removeEventListener("sessionstart",$e),g.removeEventListener("sessionend",We),b&&(b.dispose(),b=null),T.stop()},this.renderBufferDirect=function(e,t,n,o,a,u){null===t&&(t=se);const E=a.isMesh&&a.matrixWorld.determinant()<0,A=function(e,t,n,o,a){!0!==t.isScene&&(t=se),d.resetTextureUnits();const A=t.fog,W=o.isMeshStandardMaterial?t.environment:null,$=null===m?i.outputColorSpace:!0===m.isXRRenderTarget?m.texture.colorSpace:ce,O=(o.isMeshStandardMaterial?z:H).get(o.envMap||W),B=!0===o.vertexColors&&!!n.attributes.color&&4===n.attributes.color.itemSize,I=!!n.attributes.tangent&&(!!o.normalMap||o.anisotropy>0),R=!!n.morphAttributes.position,L=!!n.morphAttributes.normal,P=!!n.morphAttributes.color;let F=ge;o.toneMapped&&(null!==m&&!0!==m.isXRRenderTarget||(F=i.toneMapping));const T=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,V=void 0!==T?T.length:0,u=c.get(o),D=h.state.lights;if(!0===K&&(!0===ae||e!==N)){const t=e===N&&o.id===U;x.setState(o,e,t)}let g=!1;o.version===u.__version?u.needsLights&&u.lightsStateVersion!==D.state.version||u.outputColorSpace!==$||a.isBatchedMesh&&!1===u.batching?g=!0:a.isBatchedMesh||!0!==u.batching?a.isInstancedMesh&&!1===u.instancing?g=!0:a.isInstancedMesh||!0!==u.instancing?a.isSkinnedMesh&&!1===u.skinning?g=!0:a.isSkinnedMesh||!0!==u.skinning?a.isInstancedMesh&&!0===u.instancingColor&&null===a.instanceColor||a.isInstancedMesh&&!1===u.instancingColor&&null!==a.instanceColor||u.envMap!==O||!0===o.fog&&u.fog!==A?g=!0:void 0===u.numClippingPlanes||u.numClippingPlanes===x.numPlanes&&u.numIntersection===x.numIntersection?(u.vertexAlphas!==B||u.vertexTangents!==I||u.morphTargets!==R||u.morphNormals!==L||u.morphColors!==P||u.toneMapping!==F||!0===l.isWebGL2&&u.morphTargetsCount!==V)&&(g=!0):g=!0:g=!0:g=!0:g=!0:(g=!0,u.__version=o.version);let _=u.currentProgram;!0===g&&(_=ne(o,t,a));let M=!1,w=!1,C=!1;const f=_.getUniforms(),y=u.uniforms;if(r.useProgram(_.program)&&(M=!0,w=!0,C=!0),o.id!==U&&(U=o.id,w=!0),M||N!==e){f.setValue(s,"projectionMatrix",e.projectionMatrix),f.setValue(s,"viewMatrix",e.matrixWorldInverse);const t=f.map.cameraPosition;void 0!==t&&t.setValue(s,k.setFromMatrixPosition(e.matrixWorld)),l.logarithmicDepthBuffer&&f.setValue(s,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),(o.isMeshPhongMaterial||o.isMeshToonMaterial||o.isMeshLambertMaterial||o.isMeshBasicMaterial||o.isMeshStandardMaterial||o.isShaderMaterial)&&f.setValue(s,"isOrthographic",!0===e.isOrthographicCamera),N!==e&&(N=e,w=!0,C=!0)}if(a.isSkinnedMesh){f.setOptional(s,a,"bindMatrix"),f.setOptional(s,a,"bindMatrixInverse");const e=a.skeleton;e&&(l.floatVertexTextures?(null===e.boneTexture&&e.computeBoneTexture(),f.setValue(s,"boneTexture",e.boneTexture,d)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}a.isBatchedMesh&&(f.setOptional(s,a,"batchingTexture"),f.setValue(s,"batchingTexture",a._matricesTexture,d));const E=n.morphAttributes;(void 0!==E.position||void 0!==E.normal||void 0!==E.color&&!0===l.isWebGL2)&&Ce.update(a,n,_),(w||u.receiveShadow!==a.receiveShadow)&&(u.receiveShadow=a.receiveShadow,f.setValue(s,"receiveShadow",a.receiveShadow)),o.isMeshGouraudMaterial&&null!==o.envMap&&(y.envMap.value=O,y.flipEnvMap.value=O.isCubeTexture&&!1===O.isRenderTargetTexture?-1:1),w&&(f.setValue(s,"toneMappingExposure",i.toneMappingExposure),u.needsLights&&(p=C,(j=y).ambientLightColor.needsUpdate=p,j.lightProbe.needsUpdate=p,j.directionalLights.needsUpdate=p,j.directionalLightShadows.needsUpdate=p,j.pointLights.needsUpdate=p,j.pointLightShadows.needsUpdate=p,j.spotLights.needsUpdate=p,j.spotLightShadows.needsUpdate=p,j.rectAreaLights.needsUpdate=p,j.hemisphereLights.needsUpdate=p),A&&!0===o.fog&&je.refreshFogUniforms(y,A),je.refreshMaterialUniforms(y,o,v,S,b),is.upload(s,Se(u),y,d));var p,j;if(o.isShaderMaterial&&!0===o.uniformsNeedUpdate&&(is.upload(s,Se(u),y,d),o.uniformsNeedUpdate=!1),o.isSpriteMaterial&&f.setValue(s,"center",a.center),f.setValue(s,"modelViewMatrix",a.modelViewMatrix),f.setValue(s,"normalMatrix",a.normalMatrix),f.setValue(s,"modelMatrix",a.matrixWorld),o.isShaderMaterial||o.isRawShaderMaterial){const e=o.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(l.isWebGL2){const n=e[t];ee.update(n,_),ee.bind(n,_)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _}(e,t,n,o,a);r.setMaterial(o,E);let g=n.index,y=1;if(!0===o.wireframe){if(g=fe.getWireframeAttribute(n),void 0===g)return;y=2}const w=n.drawRange,O=n.attributes.position;let p=w.start*y,j=(w.start+w.count)*y;null!==u&&(p=Math.max(p,u.start*y),j=Math.min(j,(u.start+u.count)*y)),null!==g?(p=Math.max(p,0),j=Math.min(j,g.count)):O!=null&&(p=Math.max(p,0),j=Math.min(j,O.count));const _=j-p;if(_<0||_===1/0)return;let C;M.setup(a,o,A,n,g);let f=Ee;if(null!==g&&(C=W.get(g),f=Ae,f.setIndex(C)),a.isMesh)!0===o.wireframe?(r.setLineWidth(o.wireframeLinewidth*Be()),f.setMode(s.LINES)):f.setMode(s.TRIANGLES);else if(a.isLine){let e=o.linewidth;void 0===e&&(e=1),r.setLineWidth(e*Be()),a.isLineSegments?f.setMode(s.LINES):a.isLineLoop?f.setMode(s.LINE_LOOP):f.setMode(s.LINE_STRIP)}else a.isPoints?f.setMode(s.POINTS):a.isSprite&&f.setMode(s.TRIANGLES);if(a.isBatchedMesh)f.renderMultiDraw(a._multiDrawStarts,a._multiDrawCounts,a._multiDrawCount);else if(a.isInstancedMesh)f.renderInstances(p,_,a.count);else if(n.isInstancedBufferGeometry){const e=void 0!==n._maxInstanceCount?n._maxInstanceCount:1/0,t=Math.min(n.instanceCount,e);f.renderInstances(p,_,t)}else f.render(p,_)},this.compile=function(e,t,n=null){null===n&&(n=e),h=Q.get(n),h.init(),E.push(h),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),h.setupLights(i._useLegacyLights);const s=new Set;return e.traverse(function(e){const t=e.material;if(t)if(Array.isArray(t))for(let o=0;o<t.length;o++){const i=t[o];_e(i,n,e),s.add(i)}else _e(t,n,e),s.add(t)}),E.pop(),h=null,s},this.compileAsync=function(e,t,n=null){const s=this.compile(e,t,n);return new Promise(t=>{function n(){s.forEach(function(e){c.get(e).currentProgram.isReady()&&s.delete(e)}),0!==s.size?setTimeout(n,10):t(e)}null!==u.get("KHR_parallel_shader_compile")?n():setTimeout(n,10)})};let he=null;function $e(){T.stop()}function We(){T.start()}const T=new _l;function ze(e,t,n,s){if(!1===e.visible)return;if(e.layers.test(t.layers))if(e.isGroup)n=e.renderOrder;else if(e.isLOD)!0===e.autoUpdate&&e.update(t);else if(e.isLight)h.pushLight(e),e.castShadow&&h.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||re.intersectsSprite(e)){s&&k.setFromMatrixPosition(e.matrixWorld).applyMatrix4(G);const o=P.update(e),t=e.material;t.visible&&j.push(e,o,t,n,k.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||re.intersectsObject(e))){const t=P.update(e),o=e.material;if(s&&(void 0!==e.boundingSphere?(null===e.boundingSphere&&e.computeBoundingSphere(),k.copy(e.boundingSphere.center)):(null===t.boundingSphere&&t.computeBoundingSphere(),k.copy(t.boundingSphere.center)),k.applyMatrix4(e.matrixWorld).applyMatrix4(G)),Array.isArray(o)){const s=t.groups;for(let i=0,c=s.length;i<c;i++){const r=s[i],a=o[r.materialIndex];a&&a.visible&&j.push(e,t,a,n,k.z,r)}}else o.visible&&j.push(e,t,o,n,k.z,null)}const o=e.children;for(let e=0,i=o.length;e<i;e++)ze(o[e],t,n,s)}function Ue(e,t,n,s){const a=e.opaque,o=e.transmissive,c=e.transparent;h.setupLightsView(n),!0===K&&x.setGlobalState(i.clippingPlanes,n),o.length>0&&function(e,t,n,s){const r=!0===n.isScene?n.overrideMaterial:null;if(null!==r)return;const o=l.isWebGL2;null===b&&(b=new ie(1,1,{generateMipmaps:!0,type:u.has("EXT_color_buffer_half_float")?Dt:Ie,minFilter:Xe,samples:o?4:0})),i.getDrawingBufferSize(B),o?b.setSize(B.x,B.y):b.setSize(qn(B.x),qn(B.y));const c=i.getRenderTarget();i.setRenderTarget(b),i.getClearColor(Me),me=i.getClearAlpha(),me<1&&i.setClearColor(16777215,.5),i.clear();const h=i.toneMapping;i.toneMapping=ge,te(e,n,s),d.updateMultisampleRenderTarget(b),d.updateRenderTargetMipmap(b);let a=!1;for(let i=0,c=t.length;i<c;i++){const o=t[i],r=o.object,l=o.geometry,e=o.material,d=o.group;if(2===e.side&&r.layers.test(s.layers)){const t=e.side;e.side=R,e.needsUpdate=!0,Ne(r,n,s,l,e,d),e.side=t,e.needsUpdate=!0,a=!0}}!0===a&&(d.updateMultisampleRenderTarget(b),d.updateRenderTargetMipmap(b)),i.setRenderTarget(c),i.setClearColor(Me,me),i.toneMapping=h}(a,o,t,n),s&&r.viewport(L.copy(s)),a.length>0&&te(a,t,n),o.length>0&&te(o,t,n),c.length>0&&te(c,t,n),r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),r.setPolygonOffset(!1)}function te(e,t,n){const s=!0===t.isScene?t.overrideMaterial:null;for(let i=0,r=e.length;i<r;i++){const o=e[i],a=o.object,c=o.geometry,l=null===s?o.material:s,d=o.group;a.layers.test(n.layers)&&Ne(a,t,n,c,l,d)}}function Ne(e,t,n,s,o,a){e.onBeforeRender(i,t,n,s,o,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),o.onBeforeRender(i,t,n,s,e,a),!0===o.transparent&&2===o.side&&!1===o.forceSinglePass?(o.side=R,o.needsUpdate=!0,i.renderBufferDirect(n,t,s,o,e,a),o.side=pe,o.needsUpdate=!0,i.renderBufferDirect(n,t,s,o,e,a),o.side=2):i.renderBufferDirect(n,t,s,o,e,a),e.onAfterRender(i,t,n,s,o,a)}function ne(e,t,n){!0!==t.isScene&&(t=se);const a=c.get(e),s=h.state.lights,f=h.state.shadowsArray,m=s.state.version,r=C.getParameters(e,s.state,f,t,n),u=C.getProgramCacheKey(r);let d=a.programs;a.environment=e.isMeshStandardMaterial?t.environment:null,a.fog=t.fog,a.envMap=(e.isMeshStandardMaterial?z:H).get(e.envMap||a.environment),void 0===d&&(e.addEventListener("dispose",He),d=new Map,a.programs=d);let l=d.get(u);if(void 0!==l){if(a.currentProgram===l&&a.lightsStateVersion===m)return xe(e,r),l}else r.uniforms=C.getUniforms(e),e.onBuild(n,r,i),e.onBeforeCompile(r,i),l=C.acquireProgram(r,u),d.set(u,l),a.uniforms=r.uniforms;const o=a.uniforms;return(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(o.clippingPlanes=x.uniform),xe(e,r),a.needsLights=function(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights}(e),a.lightsStateVersion=m,a.needsLights&&(o.ambientLightColor.value=s.state.ambient,o.lightProbe.value=s.state.probe,o.directionalLights.value=s.state.directional,o.directionalLightShadows.value=s.state.directionalShadow,o.spotLights.value=s.state.spot,o.spotLightShadows.value=s.state.spotShadow,o.rectAreaLights.value=s.state.rectArea,o.ltc_1.value=s.state.rectAreaLTC1,o.ltc_2.value=s.state.rectAreaLTC2,o.pointLights.value=s.state.point,o.pointLightShadows.value=s.state.pointShadow,o.hemisphereLights.value=s.state.hemi,o.directionalShadowMap.value=s.state.directionalShadowMap,o.directionalShadowMatrix.value=s.state.directionalShadowMatrix,o.spotShadowMap.value=s.state.spotShadowMap,o.spotLightMatrix.value=s.state.spotLightMatrix,o.spotLightMap.value=s.state.spotLightMap,o.pointShadowMap.value=s.state.pointShadowMap,o.pointShadowMatrix.value=s.state.pointShadowMatrix),a.currentProgram=l,a.uniformsList=null,l}function Se(e){if(null===e.uniformsList){const t=e.currentProgram.getUniforms();e.uniformsList=is.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function xe(e,t){const n=c.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}T.setAnimationLoop(function(e){he&&he(e)}),"undefined"!=typeof self&&T.setContext(self),this.setAnimationLoop=function(e){he=e,g.setAnimationLoop(e),null===e?T.stop():T.start()},g.addEventListener("sessionstart",$e),g.addEventListener("sessionend",We),this.render=function(e,t){if(void 0!==t&&!0!==t.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===ve)return;!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===g.enabled&&!0===g.isPresenting&&(!0===g.cameraAutoUpdate&&g.updateCamera(t),t=g.getCamera()),!0===e.isScene&&e.onBeforeRender(i,e,t,m),h=Q.get(e,E.length),h.init(),E.push(h),G.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),re.setFromProjectionMatrix(G),ae=this.localClippingEnabled,K=x.init(this.clippingPlanes,ae),j=J.get(e,D.length),j.init(),D.push(j),ze(e,t,0,i.sortObjects),j.finish(),!0===i.sortObjects&&j.sort(Ve,Te),this.info.render.frame++,!0===K&&x.beginShadows();const n=h.state.shadowsArray;if(y.render(n,e,t),!0===K&&x.endShadows(),!0===this.info.autoReset&&this.info.reset(),w.render(j,e),h.setupLights(i._useLegacyLights),t.isArrayCamera){const n=t.cameras;for(let t=0,o=n.length;t<o;t++){const s=n[t];Ue(j,e,s,s.viewport)}}else Ue(j,e,t);null!==m&&(d.updateMultisampleRenderTarget(m),d.updateRenderTargetMipmap(m)),!0===e.isScene&&e.onAfterRender(i,e,t),M.resetDefaultState(),U=-1,N=null,E.pop(),h=E.length>0?E[E.length-1]:null,D.pop(),j=D.length>0?D[D.length-1]:null},this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return ye},this.getRenderTarget=function(){return m},this.setRenderTargetTextures=function(e,t,n){c.get(e.texture).__webglTexture=t,c.get(e.depthTexture).__webglTexture=n;const s=c.get(e);s.__hasExternalTextures=!0,s.__hasExternalTextures&&(s.__autoAllocateDepthBuffer=void 0===n,s.__autoAllocateDepthBuffer||!0===u.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),s.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){const n=c.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=void 0===t},this.setRenderTarget=function(e,t=0,n=0){m=e,oe=t,ye=n;let i=!0,o=null,a=!1,u=!1;if(e){const m=c.get(e);void 0!==m.__useDefaultFramebuffer?(r.bindFramebuffer(s.FRAMEBUFFER,null),i=!1):void 0===m.__webglFramebuffer?d.setupRenderTarget(e):m.__hasExternalTextures&&d.rebindTextures(e,c.get(e.texture).__webglTexture,c.get(e.depthTexture).__webglTexture);const f=e.texture;(f.isData3DTexture||f.isDataArrayTexture||f.isCompressedArrayTexture)&&(u=!0);const h=c.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(o=Array.isArray(h[t])?h[t][n]:h[t],a=!0):o=l.isWebGL2&&e.samples>0&&!1===d.useMultisampledRTT(e)?c.get(e).__webglMultisampledFramebuffer:Array.isArray(h)?h[n]:h,L.copy(e.viewport),Y.copy(e.scissor),be=e.scissorTest}else L.copy(V).multiplyScalar(v).floor(),Y.copy($).multiplyScalar(v).floor(),be=le;if(r.bindFramebuffer(s.FRAMEBUFFER,o)&&l.drawBuffers&&i&&r.drawBuffers(e,o),r.viewport(L),r.scissor(Y),r.setScissorTest(be),a){const o=c.get(e.texture);s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+t,o.__webglTexture,n)}else if(u){const o=c.get(e.texture),i=t||0;s.framebufferTextureLayer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,o.__webglTexture,n||0,i)}U=-1},this.readRenderTargetPixels=function(e,t,n,o,i,a,d){if(!e||!e.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let h=c.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&void 0!==d&&(h=h[d]),h){r.bindFramebuffer(s.FRAMEBUFFER,h);try{const d=e.texture,c=d.format,r=d.type;if(c!==X&&O.convert(c)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const h=r===Dt&&(u.has("EXT_color_buffer_half_float")||l.isWebGL2&&u.has("EXT_color_buffer_float"));if(!(r===Ie||O.convert(r)===s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)||r===Z&&(l.isWebGL2||u.has("OES_texture_float")||u.has("WEBGL_color_buffer_float"))||h))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");t>=0&&t<=e.width-o&&n>=0&&n<=e.height-i&&s.readPixels(t,n,o,i,O.convert(c),O.convert(r),a)}finally{const e=null!==m?c.get(m).__webglFramebuffer:null;r.bindFramebuffer(s.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){const o=Math.pow(2,-n),i=Math.floor(t.image.width*o),a=Math.floor(t.image.height*o);d.setTexture2D(t,0),s.copyTexSubImage2D(s.TEXTURE_2D,n,0,0,e.x,e.y,i,a),r.unbindTexture()},this.copyTextureToTexture=function(e,t,n,o=0){const c=t.image.width,l=t.image.height,i=O.convert(n.format),a=O.convert(n.type);d.setTexture2D(n,0),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,n.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?s.texSubImage2D(s.TEXTURE_2D,o,e.x,e.y,c,l,i,a,t.image.data):t.isCompressedTexture?s.compressedTexSubImage2D(s.TEXTURE_2D,o,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,i,t.mipmaps[0].data):s.texSubImage2D(s.TEXTURE_2D,o,e.x,e.y,i,a,t.image),0===o&&n.generateMipmaps&&s.generateMipmap(s.TEXTURE_2D),r.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,o,a=0){if(i.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const u=e.max.x-e.min.x+1,h=e.max.y-e.min.y+1,m=e.max.z-e.min.z+1,f=O.convert(o.format),p=O.convert(o.type);let c;if(o.isData3DTexture)d.setTexture3D(o,0),c=s.TEXTURE_3D;else{if(!o.isDataArrayTexture&&!o.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");d.setTexture2DArray(o,0),c=s.TEXTURE_2D_ARRAY}s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,o.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,o.unpackAlignment);const g=s.getParameter(s.UNPACK_ROW_LENGTH),v=s.getParameter(s.UNPACK_IMAGE_HEIGHT),b=s.getParameter(s.UNPACK_SKIP_PIXELS),j=s.getParameter(s.UNPACK_SKIP_ROWS),y=s.getParameter(s.UNPACK_SKIP_IMAGES),l=n.isCompressedTexture?n.mipmaps[a]:n.image;s.pixelStorei(s.UNPACK_ROW_LENGTH,l.width),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,l.height),s.pixelStorei(s.UNPACK_SKIP_PIXELS,e.min.x),s.pixelStorei(s.UNPACK_SKIP_ROWS,e.min.y),s.pixelStorei(s.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?s.texSubImage3D(c,a,t.x,t.y,t.z,u,h,m,f,p,l.data):n.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),s.compressedTexSubImage3D(c,a,t.x,t.y,t.z,u,h,m,f,l.data)):s.texSubImage3D(c,a,t.x,t.y,t.z,u,h,m,f,p,l),s.pixelStorei(s.UNPACK_ROW_LENGTH,g),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,v),s.pixelStorei(s.UNPACK_SKIP_PIXELS,b),s.pixelStorei(s.UNPACK_SKIP_ROWS,j),s.pixelStorei(s.UNPACK_SKIP_IMAGES,y),0===a&&o.generateMipmaps&&s.generateMipmap(c),r.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?d.setTextureCube(e,0):e.isData3DTexture?d.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?d.setTexture2DArray(e,0):d.setTexture2D(e,0),r.unbindTexture()},this.resetState=function(){oe=0,ye=0,m=null,r.reset(),M.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jn?"display-p3":"srgb",t.unpackColorSpace=m.workingColorSpace===Sn?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===A?Pe:Pi}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pe?A:ce}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sr extends nr{}sr.prototype.isWebGL1Renderer=!0;class Sa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new o(e),this.density=t}clone(){return new Sa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Aa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new o(e),this.near=t,this.far=n}clone(){return new Aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ar extends h{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.environment&&(this.environment=e.environment.clone()),null!==e.fog&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return null!==this.fog&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class uo{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=void 0!==e?e.length/t:0,this.usage=Nn,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=q()}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=q()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(n,this.stride);return t.setUsage(this.usage),t}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=q()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const I=new t;class $t{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)I.fromBufferAttribute(this,t),I.applyMatrix4(e),this.setXYZ(t,I.x,I.y,I.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)I.fromBufferAttribute(this,t),I.applyNormalMatrix(e),this.setXYZ(t,I.x,I.y,I.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)I.fromBufferAttribute(this,t),I.transformDirection(e),this.setXYZ(t,I.x,I.y,I.z);return this}setX(e,t){return this.normalized&&(t=c(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=c(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=c(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=c(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=V(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=V(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=V(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=V(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=c(t,this.array),n=c(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array),o=c(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(void 0===e){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new f(new this.array.constructor(e),this.itemSize,this.normalized)}return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(void 0===e){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xa extends z{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new o(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let It;const rn=new t,Pt=new t,Rt=new t,Lt=new n,mn=new n,vr=new a,Os=new t,vn=new t,bs=new t,_r=new n,ha=new n,Or=new n;class xr extends h{constructor(e=new xa){if(super(),this.isSprite=!0,this.type="Sprite",void 0===It){It=new l;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new uo(t,5);It.setIndex([0,1,2,0,2,3]),It.setAttribute("position",new $t(e,3,0,!1)),It.setAttribute("uv",new $t(e,2,3,!1))}this.geometry=It,this.material=e,this.center=new n(.5,.5)}raycast(e,t){null===e.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pt.setFromMatrixScale(this.matrixWorld),vr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rt.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&Pt.multiplyScalar(-Rt.z);const a=this.material.rotation;let s,o;0!==a&&(o=Math.cos(a),s=Math.sin(a));const i=this.center;ps(Os.set(-.5,-.5,0),Rt,i,Pt,s,o),ps(vn.set(.5,-.5,0),Rt,i,Pt,s,o),ps(bs.set(.5,.5,0),Rt,i,Pt,s,o),_r.set(0,0),ha.set(1,0),Or.set(1,1);let r=e.ray.intersectTriangle(Os,vn,bs,!1,rn);if(null===r&&(ps(vn.set(-.5,.5,0),Rt,i,Pt,s,o),ha.set(0,1),r=e.ray.intersectTriangle(Os,bs,vn,!1,rn),null===r))return;const c=e.ray.origin.distanceTo(rn);c<e.near||c>e.far||t.push({distance:c,point:rn.clone(),uv:Y.getInterpolation(rn,Os,vn,bs,_r,ha,Or,new n),face:null,object:this})}copy(e,t){return super.copy(e,t),void 0!==e.center&&this.center.copy(e.center),this.material=e.material,this}}function ps(e,t,n,s,o,i){Lt.subVectors(e,n).addScalar(.5).multiply(s),void 0!==o?(mn.x=i*Lt.x-o*Lt.y,mn.y=o*Lt.x+i*Lt.y):mn.copy(Lt),e.copy(t),e.x+=mn.x,e.y+=mn.y,e.applyMatrix4(vr)}const fs=new t,kr=new t;class Ar extends h{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let e=0,s=t.length;e<s;e++){const n=t[e];this.addLevel(n.object.clone(),n.distance,n.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const o=this.levels;let s;for(s=0;s<o.length&&!(t<o[s].distance);s++);return o.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let o=t[n].distance;if(t[n].object.visible&&(o-=o*t[n].hysteresis),e<o)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){fs.setFromMatrixPosition(this.matrixWorld);const n=e.ray.origin.distanceTo(fs);this.getObjectForDistance(n).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){fs.setFromMatrixPosition(e.matrixWorld),kr.setFromMatrixPosition(this.matrixWorld);const o=fs.distanceTo(kr)/e.zoom;let n,s;for(t[0].object.visible=!0,n=1,s=t.length;n<s;n++){let e=t[n].distance;if(t[n].object.visible&&(e-=e*t[n].hysteresis),!(o>=e))break;t[n-1].object.visible=!1,t[n].object.visible=!0}for(this._currentLevel=n-1;n<s;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);!1===this.autoUpdate&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let e=0,o=n.length;e<o;e++){const s=n[e];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}}const Sr=new t,Mr=new p,Fr=new p,Cu=new t,zr=new a,ts=new t,ra=new F,Lr=new a,ia=new Tt;class Pr extends k{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xi,this.bindMatrix=new a,this.bindMatrixInverse=new a,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;null===this.boundingBox&&(this.boundingBox=new P),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let e=0;e<t.count;e++)this.getVertexPosition(e,ts),this.boundingBox.expandByPoint(ts)}computeBoundingSphere(){const e=this.geometry;null===this.boundingSphere&&(this.boundingSphere=new F),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let e=0;e<t.count;e++)this.getVertexPosition(e,ts),this.boundingSphere.expandByPoint(ts)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const s=this.material,n=this.matrixWorld;void 0!==s&&(null===this.boundingSphere&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),!1!==e.ray.intersectsSphere(ra)&&(Lr.copy(n).invert(),ia.copy(e.ray).applyMatrix4(Lr),null!==this.boundingBox&&!1===ia.intersectsBox(this.boundingBox)||this._computeIntersections(e,t,ia)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,void 0===t&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new p,t=this.geometry.attributes.skinWeight;for(let n=0,o=t.count;n<o;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xi?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===er?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Mr.fromBufferAttribute(s.attributes.skinIndex,e),Fr.fromBufferAttribute(s.attributes.skinWeight,e),Sr.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){const s=Fr.getComponent(e);if(0!==s){const o=Mr.getComponent(e);zr.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cu.copy(Sr).applyMatrix4(zr),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class oa extends h{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Je extends w{constructor(e=null,t=1,n=1,s,o,i,a,r,c=1003,l=1003,d,u){super(null,i,a,r,c,l,s,o,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Br=new a,ju=new a;class na{constructor(e=[],t=[]){this.uuid=q(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),0===t.length)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new a)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const t=new a;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const e=this.bones[t];e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))}}update(){const e=this.bones,n=this.boneInverses,s=this.boneMatrices,t=this.boneTexture;for(let t=0,o=e.length;t<o;t++){const i=e[t]?e[t].matrixWorld:ju;Br.multiplyMatrices(i,n[t]),Br.toArray(s,16*t)}null!==t&&(t.needsUpdate=!0)}clone(){return new na(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Je(t,e,e,X,Z);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,s=this.bones.length;t<s;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const o=e.bones[n];let s=t[o];void 0===s&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),s=new oa),this.bones.push(s),this.boneInverses.push((new a).fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,o=t.length;s<o;s++){const i=t[s];e.bones.push(i.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class bt extends f{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gt=new a,Kr=new a,Yn=[],Yr=new P,du=new a,Ln=new k,In=new F;class Zr extends k{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bt(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,du)}computeBoundingBox(){const e=this.geometry,t=this.count;null===this.boundingBox&&(this.boundingBox=new P),null===e.boundingBox&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gt),Yr.copy(e.boundingBox).applyMatrix4(gt),this.boundingBox.union(Yr)}computeBoundingSphere(){const e=this.geometry,t=this.count;null===this.boundingSphere&&(this.boundingSphere=new F),null===e.boundingSphere&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gt),In.copy(e.boundingSphere).applyMatrix4(gt),this.boundingSphere.union(In)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),null!==e.instanceColor&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ln.geometry=this.geometry,Ln.material=this.material,void 0!==Ln.material&&(null===this.boundingSphere&&this.computeBoundingSphere(),In.copy(this.boundingSphere),In.applyMatrix4(n),!1!==e.ray.intersectsSphere(In)))for(let o=0;o<s;o++){this.getMatrixAt(o,gt),Kr.multiplyMatrices(n,gt),Ln.matrixWorld=Kr,Ln.raycast(e,Yn);for(let e=0,s=Yn.length;e<s;e++){const n=Yn[e];n.instanceId=o,n.object=this,t.push(n)}Yn.length=0}}setColorAt(e,t){null===this.instanceColor&&(this.instanceColor=new bt(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function ru(e,t){return e.z-t.z}function au(e,t){return t.z-e.z}class Tl{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1});const n=s[this.index];o.push(n),this.index++,n.start=e.start,n.count=e.count,n.z=t}reset(){this.list.length=0,this.index=0}}const vt="batchId",Ae=new a,oc=new a,su=new a,Da=new a,Yi=new Jt,As=new P,at=new F,Rn=new t,Wi=new Tl,N=new k,es=[];function $d(e,t,n=0){const s=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){const o=e.count;for(let i=0;i<o;i++)for(let o=0;o<s;o++)t.setComponent(i+n,o,e.getComponent(i,o))}else t.array.set(e.array,n*s);t.needsUpdate=!0}class pc extends k{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=2*t,s){super(new l,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(4*this._maxGeometryCount);e=4*Math.ceil(e/4),e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Je(t,e,e,X,Z);this._matricesTexture=n}_initializeGeometry(e){const n=this.geometry,t=this._maxVertexCount,o=this._maxGeometryCount,s=this._maxIndexCount;if(!1===this._geometryInitialized){for(const o in e.attributes){const s=e.getAttribute(o),{array:r,itemSize:i,normalized:c}=s,l=new r.constructor(t*i),a=new s.constructor(l,i,c);a.setUsage(s.usage),n.setAttribute(o,a)}if(null!==e.getIndex()){const e=t>65536?new Uint32Array(s):new Uint16Array(s);n.setIndex(new f(e,1))}const i=o>65536?new Uint32Array(t):new Uint16Array(t);n.setAttribute(vt,new f(i,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(vt))throw new Error(`BatchedMesh: Geometry cannot use attribute "${vt}"`);const t=this.geometry;if(Boolean(e.getIndex())!==Boolean(t.getIndex()))throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===vt)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),o=t.getAttribute(n);if(s.itemSize!==o.itemSize||s.normalized!==o.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new P);const t=this._geometryCount,e=this.boundingBox,n=this._active;e.makeEmpty();for(let s=0;s<t;s++)!1!==n[s]&&(this.getMatrixAt(s,Ae),this.getBoundingBoxAt(s,As).applyMatrix4(Ae),e.union(As))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new F);const t=this._geometryCount,e=this.boundingSphere,n=this._active;e.makeEmpty();for(let s=0;s<t;s++)!1!==n[s]&&(this.getMatrixAt(s,Ae),this.getBoundingSphereAt(s,at).applyMatrix4(Ae),e.union(at))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const s={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let o=null;const a=this._reservedRanges,d=this._drawRanges,p=this._bounds;0!==this._geometryCount&&(o=a[a.length-1]),s.vertexCount=-1===t?e.getAttribute("position").count:t,s.vertexStart=null===o?0:o.vertexStart+o.vertexCount;const c=e.getIndex(),l=null!==c;if(l&&(s.indexCount=-1===n?c.count:n,s.indexStart=null===o?0:o.indexStart+o.indexCount),-1!==s.indexStart&&s.indexStart+s.indexCount>this._maxIndexCount||s.vertexStart+s.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const f=this._visibility,u=this._active,h=this._matricesTexture,m=this._matricesTexture.image.data;f.push(!0),u.push(!0);const i=this._geometryCount;this._geometryCount++,su.toArray(m,16*i),h.needsUpdate=!0,a.push(s),d.push({start:l?s.indexStart:s.vertexStart,count:-1}),p.push({boxInitialized:!1,box:new P,sphereInitialized:!1,sphere:new F});const r=this.geometry.getAttribute(vt);for(let e=0;e<s.vertexCount;e++)r.setX(s.vertexStart+e,i);return r.needsUpdate=!0,this.setGeometryAt(i,e),i}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,r=null!==i.getIndex(),c=i.getIndex(),o=t.getIndex(),n=this._reservedRanges[e];if(r&&o.count>n.indexCount||t.attributes.position.count>n.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const a=n.vertexStart,l=n.vertexCount;for(const e in i.attributes){if(e===vt)continue;const n=t.getAttribute(e),s=i.getAttribute(e);$d(n,s,a);const o=n.itemSize;for(let e=n.count,t=l;e<t;e++){const i=a+e;for(let e=0;e<o;e++)s.setComponent(i,e,0)}s.needsUpdate=!0}if(r){const e=n.indexStart;for(let t=0;t<o.count;t++)c.setX(e+t,a+o.getX(t));for(let t=o.count,s=n.indexCount;t<s;t++)c.setX(e+t,a);c.needsUpdate=!0}const s=this._bounds[e];null!==t.boundingBox?(s.box.copy(t.boundingBox),s.boxInitialized=!0):s.boxInitialized=!1,null!==t.boundingSphere?(s.sphere.copy(t.boundingSphere),s.sphereInitialized=!0):s.sphereInitialized=!1;const d=this._drawRanges[e],u=t.getAttribute("position");return d.count=r?o.count:u.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||!1===t[e]||(t[e]=!1,this._visibilityChanged=!0),this}getBoundingBoxAt(e,t){if(!1===this._active[e])return this;const n=this._bounds[e],s=n.box,o=this.geometry;if(!1===n.boxInitialized){s.makeEmpty();const i=o.index,a=o.attributes.position,t=this._drawRanges[e];for(let e=t.start,o=t.start+t.count;e<o;e++){let n=e;i&&(n=i.getX(n)),s.expandByPoint(Rn.fromBufferAttribute(a,n))}n.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(!1===this._active[e])return this;const s=this._bounds[e],n=s.sphere,o=this.geometry;if(!1===s.sphereInitialized){n.makeEmpty(),this.getBoundingBoxAt(e,As),As.getCenter(n.center);const a=o.index,r=o.attributes.position,t=this._drawRanges[e];let i=0;for(let e=t.start,o=t.start+t.count;e<o;e++){let s=e;a&&(s=a.getX(s)),Rn.fromBufferAttribute(r,s),i=Math.max(i,n.center.distanceToSquared(Rn))}n.radius=Math.sqrt(i),s.sphereInitialized=!0}return t.copy(n),t}setMatrixAt(e,t){const n=this._active,s=this._matricesTexture,o=this._matricesTexture.image.data;return e>=this._geometryCount||!1===n[e]||(t.toArray(o,16*e),s.needsUpdate=!0),this}getMatrixAt(e,t){const n=this._active,s=this._matricesTexture.image.data;return e>=this._geometryCount||!1===n[e]?null:t.fromArray(s,16*e)}setVisibleAt(e,t){const n=this._visibility,s=this._active;return e>=this._geometryCount||!1===s[e]||n[e]===t||(n[e]=t,this._visibilityChanged=!0),this}getVisibleAt(e){const t=this._visibility,n=this._active;return!(e>=this._geometryCount||!1===n[e])&&t[e]}raycast(e,t){const s=this._visibility,o=this._active,i=this._drawRanges,a=this._geometryCount,r=this.matrixWorld,n=this.geometry;N.material=this.material,N.geometry.index=n.index,N.geometry.attributes=n.attributes,null===N.geometry.boundingBox&&(N.geometry.boundingBox=new P),null===N.geometry.boundingSphere&&(N.geometry.boundingSphere=new F);for(let n=0;n<a;n++){if(!s[n]||!o[n])continue;const c=i[n];N.geometry.setDrawRange(c.start,c.count),this.getMatrixAt(n,N.matrixWorld).premultiply(r),this.getBoundingBoxAt(n,N.geometry.boundingBox),this.getBoundingSphereAt(n,N.geometry.boundingSphere),N.raycast(e,es);for(let e=0,o=es.length;e<o;e++){const s=es[e];s.object=this,s.batchId=n,t.push(s)}es.length=0}N.material=null,N.geometry.index=null,N.geometry.attributes={},N.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=null!==e.boundingBox?e.boundingBox.clone():null,this.boundingSphere=null!==e.boundingSphere?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(e=>({...e})),this._reservedRanges=e._reservedRanges.map(e=>({...e})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,s,o){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const c=s.getIndex(),l=null===c?1:c.array.BYTES_PER_ELEMENT,a=this._visibility,d=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,r=this.perObjectFrustumCulled;r&&(Da.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Yi.setFromProjectionMatrix(Da,e.isWebGPURenderer?Ot:He));let i=0;if(this.sortObjects){oc.copy(this.matrixWorld).invert(),Rn.setFromMatrixPosition(n.matrixWorld).applyMatrix4(oc);for(let e=0,t=a.length;e<t;e++)if(a[e]){this.getMatrixAt(e,Ae),this.getBoundingSphereAt(e,at).applyMatrix4(Ae);let t=!1;if(r&&(t=!Yi.intersectsSphere(at)),!t){const t=Rn.distanceTo(at.center);Wi.push(h[e],t)}}const e=Wi.list,t=this.customSort;null===t?e.sort(o.transparent?au:ru):t.call(this,e,n);for(let t=0,s=e.length;t<s;t++){const n=e[t];d[i]=n.start*l,u[i]=n.count,i++}Wi.reset()}else for(let e=0,t=a.length;e<t;e++)if(a[e]){let t=!1;if(r&&(this.getMatrixAt(e,Ae),this.getBoundingSphereAt(e,at).applyMatrix4(Ae),t=!Yi.intersectsSphere(at)),!t){const t=h[e];d[i]=t.start*l,u[i]=t.count,i++}}this._multiDrawCount=i,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,o,i){this.onBeforeRender(e,null,s,o,i)}}class L extends z{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new o(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vc=new t,bc=new t,jc=new a,Ii=new Tt,ns=new F;class ze extends h{constructor(e=new l,t=new L){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(null===e.index){const n=e.attributes.position,t=[0];for(let e=1,s=n.count;e<s;e++)vc.fromBufferAttribute(n,e-1),bc.fromBufferAttribute(n,e),t[e]=t[e-1],t[e]+=vc.distanceTo(bc);e.setAttribute("lineDistance",new i(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,u=this.matrixWorld,h=e.params.Line.threshold,o=i.drawRange;if(null===i.boundingSphere&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(u),ns.radius+=h,!1===e.ray.intersectsSphere(ns))return;jc.copy(u).invert(),Ii.copy(e.ray).applyMatrix4(jc);const m=h/((this.scale.x+this.scale.y+this.scale.z)/3),f=m*m,r=new t,c=new t,l=new t,s=new t,p=this.isLineSegments?2:1,d=i.index,a=i.attributes.position;if(null!==d)for(let t=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count)-1;t<u;t+=p){const h=d.getX(t),m=d.getX(t+1);if(r.fromBufferAttribute(a,h),c.fromBufferAttribute(a,m),Ii.distanceSqToSegment(r,c,s,l)>f)continue;s.applyMatrix4(this.matrixWorld);const i=e.ray.origin.distanceTo(s);i<e.near||i>e.far||n.push({distance:i,point:l.clone().applyMatrix4(this.matrixWorld),index:t,face:null,faceIndex:null,object:this})}else for(let t=Math.max(0,o.start),d=Math.min(a.count,o.start+o.count)-1;t<d;t+=p){if(r.fromBufferAttribute(a,t),c.fromBufferAttribute(a,t+1),Ii.distanceSqToSegment(r,c,s,l)>f)continue;s.applyMatrix4(this.matrixWorld);const i=e.ray.origin.distanceTo(s);i<e.near||i>e.far||n.push({distance:i,point:l.clone().applyMatrix4(this.matrixWorld),index:t,face:null,faceIndex:null,object:this})}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}}const Oc=new t,xc=new t;class re extends ze{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(null===e.index){const n=e.attributes.position,t=[];for(let e=0,s=n.count;e<s;e+=2)Oc.fromBufferAttribute(n,e),xc.fromBufferAttribute(n,e+1),t[e]=0===e?0:t[e-1],t[e+1]=t[e]+Oc.distanceTo(xc);e.setAttribute("lineDistance",new i(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ec extends ze{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Li extends z{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new o(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ac=new a,Ni=new Tt,hs=new F,gs=new t;class Tc extends h{constructor(e=new l,t=new Li){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(null===n.boundingSphere&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(o),hs.radius+=r,!1===e.ray.intersectsSphere(hs))return;Ac.copy(o).invert(),Ni.copy(e.ray).applyMatrix4(Ac);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,i=n.index,a=n.attributes.position;if(null!==i)for(let n=Math.max(0,s.start),c=Math.min(i.count,s.start+s.count);n<c;n++){const r=i.getX(n);gs.fromBufferAttribute(a,r),zc(gs,r,l,o,e,t,this)}else for(let n=Math.max(0,s.start),i=Math.min(a.count,s.start+s.count);n<i;n++)gs.fromBufferAttribute(a,n),zc(gs,n,l,o,e,t,this)}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}}function zc(e,n,s,o,i,a,r){const c=Ni.distanceSqToPoint(e);if(c<s){const s=new t;Ni.closestPointToPoint(e,s),s.applyMatrix4(o);const l=i.ray.origin.distanceTo(s);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(c),point:s,index:n,face:null,object:r})}}class vs extends w{constructor(e,t,n,s,o,i,a,r,c,l,d,u){super(null,i,a,r,c,l,s,o,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class ee{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let i=1;i<=e;i++)n=this.getPoint(i/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let n=0;const i=s.length;let a;a=t||e*s[i-1];let c,r=0,o=i-1;for(;r<=o;)if(n=Math.floor(r+(o-r)/2),c=s[n]-a,c<0)r=n+1;else{if(!(c>0)){o=n;break}o=n-1}if(n=o,s[n]===a)return n/(i-1);const l=s[n];return(n+(a-l)/(s[n+1]-l))/(i-1)}getTangent(e,s){const a=1e-4;let o=e-a,i=e+a;o<0&&(o=0),i>1&&(i=1);const r=this.getPoint(o),l=this.getPoint(i),c=s||(r.isVector2?new n:new t);return c.copy(l).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,n){const l=new t,s=[],o=[],i=[],r=new t,d=new a;for(let n=0;n<=e;n++){const o=n/e;s[n]=this.getTangentAt(o,new t)}o[0]=new t,i[0]=new t;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),m=Math.abs(s[0].z);u<=c&&(c=u,l.set(1,0,0)),h<=c&&(c=h,l.set(0,1,0)),m<=c&&l.set(0,0,1),r.crossVectors(s[0],l).normalize(),o[0].crossVectors(s[0],r),i[0].crossVectors(s[0],o[0]);for(let t=1;t<=e;t++){if(o[t]=o[t-1].clone(),i[t]=i[t-1].clone(),r.crossVectors(s[t-1],s[t]),r.length()>Number.EPSILON){r.normalize();const e=Math.acos(b(s[t-1].dot(s[t]),-1,1));o[t].applyMatrix4(d.makeRotationAxis(r,e))}i[t].crossVectors(s[t],o[t])}if(!0===n){let t=Math.acos(b(o[0].dot(o[e]),-1,1));t/=e,s[0].dot(r.crossVectors(o[0],o[e]))>0&&(t=-t);for(let n=1;n<=e;n++)o[n].applyMatrix4(d.makeRotationAxis(s[n],t*n)),i[n].crossVectors(s[n],o[n])}return{tangents:s,normals:o,binormals:i}}clone(){return(new this.constructor).copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ys extends ee{constructor(e=0,t=0,n=1,s=1,o=0,i=2*Math.PI,a=!1,r=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=i,this.aClockwise=a,this.aRotation=r}getPoint(e,t){const l=t||new n,o=2*Math.PI;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=o;for(;s>o;)s-=o;s<Number.EPSILON&&(s=r?0:o),!0!==this.aClockwise||r||(s===o?s=-o:s-=o);const c=this.aStartAngle+e*s;let i=this.aX+this.xRadius*Math.cos(c),a=this.aY+this.yRadius*Math.sin(c);if(0!==this.aRotation){const e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=i-this.aX,s=a-this.aY;i=n*e-s*t+this.aX,a=n*t+s*e+this.aY}return l.set(i,a)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rc extends ys{constructor(e,t,n,s,o,i){super(e,t,n,n,s,o,i),this.isArcCurve=!0,this.type="ArcCurve"}}function Si(){let e=0,t=0,n=0,s=0;function o(o,i,a,r){e=o,t=a,n=-3*o+3*i-2*a-r,s=2*o-2*i+a+r}return{initCatmullRom:function(e,t,n,s,i){o(t,n,i*(n-e),i*(s-t))},initNonuniformCatmullRom:function(e,t,n,s,i,a,r){let c=(t-e)/i-(n-e)/(i+a)+(n-t)/a,l=(n-t)/a-(s-t)/(a+r)+(s-n)/r;c*=a,l*=a,o(t,n,c,l)},calc:function(o){const i=o*o;return e+t*o+n*i+s*(i*o)}}}const ws=new t,ki=new Si,Ei=new Si,Ci=new Si;class $c extends ee{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,n=new t){const u=n,i=this.points,s=i.length,h=(s-(this.closed?0:1))*e;let a,r,o=Math.floor(h),d=h-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:0===d&&o===s-1&&(o=s-2,d=1),this.closed||o>0?a=i[(o-1)%s]:(ws.subVectors(i[0],i[1]).add(i[0]),a=ws);const c=i[o%s],l=i[(o+1)%s];if(this.closed||o+2<s?r=i[(o+2)%s]:(ws.subVectors(i[s-1],i[s-2]).add(i[s-1]),r=ws),"centripetal"===this.curveType||"chordal"===this.curveType){const s="chordal"===this.curveType?.5:.25;let t=Math.pow(a.distanceToSquared(c),s),e=Math.pow(c.distanceToSquared(l),s),n=Math.pow(l.distanceToSquared(r),s);e<1e-4&&(e=1),t<1e-4&&(t=e),n<1e-4&&(n=e),ki.initNonuniformCatmullRom(a.x,c.x,l.x,r.x,t,e,n),Ei.initNonuniformCatmullRom(a.y,c.y,l.y,r.y,t,e,n),Ci.initNonuniformCatmullRom(a.z,c.z,l.z,r.z,t,e,n)}else"catmullrom"===this.curveType&&(ki.initCatmullRom(a.x,c.x,l.x,r.x,this.tension),Ei.initCatmullRom(a.y,c.y,l.y,r.y,this.tension),Ci.initCatmullRom(a.z,c.z,l.z,r.z,this.tension));return u.set(ki.calc(d),Ei.calc(d),Ci.calc(d)),u}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,s=e.points.length;n<s;n++){const o=e.points[n];this.points.push((new t).fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wc(e,t,n,s,o){const i=.5*(s-t),a=.5*(o-n),r=e*e;return(2*n-2*s+i+a)*(e*r)+(-3*n+3*s-2*i-a)*r+i*e+n}function gn(e,t,n,s){return function(e,t){const n=1-e;return n*n*t}(e,t)+function(e,t){return 2*(1-e)*e*t}(e,n)+function(e,t){return e*e*t}(e,s)}function pn(e,t,n,s,o){return function(e,t){const n=1-e;return n*n*n*t}(e,t)+function(e,t){const n=1-e;return 3*n*n*e*t}(e,n)+function(e,t){return 3*(1-e)*e*e*t}(e,s)+function(e,t){return e*e*e*t}(e,o)}class fo extends ee{constructor(e=new n,t=new n,s=new n,o=new n){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=o}getPoint(e,t=new n){const s=t,o=this.v0,i=this.v1,a=this.v2,r=this.v3;return s.set(pn(e,o.x,i.x,a.x,r.x),pn(e,o.y,i.y,a.y,r.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class za extends ee{constructor(e=new t,n=new t,s=new t,o=new t){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=s,this.v3=o}getPoint(e,n=new t){const r=n,s=this.v0,o=this.v1,i=this.v2,a=this.v3;return r.set(pn(e,s.x,o.x,i.x,a.x),pn(e,s.y,o.y,i.y,a.y),pn(e,s.z,o.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yi extends ee{constructor(e=new n,t=new n){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new n){const s=t;return 1===e?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new n){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xc extends ee{constructor(e=new t,n=new t){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new t){const s=n;return 1===e?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,n=new t){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ji extends ee{constructor(e=new n,t=new n,s=new n){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new n){const s=t,o=this.v0,i=this.v1,a=this.v2;return s.set(gn(e,o.x,i.x,a.x),gn(e,o.y,i.y,a.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fi extends ee{constructor(e=new t,n=new t,s=new t){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=s}getPoint(e,n=new t){const a=n,s=this.v0,o=this.v1,i=this.v2;return a.set(gn(e,s.x,o.x,i.x),gn(e,s.y,o.y,i.y),gn(e,s.z,o.z,i.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mi extends ee{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new n){const i=t,s=this.points,a=(s.length-1)*e,o=Math.floor(a),r=a-o,c=s[0===o?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Wc(r,c.x,l.x,d.x,u.x),Wc(r,c.y,l.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push((new n).fromArray(o))}return this}}var Fo,Ss=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:$c,CubicBezierCurve:fo,CubicBezierCurve3:za,EllipseCurve:ys,LineCurve:yi,LineCurve3:Xc,QuadraticBezierCurve:ji,QuadraticBezierCurve3:fi,SplineCurve:mi});class tl extends ee{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=!0===e.isVector2?"LineCurve":"LineCurve3";this.curves.push(new Ss[n](t,e))}return this}getPoint(e,t){const o=e*this.getLength(),s=this.getCurveLengths();let n=0;for(;n<s.length;){if(s[n]>=o){const a=s[n]-o,e=this.curves[n],i=e.getLength(),r=0===i?0:1-a/i;return e.getPointAt(r,t)}n++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let o=0,i=this.curves;o<i.length;o++){const s=i[o],r=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,a=s.getPoints(r);for(let e=0;e<a.length;e++){const s=a[e];n&&n.equals(s)||(t.push(s),n=s)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const n=e.curves[t];this.curves.push((new Ss[n.type]).fromJSON(n))}return this}}class fn extends tl{constructor(e){super(),this.type="Path",this.currentPoint=new n,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const s=new yi(this.currentPoint.clone(),new n(e,t));return this.curves.push(s),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,s,o){const i=new ji(this.currentPoint.clone(),new n(e,t),new n(s,o));return this.curves.push(i),this.currentPoint.set(s,o),this}bezierCurveTo(e,t,s,o,i,a){const r=new fo(this.currentPoint.clone(),new n(e,t),new n(s,o),new n(i,a));return this.curves.push(r),this.currentPoint.set(i,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new mi(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,o,i){const a=this.currentPoint.x,r=this.currentPoint.y;return this.absarc(e+a,t+r,n,s,o,i),this}absarc(e,t,n,s,o,i){return this.absellipse(e,t,n,n,s,o,i),this}ellipse(e,t,n,s,o,i,a,r){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,s,o,i,a,r),this}absellipse(e,t,n,s,o,i,a,r){const c=new ys(e,t,n,s,o,i,a,r);if(this.curves.length>0){const e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ts extends l{constructor(e=[new n(0,-.5),new n(.5,0),new n(0,.5)],s=12,o=0,a=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:s,phiStart:o,phiLength:a},s=Math.floor(s),a=b(a,0,2*Math.PI);const f=[],j=[],g=[],d=[],p=[],y=1/s,l=new t,h=new n,r=new t,v=new t,c=new t;let m=0,u=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:m=e[t+1].x-e[t].x,u=e[t+1].y-e[t].y,r.x=1*u,r.y=-m,r.z=0*u,c.copy(r),r.normalize(),d.push(r.x,r.y,r.z);break;case e.length-1:d.push(c.x,c.y,c.z);break;default:m=e[t+1].x-e[t].x,u=e[t+1].y-e[t].y,r.x=1*u,r.y=-m,r.z=0*u,v.copy(r),r.x+=c.x,r.y+=c.y,r.z+=c.z,r.normalize(),d.push(r.x,r.y,r.z),c.copy(v)}for(let t=0;t<=s;t++){const n=o+t*y*a,i=Math.sin(n),r=Math.cos(n);for(let n=0;n<=e.length-1;n++){l.x=e[n].x*i,l.y=e[n].y,l.z=e[n].x*r,j.push(l.x,l.y,l.z),h.x=t/s,h.y=n/(e.length-1),g.push(h.x,h.y);const o=d[3*n+0]*i,a=d[3*n+1],c=d[3*n+0]*r;p.push(o,a,c)}}for(let t=0;t<s;t++)for(let s=0;s<e.length-1;s++){const n=s+t*e.length,a=n,o=n+e.length,r=n+e.length+1,i=n+1;f.push(a,o,i),f.push(r,i,o)}this.setIndex(f),this.setAttribute("position",new i(j,3)),this.setAttribute("uv",new i(g,2)),this.setAttribute("normal",new i(p,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.points,e.segments,e.phiStart,e.phiLength)}}class li extends Ts{constructor(e=1,t=1,n=4,s=8){const o=new fn;o.absarc(0,-t/2,e,1.5*Math.PI,0),o.absarc(0,t/2,e,0,.5*Math.PI),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new li(e.radius,e.length,e.capSegments,e.radialSegments)}}class ci extends l{constructor(e=1,s=32,o=0,a=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:s,thetaStart:o,thetaLength:a},s=Math.max(3,s);const h=[],r=[],d=[],u=[],c=new t,l=new n;r.push(0,0,0),d.push(0,0,1),u.push(.5,.5);for(let t=0,n=3;t<=s;t++,n+=3){const i=o+t/s*a;c.x=e*Math.cos(i),c.y=e*Math.sin(i),r.push(c.x,c.y,c.z),d.push(0,0,1),l.x=(r[n]/e+1)/2,l.y=(r[n+1]/e+1)/2,u.push(l.x,l.y)}for(let e=1;e<=s;e++)h.push(e,e+1,0);this.setIndex(h),this.setAttribute("position",new i(r,3)),this.setAttribute("normal",new i(d,3)),this.setAttribute("uv",new i(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class un extends l{constructor(e=1,s=1,o=1,a=32,r=1,c=!1,l=0,d=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:s,height:o,radialSegments:a,heightSegments:r,openEnded:c,thetaStart:l,thetaLength:d};const j=this;a=Math.floor(a),r=Math.floor(r);const u=[],f=[],p=[],g=[];let h=0;const m=[],b=o/2;let v=0;function y(o){const _=h,c=new n,i=new t;let m=0;const y=!0===o?e:s,r=!0===o?1:-1;for(let e=1;e<=a;e++)f.push(0,b*r,0),p.push(0,r,0),g.push(.5,.5),h++;const w=h;for(let e=0;e<=a;e++){const t=e/a*d+l,n=Math.cos(t),s=Math.sin(t);i.x=y*s,i.y=b*r,i.z=y*n,f.push(i.x,i.y,i.z),p.push(0,r,0),c.x=.5*n+.5,c.y=.5*s*r+.5,g.push(c.x,c.y),h++}for(let e=0;e<a;e++){const n=_+e,t=w+e;!0===o?u.push(t,t+1,n):u.push(t+1,t,n),m+=3}j.addGroup(v,m,!0===o?1:2),v+=m}!function(){const i=new t,n=new t;let c=0;const y=(s-e)/o;for(let t=0;t<=r;t++){const u=[],c=t/r,v=c*(s-e)+e;for(let e=0;e<=a;e++){const t=e/a,s=t*d+l,r=Math.sin(s),m=Math.cos(s);n.x=v*r,n.y=-c*o+b,n.z=v*m,f.push(n.x,n.y,n.z),i.set(r,y,m).normalize(),p.push(i.x,i.y,i.z),g.push(t,1-c),u.push(h++)}m.push(u)}for(let e=0;e<a;e++)for(let t=0;t<r;t++){const o=m[t][e],n=m[t+1][e],i=m[t+1][e+1],s=m[t][e+1];u.push(o,n,s),u.push(n,i,s),c+=6}j.addGroup(v,c,0),v+=c}(),!1===c&&(e>0&&y(!0),s>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new i(f,3)),this.setAttribute("normal",new i(p,3)),this.setAttribute("uv",new i(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ai extends un{constructor(e=1,t=1,n=32,s=1,o=!1,i=0,a=2*Math.PI){super(0,e,t,n,s,o,i,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:i,thetaLength:a}}static fromJSON(e){return new ai(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ze extends l{constructor(e=[],s=[],o=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:s,radius:o,detail:a};const r=[],c=[];function m(e,t,n,s){const i=s+1,o=[];for(let s=0;s<=i;s++){o[s]=[];const a=e.clone().lerp(n,s/i),c=t.clone().lerp(n,s/i),r=i-s;for(let e=0;e<=r;e++)o[s][e]=0===e&&s===i?a:a.clone().lerp(c,e/r)}for(let e=0;e<i;e++)for(let n=0;n<2*(i-e)-1;n++){const t=Math.floor(n/2);n%2==0?(l(o[e][t+1]),l(o[e+1][t]),l(o[e][t])):(l(o[e][t+1]),l(o[e+1][t+1]),l(o[e+1][t]))}}function l(e){r.push(e.x,e.y,e.z)}function d(t,n){const s=3*t;n.x=e[s+0],n.y=e[s+1],n.z=e[s+2]}function u(e,t,n,s){s<0&&1===e.x&&(c[t]=e.x-1),0===n.x&&0===n.z&&(c[t]=s/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}!function(e){const n=new t,o=new t,i=new t;for(let t=0;t<s.length;t+=3)d(s[t+0],n),d(s[t+1],o),d(s[t+2],i),m(n,o,i,e)}(a),function(e){const n=new t;for(let t=0;t<r.length;t+=3)n.x=r[t+0],n.y=r[t+1],n.z=r[t+2],n.normalize().multiplyScalar(e),r[t+0]=n.x,r[t+1]=n.y,r[t+2]=n.z}(o),function(){const s=new t;for(let t=0;t<r.length;t+=3){s.x=r[t+0],s.y=r[t+1],s.z=r[t+2];const n=h(s)/2/Math.PI+.5,o=(e=s,Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))/Math.PI+.5);c.push(n,1-o)}var e;(function(){const e=new t,s=new t,o=new t,i=new t,a=new n,l=new n,d=new n;for(let t=0,n=0;t<r.length;t+=9,n+=6){e.set(r[t+0],r[t+1],r[t+2]),s.set(r[t+3],r[t+4],r[t+5]),o.set(r[t+6],r[t+7],r[t+8]),a.set(c[n+0],c[n+1]),l.set(c[n+2],c[n+3]),d.set(c[n+4],c[n+5]),i.copy(e).add(s).add(o).divideScalar(3);const m=h(i);u(a,n+0,e,m),u(l,n+2,s,m),u(d,n+4,o,m)}})(),function(){for(let e=0;e<c.length;e+=6){const t=c[e+0],n=c[e+2],s=c[e+4],o=Math.max(t,n,s),i=Math.min(t,n,s);o>.9&&i<.1&&(t<.2&&(c[e+0]+=1),n<.2&&(c[e+2]+=1),s<.2&&(c[e+4]+=1))}}()}(),this.setAttribute("position",new i(r,3)),this.setAttribute("normal",new i(r.slice(),3)),this.setAttribute("uv",new i(c,2)),0===a?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.vertices,e.indices,e.radius,e.details)}}class si extends Ze{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new si(e.radius,e.detail)}}const Ns=new t,Rs=new t,ei=new t,Ps=new Y;class fl extends l{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},null!==e){const u=4,o=Math.pow(10,u),h=Math.cos(st*t),r=e.getIndex(),c=e.getAttribute("position"),m=r?r.count:c.count,n=[0,0,0],d=["a","b","c"],s=new Array(3),a={},l=[];for(let e=0;e<m;e+=3){r?(n[0]=r.getX(e),n[1]=r.getX(e+1),n[2]=r.getX(e+2)):(n[0]=e,n[1]=e+1,n[2]=e+2);const{a:t,b:i,c:u}=Ps;if(t.fromBufferAttribute(c,n[0]),i.fromBufferAttribute(c,n[1]),u.fromBufferAttribute(c,n[2]),Ps.getNormal(ei),s[0]=`${Math.round(t.x*o)},${Math.round(t.y*o)},${Math.round(t.z*o)}`,s[1]=`${Math.round(i.x*o)},${Math.round(i.y*o)},${Math.round(i.z*o)}`,s[2]=`${Math.round(u.x*o)},${Math.round(u.y*o)},${Math.round(u.z*o)}`,s[0]!==s[1]&&s[1]!==s[2]&&s[2]!==s[0])for(let e=0;e<3;e++){const o=(e+1)%3,c=s[e],u=s[o],i=Ps[d[e]],r=Ps[d[o]],m=`${c}_${u}`,t=`${u}_${c}`;t in a&&a[t]?(ei.dot(a[t].normal)<=h&&(l.push(i.x,i.y,i.z),l.push(r.x,r.y,r.z)),a[t]=null):m in a||(a[m]={index0:n[e],index1:n[o],normal:ei.clone()})}}for(const e in a)if(a[e]){const{index0:t,index1:n}=a[e];Ns.fromBufferAttribute(c,t),Rs.fromBufferAttribute(c,n),l.push(Ns.x,Ns.y,Ns.z),l.push(Rs.x,Rs.y,Rs.z)}this.setAttribute("position",new i(l,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class et extends fn{constructor(e){super(e),this.uuid=q(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push((new fn).fromJSON(s))}return this}}const td=function(e,t,n=2){const h=t&&t.length,m=h?t[0]*n:e.length;let s=vl(e,0,m,n,!0);const u=[];if(!s||s.next===s.prev)return u;let o,i,l,d,a,r,c;if(h&&(s=function(e,t,n,s){const a=[];let o,r,c,l,i;for(o=0,r=t.length;o<r;o++)c=t[o]*s,l=o<r-1?t[o+1]*s:e.length,i=vl(e,c,l,s,!1),i===i.next&&(i.steiner=!0),a.push(Dl(i));for(a.sort(Pl),o=0;o<a.length;o++)n=Rl(a[o],n);return n}(e,t,s,n)),e.length>80*n){o=l=e[0],i=d=e[1];for(let t=n;t<m;t+=n)a=e[t],r=e[t+1],a<o&&(o=a),r<i&&(i=r),a>l&&(l=a),r>d&&(d=r);c=Math.max(l-o,d-i),c=0!==c?32767/c:0}return an(s,u,n,o,i,c,0),u};function vl(e,t,n,s,o){let i,a;if(o===function(e,t,n,s){let o=0;for(let i=t,a=n-s;i<n;i+=s)o+=(e[a]-e[i])*(e[i+1]+e[a+1]),a=i;return o}(e,t,n,s)>0)for(i=t;i<n;i+=s)a=xl(i,e[i],e[i+1],a);else for(i=n-s;i>=t;i-=s)a=xl(i,e[i],e[i+1],a);return a&&Bs(a,a.next)&&(tn(a),a=a.next),a}function lt(e,t){if(!e)return e;t||(t=e);let s,n=e;do if(s=!1,n.steiner||!Bs(n,n.next)&&0!==v(n.prev,n,n.next))n=n.next;else{if(tn(n),n=t=n.prev,n===n.next)break;s=!0}while(s||n!==t)return t}function an(e,t,n,s,o,i,a){if(!e)return;!a&&i&&function(e,t,n,s){let o=e;do 0===o.z&&(o.z=Go(o.x,o.y,t,n,s)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==e)o.prevZ.nextZ=null,o.prevZ=null,function(e){let r,n,t,s,o,c,i,a,l=1;do{for(n=e,e=null,o=null,c=0;n;){for(c++,t=n,i=0,r=0;r<l&&(i++,t=t.nextZ,t);r++);for(a=l;i>0||a>0&&t;)0!==i&&(0===a||!t||n.z<=t.z)?(s=n,n=n.nextZ,i--):(s=t,t=t.nextZ,a--),o?o.nextZ=s:e=s,s.prevZ=o,o=s;n=t}o.nextZ=null,l*=2}while(c>1)}(o)}(e,s,o,i);let c,r,l=e;for(;e.prev!==e.next;)if(c=e.prev,r=e.next,i?Gl(e,s,o,i):Zl(e))t.push(c.i/n|0),t.push(e.i/n|0),t.push(r.i/n|0),tn(e),e=r.next,l=r.next;else if((e=r)===l){a?1===a?an(e=$l(lt(e),t,n),t,n,s,o,i,2):2===a&&Vl(e,t,n,s,o,i):an(lt(e),t,n,s,o,i,1);break}}function Zl(e){const c=e.prev,d=e,l=e.next;if(v(c,d,l)>=0)return!1;const a=c.x,i=d.x,n=l.x,o=c.y,r=d.y,s=l.y,u=a<i?a<n?a:n:i<n?i:n,h=o<r?o<s?o:s:r<s?r:s,m=a>i?a>n?a:n:i>n?i:n,f=o>r?o>s?o:s:r>s?r:s;let t=l.next;for(;t!==c;){if(t.x>=u&&t.x<=m&&t.y>=h&&t.y<=f&&Nt(a,o,i,r,n,s,t.x,t.y)&&v(t.prev,t,t.next)>=0)return!1;t=t.next}return!0}function Gl(e,t,n,s){const h=e.prev,j=e,m=e.next;if(v(h,j,m)>=0)return!1;const u=h.x,c=j.x,a=m.x,l=h.y,d=j.y,r=m.y,f=u<c?u<a?u:a:c<a?c:a,p=l<d?l<r?l:r:d<r?d:r,g=u>c?u>a?u:a:c>a?c:a,b=l>d?l>r?l:r:d>r?d:r,y=Go(f,p,t,n,s),_=Go(g,b,t,n,s);let i=e.prevZ,o=e.nextZ;for(;i&&i.z>=y&&o&&o.z<=_;){if(i.x>=f&&i.x<=g&&i.y>=p&&i.y<=b&&i!==h&&i!==m&&Nt(u,l,c,d,a,r,i.x,i.y)&&v(i.prev,i,i.next)>=0)return!1;if(i=i.prevZ,o.x>=f&&o.x<=g&&o.y>=p&&o.y<=b&&o!==h&&o!==m&&Nt(u,l,c,d,a,r,o.x,o.y)&&v(o.prev,o,o.next)>=0)return!1;o=o.nextZ}for(;i&&i.z>=y;){if(i.x>=f&&i.x<=g&&i.y>=p&&i.y<=b&&i!==h&&i!==m&&Nt(u,l,c,d,a,r,i.x,i.y)&&v(i.prev,i,i.next)>=0)return!1;i=i.prevZ}for(;o&&o.z<=_;){if(o.x>=f&&o.x<=g&&o.y>=p&&o.y<=b&&o!==h&&o!==m&&Nt(u,l,c,d,a,r,o.x,o.y)&&v(o.prev,o,o.next)>=0)return!1;o=o.nextZ}return!0}function $l(e,t,n){let s=e;do{const i=s.prev,o=s.next.next;!Bs(i,o)&&Ml(i,s,s.next,o)&&nn(i,o)&&nn(o,i)&&(t.push(i.i/n|0),t.push(s.i/n|0),t.push(o.i/n|0),tn(s),tn(s.next),s=e=o),s=s.next}while(s!==e)return lt(s)}function Vl(e,t,n,s,o,i){let a=e;do{let e=a.next.next;for(;e!==a.prev;){if(a.i!==e.i&&zl(a,e)){let r=Cl(a,e);return a=lt(a,a.next),r=lt(r,r.next),an(a,t,n,s,o,i,0),void an(r,t,n,s,o,i,0)}e=e.next}a=a.next}while(a!==e)}function Pl(e,t){return e.x-t.x}function Rl(e,t){const n=function(e,t){let s,n=t,a=-1/0;const i=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=i&&e>a&&(a=e,s=n.x<n.next.x?n:n.next,e===i))return s}n=n.next}while(n!==t)if(!s)return null;const u=s,d=s.x,c=s.y;let r,l=1/0;n=s;do i>=n.x&&n.x>=d&&i!==n.x&&Nt(o<c?i:a,o,d,c,o<c?a:i,o,n.x,n.y)&&(r=Math.abs(o-n.y)/(i-n.x),nn(n,e)&&(r<l||r===l&&(n.x>s.x||n.x===s.x&&Ll(s,n)))&&(s=n,l=r)),n=n.next;while(n!==u)return s}(e,t);if(!n)return t;const s=Cl(n,e);return lt(s,s.next),lt(n,n.next)}function Ll(e,t){return v(e.prev,e,t.prev)<0&&v(t.next,e,e.next)<0}function Go(e,t,n,s,o){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*o|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-s)*o|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function Dl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e)return n}function Nt(e,t,n,s,o,i,a,r){return(o-a)*(t-r)>=(e-a)*(i-r)&&(e-a)*(s-r)>=(n-a)*(t-r)&&(n-a)*(i-r)>=(o-a)*(s-r)}function zl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ml(n,n.next,e,t))return!0;n=n.next}while(n!==e)return!1}(e,t)&&(nn(e,t)&&nn(t,e)&&function(e,t){let n=e,s=!1;const i=(e.x+t.x)/2,o=(e.y+t.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&i<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==e)return s}(e,t)&&(v(e.prev,e,t.prev)||v(e,t.prev,t))||Bs(e,t)&&v(e.prev,e,e.next)>0&&v(t.prev,t,t.next)>0)}function v(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Bs(e,t){return e.x===t.x&&e.y===t.y}function Ml(e,t,n,s){const o=Qs(v(e,t,n)),i=Qs(v(e,t,s)),a=Qs(v(n,s,e)),r=Qs(v(n,s,t));return o!==i&&a!==r||0===o&&!!Ks(e,n,t)||0===i&&!!Ks(e,s,t)||0===a&&!!Ks(n,e,s)||0===r&&!!Ks(n,t,s)}function Ks(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Qs(e){return e>0?1:e<0?-1:0}function nn(e,t){return v(e.prev,e,e.next)<0?v(e,t,e.next)>=0&&v(e,e.prev,t)>=0:v(e,t,e.prev)<0||v(e,e.next,t)<0}function Cl(e,t){const s=new Mo(e.i,e.x,e.y),n=new Mo(t.i,t.x,t.y),o=e.next,i=t.prev;return e.next=t,t.prev=e,s.next=o,o.prev=s,n.next=s,s.prev=n,i.next=n,n.prev=i,n}function xl(e,t,n,s){const o=new Mo(e,t,n);return s?(o.next=s.next,o.prev=s,s.next.prev=o,s.next=o):(o.prev=o,o.next=o),o}function tn(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Mo(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}class Oe{static area(e){const t=e.length;let n=0;for(let o=t-1,s=0;s<t;o=s++)n+=e[o].x*e[s].y-e[s].x*e[o].y;return.5*n}static isClockWise(e){return Oe.area(e)<0}static triangulateShape(e,t){const n=[],s=[],o=[];Ol(e),wl(n,e);let i=e.length;t.forEach(Ol);for(let e=0;e<t.length;e++)s.push(i),i+=t[e].length,wl(n,t[e]);const a=td(n,s);for(let e=0;e<a.length;e+=3)o.push(a.slice(e,e+3));return o}}function Ol(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function wl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class Ao extends l{constructor(e=new et([new n(.5,.5),new n(-.5,.5),new n(-.5,-.5),new n(.5,-.5)]),s={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:s},e=Array.isArray(e)?e:[e];const a=this,o=[],r=[];for(let t=0,n=e.length;t<n;t++)c(e[t]);function c(e){const j=[],$=void 0!==s.curveSegments?s.curveSegments:12,l=void 0!==s.steps?s.steps:1,L=void 0!==s.depth?s.depth:1;let O=void 0===s.bevelEnabled||s.bevelEnabled,S=void 0!==s.bevelThickness?s.bevelThickness:.2,A=void 0!==s.bevelSize?s.bevelSize:S-.1,E=void 0!==s.bevelOffset?s.bevelOffset:0,v=void 0!==s.bevelSegments?s.bevelSegments:3;const D=s.extrudePath,B=void 0!==s.UVGenerator?s.UVGenerator:Ul;let x,y,w,C,m,M=!1;D&&(x=D.getSpacedPoints(l),M=!0,O=!1,y=D.computeFrenetFrames(l,!1),w=new t,C=new t,m=new t),O||(v=0,S=0,A=0,E=0);const I=e.extractPoints($);let c=I.shape;const i=I.holes;if(!Oe.isClockWise(c)){c=c.reverse();for(let e=0,n=i.length;e<n;e++){const t=i[e];Oe.isClockWise(t)&&(i[e]=t.reverse())}}const _=Oe.triangulateShape(c,i),d=c;for(let e=0,t=i.length;e<t;e++){const n=i[e];c=c.concat(n)}function b(e,t,n){return t||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.clone().addScaledVector(t,n)}const h=c.length,F=_.length;function R(e,t,s){let r,c,d;const o=e.x-t.x,i=e.y-t.y,a=s.x-e.x,l=s.y-e.y,u=o*o+i*i,h=o*l-i*a;if(Math.abs(h)>Number.EPSILON){const h=Math.sqrt(u),m=Math.sqrt(a*a+l*l),f=t.x-i/h,p=t.y+o/h,g=((s.x-l/m-f)*l-(s.y+a/m-p)*a)/(o*l-i*a);r=f+o*g-e.x,c=p+i*g-e.y;const v=r*r+c*c;if(v<=2)return new n(r,c);d=Math.sqrt(v/2)}else{let e=!1;o>Number.EPSILON?a>Number.EPSILON&&(e=!0):o<-Number.EPSILON?a<-Number.EPSILON&&(e=!0):Math.sign(i)===Math.sign(l)&&(e=!0),e?(r=-i,c=o,d=Math.sqrt(u)):(r=o,c=i,d=Math.sqrt(u/2))}return new n(r/d,c/d)}const z=[];for(let e=0,t=d.length,n=t-1,s=e+1;e<t;e++,n++,s++)n===t&&(n=0),s===t&&(s=0),z[e]=R(d[e],d[n],d[s]);const N=[];let g,T=z.concat();for(let t=0,n=i.length;t<n;t++){const e=i[t];g=[];for(let t=0,n=e.length,s=n-1,o=t+1;t<n;t++,s++,o++)s===n&&(s=0),o===n&&(o=0),g[t]=R(e[t],e[s],e[o]);N.push(g),T=T.concat(g)}for(let e=0;e<v;e++){const t=e/v,n=S*Math.cos(t*Math.PI/2),s=A*Math.sin(t*Math.PI/2)+E;for(let e=0,o=d.length;e<o;e++){const t=b(d[e],z[e],s);p(t.x,t.y,-n)}for(let e=0,o=i.length;e<o;e++){const t=i[e];g=N[e];for(let e=0,i=t.length;e<i;e++){const o=b(t[e],g[e],s);p(o.x,o.y,-n)}}}const P=A+E;for(let e=0;e<h;e++){const t=O?b(c[e],T[e],P):c[e];M?(C.copy(y.normals[0]).multiplyScalar(t.x),w.copy(y.binormals[0]).multiplyScalar(t.y),m.copy(x[0]).add(C).add(w),p(m.x,m.y,m.z)):p(t.x,t.y,0)}for(let e=1;e<=l;e++)for(let t=0;t<h;t++){const n=O?b(c[t],T[t],P):c[t];M?(C.copy(y.normals[e]).multiplyScalar(n.x),w.copy(y.binormals[e]).multiplyScalar(n.y),m.copy(x[e]).add(C).add(w),p(m.x,m.y,m.z)):p(n.x,n.y,L/l*e)}for(let e=v-1;e>=0;e--){const n=e/v,t=S*Math.cos(n*Math.PI/2),s=A*Math.sin(n*Math.PI/2)+E;for(let e=0,o=d.length;e<o;e++){const n=b(d[e],z[e],s);p(n.x,n.y,L+t)}for(let e=0,o=i.length;e<o;e++){const n=i[e];g=N[e];for(let e=0,i=n.length;e<i;e++){const o=b(n[e],g[e],s);M?p(o.x,o.y+x[l-1].y,x[l-1].x+t):p(o.x,o.y,L+t)}}}function H(e,t){let n=e.length;for(;--n>=0;){const o=n;let s=n-1;s<0&&(s=e.length-1);for(let e=0,a=l+2*v;e<a;e++){const n=h*e,i=h*(e+1);V(t+o+n,t+s+n,t+s+i,t+o+i)}}}function p(e,t,n){j.push(e),j.push(t),j.push(n)}function k(e,t,n){u(e),u(t),u(n);const s=o.length/3,i=B.generateTopUV(a,o,s-3,s-2,s-1);f(i[0]),f(i[1]),f(i[2])}function V(e,t,n,s){u(e),u(t),u(s),u(t),u(n),u(s);const r=o.length/3,i=B.generateSideWallUV(a,o,r-6,r-3,r-2,r-1);f(i[0]),f(i[1]),f(i[3]),f(i[1]),f(i[2]),f(i[3])}function u(e){o.push(j[3*e+0]),o.push(j[3*e+1]),o.push(j[3*e+2])}function f(e){r.push(e.x),r.push(e.y)}!function(){const e=o.length/3;if(O){let t=0,e=h*t;for(let t=0;t<F;t++){const n=_[t];k(n[2]+e,n[1]+e,n[0]+e)}t=l+2*v,e=h*t;for(let t=0;t<F;t++){const n=_[t];k(n[0]+e,n[1]+e,n[2]+e)}}else{for(let e=0;e<F;e++){const t=_[e];k(t[2],t[1],t[0])}for(let e=0;e<F;e++){const t=_[e];k(t[0]+h*l,t[1]+h*l,t[2]+h*l)}}a.addGroup(e,o.length/3-e,0)}(),function(){const t=o.length/3;let e=0;H(d,e),e+=d.length;for(let t=0,s=i.length;t<s;t++){const n=i[t];H(n,e),e+=n.length}a.addGroup(t,o.length/3-t,1)}()}this.setAttribute("position",new i(o,3)),this.setAttribute("uv",new i(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return function(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,s=e.length;t<s;t++){const o=e[t];n.shapes.push(o.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),void 0!==t.extrudePath&&(n.options.extrudePath=t.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){const s=[];for(let n=0,o=e.shapes.length;n<o;n++){const i=t[e.shapes[n]];s.push(i)}const n=e.options.extrudePath;return void 0!==n&&(e.options.extrudePath=(new Ss[n.type]).fromJSON(n)),new Ao(s,e.options)}}const Ul={generateTopUV:function(e,t,s,o,i){const a=t[3*s],r=t[3*s+1],c=t[3*o],l=t[3*o+1],d=t[3*i],u=t[3*i+1];return[new n(a,r),new n(c,l),new n(d,u)]},generateSideWallUV:function(e,t,s,o,i,a){const r=t[3*s],c=t[3*s+1],l=t[3*s+2],d=t[3*o],u=t[3*o+1],h=t[3*o+2],p=t[3*i],g=t[3*i+1],m=t[3*i+2],v=t[3*a],b=t[3*a+1],f=t[3*a+2];return Math.abs(c-u)<Math.abs(r-d)?[new n(r,1-l),new n(d,1-h),new n(p,1-m),new n(v,1-f)]:[new n(c,1-l),new n(u,1-h),new n(g,1-m),new n(b,1-f)]}};class ko extends Ze{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ko(e.radius,e.detail)}}class oo extends Ze{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oo(e.radius,e.detail)}}class yo extends l{constructor(e=.5,s=1,o=32,a=1,r=0,c=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:s,thetaSegments:o,phiSegments:a,thetaStart:r,thetaLength:c},o=Math.max(3,o);const u=[],m=[],f=[],p=[];let h=e;const g=(s-e)/(a=Math.max(1,a)),l=new t,d=new n;for(let e=0;e<=a;e++){for(let e=0;e<=o;e++){const t=r+e/o*c;l.x=h*Math.cos(t),l.y=h*Math.sin(t),m.push(l.x,l.y,l.z),f.push(0,0,1),d.x=(l.x/s+1)/2,d.y=(l.y/s+1)/2,p.push(d.x,d.y)}h+=g}for(let e=0;e<a;e++){const t=e*(o+1);for(let n=0;n<o;n++){const e=n+t,a=e,s=e+o+1,r=e+o+2,i=e+1;u.push(a,s,i),u.push(s,r,i)}}this.setIndex(u),this.setAttribute("position",new i(m,3)),this.setAttribute("normal",new i(f,3)),this.setAttribute("uv",new i(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class jo extends l{constructor(e=new et([new n(0,.5),new n(-.5,-.5),new n(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const a=[],o=[],r=[],c=[];let l=0,s=0;if(!1===Array.isArray(e))d(e);else for(let t=0;t<e.length;t++)d(e[t]),this.addGroup(l,s,t),l+=s,s=0;function d(e){const l=o.length/3,d=e.extractPoints(t);let n=d.shape;const i=d.holes;!1===Oe.isClockWise(n)&&(n=n.reverse());for(let e=0,n=i.length;e<n;e++){const t=i[e];!0===Oe.isClockWise(t)&&(i[e]=t.reverse())}const u=Oe.triangulateShape(n,i);for(let e=0,t=i.length;e<t;e++){const s=i[e];n=n.concat(s)}for(let t=0,s=n.length;t<s;t++){const e=n[t];o.push(e.x,e.y,0),r.push(0,0,1),c.push(e.x,e.y)}for(let e=0,n=u.length;e<n;e++){const t=u[e],o=t[0]+l,i=t[1]+l,r=t[2]+l;a.push(o,i,r),s+=3}}this.setIndex(a),this.setAttribute("position",new i(o,3)),this.setAttribute("normal",new i(r,3)),this.setAttribute("uv",new i(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return function(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,s=e.length;n<s;n++){const o=e[n];t.shapes.push(o.uuid)}else t.shapes.push(e.uuid);return t}(this.parameters.shapes,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const i=t[e.shapes[s]];n.push(i)}return new jo(n,e.curveSegments)}}class Zn extends l{constructor(e=1,n=32,s=16,o=0,a=2*Math.PI,r=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:o,phiLength:a,thetaStart:r,thetaLength:c},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const m=Math.min(r+c,Math.PI);let v=0;const d=[],l=new t,u=new t,h=[],f=[],p=[],g=[];for(let t=0;t<=s;t++){const b=[],i=t/s;let h=0;0===t&&0===r?h=.5/n:t===s&&m===Math.PI&&(h=-.5/n);for(let t=0;t<=n;t++){const s=t/n;l.x=-e*Math.cos(o+s*a)*Math.sin(r+i*c),l.y=e*Math.cos(r+i*c),l.z=e*Math.sin(o+s*a)*Math.sin(r+i*c),f.push(l.x,l.y,l.z),u.copy(l).normalize(),p.push(u.x,u.y,u.z),g.push(s+h,1-i),b.push(v++)}d.push(b)}for(let e=0;e<s;e++)for(let t=0;t<n;t++){const a=d[e][t+1],o=d[e][t],c=d[e+1][t],i=d[e+1][t+1];(0!==e||r>0)&&h.push(a,o,i),(e!==s-1||m<Math.PI)&&h.push(o,c,i)}this.setIndex(h),this.setAttribute("position",new i(f,3)),this.setAttribute("normal",new i(p,3)),this.setAttribute("uv",new i(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wi extends Ze{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wi(e.radius,e.detail)}}class bo extends l{constructor(e=1,n=.4,s=12,o=48,a=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:s,tubularSegments:o,arc:a},s=Math.floor(s),o=Math.floor(o);const l=[],h=[],m=[],d=[],u=new t,r=new t,c=new t;for(let t=0;t<=s;t++)for(let i=0;i<=o;i++){const l=i/o*a,f=t/s*Math.PI*2;r.x=(e+n*Math.cos(f))*Math.cos(l),r.y=(e+n*Math.cos(f))*Math.sin(l),r.z=n*Math.sin(f),h.push(r.x,r.y,r.z),u.x=e*Math.cos(l),u.y=e*Math.sin(l),c.subVectors(r,u).normalize(),m.push(c.x,c.y,c.z),d.push(i/o),d.push(t/s)}for(let e=1;e<=s;e++)for(let t=1;t<=o;t++){const i=(o+1)*e+t-1,n=(o+1)*(e-1)+t-1,a=(o+1)*(e-1)+t,s=(o+1)*e+t;l.push(i,n,s),l.push(n,a,s)}this.setIndex(l),this.setAttribute("position",new i(h,3)),this.setAttribute("normal",new i(m,3)),this.setAttribute("uv",new i(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _o extends l{constructor(e=1,n=.4,s=64,o=8,a=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:s,radialSegments:o,p:a,q:r},s=Math.floor(s),o=Math.floor(o);const m=[],v=[],b=[],f=[],c=new t,h=new t,l=new t,p=new t,u=new t,g=new t,d=new t;for(let t=0;t<=s;++t){const i=t/s*a*Math.PI*2;j(i,a,r,e,l),j(i+.01,a,r,e,p),g.subVectors(p,l),d.addVectors(p,l),u.crossVectors(g,d),d.crossVectors(u,g),u.normalize(),d.normalize();for(let e=0;e<=o;++e){const r=e/o*Math.PI*2,i=-n*Math.cos(r),a=n*Math.sin(r);c.x=l.x+(i*d.x+a*u.x),c.y=l.y+(i*d.y+a*u.y),c.z=l.z+(i*d.z+a*u.z),v.push(c.x,c.y,c.z),h.subVectors(c,l).normalize(),b.push(h.x,h.y,h.z),f.push(t/s),f.push(e/o)}}for(let e=1;e<=s;e++)for(let t=1;t<=o;t++){const i=(o+1)*(e-1)+(t-1),n=(o+1)*e+(t-1),a=(o+1)*e+t,s=(o+1)*(e-1)+t;m.push(i,n,s),m.push(n,a,s)}function j(e,t,n,s,o){const r=Math.cos(e),c=Math.sin(e),i=n/t*e,a=Math.cos(i);o.x=s*(2+a)*.5*r,o.y=s*(2+a)*c*.5,o.z=s*Math.sin(i)*.5}this.setIndex(m),this.setAttribute("position",new i(v,3)),this.setAttribute("normal",new i(b,3)),this.setAttribute("uv",new i(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class So extends l{constructor(e=new fi(new t(-1,-1,0),new t(-1,1,0),new t(1,1,0)),s=64,o=1,a=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:s,radius:o,radialSegments:a,closed:r};const d=e.computeFrenetFrames(s,r);this.tangents=d.tangents,this.normals=d.normals,this.binormals=d.binormals;const l=new t,c=new t,h=new n;let u=new t;const f=[],p=[],g=[],m=[];function v(t){u=e.getPointAt(t/s,u);const n=d.normals[t],i=d.binormals[t];for(let e=0;e<=a;e++){const r=e/a*Math.PI*2,t=Math.sin(r),s=-Math.cos(r);c.x=s*n.x+t*i.x,c.y=s*n.y+t*i.y,c.z=s*n.z+t*i.z,c.normalize(),p.push(c.x,c.y,c.z),l.x=u.x+o*c.x,l.y=u.y+o*c.y,l.z=u.z+o*c.z,f.push(l.x,l.y,l.z)}}!function(){for(let e=0;e<s;e++)v(e);v(!1===r?s:0),function(){for(let e=0;e<=s;e++)for(let t=0;t<=a;t++)h.x=e/s,h.y=t/a,g.push(h.x,h.y)}(),function(){for(let e=1;e<=s;e++)for(let t=1;t<=a;t++){const o=(a+1)*(e-1)+(t-1),n=(a+1)*e+(t-1),i=(a+1)*e+t,s=(a+1)*(e-1)+t;m.push(o,n,s),m.push(n,i,s)}}()}(),this.setIndex(m),this.setAttribute("position",new i(f,3)),this.setAttribute("normal",new i(p,3)),this.setAttribute("uv",new i(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new So((new Ss[e.path.type]).fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class gl extends l{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},null!==e){const o=[],a=new Set,n=new t,s=new t;if(null!==e.index){const r=e.attributes.position,i=e.index;let t=e.groups;0===t.length&&(t=[{start:0,count:i.count,materialIndex:0}]);for(let e=0,d=t.length;e<d;++e){const c=t[e],l=c.start;for(let e=l,t=l+c.count;e<t;e+=3)for(let t=0;t<3;t++){const c=i.getX(e+t),l=i.getX(e+(t+1)%3);n.fromBufferAttribute(r,c),s.fromBufferAttribute(r,l),!0===pl(n,s,a)&&(o.push(n.x,n.y,n.z),o.push(s.x,s.y,s.z))}}}else{const t=e.attributes.position;for(let e=0,i=t.count/3;e<i;e++)for(let i=0;i<3;i++){const r=3*e+i,c=3*e+(i+1)%3;n.fromBufferAttribute(t,r),s.fromBufferAttribute(t,c),!0===pl(n,s,a)&&(o.push(n.x,n.y,n.z),o.push(s.x,s.y,s.z))}}this.setAttribute("position",new i(o,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function pl(e,t,n){const s=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,o=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return!0!==n.has(s)&&!0!==n.has(o)&&(n.add(s),n.add(o),!0)}Fo=Object.freeze({__proto__:null,BoxGeometry:wt,CapsuleGeometry:li,CircleGeometry:ci,ConeGeometry:ai,CylinderGeometry:un,DodecahedronGeometry:si,EdgesGeometry:fl,ExtrudeGeometry:Ao,IcosahedronGeometry:ko,LatheGeometry:Ts,OctahedronGeometry:oo,PlaneGeometry:co,PolyhedronGeometry:Ze,RingGeometry:yo,ShapeGeometry:jo,SphereGeometry:Zn,TetrahedronGeometry:wi,TorusGeometry:bo,TorusKnotGeometry:_o,TubeGeometry:So,WireframeGeometry:gl});class hl extends z{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new o(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ul extends le{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Io extends z{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new o(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new o(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ll extends Io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new n(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return b(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new o(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new o(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new o(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qc extends z{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new o(16777215),this.specular=new o(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new o(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gc extends z{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new o(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new o(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Yc extends z{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class qc extends z{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new o(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new o(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kc extends z{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new o(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uc extends L{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ft(e,t,n){return!e||!n&&e.constructor===t?e:"number"==typeof t.BYTES_PER_ELEMENT?new t(e):Array.prototype.slice.call(e)}function Bc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ic(e){const n=e.length,t=new Array(n);for(let e=0;e!==n;++e)t[e]=e;return t.sort(function(t,n){return e[t]-e[n]}),t}function Vo(e,t,n){const s=e.length,o=new e.constructor(s);for(let i=0,a=0;a!==s;++i){const r=n[i]*t;for(let n=0;n!==t;++n)o[a++]=e[r+n]}return o}function ti(e,t,n,s){let a=1,o=e[0];for(;void 0!==o&&void 0===o[s];)o=e[a++];if(void 0===o)return;let i=o[s];if(void 0!==i)if(Array.isArray(i))do i=o[s],void 0!==i&&(t.push(o.time),n.push.apply(n,i)),o=e[a++];while(void 0!==o)else if(void 0!==i.toArray)do i=o[s],void 0!==i&&(t.push(o.time),i.toArray(n,n.length)),o=e[a++];while(void 0!==o)else do i=o[s],void 0!==i&&(t.push(o.time),n.push(i)),o=e[a++];while(void 0!==o)}const jd={convertArray:ft,isTypedArray:Bc,getKeyframeOrder:Ic,sortedArray:Vo,flattenJSON:ti,subclip:function(e,t,n,s,o=30){const i=e.clone();i.name=t;const r=[];for(let t=0;t<i.tracks.length;++t){const e=i.tracks[t],c=e.getValueSize(),a=[],l=[];for(let t=0;t<e.times.length;++t){const i=e.times[t]*o;if(!(i<n||i>=s)){a.push(e.times[t]);for(let n=0;n<c;++n)l.push(e.values[t*c+n])}}0!==a.length&&(e.times=ft(a,e.times.constructor),e.values=ft(l,e.values.constructor),r.push(e))}i.tracks=r;let a=1/0;for(let e=0;e<i.tracks.length;++e)a>i.tracks[e].times[0]&&(a=i.tracks[e].times[0]);for(let e=0;e<i.tracks.length;++e)i.tracks[e].shift(-1*a);return i.resetDuration(),i},makeClipAdditive:function(e,t=0,n=e,s=30){s<=0&&(s=30);const i=n.tracks.length,o=t/s;for(let d=0;d<i;++d){const t=n.tracks[d],c=t.ValueTypeName;if("bool"===c||"string"===c)continue;const s=e.tracks.find(function(e){return e.name===t.name&&e.ValueTypeName===c});if(void 0===s)continue;let a=0;const l=t.getValueSize();t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(a=l/3);let u=0;const h=s.getValueSize();s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);const m=t.times.length-1;let r;if(o<=t.times[0]){const e=a,n=l-a;r=t.values.slice(e,n)}else if(o>=t.times[m]){const e=m*l+a,n=e+l-a;r=t.values.slice(e,n)}else{const e=t.createInterpolant(),n=a,s=l-a;e.evaluate(o),r=e.resultBuffer.slice(n,s)}"quaternion"===c&&(new $).fromArray(r).normalize().conjugate().toArray(r);const f=s.times.length;for(let e=0;e<f;++e){const t=e*h+u;if("quaternion"===c)$.multiplyQuaternionsFlat(s.values,t,r,0,s.values,t);else{const e=h-2*u;for(let n=0;n<e;++n)s.values[t+n]-=r[n]}}}return e.blendMode=mo,e}};class ln{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==s?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const s=this.parameterPositions;let t=this._cachedIndex,o=s[t],n=s[t-1];t:{e:{let i;n:{i:if(!(e<o)){for(let i=t+2;;){if(void 0===o){if(e<n)break i;return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}if(t===i)break;if(n=o,o=s[++t],e<o)break e}i=s.length;break n}if(e>=n)break t;{const a=s[1];e<a&&(t=2,n=a);for(let i=t-2;;){if(void 0===n)return this._cachedIndex=0,this.copySampleValue_(0);if(t===i)break;if(o=n,n=s[--t-1],e>=n)break e}i=t,t=0}}for(;t<i;){const n=t+i>>>1;e<s[n]?i=n:t=n+1}if(o=s[t],n=s[t-1],void 0===n)return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===o)return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}this._cachedIndex=t,this.intervalChanged_(t,n,o)}return this.interpolate_(t,n,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n;for(let e=0;e!==n;++e)t[e]=s[o+e];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nc extends ln{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nt,endingEnd:nt}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,i=e+1,a=s[o],r=s[i];if(void 0===a)switch(this.getSettings_().endingStart){case tt:o=e,a=2*t-n;break;case wn:o=s.length-2,a=t+s[o]-s[o+1];break;default:o=e,a=n}if(void 0===r)switch(this.getSettings_().endingEnd){case tt:i=e,r=2*n-t;break;case wn:i=1,r=n+s[1]-s[0];break;default:i=e-1,r=t}const c=.5*(n-t),l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(r-n),this._offsetPrev=o*l,this._offsetNext=i*l}interpolate_(e,t,n,s){const h=this.resultBuffer,r=this.sampleValues,d=this.valueSize,u=e*d,m=u-d,p=this._offsetPrev,f=this._offsetNext,i=this._weightPrev,l=this._weightNext,o=(n-t)/(s-t),a=o*o,c=a*o,g=-i*c+2*i*a-i*o,v=(1+i)*c+(-1.5-2*i)*a+(-.5+i)*o+1,b=(-1-l)*c+(1.5+l)*a+.5*o,j=l*c-l*a;for(let e=0;e!==d;++e)h[e]=g*r[p+e]+v*r[m+e]+b*r[u+e]+j*r[f+e];return h}}class _i extends ln{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,r=e*o,l=r-o,c=(n-t)/(s-t),d=1-c;for(let e=0;e!==o;++e)i[e]=a[l+e]*d+a[r+e]*c;return i}}class Dc extends ln{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ne{constructor(e,t,n,s){if(void 0===e)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===t||0===t.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ft(t,this.TimeBufferType),this.values=ft(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let t;if(n.toJSON!==this.toJSON)t=n.toJSON(e);else{t={name:e.name,times:ft(e.times,Array),values:ft(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(t.interpolation=n)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _i(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yn:t=this.InterpolantFactoryMethodDiscrete;break;case _n:t=this.InterpolantFactoryMethodLinear;break;case ms:t=this.InterpolantFactoryMethodSmooth}if(void 0===t){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(e===this.DefaultInterpolation)throw new Error(t);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yn;case this.InterpolantFactoryMethodLinear:return _n;case this.InterpolantFactoryMethodSmooth:return ms}}getValueSize(){return this.values.length/this.times.length}shift(e){if(0!==e){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(1!==e){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const o=this.times,i=o.length;let s=0,n=i-1;for(;s!==i&&o[s]<e;)++s;for(;-1!==n&&o[n]>t;)--n;if(++n,0!==s||n!==i){s>=n&&(n=Math.max(n,1),s=n-1);const e=this.getValueSize();this.times=o.slice(s,n),this.values=this.values.slice(s*e,n*e)}return this}validate(){let e=!0;const s=this.getValueSize();s-Math.floor(s)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const o=this.times,t=this.values,i=o.length;0===i&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==i;s++){const t=o[s];if("number"==typeof t&&isNaN(t)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,t),e=!1;break}if(null!==n&&n>t){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,t,n),e=!1;break}n=t}if(void 0!==t&&Bc(t))for(let n=0,o=t.length;n!==o;++n){const s=t[n];if(isNaN(s)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,s),e=!1;break}}return e}optimize(){const e=this.times.slice(),s=this.values.slice(),t=this.getValueSize(),i=this.getInterpolation()===ms,o=e.length-1;let n=1;for(let a=1;a<o;++a){let r=!1;const c=e[a];if(c!==e[a+1]&&(1!==a||c!==e[0]))if(i)r=!0;else{const e=a*t,n=e-t,o=e+t;for(let i=0;i!==t;++i){const a=s[e+i];if(a!==s[n+i]||a!==s[o+i]){r=!0;break}}}if(r){if(a!==n){e[n]=e[a];const o=a*t,i=n*t;for(let e=0;e!==t;++e)s[i+e]=s[o+e]}++n}}if(o>0){e[n]=e[o];for(let i=o*t,a=n*t,e=0;e!==t;++e)s[a+e]=s[i+e];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=s.slice(0,n*t)):(this.times=e,this.values=s),this}clone(){const t=this.times.slice(),n=this.values.slice(),e=new(0,this.constructor)(this.name,t,n);return e.createInterpolant=this.createInterpolant,e}}ne.prototype.TimeBufferType=Float32Array,ne.prototype.ValueBufferType=Float32Array,ne.prototype.DefaultInterpolation=_n;class ct extends ne{}ct.prototype.ValueTypeName="bool",ct.prototype.ValueBufferType=Array,ct.prototype.DefaultInterpolation=yn,ct.prototype.InterpolantFactoryMethodLinear=void 0,ct.prototype.InterpolantFactoryMethodSmooth=void 0;class Di extends ne{}Di.prototype.ValueTypeName="color";class Cn extends ne{}Cn.prototype.ValueTypeName="number";class Mc extends ln{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,i=this.valueSize,c=(n-t)/(s-t);let o=e*i;for(let e=o+i;o!==e;o+=4)$.slerpFlat(a,0,r,o-i,r,o,c);return a}}class Mt extends ne{InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}}Mt.prototype.ValueTypeName="quaternion",Mt.prototype.DefaultInterpolation=_n,Mt.prototype.InterpolantFactoryMethodSmooth=void 0;class Qe extends ne{}Qe.prototype.ValueTypeName="string",Qe.prototype.ValueBufferType=Array,Qe.prototype.DefaultInterpolation=yn,Qe.prototype.InterpolantFactoryMethodLinear=void 0,Qe.prototype.InterpolantFactoryMethodSmooth=void 0;class Bn extends ne{}Bn.prototype.ValueTypeName="vector";class Qt{constructor(e,t=-1,n,s=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=q(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,o=1/(e.fps||1);for(let e=0,s=n.length;e!==s;++e)t.push(zd(n[e]).scale(o));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,s=n.length;e!==s;++e)t.push(ne.toJSON(n[e]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const o=t.length,i=[];for(let a=0;a<o;a++){let e=[],r=[];e.push((a+o-1)%o,a,(a+1)%o),r.push(0,1,0);const c=Ic(e);e=Vo(e,1,c),r=Vo(r,1,c),s||0!==e[0]||(e.push(o),r.push(r[0])),i.push(new Cn(".morphTargetInfluences["+t[a].name+"]",e,r).scale(1/n))}return new this(e,-1,i)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,a=e.length;t<a;t++){const o=e[t],n=o.name.match(i);if(n&&n.length>1){const t=n[1];let e=s[t];e||(s[t]=e=[]),e.push(o)}}const o=[];for(const e in s)o.push(this.CreateFromMorphTargetSequence(e,s[e],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const s=function(e,t,n,s,o){if(0!==n.length){const i=[],a=[];ti(n,i,a,s),0!==i.length&&o.push(new e(t,i,a))}},n=[],a=e.name||"default",r=e.fps||30,c=e.blendMode;let o=e.length||-1;const i=e.hierarchy||[];for(let a=0;a<i.length;a++){const e=i[a].keys;if(e&&0!==e.length)if(e[0].morphTargets){const s={};let t;for(t=0;t<e.length;t++)if(e[t].morphTargets)for(let n=0;n<e[t].morphTargets.length;n++)s[e[t].morphTargets[n]]=-1;for(const o in s){const i=[],a=[];for(let n=0;n!==e[t].morphTargets.length;++n){const s=e[t];i.push(s.time),a.push(s.morphTarget===o?1:0)}n.push(new Cn(".morphTargetInfluence["+o+"]",i,a))}o=s.length*r}else{const o=".bones["+t[a].name+"]";s(Bn,o+".position",e,"pos",n),s(Mt,o+".quaternion",e,"rot",n),s(Bn,o+".scale",e,"scl",n)}}return 0===n.length?null:new this(a,o,n,c)}resetDuration(){let e=0;for(let t=0,s=this.tracks.length;t!==s;++t){const n=this.tracks[t];e=Math.max(e,n.times[n.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zd(e){if(void 0===e.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=function(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cn;case"vector":case"vector2":case"vector3":case"vector4":return Bn;case"color":return Di;case"quaternion":return Mt;case"bool":case"boolean":return ct;case"string":return Qe}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}(e.type);if(void 0===e.times){const t=[],n=[];ti(e.keys,t,n,"value"),e.times=t,e.values=n}return void 0!==t.parse?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}const be={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class Gi{constructor(e,t,n){const s=this;let r,c=!1,i=0,a=0;const o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){a++,!1===c&&void 0!==s.onStart&&s.onStart(e,i,a),c=!0},this.itemEnd=function(e){i++,void 0!==s.onProgress&&s.onProgress(e,i,a),i===a&&(c=!1,void 0!==s.onLoad&&s.onLoad())},this.itemError=function(e){void 0!==s.onError&&s.onError(e)},this.resolveURL=function(e){return r?r(e):e},this.setURLModifier=function(e){return r=e,this},this.addHandler=function(e,t){return o.push(e,t),this},this.removeHandler=function(e){const t=o.indexOf(e);return-1!==t&&o.splice(t,2),this},this.getHandler=function(e){for(let t=0,s=o.length;t<s;t+=2){const n=o[t],i=o[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return i}return null}}}const _c=new Gi;class B{constructor(e){this.manager=void 0!==e?e:_c,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}B.DEFAULT_MATERIAL_NAME="__DEFAULT";const _e={};class Hd extends Error{constructor(e,t){super(e),this.response=t}}class Ce extends B{constructor(e){super(e)}load(e,t,n,s){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);const o=be.get(e);if(void 0!==o)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(void 0!==_e[e])return void _e[e].push({onLoad:t,onProgress:n,onError:s});_e[e]=[],_e[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,r=this.responseType;fetch(a).then(t=>{if(200===t.status||0===t.status){if(0===t.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===t.body||void 0===t.body.getReader)return t;const n=_e[e],a=t.body.getReader(),s=t.headers.get("Content-Length")||t.headers.get("X-File-Size"),o=s?parseInt(s):0,r=0!==o;let i=0;const c=new ReadableStream({start(e){!function t(){a.read().then(({done:s,value:a})=>{if(s)e.close();else{i+=a.byteLength;const s=new ProgressEvent("progress",{lengthComputable:r,loaded:i,total:o});for(let e=0,o=n.length;e<o;e++){const t=n[e];t.onProgress&&t.onProgress(s)}e.enqueue(a),t()}})}()}});return new Response(c)}throw new Hd(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(r){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>(new DOMParser).parseFromString(e,i));case"json":return e.json();default:if(void 0===i)return e.text();{const t=/charset="?([^;"\s]*)"?/i.exec(i),n=t&&t[1]?t[1].toLowerCase():void 0,s=new TextDecoder(n);return e.arrayBuffer().then(e=>s.decode(e))}}}).then(t=>{be.add(e,t);const n=_e[e];delete _e[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onLoad&&s.onLoad(t)}}).catch(t=>{const n=_e[e];if(void 0===n)throw this.manager.itemError(e),t;delete _e[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onError&&s.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zn extends B{constructor(e){super(e)}load(e,t,n,s){void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=be.get(e);if(void 0!==a)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const o=En("img");function r(){l(),be.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),s&&s(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener("load",r,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",r,!1),o.addEventListener("error",c,!1),"data:"!==e.slice(0,5)&&void 0!==this.crossOrigin&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class $e extends h{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new o(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,void 0!==this.groundColor&&(t.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(t.object.distance=this.distance),void 0!==this.angle&&(t.object.angle=this.angle),void 0!==this.decay&&(t.object.decay=this.decay),void 0!==this.penumbra&&(t.object.penumbra=this.penumbra),void 0!==this.shadow&&(t.object.shadow=this.shadow.toJSON()),t}}class fc extends $e{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(h.DEFAULT_UP),this.updateMatrix(),this.groundColor=new o(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sa=new a,hc=new t,uc=new t;class la{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new n(512,512),this.map=null,this.mapPass=null,this.matrix=new a,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jt,this._frameExtents=new n(1,1),this._viewportCount=1,this._viewports=[new p(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(hc),uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uc),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){const e={};return 0!==this.bias&&(e.bias=this.bias),0!==this.normalBias&&(e.normalBias=this.normalBias),1!==this.radius&&(e.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yd extends la{constructor(){super(new M(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=2*pt*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;n===t.fov&&s===t.aspect&&o===t.far||(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dc extends $e{constructor(e,t,n=0,s=Math.PI/3,o=0,i=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(h.DEFAULT_UP),this.updateMatrix(),this.target=new h,this.distance=n,this.angle=s,this.penumbra=o,this.decay=i,this.map=null,this.shadow=new Yd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lc=new a,xn=new t,ja=new t;class Jd extends la{constructor(){super(new M(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new n(4,2),this._viewportCount=6,this._viewports=[new p(2,1,1,1),new p(0,1,1,1),new p(3,1,1,1),new p(1,1,1,1),new p(3,0,1,1),new p(1,0,1,1)],this._cubeDirections=[new t(1,0,0),new t(-1,0,0),new t(0,0,1),new t(0,0,-1),new t(0,1,0),new t(0,-1,0)],this._cubeUps=[new t(0,1,0),new t(0,1,0),new t(0,1,0),new t(0,1,0),new t(0,0,1),new t(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,o=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),xn.setFromMatrixPosition(e.matrixWorld),n.position.copy(xn),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),o.makeTranslation(-xn.x,-xn.y,-xn.z),lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc)}}class cc extends $e{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jd}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tu extends la{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rc extends $e{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(h.DEFAULT_UP),this.updateMatrix(),this.target=new h,this.shadow=new tu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ic extends $e{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sc extends $e{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class nc{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new t)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const s=e.x,o=e.y,i=e.z,n=this.coefficients;return t.copy(n[0]).multiplyScalar(.282095),t.addScaledVector(n[1],.488603*o),t.addScaledVector(n[2],.488603*i),t.addScaledVector(n[3],.488603*s),t.addScaledVector(n[4],s*o*1.092548),t.addScaledVector(n[5],o*i*1.092548),t.addScaledVector(n[6],.315392*(3*i*i-1)),t.addScaledVector(n[7],s*i*1.092548),t.addScaledVector(n[8],.546274*(s*s-o*o)),t}getIrradianceAt(e,t){const s=e.x,o=e.y,i=e.z,n=this.coefficients;return t.copy(n[0]).multiplyScalar(.886227),t.addScaledVector(n[1],1.023328*o),t.addScaledVector(n[2],1.023328*i),t.addScaledVector(n[3],1.023328*s),t.addScaledVector(n[4],.858086*s*o),t.addScaledVector(n[5],.858086*o*i),t.addScaledVector(n[6],.743125*i*i-.247708),t.addScaledVector(n[7],.858086*s*i),t.addScaledVector(n[8],.429043*(s*s-o*o)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return(new this.constructor).copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+3*s);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+3*s);return e}static getBasisAt(e,t){const n=e.x,s=e.y,o=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*o,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*o,t[6]=.315392*(3*o*o-1),t[7]=1.092548*n*o,t[8]=.546274*(n*n-s*s)}}class ec extends $e{constructor(e=new nc,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ka extends B{constructor(e){super(e),this.textures={}}load(e,t,n,s){const o=this,i=new Ce(o.manager);i.setPath(o.path),i.setRequestHeader(o.requestHeader),i.setWithCredentials(o.withCredentials),i.load(e,function(n){try{t(o.parse(JSON.parse(n)))}catch(t){s?s(t):console.error(t),o.manager.itemError(e)}},n,s)}parse(e){const r=this.textures;function i(e){return void 0===r[e]&&console.warn("THREE.MaterialLoader: Undefined texture",e),r[e]}const s=ka.createMaterialFromType(e.type);if(void 0!==e.uuid&&(s.uuid=e.uuid),void 0!==e.name&&(s.name=e.name),void 0!==e.color&&void 0!==s.color&&s.color.setHex(e.color),void 0!==e.roughness&&(s.roughness=e.roughness),void 0!==e.metalness&&(s.metalness=e.metalness),void 0!==e.sheen&&(s.sheen=e.sheen),void 0!==e.sheenColor&&(s.sheenColor=(new o).setHex(e.sheenColor)),void 0!==e.sheenRoughness&&(s.sheenRoughness=e.sheenRoughness),void 0!==e.emissive&&void 0!==s.emissive&&s.emissive.setHex(e.emissive),void 0!==e.specular&&void 0!==s.specular&&s.specular.setHex(e.specular),void 0!==e.specularIntensity&&(s.specularIntensity=e.specularIntensity),void 0!==e.specularColor&&void 0!==s.specularColor&&s.specularColor.setHex(e.specularColor),void 0!==e.shininess&&(s.shininess=e.shininess),void 0!==e.clearcoat&&(s.clearcoat=e.clearcoat),void 0!==e.clearcoatRoughness&&(s.clearcoatRoughness=e.clearcoatRoughness),void 0!==e.iridescence&&(s.iridescence=e.iridescence),void 0!==e.iridescenceIOR&&(s.iridescenceIOR=e.iridescenceIOR),void 0!==e.iridescenceThicknessRange&&(s.iridescenceThicknessRange=e.iridescenceThicknessRange),void 0!==e.transmission&&(s.transmission=e.transmission),void 0!==e.thickness&&(s.thickness=e.thickness),void 0!==e.attenuationDistance&&(s.attenuationDistance=e.attenuationDistance),void 0!==e.attenuationColor&&void 0!==s.attenuationColor&&s.attenuationColor.setHex(e.attenuationColor),void 0!==e.anisotropy&&(s.anisotropy=e.anisotropy),void 0!==e.anisotropyRotation&&(s.anisotropyRotation=e.anisotropyRotation),void 0!==e.fog&&(s.fog=e.fog),void 0!==e.flatShading&&(s.flatShading=e.flatShading),void 0!==e.blending&&(s.blending=e.blending),void 0!==e.combine&&(s.combine=e.combine),void 0!==e.side&&(s.side=e.side),void 0!==e.shadowSide&&(s.shadowSide=e.shadowSide),void 0!==e.opacity&&(s.opacity=e.opacity),void 0!==e.transparent&&(s.transparent=e.transparent),void 0!==e.alphaTest&&(s.alphaTest=e.alphaTest),void 0!==e.alphaHash&&(s.alphaHash=e.alphaHash),void 0!==e.depthFunc&&(s.depthFunc=e.depthFunc),void 0!==e.depthTest&&(s.depthTest=e.depthTest),void 0!==e.depthWrite&&(s.depthWrite=e.depthWrite),void 0!==e.colorWrite&&(s.colorWrite=e.colorWrite),void 0!==e.blendSrc&&(s.blendSrc=e.blendSrc),void 0!==e.blendDst&&(s.blendDst=e.blendDst),void 0!==e.blendEquation&&(s.blendEquation=e.blendEquation),void 0!==e.blendSrcAlpha&&(s.blendSrcAlpha=e.blendSrcAlpha),void 0!==e.blendDstAlpha&&(s.blendDstAlpha=e.blendDstAlpha),void 0!==e.blendEquationAlpha&&(s.blendEquationAlpha=e.blendEquationAlpha),void 0!==e.blendColor&&void 0!==s.blendColor&&s.blendColor.setHex(e.blendColor),void 0!==e.blendAlpha&&(s.blendAlpha=e.blendAlpha),void 0!==e.stencilWriteMask&&(s.stencilWriteMask=e.stencilWriteMask),void 0!==e.stencilFunc&&(s.stencilFunc=e.stencilFunc),void 0!==e.stencilRef&&(s.stencilRef=e.stencilRef),void 0!==e.stencilFuncMask&&(s.stencilFuncMask=e.stencilFuncMask),void 0!==e.stencilFail&&(s.stencilFail=e.stencilFail),void 0!==e.stencilZFail&&(s.stencilZFail=e.stencilZFail),void 0!==e.stencilZPass&&(s.stencilZPass=e.stencilZPass),void 0!==e.stencilWrite&&(s.stencilWrite=e.stencilWrite),void 0!==e.wireframe&&(s.wireframe=e.wireframe),void 0!==e.wireframeLinewidth&&(s.wireframeLinewidth=e.wireframeLinewidth),void 0!==e.wireframeLinecap&&(s.wireframeLinecap=e.wireframeLinecap),void 0!==e.wireframeLinejoin&&(s.wireframeLinejoin=e.wireframeLinejoin),void 0!==e.rotation&&(s.rotation=e.rotation),void 0!==e.linewidth&&(s.linewidth=e.linewidth),void 0!==e.dashSize&&(s.dashSize=e.dashSize),void 0!==e.gapSize&&(s.gapSize=e.gapSize),void 0!==e.scale&&(s.scale=e.scale),void 0!==e.polygonOffset&&(s.polygonOffset=e.polygonOffset),void 0!==e.polygonOffsetFactor&&(s.polygonOffsetFactor=e.polygonOffsetFactor),void 0!==e.polygonOffsetUnits&&(s.polygonOffsetUnits=e.polygonOffsetUnits),void 0!==e.dithering&&(s.dithering=e.dithering),void 0!==e.alphaToCoverage&&(s.alphaToCoverage=e.alphaToCoverage),void 0!==e.premultipliedAlpha&&(s.premultipliedAlpha=e.premultipliedAlpha),void 0!==e.forceSinglePass&&(s.forceSinglePass=e.forceSinglePass),void 0!==e.visible&&(s.visible=e.visible),void 0!==e.toneMapped&&(s.toneMapped=e.toneMapped),void 0!==e.userData&&(s.userData=e.userData),void 0!==e.vertexColors&&("number"==typeof e.vertexColors?s.vertexColors=e.vertexColors>0:s.vertexColors=e.vertexColors),void 0!==e.uniforms)for(const r in e.uniforms){const c=e.uniforms[r];switch(s.uniforms[r]={},c.type){case"t":s.uniforms[r].value=i(c.value);break;case"c":s.uniforms[r].value=(new o).setHex(c.value);break;case"v2":s.uniforms[r].value=(new n).fromArray(c.value);break;case"v3":s.uniforms[r].value=(new t).fromArray(c.value);break;case"v4":s.uniforms[r].value=(new p).fromArray(c.value);break;case"m3":s.uniforms[r].value=(new d).fromArray(c.value);break;case"m4":s.uniforms[r].value=(new a).fromArray(c.value);break;default:s.uniforms[r].value=c.value}}if(void 0!==e.defines&&(s.defines=e.defines),void 0!==e.vertexShader&&(s.vertexShader=e.vertexShader),void 0!==e.fragmentShader&&(s.fragmentShader=e.fragmentShader),void 0!==e.glslVersion&&(s.glslVersion=e.glslVersion),void 0!==e.extensions)for(const t in e.extensions)s.extensions[t]=e.extensions[t];if(void 0!==e.lights&&(s.lights=e.lights),void 0!==e.clipping&&(s.clipping=e.clipping),void 0!==e.size&&(s.size=e.size),void 0!==e.sizeAttenuation&&(s.sizeAttenuation=e.sizeAttenuation),void 0!==e.map&&(s.map=i(e.map)),void 0!==e.matcap&&(s.matcap=i(e.matcap)),void 0!==e.alphaMap&&(s.alphaMap=i(e.alphaMap)),void 0!==e.bumpMap&&(s.bumpMap=i(e.bumpMap)),void 0!==e.bumpScale&&(s.bumpScale=e.bumpScale),void 0!==e.normalMap&&(s.normalMap=i(e.normalMap)),void 0!==e.normalMapType&&(s.normalMapType=e.normalMapType),void 0!==e.normalScale){let t=e.normalScale;!1===Array.isArray(t)&&(t=[t,t]),s.normalScale=(new n).fromArray(t)}return void 0!==e.displacementMap&&(s.displacementMap=i(e.displacementMap)),void 0!==e.displacementScale&&(s.displacementScale=e.displacementScale),void 0!==e.displacementBias&&(s.displacementBias=e.displacementBias),void 0!==e.roughnessMap&&(s.roughnessMap=i(e.roughnessMap)),void 0!==e.metalnessMap&&(s.metalnessMap=i(e.metalnessMap)),void 0!==e.emissiveMap&&(s.emissiveMap=i(e.emissiveMap)),void 0!==e.emissiveIntensity&&(s.emissiveIntensity=e.emissiveIntensity),void 0!==e.specularMap&&(s.specularMap=i(e.specularMap)),void 0!==e.specularIntensityMap&&(s.specularIntensityMap=i(e.specularIntensityMap)),void 0!==e.specularColorMap&&(s.specularColorMap=i(e.specularColorMap)),void 0!==e.envMap&&(s.envMap=i(e.envMap)),void 0!==e.envMapIntensity&&(s.envMapIntensity=e.envMapIntensity),void 0!==e.reflectivity&&(s.reflectivity=e.reflectivity),void 0!==e.refractionRatio&&(s.refractionRatio=e.refractionRatio),void 0!==e.lightMap&&(s.lightMap=i(e.lightMap)),void 0!==e.lightMapIntensity&&(s.lightMapIntensity=e.lightMapIntensity),void 0!==e.aoMap&&(s.aoMap=i(e.aoMap)),void 0!==e.aoMapIntensity&&(s.aoMapIntensity=e.aoMapIntensity),void 0!==e.gradientMap&&(s.gradientMap=i(e.gradientMap)),void 0!==e.clearcoatMap&&(s.clearcoatMap=i(e.clearcoatMap)),void 0!==e.clearcoatRoughnessMap&&(s.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),void 0!==e.clearcoatNormalMap&&(s.clearcoatNormalMap=i(e.clearcoatNormalMap)),void 0!==e.clearcoatNormalScale&&(s.clearcoatNormalScale=(new n).fromArray(e.clearcoatNormalScale)),void 0!==e.iridescenceMap&&(s.iridescenceMap=i(e.iridescenceMap)),void 0!==e.iridescenceThicknessMap&&(s.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),void 0!==e.transmissionMap&&(s.transmissionMap=i(e.transmissionMap)),void 0!==e.thicknessMap&&(s.thicknessMap=i(e.thicknessMap)),void 0!==e.anisotropyMap&&(s.anisotropyMap=i(e.anisotropyMap)),void 0!==e.sheenColorMap&&(s.sheenColorMap=i(e.sheenColorMap)),void 0!==e.sheenRoughnessMap&&(s.sheenRoughnessMap=i(e.sheenRoughnessMap)),s}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){return new{ShadowMaterial:hl,SpriteMaterial:xa,RawShaderMaterial:ul,ShaderMaterial:le,PointsMaterial:Li,MeshPhysicalMaterial:ll,MeshStandardMaterial:Io,MeshPhongMaterial:Qc,MeshToonMaterial:Gc,MeshNormalMaterial:Yc,MeshLambertMaterial:qc,MeshDepthMaterial:Ki,MeshDistanceMaterial:Ta,MeshBasicMaterial:Me,MeshMatcapMaterial:Kc,LineDashedMaterial:Uc,LineBasicMaterial:L,Material:z}[e]}}class wa{static decodeText(e){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return-1===t?"./":e.slice(0,t+1)}static resolveURL(e,t){return"string"!=typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Xr extends l{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Gr extends B{constructor(e){super(e)}load(e,t,n,s){const o=this,i=new Ce(o.manager);i.setPath(o.path),i.setRequestHeader(o.requestHeader),i.setWithCredentials(o.withCredentials),i.load(e,function(n){try{t(o.parse(JSON.parse(n)))}catch(t){s?s(t):console.error(t),o.manager.itemError(e)}},n,s)}parse(e){const o={},i={};function d(e,t){if(void 0!==o[t])return o[t];const n=e.interleavedBuffers[t],a=function(e,t){if(void 0!==i[t])return i[t];const s=e.arrayBuffers,o=s[t],n=new Uint32Array(o).buffer;return i[t]=n,n}(e,n.buffer),r=jt(n.type,a),s=new uo(r,n.stride);return s.uuid=n.uuid,o[t]=s,s}const n=e.isInstancedBufferGeometry?new Xr:new l,a=e.data.index;if(void 0!==a){const e=jt(a.type,a.array);n.setIndex(new f(e,1))}const u=e.data.attributes;for(const o in u){const t=u[o];let s;if(t.isInterleavedBufferAttribute){const n=d(e.data,t.data);s=new $t(n,t.itemSize,t.offset,t.normalized)}else{const e=jt(t.type,t.array);s=new(t.isInstancedBufferAttribute?bt:f)(e,t.itemSize,t.normalized)}void 0!==t.name&&(s.name=t.name),void 0!==t.usage&&s.setUsage(t.usage),n.setAttribute(o,s)}const r=e.data.morphAttributes;if(r)for(const t in r){const s=r[t],o=[];for(let i=0,a=s.length;i<a;i++){const t=s[i];let n;if(t.isInterleavedBufferAttribute){const s=d(e.data,t.data);n=new $t(s,t.itemSize,t.offset,t.normalized)}else{const e=jt(t.type,t.array);n=new f(e,t.itemSize,t.normalized)}void 0!==t.name&&(n.name=t.name),o.push(n)}n.morphAttributes[t]=o}e.data.morphTargetsRelative&&(n.morphTargetsRelative=!0);const c=e.data.groups||e.data.drawcalls||e.data.offsets;if(void 0!==c)for(let e=0,s=c.length;e!==s;++e){const t=c[e];n.addGroup(t.start,t.count,t.materialIndex)}const s=e.data.boundingSphere;if(void 0!==s){const e=new t;void 0!==s.center&&e.fromArray(s.center),n.boundingSphere=new F(e,s.radius)}return e.name&&(n.name=e.name),e.userData&&(n.userData=e.userData),n}}const uu={UVMapping:Wn,CubeReflectionMapping:we,CubeRefractionMapping:Fe,EquirectangularReflectionMapping:Zt,EquirectangularRefractionMapping:Tn,CubeUVReflectionMapping:_t},qr={RepeatWrapping:An,ClampToEdgeWrapping:U,MirroredRepeatWrapping:kn},Ur={NearestFilter:C,NearestMipmapNearestFilter:ls,NearestMipmapLinearFilter:bn,LinearFilter:_,LinearMipmapNearestFilter:vi,LinearMipmapLinearFilter:Xe};let Fs;class pa{static getContext(){return void 0===Fs&&(Fs=new(window.AudioContext||window.webkitAudioContext)),Fs}static setContext(e){Fs=e}}const Wr=new a,$r=new a,qe=new a;class Vr{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ir(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ir();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ir(){return("undefined"==typeof performance?Date:performance).now()}const Ke=new t,Rr=new $,Ou=new t,Ue=new t;class Tr extends h{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(!0===this.isPlaying)return void console.warn("THREE.Audio: Audio is already playing.");if(!1===this.hasPlaybackControl)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(!1!==this.hasPlaybackControl)return this._progress=0,null!==this.source&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(!1!==this._connected){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),!0===this._connected?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(!1!==this.hasPlaybackControl)return this.playbackRate=e,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(!1!==this.hasPlaybackControl)return this.loop=e,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const ot=new t,wr=new $,Au=new t,it=new t;class br{constructor(e,t,n){let s,o,i;switch(this.binding=e,this.valueSize=n,t){case"quaternion":s=this._slerp,o=this._slerpAdditive,i=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":s=this._select,o=this._select,i=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:s=this._lerp,o=this._lerpAdditive,i=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=o,this._setIdentity=i,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const o=this.buffer,s=this.valueSize,i=e*s+s;let n=this.cumulativeWeight;if(0===n){for(let e=0;e!==s;++e)o[i+e]=o[e];n=t}else{n+=t;const e=t/n;this._mixBufferRegion(o,i,0,e,s)}this.cumulativeWeight=n}accumulateAdditive(e){const n=this.buffer,t=this.valueSize,s=t*this._addIndex;0===this.cumulativeWeightAdditive&&this._setIdentity(),this._mixBufferRegionAdditive(n,s,0,e,t),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,o=this.cumulativeWeight,i=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const e=t*this._origIndex;this._mixBufferRegion(n,s,e,1-o,t)}i>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let e=t,o=t+t;e!==o;++e)if(n[e]!==n[e+t]){a.setValue(n,s);break}}saveOriginalState(){const s=this.binding,e=this.buffer,t=this.valueSize,n=t*this._origIndex;s.getValue(e,n);for(let s=t,o=n;s!==o;++s)e[s]=e[n+s%t];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,o){if(s>=.5)for(let s=0;s!==o;++s)e[t+s]=e[n+s]}_slerp(e,t,n,s){$.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,o){const i=this._workIndex*o;$.multiplyQuaternionsFlat(e,i,e,t,e,n),$.slerpFlat(e,t,e,t,e,i,s)}_lerp(e,t,n,s,o){const i=1-s;for(let a=0;a!==o;++a){const r=t+a;e[r]=e[r]*i+e[n+a]*s}}_lerpAdditive(e,t,n,s,o){for(let i=0;i!==o;++i){const a=t+i;e[a]=e[a]+e[n+i]*s}}}const ca="\\[\\]\\.:\\/",Tu=new RegExp("["+ca+"]","g"),ea="[^"+ca+"]",Du="[^"+ca.replace("\\.","")+"]",Nu=new RegExp("^"+/((?:WC+[/:])*)/.source.replace("WC",ea)+/(WCOD+)?/.source.replace("WCOD",Du)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ea)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ea)+"$"),Lu=["material","materials","bones","map"];class u{constructor(e,t,n){this.path=t,this.parsedPath=n||u.parseTrackName(t),this.node=u.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new u.Composite(e,t,n):new u(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tu,"")}static parseTrackName(e){const n=Nu.exec(e);if(null===n)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const t={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=t.nodeName&&t.nodeName.lastIndexOf(".");if(void 0!==s&&-1!==s){const e=t.nodeName.substring(s+1);-1!==Lu.indexOf(e)&&(t.nodeName=t.nodeName.substring(0,s),t.objectName=e)}if(null===t.propertyName||0===t.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return t}static findNode(e,t){if(void 0===t||""===t||"."===t||-1===t||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(void 0!==n)return n}if(e.children){const n=function(e){for(let o=0;o<e.length;o++){const s=e[o];if(s.name===t||s.uuid===t)return s;const i=n(s.children);if(i)return i}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,a=n.propertyName;let s=n.propertyIndex;if(e||(e=u.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let t=n.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let n=0;n<e.length;n++)if(e[n].name===t){t=n;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(void 0===e[i])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(void 0!==t){if(void 0===e[t])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[t]}}const t=e[a];if(void 0===t){const t=n.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+t+"."+a+" but it wasn't found.",e)}let r=this.Versioning.None;this.targetObject=e,void 0!==e.needsUpdate?r=this.Versioning.NeedsUpdate:void 0!==e.matrixWorldNeedsUpdate&&(r=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(void 0!==s){if("morphTargetInfluences"===a){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==e.morphTargetDictionary[s]&&(s=e.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=t,this.propertyIndex=s}else void 0!==t.fromArray&&void 0!==t.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=t):Array.isArray(t)?(o=this.BindingType.EntireArray,this.resolvedProperty=t):this.propertyName=a;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}u.Composite=class{constructor(e,t,n){const s=n||u.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const s=this._targetGroup.nCachedObjects_,n=this._bindings[s];void 0!==n&&n.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},u.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},u.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},u.prototype.GetterByBindingType=[u.prototype._getValue_direct,u.prototype._getValue_array,u.prototype._getValue_arrayElement,u.prototype._getValue_toArray],u.prototype.SetterByBindingTypeAndVersioning=[[u.prototype._setValue_direct,u.prototype._setValue_direct_setNeedsUpdate,u.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[u.prototype._setValue_array,u.prototype._setValue_array_setNeedsUpdate,u.prototype._setValue_array_setMatrixWorldNeedsUpdate],[u.prototype._setValue_arrayElement,u.prototype._setValue_arrayElement_setNeedsUpdate,u.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[u.prototype._setValue_fromArray,u.prototype._setValue_fromArray_setNeedsUpdate,u.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class mr{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const i=t.tracks,o=i.length,a=new Array(o),r={endingStart:nt,endingEnd:nt};for(let e=0;e!==o;++e){const t=i[e].createInterpolant(null);a[e]=t,t.settings=r}this._interpolantSettings=r,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const n=this._clip.duration,s=e._clip.duration,o=s/n,i=n/s;e.warp(1,o,t),this.warp(i,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return null!==e&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const o=this._mixer,i=o.time,a=this.timeScale;let s=this._timeScaleInterpolant;null===s&&(s=o._lendControlInterpolant(),this._timeScaleInterpolant=s);const r=s.parameterPositions,c=s.sampleValues;return r[0]=i,r[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return null!==e&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled)return void this._updateWeight(e);const i=this._startTime;if(null!==i){const s=(e-i)*n;s<0||0===n?t=0:(this._startTime=null,t=n*s)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const e=this._interpolants,t=this._propertyBindings;if(this.blendMode===mo)for(let n=0,s=e.length;n!==s;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);else for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(s,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(null!==n){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),0===s&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;null!==n&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),0===t?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const s=this._clip.duration,i=this.loop;let t=this.time+e,n=this._loopCount;const o=2202===i;if(0===e)return-1===n?t:o&&1==(1&n)?s-t:t;if(2200===i){-1===n&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(t>=s)t=s;else{if(!(t<0)){this.time=t;break t}t=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=t,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(-1===n&&(e>=0?(n=0,this._setEndings(!0,0===this.repetitions,o)):this._setEndings(0===this.repetitions,!0,o)),t>=s||t<0){const i=Math.floor(t/s);t-=s*i,n+=Math.abs(i);const a=this.repetitions-n;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,t=e>0?s:0,this.time=t,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(1===a){const t=e<0;this._setEndings(t,!t,o)}else this._setEndings(!1,!1,o);this._loopCount=n,this.time=t,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:i})}}else this.time=t;if(o&&1==(1&n))return s-t}return t}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=tt,s.endingEnd=tt):(s.endingStart=e?this.zeroSlopeAtStart?tt:nt:wn,s.endingEnd=t?this.zeroSlopeAtEnd?tt:nt:wn)}_scheduleFading(e,t,n){const o=this._mixer,i=o.time;let s=this._weightInterpolant;null===s&&(s=o._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,r=s.sampleValues;return a[0]=i,r[0]=t,a[1]=i+e,r[1]=n,this}}const Hu=new Float32Array(1);class hr{constructor(e){this.value=e}clone(){return new hr(void 0===this.value.clone?this.value:this.value.clone())}}let Bu=0;function ur(e,t){return e.distance-t.distance}function qi(e,t,n,s){if(e.layers.test(t.layers)&&e.raycast(t,n),!0===s){const s=e.children;for(let e=0,o=s.length;e<o;e++)qi(s[e],t,n,!0)}}const rr=new n,ir=new t,ds=new t,tr=new t,Re=new t,Qn=new a,ta=new a;function Qa(e){const t=[];!0===e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,Qa(e.children[n]));return t}const Zu=new t,Xa=new o,qa=new o,Ka=new t,Vn=new t,Wa=new t,Ms=new t,j=new io;function y(e,t,n,s,o,i,a){Ms.set(o,i,a).unproject(s);const r=t[e];if(void 0!==r){const e=n.getAttribute("position");for(let t=0,n=r.length;t<n;t++)e.setXYZ(r[t],Ms.x,Ms.y,Ms.z)}}const zs=new P,Pa=new t;let Ds,Ea;"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Es}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Es),e.ACESFilmicToneMapping=Ua,e.AddEquation=Te,e.AddOperation=Ha,e.AdditiveAnimationBlendMode=mo,e.AdditiveBlending=2,e.AgXToneMapping=Ja,e.AlphaFormat=1021,e.AlwaysCompare=519,e.AlwaysDepth=1,e.AlwaysStencilFunc=519,e.AmbientLight=ic,e.AnimationAction=mr,e.AnimationClip=Qt,e.AnimationLoader=class extends B{constructor(e){super(e)}load(e,t,n,s){const i=this,o=new Ce(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(n){try{t(i.parse(JSON.parse(n)))}catch(t){s?s(t):console.error(t),i.manager.itemError(e)}},n,s)}parse(e){const t=[];for(let n=0;n<e.length;n++){const s=Qt.parse(e[n]);t.push(s)}return t}},e.AnimationMixer=class extends ve{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,a=e._clip.tracks,c=a.length,o=e._propertyBindings,l=e._interpolants,n=i.uuid,r=this._bindingsByRootAndName;let s=r[n];void 0===s&&(s={},r[n]=s);for(let r=0;r!==c;++r){const h=a[r],d=h.name;let e=s[d];if(void 0!==e)++e.referenceCount,o[r]=e;else{if(e=o[r],void 0!==e){null===e._cacheIndex&&(++e.referenceCount,this._addInactiveBinding(e,n,d));continue}const s=t&&t._propertyBindings[r].binding.parsedPath;e=new br(u.create(i,d,s),h.ValueTypeName,h.getValueSize()),++e.referenceCount,this._addInactiveBinding(e,n,d),o[r]=e}l[r].resultBuffer=e.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(null===e._cacheIndex){const s=(e._localRoot||this._root).uuid,t=e._clip.uuid,n=this._actionsByClip[t];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,t,s)}const t=e._propertyBindings;for(let e=0,s=t.length;e!==s;++e){const n=t[e];0==n.useCount++&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let e=0,s=t.length;e!==s;++e){const n=t[e];0==--n.useCount&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return null!==t&&t<this._nActiveActions}_addInactiveAction(e,t,n){const o=this._actions,i=this._actionsByClip;let s=i[t];if(void 0===s)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=s;else{const t=s.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=o.length,o.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const n=this._actions,s=n[n.length-1],o=e._cacheIndex;s._cacheIndex=o,n[o]=s,n.pop(),e._cacheIndex=null;const i=e._clip.uuid,a=this._actionsByClip,r=a[i],t=r.knownActions,c=t[t.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,t[l]=c,t.pop(),e._byClipCacheIndex=null,delete r.actionByRoot[(e._localRoot||this._root).uuid],0===t.length&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let e=0,s=t.length;e!==s;++e){const n=t[e];0==--n.referenceCount&&this._removeInactiveBinding(n)}}_lendAction(e){const t=this._actions,s=e._cacheIndex,n=this._nActiveActions++,o=t[n];e._cacheIndex=n,t[n]=e,o._cacheIndex=s,t[s]=o}_takeBackAction(e){const t=this._actions,s=e._cacheIndex,n=--this._nActiveActions,o=t[n];e._cacheIndex=n,t[n]=e,o._cacheIndex=s,t[s]=o}_addInactiveBinding(e,t,n){const o=this._bindingsByRootAndName,i=this._bindings;let s=o[t];void 0===s&&(s={},o[t]=s),s[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,c=n.path,o=this._bindingsByRootAndName,i=o[s],a=t[t.length-1],r=e._cacheIndex;a._cacheIndex=r,t[r]=a,t.pop(),delete i[c],0===Object.keys(i).length&&delete o[s]}_lendBinding(e){const t=this._bindings,s=e._cacheIndex,n=this._nActiveBindings++,o=t[n];e._cacheIndex=n,t[n]=e,o._cacheIndex=s,t[s]=o}_takeBackBinding(e){const t=this._bindings,s=e._cacheIndex,n=--this._nActiveBindings,o=t[n];e._cacheIndex=n,t[n]=e,o._cacheIndex=s,t[s]=o}_lendControlInterpolant(){const n=this._controlInterpolants,t=this._nActiveControlInterpolants++;let e=n[t];return void 0===e&&(e=new _i(new Float32Array(2),new Float32Array(2),1,Hu),e.__cacheIndex=t,n[t]=e),e}_takeBackControlInterpolant(e){const t=this._controlInterpolants,s=e.__cacheIndex,n=--this._nActiveControlInterpolants,o=t[n];e.__cacheIndex=n,t[n]=e,o.__cacheIndex=s,t[s]=o}clipAction(e,t,n){const r=t||this._root,c=r.uuid;let s="string"==typeof e?Qt.findByName(r,e):e;const l=null!==s?s.uuid:e,o=this._actionsByClip[l];let i=null;if(void 0===n&&(n=null!==s?s.blendMode:or),void 0!==o){const e=o.actionByRoot[c];if(void 0!==e&&e.blendMode===n)return e;i=o.knownActions[0],null===s&&(s=i._clip)}if(null===s)return null;const a=new mr(this,s,t,n);return this._bindAction(a,i),this._addInactiveAction(a,l,c),a}existingAction(e,t){const n=t||this._root,i=n.uuid,s="string"==typeof e?Qt.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return void 0!==o&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;const n=this._actions,s=this._nActiveActions,o=this.time+=e,i=Math.sign(e),t=this._accuIndex^=1;for(let a=0;a!==s;++a)n[a]._update(o,e,i,t);const a=this._bindings,r=this._nActiveBindings;for(let e=0;e!==r;++e)a[e].apply(t);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,o=s[n];if(void 0!==o){const e=o.knownActions;for(let s=0,a=e.length;s!==a;++s){const n=e[s];this._deactivateAction(n);const o=n._cacheIndex,i=t[t.length-1];n._cacheIndex=null,n._byClipCacheIndex=null,i._cacheIndex=o,t[o]=i,t.pop(),this._removeInactiveBindingsForAction(n)}delete s[n]}}uncacheRoot(e){const n=e.uuid,s=this._actionsByClip;for(const t in s){const e=s[t].actionByRoot[n];void 0!==e&&(this._deactivateAction(e),this._removeInactiveAction(e))}const t=this._bindingsByRootAndName[n];if(void 0!==t)for(const n in t){const e=t[n];e.restoreOriginalState(),this._removeInactiveBinding(e)}}uncacheAction(e,t){const n=this.existingAction(e,t);null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))}},e.AnimationObjectGroup=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=q(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let e=0,n=arguments.length;e!==n;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,o=this._paths,i=this._parsedPaths,n=this._bindings,a=n.length;let r,c=e.length,s=this.nCachedObjects_;for(let h=0,f=arguments.length;h!==f;++h){const d=arguments[h],m=d.uuid;let l=t[m];if(void 0===l){l=c++,t[m]=l,e.push(d);for(let e=0,t=a;e!==t;++e)n[e].push(new u(d,o[e],i[e]))}else if(l<s){r=e[l];const c=--s,h=e[c];t[h.uuid]=l,e[l]=h,t[m]=c,e[c]=d;for(let e=0,r=a;e!==r;++e){const t=n[e],h=t[c];let s=t[l];t[l]=h,void 0===s&&(s=new u(d,o[e],i[e])),t[c]=s}}else e[l]!==r&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=s}remove(){const e=this._objects,t=this._indicesByUUID,s=this._bindings,o=s.length;let n=this.nCachedObjects_;for(let a=0,l=arguments.length;a!==l;++a){const r=arguments[a],c=r.uuid,i=t[c];if(void 0!==i&&i>=n){const a=n++,l=e[a];t[l.uuid]=i,e[i]=l,t[c]=a,e[a]=r;for(let t=0,n=o;t!==n;++t){const e=s[t],r=e[a],c=e[i];e[i]=r,e[a]=c}}}this.nCachedObjects_=n}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,o=n.length;let s=this.nCachedObjects_,i=e.length;for(let r=0,l=arguments.length;r!==l;++r){const c=arguments[r].uuid,a=t[c];if(void 0!==a)if(delete t[c],a<s){const r=--s,c=e[r],l=--i,d=e[l];t[c.uuid]=a,e[a]=c,t[d.uuid]=r,e[r]=d,e.pop();for(let t=0,s=o;t!==s;++t){const e=n[t],i=e[r],c=e[l];e[a]=i,e[r]=c,e.pop()}}else{const s=--i,r=e[s];s>0&&(t[r.uuid]=a),e[a]=r,e.pop();for(let e=0,i=o;e!==i;++e){const t=n[e];t[a]=t[s],t.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const a=this._bindingsIndicesByPath;let n=a[e];const s=this._bindings;if(void 0!==n)return s[n];const r=this._paths,c=this._parsedPaths,o=this._objects,l=o.length,d=this.nCachedObjects_,i=new Array(l);n=s.length,a[e]=n,r.push(e),c.push(t),s.push(i);for(let n=d,s=o.length;n!==s;++n){const a=o[n];i[n]=new u(a,e,t)}return i}unsubscribe_(e){const n=this._bindingsIndicesByPath,t=n[e];if(void 0!==t){const i=this._paths,a=this._parsedPaths,s=this._bindings,o=s.length-1,r=s[o];n[e[o]]=t,s[t]=r,s.pop(),a[t]=a[o],a.pop(),i[t]=i[o],i.pop()}}},e.AnimationUtils=jd,e.ArcCurve=Rc,e.ArrayCamera=Ga,e.ArrowHelper=class extends h{constructor(e=new t(0,0,1),n=new t(0,0,0),s=1,o=16776960,a=.2*s,r=.2*a){super(),this.type="ArrowHelper",void 0===Ds&&(Ds=new l,Ds.setAttribute("position",new i([0,0,0,0,1,0],3)),Ea=new un(0,.5,1,5,1),Ea.translate(0,-.5,0)),this.position.copy(n),this.line=new ze(Ds,new L({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new k(Ea,new Me({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(s,a,r)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Pa.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Pa,t)}}setLength(e,t=.2*e,n=.2*t){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},e.AttachedBindMode=Xi,e.Audio=Tr,e.AudioAnalyser=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},e.AudioContext=pa,e.AudioListener=class extends h{constructor(){super(),this.type="AudioListener",this.context=pa.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Vr}getInput(){return this.gain}removeFilter(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ke,Rr,Ou),Ue.set(0,0,-1).applyQuaternion(Rr),t.positionX){const e=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ke.x,e),t.positionY.linearRampToValueAtTime(Ke.y,e),t.positionZ.linearRampToValueAtTime(Ke.z,e),t.forwardX.linearRampToValueAtTime(Ue.x,e),t.forwardY.linearRampToValueAtTime(Ue.y,e),t.forwardZ.linearRampToValueAtTime(Ue.z,e),t.upX.linearRampToValueAtTime(n.x,e),t.upY.linearRampToValueAtTime(n.y,e),t.upZ.linearRampToValueAtTime(n.z,e)}else t.setPosition(Ke.x,Ke.y,Ke.z),t.setOrientation(Ue.x,Ue.y,Ue.z,n.x,n.y,n.z)}},e.AudioLoader=class extends B{constructor(e){super(e)}load(e,t,n,s){const a=this,o=new Ce(this.manager);function i(t){s?s(t):console.error(t),a.manager.itemError(e)}o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(e){try{const n=e.slice(0);pa.getContext().decodeAudioData(n,function(e){t(e)}).catch(i)}catch(e){i(e)}},n,s)}},e.AxesHelper=class extends re{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],t=new l;t.setAttribute("position",new i(n,3)),t.setAttribute("color",new i([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(t,new L({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(e,t,n){const s=new o,i=this.geometry.attributes.color.array;return s.set(e),s.toArray(i,0),s.toArray(i,3),s.set(t),s.toArray(i,6),s.toArray(i,9),s.set(n),s.toArray(i,12),s.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},e.BackSide=R,e.BasicDepthPacking=3200,e.BasicShadowMap=0,e.BatchedMesh=pc,e.Bone=oa,e.BooleanKeyframeTrack=ct,e.Box2=class{constructor(e=new n(1/0,1/0),t=new n(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return(new this.constructor).copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},e.Box3=P,e.Box3Helper=class extends re{constructor(e,t=16776960){const s=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new l;n.setIndex(new f(s,1)),n.setAttribute("position",new i([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(n,new L({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},e.BoxGeometry=wt,e.BoxHelper=class extends re{constructor(e,t=16776960){const s=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),o=new Float32Array(24),n=new l;n.setIndex(new f(s,1)),n.setAttribute("position",new f(o,3)),super(n,new L({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(void 0!==e&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),void 0!==this.object&&zs.setFromObject(this.object),zs.isEmpty())return;const n=zs.min,s=zs.max,o=this.geometry.attributes.position,t=o.array;t[0]=s.x,t[1]=s.y,t[2]=s.z,t[3]=n.x,t[4]=s.y,t[5]=s.z,t[6]=n.x,t[7]=n.y,t[8]=s.z,t[9]=s.x,t[10]=n.y,t[11]=s.z,t[12]=s.x,t[13]=s.y,t[14]=n.z,t[15]=n.x,t[16]=s.y,t[17]=n.z,t[18]=n.x,t[19]=n.y,t[20]=n.z,t[21]=s.x,t[22]=n.y,t[23]=n.z,o.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},e.BufferAttribute=f,e.BufferGeometry=l,e.BufferGeometryLoader=Gr,e.ByteType=1010,e.Cache=be,e.Camera=io,e.CameraHelper=class extends re{constructor(e){const s=new l,d=new L({color:16777215,vertexColors:!0,toneMapped:!1}),a=[],r=[],n={};function t(e,t){c(e),c(t)}function c(e){a.push(0,0,0),r.push(0,0,0),void 0===n[e]&&(n[e]=[]),n[e].push(a.length/3-1)}t("n1","n2"),t("n2","n4"),t("n4","n3"),t("n3","n1"),t("f1","f2"),t("f2","f4"),t("f4","f3"),t("f3","f1"),t("n1","f1"),t("n2","f2"),t("n3","f3"),t("n4","f4"),t("p","n1"),t("p","n2"),t("p","n3"),t("p","n4"),t("u1","u2"),t("u2","u3"),t("u3","u1"),t("c","t"),t("p","c"),t("cn1","cn2"),t("cn3","cn4"),t("cf1","cf2"),t("cf3","cf4"),s.setAttribute("position",new i(a,3)),s.setAttribute("color",new i(r,3)),super(s,d),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=n,this.update();const u=new o(16755200),h=new o(16711680),m=new o(43775),f=new o(16777215),p=new o(3355443);this.setColors(u,h,m,f,p)}setColors(e,t,n,s,o){const i=this.geometry.getAttribute("color");i.setXYZ(0,e.r,e.g,e.b),i.setXYZ(1,e.r,e.g,e.b),i.setXYZ(2,e.r,e.g,e.b),i.setXYZ(3,e.r,e.g,e.b),i.setXYZ(4,e.r,e.g,e.b),i.setXYZ(5,e.r,e.g,e.b),i.setXYZ(6,e.r,e.g,e.b),i.setXYZ(7,e.r,e.g,e.b),i.setXYZ(8,e.r,e.g,e.b),i.setXYZ(9,e.r,e.g,e.b),i.setXYZ(10,e.r,e.g,e.b),i.setXYZ(11,e.r,e.g,e.b),i.setXYZ(12,e.r,e.g,e.b),i.setXYZ(13,e.r,e.g,e.b),i.setXYZ(14,e.r,e.g,e.b),i.setXYZ(15,e.r,e.g,e.b),i.setXYZ(16,e.r,e.g,e.b),i.setXYZ(17,e.r,e.g,e.b),i.setXYZ(18,e.r,e.g,e.b),i.setXYZ(19,e.r,e.g,e.b),i.setXYZ(20,e.r,e.g,e.b),i.setXYZ(21,e.r,e.g,e.b),i.setXYZ(22,e.r,e.g,e.b),i.setXYZ(23,e.r,e.g,e.b),i.setXYZ(24,t.r,t.g,t.b),i.setXYZ(25,t.r,t.g,t.b),i.setXYZ(26,t.r,t.g,t.b),i.setXYZ(27,t.r,t.g,t.b),i.setXYZ(28,t.r,t.g,t.b),i.setXYZ(29,t.r,t.g,t.b),i.setXYZ(30,t.r,t.g,t.b),i.setXYZ(31,t.r,t.g,t.b),i.setXYZ(32,n.r,n.g,n.b),i.setXYZ(33,n.r,n.g,n.b),i.setXYZ(34,n.r,n.g,n.b),i.setXYZ(35,n.r,n.g,n.b),i.setXYZ(36,n.r,n.g,n.b),i.setXYZ(37,n.r,n.g,n.b),i.setXYZ(38,s.r,s.g,s.b),i.setXYZ(39,s.r,s.g,s.b),i.setXYZ(40,o.r,o.g,o.b),i.setXYZ(41,o.r,o.g,o.b),i.setXYZ(42,o.r,o.g,o.b),i.setXYZ(43,o.r,o.g,o.b),i.setXYZ(44,o.r,o.g,o.b),i.setXYZ(45,o.r,o.g,o.b),i.setXYZ(46,o.r,o.g,o.b),i.setXYZ(47,o.r,o.g,o.b),i.setXYZ(48,o.r,o.g,o.b),i.setXYZ(49,o.r,o.g,o.b),i.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap;j.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),y("c",t,e,j,0,0,-1),y("t",t,e,j,0,0,1),y("n1",t,e,j,-1,-1,-1),y("n2",t,e,j,1,-1,-1),y("n3",t,e,j,-1,1,-1),y("n4",t,e,j,1,1,-1),y("f1",t,e,j,-1,-1,1),y("f2",t,e,j,1,-1,1),y("f3",t,e,j,-1,1,1),y("f4",t,e,j,1,1,1),y("u1",t,e,j,.7,1.1,-1),y("u2",t,e,j,-.7,1.1,-1),y("u3",t,e,j,0,2,-1),y("cf1",t,e,j,-1,0,1),y("cf2",t,e,j,1,0,1),y("cf3",t,e,j,0,-1,1),y("cf4",t,e,j,0,1,1),y("cn1",t,e,j,-1,0,-1),y("cn2",t,e,j,1,0,-1),y("cn3",t,e,j,0,-1,-1),y("cn4",t,e,j,0,1,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},e.CanvasTexture=class extends w{constructor(e,t,n,s,o,i,a,r,c){super(e,t,n,s,o,i,a,r,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},e.CapsuleGeometry=li,e.CatmullRomCurve3=$c,e.CineonToneMapping=$a,e.CircleGeometry=ci,e.ClampToEdgeWrapping=U,e.Clock=Vr,e.Color=o,e.ColorKeyframeTrack=Di,e.ColorManagement=m,e.CompressedArrayTexture=class extends vs{constructor(e,t,n,s,o,i){super(e,t,n,o,i),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=U}},e.CompressedCubeTexture=class extends vs{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,we),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},e.CompressedTexture=vs,e.CompressedTextureLoader=class extends B{constructor(e){super(e)}load(e,t,n,s){const r=this,i=[],o=new vs,a=new Ce(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(l){a.load(e[l],function(e){const n=r.parse(e,!0);i[l]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},c+=1,6===c&&(1===n.mipmapCount&&(o.minFilter=_),o.image=i,o.format=n.format,o.needsUpdate=!0,t&&t(o))},n,s)}if(Array.isArray(e))for(let t=0,n=e.length;t<n;++t)l(t);else a.load(e,function(e){const n=r.parse(e,!0);if(n.isCubemap){const e=n.mipmaps.length/n.mipmapCount;for(let t=0;t<e;t++){i[t]={mipmaps:[]};for(let e=0;e<n.mipmapCount;e++)i[t].mipmaps.push(n.mipmaps[t*n.mipmapCount+e]),i[t].format=n.format,i[t].width=n.width,i[t].height=n.height}o.image=i}else o.image.width=n.width,o.image.height=n.height,o.mipmaps=n.mipmaps;1===n.mipmapCount&&(o.minFilter=_),o.format=n.format,o.needsUpdate=!0,t&&t(o)},n,s);return o}},e.ConeGeometry=ai,e.ConstantAlphaFactor=213,e.ConstantColorFactor=211,e.CubeCamera=jl,e.CubeReflectionMapping=we,e.CubeRefractionMapping=Fe,e.CubeTexture=en,e.CubeTextureLoader=class extends B{constructor(e){super(e)}load(e,t,n,s){const o=new en;o.colorSpace=A;const i=new zn(this.manager);i.setCrossOrigin(this.crossOrigin),i.setPath(this.path);let a=0;function r(n){i.load(e[n],function(e){o.images[n]=e,a++,6===a&&(o.needsUpdate=!0,t&&t(o))},void 0,s)}for(let t=0;t<e.length;++t)r(t);return o}},e.CubeUVReflectionMapping=_t,e.CubicBezierCurve=fo,e.CubicBezierCurve3=za,e.CubicInterpolant=Nc,e.CullFaceBack=1,e.CullFaceFront=2,e.CullFaceFrontBack=3,e.CullFaceNone=0,e.Curve=ee,e.CurvePath=tl,e.CustomBlending=5,e.CustomToneMapping=Za,e.CylinderGeometry=un,e.Cylindrical=class{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return(new this.constructor).copy(this)}},e.Data3DTexture=Oa,e.DataArrayTexture=eo,e.DataTexture=Je,e.DataTextureLoader=class extends B{constructor(e){super(e)}load(e,t,n,s){const a=this,o=new Je,i=new Ce(this.manager);return i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setPath(this.path),i.setWithCredentials(a.withCredentials),i.load(e,function(e){let n;try{n=a.parse(e)}catch(e){if(void 0===s)return void console.error(e);s(e)}void 0!==n.image?o.image=n.image:void 0!==n.data&&(o.image.width=n.width,o.image.height=n.height,o.image.data=n.data),o.wrapS=void 0!==n.wrapS?n.wrapS:U,o.wrapT=void 0!==n.wrapT?n.wrapT:U,o.magFilter=void 0!==n.magFilter?n.magFilter:_,o.minFilter=void 0!==n.minFilter?n.minFilter:_,o.anisotropy=void 0!==n.anisotropy?n.anisotropy:1,void 0!==n.colorSpace?o.colorSpace=n.colorSpace:void 0!==n.encoding&&(o.encoding=n.encoding),void 0!==n.flipY&&(o.flipY=n.flipY),void 0!==n.format&&(o.format=n.format),void 0!==n.type&&(o.type=n.type),void 0!==n.mipmaps&&(o.mipmaps=n.mipmaps,o.minFilter=Xe),1===n.mipmapCount&&(o.minFilter=_),void 0!==n.generateMipmaps&&(o.generateMipmaps=n.generateMipmaps),o.needsUpdate=!0,t&&t(o,n)},n,s),o}},e.DataUtils=xd,e.DecrementStencilOp=7683,e.DecrementWrapStencilOp=34056,e.DefaultLoadingManager=_c,e.DepthFormat=De,e.DepthStencilFormat=rt,e.DepthTexture=oi,e.DetachedBindMode=er,e.DirectionalLight=rc,e.DirectionalLightHelper=class extends h{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",void 0===t&&(t=1);let s=new l;s.setAttribute("position",new i([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const o=new L({fog:!1,toneMapped:!1});this.lightPlane=new ze(s,o),this.add(this.lightPlane),s=new l,s.setAttribute("position",new i([0,0,0,0,0,1],3)),this.targetLine=new ze(s,o),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.light.matrixWorld),Vn.setFromMatrixPosition(this.light.target.matrixWorld),Wa.subVectors(Vn,Ka),this.lightPlane.lookAt(Vn),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Vn),this.targetLine.scale.z=Wa.length()}},e.DiscreteInterpolant=Dc,e.DisplayP3ColorSpace=Jn,e.DodecahedronGeometry=si,e.DoubleSide=2,e.DstAlphaFactor=206,e.DstColorFactor=208,e.DynamicCopyUsage=35050,e.DynamicDrawUsage=35048,e.DynamicReadUsage=35049,e.EdgesGeometry=fl,e.EllipseCurve=ys,e.EqualCompare=514,e.EqualDepth=4,e.EqualStencilFunc=514,e.EquirectangularReflectionMapping=Zt,e.EquirectangularRefractionMapping=Tn,e.Euler=Xn,e.EventDispatcher=ve,e.ExtrudeGeometry=Ao,e.FileLoader=Ce,e.Float16BufferAttribute=class extends f{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=jn(this.array[e*this.itemSize]);return this.normalized&&(t=V(t,this.array)),t}setX(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize]=W(t),this}getY(e){let t=jn(this.array[e*this.itemSize+1]);return this.normalized&&(t=V(t,this.array)),t}setY(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize+1]=W(t),this}getZ(e){let t=jn(this.array[e*this.itemSize+2]);return this.normalized&&(t=V(t,this.array)),t}setZ(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize+2]=W(t),this}getW(e){let t=jn(this.array[e*this.itemSize+3]);return this.normalized&&(t=V(t,this.array)),t}setW(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize+3]=W(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=c(t,this.array),n=c(n,this.array)),this.array[e+0]=W(t),this.array[e+1]=W(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array)),this.array[e+0]=W(t),this.array[e+1]=W(n),this.array[e+2]=W(s),this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array),o=c(o,this.array)),this.array[e+0]=W(t),this.array[e+1]=W(n),this.array[e+2]=W(s),this.array[e+3]=W(o),this}},e.Float32BufferAttribute=i,e.Float64BufferAttribute=class extends f{constructor(e,t,n){super(new Float64Array(e),t,n)}},e.FloatType=Z,e.Fog=Aa,e.FogExp2=Sa,e.FramebufferTexture=class extends w{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=C,this.minFilter=C,this.generateMipmaps=!1,this.needsUpdate=!0}},e.FrontSide=pe,e.Frustum=Jt,e.GLBufferAttribute=class{constructor(e,t,n,s,o){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=o,this.version=0}set needsUpdate(e){!0===e&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},e.GLSL1="100",e.GLSL3=Ui,e.GreaterCompare=516,e.GreaterDepth=6,e.GreaterEqualCompare=518,e.GreaterEqualDepth=5,e.GreaterEqualStencilFunc=518,e.GreaterStencilFunc=516,e.GridHelper=class extends re{constructor(e=10,t=10,n=4473924,s=8947848){n=new o(n),s=new o(s);const u=t/2,h=e/t,a=e/2,c=[],r=[];for(let l=0,e=0,o=-a;l<=t;l++,o+=h){c.push(-a,0,o,a,0,o),c.push(o,0,-a,o,0,a);const i=l===u?n:s;i.toArray(r,e),e+=3,i.toArray(r,e),e+=3,i.toArray(r,e),e+=3,i.toArray(r,e),e+=3}const d=new l;d.setAttribute("position",new i(c,3)),d.setAttribute("color",new i(r,3)),super(d,new L({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},e.Group=Gt,e.HalfFloatType=Dt,e.HemisphereLight=fc,e.HemisphereLightHelper=class extends h{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new oo(t);s.rotateY(.5*Math.PI),this.material=new Me({wireframe:!0,fog:!1,toneMapped:!1}),void 0===this.color&&(this.material.vertexColors=!0);const o=s.getAttribute("position"),i=new Float32Array(3*o.count);s.setAttribute("color",new f(i,3)),this.add(new k(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Xa.copy(this.light.color),qa.copy(this.light.groundColor);for(let e=0,s=t.count;e<s;e++){const n=e<s/2?Xa:qa;t.setXYZ(e,n.r,n.g,n.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Zu.setFromMatrixPosition(this.light.matrixWorld).negate())}},e.IcosahedronGeometry=ko,e.ImageBitmapLoader=class extends B{constructor(e){super(e),this.isImageBitmapLoader=!0,"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,i=be.get(e);if(void 0!==i)return o.manager.itemStart(e),i.then?void i.then(n=>{t&&t(n),o.manager.itemEnd(e)}).catch(e=>{s&&s(e)}):(setTimeout(function(){t&&t(i),o.manager.itemEnd(e)},0),i);const a={};a.credentials="anonymous"===this.crossOrigin?"same-origin":"include",a.headers=this.requestHeader;const r=fetch(e,a).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(n){return be.add(e,n),t&&t(n),o.manager.itemEnd(e),n}).catch(function(t){s&&s(t),be.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});be.add(e,r),o.manager.itemStart(e)}},e.ImageLoader=zn,e.ImageUtils=ua,e.IncrementStencilOp=7682,e.IncrementWrapStencilOp=34055,e.InstancedBufferAttribute=bt,e.InstancedBufferGeometry=Xr,e.InstancedInterleavedBuffer=class extends uo{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},e.InstancedMesh=Zr,e.Int16BufferAttribute=class extends f{constructor(e,t,n){super(new Int16Array(e),t,n)}},e.Int32BufferAttribute=class extends f{constructor(e,t,n){super(new Int32Array(e),t,n)}},e.Int8BufferAttribute=class extends f{constructor(e,t,n){super(new Int8Array(e),t,n)}},e.IntType=pi,e.InterleavedBuffer=uo,e.InterleavedBufferAttribute=$t,e.Interpolant=ln,e.InterpolateDiscrete=yn,e.InterpolateLinear=_n,e.InterpolateSmooth=ms,e.InvertStencilOp=5386,e.KeepStencilOp=Ye,e.KeyframeTrack=ne,e.LOD=Ar,e.LatheGeometry=Ts,e.Layers=Gn,e.LessCompare=513,e.LessDepth=2,e.LessEqualCompare=515,e.LessEqualDepth=3,e.LessEqualStencilFunc=515,e.LessStencilFunc=513,e.Light=$e,e.LightProbe=ec,e.Line=ze,e.Line3=class{constructor(e=new t,n=new t){this.start=e,this.end=n}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ir.subVectors(e,this.start),ds.subVectors(this.end,this.start);const s=ds.dot(ds);let n=ds.dot(ir)/s;return t&&(n=b(n,0,1)),n}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return(new this.constructor).copy(this)}},e.LineBasicMaterial=L,e.LineCurve=yi,e.LineCurve3=Xc,e.LineDashedMaterial=Uc,e.LineLoop=Ec,e.LineSegments=re,e.LinearDisplayP3ColorSpace=Sn,e.LinearEncoding=Pi,e.LinearFilter=_,e.LinearInterpolant=_i,e.LinearMipMapLinearFilter=1008,e.LinearMipMapNearestFilter=1007,e.LinearMipmapLinearFilter=Xe,e.LinearMipmapNearestFilter=vi,e.LinearSRGBColorSpace=ce,e.LinearToneMapping=Ia,e.LinearTransfer=Mn,e.Loader=B,e.LoaderUtils=wa,e.LoadingManager=Gi,e.LoopOnce=2200,e.LoopPingPong=2202,e.LoopRepeat=2201,e.LuminanceAlphaFormat=1025,e.LuminanceFormat=1024,e.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},e.Material=z,e.MaterialLoader=ka,e.MathUtils=Ru,e.Matrix3=d,e.Matrix4=a,e.MaxEquation=104,e.Mesh=k,e.MeshBasicMaterial=Me,e.MeshDepthMaterial=Ki,e.MeshDistanceMaterial=Ta,e.MeshLambertMaterial=qc,e.MeshMatcapMaterial=Kc,e.MeshNormalMaterial=Yc,e.MeshPhongMaterial=Qc,e.MeshPhysicalMaterial=ll,e.MeshStandardMaterial=Io,e.MeshToonMaterial=Gc,e.MinEquation=103,e.MirroredRepeatWrapping=kn,e.MixOperation=Ra,e.MultiplyBlending=4,e.MultiplyOperation=cn,e.NearestFilter=C,e.NearestMipMapLinearFilter=1005,e.NearestMipMapNearestFilter=1004,e.NearestMipmapLinearFilter=bn,e.NearestMipmapNearestFilter=ls,e.NeverCompare=512,e.NeverDepth=0,e.NeverStencilFunc=512,e.NoBlending=0,e.NoColorSpace=se,e.NoToneMapping=ge,e.NormalAnimationBlendMode=or,e.NormalBlending=1,e.NotEqualCompare=517,e.NotEqualDepth=7,e.NotEqualStencilFunc=517,e.NumberKeyframeTrack=Cn,e.Object3D=h,e.ObjectLoader=class extends B{constructor(e){super(e)}load(e,t,n,s){const i=this,a=""===this.path?wa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Ce(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(n){let o=null;try{o=JSON.parse(n)}catch(t){return void 0!==s&&s(t),void console.error("THREE:ObjectLoader: Can't parse "+e+".",t.message)}const a=o.metadata;if(void 0===a||void 0===a.type||"geometry"===a.type.toLowerCase())return void 0!==s&&s(new Error("THREE.ObjectLoader: Can't load "+e)),void console.error("THREE.ObjectLoader: Can't load "+e);i.parse(o,t)},n,s)}async loadAsync(e,t){const i=""===this.path?wa.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const n=new Ce(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials);const a=await n.loadAsync(e,t),o=JSON.parse(a),s=o.metadata;if(void 0===s||void 0===s.type||"geometry"===s.type.toLowerCase())throw new Error("THREE.ObjectLoader: Can't load "+e);return await this.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),a=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,a),s=this.parseImages(e.images,function(){void 0!==t&&t(n)}),o=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,o),n=this.parseObject(e.object,r,c,o,i),l=this.parseSkeletons(e.skeletons,n);if(this.bindSkeletons(n,l),void 0!==t){let e=!1;for(const t in s)if(s[t].data instanceof HTMLImageElement){e=!0;break}!1===e&&t(n)}return n}async parseAsync(e){const s=this.parseAnimations(e.animations),o=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,o),a=await this.parseImagesAsync(e.images),n=this.parseTextures(e.textures,a),r=this.parseMaterials(e.materials,n),t=this.parseObject(e.object,i,r,n,s),c=this.parseSkeletons(e.skeletons,t);return this.bindSkeletons(t,c),t}parseShapes(e){const t={};if(void 0!==e)for(let n=0,o=e.length;n<o;n++){const s=(new et).fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(e){e.isBone&&(s[e.uuid]=e)}),void 0!==e)for(let t=0,i=e.length;t<i;t++){const o=(new na).fromJSON(e[t],s);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(void 0!==e){const s=new Gr;for(let a=0,r=e.length;a<r;a++){let i;const o=e[a];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":i=s.parse(o);break;default:o.type in Fo?i=Fo[o.type].fromJSON(o,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${o.type}"`)}i.uuid=o.uuid,void 0!==o.name&&(i.name=o.name),void 0!==o.userData&&(i.userData=o.userData),n[o.uuid]=i}}return n}parseMaterials(e,t){const n={},s={};if(void 0!==e){const o=new ka;o.setTextures(t);for(let i=0,a=e.length;i<a;i++){const t=e[i];void 0===n[t.uuid]&&(n[t.uuid]=o.parse(t)),s[t.uuid]=n[t.uuid]}}return s}parseAnimations(e){const t={};if(void 0!==e)for(let n=0;n<e.length;n++){const o=e[n],s=Qt.parse(o);t[s.uuid]=s}return t}parseImages(e,t){const n=this,s={};let o;function i(e){if("string"==typeof e){const t=e;return function(e){return n.manager.itemStart(e),o.load(e,function(){n.manager.itemEnd(e)},void 0,function(){n.manager.itemError(e),n.manager.itemEnd(e)})}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(t)?t:n.resourcePath+t)}return e.data?{data:jt(e.type,e.data),width:e.width,height:e.height}:null}if(void 0!==e&&e.length>0){const n=new Gi(t);o=new zn(n),o.setCrossOrigin(this.crossOrigin);for(let n=0,a=e.length;n<a;n++){const t=e[n],o=t.url;if(Array.isArray(o)){const e=[];for(let n=0,s=o.length;n<s;n++){const t=i(o[n]);null!==t&&(t instanceof HTMLImageElement?e.push(t):e.push(new Je(t.data,t.width,t.height)))}s[t.uuid]=new Ge(e)}else{const e=i(t.url);s[t.uuid]=new Ge(e)}}}return s}async parseImagesAsync(e){const o=this,t={};let n;async function s(e){if("string"==typeof e){const t=e,s=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(t)?t:o.resourcePath+t;return await n.loadAsync(s)}return e.data?{data:jt(e.type,e.data),width:e.width,height:e.height}:null}if(void 0!==e&&e.length>0){n=new zn(this.manager),n.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const n=e[o],i=n.url;if(Array.isArray(i)){const e=[];for(let n=0,o=i.length;n<o;n++){const a=i[n],t=await s(a);null!==t&&(t instanceof HTMLImageElement?e.push(t):e.push(new Je(t.data,t.width,t.height)))}t[n.uuid]=new Ge(e)}else{const e=await s(n.url);t[n.uuid]=new Ge(e)}}}return t}parseTextures(e,t){function n(e,t){return"number"==typeof e?e:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",e),t[e])}const s={};if(void 0!==e)for(let r=0,l=e.length;r<l;r++){const o=e[r];void 0===o.image&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),void 0===t[o.image]&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=t[o.image],a=c.data;let i;Array.isArray(a)?(i=new en,6===a.length&&(i.needsUpdate=!0)):(i=a&&a.data?new Je:new w,a&&(i.needsUpdate=!0)),i.source=c,i.uuid=o.uuid,void 0!==o.name&&(i.name=o.name),void 0!==o.mapping&&(i.mapping=n(o.mapping,uu)),void 0!==o.channel&&(i.channel=o.channel),void 0!==o.offset&&i.offset.fromArray(o.offset),void 0!==o.repeat&&i.repeat.fromArray(o.repeat),void 0!==o.center&&i.center.fromArray(o.center),void 0!==o.rotation&&(i.rotation=o.rotation),void 0!==o.wrap&&(i.wrapS=n(o.wrap[0],qr),i.wrapT=n(o.wrap[1],qr)),void 0!==o.format&&(i.format=o.format),void 0!==o.internalFormat&&(i.internalFormat=o.internalFormat),void 0!==o.type&&(i.type=o.type),void 0!==o.colorSpace&&(i.colorSpace=o.colorSpace),void 0!==o.encoding&&(i.encoding=o.encoding),void 0!==o.minFilter&&(i.minFilter=n(o.minFilter,Ur)),void 0!==o.magFilter&&(i.magFilter=n(o.magFilter,Ur)),void 0!==o.anisotropy&&(i.anisotropy=o.anisotropy),void 0!==o.flipY&&(i.flipY=o.flipY),void 0!==o.generateMipmaps&&(i.generateMipmaps=o.generateMipmaps),void 0!==o.premultiplyAlpha&&(i.premultiplyAlpha=o.premultiplyAlpha),void 0!==o.unpackAlignment&&(i.unpackAlignment=o.unpackAlignment),void 0!==o.compareFunction&&(i.compareFunction=o.compareFunction),void 0!==o.userData&&(i.userData=o.userData),s[o.uuid]=i}return s}parseObject(e,t,n,s,i){let a,c,l;function d(e){return void 0===t[e]&&console.warn("THREE.ObjectLoader: Undefined geometry",e),t[e]}function r(e){if(void 0!==e){if(Array.isArray(e)){const t=[];for(let s=0,i=e.length;s<i;s++){const o=e[s];void 0===n[o]&&console.warn("THREE.ObjectLoader: Undefined material",o),t.push(n[o])}return t}return void 0===n[e]&&console.warn("THREE.ObjectLoader: Undefined material",e),n[e]}}function u(e){return void 0===s[e]&&console.warn("THREE.ObjectLoader: Undefined texture",e),s[e]}switch(e.type){case"Scene":a=new ar,void 0!==e.background&&(Number.isInteger(e.background)?a.background=new o(e.background):a.background=u(e.background)),void 0!==e.environment&&(a.environment=u(e.environment)),void 0!==e.fog&&("Fog"===e.fog.type?a.fog=new Aa(e.fog.color,e.fog.near,e.fog.far):"FogExp2"===e.fog.type&&(a.fog=new Sa(e.fog.color,e.fog.density)),""!==e.fog.name&&(a.fog.name=e.fog.name)),void 0!==e.backgroundBlurriness&&(a.backgroundBlurriness=e.backgroundBlurriness),void 0!==e.backgroundIntensity&&(a.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":a=new M(e.fov,e.aspect,e.near,e.far),void 0!==e.focus&&(a.focus=e.focus),void 0!==e.zoom&&(a.zoom=e.zoom),void 0!==e.filmGauge&&(a.filmGauge=e.filmGauge),void 0!==e.filmOffset&&(a.filmOffset=e.filmOffset),void 0!==e.view&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new to(e.left,e.right,e.top,e.bottom,e.near,e.far),void 0!==e.zoom&&(a.zoom=e.zoom),void 0!==e.view&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new ic(e.color,e.intensity);break;case"DirectionalLight":a=new rc(e.color,e.intensity);break;case"PointLight":a=new cc(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new sc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new dc(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new fc(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=(new ec).fromJSON(e);break;case"SkinnedMesh":c=d(e.geometry),l=r(e.material),a=new Pr(c,l),void 0!==e.bindMode&&(a.bindMode=e.bindMode),void 0!==e.bindMatrix&&a.bindMatrix.fromArray(e.bindMatrix),void 0!==e.skeleton&&(a.skeleton=e.skeleton);break;case"Mesh":c=d(e.geometry),l=r(e.material),a=new k(c,l);break;case"InstancedMesh":c=d(e.geometry),l=r(e.material);const n=e.count,s=e.instanceMatrix,t=e.instanceColor;a=new Zr(c,l,n),a.instanceMatrix=new bt(new Float32Array(s.array),16),void 0!==t&&(a.instanceColor=new bt(new Float32Array(t.array),t.itemSize));break;case"BatchedMesh":c=d(e.geometry),l=r(e.material),a=new pc(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,l),a.geometry=c,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(e=>{const t=new P;t.min.fromArray(e.boxMin),t.max.fromArray(e.boxMax);const n=new F;return n.radius=e.sphereRadius,n.center.fromArray(e.sphereCenter),{boxInitialized:e.boxInitialized,box:t,sphereInitialized:e.sphereInitialized,sphere:n}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=u(e.matricesTexture.uuid);break;case"LOD":a=new Ar;break;case"Line":a=new ze(d(e.geometry),r(e.material));break;case"LineLoop":a=new Ec(d(e.geometry),r(e.material));break;case"LineSegments":a=new re(d(e.geometry),r(e.material));break;case"PointCloud":case"Points":a=new Tc(d(e.geometry),r(e.material));break;case"Sprite":a=new xr(r(e.material));break;case"Group":a=new Gt;break;case"Bone":a=new oa;break;default:a=new h}if(a.uuid=e.uuid,void 0!==e.name&&(a.name=e.name),void 0!==e.matrix?(a.matrix.fromArray(e.matrix),void 0!==e.matrixAutoUpdate&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(void 0!==e.position&&a.position.fromArray(e.position),void 0!==e.rotation&&a.rotation.fromArray(e.rotation),void 0!==e.quaternion&&a.quaternion.fromArray(e.quaternion),void 0!==e.scale&&a.scale.fromArray(e.scale)),void 0!==e.up&&a.up.fromArray(e.up),void 0!==e.castShadow&&(a.castShadow=e.castShadow),void 0!==e.receiveShadow&&(a.receiveShadow=e.receiveShadow),e.shadow&&(void 0!==e.shadow.bias&&(a.shadow.bias=e.shadow.bias),void 0!==e.shadow.normalBias&&(a.shadow.normalBias=e.shadow.normalBias),void 0!==e.shadow.radius&&(a.shadow.radius=e.shadow.radius),void 0!==e.shadow.mapSize&&a.shadow.mapSize.fromArray(e.shadow.mapSize),void 0!==e.shadow.camera&&(a.shadow.camera=this.parseObject(e.shadow.camera))),void 0!==e.visible&&(a.visible=e.visible),void 0!==e.frustumCulled&&(a.frustumCulled=e.frustumCulled),void 0!==e.renderOrder&&(a.renderOrder=e.renderOrder),void 0!==e.userData&&(a.userData=e.userData),void 0!==e.layers&&(a.layers.mask=e.layers),void 0!==e.children){const o=e.children;for(let e=0;e<o.length;e++)a.add(this.parseObject(o[e],t,n,s,i))}if(void 0!==e.animations){const t=e.animations;for(let e=0;e<t.length;e++){const n=t[e];a.animations.push(i[n])}}if("LOD"===e.type){void 0!==e.autoUpdate&&(a.autoUpdate=e.autoUpdate);const t=e.levels;for(let e=0;e<t.length;e++){const n=t[e],s=a.getObjectByProperty("uuid",n.object);void 0!==s&&a.addLevel(s,n.distance,n.hysteresis)}}return a}bindSkeletons(e,t){0!==Object.keys(t).length&&e.traverse(function(e){if(!0===e.isSkinnedMesh&&void 0!==e.skeleton){const n=t[e.skeleton];void 0===n?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",e.skeleton):e.bind(n,e.bindMatrix)}})}},e.ObjectSpaceNormalMap=1,e.OctahedronGeometry=oo,e.OneFactor=201,e.OneMinusConstantAlphaFactor=214,e.OneMinusConstantColorFactor=212,e.OneMinusDstAlphaFactor=207,e.OneMinusDstColorFactor=209,e.OneMinusSrcAlphaFactor=no,e.OneMinusSrcColorFactor=203,e.OrthographicCamera=to,e.P3Primaries=Dn,e.PCFShadowMap=Fa,e.PCFSoftShadowMap=La,e.PMREMGenerator=$o,e.Path=fn,e.PerspectiveCamera=M,e.Plane=Ee,e.PlaneGeometry=co,e.PlaneHelper=class extends ze{constructor(e,t=1,n=16776960){const a=n,s=new l;s.setAttribute("position",new i([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),s.computeBoundingSphere(),super(s,new L({color:a,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=new l;o.setAttribute("position",new i([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),o.computeBoundingSphere(),this.add(new k(o,new Me({color:a,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},e.PointLight=cc,e.PointLightHelper=class extends k{constructor(e,t,n){super(new Zn(t,4,2),new Me({wireframe:!0,fog:!1,toneMapped:!1})),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},e.Points=Tc,e.PointsMaterial=Li,e.PolarGridHelper=class extends re{constructor(e=10,t=16,n=8,s=64,a=4473924,r=8947848){a=new o(a),r=new o(r);const c=[],d=[];if(t>1)for(let s=0;s<t;s++){const o=s/t*(2*Math.PI),i=Math.sin(o)*e,l=Math.cos(o)*e;c.push(0,0,0),c.push(i,0,l);const n=1&s?a:r;d.push(n.r,n.g,n.b),d.push(n.r,n.g,n.b)}for(let o=0;o<n;o++){const t=1&o?a:r,i=e-e/n*o;for(let n=0;n<s;n++){let e=n/s*(2*Math.PI),o=Math.sin(e)*i,a=Math.cos(e)*i;c.push(o,0,a),d.push(t.r,t.g,t.b),e=(n+1)/s*(2*Math.PI),o=Math.sin(e)*i,a=Math.cos(e)*i,c.push(o,0,a),d.push(t.r,t.g,t.b)}}const u=new l;u.setAttribute("position",new i(c,3)),u.setAttribute("color",new i(d,3)),super(u,new L({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},e.PolyhedronGeometry=Ze,e.PositionalAudio=class extends Tr{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),!0===this.hasPlaybackControl&&!1===this.isPlaying)return;this.matrixWorld.decompose(ot,wr,Au),it.set(0,0,1).applyQuaternion(wr);const t=this.panner;if(t.positionX){const e=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ot.x,e),t.positionY.linearRampToValueAtTime(ot.y,e),t.positionZ.linearRampToValueAtTime(ot.z,e),t.orientationX.linearRampToValueAtTime(it.x,e),t.orientationY.linearRampToValueAtTime(it.y,e),t.orientationZ.linearRampToValueAtTime(it.z,e)}else t.setPosition(ot.x,ot.y,ot.z),t.setOrientation(it.x,it.y,it.z)}},e.PropertyBinding=u,e.PropertyMixer=br,e.QuadraticBezierCurve=ji,e.QuadraticBezierCurve3=fi,e.Quaternion=$,e.QuaternionKeyframeTrack=Mt,e.QuaternionLinearInterpolant=Mc,e.RED_GREEN_RGTC2_Format=Ti,e.RED_RGTC1_Format=36283,e.REVISION=Es,e.RGBADepthPacking=3201,e.RGBAFormat=X,e.RGBAIntegerFormat=Ko,e.RGBA_ASTC_10x10_Format=ui,e.RGBA_ASTC_10x5_Format=ni,e.RGBA_ASTC_10x6_Format=ri,e.RGBA_ASTC_10x8_Format=di,e.RGBA_ASTC_12x10_Format=hi,e.RGBA_ASTC_12x12_Format=bi,e.RGBA_ASTC_4x4_Format=To,e.RGBA_ASTC_5x4_Format=zo,e.RGBA_ASTC_5x5_Format=Do,e.RGBA_ASTC_6x5_Format=Lo,e.RGBA_ASTC_6x6_Format=Bo,e.RGBA_ASTC_8x5_Format=Uo,e.RGBA_ASTC_8x6_Format=Xo,e.RGBA_ASTC_8x8_Format=Jo,e.RGBA_BPTC_Format=Cs,e.RGBA_ETC2_EAC_Format=Eo,e.RGBA_PVRTC_2BPPV1_Format=po,e.RGBA_PVRTC_4BPPV1_Format=go,e.RGBA_S3TC_DXT1_Format=Ys,e.RGBA_S3TC_DXT3_Format=so,e.RGBA_S3TC_DXT5_Format=ro,e.RGB_BPTC_SIGNED_Format=Ai,e.RGB_BPTC_UNSIGNED_Format=Mi,e.RGB_ETC1_Format=xo,e.RGB_ETC2_Format=Co,e.RGB_PVRTC_2BPPV1_Format=wo,e.RGB_PVRTC_4BPPV1_Format=Oo,e.RGB_S3TC_DXT1_Format=qs,e.RGFormat=1030,e.RGIntegerFormat=qo,e.RawShaderMaterial=ul,e.Ray=Tt,e.Raycaster=class{constructor(e,t,n=0,s=1/0){this.ray=new Tt(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Gn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return qi(e,this,n,t),n.sort(ur),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)qi(e[s],this,n,t);return n.sort(ur),n}},e.Rec709Primaries=Fn,e.RectAreaLight=sc,e.RedFormat=1028,e.RedIntegerFormat=Qo,e.ReinhardToneMapping=Va,e.RenderTarget=Qr,e.RepeatWrapping=An,e.ReplaceStencilOp=7681,e.ReverseSubtractEquation=102,e.RingGeometry=yo,e.SIGNED_RED_GREEN_RGTC2_Format=zi,e.SIGNED_RED_RGTC1_Format=Fi,e.SRGBColorSpace=A,e.SRGBTransfer=g,e.Scene=ar,e.ShaderChunk=r,e.ShaderLib=te,e.ShaderMaterial=le,e.ShadowMaterial=hl,e.Shape=et,e.ShapeGeometry=jo,e.ShapePath=class{constructor(){this.type="ShapePath",this.color=new o,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new fn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,o,i){return this.currentPath.bezierCurveTo(e,t,n,s,o,i),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function f(e,t){const s=t.length;let n=!1;for(let c=s-1,r=0;r<s;c=r++){let o=t[c],i=t[r],l=i.x-o.x,a=i.y-o.y;if(Math.abs(a)>Number.EPSILON){if(a<0&&(o=t[r],l=-l,i=t[c],a=-a),e.y<o.y||e.y>i.y)continue;if(e.y===o.y){if(e.x===o.x)return!0}else{const t=a*(e.x-o.x)-l*(e.y-o.y);if(0===t)return!0;if(t<0)continue;n=!n}}else{if(e.y!==o.y)continue;if(i.x<=e.x&&e.x<=o.x||o.x<=e.x&&e.x<=i.x)return!0}}return n}const m=Oe.isClockWise,s=this.subPaths;if(0===s.length)return[];let r,i,a;const d=[];if(1===s.length)return i=s[0],a=new et,a.curves=i.curves,d.push(a),d;let c=!m(s[0].getPoints());c=e?!c:c;const l=[],t=[];let u,h,o=[],n=0;t[n]=void 0,o[n]=[];for(let a=0,l=s.length;a<l;a++)i=s[a],u=i.getPoints(),r=m(u),r=e?!r:r,r?(!c&&t[n]&&n++,t[n]={s:new et,p:u},t[n].s.curves=i.curves,c&&n++,o[n]=[]):o[n].push({h:i,p:u[0]});if(!t[0])return function(e){const t=[];for(let n=0,o=e.length;n<o;n++){const i=e[n],s=new et;s.curves=i.curves,t.push(s)}return t}(s);if(t.length>1){let e=!1,n=0;for(let e=0,n=t.length;e<n;e++)l[e]=[];for(let s=0,a=t.length;s<a;s++){const i=o[s];for(let o=0;o<i.length;o++){const a=i[o];let r=!0;for(let o=0;o<t.length;o++)f(a.p,t[o].p)&&(s!==o&&n++,r?(r=!1,l[o].push(a)):e=!0);r&&l[s].push(a)}}n>0&&!1===e&&(o=l)}for(let e=0,n=t.length;e<n;e++){a=t[e].s,d.push(a),h=o[e];for(let e=0,t=h.length;e<t;e++)a.holes.push(h[e].h)}return d}},e.ShapeUtils=Oe,e.ShortType=1011,e.Skeleton=na,e.SkeletonHelper=class extends re{constructor(e){const t=Qa(e),n=new l,s=[],a=[],r=new o(0,0,1),c=new o(0,1,0);for(let e=0;e<t.length;e++){const n=t[e];n.parent&&n.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),a.push(r.r,r.g,r.b),a.push(c.r,c.g,c.b))}n.setAttribute("position",new i(s,3)),n.setAttribute("color",new i(a,3)),super(n,new L({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");ta.copy(this.root.matrixWorld).invert();for(let n=0,o=0;n<t.length;n++){const e=t[n];e.parent&&e.parent.isBone&&(Qn.multiplyMatrices(ta,e.matrixWorld),Re.setFromMatrixPosition(Qn),s.setXYZ(o,Re.x,Re.y,Re.z),Qn.multiplyMatrices(ta,e.parent.matrixWorld),Re.setFromMatrixPosition(Qn),s.setXYZ(o+1,Re.x,Re.y,Re.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}},e.SkinnedMesh=Pr,e.Source=Ge,e.Sphere=F,e.SphereGeometry=Zn,e.Spherical=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(b(t/this.radius,-1,1))),this}clone(){return(new this.constructor).copy(this)}},e.SphericalHarmonics3=nc,e.SplineCurve=mi,e.SpotLight=dc,e.SpotLightHelper=class extends h{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new l,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let e=0,n=1,t=32;e<t;e++,n++){const o=e/t*Math.PI*2,i=n/t*Math.PI*2;s.push(Math.cos(o),Math.sin(o),1,Math.cos(i),Math.sin(i),1)}n.setAttribute("position",new i(s,3));const o=new L({fog:!1,toneMapped:!1});this.cone=new re(n,o),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),tr.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(tr),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},e.Sprite=xr,e.SpriteMaterial=xa,e.SrcAlphaFactor=lo,e.SrcAlphaSaturateFactor=210,e.SrcColorFactor=202,e.StaticCopyUsage=35046,e.StaticDrawUsage=Nn,e.StaticReadUsage=35045,e.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new M,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new M,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,qe.copy(e.projectionMatrix);const a=t.eyeSep/2,o=a*t.near/t.focus,i=t.near*Math.tan(st*t.fov*.5)/t.zoom;let n,s;$r.elements[12]=-a,Wr.elements[12]=a,n=-i*t.aspect+o,s=i*t.aspect+o,qe.elements[0]=2*t.near/(s-n),qe.elements[8]=(s+n)/(s-n),this.cameraL.projectionMatrix.copy(qe),n=-i*t.aspect-o,s=i*t.aspect-o,qe.elements[0]=2*t.near/(s-n),qe.elements[8]=(s+n)/(s-n),this.cameraR.projectionMatrix.copy(qe)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply($r),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Wr)}},e.StreamCopyUsage=35042,e.StreamDrawUsage=35040,e.StreamReadUsage=35041,e.StringKeyframeTrack=Qe,e.SubtractEquation=101,e.SubtractiveBlending=3,e.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},e.TangentSpaceNormalMap=0,e.TetrahedronGeometry=wi,e.Texture=w,e.TextureLoader=class extends B{constructor(e){super(e)}load(e,t,n,s){const o=new w,i=new zn(this.manager);return i.setCrossOrigin(this.crossOrigin),i.setPath(this.path),i.load(e,function(e){o.image=e,o.needsUpdate=!0,void 0!==t&&t(o)},n,s),o}},e.TorusGeometry=bo,e.TorusKnotGeometry=_o,e.Triangle=Y,e.TriangleFanDrawMode=2,e.TriangleStripDrawMode=1,e.TrianglesDrawMode=0,e.TubeGeometry=So,e.TwoPassDoubleSide=2,e.UVMapping=Wn,e.Uint16BufferAttribute=xi,e.Uint32BufferAttribute=Oi,e.Uint8BufferAttribute=class extends f{constructor(e,t,n){super(new Uint8Array(e),t,n)}},e.Uint8ClampedBufferAttribute=class extends f{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},e.Uniform=hr,e.UniformsGroup=class extends ve{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Bu++}),this.name="",this.usage=Nn,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return-1!==t&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let e=0,s=t.length;e<s;e++){const n=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0;e<n.length;e++)this.uniforms.push(n[e].clone())}return this}clone(){return(new this.constructor).copy(this)}},e.UniformsLib=s,e.UniformsUtils=bl,e.UnsignedByteType=Ie,e.UnsignedInt248Type=ke,e.UnsignedIntType=ue,e.UnsignedShort4444Type=ii,e.UnsignedShort5551Type=Zo,e.UnsignedShortType=$n,e.VSMShadowMap=de,e.Vector2=n,e.Vector3=t,e.Vector4=p,e.VectorKeyframeTrack=Bn,e.VideoTexture=class extends w{constructor(e,t,n,s,o,i,a,r,c){super(e,t,n,s,o,i,a,r,c),this.isVideoTexture=!0,this.minFilter=void 0!==i?i:_,this.magFilter=void 0!==o?o:_,this.generateMipmaps=!1;const l=this;"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(function t(){l.needsUpdate=!0,e.requestVideoFrameCallback(t)})}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!1==="requestVideoFrameCallback"in e&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},e.WebGL1Renderer=sr,e.WebGL3DRenderTarget=class extends ie{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Oa(null,e,t,n),this.texture.isRenderTargetTexture=!0}},e.WebGLArrayRenderTarget=class extends ie{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new eo(null,e,t,n),this.texture.isRenderTargetTexture=!0}},e.WebGLCoordinateSystem=He,e.WebGLCubeRenderTarget=yl,e.WebGLMultipleRenderTargets=class extends ie{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLMultipleRenderTargets=!0;const o=this.texture;this.texture=[];for(let e=0;e<n;e++)this.texture[e]=o.clone(),this.texture[e].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.texture.length;s<o;s++)this.texture[s].image.width=e,this.texture[s].image.height=t,this.texture[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}},e.WebGLRenderTarget=ie,e.WebGLRenderer=nr,e.WebGLUtils=Ya,e.WebGPUCoordinateSystem=Ot,e.WireframeGeometry=gl,e.WrapAroundEnding=wn,e.ZeroCurvatureEnding=nt,e.ZeroFactor=200,e.ZeroSlopeEnding=tt,e.ZeroStencilOp=0,e._SRGBAFormat=Un,e.createCanvasElement=jr,e.sRGBEncoding=Pe})