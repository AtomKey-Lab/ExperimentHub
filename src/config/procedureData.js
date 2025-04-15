export const chemistryprocedureData = {
  phenolFormaldehyde: {
    name: "Phenol-formaldehyde Resin",
    color: "Pink",
    steps: [
      "Take 2 grams of phenol and 10 ml of glacial acetic acid in a 250 ml beaker.",
      "Add 5 ml of 40% formaldehyde solution to the mixture.",
      "Carefully add 2 ml of concentrated HCl slowly while heating the mixture slightly.",
      "After a few minutes, a large mass of pink plastic will form.",
      "Wash the product several times with distilled water.",
      "Filter, dry, and measure the weight of the formed pink plastic."
    ],
    result: "A pink-colored Phenol-formaldehyde resin is obtained."
  },
  ureaFormaldehyde: {
    name: "Urea-formaldehyde Resin",
    color: "White",
    steps: [
      "Add 5 ml of 40% formaldehyde solution to a 250 ml beaker.",
      "Add 2 grams of urea, stirring constantly until a saturated solution is obtained.",
      "Slowly add 2 ml of concentrated sulfuric acid while continuing to stir.",
      "A voluminous white solid mass will form in the beaker.",
      "Wash the white solid with water and dry it using filter paper folds.",
      "Filter, dry, and measure the weight of the formed white plastic."
    ],
    result: "A white-colored Urea-formaldehyde resin is obtained."
  }
};

export const gravitationProcedureData = {
  gravitationalMassExperiment: {
    name: "Exploring Gravity: Effects of Mass, Velocity, and Drag on Free-Falling Objects",
    color: "N/A",
    steps: [
      "Procedure for the Gravity Experiment",
      "Set Initial Values: Adjust mass, gravity, and drag coefficient sliders to set up the conditions.",
      "Start the Experiment: Press “Start Experiment” to release the object in a simulated environment.",
      "Observe the Motion: Watch the object fall in the container, with position and velocity updated in real time.",
      "Analyze Metrics: Observe metrics displayed (velocity, position) to understand the effect of gravity, mass, and drag.",
      "Reset Experiment: Press “Reset” to reset the object and restart with new values if desired."
    ],
    result: "The experiment shows that gravity increases an object’s velocity during free fall, while drag slows it down. Mass doesn’t impact the fall rate, highlighting uniform acceleration under gravity."
  }
};

export const acidBaseProcedureData = {
  acidBasePHExperiment: {
    name: "Acid-Base pH Test Using Indicators",
    color: "Varies with pH",
    steps: [
      "Take a small sample of the given solution in a test tube.",
      "Add a few drops of a universal indicator (or use litmus paper).",
      "Observe the color change in the solution or on the litmus paper.",
      "Compare the resulting color with the standard pH color chart.",
      "Note the pH range and determine whether the solution is acidic, basic, or neutral.",
      "Repeat the procedure with different known acids and bases for comparison."
    ],
    result: "The color change indicates the pH of the solution. Acidic solutions turn red/orange, neutral solutions remain green, and basic solutions turn blue/purple."
  }
};

// src/config/procedureData.js

export const balloonStaticProcedureData = {
  balloonStatic: {
    name: "Balloon and Static Electricity Simulation",
    color: "Yellow",
    steps: [
      "Select the 'Balloon' and 'Sweater' from the materials panel",
      "Rub the balloon against the sweater to build up static charge",
      "Bring the charged balloon close to the wall to observe attraction",
      "Try bringing two charged balloons close to each other to observe repulsion",
      "Experiment with different materials to see which builds the most charge"
    ],
    result: "You'll observe how static electricity can attract or repel objects based on their charges."
  }
};

export const molarityProcedureData = {
  molarity: {
    name: "Molarity Simulation",
    color: "Blue",
    steps: [
      "Select a solute from the available options (e.g., NaCl, sucrose)",
      "Adjust the amount of solute using the slider or input field",
      "Adjust the volume of solvent using the corresponding control",
      "Observe how the molarity changes as you modify these parameters",
      "Try creating saturated solutions and observe the point of saturation",
      "Experiment with different solutes to compare their solubility"
    ],
    result: "You'll understand how molarity is calculated and how it changes with amount of solute and volume of solution."
  }
};

export const waveOnStringProcedureData = {
  waveOnString: {
    name: "Wave On String Simulation",
    color: "Green",
    steps: [
      "Adjust the frequency of the oscillator using the slider",
      "Modify the damping level to see how it affects wave propagation",
      "Change the tension in the string using the tension control",
      "Switch between manual and automatic oscillation modes",
      "Try creating standing waves by adjusting frequency to match harmonics",
      "Observe how wave speed changes with different tensions"
    ],
    result: "You'll observe wave properties like wavelength, frequency, and amplitude, and how they relate to each other."
  }
};

export const densityProcedureData = {
  density: {
    name: "Density Simulation",
    color: "Red",
    steps: [
      "Select different objects from the materials panel",
      "Place them in different liquids (water, oil, etc.)",
      "Observe which objects float and which sink",
      "Compare the densities of different objects",
      "Try changing the liquid density and observe the effects",
      "Measure mass and volume of objects to calculate density"
    ],
    result: "You'll understand how density determines whether objects float or sink in different fluids."
  }
};

