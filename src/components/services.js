import Title from "./title";
import { ourServices } from "../data";
import ServicesDetails from "./servicesdetails";
const Services = () => {
    return ( 
        <section className="section services" id="services">
          <Title title = 'Our' subTitle = 'Services' />
        <div className="section-center services-center">
        {ourServices.map((ourService)=>{
          return (
            <ServicesDetails icon = {ourService.icon} title = {ourService.title} description={ourService.description} />
          )
        })}
        </div>
      </section>
    )
}
export default Services;