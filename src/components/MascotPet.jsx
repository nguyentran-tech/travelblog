import React from 'react'
import { Mascot } from 'page-mascot'

const MascotPet = () => {
  return (
    <div>
        <Mascot
            directions="/mascots/panda-directions.webp"
            reactions="/mascots/panda-reactions.webp"
        />
    </div>
  )
}

export default MascotPet