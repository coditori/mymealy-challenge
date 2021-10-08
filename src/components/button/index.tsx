import { FC } from 'react'
import { classNames } from 'utils'

export const Button: FC<IButton> = ({
  fetching,
  children,
  onClick,
}): JSX.Element => (
  <button
    className={classNames(
      'px-6 h-10 bg-indigo-400 hover:opacity-80 rounded text-white',
      fetching && 'cursor-wait'
    )}
    onClick={onClick}
    disabled={fetching}
  >
    {fetching ? 'Loading ...' : children}
  </button>
)
