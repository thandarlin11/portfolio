import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jfif';
import AVTR2 from '../../assets/avatar2.jfif';
import AVTR3 from '../../assets/avatar3.jfif';
import AVTR4 from '../../assets/avatar4.jfif';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Snow White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR2,
    name: 'Snow White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR3,
    name: 'Snow White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR4,
    name: 'Snow White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const Testimonials = () => {
  return (
    <section id ='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"  
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src ={avatar}/>
                </div>
                  <h5 className="client_name">{name}</h5>
                  <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;
