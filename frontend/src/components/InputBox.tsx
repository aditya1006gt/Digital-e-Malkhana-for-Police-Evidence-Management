export function InputBox({label,placeholder,value,onChange,type}:{label:string,placeholder:string,value:string,onChange:(e:any)=>void,type?:string}) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">{label}</label>
            <input
                value={value}
                type={type || "text"}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition outline-none text-sm"
            />
        </div>
    );
}
