import { useState, useEffect } from "react";
import styles from "./Assignments.module.css"

const SpaceInvadersPart2 = () => {
	const [sum, setSum] = useState(0);
	const [extra, setExtra] = useState(0);
	const [checked, setChecked] = useState(0);

	useEffect(() => {
		setSum(checked + extra);
	}, [checked, extra])

	const handleExtraChange = (event) => {
		setExtra(Number(event.target.value));
	}

	const handleCheck = (event) => {
		const value = Number(event.target.value);
		setChecked((prevChecked) => prevChecked + (event.target.checked ? value : -value));
	}

	return (
		<div>
			<header>
				<h1>Grading: Space Invaders Part 2</h1>
			</header>
			<h2>
				Student Name: <input type="text" />
			</h2>
			<section className={styles.column}>
				<h3>Scenes</h3>
				<text>Implement three scenes and switch between them (should be handled in a “Game Manager” class and use “DontDestroyOnLoad”)</text>
				<label><input type="checkbox" name="scenes" value={3} onChange={handleCheck} /> Start button takes from Main Menu to Main Game scene </label>
				<label><input type="checkbox" name="scenes" value={3} onChange={handleCheck} /> Start screen has enemies with their idle animations </label>
				<label><input type="checkbox" name="scenes" value={3} onChange={handleCheck} /> Have Main Game transition to credits scene after dying </label>
				<label><input type="checkbox" name="scenes" value={1} onChange={handleCheck} /> Have credits scene play for 5 seconds then switch back to Main Menu </label>
			</section>
			<section className={styles.column}>
				<h3>Animations</h3>
				<text> Animate 2D objects with animations (2 or more sprites each) </text>
				<label><input type="checkbox" name="animations" value={2} onChange={handleCheck} /> Idle player animation </label>
				<label><input type="checkbox" name="animations" value={2} onChange={handleCheck} /> Shooting player animation </label>
				<label><input type="checkbox" name="animations" value={2} onChange={handleCheck} /> Exploding player animation </label>
				<label><input type="checkbox" name="animations" value={2} onChange={handleCheck} /> Enemy idle animation </label>
				<label><input type="checkbox" name="animations" value={2} onChange={handleCheck} /> Exploding enemy animation </label>
			</section>
			<section className={styles.column}>
				<h3>Sound</h3>
				<label><input type="checkbox" name="sound" value={1} onChange={handleCheck} /> Shooting sound for Player </label>
				<label><input type="checkbox" name="sound" value={1} onChange={handleCheck} /> Shooting sound for Enemy </label>
				<label><input type="checkbox" name="sound" value={1} onChange={handleCheck} /> Blow up sound for Player </label>
				<label><input type="checkbox" name="sound" value={1} onChange={handleCheck} /> Blow up sound for Enemy </label>
				<label><input type="checkbox" name="sound" value={1} onChange={handleCheck} /> Background music/sounds </label>
			</section>
			<section className={styles.column}>
				<h3>Particle Effects</h3>
				<label><input type="checkbox" name="particle-effects" value={5} onChange={handleCheck} /> Added particle effects where they fit </label>
			</section>
			{/* <section className={styles.column}>
				<h3>Extra</h3>
				<text>Make it feel good.</text>
				<input className={styles.open} type="number" value={extra} max={5} min={0} onChange={handleExtraChange} />
			</section> */}
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

export default SpaceInvadersPart2;