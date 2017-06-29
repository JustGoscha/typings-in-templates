import * as React from 'react'
import { Component } from 'react'

// Another thing is, 
// let's imagine you want to use 
// an external library
// like MaterialUI
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export class App extends Component<{}, {}> {
  render() {
    return <MuiThemeProvider>
      <div>
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
        <RaisedButton
          primary
          label={'Ladida'}
        />
      </div>
    </MuiThemeProvider>
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


type Movie = 'Inception' | 'Oldboy' | 'Moon' | 'Superbad'

// lets say you have an application and you have an
interface MovieStore {
  getMovies(): Movie[]
}

class MovieList extends Component<{ movieStore: MovieStore }, any> {
  render() {
    const movies = this.props.movieStore.getMovies()
    return (
      <div>
        {
          movies.map(aMovie => <MovieDetailView movie={aMovie} />)
        }
      </div>
    )
  }
}

// then you have a component that gets the movies and passes it down
// to another class that renders it
const MovieDetailView = (props: { movie: Movie }) => (
  <div>{props.movie}</div>
)
