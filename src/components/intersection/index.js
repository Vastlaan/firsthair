import Link from "next/link";
import { withTheme } from "styled-components";
import {
    Section,
    Header3,
    Text,
    TextItalic,
    ButtonPrimary,
    Line,
} from "../../styles";

function IntersectionComponent({ category, title, body, link, theme }) {
    return (
        <Section margin="9.7rem 1.4rem">
            <TextItalic color={theme.secondary}>{category}</TextItalic>
            <Header3 color={theme.black}>{title}</Header3>
            <Line />
            <Text color={theme.grey_3}>{body}</Text>
            {link && (
                <Link href={link}>
                    <ButtonPrimary margin="1.4rem auto">
                        Lees meer
                    </ButtonPrimary>
                </Link>
            )}
        </Section>
    );
}

export default withTheme(IntersectionComponent);
