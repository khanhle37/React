import { ourServices } from "../data";
const ServicesDetails = ({icon,title,description})=>{
    return (
        <article className="service">
        <span className="service-icon"><i className={icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">
            {description}
          </p>
        </div>
      </article>
    )
}
export default ServicesDetails