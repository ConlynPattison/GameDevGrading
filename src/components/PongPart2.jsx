import { useState, useEffect } from "react";
import styles from "./Assignments.module.css"

const PongPart2 = () => {
	const [sum, setSum] = useState(0);
	const [sound, setSound] = useState(0);
	const [power, setPower] = useState(0);
	const [scoring, setScoring] = useState(0);
	const [extra, setExtra] = useState(0);
	const [invalid, setInvalid] = useState(0);

	useEffect(() => {
		setSum(sound + power + scoring + extra + invalid);
	}, [sound, power, scoring, extra, invalid])

	const handleSoundChange = (event) => {
		setSound(Number(event.target.value));
	};

	const handlePowerChange = (event) => {
		setPower(Number(event.target.value));
	}

	const handleScoringChange = (event) => {
		setScoring(Number(event.target.value));
	}

	const handleExtraChange = (event) => {
		setExtra(Number(event.target.value));
	}

	const handleInvalid = (event) => {
		const value = Number(event.target.value);
		setInvalid((prevInvalid) => prevInvalid + (event.target.checked ? value : -value));
	}

	return (
		<div>
			<section className={styles.column}>
				<h3>Sound</h3>
				<label><input type="radio" name="sound" value={7} onChange={handleSoundChange} /> One Paddle Sound </label>
				<label><input type="radio" name="sound" value={10} onChange={handleSoundChange} /> Effectful Sound Effects </label>
			</section>
			<section className={styles.column}>
				<h3>Power Ups</h3>
				<label><input type="radio" name="power" value={5} onChange={handlePowerChange} /> One Modifier </label>
				<label><input type="radio" name="power" value={10} onChange={handlePowerChange} /> Two Modifiers </label>
			</section>
			<section className={styles.column}>
				<h3>Scoring</h3>
				<label><input type="radio" name="scoring" value={5} onChange={handleScoringChange} /> Show Incrementing Score </label>
				<label><input type="radio" name="scoring" value={10} onChange={handleScoringChange} /> Effectful Score Change </label>
			</section>
			<section className={styles.column}>
				<h3>Extra</h3>
				<input className={styles.open} type="number" value={extra} max={5} min={0} onChange={handleExtraChange} />
			</section>
			<section className={styles.column}>
				<h3>Git Issues</h3>
				<label><input type="checkbox" name="git" value={-1.5} onChange={handleInvalid} /> Invalid GitHub Link </label>
				<label><input type="checkbox" name="git" value={-1.5} onChange={handleInvalid} /> Nonfunctional/Empty Repo </label>
			</section>
			<h3>
				TOTAL: {sum}/30
			</h3>
		</div>
	);
}

export default PongPart2;