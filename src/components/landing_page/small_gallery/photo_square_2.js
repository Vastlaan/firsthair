import styled from "styled-components";
import { Photo } from "../../../styles";

export default function PhotoWide1Component() {
    return (
        <PhotoSquare2>
            <img
                src="./img/small_gallery_square_2.jpg"
                alt="dames knippen en kleuren in Purmerend"
            />
        </PhotoSquare2>
    );
}

const PhotoSquare2 = styled(Photo)`
    grid-column: 4/6;
    grid-row: 2/3;

    img {
        width: 100%;
        height: 25rem;
    }
`;
