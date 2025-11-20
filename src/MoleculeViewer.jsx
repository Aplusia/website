import { Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function TransmissionMolecule() {
	const gltf = useLoader(GLTFLoader, "./surface.glb");

	const config = {
		meshPhysicalMaterial: false,
		transmissionSampler: false,
		backside: false,
		samples: 1,
		resolution: 512,
		transmission: 0.7,
		roughness: 0.86,
		thickness: 0.3,
		ior: 1.8,
		chromaticAberration: 0.0,
		anisotropy: 0.0,
		distortion: 0.0,
		distortionScale: 0.15,
		temporalDistortion: 0.5,
		clearcoat: 0.08,
		clearcoatRoughness: 0.53,
		attenuationDistance: 0.5,
		attenuationColor: "#ffffff",
		color: "#77aa76",
		bg: "#69faff",
	};

	return (
		<>
			{gltf.scene.children.map((child) => (
				<mesh key={child.uuid} geometry={child.geometry}>
					<MeshTransmissionMaterial
						background={new THREE.Color(config.bg)}
						{...config}
					/>
				</mesh>
			))}
		</>
	);
}

function StandardMolecule() {
	const gltf = useLoader(GLTFLoader, "./cartoon.glb");

	return (
		<group rotation={[0, 0, 0]}>
			{gltf.scene.children.map((child) => (
				<mesh key={child.uuid} geometry={child.geometry}>
					<meshStandardMaterial
						color="#4A90E2"
						roughness={0.2}
						metalness={0.05}
						clearcoat={0.3}
						clearcoatRoughness={0.1}
					/>
				</mesh>
			))}
		</group>
	);
}

function RotatableMolecule() {
	const meshRef = useRef();
	const [isDragging, setIsDragging] = useState(false);
	const [previousMousePosition, setPreviousMousePosition] = useState({
		x: 0,
		y: 0,
	});
	const [targetDragOffset, setTargetDragOffset] = useState({ x: 0, y: 0 });
	const [currentDragOffset, setCurrentDragOffset] = useState({ x: 0, y: 0 });
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const getResponsiveScale = () => {
		if (isMobile) {
			return [0.032, 0.032, 0.032];
		}
		return [0.048, 0.048, 0.048];
	};

	useFrame((state, _delta) => {
		if (meshRef.current) {
			const time = state.clock.getElapsedTime();
			const rockingAngleY = Math.sin(time * 0.4) * 0.3;
			const rockingAngleX = Math.sin(time * 0.3 + 1.2) * 0.2;

			const lerpFactor = isDragging ? 0.1 : 0.05;
			setCurrentDragOffset((prev) => ({
				x: prev.x + (targetDragOffset.x - prev.x) * lerpFactor,
				y: prev.y + (targetDragOffset.y - prev.y) * lerpFactor,
			}));

			meshRef.current.rotation.y = rockingAngleY + currentDragOffset.x * 0.15;
			meshRef.current.rotation.x = rockingAngleX + currentDragOffset.y * 0.15;

			if (!isDragging) {
				setTargetDragOffset((prev) => ({
					x: prev.x * 0.95,
					y: prev.y * 0.95,
				}));
			}
		}
	});

	const handlePointerDown = (event) => {
		setIsDragging(true);
		setPreviousMousePosition({
			x: event.clientX,
			y: event.clientY,
		});
	};

	const handlePointerMove = (event) => {
		if (!isDragging || !meshRef.current) return;

		const deltaX = event.clientX - previousMousePosition.x;
		const deltaY = event.clientY - previousMousePosition.y;

		setTargetDragOffset((prev) => ({
			x: prev.x + deltaX * 0.05,
			y: prev.y + deltaY * 0.05,
		}));

		setPreviousMousePosition({
			x: event.clientX,
			y: event.clientY,
		});
	};

	const handlePointerUp = () => {
		setIsDragging(false);
	};

	return (
		<group
			ref={meshRef}
			scale={getResponsiveScale()}
			position={[0, 0, 0]}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
			onPointerLeave={handlePointerUp}
			style={{ cursor: "pointer" }}
		>
			<TransmissionMolecule />
			<StandardMolecule />
		</group>
	);
}

export default function MoleculeDemo() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const getCameraSettings = () => {
		if (isMobile) {
			return { position: [0, 0, 18], fov: 40 };
		}
		return { position: [0, 0, 15], fov: 35 };
	};

	return (
		<div className="w-full h-[600px] md:h-[1600px] overflow-hidden rounded-lg">
			<Canvas
				shadows
				camera={getCameraSettings()}
				className="w-full h-full"
				gl={{ alpha: true }}
			>
				<ambientLight intensity={0.4} />
				<directionalLight position={[10, 10, 5]} intensity={1} />
				<pointLight position={[-10, -10, -10]} intensity={0.5} />

				<Suspense fallback={null}>
					<RotatableMolecule />
				</Suspense>

				<Environment preset="city" background={false} />
			</Canvas>
		</div>
	);
}
