'use client';

import { useState } from 'react';

type Option = {
  id: string;
  name: string;
  category: 'main' | 'style' | 'constraint';
  selected: boolean;
};

export default function DinnerPlanner() {
  const [options, setOptions] = useState<Option[]>([
    { id: '1', name: 'Biryani', category: 'main', selected: false },
    { id: '2', name: 'Pizza', category: 'main', selected: false },
    { id: '3', name: 'Pasta', category: 'main', selected: false },
    { id: '4', name: 'Christmas Special Dish', category: 'main', selected: false },
    { id: '5', name: 'Home Food Only', category: 'style', selected: false },
    { id: '6', name: 'No Cooking', category: 'style', selected: false },
    { id: '7', name: 'Order Online', category: 'style', selected: false },
    { id: '8', name: 'Budget Conscious', category: 'constraint', selected: false },
  ]);

  const toggleOption = (id: string) => {
    setOptions(options.map(opt => 
      opt.id === id ? { ...opt, selected: !opt.selected } : opt
    ));
  };

  const mainDishes = options.filter(o => o.category === 'main');
  const styles = options.filter(o => o.category === 'style');
  const constraints = options.filter(o => o.category === 'constraint');

  const selectedMains = mainDishes.filter(o => o.selected);
  const selectedStyles = styles.filter(o => o.selected);
  const selectedConstraints = constraints.filter(o => o.selected);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-red-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-700 mb-2">🎄 Christmas Dinner Planner</h1>
          <p className="text-gray-600">Organize your family's dinner ideas</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Main Dishes */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Main Dishes</h2>
            <div className="space-y-2">
              {mainDishes.map(option => (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    option.selected 
                      ? 'bg-red-100 border-2 border-red-500 text-red-900' 
                      : 'bg-gray-50 border-2 border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {option.selected ? '✓ ' : ''}{option.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cooking Style */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">Cooking Style</h2>
            <div className="space-y-2">
              {styles.map(option => (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    option.selected 
                      ? 'bg-green-100 border-2 border-green-500 text-green-900' 
                      : 'bg-gray-50 border-2 border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {option.selected ? '✓ ' : ''}{option.name}
                </button>
              ))}
            </div>
          </div>

          {/* Constraints */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-amber-600 mb-4">Constraints</h2>
            <div className="space-y-2">
              {constraints.map(option => (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    option.selected 
                      ? 'bg-amber-100 border-2 border-amber-500 text-amber-900' 
                      : 'bg-gray-50 border-2 border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {option.selected ? '✓ ' : ''}{option.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Dinner Plan</h2>
          
          {selectedMains.length === 0 && selectedStyles.length === 0 && selectedConstraints.length === 0 ? (
            <p className="text-gray-500 italic">Select options above to build your plan</p>
          ) : (
            <div className="space-y-4">
              {selectedMains.length > 0 && (
                <div>
                  <h3 className="font-semibold text-red-700 mb-2">Menu:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedMains.map(opt => <li key={opt.id}>{opt.name}</li>)}
                  </ul>
                </div>
              )}
              
              {selectedStyles.length > 0 && (
                <div>
                  <h3 className="font-semibold text-green-700 mb-2">How:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedStyles.map(opt => <li key={opt.id}>{opt.name}</li>)}
                  </ul>
                </div>
              )}
              
              {selectedConstraints.length > 0 && (
                <div>
                  <h3 className="font-semibold text-amber-700 mb-2">Keep in Mind:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedConstraints.map(opt => <li key={opt.id}>{opt.name}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

