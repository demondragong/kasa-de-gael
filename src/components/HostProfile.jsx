export default function HostProfile({name, picture}) {
    return (
        <div className="host">
            <div className="host__name">
                {name}
            </div>
            <img className="host__picture" src={picture} alt="host" />
        </div>
    )
}