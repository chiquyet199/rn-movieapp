import React from 'react';
import {View, ScrollView} from 'react-native';
import {SearchForm, MoviesList} from './components';
import useMovies from './hooks/movies';
import useSearchMovies from './hooks/searchMovie';

const App = () => {
  const [popularMovies, loadMorePopular] = useMovies({type: 'popular'});
  const [topMovies, loadMoreTop] = useMovies({type: 'top_rated'});
  const [searchTerm, searchResult, searchMovie, searchMore] = useSearchMovies();
  return (
    <View
      style={{display: 'flex', flexDirection: 'column', paddingVertical: 40}}>
      <SearchForm onSubmit={searchMovie} />
      <ScrollView style={{height: '90%'}}>
        {!!searchTerm && (
          <MoviesList
            title="Result"
            data={searchResult}
            loadMore={searchMore}
          />
        )}
        <MoviesList
          title="Popular"
          data={popularMovies}
          loadMore={loadMorePopular}
        />
        <MoviesList title="Top Rated" data={topMovies} loadMore={loadMoreTop} />
      </ScrollView>
    </View>
  );
};

export default App;
