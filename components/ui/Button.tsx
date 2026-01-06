import { LucideIcon } from "lucide-react"
import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  children: React.ReactNode
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', icon: Icon, children, href, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
      primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10",
      secondary: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm",
      outline: "bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300",
      ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100",
    }

    const sizes = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-5 py-2.5",
      lg: "text-sm px-8 py-4",
    }

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    if (href) {
      return (
        <a href={href} className={combinedClassName}>
          {children}
          {Icon && <Icon className="w-4 h-4 ml-1" />}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
        {Icon && <Icon className="w-4 h-4 ml-1" />}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
