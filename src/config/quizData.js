// Existing question sets (gravitationalQuestions, chemistryQuestions, acidBaseQuestions)
// ...

export const gravitationalQuestions = [
  {
    questionText: "Who first formulated the law of universal gravitation?",
    answerOptions: [
      { answerText: "Isaac Newton", isCorrect: true },
      { answerText: "Albert Einstein", isCorrect: false },
      { answerText: "Galileo Galilei", isCorrect: false },
      { answerText: "Nikola Tesla", isCorrect: false },
    ],
  },
  {
    questionText: "What is the gravitational constant (G) value?",
    answerOptions: [
      { answerText: "6.674 × 10^−11 N·m²/kg²", isCorrect: true },
      { answerText: "9.8 m/s²", isCorrect: false },
      { answerText: "10 N·m²/kg²", isCorrect: false },
      { answerText: "8.314 J/mol·K", isCorrect: false },
    ],
  },
  // ... additional gravitational questions (total 10)
];

export const chemistryQuestions = [
  {
    questionText: "What is the chemical symbol for water?",
    answerOptions: [
      { answerText: "H2O", isCorrect: true },
      { answerText: "CO2", isCorrect: false },
      { answerText: "O2", isCorrect: false },
      { answerText: "H2", isCorrect: false },
    ],
  },
  {
    questionText: "Which element has the atomic number 1?",
    answerOptions: [
      { answerText: "Helium", isCorrect: false },
      { answerText: "Hydrogen", isCorrect: true },
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Carbon", isCorrect: false },
    ],
  },
  {
    questionText: "What is the main gas found in the air we breathe?",
    answerOptions: [
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Carbon dioxide", isCorrect: false },
      { answerText: "Nitrogen", isCorrect: true },
      { answerText: "Hydrogen", isCorrect: false },
    ],
  },
  {
    questionText: "What type of bond involves the sharing of electrons?",
    answerOptions: [
      { answerText: "Ionic bond", isCorrect: false },
      { answerText: "Covalent bond", isCorrect: true },
      { answerText: "Metallic bond", isCorrect: false },
      { answerText: "Hydrogen bond", isCorrect: false },
    ],
  },
  {
    questionText: "Which of these is NOT a state of matter?",
    answerOptions: [
      { answerText: "Solid", isCorrect: false },
      { answerText: "Liquid", isCorrect: false },
      { answerText: "Gas", isCorrect: false },
      { answerText: "Energy", isCorrect: true },
    ],
  },
  {
    questionText: "What is the pH value of pure water at 25°C?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "7", isCorrect: true },
      { answerText: "10", isCorrect: false },
      { answerText: "14", isCorrect: false },
    ],
  },
  {
    questionText: "Which subatomic particle has a negative charge?",
    answerOptions: [
      { answerText: "Proton", isCorrect: false },
      { answerText: "Neutron", isCorrect: false },
      { answerText: "Electron", isCorrect: true },
      { answerText: "Nucleus", isCorrect: false },
    ],
  },
  {
    questionText: "What is the chemical formula for table salt?",
    answerOptions: [
      { answerText: "NaCl", isCorrect: true },
      { answerText: "H2SO4", isCorrect: false },
      { answerText: "CO2", isCorrect: false },
      { answerText: "CaCO3", isCorrect: false },
    ],
  },
  {
    questionText: "Which process involves a liquid turning into a gas?",
    answerOptions: [
      { answerText: "Freezing", isCorrect: false },
      { answerText: "Melting", isCorrect: false },
      { answerText: "Condensation", isCorrect: false },
      { answerText: "Evaporation", isCorrect: true },
    ],
  },
  {
    questionText: "What is the lightest element on the periodic table?",
    answerOptions: [
      { answerText: "Helium", isCorrect: false },
      { answerText: "Hydrogen", isCorrect: true },
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Lithium", isCorrect: false },
    ],
  },
];
export const acidBaseQuestions = [
  {
    questionText: "What is the pH value of a neutral solution?",
    answerOptions: [
      { answerText: "7", isCorrect: true },
      { answerText: "0", isCorrect: false },
      { answerText: "14", isCorrect: false },
      { answerText: "1", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is a strong acid?",
    answerOptions: [
      { answerText: "Acetic acid", isCorrect: false },
      { answerText: "Hydrochloric acid", isCorrect: true },
      { answerText: "Carbonic acid", isCorrect: false },
      { answerText: "Citric acid", isCorrect: false },
    ],
  },
  {
    questionText: "What color does litmus paper turn in acidic solutions?",
    answerOptions: [
      { answerText: "Blue", isCorrect: false },
      { answerText: "Red", isCorrect: true },
      { answerText: "Purple", isCorrect: false },
      { answerText: "Green", isCorrect: false },
    ],
  },
  {
    questionText: "Which ion is responsible for basic properties in solutions?",
    answerOptions: [
      { answerText: "H⁺", isCorrect: false },
      { answerText: "OH⁻", isCorrect: true },
      { answerText: "Cl⁻", isCorrect: false },
      { answerText: "Na⁺", isCorrect: false },
    ],
  },
  {
    questionText: "What is the pH range of acidic solutions?",
    answerOptions: [
      { answerText: "0-7", isCorrect: true },
      { answerText: "7-14", isCorrect: false },
      { answerText: "Exactly 7", isCorrect: false },
      { answerText: "Above 14", isCorrect: false },
    ],
  },
  {
    questionText: "Which of these is a common weak base?",
    answerOptions: [
      { answerText: "Sodium hydroxide", isCorrect: false },
      { answerText: "Ammonia", isCorrect: true },
      { answerText: "Potassium hydroxide", isCorrect: false },
      { answerText: "Calcium hydroxide", isCorrect: false },
    ],
  },
  {
    questionText: "What is the conjugate base of H₂SO₄?",
    answerOptions: [
      { answerText: "HSO₄⁻", isCorrect: true },
      { answerText: "SO₄²⁻", isCorrect: false },
      { answerText: "H₃SO₄⁺", isCorrect: false },
      { answerText: "H₂SO₄⁻", isCorrect: false },
    ],
  },
  {
    questionText: "Which pH value would indicate the strongest base?",
    answerOptions: [
      { answerText: "8", isCorrect: false },
      { answerText: "10", isCorrect: false },
      { answerText: "13", isCorrect: true },
      { answerText: "7", isCorrect: false },
    ],
  },
  {
    questionText: "What is the process called when an acid and base react to form water and a salt?",
    answerOptions: [
      { answerText: "Oxidation", isCorrect: false },
      { answerText: "Reduction", isCorrect: false },
      { answerText: "Neutralization", isCorrect: true },
      { answerText: "Hydrolysis", isCorrect: false },
    ],
  },
  {
    questionText: "Which of these substances is amphoteric?",
    answerOptions: [
      { answerText: "HCl", isCorrect: false },
      { answerText: "NaOH", isCorrect: false },
      { answerText: "H₂O", isCorrect: true },
      { answerText: "NaCl", isCorrect: false },
    ],
  },
];


export const balloonStaticElectricityQuestions = [
  {
    questionText: "What is static electricity?",
    answerOptions: [
      { answerText: "The buildup of electric charge on an object's surface", isCorrect: true },
      { answerText: "Electricity that flows in a circuit", isCorrect: false },
      { answerText: "A type of current used in power lines", isCorrect: false },
      { answerText: "Energy stored in batteries", isCorrect: false },
    ],
  },
  {
    questionText: "How does friction create static electricity on a balloon?",
    answerOptions: [
      { answerText: "By transferring electrons between surfaces", isCorrect: true },
      { answerText: "By generating heat", isCorrect: false },
      { answerText: "By causing chemical reactions", isCorrect: false },
      { answerText: "By initiating a magnetic field", isCorrect: false },
    ],
  },
  {
    questionText: "Which material is commonly used with a balloon to produce static electricity?",
    answerOptions: [
      { answerText: "Wool", isCorrect: true },
      { answerText: "Water", isCorrect: false },
      { answerText: "Glass", isCorrect: false },
      { answerText: "Steel", isCorrect: false },
    ],
  },
  {
    questionText: "What everyday example demonstrates static electricity?",
    answerOptions: [
      { answerText: "Rubbing a balloon on your hair", isCorrect: true },
      { answerText: "Using a smartphone", isCorrect: false },
      { answerText: "Turning on a light switch", isCorrect: false },
      { answerText: "Boiling water", isCorrect: false },
    ],
  },
  {
    questionText: "How does static electricity cause hair to stand on end?",
    answerOptions: [
      { answerText: "By repelling similarly charged strands", isCorrect: true },
      { answerText: "By attracting moisture", isCorrect: false },
      { answerText: "Through heat conduction", isCorrect: false },
      { answerText: "By chemical reaction", isCorrect: false },
    ],
  },
  {
    questionText: "What is the term for the charge that builds up on a balloon?",
    answerOptions: [
      { answerText: "Static charge", isCorrect: true },
      { answerText: "Dynamic charge", isCorrect: false },
      { answerText: "Current", isCorrect: false },
      { answerText: "Voltage", isCorrect: false },
    ],
  },
  {
    questionText: "How does static electricity affect small particles?",
    answerOptions: [
      { answerText: "It causes them to attract to charged surfaces", isCorrect: true },
      { answerText: "It makes them heavier", isCorrect: false },
      { answerText: "It cools them down", isCorrect: false },
      { answerText: "It changes their chemical composition", isCorrect: false },
    ],
  },
  {
    questionText: "Which best describes the effect of static cling?",
    answerOptions: [
      { answerText: "Materials sticking together due to static charge", isCorrect: true },
      { answerText: "Materials melting when in contact", isCorrect: false },
      { answerText: "Materials repelling each other", isCorrect: false },
      { answerText: "Materials dissolving in water", isCorrect: false },
    ],
  },
  {
    questionText: "What happens when a charged balloon is brought near a neutral object?",
    answerOptions: [
      { answerText: "It induces a temporary charge separation", isCorrect: true },
      { answerText: "It permanently charges the object", isCorrect: false },
      { answerText: "It has no effect", isCorrect: false },
      { answerText: "It cools the object", isCorrect: false },
    ],
  },
  {
    questionText: "How can static electricity be discharged safely?",
    answerOptions: [
      { answerText: "By touching a grounded metal object", isCorrect: true },
      { answerText: "By storing it in a battery", isCorrect: false },
      { answerText: "By increasing the friction", isCorrect: false },
      { answerText: "By immersing in water", isCorrect: false },
    ],
  },
];

// 2. Molarity Questions
export const molarityQuestions = [
  {
    questionText: "What does molarity measure in a solution?",
    answerOptions: [
      { answerText: "The concentration of moles of solute per liter of solution", isCorrect: true },
      { answerText: "The mass of solute per liter of solution", isCorrect: false },
      { answerText: "The density of the solution", isCorrect: false },
      { answerText: "The volume of solute per liter of solvent", isCorrect: false },
    ],
  },
  {
    questionText: "What is the SI unit for molarity?",
    answerOptions: [
      { answerText: "Moles per liter (M)", isCorrect: true },
      { answerText: "Grams per liter (g/L)", isCorrect: false },
      { answerText: "Liters per mole (L/mol)", isCorrect: false },
      { answerText: "Kilograms per cubic meter (kg/m³)", isCorrect: false },
    ],
  },
  {
    questionText: "How do you calculate the molarity of a solution?",
    answerOptions: [
      { answerText: "Divide the number of moles of solute by the volume of solution in liters", isCorrect: true },
      { answerText: "Divide the mass of solute by the volume of solution", isCorrect: false },
      { answerText: "Multiply the moles of solute by the solution volume", isCorrect: false },
      { answerText: "Divide the volume of solute by the number of moles", isCorrect: false },
    ],
  },
  {
    questionText: "If 1 mole of solute is dissolved in 1 liter of solution, what is the molarity?",
    answerOptions: [
      { answerText: "1 M", isCorrect: true },
      { answerText: "0.1 M", isCorrect: false },
      { answerText: "10 M", isCorrect: false },
      { answerText: "100 M", isCorrect: false },
    ],
  },
  {
    questionText: "How does changing the volume of a solution affect molarity?",
    answerOptions: [
      { answerText: "Increasing volume decreases molarity", isCorrect: true },
      { answerText: "Increasing volume increases molarity", isCorrect: false },
      { answerText: "Volume has no effect on molarity", isCorrect: false },
      { answerText: "Molarity doubles with volume increase", isCorrect: false },
    ],
  },
  {
    questionText: "How is molarity different from molality?",
    answerOptions: [
      { answerText: "Molarity is based on volume, molality on mass of solvent", isCorrect: true },
      { answerText: "Molarity is based on mass, molality on volume", isCorrect: false },
      { answerText: "They are the same concept", isCorrect: false },
      { answerText: "Molarity uses temperature while molality does not", isCorrect: false },
    ],
  },
  {
    questionText: "Which operation will increase the molarity of a solution?",
    answerOptions: [
      { answerText: "Adding more solute without changing the volume", isCorrect: true },
      { answerText: "Increasing the volume without adding solute", isCorrect: false },
      { answerText: "Diluting the solution with more solvent", isCorrect: false },
      { answerText: "Removing some solute", isCorrect: false },
    ],
  },
  {
    questionText: "What is the formula for molarity?",
    answerOptions: [
      { answerText: "Molarity = moles of solute ÷ liters of solution", isCorrect: true },
      { answerText: "Molarity = mass of solute ÷ liters of solution", isCorrect: false },
      { answerText: "Molarity = liters of solution ÷ moles of solute", isCorrect: false },
      { answerText: "Molarity = moles of solute × liters of solution", isCorrect: false },
    ],
  },
  {
    questionText: "What happens to the molarity when a solution is diluted?",
    answerOptions: [
      { answerText: "The molarity decreases", isCorrect: true },
      { answerText: "The molarity increases", isCorrect: false },
      { answerText: "The molarity remains unchanged", isCorrect: false },
      { answerText: "The molarity doubles", isCorrect: false },
    ],
  },
  {
    questionText: "If the molarity of a solution is known, how can you calculate the moles of solute present in a given volume?",
    answerOptions: [
      { answerText: "Multiply the molarity by the volume in liters", isCorrect: true },
      { answerText: "Divide the molarity by the volume", isCorrect: false },
      { answerText: "Multiply the molarity by the mass of the solvent", isCorrect: false },
      { answerText: "Divide the volume by the molarity", isCorrect: false },
    ],
  },
];

// 3. Wave String Questions
export const waveStringQuestions = [
  {
    questionText: "What is a transverse wave on a string?",
    answerOptions: [
      { answerText: "A wave where the displacement is perpendicular to the direction of propagation", isCorrect: true },
      { answerText: "A wave where the displacement is parallel to the direction of propagation", isCorrect: false },
      { answerText: "A type of sound wave", isCorrect: false },
      { answerText: "A stationary vibration", isCorrect: false },
    ],
  },
  {
    questionText: "What does the amplitude of a string wave represent?",
    answerOptions: [
      { answerText: "The maximum displacement from equilibrium", isCorrect: true },
      { answerText: "The distance between two consecutive nodes", isCorrect: false },
      { answerText: "The speed of the wave", isCorrect: false },
      { answerText: "The frequency of the wave", isCorrect: false },
    ],
  },
  {
    questionText: "Which factor directly determines the speed of a wave on a string?",
    answerOptions: [
      { answerText: "The tension in the string", isCorrect: true },
      { answerText: "The color of the string", isCorrect: false },
      { answerText: "The material of the surrounding air", isCorrect: false },
      { answerText: "The amplitude of the wave", isCorrect: false },
    ],
  },
  {
    questionText: "How is frequency related to wavelength in a string wave?",
    answerOptions: [
      { answerText: "They are inversely proportional", isCorrect: true },
      { answerText: "They are directly proportional", isCorrect: false },
      { answerText: "Frequency is the square of the wavelength", isCorrect: false },
      { answerText: "Wavelength does not affect frequency", isCorrect: false },
    ],
  },
  {
    questionText: "What effect does increasing the tension of the string have on wave speed?",
    answerOptions: [
      { answerText: "It increases the wave speed", isCorrect: true },
      { answerText: "It decreases the wave speed", isCorrect: false },
      { answerText: "It has no effect", isCorrect: false },
      { answerText: "It changes the amplitude only", isCorrect: false },
    ],
  },
  {
    questionText: "How are period and frequency related in a wave?",
    answerOptions: [
      { answerText: "Period is the inverse of frequency", isCorrect: true },
      { answerText: "Period is equal to frequency", isCorrect: false },
      { answerText: "Period is the square of frequency", isCorrect: false },
      { answerText: "They are unrelated", isCorrect: false },
    ],
  },
  {
    questionText: "Which parameter describes the distance between successive peaks in a wave?",
    answerOptions: [
      { answerText: "Wavelength", isCorrect: true },
      { answerText: "Amplitude", isCorrect: false },
      { answerText: "Frequency", isCorrect: false },
      { answerText: "Period", isCorrect: false },
    ],
  },
  {
    questionText: "How is energy transmitted along a string wave?",
    answerOptions: [
      { answerText: "Through the propagation of vibrational energy", isCorrect: true },
      { answerText: "By the movement of individual molecules from one end to the other", isCorrect: false },
      { answerText: "Through electromagnetic radiation", isCorrect: false },
      { answerText: "By transferring mass along the string", isCorrect: false },
    ],
  },
  {
    questionText: "In a standing wave, what are nodes?",
    answerOptions: [
      { answerText: "Points that remain stationary", isCorrect: true },
      { answerText: "Points with maximum displacement", isCorrect: false },
      { answerText: "Points where the wave speed is maximum", isCorrect: false },
      { answerText: "Points where energy is produced", isCorrect: false },
    ],
  },
  {
    questionText: "What condition is necessary for resonance in a string instrument?",
    answerOptions: [
      { answerText: "The frequency of the source matches the natural frequency of the string", isCorrect: true },
      { answerText: "The amplitude of the source is extremely low", isCorrect: false },
      { answerText: "There is no air resistance", isCorrect: false },
      { answerText: "The string is made of metal", isCorrect: false },
    ],
  },
];

// 4. Density Questions
export const densityQuestions = [
  {
    questionText: "How is density defined in physics?",
    answerOptions: [
      { answerText: "Mass per unit volume", isCorrect: true },
      { answerText: "Volume per unit mass", isCorrect: false },
      { answerText: "Mass times volume", isCorrect: false },
      { answerText: "Weight per unit volume", isCorrect: false },
    ],
  },
  {
    questionText: "What is the formula for calculating density?",
    answerOptions: [
      { answerText: "Density = mass/volume", isCorrect: true },
      { answerText: "Density = volume/mass", isCorrect: false },
      { answerText: "Density = mass × volume", isCorrect: false },
      { answerText: "Density = mass − volume", isCorrect: false },
    ],
  },
  {
    questionText: "Between two objects with the same mass, which one has greater density?",
    answerOptions: [
      { answerText: "The one with the smaller volume", isCorrect: true },
      { answerText: "The one with the larger volume", isCorrect: false },
      { answerText: "They have equal density", isCorrect: false },
      { answerText: "Density does not depend on volume", isCorrect: false },
    ],
  },
  {
    questionText: "What is the SI unit for density?",
    answerOptions: [
      { answerText: "kg/m³", isCorrect: true },
      { answerText: "g/cm³", isCorrect: false },
      { answerText: "N/m²", isCorrect: false },
      { answerText: "J/m³", isCorrect: false },
    ],
  },
  {
    questionText: "How does an increase in temperature usually affect the density of a liquid?",
    answerOptions: [
      { answerText: "It decreases the density", isCorrect: true },
      { answerText: "It increases the density", isCorrect: false },
      { answerText: "Temperature has no effect", isCorrect: false },
      { answerText: "It doubles the density", isCorrect: false },
    ],
  },
  {
    questionText: "What is the relationship between density and buoyancy?",
    answerOptions: [
      { answerText: "Lower density often allows an object to float", isCorrect: true },
      { answerText: "Higher density always means better buoyancy", isCorrect: false },
      { answerText: "They are unrelated", isCorrect: false },
      { answerText: "Buoyancy increases with increased density", isCorrect: false },
    ],
  },
  {
    questionText: "How can you predict if an object will float in water?",
    answerOptions: [
      { answerText: "If its density is lower than that of water", isCorrect: true },
      { answerText: "If its density is higher than that of water", isCorrect: false },
      { answerText: "By its color", isCorrect: false },
      { answerText: "None of these", isCorrect: false },
    ],
  },
  {
    questionText: "What happens to density if mass increases while volume remains constant?",
    answerOptions: [
      { answerText: "Density increases", isCorrect: true },
      { answerText: "Density decreases", isCorrect: false },
      { answerText: "Density remains unchanged", isCorrect: false },
      { answerText: "Density becomes zero", isCorrect: false },
    ],
  },
  {
    questionText: "How does the density of water compare to that of air?",
    answerOptions: [
      { answerText: "Water is much denser than air", isCorrect: true },
      { answerText: "Air is denser than water", isCorrect: false },
      { answerText: "They have similar densities", isCorrect: false },
      { answerText: "It depends on the temperature", isCorrect: false },
    ],
  },
  {
    questionText: "What does specific gravity refer to in context of density?",
    answerOptions: [
      { answerText: "The ratio of a substance's density to the density of water", isCorrect: true },
      { answerText: "The difference between mass and volume", isCorrect: false },
      { answerText: "The weight of a substance per unit volume", isCorrect: false },
      { answerText: "The total mass of the substance", isCorrect: false },
    ],
  },
];

// 5. Energy Change Forms Questions
export const energyChangeFormsQuestions = [
  {
    questionText: "What does energy transformation refer to?",
    answerOptions: [
      { answerText: "The conversion of energy from one form to another", isCorrect: true },
      { answerText: "The destruction of energy", isCorrect: false },
      { answerText: "The creation of energy", isCorrect: false },
      { answerText: "The storage of energy indefinitely", isCorrect: false },
    ],
  },
  {
    questionText: "What type of energy change occurs inside a light bulb?",
    answerOptions: [
      { answerText: "Electrical energy converts into light and thermal energy", isCorrect: true },
      { answerText: "Thermal energy converts into electrical energy", isCorrect: false },
      { answerText: "Mechanical energy converts into chemical energy", isCorrect: false },
      { answerText: "Nuclear energy converts into electrical energy", isCorrect: false },
    ],
  },
  {
    questionText: "Which scenario represents a conversion from potential to kinetic energy?",
    answerOptions: [
      { answerText: "A falling object", isCorrect: true },
      { answerText: "A charged battery at rest", isCorrect: false },
      { answerText: "A stationary car", isCorrect: false },
      { answerText: "A heated room", isCorrect: false },
    ],
  },
  {
    questionText: "In which form of energy is chemical energy stored?",
    answerOptions: [
      { answerText: "In the bonds of molecules", isCorrect: true },
      { answerText: "As motion", isCorrect: false },
      { answerText: "As radiant energy", isCorrect: false },
      { answerText: "In the gravitational field", isCorrect: false },
    ],
  },
  {
    questionText: "How is thermal energy related to energy transformations?",
    answerOptions: [
      { answerText: "It is often released as a by-product during conversions", isCorrect: true },
      { answerText: "It is never generated during transformations", isCorrect: false },
      { answerText: "It only converts into nuclear energy", isCorrect: false },
      { answerText: "It stops energy transformation", isCorrect: false },
    ],
  },
  {
    questionText: "During an exothermic reaction, what happens regarding energy?",
    answerOptions: [
      { answerText: "Energy is released into the surroundings", isCorrect: true },
      { answerText: "Energy is absorbed from the surroundings", isCorrect: false },
      { answerText: "Energy remains contained within the system", isCorrect: false },
      { answerText: "No energy transformation occurs", isCorrect: false },
    ],
  },
  {
    questionText: "How is mechanical energy transformed in a pendulum?",
    answerOptions: [
      { answerText: "Between potential and kinetic energy", isCorrect: true },
      { answerText: "Between electrical and thermal energy", isCorrect: false },
      { answerText: "Only into nuclear energy", isCorrect: false },
      { answerText: "It remains constant", isCorrect: false },
    ],
  },
  {
    questionText: "During photosynthesis, which energy conversion takes place?",
    answerOptions: [
      { answerText: "Light energy converts into chemical energy", isCorrect: true },
      { answerText: "Thermal energy converts into electrical energy", isCorrect: false },
      { answerText: "Kinetic energy converts into potential energy", isCorrect: false },
      { answerText: "Mechanical energy converts into nuclear energy", isCorrect: false },
    ],
  },
  {
    questionText: "What does the principle of conservation of energy state?",
    answerOptions: [
      { answerText: "Energy cannot be created or destroyed, only transformed", isCorrect: true },
      { answerText: "Energy is constantly increasing", isCorrect: false },
      { answerText: "Energy is only lost during transformations", isCorrect: false },
      { answerText: "Energy must always be converted to heat", isCorrect: false },
    ],
  },
  {
    questionText: "How is electrical energy converted in an electric motor?",
    answerOptions: [
      { answerText: "It converts electrical energy into mechanical energy", isCorrect: true },
      { answerText: "It converts mechanical energy into chemical energy", isCorrect: false },
      { answerText: "It converts thermal energy into electrical energy", isCorrect: false },
      { answerText: "It remains as electrical energy", isCorrect: false },
    ],
  },
];

// 6. Concentration Questions
export const concentrationQuestions = [
  {
    questionText: "What does concentration refer to in a solution?",
    answerOptions: [
      { answerText: "The amount of solute present in a given quantity of solvent", isCorrect: true },
      { answerText: "The speed at which a solute dissolves", isCorrect: false },
      { answerText: "The temperature of the solution", isCorrect: false },
      { answerText: "The pressure exerted by the solute", isCorrect: false },
    ],
  },
  {
    questionText: "How is concentration expressed as a percentage?",
    answerOptions: [
      { answerText: "Mass of solute divided by total mass, multiplied by 100%", isCorrect: true },
      { answerText: "Volume of solute divided by total volume", isCorrect: false },
      { answerText: "Number of moles of solute times 100", isCorrect: false },
      { answerText: "Mass of solvent divided by mass of solute", isCorrect: false },
    ],
  },
  {
    questionText: "What is the main difference between molarity and percent concentration?",
    answerOptions: [
      { answerText: "Molarity is based on moles per liter, percent concentration is based on mass or volume percent", isCorrect: true },
      { answerText: "They are calculated in the same way", isCorrect: false },
      { answerText: "Percent concentration uses moles, molarity does not", isCorrect: false },
      { answerText: "Molarity uses temperature while percent concentration does not", isCorrect: false },
    ],
  },
  {
    questionText: "Which instrument can be used to measure concentration using light absorption?",
    answerOptions: [
      { answerText: "Spectrophotometer", isCorrect: true },
      { answerText: "Barometer", isCorrect: false },
      { answerText: "Thermometer", isCorrect: false },
      { answerText: "Hydrometer", isCorrect: false },
    ],
  },
  {
    questionText: "What happens to solute particle density when concentration increases?",
    answerOptions: [
      { answerText: "There are more particles in a given volume", isCorrect: true },
      { answerText: "There are fewer particles", isCorrect: false },
      { answerText: "The particles become larger", isCorrect: false },
      { answerText: "The particles gain extra charge", isCorrect: false },
    ],
  },
  {
    questionText: "What is a solution called when it has a very high concentration of solute?",
    answerOptions: [
      { answerText: "Concentrated solution", isCorrect: true },
      { answerText: "Dilute solution", isCorrect: false },
      { answerText: "Saturated vapor", isCorrect: false },
      { answerText: "Supersaturated solution", isCorrect: false },
    ],
  },
  {
    questionText: "How does dilution affect the concentration of a solution?",
    answerOptions: [
      { answerText: "It lowers the concentration", isCorrect: true },
      { answerText: "It increases the concentration", isCorrect: false },
      { answerText: "It has no effect", isCorrect: false },
      { answerText: "It changes the solute type", isCorrect: false },
    ],
  },
  {
    questionText: "Which method can concentrate a solution by removing the solvent?",
    answerOptions: [
      { answerText: "Evaporation", isCorrect: true },
      { answerText: "Filtration", isCorrect: false },
      { answerText: "Distillation without heat", isCorrect: false },
      { answerText: "Centrifugation", isCorrect: false },
    ],
  },
  {
    questionText: "What is typically true about the concentration of a saturated solution?",
    answerOptions: [
      { answerText: "It has the maximum solute dissolved at a given temperature", isCorrect: true },
      { answerText: "It can dissolve any amount of solute", isCorrect: false },
      { answerText: "It is always dilute", isCorrect: false },
      { answerText: "Its concentration is zero", isCorrect: false },
    ],
  },
  {
    questionText: "How can concentration affect reaction rates in chemistry?",
    answerOptions: [
      { answerText: "Higher concentration generally increases the reaction rate", isCorrect: true },
      { answerText: "Higher concentration always slows down reactions", isCorrect: false },
      { answerText: "Concentration has no effect on reaction rate", isCorrect: false },
      { answerText: "Higher concentration decreases molecular collisions", isCorrect: false },
    ],
  },
];

// 7. pH Questions
export const phQuestions = [
  {
    questionText: "What does pH measure?",
    answerOptions: [
      { answerText: "The acidity or basicity of a solution", isCorrect: true },
      { answerText: "The concentration of solute", isCorrect: false },
      { answerText: "The density of a solution", isCorrect: false },
      { answerText: "The temperature of a solution", isCorrect: false },
    ],
  },
  {
    questionText: "What is the pH value of a neutral solution?",
    answerOptions: [
      { answerText: "7", isCorrect: true },
      { answerText: "0", isCorrect: false },
      { answerText: "14", isCorrect: false },
      { answerText: "1", isCorrect: false },
    ],
  },
  {
    questionText: "Which pH value indicates an acidic solution?",
    answerOptions: [
      { answerText: "Below 7", isCorrect: true },
      { answerText: "Above 7", isCorrect: false },
      { answerText: "Exactly 7", isCorrect: false },
      { answerText: "pH does not indicate acidity", isCorrect: false },
    ],
  },
  {
    questionText: "Which pH value indicates a basic (alkaline) solution?",
    answerOptions: [
      { answerText: "Above 7", isCorrect: true },
      { answerText: "Below 7", isCorrect: false },
      { answerText: "Exactly 7", isCorrect: false },
      { answerText: "Equal to 0", isCorrect: false },
    ],
  },
  {
    questionText: "How is the pH scale characterized?",
    answerOptions: [
      { answerText: "It is logarithmic", isCorrect: true },
      { answerText: "It is linear", isCorrect: false },
      { answerText: "It is exponential", isCorrect: false },
      { answerText: "It is quadratic", isCorrect: false },
    ],
  },
  {
    questionText: "What is likely to happen to the pH when an acid is diluted?",
    answerOptions: [
      { answerText: "It tends to shift slightly towards neutral", isCorrect: true },
      { answerText: "It becomes strongly acidic", isCorrect: false },
      { answerText: "It becomes strongly basic", isCorrect: false },
      { answerText: "It remains unchanged", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following substances is typically acidic?",
    answerOptions: [
      { answerText: "Lemon juice", isCorrect: true },
      { answerText: "Baking soda solution", isCorrect: false },
      { answerText: "Pure water", isCorrect: false },
      { answerText: "Milk", isCorrect: false },
    ],
  },
  {
    questionText: "Which indicator is commonly used to determine pH in a solution?",
    answerOptions: [
      { answerText: "Litmus paper", isCorrect: true },
      { answerText: "Starch solution", isCorrect: false },
      { answerText: "Iodine solution", isCorrect: false },
      { answerText: "Bromine water", isCorrect: false },
    ],
  },
  {
    questionText: "How does pH affect enzyme activity in the human body?",
    answerOptions: [
      { answerText: "Enzymes have optimal pH levels for maximum activity", isCorrect: true },
      { answerText: "pH has no effect on enzyme activity", isCorrect: false },
      { answerText: "Enzyme activity increases indefinitely with pH", isCorrect: false },
      { answerText: "Low pH always increases enzyme efficiency", isCorrect: false },
    ],
  },
  {
    questionText: "What is the formula used to calculate pH?",
    answerOptions: [
      { answerText: "pH = -log[H⁺]", isCorrect: true },
      { answerText: "pH = log[H⁺]", isCorrect: false },
      { answerText: "pH = [H⁺] × 10", isCorrect: false },
      { answerText: "pH = [OH⁻]", isCorrect: false },
    ],
  },
];

// 8. Electrolysis Questions
export const electrolysisQuestions = [
  {
    questionText: "What is electrolysis?",
    answerOptions: [
      { answerText: "A process that uses electrical energy to drive a non-spontaneous chemical reaction", isCorrect: true },
      { answerText: "A method to measure electrical resistance", isCorrect: false },
      { answerText: "The spontaneous flow of electrons", isCorrect: false },
      { answerText: "The process of converting kinetic energy to electrical energy", isCorrect: false },
    ],
  },
  {
    questionText: "Which components are necessary for electrolysis?",
    answerOptions: [
      { answerText: "Electrolyte, electrodes, and an external power source", isCorrect: true },
      { answerText: "Only a battery", isCorrect: false },
      { answerText: "An insulator and a conductor", isCorrect: false },
      { answerText: "Magnetic poles and a transistor", isCorrect: false },
    ],
  },
  {
    questionText: "What is the role of the electrolyte in electrolysis?",
    answerOptions: [
      { answerText: "It conducts ions between electrodes", isCorrect: true },
      { answerText: "It serves as a solid barrier", isCorrect: false },
      { answerText: "It blocks electron flow", isCorrect: false },
      { answerText: "It generates heat", isCorrect: false },
    ],
  },
  {
    questionText: "Which electrode attracts cations during electrolysis?",
    answerOptions: [
      { answerText: "Cathode", isCorrect: true },
      { answerText: "Anode", isCorrect: false },
      { answerText: "Insulator", isCorrect: false },
      { answerText: "Resistor", isCorrect: false },
    ],
  },
  {
    questionText: "What substance can be produced by the electrolysis of water?",
    answerOptions: [
      { answerText: "Hydrogen gas", isCorrect: true },
      { answerText: "Oxygen gas only", isCorrect: false },
      { answerText: "Carbon dioxide", isCorrect: false },
      { answerText: "Nitrogen gas", isCorrect: false },
    ],
  },
  {
    questionText: "What occurs at the cathode during electrolysis?",
    answerOptions: [
      { answerText: "Reduction takes place", isCorrect: true },
      { answerText: "Oxidation takes place", isCorrect: false },
      { answerText: "Both oxidation and reduction occur", isCorrect: false },
      { answerText: "No chemical reaction occurs", isCorrect: false },
    ],
  },
  {
    questionText: "Which factor can increase the rate of electrolysis?",
    answerOptions: [
      { answerText: "Increasing the applied voltage", isCorrect: true },
      { answerText: "Decreasing the temperature", isCorrect: false },
      { answerText: "Using a non-conductive electrolyte", isCorrect: false },
      { answerText: "Increasing the distance between electrodes", isCorrect: false },
    ],
  },
  {
    questionText: "How does voltage affect the electrolysis process?",
    answerOptions: [
      { answerText: "Higher voltage generally increases the reaction rate", isCorrect: true },
      { answerText: "Higher voltage decreases the reaction rate", isCorrect: false },
      { answerText: "Voltage has no effect", isCorrect: false },
      { answerText: "It only affects the cathode, not the anode", isCorrect: false },
    ],
  },
  {
    questionText: "What is the significance of Faraday's laws in electrolysis?",
    answerOptions: [
      { answerText: "They relate the amount of substance produced to the quantity of electricity used", isCorrect: true },
      { answerText: "They describe the voltage required for electrolysis", isCorrect: false },
      { answerText: "They measure the purity of the electrolyte", isCorrect: false },
      { answerText: "They determine the electrode distance", isCorrect: false },
    ],
  },
  {
    questionText: "Which application of electrolysis is common in industry?",
    answerOptions: [
      { answerText: "Extraction of metals from ores", isCorrect: true },
      { answerText: "Measuring pH levels", isCorrect: false },
      { answerText: "Cooling electronic devices", isCorrect: false },
      { answerText: "Forming alloys through heat treatment", isCorrect: false },
    ],
  },
];
