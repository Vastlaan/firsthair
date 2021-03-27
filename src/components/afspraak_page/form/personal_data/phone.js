import { FlexCol, Input, Label, Error } from "../../../../styles";

export default function PhoneComponent({ phone, setPhone, error }) {
    return (
        <FlexCol align="flex-start">
            <Label forHtml="tel">Telefoon*</Label>
            <Input
                required
                placeholder="jouw telefoon nummer"
                margin="0 0 1.4rem 0"
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            {error.field === "phone" && <Error>{error.message}</Error>}
        </FlexCol>
    );
}
