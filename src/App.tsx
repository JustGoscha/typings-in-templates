import * as React from 'react'
import { Component } from 'react'


export class App extends Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Awesome APP</h1>
      </div>
    )
  }
}








// import TextField from 'material-ui/TextField'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'







// type Movie = 'Inception' | 'Oldboy' | 'Moon' | 'Superbad'

// // lets say you have an application and you have an
// interface MovieStore {
//   getMovies(): Movie[]
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

// // then you have a component that gets the movies and passes it down
// // to another class that renders it
// const MovieDetailView = (props: { movie: Movie }) => (
//   <div>{props.movie}</div>
// )
