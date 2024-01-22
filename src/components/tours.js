import Title from "./title";
import ToursDetail from "./toursdetail";
import {tours} from '../data'

const Tours = () => {
    return (
        <section className="section" id="tours">
           <Title title = 'Future' subTitle = 'Tours' />
    
        <div className="section-center featured-center">
          {
            tours.map((tour) =>{
              return(
                <ToursDetail image = {tour.image} title = {tour.title} info = {tour.info} date = {tour.date} duration={tour.duration} location={tour.location} cost={tour.cost} />
              )
            })
          }
        </div>
      </section>
     )
}
export default Tours;