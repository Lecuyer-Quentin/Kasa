import React from "react";
import Gallery from "../../components/gallery";
import Presentation from "../../components/presentation";
import Loader from "../../components/loader";

export default function Home({homeData, image, presentationText, onDataUpdate}) {
    return (
        <>
            <Loader />
            <Presentation background={image} text={presentationText} />
            <Gallery galleryData={homeData} onUpdate={onDataUpdate} />
        </>
    )
 }