import { FlexCol, Input, Label, Error } from "../../../../styles";

export default function EmailComponent({ email, setEmail, error }) {
    return (
        <FlexCol align="flex-start">
            <Label forHtml="email">E-mail*</Label>
            <Input
                required
                placeholder="jouw e-mail"
                margin="0 0 1.4rem 0"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {error.field === "email" && <Error>{error.message}</Error>}
        </FlexCol>
    );
}
