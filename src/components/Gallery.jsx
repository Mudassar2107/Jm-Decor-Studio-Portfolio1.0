import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import '../css/Gallery.css';
import ImageSlider from './ImageSlider';
import '../css/ImageSlider.css';

const Gallery = () => {
    const [showSubsections, setShowSubsections] = useState(false);
    const [showEmbossedImages, setShowEmbossedImages] = useState(false);
    const [showEmbroideryImages, setShowEmbroideryImages] = useState(false);
    const [showGoldFoilImages, setShowGoldFoilImages] = useState(false);
    const [showSignageSubsections, setShowSignageSubsections] = useState(false);
    const [showCustomizedSigns, setShowCustomizedSigns] = useState(false);
    const [showNeonSigns, setShowNeonSigns] = useState(false);
    const [showLiquidLetterSigns, setShowLiquidLetterSigns] = useState(false);
    const [showInteriorSubsections, setShowInteriorSubsections] = useState(false);
    const [showStretchCeiling, setShowStretchCeiling] = useState(false);
    const [showJaliCuttings, setShowJaliCuttings] = useState(false);
    const [showExteriorSubsections, setShowExteriorSubsections] = useState(false);
    const [showExteriorACPCladding, setShowExteriorACPCladding] = useState(false);
    const [showNamePlateSubsections, setShowNamePlateSubsections] = useState(false);
    const [showWoodenNamePlates, setShowWoodenNamePlates] = useState(false);
    const [showAcrylicNamePlates, setShowAcrylicNamePlates] = useState(false);
    const [showBrassNamePlates, setShowBrassNamePlates] = useState(false);
    const [showBrassSteelEtching, setShowBrassSteelEtching] = useState(false);
    const [showRoomNumberPlates, setShowRoomNumberPlates] = useState(false);
    const [showPhotoFrameSubsections, setShowPhotoFrameSubsections] = useState(false);
    const [showCustomizedPhotoFrames, setShowCustomizedPhotoFrames] = useState(false);
    const [showWoodenPhotoFrames, setShowWoodenPhotoFrames] = useState(false);
    const [showMetalPhotoFrames, setShowMetalPhotoFrames] = useState(false);
    const [showIslamicDecorSubsections, setShowIslamicDecorSubsections] = useState(false);
    const [showCustomizedIslamicArt, setShowCustomizedIslamicArt] = useState(false);
    const [showWoodenIslamicDecor, setShowWoodenIslamicDecor] = useState(false);
    const [showMetalIslamicDecor, setShowMetalIslamicDecor] = useState(false);

    const toggleSubsections = () => {
        setShowSubsections(!showSubsections);
    };

    const toggleEmbossedImages = () => {
        setShowEmbossedImages(!showEmbossedImages);
    };

    const toggleEmbroideryImages = () => {
        setShowEmbroideryImages(!showEmbroideryImages);
    };

    const toggleGoldFoilImages = () => {
        setShowGoldFoilImages(!showGoldFoilImages);
    };

    const toggleSignageSubsections = () => {
        setShowSignageSubsections(!showSignageSubsections);
    };

    const toggleCustomizedSigns = () => {
        setShowCustomizedSigns(!showCustomizedSigns);
    };

    const toggleNeonSigns = () => {
        setShowNeonSigns(!showNeonSigns);
    };

    const toggleLiquidLetterSigns = () => {
        setShowLiquidLetterSigns(!showLiquidLetterSigns);
    };

    const toggleInteriorSubsections = () => {
        setShowInteriorSubsections(!showInteriorSubsections);
    };

    const toggleStretchCeiling = () => {
        setShowStretchCeiling(!showStretchCeiling);
    };

    const toggleJaliCuttings = () => {
        setShowJaliCuttings(!showJaliCuttings);
    };

    const toggleExteriorSubsections = () => {
        setShowExteriorSubsections(!showExteriorSubsections);
    };

    const toggleExteriorACPCladding = () => {
        setShowExteriorACPCladding(!showExteriorACPCladding);
    };

    const toggleNamePlateSubsections = () => {
        setShowNamePlateSubsections(!showNamePlateSubsections);
    };

    const toggleWoodenNamePlates = () => {
        setShowWoodenNamePlates(!showWoodenNamePlates);
    };

    const toggleAcrylicNamePlates = () => {
        setShowAcrylicNamePlates(!showAcrylicNamePlates);
    };

    const toggleBrassNamePlates = () => {
        setShowBrassNamePlates(!showBrassNamePlates);
    };

    const toggleBrassSteelEtching = () => {
        setShowBrassSteelEtching(!showBrassSteelEtching);
    };

    const toggleRoomNumberPlates = () => {
        setShowRoomNumberPlates(!showRoomNumberPlates);
    };

    const togglePhotoFrameSubsections = () => {
        setShowPhotoFrameSubsections(!showPhotoFrameSubsections);
    };

    const toggleCustomizedPhotoFrames = () => {
        setShowCustomizedPhotoFrames(!showCustomizedPhotoFrames);
    };

    const toggleWoodenPhotoFrames = () => {
        setShowWoodenPhotoFrames(!showWoodenPhotoFrames);
    };

    const toggleMetalPhotoFrames = () => {
        setShowMetalPhotoFrames(!showMetalPhotoFrames);
    };

    const toggleIslamicDecorSubsections = () => {
        setShowIslamicDecorSubsections(!showIslamicDecorSubsections);
    };

    const toggleCustomizedIslamicArt = () => {
        setShowCustomizedIslamicArt(!showCustomizedIslamicArt);
    };

    const toggleWoodenIslamicDecor = () => {
        setShowWoodenIslamicDecor(!showWoodenIslamicDecor);
    };

    const toggleMetalIslamicDecor = () => {
        setShowMetalIslamicDecor(!showMetalIslamicDecor);
    };

    const embossedImages = [
        { src: '/images/wallpaper/embossed/img1.jpg', name: 'Elegant Embossed Design 1' },
        { src: '/images/wallpaper/embossed/img2.jpg', name: 'Elegant Embossed Design 2' },
        { src: '/images/wallpaper/embossed/img3.jpg', name: 'Elegant Embossed Design 3' },
        { src: '/images/wallpaper/embossed/img4.jpg', name: 'Elegant Embossed Design 4' }
    ];

    const embroideryImages = [
        { src: '/images/wallpaper/embroidery/img5.jpg', name: 'Beautiful Embroidery 1' },
        { src: '/images/wallpaper/embroidery/img6.jpg', name: 'Beautiful Embroidery 2' },
        { src: '/images/wallpaper/embroidery/img7.jpg', name: 'Beautiful Embroidery 3' },
        { src: '/images/wallpaper/embroidery/img8.jpg', name: 'Beautiful Embroidery 4' }
    ];

    const goldFoilImages = [
        { src: '/images/wallpaper/goldfoil/img9.jpg', name: 'Gold Foil Design 1' },
        { src: '/images/wallpaper/goldfoil/img10.jpg', name: 'Gold Foil Design 2' },
        { src: '/images/wallpaper/goldfoil/img11.jpg', name: 'Gold Foil Design 3' },
        { src: '/images/wallpaper/goldfoil/img12.jpg', name: 'Gold Foil Design 4' }
    ];

    const customizedSignsImages = [
        { src: '/images/signage/custom/img13.jpg', name: 'Customized Sign 1' },
        { src: '/images/signage/custom/img14.jpg', name: 'Customized Sign 2' },
        { src: '/images/signage/custom/img15.jpg', name: 'Customized Sign 3' },
        { src: '/images/signage/custom/img16.jpg', name: 'Customized Sign 4' }
    ];

    const neonSignsImages = [
        { src: '/images/signage/neon/img17.jpg', name: 'Neon Sign 1' },
        { src: '/images/signage/neon/img18.jpg', name: 'Neon Sign 2' },
        { src: '/images/signage/neon/img19.jpg', name: 'Neon Sign 3' },
        { src: '/images/signage/neon/img20.jpg', name: 'Neon Sign 4' }
    ];

    const liquidLetterSignsImages = [
        { src: '/images/signage/liquid/img21.jpg', name: 'Liquid Letter Sign 1' },
        { src: '/images/signage/liquid/img22.jpg', name: 'Liquid Letter Sign 2' },
        { src: '/images/signage/liquid/img23.jpg', name: 'Liquid Letter Sign 3' },
        { src: '/images/signage/liquid/img24.jpg', name: 'Liquid Letter Sign 4' }
    ];

    const stretchCeilingImages = [
        { src: '/images/interior/ceiling/img25.jpg', name: 'Stretch Ceiling Design 1' },
        { src: '/images/interior/ceiling/img26.jpg', name: 'Stretch Ceiling Design 2' },
        { src: '/images/interior/ceiling/img27.jpg', name: 'Stretch Ceiling Design 3' },
        { src: '/images/interior/ceiling/img28.jpg', name: 'Stretch Ceiling Design 4' }
    ];

    const jaliCuttingsImages = [
        { src: '/images/interior/jali/img29.jpg', name: 'Steel Jali' },
        { src: '/images/interior/jali/img30.jpg', name: 'Wood Plastic Composite Jali' },
        { src: '/images/interior/jali/img31.jpg', name: 'Medium-Density Fiberboard Jali' },
        { src: '/images/interior/jali/img32.jpg', name: 'High-Density High Moisture Resistance Jali' }
    ];

    const exteriorACPCladdingImages = [
        { src: '/images/exterior/acp/img33.jpg', name: 'Exterior ACP Cladding Design 1' },
        { src: '/images/exterior/acp/img34.jpg', name: 'Exterior ACP Cladding Design 2' },
        { src: '/images/exterior/acp/img35.jpg', name: 'Exterior ACP Cladding Design 3' },
        { src: '/images/exterior/acp/img36.jpg', name: 'Exterior ACP Cladding Design 4' }
    ];

    const woodenNamePlatesImages = [
        { src: '/images/nameplates/wooden/img37.jpg', name: 'Wooden Name Plate 1' },
        { src: '/images/nameplates/wooden/img38.jpg', name: 'Wooden Name Plate 2' },
        { src: '/images/nameplates/wooden/img39.jpg', name: 'Wooden Name Plate 3' },
        { src: '/images/nameplates/wooden/img40.jpg', name: 'Wooden Name Plate 4' }
    ];

    const acrylicNamePlatesImages = [
        { src: '/images/nameplates/acrylic/img41.jpg', name: 'Acrylic Name Plate 1' },
        { src: '/images/nameplates/acrylic/img42.jpg', name: 'Acrylic Name Plate 2' },
        { src: '/images/nameplates/acrylic/img43.jpg', name: 'Acrylic Name Plate 3' },
        { src: '/images/nameplates/acrylic/img44.jpg', name: 'Acrylic Name Plate 4' }
    ];

    const brassNamePlatesImages = [
        { src: '/images/nameplates/brass/img45.jpg', name: 'Brass Name Plate 1' },
        { src: '/images/nameplates/brass/img46.jpg', name: 'Brass Name Plate 2' },
        { src: '/images/nameplates/brass/img47.jpg', name: 'Brass Name Plate 3' },
        { src: '/images/nameplates/brass/img48.jpg', name: 'Brass Name Plate 4' }
    ];

    const brassSteelEtchingImages = [
        { src: '/images/nameplates/etching/img49.jpg', name: 'Brass and Steel Etching Name Plate 1' },
        { src: '/images/nameplates/etching/img50.jpg', name: 'Brass and Steel Etching Name Plate 2' },
        { src: '/images/nameplates/etching/img51.jpg', name: 'Brass and Steel Etching Name Plate 3' },
        { src: '/images/nameplates/etching/img52.jpg', name: 'Brass and Steel Etching Name Plate 4' }
    ];

    const roomNumberPlatesImages = [
        { src: '/images/nameplates/room/img53.jpg', name: 'Room Number Plate 1' },
        { src: '/images/nameplates/room/img54.jpg', name: 'Room Number Plate 2' },
        { src: '/images/nameplates/room/img55.jpg', name: 'Room Number Plate 3' },
        { src: '/images/nameplates/room/img56.jpg', name: 'Room Number Plate 4' }
    ];

    const customizedPhotoFramesImages = [
        { src: '/images/frames/custom/img57.jpg', name: 'Customized Photo Frame 1' },
        { src: '/images/frames/custom/img58.jpg', name: 'Customized Photo Frame 2' },
        { src: '/images/frames/custom/img59.jpg', name: 'Customized Photo Frame 3' },
        { src: '/images/frames/custom/img60.jpg', name: 'Customized Photo Frame 4' }
    ];

    const woodenPhotoFramesImages = [
        { src: '/images/frames/wooden/img61.jpg', name: 'Wooden Photo Frame 1' },
        { src: '/images/frames/wooden/img62.jpg', name: 'Wooden Photo Frame 2' },
        { src: '/images/frames/wooden/img63.jpg', name: 'Wooden Photo Frame 3' },
        { src: '/images/frames/wooden/img64.jpg', name: 'Wooden Photo Frame 4' }
    ];

    const metalPhotoFramesImages = [
        { src: '/images/frames/metal/img65.jpg', name: 'Metal Photo Frame 1' },
        { src: '/images/frames/metal/img66.jpg', name: 'Metal Photo Frame 2' },
        { src: '/images/frames/metal/img67.jpg', name: 'Metal Photo Frame 3' },
        { src: '/images/frames/metal/img68.jpg', name: 'Metal Photo Frame 4' }
    ];

    const customizedIslamicArtImages = [
        { src: '/images/islamic/custom/img69.jpg', name: 'Customized Islamic Art 1' },
        { src: '/images/islamic/custom/img70.jpg', name: 'Customized Islamic Art 2' },
        { src: '/images/islamic/custom/img71.jpg', name: 'Customized Islamic Art 3' },
        { src: '/images/islamic/custom/img72.jpg', name: 'Customized Islamic Art 4' }
    ];

    const woodenIslamicDecorImages = [
        { src: '/images/islamic/wooden/img73.jpg', name: 'Wooden Islamic Decor 1' },
        { src: '/images/islamic/wooden/img74.jpg', name: 'Wooden Islamic Decor 2' },
        { src: '/images/islamic/wooden/img75.jpg', name: 'Wooden Islamic Decor 3' },
        { src: '/images/islamic/wooden/img76.jpg', name: 'Wooden Islamic Decor 4' }
    ];

    const metalIslamicDecorImages = [
        { src: '/images/islamic/metal/img77.jpg', name: 'Metal Islamic Decor 1' },
        { src: '/images/islamic/metal/img78.jpg', name: 'Metal Islamic Decor 2' },
        { src: '/images/islamic/metal/img79.jpg', name: 'Metal Islamic Decor 3' },
        { src: '/images/islamic/metal/img80.jpg', name: 'Metal Islamic Decor 4' }
    ];

    return (
        <div className="gallery" id="gallery">
            <h1 data-text="Gallery">Gallery</h1>
            <div className="gallery-sections">
                <h3 
                    className="section-heading" 
                    onClick={toggleSubsections}
                >
                    Wallpaper Solutions
                </h3>
                {showSubsections && (
                    <>
                        <h4 
                            className="subsection-heading"
                            onClick={toggleEmbossedImages}
                        >
                            Customize Embossed Wallpaper
                        </h4>
                        {showEmbossedImages && (
                            <div className="image-section">
                                <ImageSlider images={embossedImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleEmbroideryImages}
                        >
                            Customize Embroidery Wallpaper
                        </h4>
                        {showEmbroideryImages && (
                            <div className="image-section">
                                <ImageSlider images={embroideryImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleGoldFoilImages}
                        >
                            Customize Gold Foil Wallpaper
                        </h4>
                        {showGoldFoilImages && (
                            <div className="image-section">
                                <ImageSlider images={goldFoilImages.map(image => image.src)} />
                            </div>
                        )}
                    </>
                )}

                <h3 
                    className="section-heading" 
                    onClick={toggleSignageSubsections}
                >
                    Signage
                </h3>
                {showSignageSubsections && (
                    <>
                        <h4 
                            className="subsection-heading"
                            onClick={toggleCustomizedSigns}
                        >
                            Customized Signs for Businesses
                        </h4>
                        {showCustomizedSigns && (
                            <div className="image-section">
                                <ImageSlider images={customizedSignsImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleNeonSigns}
                        >
                            Neon Signs
                        </h4>
                        {showNeonSigns && (
                            <div className="image-section">
                                <ImageSlider images={neonSignsImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleLiquidLetterSigns}
                        >
                            Liquid Letter Signage
                        </h4>
                        {showLiquidLetterSigns && (
                            <div className="image-section">
                                <ImageSlider images={liquidLetterSignsImages.map(image => image.src)} />
                            </div>
                        )}
                    </>
                )}

                <h3 
                    className="section-heading" 
                    onClick={toggleInteriorSubsections}
                >
                    Interior Solutions
                </h3>
                {showInteriorSubsections && (
                    <>
                        <h4 
                            className="subsection-heading"
                            onClick={toggleStretchCeiling}
                        >
                            Stretch Ceiling
                        </h4>
                        {showStretchCeiling && (
                            <div className="image-section">
                                <ImageSlider images={stretchCeilingImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleJaliCuttings}
                        >
                            Jali Cuttings
                        </h4>
                        {showJaliCuttings && (
                            <div className="image-section">
                                <ImageSlider images={jaliCuttingsImages.map(image => image.src)} />
                            </div>
                        )}
                    </>
                )}

                <h3 
                    className="section-heading" 
                    onClick={toggleExteriorSubsections}
                >
                    Exterior Solutions
                </h3>
                {showExteriorSubsections && (
                    <>
                        <h4 
                            className="subsection-heading"
                            onClick={toggleExteriorACPCladding}
                        >
                            Exterior ACP Cladding
                        </h4>
                        {showExteriorACPCladding && (
                            <div className="image-section">
                                <ImageSlider images={exteriorACPCladdingImages.map(image => image.src)} />
                            </div>
                        )}
                    </>
                )}

                <h3 
                    className="section-heading" 
                    onClick={toggleNamePlateSubsections}
                >
                    Name Plates
                </h3>
                {showNamePlateSubsections && (
                    <>
                        <h4 
                            className="subsection-heading"
                            onClick={toggleWoodenNamePlates}
                        >
                            Wooden Name Plates
                        </h4>
                        {showWoodenNamePlates && (
                            <div className="image-section">
                                <ImageSlider images={woodenNamePlatesImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleAcrylicNamePlates}
                        >
                            Acrylic Name Plates
                        </h4>
                        {showAcrylicNamePlates && (
                            <div className="image-section">
                                <ImageSlider images={acrylicNamePlatesImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleBrassNamePlates}
                        >
                            Brass Name Plates
                        </h4>
                        {showBrassNamePlates && (
                            <div className="image-section">
                                <ImageSlider images={brassNamePlatesImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleBrassSteelEtching}
                        >
                            Brass and Steel Etching Name Plates
                        </h4>
                        {showBrassSteelEtching && (
                            <div className="image-section">
                                <ImageSlider images={brassSteelEtchingImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleRoomNumberPlates}
                        >
                            Room Number Plates
                        </h4>
                        {showRoomNumberPlates && (
                            <div className="image-section">
                                <ImageSlider images={roomNumberPlatesImages.map(image => image.src)} />
                            </div>
                        )}
                    </>
                )}

                <h3 
                    className="section-heading" 
                    onClick={togglePhotoFrameSubsections}
                >
                    Photo Frames
                </h3>
                {showPhotoFrameSubsections && (
                    <>
                        <h4 
                            className="subsection-heading"
                            onClick={toggleCustomizedPhotoFrames}
                        >
                            Customized Photo Frames
                        </h4>
                        {showCustomizedPhotoFrames && (
                            <div className="image-section">
                                <ImageSlider images={customizedPhotoFramesImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleWoodenPhotoFrames}
                        >
                            Wooden Photo Frames
                        </h4>
                        {showWoodenPhotoFrames && (
                            <div className="image-section">
                                <ImageSlider images={woodenPhotoFramesImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleMetalPhotoFrames}
                        >
                            Metal Photo Frames
                        </h4>
                        {showMetalPhotoFrames && (
                            <div className="image-section">
                                <ImageSlider images={metalPhotoFramesImages.map(image => image.src)} />
                            </div>
                        )}
                    </>
                )}

                <h3 
                    className="section-heading" 
                    onClick={toggleIslamicDecorSubsections}
                >
                    Islamic Decor
                </h3>
                {showIslamicDecorSubsections && (
                    <>
                        <h4 
                            className="subsection-heading"
                            onClick={toggleCustomizedIslamicArt}
                        >
                            Customized Islamic Art
                        </h4>
                        {showCustomizedIslamicArt && (
                            <div className="image-section">
                                <ImageSlider images={customizedIslamicArtImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleWoodenIslamicDecor}
                        >
                            Wooden Islamic Decor
                        </h4>
                        {showWoodenIslamicDecor && (
                            <div className="image-section">
                                <ImageSlider images={woodenIslamicDecorImages.map(image => image.src)} />
                            </div>
                        )}

                        <h4 
                            className="subsection-heading"
                            onClick={toggleMetalIslamicDecor}
                        >
                            Metal Islamic Decor
                        </h4>
                        {showMetalIslamicDecor && (
                            <div className="image-section">
                                <ImageSlider images={metalIslamicDecorImages.map(image => image.src)} />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Gallery;
