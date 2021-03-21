import styled from "styled-components";
import { respond, ButtonPrimary } from "../../styles";
import { CATEGORIES } from "../../data/categories";

export default function CategoriesComponent({ category, setCategory }) {
    return (
        <Categories>
            {CATEGORIES.map((cat) => {
                return (
                    <ButtonPrimary
                        key={`cat-${cat.id}`}
                        onClick={() => setCategory(cat.id)}
                        hovered={category === cat.id}
                    >
                        {cat.type}
                    </ButtonPrimary>
                );
            })}
        </Categories>
    );
}

const Categories = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    ${() =>
        respond("m", "flex-direction: column; justify-content: flex-start;")}

    button {
        width: 15rem;
        margin: 0.9rem 1.4rem;
        ${() => respond("m", "margin: 1.4rem 0; width: auto;")}
    }
`;
