import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestinationAndDateProps {
    isGuestsInputOpen: boolean
    closeGuestsInputs: () => void
    openGuestsInput: () => void
}


export function DestinationAndDateStep({
    isGuestsInputOpen,
    closeGuestsInputs,
    openGuestsInput
}: DestinationAndDateProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
            </div>


            <div className="w-px h-6 bg-zinc-800"></div>

            {isGuestsInputOpen ? (
                <button onClick={closeGuestsInputs} className="bg-zinc-800 text-zinc-300 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                    Alterar local/data
                    <Settings2 className="size-5" />
                </button>
            ) : (
                <button onClick={openGuestsInput} className="bg-purple-950 text-zinc-300 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-900">
                    Continuar
                    <ArrowRight className="size-5 " />
                </button>
            )}
        </div>
    )
}