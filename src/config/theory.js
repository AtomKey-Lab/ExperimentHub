export const gravitationTheory = {
    description: "Gravitation is the force by which two bodies attract each other. This experiment illustrates gravitational pull and air resistance (drag) effects on a falling object, allowing us to examine how these forces influence the object’s velocity and position over time.",
    laws: [
      {
        lawName: "Newton's Law of Universal Gravitation",
        description: "Every particle in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.",
        formula: "F = G * (m1 * m2) / r^2"
      },
      {
        lawName: "Gravitational Acceleration",
        description: "Near the surface of the Earth, all objects fall with the same constant acceleration, regardless of their mass.",
        formula: "g = 9.8 m/s^2"
      }
    ],
    properties: [
      "Always Attractive: The gravitational force is always pulling objects toward Earth.",
"Inversely Proportional to Distance: The gravitational force decreases with distance but remains effective within the small simulation distance.",
"Influenced by Mass and Gravity: While mass remains constant, gravitational acceleration can be adjusted to observe changes in force.",
    ],
    uses: [
      "Astronomy: Explains orbits and gravitational effects on celestial bodies.",
      "Earth Sciences: Analyzes tides, Earth's shape, and geophysical surveys.",
      "Technology: Powers satellite, GPS, and space exploration.",
      "Daily Life: Explains falling objects and experienced weight.",
    ],
    applications: [
      "Space Exploration: Calculating satellite orbits and gravity assists.",
      "Tidal Studies: Tidal predictions and coastal management.",
      "Planetary Motion: Understanding orbits and researching dark matter.",
      "Engineering: Gravity-based surveying and structural stability.",
      "Future Research: Insights into quantum gravity and black hole studies.",
    ],
    futureResearch: "Expanding knowledge of gravitation could lead to insights into quantum gravity, unifying general relativity and quantum mechanics."
  };
  
  export const chemistryTheory = {
    phenolFormaldehydeResin: {
      description: "Phenol formaldehyde resins (PFs) are condensation polymers obtained by condensing phenol with formaldehyde in the presence of an acidic or alkaline catalyst. They were first prepared by Backeland, an American Chemist who named them Bakelite. These are thermosetting polymers.",
      thermosets: "Polymers that change irreversibly into hard, rigid, and infusible materials upon heating are called thermosetting polymers. They are usually prepared by heating relatively low molecular mass, semi-fluid polymers, which become infusible and form an insoluble hard mass on heating due to cross-linking between polymer chains. Examples include Urea-Formaldehyde and Melamine-Formaldehyde resins.",
      properties: [
        "Low degree of polymerization: soft",
        "Excellent adhesive properties, used as bonding glue for laminated wooden planks and in varnishes and lacquers",
        "High degree of polymerization: hard, rigid, scratch-resistant, and infusible",
        "Resistant to non-oxidizing acids, salts, and many organic solvents",
        "Withstands high temperatures",
        "Excellent electrical insulators"
      ],
      uses: [
        "Moulded articles such as radio/TV parts, combs, fountain pens, barrels, phonograph records",
        "Decorative laminates, wall coverings",
        "Electrical goods such as switches, plugs",
        "Impregnating fabrics, wood, and paper",
        "Bonding glue for laminated wooden planks and in varnishes and lacquers",
        "Sulphonated phenol-formaldehyde resins as ion-exchange resins"
      ],
      preparation: "Phenol and formaldehyde react in the presence of an acidic or basic catalyst, forming methylene bridges in ortho, para, or both positions. Initially, a linear polymer called Novolac forms, which then cross-links into a hard polymer called phenol-formaldehyde resin or Bakelite."
    },
    ureaFormaldehydeResin: {
      description: "Urea-formaldehyde is a non-transparent thermosetting resin made from urea and formaldehyde when heated in the presence of a mild base such as ammonia or pyridine. It is commonly used in adhesives, finishes, and molded objects. Urea-formaldehyde resin was first produced in 1884 by Hölzer and Bernhard Tollens.",
      productionSteps: {
        stageOne: "Urea is hydroxymethylolated by the addition of formaldehyde to the amino groups, leading to the formation of mono-, di-, and trimethylolureas.",
        stageTwo: "Condensation of methylolureas occurs under acidic conditions, forming methylene bridges between amino groups and creating low molecular weight polymers. The reactions lead to methylene ether linkages, splitting out formaldehyde and water."
      },
      uses: [
        "Adhesives for plywood, particleboard, and other wood products",
        "Molded objects"
      ],
      properties: [
        "Used mainly as adhesives",
        "Thermosetting plastic",
        "Formed from the combination of urea and formaldehyde"
      ]
    }
  };
  
  // theory.js
  export const AcidBase = {
    overview: `The pH test is used to determine whether a substance is acidic, basic, or neutral. This is done by using indicators that change color depending on the pH of the solution.`,
  
    generalProcedure: [
      "Take a small amount of the solution in a test tube.",
      "Add a few drops of an indicator (like litmus, phenolphthalein, or methyl orange).",
      "Observe the color change.",
      "Compare the color with the standard pH scale to determine the nature of the solution."
    ],
  
    analysisGroups: [
      {
        group: "Litmus Paper Test",
        reagent: "Blue or Red Litmus Paper",
        cations: [
          {
            name: "Acidic Solution",
            precipitate: "Turns blue litmus red",
            confirmatoryTest: "Confirms presence of H⁺ ions"
          },
          {
            name: "Basic Solution",
            precipitate: "Turns red litmus blue",
            confirmatoryTest: "Confirms presence of OH⁻ ions"
          }
        ]
      },
      {
        group: "Phenolphthalein Test",
        reagent: "Phenolphthalein",
        cations: [
          {
            name: "Acidic/Neutral Solution",
            precipitate: "Remains colorless",
            confirmatoryTest: "No OH⁻ ions present"
          },
          {
            name: "Basic Solution",
            precipitate: "Turns pink",
            confirmatoryTest: "Confirms presence of OH⁻ ions"
          }
        ]
      },
      {
        group: "Methyl Orange Test",
        reagent: "Methyl Orange",
        cations: [
          {
            name: "Acidic Solution",
            precipitate: "Turns red",
            confirmatoryTest: "Confirms acidic nature"
          },
          {
            name: "Basic Solution",
            precipitate: "Turns yellow",
            confirmatoryTest: "Confirms basic nature"
          }
        ]
      }
    ]
    
  };
 // theory.js
