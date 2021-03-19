import styled from "styled-components";
import { Photo } from "../../../styles";

export default function PhotoWide1Component() {
    return (
        <PhotoWide1>
            <img
                src="./img/small_gallery_wide_2.jpg"
                alt="heren kapper in Purmerend"
            />
        </PhotoWide1>
    );
}

const PhotoWide1 = styled(Photo)`
    grid-column: 4/8;
    grid-row: 1/2;
    img {
        width: 100%;
        height: 25rem;
    }
`;
