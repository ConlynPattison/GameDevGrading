import { useState, useEffect } from "react";
import styles from "./Assignments.module.css"

const TowerDefensePart1 = () => {
	const [sum, setSum] = useState(0);
	const [checked, setChecked] = useState(0);
	const [playlistVal, setPlaylistVal] = useState(0);

	useEffect(() => {
		setSum(checked + playlistVal);
	}, [checked, playlistVal])

	const handleCheck = (event) => {
		const value = Number(event.target.value);
		setChecked((prevChecked) => prevChecked + (event.target.checked ? value : -value));
	}

	const handlePlaylistVal = (event) => {
		setPlaylistVal(Number(event.target.value));
	}

	return (
		<div>
			<header>
				<h1>Grading: Tower Defense Part 1</h1>
			</header>
			<h2>
				Student Name: <input type="text" />
			</h2>
			<section className={styles.column}>
				<h3>Playlist Progress</h3>
				<text>
					Complete everything shown in videos 1 through and including 7. Your submission should show ONLY what the game looks like after video 7. If you would like to work further in preparation for next week you can, but that should be done on a separate git branch so that we can make a proper assessment.
				</text>
				<label><input type="number" name="playlist" value={playlistVal} onChange={handlePlaylistVal} min={0} max={20} /> Completion 0 to 20 </label>
			</section>
			<section className={styles.column}>
				<h3>Terrain</h3>
				<text>
					Integrate terrain into the scene. At a minimum, the board should sit on top of a flat part of the terrain and the surrounding area should be geometrically interesting. Ideally, the board should be replaced by terrain so that the tiles are no longer visible but this is not required.
				</text>
				<label><input type="checkbox" name="terrain" value={5} onChange={handleCheck} /> Completed </label>
			</section>
			<section className={styles.column}>
				<h3>Baked Lighting</h3>
				<text>
					Use Baked Lighting for Environment
					Lightmaps should be created and used for all static geometry (including the terrain) in a manner similar to what was shown in class. Add additional static meshes to the scene as needed to make this obvious.
				</text>
				<label><input type="checkbox" name="lighting" value={5} onChange={handleCheck} /> Completed </label>
			</section>
			<section className={styles.column}>
				<h3>Git Issues</h3>
				<label><input type="checkbox" name="git" value={-1.5} onChange={handleCheck} /> Invalid GitHub Link </label>
				<label><input type="checkbox" name="git" value={-1.5} onChange={handleCheck} /> Nonfunctional/Empty Repo </label>
			</section>
			<h3>
				TOTAL: {sum}/30
			</h3>
		</div>
	);
}

export default TowerDefensePart1;