export const BalloonElectricity = {
  overview: `Balloon electricity demonstrates static electricity, which occurs when certain materials are rubbed together, causing electrons to transfer and build up an electric charge.`,

  generalProcedure: [
    "Take an inflated balloon.",
    "Rub the balloon against a wool cloth or your hair for a few seconds.",
    "Slowly move the balloon near small pieces of paper or a wall.",
    "Observe any movement or attraction caused by static charge."
  ],

  analysisGroups: [
    {
      group: "Electron Transfer",
      reagent: "Friction (balloon + hair or wool)",
      observations: [
        {
          name: "Balloon gains electrons",
          effect: "Becomes negatively charged",
          confirmatoryTest: "Can attract neutral or positively charged objects"
        },
        {
          name: "Hair loses electrons",
          effect: "Becomes positively charged",
          confirmatoryTest: "Hair strands repel each other and stand up"
        }
      ]
    },
    {
      group: "Attraction to Objects",
      reagent: "Charged Balloon",
      observations: [
        {
          name: "Neutral Objects",
          effect: "Small paper bits get attracted",
          confirmatoryTest: "Shows induced charge effect"
        },
        {
          name: "Wall",
          effect: "Balloon sticks temporarily",
          confirmatoryTest: "Demonstrates electrostatic attraction"
        }
      ]
    },
    {
      group: "Repulsion",
      reagent: "Two charged balloons",
      observations: [
        {
          name: "Both negatively charged",
          effect: "They repel each other",
          confirmatoryTest: "Shows like charges repel"
        }
      ]
    }
  ]
};

