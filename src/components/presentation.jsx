
export default function Presentation({ background, text }) {
    return (

        <div className="presentation">
            <img src={background} alt="background" />
            <span className="windows"></span>
            <p>{text}</p>
        </div> 
    )
 }