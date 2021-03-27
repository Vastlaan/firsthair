import { FlexCol, Input, Label, Error } from "../../../../styles";

export default function NameComponent({ name, setName, error }) {
    return (
        <FlexCol align="flex-start">
            <Label forHtml="name">Naam*</Label>
            <Input
                required
                placeholder="jouw naam"
                margin="0 0 1.4rem 0"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {error.field === "name" && <Error>{error.message}</Error>}
        </FlexCol>
    );
}
