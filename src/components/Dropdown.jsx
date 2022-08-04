export default function Dropdown({title, content}) {   
    return (
        <div className="dropdown">
            <div className="dropdown__title">{title}</div>
            <div className="dropdown__content">{content}</div>
        </div>
    )
}