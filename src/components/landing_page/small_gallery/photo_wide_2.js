import styled from "styled-components";
import { Photo } from "../../../styles";

export default function PhotoWide1Component() {
    return (
        <PhotoWide2 desc="voel jezelf bijzonder">
            <img
                src="./img/small_gallery_wide_1.jpg"
                alt="heren kapper in Purmerend"
            />
        </PhotoWide2>
    );
}

const PhotoWide2 = styled(Photo)`
    grid-column: 6/10;
    grid-row: 2/3;
`;
