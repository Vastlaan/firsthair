import { BilboardContainer, Header1 } from "../../styles";
import Stars from "./stars";
import Reviews from "./reviews";

export default function ReviewsComponent() {
    return (
        <BilboardContainer url="./img/reviews.jpg">
            <Header1>Klantwaardering</Header1>

            <Stars />

            <Reviews />
        </BilboardContainer>
    );
}
