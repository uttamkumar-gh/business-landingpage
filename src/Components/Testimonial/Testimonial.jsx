import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Testimonial.css'

import teamOne from '../../assets/images/img_1.jpg'
import teamTwo from '../../assets/images/img_2.png'
import teamThree from '../../assets/images/img_3.png'
import quoteIcon from '../../assets/icons/quote-icon.svg'

import { Pagination } from 'swiper/modules'

const testimonials = [
  {
    quoteIcon: `${quoteIcon}`,
    avatarSrc: `${teamOne}`,
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
    name: 'Samual Karl',
    postion: 'CEO'
  },
  {
    quoteIcon: `${quoteIcon}`,
    avatarSrc: `${teamTwo}`,
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
    name: 'Daria Linney',
    postion: 'CEO'
  },
  {
    quoteIcon: `${quoteIcon}`,
    avatarSrc: `${teamThree}`,
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
    name: 'Samual Karl',
    postion: 'CEO'
  }
]

const TestimonialSlider = () => {
  return (
    <div className="testimonial-slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView='auto'
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1.7 },
          1024: { slidesPerView: 2.5 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
                <img src={item.quoteIcon} alt='Quote Icon' className='quote-icon' />
                <img src={item.avatarSrc} alt={item.name} className='testimonial-avatar' />
                <p className='testimonial-text'>{item.text}</p>
                <h4 className='testimonial-name'>{item.name}</h4>
                <span className='testimonial-position'>{item.postion}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSlider;
