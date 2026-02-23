import { defineConfig, transformerCompileClass, transformerDirectives, presetUno } from 'unocss';

export default defineConfig({
    presets: [
        presetUno({ dark: 'class' }),
    ],
    theme: {
        fontFamily: {
            sans: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        },
    },
    transformers: import.meta.env.DEV ? [transformerDirectives()] : [transformerCompileClass(), transformerDirectives()],
    shortcuts: [{
        wrapper: 'w-100% max-w-[100vw] sm:max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-60px)] lg:max-w-[calc(100vw-80px)] xl:max-w-[1120px] mx-auto',
        title: 'text-6 sm:text-7 md:text-9 lg:text-10 leading-[1.2] dark:c-gray-100',
        'project-title': 'text-6 sm:text-7 md:text-8 leading-[1.1]',
        subtitle: 'text-5 sm:text-5.5 md:text-6 c-gray-700 leading-[1.2] dark:c-gray-300',
        'subtitle-small': 'text-3.5 sm:text-4 md:text-4.5 c-gray-700 leading-[1.3] dark:c-gray-300',
        small: 'text-xs sm:text-xs md:text-sm c-gray-700 leading-[1.2] dark:c-gray-300',
        'project-list': 'grid grid-cols-[1fr_120px] sm:grid-cols-[1fr_150px] md:grid-cols-[1fr_min-content_150px] lg:grid-cols-[1fr_min-content_min-content_150px] grid-auto-rows-[200px] items-stretch',
        'section--index': 'inline-grid border-b-1 md:border-l-1 md:border-r-0 border-r-1 border-gray-200 c-gray-700 dark:c-gray-300 dark:border-gray-800 w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-[10px] sm:text-xs md:text-sm text-center place-content-center absolute top-0 left-0 md:translate-x-[-100%]',
        'section--source': 'c-gray-700 dark:c-gray-300 text-[9px] sm:text-[10px] md:text-xs absolute top-[0.5rem] sm:top-[0.75rem] md:top-[1rem] right-[0.5rem] sm:right-[0.75rem] md:right-[1rem]',
        'investor--label': 'small pt-10 block pl-12.5 pb-3'
    }],
    variants: [
        (matcher) => {
            if (!matcher.startsWith('dark-inside:')) {
                return matcher;
            } else {
                return {
                    matcher: matcher.slice(12),
                    selector: (s) => `.dark-inside ${s}`
                }
            }
        }
    ]
});