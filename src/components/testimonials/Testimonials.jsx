import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jfif';
import AVTR2 from '../../assets/avatar2.jfif';
import AVTR3 from '../../assets/avatar3.jfif';
import AVTR4 from '../../assets/avatar4.jfif';

const data = [
  {
    avatar: Avt1,
    name: 'Snow White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: Avt2,
    name: 'Snow White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: Avt3,
    name: 'Snow White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: Avt4,
    name: 'Snow White',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const Testimonials = () => {
  return (
    <section id ='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article className="testimonial">
                <div className="client_avatar">
                  <img src ={avatar}/>
                </div>
                  <h5 className="client_name">{name}</h5>
                  <small className="client_review">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sequi distinctio nemo iste possimus eos reiciendis ut. Dicta repudiandae sed mollitia eum, quos laboriosam? Alias porro dignissimos odit tempore reiciendis?
                  </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials;