export const energyFormChangeProcedureData = {
  energyFormChange: {
    name: "Energy Form And Change Simulation",
    color: "Orange",
    steps: [
      "Select an energy source (sun, electricity, etc.)",
      "Connect it to different energy conversion devices",
      "Observe how energy transforms between forms (thermal, mechanical, etc.)",
      "Measure energy input and output using the measurement tools",
      "Try different combinations of energy sources and converters",
      "Observe energy losses in each conversion"
    ],
    result: "You'll observe how energy transforms between different forms and understand energy conservation principles."
  }
};

export const concentrationProcedureData = {
  concentration: {
    name: "Concentration Simulation",
    color: "Purple",
    steps: [
      "Select a solute from the available options",
      "Add solute to the solvent by clicking the 'Add' button",
      "Observe how concentration changes as you add more solute",
      "Use the dilution feature to observe how concentration decreases",
      "Compare concentrations using the color indicator",
      "Try creating specific concentration values using the controls"
    ],
    result: "You'll understand how concentration is affected by amount of solute and volume of solution."
  }
};

export const pHProcedureData = {
  pH: {
    name: "pH Simulation",
    color: "Pink",
    steps: [
      "Select different substances from the materials panel",
      "Test their pH using the virtual pH meter or indicator paper",
      "Observe the color changes in the indicator",
      "Try diluting acidic or basic solutions and observe pH changes",
      "Experiment with neutralization reactions",
      "Create buffer solutions and test their pH stability"
    ],
    result: "You'll understand the pH scale and how different substances can be acidic, basic, or neutral."
  }
};

export const electrolysisProcedureData = {
  electrolysis: {
    name: "Electrolysis Simulation",
    color: "Cyan",
    steps: [
      "Select an electrolyte solution (e.g., water, NaCl solution)",
      "Connect the power source and set the voltage",
      "Observe the reactions at the anode and cathode",
      "Collect and measure the gases produced",
      "Try different electrode materials",
      "Experiment with different electrolyte concentrations",
      "Observe how current affects the reaction rate"
    ],
    result: "You'll observe how electrical energy can drive chemical reactions and produce different products at each electrode."
  }
};







export const wavesProcedureData = {
  simulation1: {
    name: "Waves Simulation",
    color: "Light Blue",
    steps: [
      "Choose type of wave: transverse or longitudinal.",
      "Adjust amplitude, frequency, and medium.",
      "Observe wave behavior across different settings."
    ],
    result: "Wave properties affect speed and behavior of wave propagation."
  }
};

export const massSpringsProcedureData = {
  simulation1: {
    name: "Mass And Springs Simulation",
    color: "Light Green",
    steps: [
      "Attach different masses to the spring.",
      "Adjust spring constant and damping.",
      "Release mass and observe oscillation.",
    ],
    result: "Oscillation frequency depends on spring constant and mass."
  }
};

export const statesOfMatterProcedureData = {
  simulation1: {
    name: "States Of Matter Simulation",
    color: "Violet",
    steps: [
      "Add or remove heat from the container.",
      "Observe particles transitioning between solid, liquid, and gas.",
      "Change temperature and pressure to affect state.",
    ],
    result: "Heat and pressure affect phase transitions."
  }
};

export const hookesLawProcedureData = {
  simulation1: {
    name: "Hooke's Law Simulation",
    color: "Beige",
    steps: [
      "Apply force on a spring and measure extension.",
      "Plot force vs. extension graph.",
      "Calculate spring constant from slope.",
    ],
    result: "Hooke’s Law: F = -kx."
  }
};

export const balancingActProcedureData = {
  simulation1: {
    name: "Balancing Act",
    color: "Teal",
    steps: [
      "Place objects of various weights on the seesaw.",
      "Adjust distances to achieve balance.",
      "Observe torque on each side of the fulcrum.",
    ],
    result: "Balance is achieved when clockwise and counterclockwise torques are equal."
  }
};

export const forceProcedureData = {
  simulation1: {
    name: "Force Simulation",
    color: "Maroon",
    steps: [
      "Apply force to different objects.",
      "Measure acceleration and friction effects.",
      "Observe Newton's second law in action.",
    ],
    result: "F = ma; more force means more acceleration."
  }
};

export const soundWavesProcedureData = {
  simulation1: {
    name: "Sound Waves Simulation",
    color: "Indigo",
    steps: [
      "Play a sound through the medium.",
      "Adjust frequency and amplitude.",
      "Observe compression and rarefaction regions.",
    ],
    result: "Sound waves travel as longitudinal waves through a medium."
  }
};

export const glassSlabProcedureData = {
  simulation1: {
    name: "Glass Slab Simulation",
    color: "Gray",
    steps: [
      "Shine light through the glass slab at an angle.",
      "Measure angles of incidence and refraction.",
      "Observe lateral shift.",
    ],
    result: "Light bends at interfaces due to refraction."
  }
};

export const resistanceProcedureData = {
  simulation1: {
    name: "Resistance in Series and Parallel",
    color: "Dark Green",
    steps: [
      "Connect resistors in series and parallel.",
      "Measure total resistance using Ohm’s law.",
      "Compare with theoretical calculations.",
    ],
    result: "Series: R = R1 + R2 + ...; Parallel: 1/R = 1/R1 + 1/R2 + ..."
  }
};

export const opticsProcedureData = {
  simulation1: {
    name: "Convex Lens and Concave Mirror",
    color: "Dark Blue",
    steps: [
      "Place object at different positions from lens/mirror.",
      "Trace rays to find image location.",
      "Note image properties: real/virtual, inverted/upright.",
    ],
    result: "Image location depends on object distance from lens/mirror."
  }
};
