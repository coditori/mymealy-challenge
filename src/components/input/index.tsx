import { useHighlight } from 'hooks/use-highlight'
import { FC } from 'react'
import { classNames } from 'utils'

export const Input: FC<IInput> = ({
  value,
  label,
  loading,
  isNew,
}): JSX.Element => {
  const { highLight } = useHighlight(isNew, value)

  return (
    <div className="w-full flex flex-col space-y-2">
      <label
        htmlFor={label}
        className={classNames(
          'text-sm text-gray-600',
          loading && 'h-6 animate-pulse'
        )}
      >
        {label}
      </label>
      <input
        data-testid={label}
        disabled
        id={label}
        className={classNames(
          ' h-10 w-full rounded text-gray-700 px-4 transition-colors duration-1100 ease-in-out',
          loading && 'animate-pulse',
          highLight ? 'bg-blue-300 shadow-3xl-blue' : 'bg-gray-200'
        )}
        value={value || ''}
      />
    </div>
  )
}
