export default function Banner({image, text}) {
    return (
        <div className="banner">
            <img className="banner__image" src={ image } alt=""/>
            <p className="banner__text">{ text }</p>
        </div>
    )
}