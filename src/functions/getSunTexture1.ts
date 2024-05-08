import { Color, ShaderMaterial } from 'three';

const noiseGLSL = `
vec4 mod289(vec4 x) { /* implementation */ }
float mod289(float x) { /* implementation */ }
vec4 permute(vec4 x) { /* implementation */ }
float permute(float x) { /* implementation */ }
vec4 taylorInvSqrt(vec4 r) { /* implementation */ }
float taylorInvSqrt(float r) { /* implementation */ }
vec4 grad4(float j, vec4 ip) { /* implementation */ }
#define F4 0.309016994374947451
float snoise(vec4 v) { /* implementation */ }
`;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float time;
uniform vec3 color1;
uniform vec3 color2;
uniform float scale;
uniform float speed;
varying vec2 vUv;
${noiseGLSL}
void main() {
  float noiseValue = snoise(vec4(vUv.xy * scale, time * speed, time * speed));
  vec3 color = mix(color1, color2, noiseValue);
  gl_FragColor = vec4(color, 1.0);
}
`;

function getSunTexture({
  color1 = 0xffff80,
  color2 = 0xff8000,
  scale = 10.0,
  speed = 1.0,
} = {}) {
  return new ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new Color(color1) },
      color2: { value: new Color(color2) },
      scale: { value: scale },
      speed: { value: speed },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
  });
}

export default getSunTexture;
