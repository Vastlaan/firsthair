import { Header, Header3, Text, FlexCol } from "../../styles";
import Brand from "../landing_page/header/brand";

export default function HeaderComponent({ title, body, url }) {
    return (
        <Header minHeight="50vh" url={url ? url : null}>
            <Brand />

            <FlexCol margin="2.7rem auto">
                <Header3>{title}</Header3>
            </FlexCol>

            <Text>{body}</Text>
        </Header>
    );
}
