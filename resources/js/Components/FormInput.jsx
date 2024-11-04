import Input from "./Input";

export default function FormInput({ htmlName, label, error, icon, ...props }) {
    return (
        <div className="flex flex-col">
            <label className="font-light text-xs" htmlFor={htmlName}>
                {label}
            </label>
            <Input svg={icon} name={htmlName} {...props} />
            {error && (
                <p className="text-red-500 text-xs leading-none font-light">
                    {error}
                </p>
            )}
        </div>
    );
}
