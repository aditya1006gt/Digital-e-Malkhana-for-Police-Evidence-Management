interface StatsCardProps {
    title: string;
    value: number | string;
    icon: string;
    color: "blue" | "emerald" | "amber";
} 

export const StatsCard = ({ title, value, icon, color }: StatsCardProps) => {
    const colors = {
        blue: "border-blue-500/50 bg-blue-500/10 text-blue-400",
        emerald: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400",
        amber: "border-amber-500/50 bg-amber-500/10 text-amber-400"
    };

    return (
        <div className={`p-6 rounded-2xl border ${colors[color]} flex items-center justify-between shadow-lg`}>
            <div>
                <p className="text-sm font-medium opacity-80">{title}</p>
                <p className="text-3xl font-bold mt-1 text-black">{value}</p>
            </div>
            <div className="text-3xl bg-slate-900/50 p-3 rounded-xl">
                {icon}
            </div>
        </div>
    );
};