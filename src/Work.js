import React, { Component } from 'react';
import MyRewolf from './images/MyRewolfShot.png';
import Binaural from './images/binaural-screenshot.png';
import SpacedRepetition from './images/SpacedRepetition.png';

export default class Work extends Component {
	render() {
		return (
			<section>
				<h2>My work</h2>
				<p>Here are examples of some of the work that I have done.</p>
				<div>
					<h3>MyRewolf</h3>
					<img src={MyRewolf} alt="MyRewolf" />
					<p>
						MyRewolf is an app that was created for a creative agency. It allows
						their customers to answer their discovery questionnaire so Rewolf
						can work towards helping the clients with their social media needs.
					</p>
					<h4>Tech Stack:</h4>
					<p>Front-End was built using React</p>
					<p>Back-End was built using Node, Express, and PostgreSQL</p>
					<p>The links for this application are: </p>
					<p>
						<a href="https://github.com/karstentaylor/myrewolf-client.git">
							GitHub
						</a>
						<p>
							<a href="https://rewolf-client.vercel.app ">Live App</a>
						</p>
					</p>
				</div>
				<div>
					<h3>Spaced-Repetition</h3>
					<img src={SpacedRepetition} alt="SpacedRepetition" />
					<p>
						This Spaced-Repetition application was built using a linked list and
						the spaced repetition algorithm to help users learn to count to ten
						in German. Created for those who have an interest in beginning to
						learn a new language.
					</p>
					<h4>Tech Stack:</h4>
					<p>Front-End: React</p>
					<p>Back-End: Node, Express, PostgreSQL</p>
					<p>The links to this project are:</p>
					<p>
						<a href="https://github.com/karstentaylor/spaced-repetition.git">
							GitHub
						</a>
						<p>
							<a href="https://spaced-repetition-sand.vercel.app">Live App</a>
						</p>
					</p>
				</div>
				<div>
					<h3>Binaural</h3>
					<img src={Binaural} alt="Binaural" />
					<p>
						This app was created to help the user achieve an altered state of
						consciousness through the use of binaural beats. It ties in with a
						visualizer that enhances the experience for users.
					</p>
					<h4>Tech Stack:</h4>
					<p>Front-End: React, Web-Audio API, Sine Waves </p>
					<p>Back-End: Node, Express, PostgreSQL</p>
					<p>
						<a href="https://github.com/thinkful-ei-panda/binaural-client.git">
							GitHub
						</a>
						<p>
							<a href="https://binaural-client.vercel.app/">Live App</a>
						</p>
					</p>
				</div>
			</section>
		);
	}
}
