import { useState, useEffect } from "react";
import styles from "./Assignments.module.css"

const SpaceInvadersPart1 = () => {
	const [sum, setSum] = useState(0);
	const [extra, setExtra] = useState(0);
	const [checked, setChecked] = useState(0);
	const [scoreVal, setScoreVal] = useState(0);

	useEffect(() => {
		setSum(checked + extra + scoreVal);
	}, [checked, extra, scoreVal])

	const handleExtraChange = (event) => {
		setExtra(Number(event.target.value));
	}

	const handleCheck = (event) => {
		const value = Number(event.target.value);
		setChecked((prevChecked) => prevChecked + (event.target.checked ? value : -value));
	}

	const handleScoreVal = (event) => {
		setScoreVal(Number(event.target.value));
	}

	return (
		<div>
			<header>
				<h1>Grading: Space Invaders Part 1</h1>
			</header>
			<h2>
				Student Name: <input type="text" />
			</h2>
			<section className={styles.column}>
				<h3>GUI</h3>
				<text>Implement the GUI on the of the picture below and keep track of the score of the player. The high score for that session will need to be implemented as well.</text>
				<label><input type="checkbox" name="gui" value={3} onChange={handleCheck} /> Keeping track of the current score </label>
				<label><input type="checkbox" name="gui" value={5} onChange={handleCheck} /> Keeping track of the session's high score (instead of when you restart the app it goes back to 0) </label>
				<label><input type="checkbox" name="gui" value={2} onChange={handleCheck} /> Format the string of numbers to give leading zeros when the score hasn't gotten there yet (i.e, 0040 vs 40) </label>
			</section>
			<section className={styles.column}>
				<h3>Scoring</h3>
				<text>Implement a scoring system (can be the one featured above) that has different values depending on the enemy that you kill (4 different types). </text>
				<label><input type="number" name="score" value={scoreVal} onChange={handleScoreVal} min={0} max={10} step={2.5} />  </label>
			</section>
			<section className={styles.column}>
				<h3>Space Invader Logic</h3>
				<text>The enemies are on a continuous path towards intercepting the player (sideways and down), the enemy (as a group) speeds up when there are fewer enemies as you destroy them with your bullets, and you have a barricade that gets smaller in size as bullets hit it. </text>
				<label><input type="checkbox" name="logic" value={2} onChange={handleCheck} /> Enemies continuous travel towards the player (not directly straight at the player) </label>
				<label><input type="checkbox" name="logic" value={2} onChange={handleCheck} /> Enemies as a group speed up as more are destroyed </label>
				<label><input type="checkbox" name="logic" value={2} onChange={handleCheck} /> Your bullets destroy the enemy and your barricade if you hit it </label>
				<label><input type="checkbox" name="logic" value={2} onChange={handleCheck} /> Enemies periodically fire bullets that kill you (right now it can be any enemy on the screen) </label>
				<label><input type="checkbox" name="logic" value={2} onChange={handleCheck} /> Enemies bullets can destroy your barricades </label>
			</section>

			<section className={styles.column}>
				<h3>Extra</h3>
				<text>Make it feel good.</text>
				<input className={styles.open} type="number" value={extra} max={5} min={0} onChange={handleExtraChange} />
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

export default SpaceInvadersPart1;