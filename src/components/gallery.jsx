import Card from "./card"

export default function Gallery({ galleryData, onUpdate }) {

    return (
        <div className="gallery">
            {galleryData.map((cardData, index) => (
                <Card key={index} cardData={cardData} update={onUpdate} />
            ))}
        </div>
    )        
 }