export const MolarityTheory = {
  overview: `Molarity (M) is defined as the number of moles of solute dissolved in one liter of solution. It is one of the most commonly used units to express concentration in chemistry.`,

  formula: `M = n / V`,
  explanation: `Where M = Molarity, n = number of moles of solute, V = volume of solution in liters`,

  generalProcedure: [
    "Weigh the required amount of solute using a balance.",
    "Dissolve the solute in a small amount of distilled water in a beaker.",
    "Transfer the solution to a volumetric flask.",
    "Add more distilled water to make the volume up to the mark.",
    "Mix the solution thoroughly."
  ],

  examples: [
    {
      problem: "Calculate the molarity of 5.8 grams of NaCl dissolved in 500 mL of solution.",
      solution: [
        "Molecular weight of NaCl = 58.5 g/mol",
        "Number of moles (n) = 5.8 / 58.5 = 0.1 mol",
        "Volume (V) = 500 mL = 0.5 L",
        "Molarity (M) = n / V = 0.1 / 0.5 = 0.2 M"
      ]
    }
  ]
};
export const DensityTheory = {
  overview: `Density is a physical property that tells us how much mass is contained in a given volume of a substance. It helps us understand how compact or heavy a material is.`,

  formula: `Density (ρ) = Mass (m) / Volume (V)`,

  explanation: `Where ρ (rho) is density, m is mass, and V is volume.`,

  generalProcedure: [
    "Measure the mass of the object accurately using a balance.",
    "Measure the volume of the object:",
    "  • For regular-shaped objects, calculate volume using formulas (like length × width × height).",
    "  • For irregular-shaped objects, use the water displacement method.",
    "    Note: Metals and many solids sink in water during displacement, so the volume of water displaced equals the volume of the object.",
    "Calculate the density using the formula: Density = Mass / Volume."
  ],

  examples: [
    {
      problem: "Calculate the density of an object with mass 200 grams and volume 50 cubic centimeters (cm³).",
      solution: [
        "Mass (m) = 200 g",
        "Volume (V) = 50 cm³",
        "Density (ρ) = Mass / Volume = 200 / 50 = 4 g/cm³"
      ]
    }
  ]
};
export const EnergyForms = {
  overview: `Energy is the capacity to do work. It exists in various forms and can be transformed from one form to another but cannot be created or destroyed (Law of Conservation of Energy).`,

  commonForms: [
    "Kinetic Energy — energy of motion.",
    "Potential Energy — stored energy due to position or configuration.",
    "Thermal Energy — energy related to temperature and heat.",
    "Chemical Energy — energy stored in chemical bonds.",
    "Electrical Energy — energy from electric charges.",
    "Nuclear Energy — energy stored in the nucleus of atoms.",
    "Radiant Energy — energy carried by light and electromagnetic waves."
  ],

  energyChanges: [
    "Energy can change from one form to another, e.g., chemical energy in food converts to kinetic energy when we move.",
    "In a hydroelectric plant, potential energy of water changes to kinetic energy and then electrical energy.",
    "When you rub your hands, mechanical energy changes into thermal energy (heat).",
    "Energy transformations always involve some loss as heat due to friction or resistance."
  ],

  lawOfConservation: `Energy can neither be created nor destroyed; it can only be converted from one form to another. The total energy of an isolated system remains constant.`
};
export const ConcentrationTheory = {
  overview: `Concentration refers to the amount of a substance (solute) present in a certain volume of solution. It indicates how diluted or concentrated a solution is.`,

  commonUnits: [
    "Molarity (M) — moles of solute per liter of solution.",
    "Molality (m) — moles of solute per kilogram of solvent.",
    "Percentage Concentration — grams of solute per 100 ml of solution.",
    "Mass per Volume — grams of solute per liter of solution."
  ],

  formula: `Molarity (M) = Number of moles of solute / Volume of solution in liters`,

  procedure: [
    "Measure the volume of the solution accurately using a volumetric flask.",
    "Weigh the amount of solute used to prepare the solution.",
    "Calculate the number of moles of solute using its molar mass.",
    "Calculate the concentration using the formula for molarity or other relevant units.",
    "For dilute solutions, ensure the solute is completely dissolved."
  ],

  examples: [
    {
      problem: "Calculate the molarity of a solution prepared by dissolving 10 grams of NaCl in 500 ml of solution.",
      solution: [
        "Molar mass of NaCl = 58.44 g/mol",
        "Moles of NaCl = 10 / 58.44 = 0.171 mol",
        "Volume of solution = 500 ml = 0.5 L",
        "Molarity = 0.171 / 0.5 = 0.342 M"
      ]
    }
  ]
};
export const pHTheory = {
  overview: `pH stands for 'potential of hydrogen' and is a scale used to specify the acidity or basicity of an aqueous solution. It tells us how acidic or alkaline a solution is.`,

  scaleDescription: `The pH scale ranges from 0 to 14:
  - pH < 7: Acidic solution
  - pH = 7: Neutral solution
  - pH > 7: Basic (alkaline) solution`,

  formula: `pH = -log[H⁺]`,

  procedure: [
    "Take a small amount of the solution in a test tube.",
    "Add a few drops of a suitable indicator like litmus, phenolphthalein, or universal indicator.",
    "Observe the color change of the solution.",
    "Compare the color with a standard pH scale/chart.",
    "Determine the pH value based on the indicator's color."
  ],

  indicators: [
    { indicator: "Litmus", acidic: "Red", basic: "Blue", neutral: "Purple" },
    { indicator: "Phenolphthalein", acidic: "Colorless", basic: "Pink", neutral: "Colorless" },
    { indicator: "Methyl Orange", acidic: "Red", basic: "Yellow", neutral: "Orange" }
  ],

  example: {
    problem: "A solution turns blue litmus red and has a high concentration of H⁺ ions. What is its pH range?",
    solution: "Since it turns blue litmus red, the solution is acidic. Its pH is less than 7."
  }
};
export const ElectrolysisTheory = {
  overview: `Electrolysis is a chemical process that uses electric current to drive a non-spontaneous chemical reaction. It is commonly used to decompose compounds and extract elements.`,

  definition: `Electrolysis is the process of passing an electric current through an electrolyte to cause a chemical change.`,

  basicSetup: [
    "A DC power supply is connected to two electrodes.",
    "The electrodes are placed in an electrolyte (a solution or molten substance that conducts electricity).",
    "The positive electrode is called the anode, and the negative electrode is called the cathode.",
    "Ions in the electrolyte migrate to the electrodes and undergo chemical changes."
  ],

  example: {
    title: "Electrolysis of Water",
    steps: [
      "Water contains small amounts of ions (H⁺ and OH⁻).",
      "When electricity is passed, hydrogen gas forms at the cathode and oxygen gas forms at the anode.",
      "Overall reaction: 2H₂O → 2H₂ + O₂"
    ]
  },

  reactions: [
    { location: "Cathode (–)", reaction: "2H⁺ + 2e⁻ → H₂ (gas)", type: "Reduction" },
    { location: "Anode (+)", reaction: "2OH⁻ → O₂ (gas) + 2H⁺ + 2e⁻", type: "Oxidation" }
  ],

  applications: [
    "Extraction of metals like aluminum and sodium.",
    "Electroplating objects with metals like silver or gold.",
    "Purification of metals like copper.",
    "Production of chlorine, hydrogen, and oxygen gases."
  ]
};
export const WaveOnStringTheory = {
  overview: `A wave on a string is a type of mechanical wave where the disturbance travels along a taut string. These waves can be transverse in nature, meaning the displacement of the string is perpendicular to the direction of the wave's motion.`,

  types: [
    "Transverse waves – the particles move perpendicular to the direction of wave propagation.",
    "Standing waves – formed due to the interference of two waves traveling in opposite directions with the same amplitude and frequency."
  ],

  keyTerms: {
    wavelength: "The distance between two consecutive crests or troughs.",
    frequency: "Number of wave cycles per second (measured in Hz).",
    amplitude: "Maximum displacement from the mean position.",
    waveSpeed: "Speed at which the wave travels through the medium.",
    tension: "Force that keeps the string taut and affects wave speed.",
  },

  formula: `v = √(T/μ)`,
  formulaExplanation: `Where:
  - v is the wave speed (m/s),
  - T is the tension in the string (N),
  - μ is the linear mass density (kg/m)`,

  experimentSteps: [
    "Fix one end of the string and attach the other end to a mechanical oscillator.",
    "Adjust the tension using weights or pulleys.",
    "Turn on the oscillator to generate waves.",
    "Observe the formation of nodes and antinodes if a standing wave is formed.",
    "Measure wavelength and frequency to calculate wave speed."
  ],

  applications: [
    "Musical instruments like guitars and violins.",
    "Communication systems using wave mechanics.",
    "Physics experiments to study resonance and harmonics."
  ]
};

