const circleCommonClasses = 'h-6 w-6 bg-gray-600 rounded-full'

export const LoaidngBounce = (): JSX.Element => {
  return (
    <div className="flex" data-testid="loading-bounce">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  )
}
