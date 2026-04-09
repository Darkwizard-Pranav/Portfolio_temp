"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from "@react-three/drei"
import { useRef, useMemo } from "react"
import type { Mesh, Group } from "three"
import * as THREE from "three"

function FloatingShapes() {
  const groupRef = useRef<Group>(null)
  const torusRef = useRef<Mesh>(null)
  const boxRef = useRef<Mesh>(null)
  const icoRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3
      torusRef.current.rotation.z = t * 0.2
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = t * 0.2
      boxRef.current.rotation.y = t * 0.3
    }
    
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.1
      icoRef.current.rotation.z = t * 0.15
    }
  })

  const primaryColor = "#00d4ff"
  const secondaryColor = "#0066ff"

  return (
    <group ref={groupRef}>
      {/* Main sphere with distortion */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={primaryColor}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting torus */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Torus 
          ref={torusRef} 
          args={[2.5, 0.08, 16, 100]} 
          position={[0, 0, 0]}
        >
          <meshStandardMaterial 
            color={secondaryColor} 
            emissive={secondaryColor}
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
      </Float>

      {/* Floating box */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <Box ref={boxRef} args={[0.5, 0.5, 0.5]} position={[3, 1, -1]}>
          <meshStandardMaterial 
            color={primaryColor}
            emissive={primaryColor}
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </Box>
      </Float>

      {/* Floating icosahedron */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron ref={icoRef} args={[0.7]} position={[-3, -1, 1]}>
          <meshStandardMaterial 
            color={secondaryColor}
            emissive={secondaryColor}
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </Icosahedron>
      </Float>

      {/* Small particles */}
      <Particles count={50} />
    </group>
  )
}

function Particles({ count }: { count: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 3 + Math.random() * 4
      temp.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 4,
          Math.sin(angle) * radius
        ] as [number, number, number],
        scale: 0.02 + Math.random() * 0.05,
        speed: 0.2 + Math.random() * 0.5
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.getElapsedTime()
    
    particles.forEach((particle, i) => {
      const matrix = new THREE.Matrix4()
      const position = new THREE.Vector3(
        particle.position[0] + Math.sin(time * particle.speed + i) * 0.5,
        particle.position[1] + Math.cos(time * particle.speed + i) * 0.3,
        particle.position[2] + Math.sin(time * particle.speed * 0.5 + i) * 0.5
      )
      matrix.setPosition(position)
      matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale))
      mesh.current!.setMatrixAt(i, matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.6} />
    </instancedMesh>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066ff" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#ffffff"
        />
        <FloatingShapes />
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
    </div>
  )
}
