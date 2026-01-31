import { useNavigate } from "react-router-dom";

export const CaseTable = ({ cases }: { cases: any[] }) => {
    const navigate = useNavigate();

    if (cases.length === 0) {
        return (
            <div className="text-center py-10 text-slate-500">
                No case records found for your department.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
                <thead className="text-xs uppercase bg-slate-800/50 text-slate-400">
                    <tr>
                        <th className="px-6 py-4 font-medium">Crime No / FIR</th>
                        <th className="px-6 py-4 font-medium">I.O. Name</th>
                        <th className="px-6 py-4 font-medium">Act & Section</th>
                        <th className="px-6 py-4 font-medium">Items</th>
                        <th className="px-6 py-4 font-medium">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    {cases.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-800/30 transition">
                            <td className="px-6 py-4 font-bold text-white">
                                {c.crimeNumber || `FIR/${c.crimeYear}/${c.id.slice(0,4)}`}
                            </td>
                            <td className="px-6 py-4">{c.ioName}</td>
                            <td className="px-6 py-4">
                                <span className="px-2 py-1 bg-slate-800 rounded text-xs">
                                    {c.actLaw} {c.sectionLaw}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {c.properties?.length || 0} items
                            </td>
                            <td className="px-6 py-4">
                                <button 
                                    onClick={() => navigate(`/case/${c.id}`)}
                                    className="text-blue-400 hover:text-blue-300 font-medium underline"
                                >
                                    View Records
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};