export const springTheory = {
  description: "Spring mechanics describe how elastic materials return to their original shape after being stretched or compressed. This experiment demonstrates Hooke’s Law, where the force needed to extend or compress a spring is proportional to the distance stretched or compressed.",
  laws: [
    {
      lawName: "Hooke’s Law",
      description: "The force exerted by a spring is directly proportional to its displacement from the equilibrium position, but in the opposite direction.",
      formula: "F = -k * x"
    },
    {
      lawName: "Elastic Potential Energy",
      description: "Energy stored in a spring when it is compressed or stretched is proportional to the square of its displacement.",
      formula: "U = 1/2 * k * x^2"
    }
  ],
  properties: [
    "Restoring Force: The spring always tries to return to its original length.",
    "Linear Proportionality: Force and displacement are linearly related for small deformations.",
    "Dependent on Spring Constant: Stiffness varies based on material and structure.",
  ],
  uses: [
    "Physics Labs: Demonstrates fundamental forces and oscillations.",
    "Measuring Devices: Used in spring balances and force sensors.",
    "Automotive Systems: Shock absorbers and suspension systems.",
    "Toys & Tools: Found in pens, trampolines, and clamps.",
  ],
  applications: [
    "Mechanical Clocks: Energy storage and release through spring coils.",
    "Vehicle Suspension: Absorbing shock and maintaining stability.",
    "Vibration Control: Industrial machines and earthquake-proof structures.",
    "Biomechanics: Studying tendons and ligaments as biological springs.",
    "Space Tech: Deploying instruments using stored elastic energy.",
  ],
  futureResearch: "Advanced materials like shape-memory alloys and nano-springs could revolutionize robotics, biomedical implants, and smart adaptive systems."
};
export const stateMatterTheory = {
  description:
    "Matter exists in different states based on particle arrangement and energy. The most common states are solid, liquid, and gas. This theory explains how particles behave in each state and how transitions occur between them (melting, boiling, condensation, etc.).",
  laws: [
    {
      lawName: "Kinetic Theory of Matter",
      description:
        "All matter is made up of tiny particles that are in constant motion. The amount of motion depends on the energy and the state of the matter.",
      formula: "KE ∝ Temperature",
    },
    {
      lawName: "Change of State",
      description:
        "Changes in temperature or pressure can change the state of matter by altering the energy of its particles.",
      formula: "Heat = mass × latent heat (Q = m × L)",
    },
  ],
  properties: [
    "Solids: Fixed shape and volume, tightly packed particles.",
    "Liquids: Fixed volume but take the shape of the container, particles can slide over one another.",
    "Gases: No fixed shape or volume, particles move freely and are widely spaced.",
  ],
  uses: [
    "Cooking: Understanding boiling, freezing, and melting points.",
    "Industrial Processes: Liquefaction of gases, separation via distillation.",
    "Cryogenics: Study of materials at extremely low temperatures.",
    "Weather Forecasting: Understanding cloud formation, condensation, and humidity.",
  ],
  applications: [
    "Refrigeration and Air Conditioning: Based on the liquefaction and evaporation of gases.",
    "Pharmaceuticals: Creating drugs in solid, liquid, or gaseous forms.",
    "Material Science: Research into plasma and Bose-Einstein condensates.",
    "Food Preservation: Using freezing or sublimation (freeze-drying).",
  ],
  futureResearch:
    "Advancing research in exotic states like plasma, Bose-Einstein condensates, and quantum fluids can open doors to futuristic technologies in energy, computing, and materials."
};
export const hookeLawTheory = {
  description:
    "Hooke’s Law describes the behavior of springs and other elastic objects. It states that the force required to extend or compress a spring is directly proportional to the distance it is stretched or compressed, as long as the elastic limit is not exceeded.",
  laws: [
    {
      lawName: "Hooke’s Law",
      description:
        "The restoring force exerted by an elastic object is directly proportional to its displacement from the equilibrium position.",
      formula: "F = -k * x",
    },
    {
      lawName: "Elastic Potential Energy",
      description:
        "The energy stored in a spring when it is stretched or compressed is proportional to the square of its displacement.",
      formula: "U = 1/2 * k * x²",
    },
  ],
  properties: [
    "Proportional Relationship: Force and displacement are linearly related.",
    "Spring Constant (k): Indicates stiffness of the spring.",
    "Elastic Limit: Beyond a certain point, the object will not return to its original shape.",
  ],
  uses: [
    "Measuring Devices: Spring balance, force meters.",
    "Engineering: Shock absorbers, bridges, mechanical systems.",
    "Medical Devices: Prosthetics, orthopedic supports.",
    "Everyday Tools: Clips, pens, door springs.",
  ],
  applications: [
    "Automotive Industry: Suspension systems and crash impact management.",
    "Robotics: Designing flexible and reactive joints.",
    "Architecture: Earthquake-resistant structures using dampers.",
    "Sports Equipment: Rackets, bows, and gym machines.",
  ],
  futureResearch:
    "Advances in nano-springs and smart materials can enhance biomedical engineering, wearable tech, and responsive robotics."
};

