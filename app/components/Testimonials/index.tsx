"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Mike, Maryland",
        profession: 'PROSTATE CANCER WITH 12 MALIGNANCIES',
        comment: 'A true seeker attended one of my talks in Sedona and called me with his 83 year old father who had 12 malignancies in the prostate area. I performed one session on the father wed night through talking with the son for the session. I was impressed how he knew so much about his father’s life. The father laid next to a Tesla energy device with scalar frequencies during the session, which helped lift the vibrations of the father and hold him to a higher vibration while I accomplished the healing session. On Friday he went to a scan, which I suggested, and was found to be clear of the 12 malignancies. A kernel of the problem was left in the prostate which was readily cleared in the next session. God is Gracious!!!',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "ASTHMA",
        profession: 'Mickey R. and Jonathan R, New Jersey',
        comment: 'The night before I met Donna, I was exhausted. I prayed to God for relief of my 3 year old’s severe asthmatic condition, which caused him to be on heavy steroids and a nebulizer 24 hours a day. I thought my son was going to die.The next day Donna came to my beauty salon and said she could help. I broke down and cried tears of joy because I knew she was there in answer to my prayers. She worked with him 2 sessions, identified and cleared allergies to dairy, bleach and traumas from the past. In two weeks he was off the nebulizer. Within 4 weeks, we had built up his immune system with nutritional supplements which Donna recommended.. He has not had an asthma attack since. He is now 16 years old, healthy, and well and an aspiring actor.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Daniel L., Calgary, Canada",
        profession: 'ASTHMA/WHEEZING/GLUTEN INTOLERANCE',
        comment: 'I am Daniel, 8 years of age, (a genius, by the way), and attended an expo in Oct.2006 in Calgary, Canada. where I met Donna. I had had asthma and wheezing fits since I was 3 years of age. Donna said she could clear me of the asthma and wheezing. During the session at the expo, I went into a trance. The next two sessions were over the phone to the U.S. After the first session, I could run around the playground and play with the bigger boys without losing my breath. She cleared me of allergies to wheat and I could EAT PIZZA! I now am completely free of the allergies, asthma and wheezing! Donna, I Love You .        ',
        imgSrc: '/images/testimonial/user3.svg',
    },
    
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what others are saying.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
