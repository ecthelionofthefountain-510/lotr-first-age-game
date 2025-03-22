import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'

export function HowToPlayDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-transparent border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-black transition">
          How to Play
        </button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border border-yellow-600 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">How to Play</DialogTitle>
          <DialogDescription className="text-white mt-2 text-sm leading-6">
            In <strong>Tales of the First Age</strong>, you'll choose a legendary character from the First Age of Middle-earth.
            <ul className="mt-4 space-y-2 list-disc pl-5 text-sm">
              <li>📜 Experience their unique story through illustrated choices.</li>
              <li>🧠 Make decisions that influence how the tale unfolds.</li>
              <li>⚔️ Fight in key battles using a simple turn-based system.</li>
              <li>🗺️ Track each character's journey on an interactive map.</li>
            </ul>
            <p className="mt-4 text-sm">
              Every playthrough offers a new path, shaped by your choices. Will you follow the tale or forge a new one?
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}