export const balanceActTheory = {
  description:
    "The Balancing Act explores how objects remain in equilibrium under various forces. It involves understanding torque, center of mass, and the conditions required for an object to balance or tip over. It’s a fundamental part of physics in mechanics and engineering.",
  laws: [
    {
      lawName: "Principle of Moments (Torque Equilibrium)",
      description:
        "For an object to be in rotational equilibrium, the sum of clockwise moments about any pivot must equal the sum of counterclockwise moments.",
      formula: "Στ = 0  ⇒  F₁×d₁ = F₂×d₂",
    },
    {
      lawName: "Center of Mass",
      description:
        "The center of mass is the point where the mass of an object is concentrated and balanced in all directions.",
      formula: "X_cm = Σ(mx) / Σm",
    },
  ],
  properties: [
    "Balanced Torque: When the torques on both sides of a pivot are equal, balance is achieved.",
    "Pivot Point: The point around which rotation or balancing occurs.",
    "Stable, Unstable, and Neutral Equilibrium: Based on the center of mass position.",
  ],
  uses: [
    "Seesaws and Scales: Balance based on equal moments.",
    "Bridge Design: Ensuring balanced load distribution.",
    "Mobile Structures: Art installations and mechanical arms.",
    "Robotics: Designing self-balancing systems.",
  ],
  applications: [
    "Civil Engineering: Designing cranes, bridges, and support structures.",
    "Biomechanics: Understanding body posture and balance in humans.",
    "Robotics: Self-balancing robots and drones.",
    "Sports Science: Training for balance and posture control.",
  ],
  futureResearch:
    "Research in dynamic balancing and smart structures can improve robotics, prosthetics, and adaptive architecture."
};

