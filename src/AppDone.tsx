import * as React from 'react'
import { Component } from 'react'

import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class App extends Component<{}, {}> {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <CoolButton 
            label="Push me"
            onClick={(event) => event.clientX > 100}
          />
          <br/>
          <TextField floatingLabelText="Type Something"/>
        </div>
      </MuiThemeProvider>
    )
  }
}

const CoolButton = (props: {
  label: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => boolean
}) => (
  <button onClick={props.onClick}>{props.label}</button>
)







// type Movie = 'Inception' | 'Oldboy' | 'Moon' | 'Superbad'

// // lets say you have an application and you have an
// interface MovieStore {
//   getMovies(): Promise<Movie[]>
// }

// class MovieList extends Component<{ movieStore: MovieStore }, any> {
//   render() {
//     const movies = this.props.movieStore.getMovies()
//     return (
//       <div>
//         {
//           movies.map(aMovie => <MovieDetailView movie={aMovie} />)
//         }
//       </div>
//     )
//   }
// }

// then you have a component that gets the movies and passes it down
// // to another class that renders it
// const MovieDetailView = (props: { movie: Movie }) => (
//   <div>{props.movie}</div>
// )
