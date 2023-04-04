import React from "react";
import { IconCircleCheck as CheckCircle } from "@tabler/icons";
import { IconAlertTriangle as AlertTriangle } from "@tabler/icons";

const Environments = () => {
  const environments = [
    {
      name: "QA",
      services: 10,
      health: "All healthy",
      healthStatus: "success",
    },
    {
      name: "STG",
      services: 8,
      health: "2 unhealthy",
      healthStatus: "error",
    },
    {
      name: "Prod",
      services: 12,
      health: "All healthy",
      healthStatus: "success",
    },
  ];

  return (
    <div className="flex flex-col mt-6">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2 font-semibold">Name</th>
              <th className="px-4 py-2 font-semibold">Services</th>
              <th className="px-4 py-2 font-semibold">Health</th>
            </tr>
          </thead>
          <tbody>
            {environments.map((env, index) => (
              <tr
                key={env.name}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : ""
                } ${index < environments.length - 1 ? "border-b" : ""}`}
              >
                <td className="px-4 py-2">{env.name}</td>
                <td className="px-4 py-2">{env.services}</td>
                <td className="px-4 py-2 flex items-center">
                  {env.healthStatus === "success" ? (
                    <CheckCircle className="text-green-500 mr-2" />
                  ) : (
                    <AlertTriangle className="text-red-500 mr-2" />
                  )}
                  <span className={`text-${env.healthStatus}-500`}>
                    {env.health}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Environments;