import { Box, Typography } from '@mui/material'
import React from 'react'
import profilePic from '../assets/ph.webp'
import f from '../assets/f.jpeg'
import Contact from './Contact'
import Footer from './Footer'

const Blog = () => {
  const htmlContent = `Captain Jack Sparrow, a character immortalized by Johnny Depp in the "Pirates of the Caribbean" film series, is one of the most iconic and enigmatic pirates in cinematic history. With his swagger, wits, and unique style, Jack Sparrow has left an indelible mark on the hearts of moviegoers worldwide. In this essay, we will explore the captivating persona and adventures of this legendary pirate.

I. Unconventional Appearance

Eccentric Attire: Jack Sparrow's signature attire includes a tricorn hat, dreadlocks adorned with beads, tattered clothes, and a collection of mismatched accessories, making him instantly recognizable.

Black Eyeliner: His use of black eyeliner highlights his mysterious and charismatic appearance, adding an element of intrigue to his character.

II. Quirky Personality

Clever Wit: Jack Sparrow is known for his quick thinking and clever remarks, which often get him out of tight spots. His witty one-liners have become iconic.

Unpredictability: His unpredictable nature keeps both allies and adversaries guessing, making him a complex and fascinating character.

III. Moral Ambiguity

Code of Ethics: Jack Sparrow follows his own unique code of ethics, which often includes bending the rules or breaking them altogether. He can be both a hero and a rogue, depending on the situation.

Loyalty to His Crew: Despite his often self-serving motives, Jack Sparrow exhibits a deep loyalty to his crew, particularly to his close friend, Joshamee Gibbs.

IV. Legendary Adventures

The Black Pearl: Jack Sparrow's quest to reclaim his ship, the Black Pearl, and his encounters with supernatural forces like cursed Aztec gold set the stage for his legendary adventures.

Quest for Immortality: In "Pirates of the Caribbean: At World's End," Jack Sparrow's quest for immortality leads him on a journey filled with treacherous waters, mythical creatures, and unexpected alliances.

V. Iconic Portrayal

Johnny Depp's Performance: Johnny Depp's portrayal of Jack Sparrow earned him widespread acclaim, including an Academy Award nomination, and solidified the character's place in cinematic history.

Cultural Impact: Jack Sparrow's character has had a profound cultural impact, inspiring countless Halloween costumes, fan conventions, and even pirate-themed events.

Conclusion:
Captain Jack Sparrow is a character who defies traditional conventions and has captured the hearts of audiences with his eccentric appearance, quirky personality, and morally ambiguous nature. His legendary adventures and Johnny Depp's unforgettable portrayal have made him a timeless icon in the world of cinema, ensuring that Jack Sparrow's legacy will continue to sail the high seas of our imagination for years to come.

  `




  return (
   <>
    <Box mt={5} pt={5} mx={20}  >

<Box py={4} pb={3} sx={{
              display: "flex",
              gap: "1rem",
              textAlign:"center",
             flexDirection:"column",
             alignItems:"center"
            }} >
              <img src={"https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/271910032_1944517802386013_4212220958611674125_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xFrsIGgFKZ4AX_pZNa5&_nc_ht=scontent.fktm3-1.fna&oh=00_AfAZTGeAh9N0s4DXH4Uz2AswHBDHqkhi7jVahrsgObQy3w&oe=65391392"} className='profile-pic-blog' alt="" />
              <div  >
                <Typography sx={{
                  display: "block",
                  fontWeight:600
                }} variant="h4" color="initial">Prashant Acharya</Typography>
                <Typography variant="h6" color="initial">CEO and Developer</Typography>
              </div>

 

            </Box>

          <Box my={5} textAlign={"center"}>
            <Typography align='center' variant="h2" color="initial">The Path to a Healthy Life: A Journey of a Thousand Steps</Typography>

            <img src={f} className=' blog-img' alt="" />
          </Box>
          {/* <Typography sx={{
            fontSize:"1.5rem"
          }} variant="p" color="initial">
            */}
         
         <pre className='pre' >

         <code dangerouslySetInnerHTML={{ __html: htmlContent }} /> 
  
         </pre>
         
          
          {/* </Typography> */}

    </Box>

    
     
    </>
  )
}

export default Blog