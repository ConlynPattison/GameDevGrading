import { useState, useEffect } from "react";
import styles from "./Assignments.module.css"

const PlatformerPart2 = () => {
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
				<h1>Grading: Platformer Part 2</h1>
			</header>
			<h2>
				Student Name: <input type="text" />
			</h2>
			<section className={styles.column}>
				<h3>Level Parser</h3>
				<label><input type="checkbox" name="parser" value={3} onChange={handleCheck} /> Add a prefab that can be parsed (e.g. water) that the player will have to avoid  </label>
				<label><input type="checkbox" name="parser" value={3} onChange={handleCheck} /> Add a prefab that can be parsed for the 'goal' where the player will be able to finish the level. </label>
				<label><input type="checkbox" name="parser" value={4} onChange={handleCheck} /> Construct a new custom level </label>
			</section>
			<section className={styles.column}>
				<h3>Animations</h3>
				<h4>State Machine</h4>
				<label><input type="checkbox" name="animations" value={4} onChange={handleCheck} /> Create an animated player with idle and moving states that transition smoothly </label>
				<h4>Mapped Inputs</h4>
				<text>Map the following inputs that will alter the animator state machine: </text>
				<label><input type="checkbox" name="animations-mapped" value={2} onChange={handleCheck} /> Left, Right arrows (movement) </label>
				<label><input type="checkbox" name="animations-mapped" value={2} onChange={handleCheck} /> Shift (turbo) </label>
				<label><input type="checkbox" name="animations-mapped" value={2} onChange={handleCheck} /> Space Bar (jump) </label>
			</section>
			<section className={styles.column}>
				<h3>GUI</h3>
				<text>Keeping track of points, coins, time left in the level</text>
				<label><input type="checkbox" name="gui" value={4} onChange={handleCheck} /> Give the player 100 seconds to clear the level, if they don’t then write either to the Debug.Log that the player failed or show a message on the screen that the player failed </label>
				<label><input type="checkbox" name="gui" value={3} onChange={handleCheck} /> Give the player 100 points for every brick that is destroyed (destroyed by the 3D model jumping into the brick) </label>
				<label><input type="checkbox" name="gui" value={3} onChange={handleCheck} /> Give the player 100 points and credit for 1 coin for every coin collected </label>
			</section>
			<section className={styles.column}>
				<h3>Extra</h3>
				<input className={styles.open} type="number" value={extra} max={5} min={0} onChange={handleExtraChange} />
				<ul>
					<li>+1 Add apex modifiers</li>
					<li>+1 Coyote Time</li>
					<li>+1 Add jump buffering (> 1 frame or within 67ms)</li>
					<li>+3 Add edge detection and nudging</li>
					<li>+1 Add a movement feature from a platformer you like (e.g. Hollow Knight)</li>
					<li>Other creative twists</li>
				</ul>
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

export default PlatformerPart2;