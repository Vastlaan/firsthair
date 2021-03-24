import Header from "./header";
import Intersection from "../intersection";
import Parallax from "../parallax";
import SmallGallery from "./small_gallery";
import Prices from "../prices";
import Story from "../story";
import OpeningHours from "../opening_hours";
import Reviews from "../reviews";
import { CORONA_INTERSECTION } from "../../data/intersections";
import { TRENDS_INTERSECTION } from "../../data/intersections";
import { SUMMARY_INTERSECTION } from "../../data/intersections";
import { PERSONAL_PARALLAX } from "../../data/parallax";

export default function LandingComponent() {
    return (
        <>
            <Header />

            <Intersection
                category={TRENDS_INTERSECTION.category}
                title={TRENDS_INTERSECTION.title}
                body={TRENDS_INTERSECTION.body}
            />

            <SmallGallery />

            <Intersection
                category={CORONA_INTERSECTION.category}
                title={CORONA_INTERSECTION.title}
                body={CORONA_INTERSECTION.body}
                link={CORONA_INTERSECTION.link}
            />

            <Parallax
                title={PERSONAL_PARALLAX.title}
                body={PERSONAL_PARALLAX.body}
            />

            <Prices />

            <Story />

            <OpeningHours />

            <Reviews />

            <Intersection
                category={SUMMARY_INTERSECTION.category}
                title={SUMMARY_INTERSECTION.title}
                body={SUMMARY_INTERSECTION.body}
            />
        </>
    );
}
