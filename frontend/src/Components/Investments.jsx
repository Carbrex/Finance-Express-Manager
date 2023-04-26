import React from 'react'

const Investments = () => {
  return (
    <div>
      Investments(Beta)
      <Tab name={"Summary"} />

    </div>
  )
}

function Tab({ name }) {
  return (
    { name }
  );
}

export default Investments
