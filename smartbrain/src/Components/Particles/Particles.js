import React,  {Component} from 'react';
import PParticles from 'react-particles-js';
 
class Particles extends Component{
  
    render(){
        return (
            <PParticles className="particles"
              params={{
                  "particles": {
                    "number": {
                      "value": 150,
                      "density": {
                        "enable": true,
                        "value_area": 1920
                      }
                    },
                    "shape": {
                      "type": "none",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 150,
                      "color": "#fff",
                      "opacity": 1,
                      "width": 1.2
                    },
                    "opacity": {
                      "value": 0.2,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                  },
                  "interactivity": {
                    "detect_on": "window",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "resize": true
                    },
                    "modes": {
                      "repulse": {
                        "distance": 75,
                        "line_linked": {
                          "opacity": 40
                        }
                      },
                    }
                  },
            	}}
            />
        );
    };
 
}

export default Particles;