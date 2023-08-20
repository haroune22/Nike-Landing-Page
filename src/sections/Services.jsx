import ServiceCard from "../Components/ServiceCard"
import { services } from "../Constants"

const Services = () => {
  return (
    <section className="flex flex-wrap gap-10 max-container justify-center">
          {services.map((service)=>(
            <ServiceCard key={service.label} {...service}/>
          ))}
    </section>
  )
}

export default Services