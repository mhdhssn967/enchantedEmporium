import React from 'react'
import cre1 from '../assets/emporium/3d-rendering-cute-cartoon-dragon (1).jpg'
import cre2 from '../assets/emporium/3d-rendering-cute-cartoon-dragon.jpg'
import cre3 from '../assets/emporium/3d-rendering-young-tiger.jpg'
import cre4 from '../assets/emporium/4.jpg'
import cre5 from '../assets/emporium/34.jpg'
import cre6 from '../assets/emporium/adorable-dog-fantasy-style.jpg'
import cre7 from '../assets/emporium/fantasy-anime-style-scene.jpg'
import cre8 from '../assets/emporium/fantasy-bird-illustration (1).jpg'
import cre9 from '../assets/emporium/fantasy-bird-illustration.jpg'
import cre10 from '../assets/emporium/fantasy-style-animals-being-love.jpg'
import cre11 from '../assets/emporium/rendering-cartoon-fantasy-scene-with-rabbit.jpg'
import cre12 from '../assets/emporium/w.jpg'
import './Emporium.css'

const Emporium = ({className}) => {
  return (
    <>
    <div>
      <h1 className={className} style={{textAlign:'center',marginTop:'40px', fontSize:'60px', fontWeight:'200'}}>Emporium of Enchanted Creatures!</h1>
      <p className={className} style={{textAlign:'center',margin:'20px 200px',fontSize:'20px'}}>Step into a world of wonder where mythical beings come to life! From shimmering dragons to elusive foxes, our carefully curated collection brings the magic of fantasy to reality. Each creature is unique, with its own story, abilities, and charms, waiting for the perfect companion to share its journey. Explore, discover, and adopt a magical companion that resonates with your spirit. Dive in, and let the enchantment begin!</p>
    </div>
    <div className={className}>
      <div className='emporium'>
    <div className='floating-img-wrapper1'><img src={cre7} alt="" /></div>
    <div className='floating-img-wrapper2'><img src={cre1} alt="" style={{ marginTop: '50px' }} /></div>
    <div className='floating-img-wrapper3'><img src={cre2} alt="" /></div>
    <div className='floating-img-wrapper4'><img style={{ marginTop: '30px' }} src={cre3} alt="" /></div>
    <div className='floating-img-wrapper5'><img src={cre4} alt="" /></div>
    <div className='floating-img-wrapper6'><img style={{ marginTop: '-230px' }} src={cre5} alt="" /></div>
    <div className='floating-img-wrapper7'><img style={{ marginTop: '-380px' }} src={cre6} alt="" /></div>
    <div className='floating-img-wrapper8'><img style={{ marginTop: '-350px' }} src={cre8} alt="" /></div>
    <div className='floating-img-wrapper9'><img src={cre9} alt="" /></div>
    <div className='floating-img-wrapper10'><img style={{ marginTop: '-130px' }} src={cre10} alt="" /></div>
    <div className='floating-img-wrapper11'><img style={{ marginTop: '-210px' }} src={cre11} alt="" /></div>
    <div className='floating-img-wrapper12'><img style={{ marginTop: '-130px' }} src={cre12} alt="" /></div>


      </div>
    </div>
    </>
  )
}

export default Emporium