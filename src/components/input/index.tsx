import { FC } from 'react'

export const Input: FC<IInput> = ({
  onChange,
  value,
  placeholder,
}): JSX.Element => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
      className="w-full h-10 rounded border border-gray-300 focus:ring-1 focus:ring-blue-400 px-4 mb-6"
    />
  )
}
