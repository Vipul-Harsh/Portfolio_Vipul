import {Particles} from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import React,{useCallback} from 'react'

const ParticlesContainer = () => {
  const particleInit=useCallback (async (engine)=>{
    await loadFull(engine);
  },[])
  const particlesLoaded = useCallback(async()=>{},[])
  return <Particles
  className='w-full h-full absolute translate-z-0'
  id='tsparticles'
  init={particleInit}
  loaded={particlesLoaded}
  options={{
    fullScreen:{enable:false},
    background:{
      color:{
        value:'',
      },
    },
    fpsLimit:190,
    interactivity:{
      events:{
        onclick:{
          enable:false,
          mode:'push'
        },
        onHover:{
         enable:true,
         mode:'repulse',
        },
        resize:true,
      },
      modes:{
        push:{
          quantity:90
        },
        repulse:{
          distance:100,
          duration:0.4,
        },
      },
    },
    particles:{
      color:{
        value:'#C0C0C0'
      },
      links:{
        color:'#f5d393',
        distance:150,
        enable:true,
        opacity:0.5,
        width:1
      },
      collisions:{
        enable:true,
      },
      move:{
        direction:'none',
        enable:true,
        outMode:{
          default:'bounce'
        },
        random:false,
        speed:1,
        straight:true,
      },
      number:{
        density:{
          enable:true,
          area:800,
        },
        value:80,
      },
      opacity:{
        value:0.5,
      },
      shape:{
        type:'circle',
      },
      size:{
        value:{min:1,max:10},
      },
    },
detectRetina:true,
  }}
  >

  </Particles>;
};

export default ParticlesContainer;
