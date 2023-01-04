import React from 'react'
import { SectionTitle } from '../../components/Typography';
import NewGamesSlide from '../../components/NewGamesSlide';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// style
import './style.css'

// Import Swiper styles
import 'swiper/css';

// images
import god_of_war from '../../assets/images/god-of-war.jpg'
import call_of_duty from '../../assets/images/call_of_duty.jpg'
import fifa from '../../assets/images/fifa.jpg'

const games = [
    { img: god_of_war, desc: "Join in the new DLC with Kratos to learn more about him and his future." },
    { img: call_of_duty, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate dicta libero." },
    { img: fifa, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: god_of_war, desc: "Join in the new DLC with Kratos to learn more about him and his future." },
    { img: call_of_duty, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate dicta libero." },
    { img: fifa, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
]

const NewGames = () => {
    return (
        <div className='new-games'>
            <SectionTitle>New Games</SectionTitle>
            <Swiper
                spaceBetween={15}
                slidesPerView={Math.ceil(window.innerWidth / 800) + 0.5}
            >
                {games.map((game, index) => <SwiperSlide key={index}>
                    <NewGamesSlide img={game.img} desc={game.desc} />
                </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default NewGames 