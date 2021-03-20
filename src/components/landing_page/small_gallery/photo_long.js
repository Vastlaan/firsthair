import styled from "styled-components";
import { Photo, respond } from "../../../styles";

export default function PhotoLongComponent() {
    return (
        <PhotoLong desc="Salonklassieker Balayage">
            <img
                src="./img/small_gallery_long_1.jpg"
                alt="balayage kapsel purmerend"
            />
        </PhotoLong>
    );
}

const PhotoLong = styled(Photo)`
    grid-column: 1/4;
    grid-row: 1/3;

    img {
        ${() => respond("m", "height: 53rem;")}
    }
`;
