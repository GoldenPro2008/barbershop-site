function Services({nom , prix}) {
    return (
        <div className="service-card">
            <h3>{nom}</h3>
            <p>{prix} DH</p>
        </div>
    )
}
export default Services