import React from 'react';

// Components
import Navigation from '../../components/Navigation/Navigation';
import Button from '../../components/Button/Button';
import Testimonial from '../../components/Testimonial/Testimonial';
import Partnership from '../../components/Partnership/Partnership';
import Question from '../../components/Question/Question';
import Footer from '../../components/Footer/Footer';

// CSS files
import '../global.css';
import './Home.css';

// Images
import aboutImage from '../../assets/about-image.png';
import detailedAboutImage from '../../assets/detailed-about-image.png';
import iconPlaceholder from '../../assets/icon-placeholder.png';
import backendNews from '../../assets/orgs/backend-news.png';
import dostAsti from '../../assets/orgs/dost-asti.png';
import dostPcieerd from '../../assets/orgs/dost-pcieerd.png';
import ibmQuantum from '../../assets/orgs/ibm-quantum.png';
import msuIitCcs from '../../assets/orgs/msu-iit-ccs-ec.png';
import qil from '../../assets/orgs/qil.png';
import usc from '../../assets/orgs/usc.png';

// Data files to display
import { testimonialData } from '../../data/testimonialData';
import { partnershipData } from '../../data/partnershipData';
import { questionData } from '../../data/questionData';

function Home() {
	return (
		<div className='home-container'>
			<Navigation />

			<div className='background'></div>

			{/* ==== Hero Section ==== */}
			<div className='hero section'>
				<h1>OneQuantum Philippines</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<div className='hero-cta'>
					<Button text='Join Us' color='gradient' target='collaboration' />
					<Button text='Learn More' color='outline' target='about' />
				</div>
			</div>

			{/* ==== Credibility Section ==== */}
			<div className='credibility center width'>
				{/* Partnered Orgs */}
				<div className='partnered-orgs'>
					<p>Our nationwide programs are made possible through the support of:</p>
					<div className='orgs'>
						<div className='orgs-carousel'>
							<img className='orgs-logo' src={backendNews} alt='logo' />
							<img className='orgs-logo' src={dostAsti} alt='logo' />
							<img className='orgs-logo' src={dostPcieerd} alt='logo' />
							<img className='orgs-logo' src={ibmQuantum} alt='logo' />
							<img className='orgs-logo' src={msuIitCcs} alt='logo' />
							<img className='orgs-logo' src={qil} alt='logo' />
							<img className='orgs-logo' src={usc} alt='logo' />
						</div>
						<div className='orgs-carousel'>
							<img className='orgs-logo' src={backendNews} alt='logo' />
							<img className='orgs-logo' src={dostAsti} alt='logo' />
							<img className='orgs-logo' src={dostPcieerd} alt='logo' />
							<img className='orgs-logo' src={ibmQuantum} alt='logo' />
							<img className='orgs-logo' src={msuIitCcs} alt='logo' />
							<img className='orgs-logo' src={qil} alt='logo' />
							<img className='orgs-logo' src={usc} alt='logo' />
						</div>
					</div>
					
				</div>

				<div className='testimonials'>
					<div className='testimonial-text'>
						<p className='caption'>Testimonials</p>
						<h2>Lorem Ipsum Dolor Sit</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
					</div>
					<div className='testimonial-cards'>
						{
							testimonialData.map((data, index) =>
								<Testimonial data={ data } key={ index } />
							)
						}
					</div>
				</div>
			</div>

			{/* ==== About Section ==== */}
			<div className='two-column section width' id='about'>
				{/* About Image */}
				<div className='column-1'><img src={ aboutImage } alt='About OneQuantum Philippines' /></div>
				{/* About Text */}
				<div className='about-text column-2'>
					<p className='caption'>About Us</p>
					<h2>OneQuantum Philippines</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div className='about-details'>
						<div className='about-details-content' >
							<img className='icon' src={iconPlaceholder} alt='icon' />
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className='about-details-content' >
							<img className='icon' src={iconPlaceholder} alt='icon' />
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className='about-details-content' >
							<img className='icon' src={iconPlaceholder} alt='icon' />
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					<Button text='Join Us' color='gradient' target='collaboration' />
				</div>
			</div>

			{/* ==== Detailed About Section ==== */}
			<div className='center detailed-about-section width'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				{/* 3-Column Section */}
				<div className='three-column'>
					{/* 1st Column */}
					<div className='detailed-about-column text'>
						<div className='detailed-about-point'>
							{/* Icon Here */}
							<img className='icon' src={iconPlaceholder} alt='icon' />
							<p>Lorem Ipsum</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className='detailed-about-point'>
							{/* Icon Here */}
							<img className='icon' src={iconPlaceholder} alt='icon' />
							<p>Lorem Ipsum</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					{/* 2nd Column */}
					<div className='detailed-about-column'>
						<img className='detailed-about-image' src={ detailedAboutImage } alt='About OneQuantum Philippines' />
					</div>
					{/* 3rd Column */}
					<div className='detailed-about-column text'>
						<div className='detailed-about-point'>
							{/* Icon Here */}
							<img className='icon' src={iconPlaceholder} alt='icon' />
							<p>Lorem Ipsum</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className='detailed-about-point'>
							{/* Icon Here */}
							<img className='icon' src={iconPlaceholder} alt='icon' />
							<p>Lorem Ipsum</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
				</div>
			</div>

			{/* ==== Collaboration Section ==== */}
			<div className='collaboration section width' id='collaboration'>
				<p className='caption'>Collaborations</p>
				<h2 className='title'>Help us bring world-class programs nationwide:</h2>
				{/* Partnership CTAs */}
				<div className='partnership-container'>
					{
						partnershipData.map((data, index) => 
							<Partnership data={ data } key={ index } />
						)
					}
				</div>
			</div>

			{/* ==== FAQs ==== */}
			<div className='questions section width'>
				<p className='caption'>Frequently Asked Questions</p>
				<h2 className='title'>FAQs</h2>
				<Question questions={questionData}/>
			</div>

			<Footer />

		</div>
	);
};

export default Home;