import React from 'react'
import { Grid } from 'react-loader-spinner'

function Loader() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      
      <Grid
  visible={true}
  height="80"
  width="80"
  color="blue"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />

    </div>
  )
}

export default Loader
