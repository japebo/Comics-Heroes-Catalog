import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Characters</h1>
            <hr style={{margin: '8px 0'}}/>
            <HeroList publisher="Marvel Comics"/>
        </div>
    )
}
