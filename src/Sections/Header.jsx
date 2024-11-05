// Shared Tailwind CSS classes
const flexItemsCenter = 'flex items-center'
const textMutedForeground = 'text-muted-foreground'
const hoverTextPrimary = 'hover:text-primary'
 


export default function Header() {
  return (
    <div className="bg-background p-4 flex items-center justify-between">
      <div className={flexItemsCenter}>
        <img src="https://openui.fly.dev/openui/24x24.svg?text=🎓" alt="Creative IT Institute Logo" className="h-10 mr-2" />
        <span className="text-2xl font-bold text-primary">CREATIVE IT INSTITUTE</span>
        <span className={`text-sm ${textMutedForeground} ml-2`}>South Asia's Best IT Institute</span>
      </div>
      <nav className="flex space-x-4">
        <a href="#" className={`${textMutedForeground} ${hoverTextPrimary}`}>
          Home
        </a>
        <a href="#" className={`${textMutedForeground} ${hoverTextPrimary}`}>
          About us
        </a>
        <a href="#" className={`${textMutedForeground} ${hoverTextPrimary}`}>
          Success story
        </a>
        <a href="#" className={`${textMutedForeground} ${hoverTextPrimary}`}>
          Freelancing
        </a>
        <a href="#" className={`${textMutedForeground} ${hoverTextPrimary}`}>
          Contact
        </a>
      </nav>
      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg">Browse Course</button>
    </div>
  )
}
