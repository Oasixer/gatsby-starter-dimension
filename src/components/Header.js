import React from 'react'
import PropTypes from 'prop-types'
import Particles from 'react-particles-js';
import Container from './container.js'
import styles from './styles.css'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>

          <Particles
          params={{
            
            particles: {
              //color: {
              //  value: "#000000"
              //}
              
              number: {
              value: 10,
              density: {
                enable: true,
                value_area: 800
                  
              }
              
          
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#fff"
              },
              polygon: {
                nb_sides: 7
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 250,
              color: "fff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
              
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
                
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 300,
                size: 70,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 500,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
          
        }}
      />
        <div className="content">
            <div className="inner">
                <h1>Kaelan Moffett-Steinke</h1>
                <p>UWaterloo Mechatronics Engineering '23'<br />
                Freelance Robotics / Control Systems Software Developer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