export const forceTheory = {
  description:
    "Force is a physical quantity that causes an object to undergo a change in motion, direction, or shape. It can be a push or pull and is a vector quantity, meaning it has both magnitude and direction.",
  laws: [
    {
      lawName: "Newton’s First Law (Law of Inertia)",
      description:
        "An object remains at rest or in uniform motion unless acted upon by a net external force.",
      formula: "∑F = 0 when motion is constant",
    },
    {
      lawName: "Newton’s Second Law",
      description:
        "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.",
      formula: "F = m × a",
    },
    {
      lawName: "Newton’s Third Law",
      description:
        "For every action, there is an equal and opposite reaction.",
      formula: "F₁ = -F₂",
    },
  ],
  properties: [
    "Vector Quantity: Has both magnitude and direction.",
    "Can Change Motion: Starts, stops, or alters motion of an object.",
    "Measured in Newtons (N): 1 N = 1 kg·m/s².",
  ],
  uses: [
    "Transport: Understanding braking, acceleration, and collisions.",
    "Engineering: Designing machines and structures.",
    "Sports: Explains jumping, running, hitting, and throwing.",
    "Daily Life: Opening doors, lifting objects, riding bicycles.",
  ],
  applications: [
    "Vehicle Design: Calculating force needed for safety and performance.",
    "Aerospace: Launching and landing spacecraft.",
    "Robotics: Controlling movements and interaction with environments.",
    "Structural Engineering: Calculating load-bearing capabilities.",
  ],
  futureResearch:
    "Advanced force modeling can improve AI-controlled motion, space missions, and materials that adapt to forces (e.g., smart fabrics, active damping systems)."
};

