import React, { useState } from 'react'
import snake from '../assets/fantasy-snake-illustration.jpg'
import dragon1 from '../assets/3d-fox-cartoon-illustration (1).jpg'
import fox1 from '../assets/3d-fox-cartoon-illustration.jpg'
import fox2 from '../assets/cute-3d-dragon.jpg'
import dragon2 from '../assets/3d-fantasy-scene.jpg'
import cat from '../assets/fantasy-cute-kitten-wallpaper.jpg'
import iguana from '../assets/iguana-neon-lights.jpg'
import './Landing.css'
import welcomeimg from '../assets/logo2.png'



const Landing = ({className}) => {

    const [imageDisplay,setImageDisplay]=useState({
        snake:false,
        fox1:false,
        fox2:false,
        dragon1:false,
        dragon2:false
    })


  return (
    <div style={{display:'flex',width:'90%',margin:'10% 5%',alignItems:'center',height:'47vh'}} className={className}>
        
        { 
    Object.values(imageDisplay).every(value => !value) && (
        <div className="fade-slide" style={{ width: '900px' }}>
            <h1 style={{ color: 'green', fontSize: '50px' }}>
                Welcome to <br />
                <img src={welcomeimg} alt="" style={{width:'650px'}} className='welcomeimg' />
            </h1>
            <p style={{ color: 'rgb(62, 182, 62)', fontSize: '25px', textAlign: 'justify', paddingRight: '15%' }}>
                Discover the enchanting world of mythical creatures! 
            </p>
        </div>
    )
}

    { imageDisplay.snake &&(
        <div className="fade-slide" style={{width:'900px'}}>
        <h1 style={{color:'green',fontSize:'50px'}}>
        Serapha
        </h1>
        <p style={{color:'rgb(62, 182, 62)',fontSize:'25px', textAlign:'justify',paddingRight:'15%'}}>
        Serapha is a mesmerizing snake with scales that shimmer like liquid gold in moonlight. Known to bring fortune to those who treat her with kindness, she guards ancient secrets hidden deep in enchanted forests. When she moves, a soft, whispering hum fills the air, as if she’s singing a lullaby to the stars. Legends say her gaze can hypnotize anyone who dares stare too long, but she's gentle to those pure of heart. Serapha is known to leave small golden scales as tokens of gratitude to her friends.
        </p>
    </div>
    )
   }
   { imageDisplay.fox1 &&(
        <div className="fade-slide" style={{width:'900px'}}>
        <h1 style={{color:'green',fontSize:'50px',}}>
        Emberlune
        </h1>
        <p style={{color:'rgb(62, 182, 62)',fontSize:'25px', textAlign:'justify',paddingRight:'15%'}}>
        Emberlune is a spirited fox with a coat that glows softly like embers at dusk. Playful and a little mischievous, she loves to explore human villages, leaving behind small gifts like shiny pebbles and feathers. She’s a guardian of hearths and homes, believed to bring warmth and protection to families she visits. Her tail, said to be made of stardust, flickers with a warm light, especially on chilly nights. Catching a glimpse of Emberlune is a rare blessing, a sign that good luck is just around the corner.
        </p>
    </div>
    )
   }
     { imageDisplay.dragon1 &&(
        <div className="fade-slide" style={{width:'900px'}}>
        <h1 style={{color:'green',fontSize:'50px',}}>
        Frostpelt
        </h1>
        <p style={{color:'rgb(62, 182, 62)',fontSize:'25px', textAlign:'justify',paddingRight:'15%'}}>
        Frostpelt is Emberlune’s quieter, mystical sibling, with a coat as white as fresh snowfall and eyes like icy sapphires. Shy and elusive, he roams frost-covered landscapes and protects the dreams of travelers caught in winter’s embrace. His paw prints sparkle for a few moments before vanishing, guiding lost wanderers to safety. When Frostpelt howls, it sounds like the distant call of the wind, soothing and eerie. Folktales say that a glimpse of Frostpelt can grant safe passage and restful sleep.
        </p>
    </div>
    )
   }
   { imageDisplay.fox2 &&(
        <div className="fade-slide" style={{width:'900px'}}>
        <h1 style={{color:'green',fontSize:'50px',}}>
        Celestara
        </h1>
        <p style={{color:'rgb(62, 182, 62)',fontSize:'25px', textAlign:'justify',paddingRight:'15%'}}>
        Celestara is a dragon as old as time, with scales that reflect the colors of the cosmos—deep blues, purples, and silvers that shimmer like distant galaxies. Her wings create star-like glimmers when she soars across the sky at night, leaving trails of light that linger long after she's gone. She’s gentle and wise, often coming to the aid of lost travelers or animals in need. Her breath isn’t fire, but a warm, sparkling mist that can heal wounds and soothe pain. Celestara loves to share stories with those she trusts, tales of stars long gone and planets yet to be discovered.
        </p>
    </div>
    )
   }
   { imageDisplay.dragon2 &&(
        <div className="fade-slide" style={{width:'900px'}}>
        <h1 style={{color:'green',fontSize:'50px',}}>
        Pyraxis
        </h1>
        <p style={{color:'rgb(62, 182, 62)',fontSize:'25px', textAlign:'justify',paddingRight:'15%'}}>
        Pyraxis is a fierce but kind-hearted dragon with scales that gleam like molten lava. Known as the "Flamekeeper," he guards the eternal fire at the heart of volcanic mountains, ensuring balance between destruction and renewal. Despite his intimidating appearance, Pyraxis has a soft spot for small animals and will often carry them to safety if they wander too close to his domain. His fiery breath can turn sand into glass and etch intricate designs into rock. He’s a protector of the land and a friend to those who respect nature’s power.
        </p>
    </div>
    )
   }
   { imageDisplay.iguana &&(
        <div className="fade-slide" style={{width:'900px'}}>
        <h1 style={{color:'green',fontSize:'50px',}}>
        Verdantus
        </h1>
        <p style={{color:'rgb(62, 182, 62)',fontSize:'25px', textAlign:'justify',paddingRight:'15%'}}>
        Verdantus is a majestic iguana with scales that shift in color from jade green to emerald depending on his mood. Known as the "Garden Guardian," he brings life and vitality to the forests he roams, with flowers and vines blooming in his footsteps. He’s a gentle giant, often seen lounging in sun-dappled clearings, his long tail wrapped around ancient tree roots. Verdantus can communicate with plants and has a calming presence that eases creatures and humans alike. It's said that if you catch a falling leaf near Verdantus, you’ll receive a blessing of peace and prosperity.
        </p>
    </div>
    )
   }
   
        <div>
           <div className='images'>
             <img src={snake} alt="" onMouseEnter={() => setImageDisplay((prev) => ({ ...prev, snake: true }))} onMouseLeave={() => setImageDisplay((prev) => ({ ...prev, snake: false }))} />
             <img src={fox1} alt="" style={{marginTop:"-20%"}}  onMouseEnter={() => setImageDisplay((prev) => ({ ...prev, fox1: true }))} onMouseLeave={() => setImageDisplay((prev) => ({ ...prev, fox1: false }))}/>
             <img src={fox2} alt=""onMouseEnter={() => setImageDisplay((prev) => ({ ...prev, fox2: true }))} onMouseLeave={() => setImageDisplay((prev) => ({ ...prev, fox2: false }))} />
             <img src={dragon1} style={{marginTop:"-20%"}}  alt="" onMouseEnter={() => setImageDisplay((prev) => ({ ...prev, dragon1: true }))} onMouseLeave={() => setImageDisplay((prev) => ({ ...prev, dragon1: false }))} />
             <img src={dragon2} alt="" onMouseEnter={() => setImageDisplay((prev) => ({ ...prev, dragon2: true }))} onMouseLeave={() => setImageDisplay((prev) => ({ ...prev, dragon2: false }))} />
             <img src={iguana} alt=""  style={{marginTop:"-10%"}} onMouseEnter={() => setImageDisplay((prev) => ({ ...prev, iguana: true }))} onMouseLeave={() => setImageDisplay((prev) => ({ ...prev, iguana: false }))}/>

             </div>
          
        </div>
    </div>
  )
}

export default Landing