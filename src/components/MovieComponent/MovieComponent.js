import {MovieContainer, MoviePoster, Score, Title, OverviewTitle, Overview, GenresTitle,
    GenresList, AdditionalInfo, GenresItem, CastLink, ReviewsLink} from "components/App.styled";
    

const MovieComponent = ({movie}) => {
        const { poster_path, title, release_date, vote_average, overview, genres, id} = movie;
    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`
    };


    const allGenres = genres.map(genre => <GenresItem key={genre.id}>{genre.name}</GenresItem>);
    const date = new Date(release_date);

    return (
        <>
                <MovieContainer>
                <div>
                    <MoviePoster loading="lazy" src={getPosterURL(poster_path)} alt={title} />
                </div>
                <div>
                    <Title>{title} {date.getFullYear()}</Title>
                    <Score>User score {Number.parseInt(vote_average * 100 / 10)}%</Score>
                    <OverviewTitle>Overview</OverviewTitle>
                    <Overview>{overview}</Overview>
                    <GenresTitle>Genres</GenresTitle>
                    <GenresList>{allGenres}</GenresList>
                    <AdditionalInfo>Additional information</AdditionalInfo>
                    <CastLink to={`/movies/${id}/cast`}>Cast</CastLink>
                    <ReviewsLink to={`/movies/${id}/reviews`}>Reviews</ReviewsLink>
                </div>
            </MovieContainer>
        </>
    )
};

export default MovieComponent;