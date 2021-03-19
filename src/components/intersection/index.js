import Link from "next/link";
import { withTheme } from "styled-components";
import {
    FlexCol,
    Header3,
    Text,
    TextItalic,
    ButtonPrimary,
    Line,
} from "../../styles";

function IntersectionComponent({ category, title, body, link, theme }) {
    return (
        <FlexCol margin="9.7rem auto">
            <TextItalic color={theme.secondary}>{category}</TextItalic>
            <Header3 color={theme.black}>{title}</Header3>
            <Line />
            <Text color={theme.grey_3}>{body}</Text>
            {link && (
                <Link href={link}>
                    <ButtonPrimary>Lees meer</ButtonPrimary>
                </Link>
            )}
        </FlexCol>
    );
}

export default withTheme(IntersectionComponent);
