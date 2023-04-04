import React, { useRef } from 'react';
import classnames from 'classnames';

const HealthMonitor = ({ healthChecks }) => {
  const stripes = healthChecks.map((check, i) => (
    <div
      key={i}
      style={{
        marginLeft: 2,
        width: 3,
        borderRadius: 2
      }}
      className={classnames("h-4", {
        "bg-green-500": check,
        "bg-red-500": !check,
      })}
    />
  ));

  return <div className="flex flex-row">{stripes}</div>;
};


export default HealthMonitor;
