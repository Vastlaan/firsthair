import styled from "styled-components";
import { Photo } from "../../../styles";

export default function PhotoWide1Component() {
    return (
        <PhotoSquare1>
            <img
                src="./img/small_gallery_square_1.jpg"
                alt="dames mode Purmerend"
            />
        </PhotoSquare1>
    );
}

const PhotoSquare1 = styled(Photo)`
    grid-column: 8/10;
    grid-row: 1/2;

    img {
        width: 100%;
        height: 25rem;
    }
`;
