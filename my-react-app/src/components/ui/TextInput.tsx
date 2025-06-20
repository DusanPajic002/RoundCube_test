
interface TextInputProps {
    labelText: string;
    text: string;
    setText: (text: string) => void;
}

export function TextInput({ labelText, text, setText }: TextInputProps) {
    return (
        <div>
            <label>{labelText}</label>
            <input
                type="text"
                id={labelText.toLowerCase()}
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
        </div>
    );
}