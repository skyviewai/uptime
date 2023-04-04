import React from "react";
import { IconCircleCheck as CheckCircle } from "@tabler/icons";
import { IconAlertTriangle as AlertTriangle } from "@tabler/icons";

const services = [
  { name: "payment-service", status: "Healthy", uptime: "99.9%", healthChecks: [true, true, true, true, true, true, true] },
  { name: "shopping-service", status: "Unhealthy", uptime: "89.5%", healthChecks: [true, true, true, false, false, false, false] },
  { name: "booking-service", status: "Healthy", uptime: "100%", healthChecks: [true, true, true, true, true, true, true] },
  { name: "auth-service", status: "Healthy", uptime: "99.8%", healthChecks: [true, true, true, true, true, false, false] },
];

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
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{service.uptime}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="h-3 w-28 bg-gray-200 rounded-full overflow-hidden">
                  {service.healthChecks.map((healthCheck, index) => (
                    <div key={index} className={`h-3 ${healthCheck ? 'bg-green-500' : 'bg-red-500'} ${index !== 0 ? 'ml-1' : ''}`} />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
