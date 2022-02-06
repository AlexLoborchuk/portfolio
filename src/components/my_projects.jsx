import React from 'react';
import Slider from 'react-slick';

import UsersDataGithub from '../image/users_data_github.png';
import ReactClient from '../image/react_client.png';
import FullStackProject from '../image/fullstack_project.png';
import '../style/information.css';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const MyProjects =()=> {

    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      };
    const projects = [
        {id: 1, title: "Соціальна мережа", image: FullStackProject, ref: "https://github.com/AlexLoborchuk/QuickStartReactRedux/tree/main"},
        {id: 2, title: "Клієнтська частина соціальної мережі", image: ReactClient , ref: "https://github.com/AlexLoborchuk/react_client"},
        {id: 3, title: "Дані користувачів GitHub", image: UsersDataGithub, ref: "https://github.com/AlexLoborchuk/githab_user_info"},
    ]
    return <div className='projects_block'>
            <div id="my_project" className='title'>MY PERSONAL PROJECT</div> 
            <div className='content'> 
                <Slider {...settings} >
                 {projects.map((project, id) => (
                        <div key={id} >
                            <div className='project'>
                                <a href={project.ref}>
                                <img src={project.image} className='projects_img' alt="Project"/>
                                <div className='project_title'>{project.title}</div>
                                </a>
                            </div>
                        </div>
                        ))  
                    }  
                </Slider> 
            </div>   
    </div>
}