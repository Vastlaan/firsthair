import styled from "styled-components";
import { CATEGORIES } from "../../data/categories";
import { respond } from "../../styles";

export default function ContentComponent({ category }) {
    return (
        <Content>
            {CATEGORIES.find((cat) => cat.id === category).prices.map(
                (price, i) => {
                    return (
                        <Item key={`item-${i}`}>
                            <ItemMain>
                                <p>{price.service}</p>
                                <span>{price.sub}</span>
                            </ItemMain>
                            <p>&euro; {price.price}</p>
                        </Item>
                    );
                }
            )}
        </Content>
    );
}
const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.4rem;
    min-height: 35rem;

    ${(p) =>
        respond(
            "m",
            `
            max-height: 35rem;
            overflow-y: auto;
            &::-webkit-scrollbar {
                display: block;
                width: 1rem;
                overflow: auto;
            }
            &::-webkit-scrollbar-track {
                background-color: ${p.theme.grey_1};
            }
            &::-webkit-scrollbar-thumb {
                width: 0.7rem;
                background-color: ${p.theme.grey_3};
            }
            `
        )}
`;
const Item = styled.div`
    padding: 0 0 1.4rem 0;
    margin: 1.4rem 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    border-bottom: 1px solid ${(p) => p.theme.grey_2};

    p {
        font-size: 1.9rem;
        text-transform: uppercase;
        color: ${(p) => p.theme.black};
        font-weight: 700;
        min-width: 5rem;
    }
`;
const ItemMain = styled.div`
    span {
        display: block;
        font-size: 1.6rem;
        color: ${(p) => p.theme.grey_3};
        font-weight: 400;
        max-width: 55rem;
    }
`;
