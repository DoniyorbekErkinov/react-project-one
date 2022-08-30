import React from 'react'

 const MyInput = ({...props}) => {
  return (
      <>
          <input
              {...props}
            />
      </>
  )
}
export default MyInput
// refs can be used in this way
// const MyInput = React.forwardRef((props, ref) => {
//   return (
//       <>
//           <input
//               {...props}
//               ref={ref}
//             />
//       </>
//   )
// })
// export default MyInput