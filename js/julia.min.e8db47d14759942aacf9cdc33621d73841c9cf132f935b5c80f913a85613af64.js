(function(){function t(e){const i=document.getElementById(e);if(!i||!window.THREE)return;const n=window.THREE,h=i.clientWidth,u=i.clientHeight,o=new n.WebGLRenderer({antialias:!0});o.setSize(h,u),i.innerHTML="",i.appendChild(o.domElement);const m=new n.Scene,v=new n.OrthographicCamera(-1,1,1,-1,0,1),j=new n.PlaneGeometry(2,2),s={u_resolution:{value:new n.Vector2(h,u)},u_center:{value:new n.Vector2(0,0)},u_scale:{value:3},u_c:{value:new n.Vector2(-.8,.156)},u_maxIter:{value:300},u_theme:{value:0}},b=new n.ShaderMaterial({uniforms:s,fragmentShader:`
        precision highp float;
        uniform vec2 u_resolution;
        uniform vec2 u_center;
        uniform float u_scale;
        uniform vec2 u_c;
        uniform int u_maxIter;
        uniform int u_theme;

        vec3 palette(float t){
          // Simple smooth palette
          vec3 a = vec3(0.5, 0.5, 0.5);
          vec3 b = vec3(0.5, 0.5, 0.5);
          vec3 c = vec3(1.0, 1.0, 1.0);
          vec3 d = vec3(0.263,0.416,0.557);
          return a + b*cos(6.28318*(c*t + d));
        }

        void main(){
          vec2 uv = (gl_FragCoord.xy - 0.5*u_resolution) / u_resolution.y;
          vec2 z = vec2(uv*u_scale + u_center);
          vec2 c = u_c;
          int i;
          float escape = 0.0;
          for(i=0;i<u_maxIter;i++){
            // z = z^2 + c
            float x = z.x*z.x - z.y*z.y + c.x;
            float y = 2.0*z.x*z.y + c.y;
            z = vec2(x,y);
            if(dot(z,z) > 4.0){
              escape = float(i);
              break;
            }
          }

          if(i==u_maxIter){
            gl_FragColor = vec4(0.0,0.0,0.0,1.0);
          } else {
            // smooth coloring
            float t = (escape + 1.0 - log(log(length(z))) / log(2.0)) / float(u_maxIter);
            vec3 col = palette(t);
            gl_FragColor = vec4(col,1.0);
          }
        }
      `,vertexShader:`
        precision highp float;
        void main(){
          gl_Position = vec4(position,1.0);
        }
      `}),g=new n.Mesh(j,b);m.add(g);let c=!1,a={x:0,y:0};o.domElement.addEventListener("mousedown",e=>{c=!0,a.x=e.clientX,a.y=e.clientY}),window.addEventListener("mouseup",()=>c=!1),window.addEventListener("mousemove",e=>{if(!c)return;const t=(e.clientX-a.x)/o.domElement.clientHeight*s.u_scale.value,n=(e.clientY-a.y)/o.domElement.clientHeight*s.u_scale.value;s.u_center.value.x-=t,s.u_center.value.y+=n,a.x=e.clientX,a.y=e.clientY}),o.domElement.addEventListener("wheel",e=>{e.preventDefault();const t=Math.exp(-e.deltaY*.0015);s.u_scale.value*=t},{passive:!1});const d=document.getElementById("julia-cre"),r=document.getElementById("julia-cim"),f=document.getElementById("julia-cval");function l(){const e=parseFloat(d.value),t=parseFloat(r.value);s.u_c.value.set(e,t),f&&(f.textContent=`c = ${e.toFixed(3)} + ${t.toFixed(3)} i`)}d&&r&&(d.addEventListener("input",l),r.addEventListener("input",l),l());function y(){const e=i.clientWidth,t=i.clientHeight;o.setSize(e,t,!1),s.u_resolution.value.set(e,t)}window.addEventListener("resize",y);function p(){o.render(m,v),requestAnimationFrame(p)}p()}function e(){t("julia-root")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()})()