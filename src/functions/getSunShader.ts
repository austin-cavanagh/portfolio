import { Color, ShaderMaterial } from 'three';
import sunShader from '../shaders/sunShader.glsl';

function getSunShader() {
  const material = new ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new Color(0xffa500) },
      color2: { value: new Color(0xffffb3) },
      thirdDimension: { value: 0.5 },
    },
    vertexShader: `
                  uniform float time;
                  uniform vec3 color1;
                  uniform vec3 color2;
                  varying vec2 vUv;
                  varying vec3 vPosition;
                  uniform vec2 pixels;
                  float PI = 3.141592653589793238;  
  
                  void main() {
                      vUv = uv;
                      vPosition = position;
                      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                  }
              `,
    fragmentShader: `
                  uniform float time;
                  uniform vec3 color1;
                  uniform vec3 color2;
                  uniform float progress;
                  uniform sampler2D texture1;
                  uniform vec4 resolution;
                  varying vec2 vUv;
                  varying vec3 vPosition;
                  float PI = 3.141592653589793238;
                  ${sunShader}
  
                  void main() {
                    vec4 p = vec4(vPosition*3.,time * 3.0) / 25.0;
                    float noisy = fbm(p);
  
                    vec4 p1 = vec4(vPosition * 2.0, time * 0.09);
                    float spots = max(snoise(p1), 10.0);
  
                    vec3 colorMix = mix(color1, color2, noisy);
                    vec3 finalColor = mix(colorMix * spots, colorMix, 0.99);
                    gl_FragColor = vec4(finalColor, 1.0); 
                  }
              `,
    transparent: true,
  });

  return material;
}

export default getSunShader;
