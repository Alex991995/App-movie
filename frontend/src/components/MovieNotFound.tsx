import { AspectRatio, Image } from '@mantine/core';
import NotFoundMovie from '../assets/ImageNotFound.png';

function MovieNotFound() {
  return (
    <div className="movieNotFound">
      <AspectRatio>
        <Image w="250px" h="250px" src={NotFoundMovie} />
      </AspectRatio>
      <h2>We don't have such movies, look for another one</h2>
    </div>
  );
}

export default MovieNotFound;
