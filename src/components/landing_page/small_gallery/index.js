import styled from "styled-components";
import { respond, ContainerNarrow } from "../../../styles";
import PhotoLong from "./photo_long";
import PhotoWide1 from "./photo_wide_1";
import PhotoWide2 from "./photo_wide_2";
import PhotoSquare1 from "./photo_square_1";
import PhotoSquare2 from "./photo_square_2";

export default function SmallGalleryComponent() {
    return (
        <ContainerNarrow>
            <Grid>
                <PhotoLong />

                <PhotoWide1 />

                <PhotoSquare1 />

                <PhotoSquare2 />

                <PhotoWide2 />
            </Grid>
        </ContainerNarrow>
    );
}

const Grid = styled.div`
    margin: 2.7rem;
    display: flex;
    flex-direction: column;

    ${() =>
        respond(
            "m",
            `
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            grid-template-rows: 25rem 25rem;
            grid-gap: 2.7rem;
            `
        )}
`;
