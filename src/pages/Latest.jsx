import React from 'react'
import './Latest.css'
import cre1 from '../assets/latest/cel1.webp'
import cre2 from '../assets/latest/cre2.webp'
import cre3 from '../assets/latest/cre3.jpg'
import cre4 from '../assets/latest/cre4.jpg'
import cre5 from '../assets/latest/cre5.png'
import cre6 from '../assets/latest/cre6.jpg'
import cre7 from '../assets/latest/cre7.jpg'
import cre8 from '../assets/latest/cre8.jpg'
import cre9 from '../assets/latest/cre9.jpg'
import cre10 from '../assets/latest/cre10.jpg'



const Latest = ({className}) => {
  return (
    <div className={className}>
      <h1 style={{textAlign:'center', marginTop:'2%',color:'white',fontWeight:'200',fontSize:'40px'}}>Latest from the Enchanted World</h1>
      <div className="newsContainer">
        <div className="newscard">
          <img src={cre1} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>Celestial Creatures Sighted in the Northern Skies</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>Gaze upon the stars tonight — you may just spot a Celestial!</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              Witnesses report seeing luminescent creatures gliding across the night sky near the Northern Mountains. Experts believe these are Celestials, creatures born from stardust and light. Their appearance is said to bring clarity and dreams to all who see them.
            </p>
          </div>
        </div>

        <div className="newscard">
          <img src={cre2} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>New Herbal Elixirs for Mystical Health Launched</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>A sip of magic in every bottle! Perfect for pets of all kinds.</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              Alchemists unveil a new line of herbal elixirs tailored for enchanted pets. These potions are crafted from rare plants like Moonblossom and Ember Root to boost health, vitality, and even magical prowess.
            </p>
          </div>
        </div>

        <div className="newscard">
          <img src={cre3} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>Discovery of Dragon Hatchery in the Azure Caverns</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>The dragons are coming! Keep your eyes open for these majestic hatchlings.</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              Adventurers stumble upon a hidden dragon hatchery deep within the Azure Caverns. Eggs with intricate, glowing patterns line the cavern walls, hinting at the arrival of new and rare dragon species.
            </p>
          </div>
        </div>

        <div className="newscard">
          <img src={cre4} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>Mystic Companions Festival Kicks Off This Week</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>Join us for magical moments and memories!</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              The annual Mystic Companions Festival has begun, celebrating the bonds between wizards and their enchanted pets. Events include flying races, talent shows, and bonding ceremonies for new pet owners.
            </p>
          </div>
        </div>

        <div className="newscard">
          <img src={cre5} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>Mermaid Cats Spotted Near Moonlit Shores</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>Catch a glimpse of these rare creatures along the shore!</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              The elusive mermaid cats have been spotted off the Moonlit Shores, mesmerizing sailors with their shimmering fur and enchanting songs. These aquatic felines are said to bring good fortune to all they befriend.
            </p>
          </div>
        </div>

        <div className="newscard">
          <img src={cre6} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>Introducing the Arcane Pet Training Academy</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>Help your pet reach its full magical potential!</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              A new academy has opened for those looking to train their magical pets in advanced spellwork and ancient defense arts. Courses range from elemental control to protective charm crafting.
            </p>
          </div>
        </div>

        <div className="newscard">
          <img src={cre7} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>Rare Herb 'Whisperweed' Blooming in Enchanted Forest</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>Harvest this herb to bring peace to your pet’s spirit!</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              Whisperweed, known for its calming effects on enchanted pets, is in bloom. Many pet owners venture to the Enchanted Forest to collect this rare herb, used in calming teas and aura-balancing powders.
            </p>
          </div>
        </div>

        <div className="newscard">
          <img src={cre8} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>Elemental Foxes Spark Awe in the Crystal Plains</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>Witness the beauty of nature’s most elemental pets!</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              Elemental foxes, creatures born of fire, water, earth, and air, have been spotted frolicking in the Crystal Plains. Known for their playful nature, these foxes emit sparks or mist as they run, creating magical displays.
            </p>
          </div>
        </div>

        <div className="newscard">
          <img src={cre9} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>Ancient Guardian Iguana Returns to Emerald Temple</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>A blessing for all! Come visit the Emerald Temple to see this revered creature.</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              After centuries, the mystical Guardian Iguana has returned to the Emerald Temple. Legend states that this ancient creature watches over sacred sites, blessing visitors with knowledge and inner peace.
            </p>
          </div>
        </div>

        <div className="newscard">
          <img src={cre10} alt="" style={{ width: '300px' }} />
          <div className="news">
            <h1 style={{ color: 'white' }}>Wishing Owls Now Taking Flight on Full Moon Nights</h1>
            <p style={{ color: 'green', paddingTop: '3%' }}>Don’t miss the chance to make a wish under the full moon!</p>
            <p style={{ color: 'white', paddingTop: '5%', textAlign: 'justify' }}>
              The rare Wishing Owls, known for granting heartfelt wishes, will take flight this full moon. Pet owners are encouraged to bring their enchanted companions to witness the flight and make a wish.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latest