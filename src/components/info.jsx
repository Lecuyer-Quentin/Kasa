
export default function Info({ title, location, tags }) {
    return (
        <div className="content__header">
                <h1>{title}</h1>
                <h2>{location}</h2>
                <div className="content__header__tags">
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
    )
}