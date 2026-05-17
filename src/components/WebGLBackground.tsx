"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Vertex Shader
    const vertexShader = `
      void main() {
          gl_Position = vec4(position, 1.0);
      }
    `;

    // Fragment Shader (保持流动的数字科技感波纹效果)
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float wave = sin(uv.x * 10.0 + u_time * 0.5) * cos(uv.y * 10.0 + u_time * 0.3) * 0.5 + 0.5;
          vec3 finalColor = mix(vec3(0.04, 0.04, 0.05), vec3(0.0, 0.2, 0.15), wave * 0.15);
          float scanline = sin(gl_FragCoord.y * 0.8) * 0.04;
          finalColor += scanline;
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Resize 监听
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // 动画循环 (使用原生的 performance.now 替代被弃用的 THREE.Clock)
    let animationFrameId: number;
    const startTime = performance.now(); 

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // 计算从网页加载到当前帧所经过的秒数 (毫秒 * 0.001)
      uniforms.u_time.value = (performance.now() - startTime) * 0.001; 
      
      renderer.render(scene, camera);
    };
    animate();

    // 销毁组件时清理 WebGL 资源
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40"
    />
  );
}