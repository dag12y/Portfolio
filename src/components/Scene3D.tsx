import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

const Scene3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 40);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.4));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const accent = theme === "dark" ? 0x818cf8 : 0x4f46e5;
    const mute = theme === "dark" ? 0x64748b : 0x475569;

    const group = new THREE.Group();
    scene.add(group);

    const addWire = (
      geometry: THREE.BufferGeometry,
      color: number,
      position: [number, number, number],
      scale: number,
      opacity: number,
    ) => {
      const material = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...position);
      mesh.scale.setScalar(scale);
      group.add(mesh);
    };

    addWire(
      new THREE.IcosahedronGeometry(1.55, 0),
      accent,
      [0.55, 0.05, 0],
      1,
      0.42,
    );
    addWire(
      new THREE.OctahedronGeometry(1, 0),
      mute,
      [-2.35, 0.85, -1.1],
      0.52,
      0.32,
    );
    addWire(
      new THREE.TetrahedronGeometry(1, 0),
      accent,
      [2.15, -0.95, -0.7],
      0.48,
      0.34,
    );

    const mouse = { x: 0, y: 0 };
    const onMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const setSize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    setSize();
    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(container);

    let inView = true;
    const intersection = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    intersection.observe(container);

    let frame = 0;
    const clock = new THREE.Clock();
    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!inView || document.hidden) return;

      const time = clock.getElapsedTime();
      if (reducedMotion) {
        group.rotation.y = 0.35;
        group.rotation.x = 0.16;
      } else {
        group.rotation.y = time * 0.1 + mouse.x * 0.22;
        group.rotation.x = 0.16 + mouse.y * 0.12;
      }
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      resizeObserver.disconnect();
      intersection.disconnect();
      group.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
    />
  );
};

export default Scene3D;
