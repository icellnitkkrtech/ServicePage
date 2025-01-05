import React, { useState } from "react";
import { BsPlus, BsTrash, BsUpload } from "react-icons/bs";

const AddWork = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "Development",
    description: "",
    startDate: "",
    endDate: "",
    priority: "Medium",
    totalBudget: "",
    phases: [
      {
        name: "",
        amount: "",
        deliverables: [""],
        dueDate: "",
      },
    ],
    documents: [],
  });

  const addPhase = () => {
    setFormData({
      ...formData,
      phases: [
        ...formData.phases,
        {
          name: "",
          amount: "",
          deliverables: [""],
          dueDate: "",
        },
      ],
    });
  };

  const removePhase = (index) => {
    const newPhases = formData.phases.filter((_, i) => i !== index);
    setFormData({ ...formData, phases: newPhases });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Request New Service</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Name
            </label>
            <input
              type="text"
              required
              className="w-full border rounded-lg p-2"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              className="w-full border rounded-lg p-2"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Content">Content</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              required
              rows={3}
              className="w-full border rounded-lg p-2"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              required
              className="w-full border rounded-lg p-2"
              value={formData.startDate}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              required
              className="w-full border rounded-lg p-2"
              value={formData.endDate}
              onChange={(e) =>
                setFormData({ ...formData, endDate: e.target.value })
              }
            />
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Project Phases</h3>
            <button
              type="button"
              onClick={addPhase}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
            >
              <BsPlus /> Add Phase
            </button>
          </div>

          {formData.phases.map((phase, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Phase {index + 1}</h4>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removePhase(index)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <BsTrash />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phase Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg p-2"
                    value={phase.name}
                    onChange={(e) => {
                      const newPhases = [...formData.phases];
                      newPhases[index].name = e.target.value;
                      setFormData({ ...formData, phases: newPhases });
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full border rounded-lg p-2"
                    value={phase.amount}
                    onChange={(e) => {
                      const newPhases = [...formData.phases];
                      newPhases[index].amount = e.target.value;
                      setFormData({ ...formData, phases: newPhases });
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Due Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full border rounded-lg p-2"
                    value={phase.dueDate}
                    onChange={(e) => {
                      const newPhases = [...formData.phases];
                      newPhases[index].dueDate = e.target.value;
                      setFormData({ ...formData, phases: newPhases });
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Documents */}
        <div>
          <h3 className="text-lg font-medium mb-4">Documents</h3>
          <div className="border-2 border-dashed rounded-lg p-6">
            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  documents: [...formData.documents, ...e.target.files],
                });
              }}
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <BsUpload className="text-gray-400 text-3xl" />
              <span className="text-gray-600">Click to upload documents</span>
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWork;
