import React, { useState, useEffect } from 'react';
import '../css/About.css';
import ownerImage from '../images/owner.jpg';

// Sample client images array
const clientImages = [
    { src: require('../images/img81.jpg'), name: 'American Tourister' },
    { src: require('../images/img82.jpg'), name: 'Samsonite' },
    { src: require('../images/img83.jpg'), name: 'Suzuki' },
    { src: require('../images/img84.jpg'), name: 'Hero Bikes' },
    { src: require('../images/img85.jpg'), name: 'Harley-Davidson' },
    { src: require('../images/img86.jpg'), name: 'Vee Couture' },
    { src: require('../images/img87.jpg'), name: 'Hoorayen' },
    { src: require('../images/img88.jpg'), name: 'Karims' },
];

// Sample machines array with images and descriptions
const machinesInfo = [
    { src: require('../images/img89.jpg'), name: 'Solvent Printing Machine', description: 'Our solvent printing machine utilizes eco-friendly inks to produce vibrant, high-quality prints on various materials.' },
    { src: require('../images/img90.jpg'), name: 'Eco Solvent Printing Machine', description: 'This energy-efficient printer uses mild solvents, reducing environmental impact. It delivers photo-realistic prints on flexible materials for applications like banners, stickers, and vehicle wraps.' },
    { src: require('../images/img91.jpg'), name: 'HP Latex Printer', description: 'High-quality, water-based latex ink printer for indoor/outdoor prints on paper, film, and textiles. Perfect for signage, graphics, and decorative applications.' },
    { src: require('../images/img92.jpg'), name: 'UV Printer', description: 'Our UV printer uses ultraviolet curing technology to produce instant dry, high-resolution prints on diverse materials. Suitable for promotional items, labels, and packaging.' },
    { src: require('../images/img93.jpg'), name: 'CNC Router', description: 'Computer-controlled cutting machine for precision cutting, engraving, and shaping wood, plastic, metal, and foam. Ideal for custom signs, furniture, and architectural elements.' },
    { src: require('../images/img94.jpg'), name: 'Fibre Laser', description: 'High-precision laser cutting and engraving machine for metal, plastic, and wood. Accurately cuts intricate designs and shapes for various industries.' },
    { src: require('../images/img95.jpg'), name: 'Channel Bending Machine', description: 'Automated machine for bending and shaping metal channels for signage, display stands, and construction projects.' },
    { src: require('../images/img96.jpg'), name: 'Liquid Pouring Machine', description: 'Efficient machine for precise pouring of liquids into molds for casting and prototyping applications.' },
    { src: require('../images/img97.jpg'), name: 'Plotter Cutting Machine', description: 'Precise cutting machine for vinyl, paper, and film, ideal for sign-making, graphics, and sticker production.' },
];

const About = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showClients, setShowClients] = useState(false);
    const [showMachines, setShowMachines] = useState(false); // State for toggling machines section
    const [showMachineDetails, setShowMachineDetails] = useState(Array(machinesInfo.length).fill(false)); // State for each machine detail

    // Scroll to top of About section when the page loads
    useEffect(() => {
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth',
        });
    }, []);

    const openLightbox = (src) => {
        setSelectedImage(src);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const toggleClients = () => {
        setShowClients(!showClients);
    };

    const toggleMachines = () => {
        setShowMachines(!showMachines); // Toggle visibility of machines section
    };

    const toggleMachineDetails = (index) => {
        const updatedDetails = [...showMachineDetails];
        updatedDetails[index] = !updatedDetails[index];
        setShowMachineDetails(updatedDetails);
    };

    return (
        <div className="about" id="about">
            <h2 className="about-title">About Us</h2>
            <div className="owner-section">
                <h3 className="owner-title">Founder</h3>
                <div className="owner-content">
                    <img src={ownerImage} alt="Owner" className="owner-image" />
                    <blockquote className="owner-quote">
                        "Juned Islam is a true entrepreneur at heart. With a vision to revolutionize the signage and wallcovering industry, Juned founded JM DECOR STUDIO PVT LTD with a commitment to innovation, quality, and customer satisfaction."
                    </blockquote>
                </div>
            </div>
            <div className="clients-section">
                <h3 className="clients-title" onClick={toggleClients} style={{ cursor: 'pointer' }}>Clients</h3>
                {showClients && (
                    <div className="gallery-grid">
                        {clientImages.map((image, index) => (
                            <div key={index} className="gallery-item" onClick={() => openLightbox(image.src)}>
                                <img src={image.src} alt={image.name} />
                                <p className="image-name">{image.name}</p>
                            </div>
                        ))}
                    </div>
                )}
                <blockquote className="clients-quote">
                    These partnerships demonstrate our commitment to quality, innovation, and customer satisfaction. At JM Decor Studio, we strive to exceed expectations and create breathtaking spaces for our discerning clients.
                </blockquote>
            </div>
            <div className="machines-section">
                <h3 className="machines-title" onClick={toggleMachines} style={{ cursor: 'pointer' }}>Our Machines</h3>
                {showMachines && ( // Conditionally render the machines section
                    <div className="machines-info">
                        <div className="gallery-grid">
                            {machinesInfo.map((machine, index) => (
                                <div key={index} className="machine-item">
                                    <h4 className="subsection-heading" onClick={() => toggleMachineDetails(index)} style={{ cursor: 'pointer' }}>
                                        {machine.name}
                                    </h4>
                                    {showMachineDetails[index] && (
                                        <div className="machine-details">
                                            <img src={machine.src} alt={machine.name} />
                                            <p>{machine.description}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <blockquote className="machines-quote">
                            These machines enable us to deliver top-notch services in printing, cutting, and fabrication for diverse industries.
                        </blockquote>
                    </div>
                )}
            </div>

            {selectedImage && (
                <div className="lightbox">
                    <div className="lightbox-content">
                        <img src={selectedImage} alt="Selected" className="lightbox-image" />
                        <button className="close-button" onClick={closeLightbox}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
