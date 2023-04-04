import React from "react";
import { IconCircleCheck as CheckCircle } from "@tabler/icons";
import { IconAlertTriangle as AlertTriangle } from "@tabler/icons";
import HealthMonitor from "../HealthMonitor";

const services = [
  { name: "payment-service", status: "Healthy", uptime: 99.9},
  { name: "shopping-service", status: "Unhealthy", uptime: 89.5},
  { name: "booking-service", status: "Healthy", uptime: 100},
  { name: "auth-service", status: "Healthy", uptime: 99.8},
];

function generateHealthCheckData(uptime) {
  if (uptime === 0) {
    return new Array(20).fill(false);
  } else if (uptime === 100) {
    return new Array(20).fill(true);
  } else {
    const trueCount = Math.floor((uptime / 100) * 20);
    const healthCheckData = new Array(20).fill(false);
    for (let i = 0; i < trueCount; i++) {
      healthCheckData[i] = true;
    }
    return shuffleArray(healthCheckData);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Services = () => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Uptime</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Monitor</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {services.map((service, index) => (
            <tr key={index} className={`${index % 2 === 1 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{service.name}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{service.status === "Healthy" ? <CheckCircle className="inline-block text-green-500" size={16} /> : <AlertTriangle className="inline-block text-red-500" size={16} />}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{service.uptime}%</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <HealthMonitor healthChecks={generateHealthCheckData(service.uptime)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
