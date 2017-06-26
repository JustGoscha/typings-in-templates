import * as React from 'react'
import { Component } from 'react'

export class App extends Component<{}, {}> {
    render() {
        return <div>
            <RecyclingBin
                for={{
                    material: 'Wood'
                }}
                onThrowAway={(allowed) => {
                    if (!allowed) {
                        alert('This is a trash bin for ')
                    }
                }}
            />
        </div>
    }
}

interface RecyclingProps {
    for: Recyclable
    onThrowAway?: (allowed: boolean) => any
}

interface Recyclable {
    material: string
}

const RecyclingBin = (props: RecyclingProps) => (
    <div onClick={() => props.onThrowAway}>
        Recycling bin for {props.for.material}
    </div>
)