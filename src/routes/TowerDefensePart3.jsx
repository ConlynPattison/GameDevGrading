import { useState, useEffect } from "react";
import styles from "./Assignments.module.css"

const TowerDefensePart3 = () => {
	const [sum, setSum] = useState(0);
	const [checked, setChecked] = useState(0);
	const [playlistVal, setPlaylistVal] = useState(0);
	const [navigation, setNavigation] = useState(0);

	useEffect(() => {
		setSum(checked + playlistVal + navigation);
	}, [checked, playlistVal, navigation])

	const handleCheck = (event) => {
		const value = Number(event.target.value);
		setChecked((prevChecked) => prevChecked + (event.target.checked ? value : -value));
	}

	const handlePlaylistVal = (event) => {
		setPlaylistVal(Number(event.target.value));
	}

	const handleNavigation = (event) => {
		setNavigation(Number(event.target.value));
	}

	return (
		<div>
			<header>
				<h1>Grading: Tower Defense Part 3</h1>
			</header>
			<h2>
				Student Name: <input type="text" />
			</h2>
			<section className={styles.column}>
				<h3>Playlist Progress</h3>
				<text>
					Complete everything shown in videos 22 through and including 28 (the end). Your submission should show ONLY what the game looks like after video 28.
				</text>
				<label><input type="number" name="playlist" value={playlistVal} onChange={handlePlaylistVal} min={0} max={10} /> Completion 22 through 28 (end) </label>
			</section>
			<section className={styles.column}>
				<h3>Navigation</h3>
				<text>
					Integrate terrain into the scene. At a minimum, the board should sit on top of a flat part of the terrain and the surrounding area should be geometrically interesting. Ideally, the board should be replaced by terrain so that the tiles are no longer visible but this is not required.
				</text>
				<label><input type="radio" name="navigation" value={10} onChange={handleNavigation} />
					Replace all of the logic that moves enemies such that it uses the navigation system to plot a path a move from the starting point to the destination.
				</label>
				<label><input type="radio" name="navigation" value={5} onChange={handleNavigation} />
					Create new enemies or NPCs that navigate the area around the gameboard using the navigation system.</label>
				<label><input type="radio" name="navigation" value={0} onChange={handleNavigation} />
					No progress on navigation made
				</label>
			</section>
			<section className={styles.column}>
				<h3>Camera Manipulation</h3>
				<text>
					Find a creative way to integrate Cinemachine. Some ideas for inspiration include 1) using an orbit style camera that is controlled by click-dragging the middle mouse button, 2) adding camera shake on explosions, 3) or cut/blend to an up-close shot on defeat (enemy breaks through).
				</text>
				<label><input type="checkbox" name="camera" value={10} onChange={handleCheck} /> Completed </label>
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

export default TowerDefensePart3;