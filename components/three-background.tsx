"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const scrollRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Particle system - Data nodes
    const particleCount = 2000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const color1 = new THREE.Color(0x06b6d4) // Cyan
    const color2 = new THREE.Color(0x10b981) // Emerald
    const color3 = new THREE.Color(0x8b5cf6) // Purple

    for (let i = 0; i < particleCount; i++) {
      // Sphere distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 30 + Math.random() * 20

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      // Color assignment
      const colorChoice = Math.random()
      const selectedColor = colorChoice < 0.4 ? color1 : colorChoice < 0.7 ? color2 : color3
      colors[i * 3] = selectedColor.r
      colors[i * 3 + 1] = selectedColor.g
      colors[i * 3 + 2] = selectedColor.b

      sizes[i] = Math.random() * 2 + 0.5
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

    // Custom shader material for glowing particles
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: renderer.getPixelRatio() },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform float pixelRatio;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Subtle wave animation
          float wave = sin(time * 0.5 + position.x * 0.05) * 0.5;
          pos.y += wave;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * pixelRatio * (50.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= 0.8;
          
          // Glow effect
          vec3 glow = vColor * (1.0 + alpha * 0.5);
          gl_FragColor = vec4(glow, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Connection lines between nearby particles
    const lineGeometry = new THREE.BufferGeometry()
    const linePositions: number[] = []
    const lineColors: number[] = []

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < 8 && linePositions.length < 3000) {
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          )
          const alpha = 1 - dist / 8
          lineColors.push(0.02, 0.71, 0.83, alpha, 0.02, 0.71, 0.83, alpha)
        }
      }
    }

    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3))
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.15,
    })
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    // Floating data cubes
    const cubeGroup = new THREE.Group()
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })

    for (let i = 0; i < 15; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial.clone())
      cube.position.set((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 40)
      cube.scale.setScalar(Math.random() * 2 + 1)
      cube.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.5 + 0.5,
        floatOffset: Math.random() * Math.PI * 2,
      }
      cubeGroup.add(cube)
    }
    scene.add(cubeGroup)

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    // Scroll tracking
    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Animation loop
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.016

      // Update shader time
      particleMaterial.uniforms.time.value = time

      // Parallax effect based on mouse
      const targetRotationX = mouseRef.current.y * 0.1
      const targetRotationY = mouseRef.current.x * 0.1
      particles.rotation.x += (targetRotationX - particles.rotation.x) * 0.05
      particles.rotation.y += (targetRotationY - particles.rotation.y) * 0.05
      lines.rotation.x = particles.rotation.x
      lines.rotation.y = particles.rotation.y

      // Slow continuous rotation
      particles.rotation.y += 0.001
      lines.rotation.y += 0.001

      // Scroll-based camera movement
      camera.position.y = -scrollRef.current * 0.02
      camera.position.z = 50 + scrollRef.current * 0.01

      // Animate cubes
      cubeGroup.children.forEach((cube) => {
        const data = cube.userData as {
          rotationSpeed: { x: number; y: number }
          floatSpeed: number
          floatOffset: number
        }
        cube.rotation.x += data.rotationSpeed.x
        cube.rotation.y += data.rotationSpeed.y
        cube.position.y += Math.sin(time * data.floatSpeed + data.floatOffset) * 0.02
      })

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      particleGeometry.dispose()
      particleMaterial.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      cubeGeometry.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
      }}
    />
  )
}
