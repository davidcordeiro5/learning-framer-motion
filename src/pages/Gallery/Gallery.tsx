import styled from "styled-components";
import { SPACE_IMAGES } from "~/assets/pictures/space";

const Gallery = () => {
  const length = Object.keys(SPACE_IMAGES).length;

  return (
    <Container>
      {[...Array(length)].map((_, index) => {
        // TS don't like only SPACE_IMAGES[`space${index + 1}`];
        // because index + 1 is a number

        // Element implicitly has an 'any' type because expression of type '`space${number}`'
        const src =
          SPACE_IMAGES[`space${index + 1}` as keyof typeof SPACE_IMAGES];
        return (
          <li key={index}>
            <img src={src} alt={`space${index + 1}`} />
          </li>
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2vmin;
  margin: var(--spacing-16);

  &::after {
    content: "";
    display: block;
    flex-grow: 3;
  }

  li {
    list-style-type: none;
    height: 250px;
    flex-grow: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default Gallery;
