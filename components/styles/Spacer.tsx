type SizeT = 5 | 10 | 16 

export const Spacer = ({size}:{size: SizeT}) => {

  return <>
      {size === 5 && <div className="w-10 h-5" />}
      {size === 10 && <div className="w-10 h-10" />}
      {size === 16 && <div className="w-10 h-16" />}
    </>
}
