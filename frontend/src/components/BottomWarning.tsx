import { useNavigate } from "react-router-dom"

export function BottomWarning({label1,label2,label3}:{label1:string,label2:string,label3:string})
{
    const navigate = useNavigate();
    return <div className="flex">
        <div className="text-sm text-slate-500 text-left mt-2 px-1">
            {label1}
        </div>
        <div className="text-sm text-slate-600 underline cursor-pointer mt-2 px-1" onClick={() => navigate(label3)}>
            {label2}
        </div>
    </div>
}