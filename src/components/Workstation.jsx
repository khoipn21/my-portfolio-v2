import { useGLTF } from "@react-three/drei";

function Workstation(props) {
	const { nodes, materials } = useGLTF("/models/weathered_workstation.glb");
	return (
		<group
			{...props}
			dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_2.geometry}
					material={materials.desk}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_3.geometry}
					material={materials.wire_224198087}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/models/weathered_workstation.glb");
export default Workstation;
