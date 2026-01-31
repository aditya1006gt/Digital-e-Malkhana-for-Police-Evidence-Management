import { useNavigate } from "react-router-dom";

export const CaseTable = ({ cases }: { cases: any[] }) => {
    const navigate = useNavigate();

    if (cases.length === 0) {
        return (
            <div className="text-center py-20 text-gray-400 font-medium">
                No official case records found.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="px-6 py-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest">Case ID / FIR</th>
                        <th className="px-6 py-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest">Investigating Officer</th>
                        <th className="px-6 py-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest">Legal Section</th>
                        <th className="px-6 py-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest">Evidence Count</th>
                        <th className="px-6 py-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {cases.map((c) => (
                        <tr key={c.id} className="hover:bg-blue-50/30 transition-colors group">
                            <td className="px-6 py-4">
                                <span className="font-bold text-gray-900">{c.crimeNumber}</span>
                                <div className="text-[10px] text-gray-400 font-mono mt-0.5">{c.id.slice(0, 8)}...</div>
                            </td>
                            <td className="px-6 py-4 text-gray-700 font-medium">{c.ioName}</td>
                            <td className="px-6 py-4">
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold border border-gray-200">
                                    {c.actLaw} {c.sectionLaw}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-gray-600 font-semibold">
                                {c.properties?.length || 0} Items
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button 
                                    onClick={() => navigate(`/case/${c.id}`)}
                                    className="text-blue-600 hover:text-blue-800 font-bold text-xs underline decoration-2 underline-offset-4"
                                >
                                    VIEW FILE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};