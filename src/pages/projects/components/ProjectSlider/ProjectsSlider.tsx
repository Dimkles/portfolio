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
                    spaceBetween={20}
                    slidesPerView={2.5}
                    slidesOffsetBefore={offsetBefore}
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