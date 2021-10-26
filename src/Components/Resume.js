import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - 2021'} 
                        title={'Full Stack Developer'}
                        subTitle={'PI Pokemon'}
                        text={'Creación de app consumiendo la pokeapi y una base de datos local con react, redux y css puro para el front-end. NodeJs con Express para el back-end y por ultimo PostgreSQL como motor de base de datos y Sequelize como ORM.'} 
                    />
                    <ResumeItem 
                        year={'2016 - 2016'} 
                        title={'Pasante de Abastecimiento'}
                        subTitle={'Malteria y Cervecería Quilmes'}
                        text={' Pasante en el sector de abastecimiento, mi función principal era la de realizar los MRP correspondientes de cada material necesario para poder cumplir con el plan de produccion establecido por la empresa.'} 
                    />
                    <ResumeItem 
                        year={'2021 - 2021'} 
                        title={'Back End Developer'}
                        subTitle={'Tukiteck'}
                        text={' E-Commerce dedicado a la venta de entradas para eventos en general. Se utilizo PERN stack.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - 2022'} 
                        title={'Tecnicatura Superior en Programación'}
                        subTitle={'Universidad Tecnológica Tucumán'}
                        text={'Actualmente me encuentro cursando la tecnicatura en la UTN-FRT. Durante el cursado se aprende C#'} 
                    />
                    <ResumeItem 
                        year={'2021 - 2021'} 
                        title={'Full Stack Bootcamp'}
                        subTitle={'Soy Henry'}
                        text={'+800 horas de cursada intensiva. Entre las tecnologías aprendidas se incluyen HTML, CSS, Javascript, React, Redux, NodeJs, Express, PostgreSQL, Sequelize, Github y la metodología de trabajo ágil SCRUM.'} 
                    />
                    <ResumeItem 
                        year={'2014 - 2018'} 
                        title={'Ingeniería Industrial'}
                        subTitle={'Unsta'}
                        text={'Realicé hasta 4°Año de la carrera de Ingeniería Industrial en la UNSTA.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume