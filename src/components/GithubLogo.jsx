import { Float, useGLTF } from "@react-three/drei";

function GithubLogo(props) {
	const { nodes, materials } = useGLTF("/models/github.glb");

	return (
		<Float floatIntensity={2}>
			<group
				{...props}
				dispose={null}>
				<group
					position={[-0.055, 2.945, 6.336]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={28.364}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_4.geometry}
						material={materials.glossy_putih}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_5.geometry}
						material={materials.github}
					/>
				</group>
			</group>
		</Float>
	);
}

useGLTF.preload("/models/github.glb");

export default GithubLogo;
