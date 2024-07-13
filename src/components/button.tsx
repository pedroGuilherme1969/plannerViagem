import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
    base: 'rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2',

    variants: {
        variant: {
            primary: 'bg-purple-950 text-zinc-300 hover:bg-purple-900',
            secondary: 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
        },

        size: {
            default: 'py-2',
            full: 'w-full h-11'
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'default',
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button({ children, variant,size, ...props}: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant, size })}>
            {children}
        </button>
    )
}