export const glassSlabTheory = {
  description:
    "When light passes through a glass slab (rectangular transparent block), it undergoes refraction. The ray bends at the air-glass interface and again at the glass-air interface, resulting in a lateral displacement without changing direction.",
  laws: [
    {
      lawName: "Law of Refraction (Snell’s Law)",
      description:
        "The ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant for a given pair of media.",
      formula: "n₁ sinθ₁ = n₂ sinθ₂",
    },
    {
      lawName: "Lateral Displacement",
      description:
        "The perpendicular distance between the incident ray and the emergent ray after refraction through a slab is called lateral displacement.",
      formula: "d = t × sin(i - r) / cos(r)",
    },
  ],
  properties: [
    "Emergent Ray: Emerges parallel to incident ray, but shifted laterally.",
    "No Deviation in Direction: Though the ray bends, it eventually travels in the same direction.",
    "Depends on Thickness & Angle: Displacement increases with slab thickness and angle of incidence.",
  ],
  uses: [
    "Optical Instruments: In prisms and scientific lenses.",
    "Laser Alignment: Glass slabs used for precise beam shifting.",
    "Scientific Experiments: To study refraction, dispersion, and light path.",
  ],
  applications: [
    "Physics Labs: For demonstrating light behavior through media.",
    "Optics Manufacturing: In designing refractive elements.",
    "Fiber Optics: Core concepts used in light transmission through fibers.",
    "Augmented Reality Glasses: Rely on precise refraction control.",
  ],
  futureResearch:
    "Exploration into metamaterials and smart glass could offer advanced light control, improving imaging systems and photonic computing."
};
export const resistanceTheory = {
  description:
    "Resistance is a property of a material that opposes the flow of electric current. It converts electrical energy into heat and plays a crucial role in controlling current in electrical circuits.",
  laws: [
    {
      lawName: "Ohm’s Law",
      description:
        "The current through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance.",
      formula: "V = I × R",
    },
    {
      lawName: "Resistivity Equation",
      description:
        "Resistance of a conductor is directly proportional to its length and inversely proportional to its cross-sectional area.",
      formula: "R = ρ × (L / A)",
    },
  ],
  properties: [
    "Unit: Resistance is measured in Ohms (Ω).",
    "Depends on Material: Conductors have low resistance; insulators have high resistance.",
    "Temperature Effect: Resistance generally increases with temperature in conductors.",
  ],
  uses: [
    "Current Control: Used in circuits to limit or adjust current flow.",
    "Heating Elements: Convert electricity into heat in toasters, irons, etc.",
    "Sensors: Resistance changes used in thermistors, strain gauges.",
    "LED Protection: Used with LEDs to prevent burning due to excess current.",
  ],
  applications: [
    "Electronics: Designing circuit boards and devices.",
    "Power Systems: Managing energy transmission and distribution.",
    "Automotive: Controlling electrical flow in cars and EVs.",
    "Medical Devices: Used in ECG, EEG sensors, and electronic prosthetics.",
  ],
  futureResearch:
    "Advancements in nano-resistors, superconductors, and materials with tunable resistance can revolutionize electronics, quantum computing, and medical diagnostics."
};

export const convexConcaveTheory = {
  description:
    "Convex and concave lenses and mirrors are optical devices that refract or reflect light to form images. Their behavior depends on the curvature of their surfaces and how they interact with light rays.",
  laws: [
    {
      lawName: "Refraction Law (Snell's Law)",
      description:
        "Light bends when it passes from one medium to another, based on the refractive index.",
      formula: "n₁ sinθ₁ = n₂ sinθ₂",
    },
    {
      lawName: "Mirror Formula",
      description:
        "Relates object distance (u), image distance (v), and focal length (f) of spherical mirrors.",
      formula: "1/f = 1/v + 1/u",
    },
    {
      lawName: "Lens Formula",
      description:
        "Relates object distance (u), image distance (v), and focal length (f) of lenses.",
      formula: "1/f = 1/v - 1/u",
    },
  ],
  properties: [
    "Convex Lens: Converging lens that brings parallel rays to a focus.",
    "Concave Lens: Diverging lens that spreads rays outward.",
    "Convex Mirror: Diverging mirror with a wider field of view.",
    "Concave Mirror: Converging mirror that forms real/inverted images.",
  ],
  uses: [
    "Convex Lens: Used in magnifying glasses, cameras, and eye lenses.",
    "Concave Lens: Used in spectacles for short-sightedness.",
    "Concave Mirror: Used in headlights and shaving mirrors.",
    "Convex Mirror: Used in vehicle side mirrors for wide view.",
  ],
  applications: [
    "Optical Instruments: Microscopes, telescopes, and projectors.",
    "Vision Correction: Lenses for myopia and hypermetropia.",
    "Surveillance: Convex mirrors in hallways and shops.",
    "Lighting Systems: Concave mirrors in solar cookers and torches.",
  ],
  futureResearch:
    "Advances in adaptive optics and smart lenses could lead to intelligent vision devices, improved telescopic imaging, and advanced holography.",
};
