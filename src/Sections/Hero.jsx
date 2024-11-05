
const headerClasses = 'bg-red-500 text-white flex items-center justify-between p-4'
const contactInfoClasses = 'flex items-center space-x-4'
const buttonClasses = 'bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-zinc-200'

export default function Hero() {
  return (
    <div className={headerClasses}>
      <div className={contactInfoClasses}>
        <span>📞 0777389777</span>
        <a href="mailto:help@creativeinstitute.com" className="hover:underline">
          help@creativeinstitute.com
        </a>
      </div>
      <button className={buttonClasses}>EN</button>
    </div>
  )
}
