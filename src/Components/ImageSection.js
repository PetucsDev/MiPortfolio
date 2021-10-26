import React from 'react'
import styled from 'styled-components';
import resume from '../img/img1.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Matias Costilla</span></h4>
                <p className="paragraph">
                Tengo 25 años , soy Desarrollador Full Stack orientado al Back-End. 
                Comencé cursando la carrera en la Universidad Nacional Tecnológica en la Provincia de Tucumán. 
                Por una parte llegué a ese mundo de la programación buscando una salida laboral importante y 
                por otro lado luego con el paso del tiempo mientras estaba inmerso en ese mundo de la tecnología 
                llegué a la conclusión que me apasiona del cuál estoy muy preparado y 
                con muchas ganas de seguir mi camino con firmeza y dedicación realizando proyectos y 
                crecer tanto a nivel personal como profesionalmente.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Matias Costilla</p>
                        <p>: 25</p>
                        <p>: Argentina </p>
                        <p>: Spanish, English </p>
                        <p>: Tucumán, Argentina</p>
                        <p>: Full Stack Developer</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
