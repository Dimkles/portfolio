import React, { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ProjectsSlider.scss'
import ProjectSlideContent from '../ProjetSlide/ProjectSlideContent';
import { dataProjects } from '../../../../store/dataProjects';

interface ProjectsSliderProps {
    container: any
}

const ProjectsSlider: FC<ProjectsSliderProps> = ({ container }) => {
    const [offsetBefore, setOffsetBefore] = useState(0)
    useEffect(() => {
        const containerNode = container.current
        if (containerNode) {
            setOffsetBefore(parseInt(getComputedStyle(containerNode).marginLeft))
        }
    }, [container])

    return (
        <React.Fragment>
            {offsetBefore &&
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.1}
                    loop={true}
                    slidesOffsetBefore={offsetBefore}
                    breakpoints={{
                        1200: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        960: {
                            slidesPerView: 2,

                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        425: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {
                        dataProjects.map((project) =>
                            <SwiperSlide key={project.name}><ProjectSlideContent project={project} /></SwiperSlide>
                        )
                    }
                </Swiper>
            }
        </React.Fragment>

    );
};

export default ProjectsSlider;